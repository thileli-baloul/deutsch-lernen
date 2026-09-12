/* ===== DeutschLernen - Main Application ===== */

const App = (() => {
  // ===== State =====
  let currentScreen = 'home';
  let currentCourse = null;
  let currentLevel = null;
  let learnQueue = [];
  let learnIndex = 0;
  let learnStep = 0; // 0=present, 1=mcq, 2=reverse, 3=typing, 4=listening, 5=match
  let learnMode = 'learn'; // 'learn', 'review', 'speed', 'listening'
  let sessionCorrect = 0;
  let sessionIncorrect = 0;
  let sessionXP = 0;
  let sessionResults = [];
  let hearts = 3;
  let speedTimer = null;
  let speedTimeLeft = 0;
  let speedScore = 0;
  let currentWord = null;
  let speedCurrentOptions = null; // Cache options for speed review
  let matchState = { selected: null, pairs: [], matched: 0 };
  let settings = {
    dailyGoal: 10,
    speedTime: 5,
    autoSpeak: true,
    speakRate: 0.8,
    theme: 'dark'
  };

  // ===== Initialize =====
  function init() {
    loadSettings();
    applyTheme();
    SRS.updateStreak();
    
    setTimeout(() => {
      const splash = document.getElementById('splash-screen');
      splash.classList.add('fade-out');
      setTimeout(() => {
        splash.style.display = 'none';
        document.getElementById('app').classList.remove('hidden');
        renderHome();
      }, 500);
    }, 1500);

    // Register service worker
    if ('serviceWorker' in navigator) {
      navigator.serviceWorker.register('./sw.js').catch(() => {});
    }

    // Keyboard handler for typing exercises
    document.getElementById('typing-input').addEventListener('keydown', (e) => {
      if (e.key === 'Enter') checkTyping();
    });
  }

  // ===== Settings =====
  function loadSettings() {
    try {
      const saved = localStorage.getItem('dl_settings');
      if (saved) settings = { ...settings, ...JSON.parse(saved) };
    } catch (e) {}
  }

  function saveSettings() {
    localStorage.setItem('dl_settings', JSON.stringify(settings));
  }

  function setDailyGoal(val) {
    settings.dailyGoal = val;
    saveSettings();
    document.querySelectorAll('#daily-goal-options .setting-opt').forEach(b => {
      b.classList.toggle('active', parseInt(b.dataset.goal) === val);
    });
    updateDailyProgress();
  }

  function setSpeedTime(val) {
    settings.speedTime = val;
    saveSettings();
    document.querySelectorAll('#speed-time-options .setting-opt').forEach(b => {
      b.classList.toggle('active', parseInt(b.dataset.speed) === val);
    });
  }

  function toggleAutoSpeak() {
    settings.autoSpeak = document.getElementById('auto-speak-toggle').checked;
    saveSettings();
  }

  function setSpeakRate(val) {
    settings.speakRate = parseFloat(val);
    saveSettings();
  }

  function setTheme(theme) {
    settings.theme = theme;
    saveSettings();
    applyTheme();
    document.querySelectorAll('#theme-options .setting-opt').forEach(b => {
      b.classList.toggle('active', b.dataset.theme === theme);
    });
  }

  function applyTheme() {
    if (settings.theme === 'light') {
      document.documentElement.setAttribute('data-theme', 'light');
    } else {
      document.documentElement.removeAttribute('data-theme');
    }
  }

  // ===== Navigation =====
  function showScreen(name) {
    document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
    document.getElementById(`screen-${name}`).classList.add('active');
    
    const nav = document.getElementById('bottom-nav');
    const hideNav = ['learn', 'speed', 'results'];
    nav.style.display = hideNav.includes(name) ? 'none' : 'flex';
    
    document.querySelectorAll('.nav-item').forEach(n => {
      n.classList.toggle('active', n.dataset.tab === name);
    });
    
    currentScreen = name;
  }

  function goHome() {
    showScreen('home');
    renderHome();
  }

  function showStats() {
    showScreen('stats');
    renderStats();
  }

  function showSettings() {
    showScreen('settings');
    renderSettingsState();
  }

  // ===== Render Home =====
  function renderHome() {
    const stats = SRS.getOverallStats();
    const streak = SRS.getStreak();
    
    // Update header
    document.getElementById('streak-count').textContent = streak.current;
    document.getElementById('xp-count').textContent = stats.totalXP;
    
    // Daily progress
    updateDailyProgress();
    
    // Review banner
    const dueItems = SRS.getAllDueItems();
    const reviewBanner = document.getElementById('review-banner');
    if (dueItems.length > 0) {
      reviewBanner.classList.remove('hidden');
      document.getElementById('review-count-text').textContent = `لديك ${dueItems.length} كلمات للمراجعة`;
    } else {
      reviewBanner.classList.add('hidden');
    }
    
    // Courses
    const coursesList = document.getElementById('courses-list');
    coursesList.innerHTML = '';
    
    APP_DATA.courses.forEach(course => {
      const progress = SRS.getCourseProgress(course.id);
      const totalWords = course.levels.reduce((sum, l) => sum + l.words.length, 0);
      const pct = totalWords > 0 ? Math.round((progress.learned / totalWords) * 100) : 0;
      
      const card = document.createElement('div');
      card.className = 'course-card';
      card.onclick = () => openCourse(course.id);
      card.innerHTML = `
        <div class="course-card-header">
          <div class="course-icon">${course.icon}</div>
          <div class="course-info">
            <div class="course-name">${course.title}</div>
            <div class="course-name-de">${course.titleDe}</div>
          </div>
        </div>
        <div class="course-desc">${course.description}</div>
        <div class="course-meta">
          <span class="course-level-tag">${course.level}</span>
          <span class="course-progress-info">${progress.learned}/${totalWords} كلمة</span>
        </div>
        <div class="course-card-progress">
          <div class="course-card-progress-fill" style="width: ${pct}%"></div>
        </div>
      `;
      coursesList.appendChild(card);
    });
  }

  function updateDailyProgress() {
    const stats = SRS.getOverallStats();
    const today = stats.wordsToday || 0;
    const goal = settings.dailyGoal;
    const pct = Math.min(100, Math.round((today / goal) * 100));
    
    document.getElementById('daily-progress-text').textContent = `${today}/${goal} كلمات`;
    document.getElementById('daily-progress-fill').style.width = `${pct}%`;
  }

  // ===== Course Screen =====
  function openCourse(courseId) {
    const course = APP_DATA.courses.find(c => c.id === courseId);
    if (!course) return;
    
    currentCourse = course;
    document.getElementById('course-title').textContent = course.title;
    document.getElementById('course-level-badge').textContent = course.level;
    
    const totalWords = course.levels.reduce((sum, l) => sum + l.words.length, 0);
    const progress = SRS.getCourseProgress(courseId);
    const pct = totalWords > 0 ? Math.round((progress.learned / totalWords) * 100) : 0;
    document.getElementById('course-progress-fill').style.width = `${pct}%`;
    
    const levelsList = document.getElementById('levels-list');
    levelsList.innerHTML = '';
    
    let previousCompleted = true;
    
    course.levels.forEach((level, idx) => {
      const levelProgress = SRS.getLevelProgress(courseId, level.id);
      const totalLevelWords = level.words.length;
      const learnedCount = levelProgress.learned;
      const masteredCount = levelProgress.mastered;
      const isCompleted = learnedCount >= totalLevelWords;
      const isLocked = !previousCompleted && idx > 0;
      const progressPct = totalLevelWords > 0 ? Math.round((learnedCount / totalLevelWords) * 100) : 0;
      
      const card = document.createElement('div');
      card.className = `level-card ${isCompleted ? 'completed' : ''} ${isLocked ? 'locked' : ''}`;
      card.onclick = () => {
        if (!isLocked) startLevel(courseId, level.id);
      };
      
      card.innerHTML = `
        <div class="level-icon-wrap ${isCompleted ? 'completed' : ''}">
          ${level.icon}
          ${isCompleted ? '<div class="level-check">✓</div>' : ''}
          ${isLocked ? '🔒' : ''}
        </div>
        <div class="level-info">
          <div class="level-name">${level.title}</div>
          <div class="level-name-de">${level.titleDe}</div>
          <div class="level-progress-mini">
            <div class="level-progress-bar">
              <div class="level-progress-fill" style="width: ${progressPct}%"></div>
            </div>
            <span class="level-progress-text">${learnedCount}/${totalLevelWords}</span>
          </div>
        </div>
        <div class="level-word-count">
          ${isLocked ? '' : `<span>${totalLevelWords} كلمة</span>`}
        </div>
      `;
      
      levelsList.appendChild(card);
      previousCompleted = isCompleted;
    });
    
    showScreen('course');
  }

  // ===== Learning Engine =====
  function startLevel(courseId, levelId) {
    const course = APP_DATA.courses.find(c => c.id === courseId);
    const level = course?.levels.find(l => l.id === levelId);
    if (!course || !level) return;
    
    currentCourse = course;
    currentLevel = level;
    learnMode = 'learn';
    
    // Get new words and words that need review
    const newWords = SRS.getNewWords(courseId, levelId, 5);
    const dueWords = SRS.getDueItems(courseId, levelId);
    
    // Build learning queue
    learnQueue = [];
    
    // Add new words with their learning sequence
    newWords.forEach(word => {
      learnQueue.push({ word, step: 'present' });
      learnQueue.push({ word, step: 'mcq' });
      learnQueue.push({ word, step: 'reverse-mcq' });
      learnQueue.push({ word, step: 'typing' });
    });
    
    // Add due review words (convert SRS items to word data)
    dueWords.forEach(srsItem => {
      const word = findWordById(srsItem.wordId);
      if (word) {
        learnQueue.push({ word, step: 'mcq' });
        if (Math.random() > 0.5) {
          learnQueue.push({ word, step: 'typing' });
        } else {
          learnQueue.push({ word, step: 'reverse-mcq' });
        }
      }
    });
    
    // If nothing to learn
    if (learnQueue.length === 0) {
      // Add all words for review
      level.words.forEach(word => {
        learnQueue.push({ word, step: 'mcq' });
      });
      if (learnQueue.length === 0) {
        showToast('لا توجد كلمات للتعلم حالياً');
        return;
      }
    }
    
    // Shuffle review items (keep present items first)
    const presents = learnQueue.filter(q => q.step === 'present');
    const exercises = learnQueue.filter(q => q.step !== 'present');
    
    // Build interleaved queue: present word, then its exercises
    learnQueue = [];
    const processedWords = new Set();
    
    presents.forEach(p => {
      learnQueue.push(p);
      const wordExercises = exercises.filter(e => e.word.id === p.word.id);
      wordExercises.forEach(e => learnQueue.push(e));
      processedWords.add(p.word.id);
    });
    
    // Add remaining exercises (review words)
    const remainingExercises = exercises.filter(e => !processedWords.has(e.word.id));
    shuffleArray(remainingExercises);
    learnQueue.push(...remainingExercises);
    
    // Reset session
    learnIndex = 0;
    sessionCorrect = 0;
    sessionIncorrect = 0;
    sessionXP = 0;
    sessionResults = [];
    hearts = 3;
    
    showScreen('learn');
    updateLearnProgress();
    showLearnStep();
  }

  function startReviewAll() {
    const dueItems = SRS.getAllDueItems();
    if (dueItems.length === 0) {
      showToast('لا توجد كلمات للمراجعة الآن');
      return;
    }
    
    currentCourse = null;
    currentLevel = null;
    learnMode = 'review';
    
    // Limit to 20 items per session
    const items = dueItems.slice(0, 20);
    learnQueue = [];
    
    items.forEach(item => {
      const wordData = findWordById(item.wordId);
      if (wordData) {
        const rand = Math.random();
        if (rand < 0.4) {
          learnQueue.push({ word: wordData, step: 'mcq' });
        } else if (rand < 0.7) {
          learnQueue.push({ word: wordData, step: 'reverse-mcq' });
        } else {
          learnQueue.push({ word: wordData, step: 'typing' });
        }
      }
    });
    
    shuffleArray(learnQueue);
    
    learnIndex = 0;
    sessionCorrect = 0;
    sessionIncorrect = 0;
    sessionXP = 0;
    sessionResults = [];
    hearts = 3;
    
    showScreen('learn');
    updateLearnProgress();
    showLearnStep();
  }

  function startQuickLearn() {
    // Find the next available level to learn
    for (const course of APP_DATA.courses) {
      for (const level of course.levels) {
        const newWords = SRS.getNewWords(course.id, level.id, 5);
        if (newWords.length > 0) {
          startLevel(course.id, level.id);
          return;
        }
      }
    }
    // If no new words, start review
    startReviewAll();
  }

  function startListening() {
    if (!('speechSynthesis' in window)) {
      showToast('النطق غير متاح في هذا المتصفح');
      return;
    }
    
    // Get learned words for listening practice
    const progress = SRS.getProgress();
    const learnedWordIds = Object.keys(progress.words).filter(
      id => progress.words[id].status !== 'new'
    );
    
    if (learnedWordIds.length < 4) {
      showToast('تعلم المزيد من الكلمات أولاً');
      return;
    }
    
    learnMode = 'listening';
    currentCourse = null;
    currentLevel = null;
    
    const words = learnedWordIds.map(id => findWordById(id)).filter(Boolean);
    shuffleArray(words);
    const selected = words.slice(0, Math.min(10, words.length));
    
    learnQueue = selected.map(word => ({ word, step: 'listening' }));
    
    learnIndex = 0;
    sessionCorrect = 0;
    sessionIncorrect = 0;
    sessionXP = 0;
    sessionResults = [];
    hearts = 3;
    
    showScreen('learn');
    updateLearnProgress();
    showLearnStep();
  }

  function showLearnStep() {
    if (learnIndex >= learnQueue.length) {
      showResults();
      return;
    }
    
    if (hearts <= 0) {
      showResults();
      return;
    }
    
    const item = learnQueue[learnIndex];
    currentWord = item.word;
    
    // Hide all steps
    document.querySelectorAll('.learn-step').forEach(s => s.classList.add('hidden'));
    
    switch (item.step) {
      case 'present':
        showPresent(item.word);
        break;
      case 'mcq':
        showMCQ(item.word);
        break;
      case 'reverse-mcq':
        showReverseMCQ(item.word);
        break;
      case 'typing':
        showTyping(item.word);
        break;
      case 'listening':
        showListeningExercise(item.word);
        break;
      case 'match':
        showMatchPairs();
        break;
    }
    
    updateLearnProgress();
  }

  function updateLearnProgress() {
    const total = learnQueue.length;
    const current = learnIndex;
    const pct = total > 0 ? Math.round((current / total) * 100) : 0;
    
    document.getElementById('learn-progress-fill').style.width = `${pct}%`;
    document.getElementById('learn-progress-text').textContent = `${current}/${total}`;
    
    // Update hearts
    const heartsEl = document.getElementById('learn-hearts');
    heartsEl.innerHTML = '';
    for (let i = 0; i < 3; i++) {
      const span = document.createElement('span');
      span.textContent = '❤️';
      if (i >= hearts) span.classList.add('lost');
      heartsEl.appendChild(span);
    }
  }

  // ===== Present New Word =====
  function showPresent(word) {
    const step = document.getElementById('learn-present');
    step.classList.remove('hidden');
    
    document.getElementById('present-emoji').textContent = getWordEmoji(word);
    document.getElementById('present-word-de').textContent = word.de;
    document.getElementById('present-word-ar').textContent = word.ar;
    
    // Gender
    const genderEl = document.getElementById('present-gender');
    if (word.gender) {
      const genderMap = { m: 'مذكر (der)', f: 'مؤنث (die)', n: 'محايد (das)' };
      genderEl.textContent = genderMap[word.gender] || '';
    } else {
      genderEl.textContent = '';
    }
    
    // Example
    document.getElementById('present-example-de').textContent = word.example || '';
    document.getElementById('present-example-ar').textContent = word.exampleAr || '';
    
    if (settings.autoSpeak) speakGerman(word.de);
  }

  function nextLearnStep() {
    learnIndex++;
    showLearnStep();
  }

  // ===== Multiple Choice (German → Arabic) =====
  function showMCQ(word) {
    const step = document.getElementById('learn-mcq');
    step.classList.remove('hidden');
    
    document.getElementById('mcq-instruction').textContent = 'ما معنى هذه الكلمة؟';
    document.getElementById('mcq-word').textContent = word.de;
    document.getElementById('mcq-word').className = 'mcq-word';
    
    const options = generateOptions(word, 'ar');
    const optionsEl = document.getElementById('mcq-options');
    optionsEl.innerHTML = '';
    
    options.forEach((opt, i) => {
      const btn = document.createElement('button');
      btn.className = 'mcq-option';
      btn.textContent = opt.text;
      if (opt.correct) btn.dataset.correct = 'true';
      btn.onclick = () => handleMCQAnswer(btn, opt.correct, word);
      optionsEl.appendChild(btn);
    });
    
    if (settings.autoSpeak) speakGerman(word.de);
  }

  // ===== Reverse MCQ (Arabic → German) =====
  function showReverseMCQ(word) {
    const step = document.getElementById('learn-reverse-mcq');
    step.classList.remove('hidden');
    
    document.getElementById('reverse-mcq-word').textContent = word.ar;
    
    const options = generateOptions(word, 'de');
    const optionsEl = document.getElementById('reverse-mcq-options');
    optionsEl.innerHTML = '';
    
    options.forEach((opt, i) => {
      const btn = document.createElement('button');
      btn.className = 'mcq-option';
      btn.style.fontFamily = 'var(--font-de)';
      btn.style.direction = 'ltr';
      btn.style.textAlign = 'left';
      btn.textContent = opt.text;
      if (opt.correct) btn.dataset.correct = 'true';
      btn.onclick = () => handleMCQAnswer(btn, opt.correct, word);
      optionsEl.appendChild(btn);
    });
  }

  function handleMCQAnswer(btn, isCorrect, word) {
    const parent = btn.parentElement;
    const allBtns = parent.querySelectorAll('.mcq-option');
    allBtns.forEach(b => b.classList.add('disabled'));
    
    if (isCorrect) {
      btn.classList.add('correct');
      sessionCorrect++;
      sessionXP += 10;
      SRS.recordResult(word.id, 4, learnMode);
      sessionResults.push({ word, correct: true });
      
      setTimeout(() => {
        learnIndex++;
        showLearnStep();
      }, 800);
    } else {
      btn.classList.add('incorrect');
      sessionIncorrect++;
      hearts--;
      SRS.recordResult(word.id, 1, learnMode);
      sessionResults.push({ word, correct: false });
      
      // Show correct answer
      allBtns.forEach(b => {
        if (!b.classList.contains('incorrect')) {
          const isCorrectBtn = (parent.id === 'mcq-options' && b.textContent === word.ar) ||
                               (parent.id === 'reverse-mcq-options' && b.textContent === word.de) ||
                               (parent.id === 'listening-options' && b.textContent === word.ar);
          if (isCorrectBtn) b.classList.add('show-correct');
        }
      });
      
      setTimeout(() => {
        // Re-add this word later in the queue for another try
        if (learnIndex + 2 < learnQueue.length) {
          const reinsertIdx = Math.min(learnIndex + 3, learnQueue.length);
          learnQueue.splice(reinsertIdx, 0, { word, step: 'mcq' });
        }
        learnIndex++;
        showLearnStep();
      }, 1500);
    }
    
    updateLearnProgress();
  }

  // ===== Typing Exercise =====
  function showTyping(word) {
    const step = document.getElementById('learn-typing');
    step.classList.remove('hidden');
    
    document.getElementById('typing-instruction').textContent = 'اكتب الكلمة الألمانية:';
    document.getElementById('typing-word-ar').textContent = word.ar;
    
    const input = document.getElementById('typing-input');
    input.value = '';
    input.className = 'typing-input';
    input.disabled = false;
    input.focus();
    
    document.getElementById('typing-feedback').classList.add('hidden');
    document.getElementById('typing-submit-btn').style.display = '';
  }

  function checkTyping() {
    const input = document.getElementById('typing-input');
    const userAnswer = input.value.trim();
    const correctAnswer = currentWord.de;
    
    if (!userAnswer) return;
    
    input.disabled = true;
    const feedback = document.getElementById('typing-feedback');
    feedback.classList.remove('hidden');
    document.getElementById('typing-submit-btn').style.display = 'none';
    
    // Normalize comparison (case-insensitive, handle umlauts)
    const isCorrect = normalizeGerman(userAnswer) === normalizeGerman(correctAnswer);
    
    if (isCorrect) {
      input.classList.add('correct');
      feedback.className = 'typing-feedback correct';
      feedback.textContent = '✅ صحيح! أحسنت';
      sessionCorrect++;
      sessionXP += 15; // More points for typing
      SRS.recordResult(currentWord.id, 5, learnMode);
      sessionResults.push({ word: currentWord, correct: true });
    } else {
      input.classList.add('incorrect');
      feedback.className = 'typing-feedback incorrect';
      feedback.innerHTML = `❌ الإجابة الصحيحة: <strong style="font-family:var(--font-de);direction:ltr;display:inline-block">${correctAnswer}</strong>`;
      sessionIncorrect++;
      hearts--;
      SRS.recordResult(currentWord.id, 1, learnMode);
      sessionResults.push({ word: currentWord, correct: false });
      
      // Re-add for another try
      if (learnIndex + 2 < learnQueue.length) {
        const reinsertIdx = Math.min(learnIndex + 3, learnQueue.length);
        learnQueue.splice(reinsertIdx, 0, { word: currentWord, step: 'mcq' });
      }
    }
    
    updateLearnProgress();
    
    setTimeout(() => {
      learnIndex++;
      showLearnStep();
    }, isCorrect ? 1000 : 2000);
  }

  function insertChar(ch) {
    const input = document.getElementById('typing-input');
    if (input.disabled) return;
    
    const start = input.selectionStart;
    const end = input.selectionEnd;
    const val = input.value;
    input.value = val.substring(0, start) + ch + val.substring(end);
    input.selectionStart = input.selectionEnd = start + ch.length;
    input.focus();
  }

  // ===== Listening Exercise =====
  function showListeningExercise(word) {
    const step = document.getElementById('learn-listening');
    step.classList.remove('hidden');
    
    const options = generateOptions(word, 'ar');
    const optionsEl = document.getElementById('listening-options');
    optionsEl.innerHTML = '';
    
    options.forEach((opt, i) => {
      const btn = document.createElement('button');
      btn.className = 'mcq-option';
      btn.textContent = opt.text;
      btn.onclick = () => handleMCQAnswer(btn, opt.correct, word);
      optionsEl.appendChild(btn);
    });
    
    // Auto-play
    setTimeout(() => speakGerman(word.de), 300);
  }

  function playListeningAudio() {
    if (currentWord) speakGerman(currentWord.de);
  }

  function playListeningAudioSlow() {
    if (currentWord) speakGerman(currentWord.de, 0.5);
  }

  // ===== Match Pairs =====
  function showMatchPairs() {
    // Get 5 words from current level
    if (!currentLevel) return;
    
    const step = document.getElementById('learn-match');
    step.classList.remove('hidden');
    
    const words = currentLevel.words.slice(0, 5);
    const deItems = shuffleArray([...words]);
    const arItems = shuffleArray([...words]);
    
    matchState = { selected: null, pairs: words.map(w => w.id), matched: 0, total: words.length };
    
    const deCol = document.getElementById('match-col-de');
    const arCol = document.getElementById('match-col-ar');
    deCol.innerHTML = '';
    arCol.innerHTML = '';
    
    deItems.forEach(w => {
      const item = document.createElement('div');
      item.className = 'match-item de-item';
      item.textContent = w.de;
      item.dataset.wordId = w.id;
      item.dataset.lang = 'de';
      item.onclick = () => handleMatchClick(item);
      deCol.appendChild(item);
    });
    
    arItems.forEach(w => {
      const item = document.createElement('div');
      item.className = 'match-item';
      item.textContent = w.ar;
      item.dataset.wordId = w.id;
      item.dataset.lang = 'ar';
      item.onclick = () => handleMatchClick(item);
      arCol.appendChild(item);
    });
  }

  function handleMatchClick(item) {
    if (item.classList.contains('matched')) return;
    
    if (!matchState.selected) {
      matchState.selected = item;
      item.classList.add('selected');
    } else {
      const first = matchState.selected;
      
      if (first === item) {
        first.classList.remove('selected');
        matchState.selected = null;
        return;
      }
      
      if (first.dataset.lang === item.dataset.lang) {
        first.classList.remove('selected');
        matchState.selected = item;
        item.classList.add('selected');
        return;
      }
      
      // Check match
      if (first.dataset.wordId === item.dataset.wordId) {
        first.classList.remove('selected');
        first.classList.add('matched');
        item.classList.add('matched');
        matchState.matched++;
        sessionCorrect++;
        sessionXP += 10;
        
        const wordData = findWordById(first.dataset.wordId);
        if (wordData) {
          SRS.recordResult(wordData.id, 4, learnMode);
          sessionResults.push({ word: wordData, correct: true });
        }
        
        if (matchState.matched >= matchState.total) {
          setTimeout(() => {
            learnIndex++;
            showLearnStep();
          }, 500);
        }
      } else {
        first.classList.remove('selected');
        first.classList.add('wrong');
        item.classList.add('wrong');
        sessionIncorrect++;
        
        setTimeout(() => {
          first.classList.remove('wrong');
          item.classList.remove('wrong');
        }, 600);
      }
      
      matchState.selected = null;
    }
  }

  // ===== Speed Review =====
  function startSpeedReview() {
    const progress = SRS.getProgress();
    const learnedWordIds = Object.keys(progress.words).filter(
      id => progress.words[id].status !== 'new'
    );
    
    if (learnedWordIds.length < 4) {
      showToast('تعلم المزيد من الكلمات أولاً');
      return;
    }
    
    const words = learnedWordIds.map(id => findWordById(id)).filter(Boolean);
    shuffleArray(words);
    
    learnMode = 'speed';
    learnQueue = words.slice(0, 20).map(w => ({ word: w, step: 'speed' }));
    learnIndex = 0;
    speedScore = 0;
    sessionCorrect = 0;
    sessionIncorrect = 0;
    sessionXP = 0;
    sessionResults = [];
    
    showScreen('speed');
    showSpeedQuestion();
  }

  function showSpeedQuestion() {
    if (learnIndex >= learnQueue.length) {
      showResults();
      return;
    }
    
    const item = learnQueue[learnIndex];
    currentWord = item.word;
    
    document.getElementById('speed-word').textContent = item.word.de;
    document.getElementById('speed-score').textContent = speedScore;
    
    const options = generateOptions(item.word, 'ar');
    speedCurrentOptions = options; // Cache for speedAnswer/speedTimeout
    options.forEach((opt, i) => {
      const btn = document.getElementById(`speed-opt-${i + 1}`);
      btn.textContent = opt.text;
      btn.className = 'speed-option';
      btn.disabled = false;
    });
    
    if (settings.autoSpeak) speakGerman(item.word.de);
    
    // Start timer
    speedTimeLeft = settings.speedTime * 10;
    const totalTicks = settings.speedTime * 10;
    
    if (speedTimer) clearInterval(speedTimer);
    document.getElementById('speed-timer-fill').style.width = '100%';
    
    speedTimer = setInterval(() => {
      speedTimeLeft--;
      const pct = (speedTimeLeft / totalTicks) * 100;
      document.getElementById('speed-timer-fill').style.width = `${pct}%`;
      
      if (speedTimeLeft <= 0) {
        clearInterval(speedTimer);
        speedTimeout();
      }
    }, 100);
  }

  function speedAnswer(idx) {
    clearInterval(speedTimer);
    
    const item = learnQueue[learnIndex];
    const options = speedCurrentOptions;
    const isCorrect = options[idx].correct;
    
    const btn = document.getElementById(`speed-opt-${idx + 1}`);
    
    // Disable all buttons
    for (let i = 1; i <= 4; i++) {
      document.getElementById(`speed-opt-${i}`).disabled = true;
    }
    
    if (isCorrect) {
      btn.classList.add('correct');
      speedScore += Math.max(1, Math.ceil(speedTimeLeft / 5));
      sessionCorrect++;
      sessionXP += 10;
      SRS.recordResult(item.word.id, 4, 'speed');
      sessionResults.push({ word: item.word, correct: true });
    } else {
      btn.classList.add('incorrect');
      sessionIncorrect++;
      SRS.recordResult(item.word.id, 1, 'speed');
      sessionResults.push({ word: item.word, correct: false });
      
      // Show correct
      for (let i = 0; i < options.length; i++) {
        if (options[i].correct) {
          document.getElementById(`speed-opt-${i + 1}`).classList.add('correct');
        }
      }
    }
    
    setTimeout(() => {
      learnIndex++;
      showSpeedQuestion();
    }, 800);
  }

  function speedTimeout() {
    const item = learnQueue[learnIndex];
    sessionIncorrect++;
    SRS.recordResult(item.word.id, 0, 'speed');
    sessionResults.push({ word: item.word, correct: false });
    
    // Show correct answer
    const options = speedCurrentOptions;
    for (let i = 0; i < options.length; i++) {
      const btn = document.getElementById(`speed-opt-${i + 1}`);
      btn.disabled = true;
      if (options[i].correct) btn.classList.add('correct');
    }
    
    setTimeout(() => {
      learnIndex++;
      showSpeedQuestion();
    }, 1000);
  }

  // ===== Results Screen =====
  function showResults() {
    if (speedTimer) clearInterval(speedTimer);
    
    SRS.updateStreak();
    
    const total = sessionCorrect + sessionIncorrect;
    const accuracy = total > 0 ? Math.round((sessionCorrect / total) * 100) : 0;
    
    // Streak bonus
    const streak = SRS.getStreak();
    if (streak.current > 1) {
      sessionXP += streak.current * 5;
    }
    
    // Update stats
    const progress = SRS.getProgress();
    progress.totalXP = (progress.totalXP || 0) + sessionXP;
    progress.totalSessions = (progress.totalSessions || 0) + 1;
    SRS.saveProgress(progress);
    
    // UI
    document.getElementById('result-correct').textContent = sessionCorrect;
    document.getElementById('result-incorrect').textContent = sessionIncorrect;
    document.getElementById('result-xp').textContent = `+${sessionXP}`;
    
    // Accuracy ring
    const circumference = 2 * Math.PI * 52;
    const offset = circumference * (1 - accuracy / 100);
    const circle = document.getElementById('accuracy-circle');
    circle.style.strokeDasharray = circumference;
    setTimeout(() => {
      circle.style.strokeDashoffset = offset;
    }, 100);
    document.getElementById('accuracy-text').textContent = `${accuracy}%`;
    
    // Determine title/icon based on performance
    if (accuracy >= 90) {
      document.getElementById('results-icon').textContent = '🏆';
      document.getElementById('results-title').textContent = 'ممتاز!';
      document.getElementById('results-subtitle').textContent = 'أداء رائع! استمر في التعلم';
      fireConfetti();
    } else if (accuracy >= 70) {
      document.getElementById('results-icon').textContent = '🎉';
      document.getElementById('results-title').textContent = 'أحسنت!';
      document.getElementById('results-subtitle').textContent = 'عمل جيد، واصل التحسن';
    } else if (accuracy >= 50) {
      document.getElementById('results-icon').textContent = '💪';
      document.getElementById('results-title').textContent = 'جيد!';
      document.getElementById('results-subtitle').textContent = 'استمر في الممارسة للتحسن';
    } else {
      document.getElementById('results-icon').textContent = '📚';
      document.getElementById('results-title').textContent = 'استمر في التعلم';
      document.getElementById('results-subtitle').textContent = 'المراجعة ستساعدك على التحسن';
    }
    
    // Words list
    const wordsList = document.getElementById('results-words-list');
    wordsList.innerHTML = '';
    
    // Deduplicate results
    const seen = new Set();
    sessionResults.forEach(r => {
      if (seen.has(r.word.id)) return;
      seen.add(r.word.id);
      
      const item = document.createElement('div');
      item.className = 'result-word-item';
      item.innerHTML = `
        <span class="result-word-de">${r.word.de}</span>
        <span class="result-word-ar">${r.word.ar}</span>
        <span class="result-word-status">${r.correct ? '✅' : '❌'}</span>
      `;
      wordsList.appendChild(item);
    });
    
    showScreen('results');
  }

  function continueLearning() {
    if (currentCourse && currentLevel) {
      startLevel(currentCourse.id, currentLevel.id);
    } else {
      startQuickLearn();
    }
  }

  function exitLearn() {
    if (speedTimer) clearInterval(speedTimer);
    
    if (sessionCorrect + sessionIncorrect > 0) {
      showResults();
    } else {
      goHome();
    }
  }

  // ===== Stats Screen =====
  function renderStats() {
    const stats = SRS.getOverallStats();
    const streak = SRS.getStreak();
    
    document.getElementById('stat-streak').textContent = streak.current;
    document.getElementById('stat-words-learned').textContent = stats.totalLearned;
    document.getElementById('stat-total-xp').textContent = stats.totalXP;
    document.getElementById('stat-sessions').textContent = stats.totalSessions;
    document.getElementById('stat-mastered').textContent = stats.totalMastered;
    
    const totalAnswers = stats.totalCorrect + stats.totalIncorrect;
    const accuracy = totalAnswers > 0 ? Math.round((stats.totalCorrect / totalAnswers) * 100) : 0;
    document.getElementById('stat-accuracy').textContent = `${accuracy}%`;
    
    // Heatmap (last 28 days)
    renderHeatmap();
  }

  function renderHeatmap() {
    const heatmap = document.getElementById('stats-heatmap');
    heatmap.innerHTML = '';
    
    const progress = SRS.getProgress();
    const dailyLog = progress.dailyLog || {};
    
    for (let i = 27; i >= 0; i--) {
      const date = new Date();
      date.setDate(date.getDate() - i);
      const key = date.toISOString().split('T')[0];
      const count = dailyLog[key] || 0;
      
      const cell = document.createElement('div');
      cell.className = 'heatmap-cell';
      
      if (count >= 20) cell.classList.add('level-4');
      else if (count >= 10) cell.classList.add('level-3');
      else if (count >= 5) cell.classList.add('level-2');
      else if (count > 0) cell.classList.add('level-1');
      
      cell.title = `${key}: ${count} كلمات`;
      heatmap.appendChild(cell);
    }
  }

  function renderSettingsState() {
    // Update setting states
    document.querySelectorAll('#daily-goal-options .setting-opt').forEach(b => {
      b.classList.toggle('active', parseInt(b.dataset.goal) === settings.dailyGoal);
    });
    document.querySelectorAll('#speed-time-options .setting-opt').forEach(b => {
      b.classList.toggle('active', parseInt(b.dataset.speed) === settings.speedTime);
    });
    document.querySelectorAll('#theme-options .setting-opt').forEach(b => {
      b.classList.toggle('active', b.dataset.theme === settings.theme);
    });
    document.getElementById('auto-speak-toggle').checked = settings.autoSpeak;
    document.getElementById('speak-rate').value = settings.speakRate;
  }

  // ===== Progress Management =====
  function resetAllProgress() {
    if (confirm('هل أنت متأكد من إعادة تعيين كل التقدم؟ لا يمكن التراجع عن هذا.')) {
      localStorage.removeItem('dl_progress');
      showToast('تم إعادة تعيين التقدم');
      goHome();
    }
  }

  function exportProgress() {
    const data = SRS.exportProgress();
    const blob = new Blob([data], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `deutschlernen_backup_${new Date().toISOString().split('T')[0]}.json`;
    a.click();
    URL.revokeObjectURL(url);
    showToast('تم تصدير البيانات بنجاح');
  }

  function importProgress() {
    document.getElementById('import-file-input').click();
  }

  function handleImport(event) {
    const file = event.target.files[0];
    if (!file) return;
    
    const reader = new FileReader();
    reader.onload = (e) => {
      try {
        SRS.importProgress(e.target.result);
        showToast('تم استيراد البيانات بنجاح');
        goHome();
      } catch (err) {
        showToast('فشل استيراد البيانات');
      }
    };
    reader.readAsText(file);
    event.target.value = '';
  }

  // ===== Helpers =====
  function generateOptions(word, lang) {
    const allWords = getAllWords();
    const correctText = lang === 'ar' ? word.ar : word.de;
    
    // Get distractors
    const distractors = allWords
      .filter(w => w.id !== word.id)
      .map(w => lang === 'ar' ? w.ar : w.de);
    
    shuffleArray(distractors);
    const selected = distractors.slice(0, 3);
    
    const options = [
      { text: correctText, correct: true },
      ...selected.map(t => ({ text: t, correct: false }))
    ];
    
    shuffleArray(options);
    return options;
  }

  function getAllWords() {
    const words = [];
    APP_DATA.courses.forEach(course => {
      course.levels.forEach(level => {
        level.words.forEach(word => words.push(word));
      });
    });
    return words;
  }

  function findWordById(wordId) {
    for (const course of APP_DATA.courses) {
      for (const level of course.levels) {
        const word = level.words.find(w => w.id === wordId);
        if (word) return word;
      }
    }
    return null;
  }

  function normalizeGerman(str) {
    return str.toLowerCase()
      .replace(/ä/g, 'ae').replace(/ö/g, 'oe').replace(/ü/g, 'ue').replace(/ß/g, 'ss')
      .replace(/\s+/g, ' ').trim();
  }

  function shuffleArray(arr) {
    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
  }

  function getWordEmoji(word) {
    const emojiMap = {
      'Hallo': '👋', 'Guten Morgen': '🌅', 'Guten Tag': '☀️', 'Auf Wiedersehen': '👋',
      'Danke': '🙏', 'Bitte': '😊', 'Ja': '✅', 'Nein': '❌',
      'die Mutter': '👩', 'der Vater': '👨', 'das Kind': '👶', 'die Familie': '👨‍👩‍👧‍👦',
      'das Brot': '🍞', 'das Wasser': '💧', 'der Kaffee': '☕', 'der Tee': '🍵',
      'der Apfel': '🍎', 'das Fleisch': '🥩', 'die Milch': '🥛', 'das Ei': '🥚',
      'der Kopf': '🗣️', 'das Auge': '👁️', 'die Hand': '✋', 'das Herz': '❤️',
      'das Hemd': '👔', 'die Hose': '👖', 'der Schuh': '👞', 'das Kleid': '👗',
      'das Haus': '🏠', 'die Küche': '🍳', 'das Bett': '🛏️', 'die Tür': '🚪',
      'der Zug': '🚂', 'das Auto': '🚗', 'der Bus': '🚌', 'das Flugzeug': '✈️',
      'der Arzt': '👨‍⚕️', 'der Lehrer': '👨‍🏫', 'der Koch': '👨‍🍳',
      'die Sonne': '☀️', 'der Regen': '🌧️', 'der Schnee': '❄️', 'der Baum': '🌳',
      'das Meer': '🌊', 'der Berg': '⛰️', 'die Blume': '🌸',
    };
    return emojiMap[word.de] || '📝';
  }

  // ===== Speech Synthesis =====
  function speakGerman(text, rate) {
    if (!('speechSynthesis' in window)) return;
    
    window.speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = 'de-DE';
    utterance.rate = rate || settings.speakRate;
    utterance.pitch = 1;
    
    // Try to find a German voice
    const voices = window.speechSynthesis.getVoices();
    const germanVoice = voices.find(v => v.lang.startsWith('de'));
    if (germanVoice) utterance.voice = germanVoice;
    
    window.speechSynthesis.speak(utterance);
  }

  function speakWord() {
    if (currentWord) speakGerman(currentWord.de);
  }

  function speakCurrentWord() {
    if (currentWord) speakGerman(currentWord.de);
  }

  // ===== Toast =====
  function showToast(message) {
    const toast = document.getElementById('toast');
    document.getElementById('toast-text').textContent = message;
    toast.classList.remove('hidden');
    
    setTimeout(() => {
      toast.classList.add('hidden');
    }, 2500);
  }

  // ===== Confetti =====
  function fireConfetti() {
    const canvas = document.getElementById('confetti-canvas');
    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    
    const particles = [];
    const colors = ['#6c5ce7', '#a29bfe', '#fd79a8', '#00cec9', '#fdcb6e', '#00b894'];
    
    for (let i = 0; i < 100; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height - canvas.height,
        w: Math.random() * 10 + 5,
        h: Math.random() * 6 + 3,
        color: colors[Math.floor(Math.random() * colors.length)],
        vx: (Math.random() - 0.5) * 4,
        vy: Math.random() * 3 + 2,
        rotation: Math.random() * 360,
        rotSpeed: (Math.random() - 0.5) * 10
      });
    }
    
    let frames = 0;
    function animate() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      particles.forEach(p => {
        ctx.save();
        ctx.translate(p.x, p.y);
        ctx.rotate((p.rotation * Math.PI) / 180);
        ctx.fillStyle = p.color;
        ctx.fillRect(-p.w / 2, -p.h / 2, p.w, p.h);
        ctx.restore();
        
        p.x += p.vx;
        p.y += p.vy;
        p.vy += 0.05;
        p.rotation += p.rotSpeed;
      });
      
      frames++;
      if (frames < 120) {
        requestAnimationFrame(animate);
      } else {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
      }
    }
    
    animate();
  }

  // ===== Public API =====
  return {
    init,
    goHome,
    showStats,
    showSettings,
    openCourse,
    startLevel,
    startQuickLearn,
    startReviewAll,
    startSpeedReview,
    startListening,
    nextLearnStep,
    checkTyping,
    insertChar,
    speakWord,
    speakCurrentWord,
    playListeningAudio,
    playListeningAudioSlow,
    speedAnswer,
    exitLearn,
    continueLearning,
    setDailyGoal,
    setSpeedTime,
    toggleAutoSpeak,
    setSpeakRate,
    setTheme,
    resetAllProgress,
    exportProgress,
    importProgress,
    handleImport,
    showToast
  };
})();

// Initialize on load
document.addEventListener('DOMContentLoaded', () => {
  // Load voices
  if ('speechSynthesis' in window) {
    window.speechSynthesis.onvoiceschanged = () => {
      window.speechSynthesis.getVoices();
    };
  }
  App.init();
});
