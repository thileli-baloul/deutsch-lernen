/* ===== Spaced Repetition System (SM-2 Based) ===== */
const SRS = {
  PROGRESS_KEY: 'dl_progress',

  // ===== Core Data Access =====
  getProgress() {
    try {
      const data = localStorage.getItem(this.PROGRESS_KEY);
      if (data) {
        return JSON.parse(data);
      }
    } catch (e) {
      console.error('Error loading progress:', e);
    }
    return this._defaultProgress();
  },

  _defaultProgress() {
    return {
      words: {},
      streak: { current: 0, longest: 0, lastDate: null },
      totalXP: 0,
      totalSessions: 0,
      totalCorrect: 0,
      totalIncorrect: 0,
      wordsToday: 0,
      todayDate: null,
      dailyLog: {}
    };
  },

  saveProgress(progress) {
    try {
      localStorage.setItem(this.PROGRESS_KEY, JSON.stringify(progress));
    } catch (e) {
      console.error('Error saving progress:', e);
    }
  },

  // ===== SM-2 Algorithm =====
  calculateNextReview(item, quality) {
    let { easeFactor, interval, repetitions } = item;

    if (quality >= 3) {
      // Correct
      if (repetitions === 0) {
        interval = 1;  // 1 day
      } else if (repetitions === 1) {
        interval = 3;  // 3 days
      } else {
        interval = Math.round(interval * easeFactor);
      }
      repetitions++;
    } else {
      // Incorrect - reset
      repetitions = 0;
      interval = 0; // review again soon
    }

    // Update ease factor
    easeFactor = easeFactor + (0.1 - (5 - quality) * (0.08 + (5 - quality) * 0.02));
    if (easeFactor < 1.3) easeFactor = 1.3;
    if (easeFactor > 3.0) easeFactor = 3.0;

    return { easeFactor, interval, repetitions };
  },

  // ===== Record Results =====
  recordResult(wordId, quality, mode) {
    const progress = this.getProgress();
    const now = Date.now();
    const today = new Date().toISOString().split('T')[0];

    // Reset daily counter if new day
    if (progress.todayDate !== today) {
      progress.wordsToday = 0;
      progress.todayDate = today;
    }

    // Get or create word entry
    let item = progress.words[wordId];
    if (!item) {
      item = {
        wordId: wordId,
        easeFactor: 2.5,
        interval: 0,
        repetitions: 0,
        nextReview: now,
        lastReview: null,
        status: 'new',
        correctCount: 0,
        incorrectCount: 0
      };
    }

    // Update counts
    if (quality >= 3) {
      item.correctCount++;
      progress.totalCorrect = (progress.totalCorrect || 0) + 1;
    } else {
      item.incorrectCount++;
      progress.totalIncorrect = (progress.totalIncorrect || 0) + 1;
    }

    // Calculate SM-2
    const result = this.calculateNextReview(item, quality);
    item.easeFactor = result.easeFactor;
    item.interval = result.interval;
    item.repetitions = result.repetitions;
    item.lastReview = now;
    item.nextReview = now + (item.interval * 24 * 60 * 60 * 1000);

    // Update status
    if (item.status === 'new' && quality >= 3) {
      item.status = 'learning';
      progress.wordsToday++;
    }
    
    if (quality >= 3) {
      if (item.repetitions >= 5 && item.interval >= 21) {
        item.status = 'mastered';
      } else if (item.status === 'new') {
        item.status = 'learning';
      } else {
        item.status = 'review';
      }
    } else {
      if (item.status !== 'new') {
        item.status = 'learning';
      }
    }

    progress.words[wordId] = item;

    // Daily log
    if (!progress.dailyLog) progress.dailyLog = {};
    progress.dailyLog[today] = (progress.dailyLog[today] || 0) + 1;

    this.saveProgress(progress);
    return item;
  },

  // ===== Due Items =====
  getAllDueItems() {
    const progress = this.getProgress();
    const now = Date.now();
    const dueItems = [];

    if (!progress.words) return dueItems;

    for (const wordId of Object.keys(progress.words)) {
      const item = progress.words[wordId];
      if (item.status === 'learning' || item.status === 'review') {
        if (item.nextReview <= now) {
          dueItems.push(item);
        }
      }
    }

    return dueItems;
  },

  getDueItems(courseId, levelId) {
    if (typeof APP_DATA === 'undefined') return [];

    const course = APP_DATA.courses.find(c => c.id === courseId);
    if (!course) return [];
    const level = course.levels.find(l => l.id === levelId);
    if (!level) return [];

    const levelWordIds = new Set(level.words.map(w => w.id));
    return this.getAllDueItems().filter(item => levelWordIds.has(item.wordId));
  },

  // ===== New Words =====
  getNewWords(courseId, levelId, count = 5) {
    if (typeof APP_DATA === 'undefined') return [];

    const course = APP_DATA.courses.find(c => c.id === courseId);
    if (!course) return [];
    const level = course.levels.find(l => l.id === levelId);
    if (!level) return [];

    const progress = this.getProgress();
    const newWords = [];

    for (const word of level.words) {
      if (!progress.words[word.id] || progress.words[word.id].status === 'new') {
        newWords.push(word);
        if (newWords.length >= count) break;
      }
    }

    return newWords;
  },

  // ===== Progress Queries =====
  getLevelProgress(courseId, levelId) {
    if (typeof APP_DATA === 'undefined') return { total: 0, learned: 0, mastered: 0 };

    const course = APP_DATA.courses.find(c => c.id === courseId);
    if (!course) return { total: 0, learned: 0, mastered: 0 };
    const level = course.levels.find(l => l.id === levelId);
    if (!level) return { total: 0, learned: 0, mastered: 0 };

    const progress = this.getProgress();
    let learned = 0;
    let mastered = 0;

    level.words.forEach(w => {
      const p = progress.words[w.id];
      if (p && p.status !== 'new') {
        learned++;
        if (p.status === 'mastered') mastered++;
      }
    });

    return { total: level.words.length, learned, mastered };
  },

  getCourseProgress(courseId) {
    if (typeof APP_DATA === 'undefined') return { total: 0, learned: 0 };

    const course = APP_DATA.courses.find(c => c.id === courseId);
    if (!course) return { total: 0, learned: 0 };

    let total = 0;
    let learned = 0;

    course.levels.forEach(level => {
      const lp = this.getLevelProgress(courseId, level.id);
      total += lp.total;
      learned += lp.learned;
    });

    return { total, learned };
  },

  // ===== Streak =====
  getStreak() {
    const progress = this.getProgress();
    return progress.streak || { current: 0, longest: 0, lastDate: null };
  },

  updateStreak() {
    const progress = this.getProgress();
    if (!progress.streak) {
      progress.streak = { current: 0, longest: 0, lastDate: null };
    }

    const today = new Date().toISOString().split('T')[0];
    const streak = progress.streak;

    if (streak.lastDate === today) {
      // Already updated today
      this.saveProgress(progress);
      return streak;
    }

    if (!streak.lastDate) {
      streak.current = 1;
    } else {
      const last = new Date(streak.lastDate);
      const now = new Date(today);
      const diffMs = now - last;
      const diffDays = Math.round(diffMs / (1000 * 60 * 60 * 24));

      if (diffDays === 1) {
        streak.current++;
      } else if (diffDays > 1) {
        streak.current = 1;
      }
    }

    streak.lastDate = today;
    if (streak.current > streak.longest) {
      streak.longest = streak.current;
    }

    progress.streak = streak;
    this.saveProgress(progress);
    return streak;
  },

  // ===== Overall Stats =====
  getOverallStats() {
    const progress = this.getProgress();
    let totalLearned = 0;
    let totalMastered = 0;

    if (progress.words) {
      for (const wordId of Object.keys(progress.words)) {
        const item = progress.words[wordId];
        if (item.status !== 'new') totalLearned++;
        if (item.status === 'mastered') totalMastered++;
      }
    }

    const today = new Date().toISOString().split('T')[0];
    const wordsToday = progress.todayDate === today ? (progress.wordsToday || 0) : 0;

    return {
      totalLearned,
      totalMastered,
      totalXP: progress.totalXP || 0,
      totalSessions: progress.totalSessions || 0,
      totalCorrect: progress.totalCorrect || 0,
      totalIncorrect: progress.totalIncorrect || 0,
      wordsToday,
      dueReviews: this.getAllDueItems().length
    };
  },

  // ===== Level Reset =====
  resetLevel(courseId, levelId) {
    if (typeof APP_DATA === 'undefined') return;

    const course = APP_DATA.courses.find(c => c.id === courseId);
    if (!course) return;
    const level = course.levels.find(l => l.id === levelId);
    if (!level) return;

    const progress = this.getProgress();
    level.words.forEach(w => {
      delete progress.words[w.id];
    });
    this.saveProgress(progress);
  },

  // ===== Export / Import =====
  exportProgress() {
    return JSON.stringify(this.getProgress(), null, 2);
  },

  importProgress(jsonString) {
    try {
      const data = JSON.parse(jsonString);
      if (data && typeof data === 'object') {
        // Validate basic structure
        if (!data.words) data.words = {};
        if (!data.streak) data.streak = { current: 0, longest: 0, lastDate: null };
        this.saveProgress(data);
        return true;
      }
      return false;
    } catch (e) {
      console.error('Import error:', e);
      return false;
    }
  }
};
