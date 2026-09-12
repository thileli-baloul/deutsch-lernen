const APP_DATA = {
  courses: [
    {
      id: 'course_1',
      title: 'المبتدئين ١',
      titleDe: 'Anfänger 1',
      description: 'تعلم أساسيات اللغة الألمانية',
      icon: '🌱',
      level: 'A1',
      levels: [
        {
          id: 'level_1_1',
          title: 'التحيات',
          titleDe: 'Begrüßungen',
          icon: '👋',
          words: [
            { id: 'w_1_1_1', de: 'Hallo', ar: 'مرحباً', example: 'Hallo, wie geht es dir?', exampleAr: 'مرحباً، كيف حالك؟', type: 'phrase', gender: null, plural: null },
            { id: 'w_1_1_2', de: 'Guten Morgen', ar: 'صباح الخير', example: 'Guten Morgen, Herr Müller!', exampleAr: 'صباح الخير، سيد مولر!', type: 'phrase', gender: null, plural: null },
            { id: 'w_1_1_3', de: 'Guten Tag', ar: 'طاب يومك / نهارك سعيد', example: 'Guten Tag, was kann ich für Sie tun?', exampleAr: 'طاب يومك، ماذا يمكنني أن أفعل لك؟', type: 'phrase', gender: null, plural: null },
            { id: 'w_1_1_4', de: 'Guten Abend', ar: 'مساء الخير', example: 'Guten Abend, meine Damen und Herren!', exampleAr: 'مساء الخير سيداتي وسادتي!', type: 'phrase', gender: null, plural: null },
            { id: 'w_1_1_5', de: 'Gute Nacht', ar: 'تصبح على خير / ليلة سعيدة', example: 'Gute Nacht und schlaf gut!', exampleAr: 'ليلة سعيدة ونم جيداً!', type: 'phrase', gender: null, plural: null },
            { id: 'w_1_1_6', de: 'Auf Wiedersehen', ar: 'إلى اللقاء', example: 'Auf Wiedersehen, bis morgen!', exampleAr: 'إلى اللقاء، حتى الغد!', type: 'phrase', gender: null, plural: null },
            { id: 'w_1_1_7', de: 'Tschüss', ar: 'وداعاً / سلام', example: 'Tschüss, mach\'s gut!', exampleAr: 'وداعاً، اعتني بنفسك!', type: 'phrase', gender: null, plural: null },
            { id: 'w_1_1_8', de: 'Danke', ar: 'شكراً', example: 'Danke für deine Hilfe.', exampleAr: 'شكراً على مساعدتك.', type: 'phrase', gender: null, plural: null },
            { id: 'w_1_1_9', de: 'Bitte', ar: 'عفواً / من فضلك', example: 'Bitte sehr!', exampleAr: 'على الرحب والسعة!', type: 'phrase', gender: null, plural: null },
            { id: 'w_1_1_10', de: 'Ja', ar: 'نعم', example: 'Ja, das stimmt.', exampleAr: 'نعم، هذا صحيح.', type: 'phrase', gender: null, plural: null },
            { id: 'w_1_1_11', de: 'Nein', ar: 'لا', example: 'Nein, danke.', exampleAr: 'لا، شكراً.', type: 'phrase', gender: null, plural: null },
            { id: 'w_1_1_12', de: 'Entschuldigung', ar: 'معذرة / عذراً', example: 'Entschuldigung, wo ist der Bahnhof?', exampleAr: 'معذرة، أين محطة القطار؟', type: 'phrase', gender: null, plural: null },
            { id: 'w_1_1_13', de: 'Wie geht es Ihnen?', ar: 'كيف حالك؟ (رسمي)', example: 'Wie geht es Ihnen heute?', exampleAr: 'كيف حال حضرتك اليوم؟', type: 'phrase', gender: null, plural: null },
            { id: 'w_1_1_14', de: 'Mir geht es gut', ar: 'أنا بخير', example: 'Danke, mir geht es gut.', exampleAr: 'شكراً، أنا بخير.', type: 'phrase', gender: null, plural: null },
            { id: 'w_1_1_15', de: 'Willkommen', ar: 'مرحباً بك', example: 'Herzlich willkommen in Deutschland!', exampleAr: 'أهلاً بك في ألمانيا!', type: 'phrase', gender: null, plural: null },
            { id: 'w_1_1_16', de: 'Bis bald', ar: 'أراك قريباً', example: 'Wir sehen uns, bis bald!', exampleAr: 'سنلتقي، أراك قريباً!', type: 'phrase', gender: null, plural: null }
          ]
        },
        {
          id: 'level_1_2',
          title: 'التعريف بالنفس',
          titleDe: 'Sich vorstellen',
          icon: '👤',
          words: [
            { id: 'w_1_2_1', de: 'Ich heiße...', ar: 'أنا اسمي...', example: 'Ich heiße Ahmed.', exampleAr: 'أنا اسمي أحمد.', type: 'phrase', gender: null, plural: null },
            { id: 'w_1_2_2', de: 'Wie heißt du?', ar: 'ما اسمك؟', example: 'Hallo, wie heißt du?', exampleAr: 'مرحباً، ما اسمك؟', type: 'phrase', gender: null, plural: null },
            { id: 'w_1_2_3', de: 'Woher kommst du?', ar: 'من أين أنت؟', example: 'Woher kommst du, Maria?', exampleAr: 'من أين أنتِ يا ماريا؟', type: 'phrase', gender: null, plural: null },
            { id: 'w_1_2_4', de: 'Ich komme aus...', ar: 'أنا من...', example: 'Ich komme aus Ägypten.', exampleAr: 'أنا من مصر.', type: 'phrase', gender: null, plural: null },
            { id: 'w_1_2_5', de: 'Ich bin...', ar: 'أنا...', example: 'Ich bin 25 Jahre alt.', exampleAr: 'عمري 25 عاماً.', type: 'phrase', gender: null, plural: null },
            { id: 'w_1_2_6', de: 'Freut mich', ar: 'تشرفنا / سعيد بلقائك', example: 'Freut mich, dich kennenzulernen.', exampleAr: 'سعيد بلقائك.', type: 'phrase', gender: null, plural: null },
            { id: 'w_1_2_7', de: 'Mein Name ist...', ar: 'اسمي...', example: 'Mein Name ist Ali.', exampleAr: 'اسمي علي.', type: 'phrase', gender: null, plural: null },
            { id: 'w_1_2_8', de: 'der Name', ar: 'الاسم', example: 'Wie ist dein Name?', exampleAr: 'ما هو اسمك؟', type: 'noun', gender: 'm', plural: 'die Namen' },
            { id: 'w_1_2_9', de: 'wohnen', ar: 'يسكن / يعيش', example: 'Ich wohne in Berlin.', exampleAr: 'أنا أعيش في برلين.', type: 'verb', gender: null, plural: null },
            { id: 'w_1_2_10', de: 'Wo wohnst du?', ar: 'أين تسكن؟', example: 'Wo wohnst du jetzt?', exampleAr: 'أين تسكن الآن؟', type: 'phrase', gender: null, plural: null },
            { id: 'w_1_2_11', de: 'sprechen', ar: 'يتحدث', example: 'Ich spreche Arabisch und Englisch.', exampleAr: 'أتحدث العربية والإنجليزية.', type: 'verb', gender: null, plural: null },
            { id: 'w_1_2_12', de: 'die Sprache', ar: 'اللغة', example: 'Welche Sprachen sprichst du?', exampleAr: 'ما هي اللغات التي تتحدثها؟', type: 'noun', gender: 'f', plural: 'die Sprachen' },
            { id: 'w_1_2_13', de: 'lernen', ar: 'يتعلم', example: 'Ich lerne Deutsch.', exampleAr: 'أنا أتعلم الألمانية.', type: 'verb', gender: null, plural: null },
            { id: 'w_1_2_14', de: 'der Beruf', ar: 'المهنة', example: 'Was bist du von Beruf?', exampleAr: 'ما هي مهنتك؟', type: 'noun', gender: 'm', plural: 'die Berufe' },
            { id: 'w_1_2_15', de: 'das Alter', ar: 'العمر', example: 'Wie ist dein Alter?', exampleAr: 'ما هو عمرك؟', type: 'noun', gender: 'n', plural: 'die Alter' }
          ]
        },
        {
          id: 'level_1_3',
          title: 'الأرقام',
          titleDe: 'Zahlen',
          icon: '🔢',
          words: [
            { id: 'w_1_3_0', de: 'null', ar: 'صفر', example: 'Die Temperatur ist null Grad.', exampleAr: 'درجة الحرارة صفر درجة.', type: 'number', gender: null, plural: null },
            { id: 'w_1_3_1', de: 'eins', ar: 'واحد', example: 'Ich habe einen Bruder.', exampleAr: 'لدي أخ واحد.', type: 'number', gender: null, plural: null },
            { id: 'w_1_3_2', de: 'zwei', ar: 'اثنان', example: 'Wir brauchen zwei Tickets.', exampleAr: 'نحتاج تذكرتين.', type: 'number', gender: null, plural: null },
            { id: 'w_1_3_3', de: 'drei', ar: 'ثلاثة', example: 'Es dauert drei Tage.', exampleAr: 'يستغرق الأمر ثلاثة أيام.', type: 'number', gender: null, plural: null },
            { id: 'w_1_3_4', de: 'vier', ar: 'أربعة', example: 'Das Auto hat vier Räder.', exampleAr: 'السيارة لها أربع عجلات.', type: 'number', gender: null, plural: null },
            { id: 'w_1_3_5', de: 'fünf', ar: 'خمسة', example: 'Ich arbeite fünf Tage die Woche.', exampleAr: 'أعمل خمسة أيام في الأسبوع.', type: 'number', gender: null, plural: null },
            { id: 'w_1_3_6', de: 'sechs', ar: 'ستة', example: 'Er hat sechs Äpfel gekauft.', exampleAr: 'لقد اشترى ست تفاحات.', type: 'number', gender: null, plural: null },
            { id: 'w_1_3_7', de: 'sieben', ar: 'سبعة', example: 'Eine Woche hat sieben Tage.', exampleAr: 'الأسبوع فيه سبعة أيام.', type: 'number', gender: null, plural: null },
            { id: 'w_1_3_8', de: 'acht', ar: 'ثمانية', example: 'Die Vorstellung beginnt um acht Uhr.', exampleAr: 'يبدأ العرض في الساعة الثامنة.', type: 'number', gender: null, plural: null },
            { id: 'w_1_3_9', de: 'neun', ar: 'تسعة', example: 'Neun Personen waren dort.', exampleAr: 'كان هناك تسعة أشخاص.', type: 'number', gender: null, plural: null },
            { id: 'w_1_3_10', de: 'zehn', ar: 'عشرة', example: 'Ich habe zehn Euro.', exampleAr: 'لدي عشرة يورو.', type: 'number', gender: null, plural: null },
            { id: 'w_1_3_11', de: 'elf', ar: 'أحد عشر', example: 'Die Fußballmannschaft hat elf Spieler.', exampleAr: 'فريق كرة القدم به أحد عشر لاعباً.', type: 'number', gender: null, plural: null },
            { id: 'w_1_3_12', de: 'zwölf', ar: 'اثنا عشر', example: 'Ein Jahr hat zwölf Monate.', exampleAr: 'السنة فيها اثنا عشر شهراً.', type: 'number', gender: null, plural: null },
            { id: 'w_1_3_20', de: 'zwanzig', ar: 'عشرون', example: 'Das Buch kostet zwanzig Euro.', exampleAr: 'الكتاب يكلف عشرين يورو.', type: 'number', gender: null, plural: null },
            { id: 'w_1_3_100', de: 'hundert', ar: 'مئة', example: 'Es gibt über hundert Sorten.', exampleAr: 'هناك أكثر من مئة نوع.', type: 'number', gender: null, plural: null },
            { id: 'w_1_3_1000', de: 'tausend', ar: 'ألف', example: 'Das kostet fast tausend Euro.', exampleAr: 'هذا يكلف تقريباً ألف يورو.', type: 'number', gender: null, plural: null }
          ]
        },
        {
          id: 'level_1_4',
          title: 'الألوان',
          titleDe: 'Farben',
          icon: '🎨',
          words: [
            { id: 'w_1_4_1', de: 'rot', ar: 'أحمر', example: 'Der Apfel ist rot.', exampleAr: 'التفاحة حمراء.', type: 'adjective', gender: null, plural: null },
            { id: 'w_1_4_2', de: 'blau', ar: 'أزرق', example: 'Der Himmel ist blau.', exampleAr: 'السماء زرقاء.', type: 'adjective', gender: null, plural: null },
            { id: 'w_1_4_3', de: 'grün', ar: 'أخضر', example: 'Das Gras ist grün.', exampleAr: 'العشب أخضر.', type: 'adjective', gender: null, plural: null },
            { id: 'w_1_4_4', de: 'gelb', ar: 'أصفر', example: 'Die Sonne ist gelb.', exampleAr: 'الشمس صفراء.', type: 'adjective', gender: null, plural: null },
            { id: 'w_1_4_5', de: 'schwarz', ar: 'أسود', example: 'Die Katze ist schwarz.', exampleAr: 'القطة سوداء.', type: 'adjective', gender: null, plural: null },
            { id: 'w_1_4_6', de: 'weiß', ar: 'أبيض', example: 'Das Papier ist weiß.', exampleAr: 'الورق أبيض.', type: 'adjective', gender: null, plural: null },
            { id: 'w_1_4_7', de: 'braun', ar: 'بني', example: 'Der Hund ist braun.', exampleAr: 'الكلب بني.', type: 'adjective', gender: null, plural: null },
            { id: 'w_1_4_8', de: 'grau', ar: 'رمادي', example: 'Das Auto ist grau.', exampleAr: 'السيارة رمادية.', type: 'adjective', gender: null, plural: null },
            { id: 'w_1_4_9', de: 'orange', ar: 'برتقالي', example: 'Die Orange ist orange.', exampleAr: 'البرتقالة برتقالية.', type: 'adjective', gender: null, plural: null },
            { id: 'w_1_4_10', de: 'rosa', ar: 'وردي', example: 'Die Blume ist rosa.', exampleAr: 'الزهرة وردية.', type: 'adjective', gender: null, plural: null },
            { id: 'w_1_4_11', de: 'lila', ar: 'بنفسجي', example: 'Das Kleid ist lila.', exampleAr: 'الفستان بنفسجي.', type: 'adjective', gender: null, plural: null },
            { id: 'w_1_4_12', de: 'hell', ar: 'فاتح', example: 'Das Zimmer ist hell.', exampleAr: 'الغرفة مضيئة / فاتحة.', type: 'adjective', gender: null, plural: null },
            { id: 'w_1_4_13', de: 'dunkel', ar: 'غامق', example: 'Es ist schon dunkel.', exampleAr: 'لقد أصبح الجو مظلماً.', type: 'adjective', gender: null, plural: null },
            { id: 'w_1_4_14', de: 'bunt', ar: 'ملون', example: 'Das Bild ist sehr bunt.', exampleAr: 'الصورة ملونة جداً.', type: 'adjective', gender: null, plural: null },
            { id: 'w_1_4_15', de: 'die Farbe', ar: 'اللون', example: 'Was ist deine Lieblingsfarbe?', exampleAr: 'ما هو لونك المفضل؟', type: 'noun', gender: 'f', plural: 'die Farben' }
          ]
        },
        {
          id: 'level_1_5',
          title: 'الأيام والأشهر',
          titleDe: 'Tage & Monate',
          icon: '📅',
          words: [
            { id: 'w_1_5_1', de: 'Montag', ar: 'الاثنين', example: 'Am Montag gehe ich zur Arbeit.', exampleAr: 'يوم الاثنين أذهب إلى العمل.', type: 'noun', gender: 'm', plural: 'die Montage' },
            { id: 'w_1_5_2', de: 'Dienstag', ar: 'الثلاثاء', example: 'Dienstag haben wir ein Meeting.', exampleAr: 'يوم الثلاثاء لدينا اجتماع.', type: 'noun', gender: 'm', plural: 'die Dienstage' },
            { id: 'w_1_5_3', de: 'Mittwoch', ar: 'الأربعاء', example: 'Mittwoch ist die Mitte der Woche.', exampleAr: 'الأربعاء هو منتصف الأسبوع.', type: 'noun', gender: 'm', plural: 'die Mittwoche' },
            { id: 'w_1_5_4', de: 'Donnerstag', ar: 'الخميس', example: 'Ich lerne Donnerstag Deutsch.', exampleAr: 'أنا أتعلم الألمانية يوم الخميس.', type: 'noun', gender: 'm', plural: 'die Donnerstage' },
            { id: 'w_1_5_5', de: 'Freitag', ar: 'الجمعة', example: 'Freitag ist mein Lieblingstag.', exampleAr: 'الجمعة هو يومي المفضل.', type: 'noun', gender: 'm', plural: 'die Freitage' },
            { id: 'w_1_5_6', de: 'Samstag', ar: 'السبت', example: 'Am Samstag schlafe ich lange.', exampleAr: 'يوم السبت أنام طويلاً.', type: 'noun', gender: 'm', plural: 'die Samstage' },
            { id: 'w_1_5_7', de: 'Sonntag', ar: 'الأحد', example: 'Sonntag ist ein Ruhetag.', exampleAr: 'الأحد هو يوم راحة.', type: 'noun', gender: 'm', plural: 'die Sonntage' },
            { id: 'w_1_5_8', de: 'heute', ar: 'اليوم', example: 'Heute ist das Wetter schön.', exampleAr: 'اليوم الطقس جميل.', type: 'adverb', gender: null, plural: null },
            { id: 'w_1_5_9', de: 'morgen', ar: 'غداً', example: 'Morgen besuche ich meine Oma.', exampleAr: 'غداً سأزور جدتي.', type: 'adverb', gender: null, plural: null },
            { id: 'w_1_5_10', de: 'gestern', ar: 'أمس', example: 'Gestern war ich im Kino.', exampleAr: 'أمس كنت في السينما.', type: 'adverb', gender: null, plural: null },
            { id: 'w_1_5_11', de: 'Januar', ar: 'يناير', example: 'Im Januar ist es kalt.', exampleAr: 'في يناير يكون الجو بارداً.', type: 'noun', gender: 'm', plural: 'die Januare' },
            { id: 'w_1_5_12', de: 'Dezember', ar: 'ديسمبر', example: 'Dezember ist der letzte Monat.', exampleAr: 'ديسمبر هو الشهر الأخير.', type: 'noun', gender: 'm', plural: 'die Dezember' },
            { id: 'w_1_5_13', de: 'die Woche', ar: 'الأسبوع', example: 'Diese Woche bin ich beschäftigt.', exampleAr: 'هذا الأسبوع أنا مشغول.', type: 'noun', gender: 'f', plural: 'die Wochen' },
            { id: 'w_1_5_14', de: 'der Monat', ar: 'الشهر', example: 'Jeder Monat hat etwa vier Wochen.', exampleAr: 'كل شهر فيه حوالي أربعة أسابيع.', type: 'noun', gender: 'm', plural: 'die Monate' },
            { id: 'w_1_5_15', de: 'das Jahr', ar: 'السنة', example: 'Ein Jahr hat 365 Tage.', exampleAr: 'السنة فيها 365 يوماً.', type: 'noun', gender: 'n', plural: 'die Jahre' }
          ]
        }
      ]
    },
    {
      id: 'course_2',
      title: 'المبتدئين ٢',
      titleDe: 'Anfänger 2',
      description: 'بناء المفردات الأساسية',
      icon: '🌿',
      level: 'A1',
      levels: [
        {
          id: 'level_2_1',
          title: 'العائلة',
          titleDe: 'Familie',
          icon: '👨‍👩‍👧‍👦',
          words: [
            { id: 'w_2_1_1', de: 'die Mutter', ar: 'الأم', example: 'Meine Mutter kocht gut.', exampleAr: 'أمي تطبخ جيداً.', type: 'noun', gender: 'f', plural: 'die Mütter' },
            { id: 'w_2_1_2', de: 'der Vater', ar: 'الأب', example: 'Sein Vater ist Arzt.', exampleAr: 'والده طبيب.', type: 'noun', gender: 'm', plural: 'die Väter' },
            { id: 'w_2_1_3', de: 'der Bruder', ar: 'الأخ', example: 'Ich habe einen Bruder.', exampleAr: 'لدي أخ.', type: 'noun', gender: 'm', plural: 'die Brüder' },
            { id: 'w_2_1_4', de: 'die Schwester', ar: 'الأخت', example: 'Ihre Schwester lernt Deutsch.', exampleAr: 'أختها تتعلم الألمانية.', type: 'noun', gender: 'f', plural: 'die Schwestern' },
            { id: 'w_2_1_5', de: 'die Großmutter', ar: 'الجدة', example: 'Die Großmutter erzählt eine Geschichte.', exampleAr: 'الجدة تحكي قصة.', type: 'noun', gender: 'f', plural: 'die Großmütter' },
            { id: 'w_2_1_6', de: 'der Großvater', ar: 'الجد', example: 'Der Großvater sitzt im Garten.', exampleAr: 'الجد يجلس في الحديقة.', type: 'noun', gender: 'm', plural: 'die Großväter' },
            { id: 'w_2_1_7', de: 'das Kind', ar: 'الطفل', example: 'Das Kind spielt.', exampleAr: 'الطفل يلعب.', type: 'noun', gender: 'n', plural: 'die Kinder' },
            { id: 'w_2_1_8', de: 'die Eltern', ar: 'الوالدان', example: 'Meine Eltern wohnen in Kairo.', exampleAr: 'والداي يعيشان في القاهرة.', type: 'noun', gender: 'pl', plural: 'die Eltern' },
            { id: 'w_2_1_9', de: 'der Sohn', ar: 'الابن', example: 'Ihr Sohn studiert Medizin.', exampleAr: 'ابنها يدرس الطب.', type: 'noun', gender: 'm', plural: 'die Söhne' },
            { id: 'w_2_1_10', de: 'die Tochter', ar: 'الابنة', example: 'Die Tochter hilft der Mutter.', exampleAr: 'الابنة تساعد أمها.', type: 'noun', gender: 'f', plural: 'die Töchter' },
            { id: 'w_2_1_11', de: 'der Onkel', ar: 'العم / الخال', example: 'Mein Onkel besucht uns oft.', exampleAr: 'عمي يزورنا كثيراً.', type: 'noun', gender: 'm', plural: 'die Onkel' },
            { id: 'w_2_1_12', de: 'die Tante', ar: 'العمة / الخالة', example: 'Meine Tante arbeitet hier.', exampleAr: 'عمتي تعمل هنا.', type: 'noun', gender: 'f', plural: 'die Tanten' },
            { id: 'w_2_1_13', de: 'die Familie', ar: 'العائلة', example: 'Die Familie isst zusammen.', exampleAr: 'العائلة تأكل معاً.', type: 'noun', gender: 'f', plural: 'die Familien' },
            { id: 'w_2_1_14', de: 'der Mann', ar: 'الرجل / الزوج', example: 'Der Mann liest ein Buch.', exampleAr: 'الرجل يقرأ كتاباً.', type: 'noun', gender: 'm', plural: 'die Männer' },
            { id: 'w_2_1_15', de: 'die Frau', ar: 'المرأة / الزوجة', example: 'Die Frau kauft ein.', exampleAr: 'المرأة تتسوق.', type: 'noun', gender: 'f', plural: 'die Frauen' }
          ]
        },
        {
          id: 'level_2_2',
          title: 'الطعام والشراب',
          titleDe: 'Essen & Trinken',
          icon: '🍽️',
          words: [
            { id: 'w_2_2_1', de: 'das Brot', ar: 'الخبز', example: 'Ich esse gern Brot.', exampleAr: 'أحب أكل الخبز.', type: 'noun', gender: 'n', plural: 'die Brote' },
            { id: 'w_2_2_2', de: 'das Wasser', ar: 'الماء', example: 'Trink viel Wasser!', exampleAr: 'اشرب الكثير من الماء!', type: 'noun', gender: 'n', plural: 'die Wässer' },
            { id: 'w_2_2_3', de: 'der Kaffee', ar: 'القهوة', example: 'Ich brauche einen Kaffee.', exampleAr: 'أحتاج إلى قهوة.', type: 'noun', gender: 'm', plural: 'die Kaffees' },
            { id: 'w_2_2_4', de: 'der Tee', ar: 'الشاي', example: 'Trinkst du lieber Tee?', exampleAr: 'هل تفضل شرب الشاي؟', type: 'noun', gender: 'm', plural: 'die Tees' },
            { id: 'w_2_2_5', de: 'das Bier', ar: 'البيرة', example: 'In Deutschland trinkt man oft Bier.', exampleAr: 'في ألمانيا يشربون البيرة كثيراً.', type: 'noun', gender: 'n', plural: 'die Biere' },
            { id: 'w_2_2_6', de: 'die Milch', ar: 'الحليب', example: 'Milch ist gut für die Knochen.', exampleAr: 'الحليب مفيد للعظام.', type: 'noun', gender: 'f', plural: 'die Milche' },
            { id: 'w_2_2_7', de: 'der Apfel', ar: 'التفاحة', example: 'Ein Apfel pro Tag ist gesund.', exampleAr: 'تفاحة في اليوم صحية.', type: 'noun', gender: 'm', plural: 'die Äpfel' },
            { id: 'w_2_2_8', de: 'die Kartoffel', ar: 'البطاطس', example: 'Die Kartoffel ist sehr beliebt.', exampleAr: 'البطاطس مشهورة جداً.', type: 'noun', gender: 'f', plural: 'die Kartoffeln' },
            { id: 'w_2_2_9', de: 'das Fleisch', ar: 'اللحم', example: 'Ich esse kein Fleisch.', exampleAr: 'أنا لا آكل اللحم.', type: 'noun', gender: 'n', plural: 'die Fleische' },
            { id: 'w_2_2_10', de: 'der Reis', ar: 'الأرز', example: 'Wir essen Reis zum Mittagessen.', exampleAr: 'نحن نأكل الأرز على الغداء.', type: 'noun', gender: 'm', plural: 'die Reise' },
            { id: 'w_2_2_11', de: 'die Suppe', ar: 'الحساء / الشوربة', example: 'Die Suppe ist heiß.', exampleAr: 'الحساء ساخن.', type: 'noun', gender: 'f', plural: 'die Suppen' },
            { id: 'w_2_2_12', de: 'das Ei', ar: 'البيضة', example: 'Ich koche ein Ei.', exampleAr: 'أنا أسلق بيضة.', type: 'noun', gender: 'n', plural: 'die Eier' },
            { id: 'w_2_2_13', de: 'der Käse', ar: 'الجبن', example: 'Der Käse schmeckt gut.', exampleAr: 'الجبن طعمه جيد.', type: 'noun', gender: 'm', plural: 'die Käse' },
            { id: 'w_2_2_14', de: 'die Butter', ar: 'الزبدة', example: 'Ich brauche Butter für das Brot.', exampleAr: 'أحتاج الزبدة للخبز.', type: 'noun', gender: 'f', plural: 'die Buttern' },
            { id: 'w_2_2_15', de: 'der Zucker', ar: 'السكر', example: 'Wie viel Zucker möchtest du?', exampleAr: 'كم مقدار السكر الذي تريده؟', type: 'noun', gender: 'm', plural: 'die Zucker' }
          ]
        },
        {
          id: 'level_2_3',
          title: 'الجسم',
          titleDe: 'Körper',
          icon: '💪',
          words: [
            { id: 'w_2_3_1', de: 'der Kopf', ar: 'الرأس', example: 'Mein Kopf tut weh.', exampleAr: 'رأسي يؤلمني.', type: 'noun', gender: 'm', plural: 'die Köpfe' },
            { id: 'w_2_3_2', de: 'das Auge', ar: 'العين', example: 'Sie hat blaue Augen.', exampleAr: 'لديها عيون زرقاء.', type: 'noun', gender: 'n', plural: 'die Augen' },
            { id: 'w_2_3_3', de: 'die Nase', ar: 'الأنف', example: 'Der Hund hat eine kalte Nase.', exampleAr: 'الكلب لديه أنف بارد.', type: 'noun', gender: 'f', plural: 'die Nasen' },
            { id: 'w_2_3_4', de: 'der Mund', ar: 'الفم', example: 'Öffnen Sie bitte den Mund.', exampleAr: 'افتح فمك من فضلك.', type: 'noun', gender: 'm', plural: 'die Münder' },
            { id: 'w_2_3_5', de: 'das Ohr', ar: 'الأذن', example: 'Ich höre mit den Ohren.', exampleAr: 'أسمع بأذني.', type: 'noun', gender: 'n', plural: 'die Ohren' },
            { id: 'w_2_3_6', de: 'die Hand', ar: 'اليد', example: 'Gib mir deine Hand.', exampleAr: 'أعطني يدك.', type: 'noun', gender: 'f', plural: 'die Hände' },
            { id: 'w_2_3_7', de: 'der Fuß', ar: 'القدم', example: 'Der rechte Fuß tut weh.', exampleAr: 'القدم اليمنى تؤلمني.', type: 'noun', gender: 'm', plural: 'die Füße' },
            { id: 'w_2_3_8', de: 'der Arm', ar: 'الذراع', example: 'Er hat lange Arme.', exampleAr: 'لديه أذرع طويلة.', type: 'noun', gender: 'm', plural: 'die Arme' },
            { id: 'w_2_3_9', de: 'das Bein', ar: 'الساق', example: 'Das Bein ist gebrochen.', exampleAr: 'الساق مكسورة.', type: 'noun', gender: 'n', plural: 'die Beine' },
            { id: 'w_2_3_10', de: 'der Finger', ar: 'الإصبع', example: 'Sie trägt einen Ring am Finger.', exampleAr: 'هي ترتدي خاتماً في إصبعها.', type: 'noun', gender: 'm', plural: 'die Finger' },
            { id: 'w_2_3_11', de: 'das Herz', ar: 'القلب', example: 'Das Herz schlägt schnell.', exampleAr: 'القلب ينبض بسرعة.', type: 'noun', gender: 'n', plural: 'die Herzen' },
            { id: 'w_2_3_12', de: 'der Rücken', ar: 'الظهر', example: 'Mein Rücken schmerzt.', exampleAr: 'ظهري يؤلمني.', type: 'noun', gender: 'm', plural: 'die Rücken' },
            { id: 'w_2_3_13', de: 'der Bauch', ar: 'البطن', example: 'Ich habe Bauchschmerzen.', exampleAr: 'لدي ألم في البطن.', type: 'noun', gender: 'm', plural: 'die Bäuche' },
            { id: 'w_2_3_14', de: 'die Schulter', ar: 'الكتف', example: 'Die Tasche hängt an der Schulter.', exampleAr: 'الحقيبة معلقة على الكتف.', type: 'noun', gender: 'f', plural: 'die Schultern' },
            { id: 'w_2_3_15', de: 'das Gesicht', ar: 'الوجه', example: 'Bitte wasch dein Gesicht.', exampleAr: 'من فضلك اغسل وجهك.', type: 'noun', gender: 'n', plural: 'die Gesichter' }
          ]
        },
        {
          id: 'level_2_4',
          title: 'الملابس',
          titleDe: 'Kleidung',
          icon: '👕',
          words: [
            { id: 'w_2_4_1', de: 'das Hemd', ar: 'القميص', example: 'Ich bügele mein Hemd.', exampleAr: 'أنا أكوي قميصي.', type: 'noun', gender: 'n', plural: 'die Hemden' },
            { id: 'w_2_4_2', de: 'die Hose', ar: 'البنطلون', example: 'Die Hose ist zu kurz.', exampleAr: 'البنطلون قصير جداً.', type: 'noun', gender: 'f', plural: 'die Hosen' },
            { id: 'w_2_4_3', de: 'der Schuh', ar: 'الحذاء', example: 'Wo ist mein anderer Schuh?', exampleAr: 'أين حذائي الآخر؟', type: 'noun', gender: 'm', plural: 'die Schuhe' },
            { id: 'w_2_4_4', de: 'die Jacke', ar: 'السترة / الجاكيت', example: 'Zieh deine Jacke an.', exampleAr: 'ارتدِ سترتك.', type: 'noun', gender: 'f', plural: 'die Jacken' },
            { id: 'w_2_4_5', de: 'der Mantel', ar: 'المعطف', example: 'Der Mantel ist sehr warm.', exampleAr: 'المعطف دافئ جداً.', type: 'noun', gender: 'm', plural: 'die Mäntel' },
            { id: 'w_2_4_6', de: 'das Kleid', ar: 'الفستان', example: 'Das Kleid passt dir gut.', exampleAr: 'الفستان يناسبك جيداً.', type: 'noun', gender: 'n', plural: 'die Kleider' },
            { id: 'w_2_4_7', de: 'der Hut', ar: 'القبعة', example: 'Der Hut schützt vor der Sonne.', exampleAr: 'القبعة تحمي من الشمس.', type: 'noun', gender: 'm', plural: 'die Hüte' },
            { id: 'w_2_4_8', de: 'die Socke', ar: 'الجورب', example: 'Ich brauche neue Socken.', exampleAr: 'أحتاج إلى جوارب جديدة.', type: 'noun', gender: 'f', plural: 'die Socken' },
            { id: 'w_2_4_9', de: 'der Pullover', ar: 'البلوفر', example: 'Der Pullover ist aus Wolle.', exampleAr: 'البلوفر مصنوع من الصوف.', type: 'noun', gender: 'm', plural: 'die Pullover' },
            { id: 'w_2_4_10', de: 'die Brille', ar: 'النظارة', example: 'Ich suche meine Brille.', exampleAr: 'أبحث عن نظارتي.', type: 'noun', gender: 'f', plural: 'die Brillen' },
            { id: 'w_2_4_11', de: 'der Gürtel', ar: 'الحزام', example: 'Der Gürtel ist aus Leder.', exampleAr: 'الحزام مصنوع من الجلد.', type: 'noun', gender: 'm', plural: 'die Gürtel' },
            { id: 'w_2_4_12', de: 'der Rock', ar: 'التنورة', example: 'Sie trägt einen kurzen Rock.', exampleAr: 'هي ترتدي تنورة قصيرة.', type: 'noun', gender: 'm', plural: 'die Röcke' },
            { id: 'w_2_4_13', de: 'die Krawatte', ar: 'ربطة العنق', example: 'Die Krawatte passt zum Hemd.', exampleAr: 'ربطة العنق تناسب القميص.', type: 'noun', gender: 'f', plural: 'die Krawatten' },
            { id: 'w_2_4_14', de: 'anziehen', ar: 'يرتدي', example: 'Ich muss mich anziehen.', exampleAr: 'يجب أن أرتدي ملابسي.', type: 'verb', gender: null, plural: null },
            { id: 'w_2_4_15', de: 'ausziehen', ar: 'يخلع', example: 'Bitte die Schuhe ausziehen.', exampleAr: 'من فضلك اخلع حذاءك.', type: 'verb', gender: null, plural: null }
          ]
        },
        {
          id: 'level_2_5',
          title: 'المنزل',
          titleDe: 'Haus',
          icon: '🏠',
          words: [
            { id: 'w_2_5_1', de: 'das Haus', ar: 'المنزل', example: 'Das Haus ist groß.', exampleAr: 'المنزل كبير.', type: 'noun', gender: 'n', plural: 'die Häuser' },
            { id: 'w_2_5_2', de: 'die Wohnung', ar: 'الشقة', example: 'Wir suchen eine neue Wohnung.', exampleAr: 'نحن نبحث عن شقة جديدة.', type: 'noun', gender: 'f', plural: 'die Wohnungen' },
            { id: 'w_2_5_3', de: 'die Küche', ar: 'المطبخ', example: 'In der Küche koche ich.', exampleAr: 'في المطبخ أنا أطبخ.', type: 'noun', gender: 'f', plural: 'die Küchen' },
            { id: 'w_2_5_4', de: 'das Schlafzimmer', ar: 'غرفة النوم', example: 'Das Schlafzimmer ist ruhig.', exampleAr: 'غرفة النوم هادئة.', type: 'noun', gender: 'n', plural: 'die Schlafzimmer' },
            { id: 'w_2_5_5', de: 'das Badezimmer', ar: 'الحمام', example: 'Das Badezimmer hat eine Dusche.', exampleAr: 'الحمام فيه دوش.', type: 'noun', gender: 'n', plural: 'die Badezimmer' },
            { id: 'w_2_5_6', de: 'das Wohnzimmer', ar: 'غرفة المعيشة', example: 'Wir sehen fern im Wohnzimmer.', exampleAr: 'نحن نشاهد التلفاز في غرفة المعيشة.', type: 'noun', gender: 'n', plural: 'die Wohnzimmer' },
            { id: 'w_2_5_7', de: 'die Tür', ar: 'الباب', example: 'Mach bitte die Tür zu.', exampleAr: 'من فضلك أغلق الباب.', type: 'noun', gender: 'f', plural: 'die Türen' },
            { id: 'w_2_5_8', de: 'das Fenster', ar: 'النافذة', example: 'Das Fenster ist offen.', exampleAr: 'النافذة مفتوحة.', type: 'noun', gender: 'n', plural: 'die Fenster' },
            { id: 'w_2_5_9', de: 'der Tisch', ar: 'الطاولة', example: 'Das Essen steht auf dem Tisch.', exampleAr: 'الطعام موجود على الطاولة.', type: 'noun', gender: 'm', plural: 'die Tische' },
            { id: 'w_2_5_10', de: 'der Stuhl', ar: 'الكرسي', example: 'Setz dich auf den Stuhl.', exampleAr: 'اجلس على الكرسي.', type: 'noun', gender: 'm', plural: 'die Stühle' },
            { id: 'w_2_5_11', de: 'das Bett', ar: 'السرير', example: 'Das Bett ist sehr bequem.', exampleAr: 'السرير مريح جداً.', type: 'noun', gender: 'n', plural: 'die Betten' },
            { id: 'w_2_5_12', de: 'der Schrank', ar: 'الدولاب / الخزانة', example: 'Die Kleidung ist im Schrank.', exampleAr: 'الملابس في الخزانة.', type: 'noun', gender: 'm', plural: 'die Schränke' },
            { id: 'w_2_5_13', de: 'die Lampe', ar: 'المصباح', example: 'Die Lampe ist hell.', exampleAr: 'المصباح مضيء.', type: 'noun', gender: 'f', plural: 'die Lampen' },
            { id: 'w_2_5_14', de: 'der Schlüssel', ar: 'المفتاح', example: 'Ich habe meinen Schlüssel verloren.', exampleAr: 'لقد فقدت مفتاحي.', type: 'noun', gender: 'm', plural: 'die Schlüssel' },
            { id: 'w_2_5_15', de: 'der Garten', ar: 'الحديقة', example: 'Kinder spielen im Garten.', exampleAr: 'الأطفال يلعبون في الحديقة.', type: 'noun', gender: 'm', plural: 'die Gärten' }
          ]
        }
      ]
    },
    {
      id: 'course_3',
      title: 'المتوسط ١',
      titleDe: 'Mittelstufe 1',
      description: 'تعميق فهم اللغة الألمانية',
      icon: '🌳',
      level: 'A2',
      levels: [
        {
          id: 'level_3_1',
          title: 'الأفعال الأساسية',
          titleDe: 'Basis Verben',
          icon: '🏃',
          words: [
            { id: 'w_3_1_1', de: 'sein', ar: 'يكون', example: 'Ich bin (sein) glücklich.', exampleAr: 'أنا سعيد.', type: 'verb', gender: null, plural: null },
            { id: 'w_3_1_2', de: 'haben', ar: 'يملك', example: 'Wir haben (haben) Zeit.', exampleAr: 'نحن لدينا وقت.', type: 'verb', gender: null, plural: null },
            { id: 'w_3_1_3', de: 'machen', ar: 'يفعل / يصنع', example: 'Was machst du?', exampleAr: 'ماذا تفعل؟', type: 'verb', gender: null, plural: null },
            { id: 'w_3_1_4', de: 'gehen', ar: 'يذهب', example: 'Ich gehe nach Hause.', exampleAr: 'أنا أذهب إلى المنزل.', type: 'verb', gender: null, plural: null },
            { id: 'w_3_1_5', de: 'kommen', ar: 'يأتي', example: 'Wann kommst du?', exampleAr: 'متى تأتي؟', type: 'verb', gender: null, plural: null },
            { id: 'w_3_1_6', de: 'sehen', ar: 'يرى', example: 'Ich sehe einen Vogel.', exampleAr: 'أنا أرى طائراً.', type: 'verb', gender: null, plural: null },
            { id: 'w_3_1_7', de: 'essen', ar: 'يأكل', example: 'Er isst (essen) einen Apfel.', exampleAr: 'هو يأكل تفاحة.', type: 'verb', gender: null, plural: null },
            { id: 'w_3_1_8', de: 'trinken', ar: 'يشرب', example: 'Sie trinken Saft.', exampleAr: 'هم يشربون العصير.', type: 'verb', gender: null, plural: null },
            { id: 'w_3_1_9', de: 'sprechen', ar: 'يتحدث', example: 'Sprichst du (sprechen) Deutsch?', exampleAr: 'هل تتحدث الألمانية؟', type: 'verb', gender: null, plural: null },
            { id: 'w_3_1_10', de: 'lesen', ar: 'يقرأ', example: 'Ich lese ein Buch.', exampleAr: 'أنا أقرأ كتاباً.', type: 'verb', gender: null, plural: null },
            { id: 'w_3_1_11', de: 'schreiben', ar: 'يكتب', example: 'Bitte schreib mir.', exampleAr: 'من فضلك اكتب لي.', type: 'verb', gender: null, plural: null },
            { id: 'w_3_1_12', de: 'arbeiten', ar: 'يعمل', example: 'Sie arbeitet (arbeiten) im Büro.', exampleAr: 'هي تعمل في المكتب.', type: 'verb', gender: null, plural: null },
            { id: 'w_3_1_13', de: 'spielen', ar: 'يلعب', example: 'Die Kinder spielen draußen.', exampleAr: 'الأطفال يلعبون بالخارج.', type: 'verb', gender: null, plural: null },
            { id: 'w_3_1_14', de: 'schlafen', ar: 'ينام', example: 'Ich schlafe (schlafen) 8 Stunden.', exampleAr: 'أنا أنام 8 ساعات.', type: 'verb', gender: null, plural: null },
            { id: 'w_3_1_15', de: 'kaufen', ar: 'يشتري', example: 'Ich kaufe Brot.', exampleAr: 'أنا أشتري الخبز.', type: 'verb', gender: null, plural: null }
          ]
        },
        {
          id: 'level_3_2',
          title: 'في المدينة',
          titleDe: 'In der Stadt',
          icon: '🏙️',
          words: [
            { id: 'w_3_2_1', de: 'die Stadt', ar: 'المدينة', example: 'Berlin ist eine große Stadt.', exampleAr: 'برلين مدينة كبيرة.', type: 'noun', gender: 'f', plural: 'die Städte' },
            { id: 'w_3_2_2', de: 'die Straße', ar: 'الشارع', example: 'Die Straße ist lang.', exampleAr: 'الشارع طويل.', type: 'noun', gender: 'f', plural: 'die Straßen' },
            { id: 'w_3_2_3', de: 'der Bahnhof', ar: 'محطة القطار', example: 'Wo ist der Bahnhof?', exampleAr: 'أين محطة القطار؟', type: 'noun', gender: 'm', plural: 'die Bahnhöfe' },
            { id: 'w_3_2_4', de: 'die Haltestelle', ar: 'الموقف (حافلة/ترام)', example: 'An der nächsten Haltestelle steige ich aus.', exampleAr: 'في الموقف القادم سأنزل.', type: 'noun', gender: 'f', plural: 'die Haltestellen' },
            { id: 'w_3_2_5', de: 'das Restaurant', ar: 'المطعم', example: 'Das Restaurant ist teuer.', exampleAr: 'المطعم غالي.', type: 'noun', gender: 'n', plural: 'die Restaurants' },
            { id: 'w_3_2_6', de: 'der Supermarkt', ar: 'السوبر ماركت', example: 'Ich kaufe im Supermarkt ein.', exampleAr: 'أنا أتسوق في السوبر ماركت.', type: 'noun', gender: 'm', plural: 'die Supermärkte' },
            { id: 'w_3_2_7', de: 'die Apotheke', ar: 'الصيدلية', example: 'Die Apotheke ist geöffnet.', exampleAr: 'الصيدلية مفتوحة.', type: 'noun', gender: 'f', plural: 'die Apotheken' },
            { id: 'w_3_2_8', de: 'das Krankenhaus', ar: 'المستشفى', example: 'Das Krankenhaus ist in der Nähe.', exampleAr: 'المستشفى قريب.', type: 'noun', gender: 'n', plural: 'die Krankenhäuser' },
            { id: 'w_3_2_9', de: 'die Schule', ar: 'المدرسة', example: 'Die Kinder gehen zur Schule.', exampleAr: 'الأطفال يذهبون إلى المدرسة.', type: 'noun', gender: 'f', plural: 'die Schulen' },
            { id: 'w_3_2_10', de: 'die Universität', ar: 'الجامعة', example: 'Er studiert an der Universität.', exampleAr: 'هو يدرس في الجامعة.', type: 'noun', gender: 'f', plural: 'die Universitäten' },
            { id: 'w_3_2_11', de: 'die Bank', ar: 'البنك', example: 'Ich muss zur Bank gehen.', exampleAr: 'يجب أن أذهب إلى البنك.', type: 'noun', gender: 'f', plural: 'die Banken' },
            { id: 'w_3_2_12', de: 'die Post', ar: 'مكتب البريد', example: 'Gibt es hier eine Post?', exampleAr: 'هل يوجد مكتب بريد هنا؟', type: 'noun', gender: 'f', plural: 'die Posten' },
            { id: 'w_3_2_13', de: 'das Hotel', ar: 'الفندق', example: 'Unser Hotel ist komfortabel.', exampleAr: 'فندقنا مريح.', type: 'noun', gender: 'n', plural: 'die Hotels' },
            { id: 'w_3_2_14', de: 'der Park', ar: 'الحديقة العامة', example: 'Wir spazieren im Park.', exampleAr: 'نحن نتنزه في الحديقة العامة.', type: 'noun', gender: 'm', plural: 'die Parks' },
            { id: 'w_3_2_15', de: 'die Kirche', ar: 'الكنيسة', example: 'Die Kirche ist alt.', exampleAr: 'الكنيسة قديمة.', type: 'noun', gender: 'f', plural: 'die Kirchen' }
          ]
        },
        {
          id: 'level_3_3',
          title: 'السفر والمواصلات',
          titleDe: 'Reisen & Transport',
          icon: '✈️',
          words: [
            { id: 'w_3_3_1', de: 'der Zug', ar: 'القطار', example: 'Der Zug fährt pünktlich ab.', exampleAr: 'يغادر القطار في الموعد.', type: 'noun', gender: 'm', plural: 'die Züge' },
            { id: 'w_3_3_2', de: 'das Auto', ar: 'السيارة', example: 'Das Auto ist schnell.', exampleAr: 'السيارة سريعة.', type: 'noun', gender: 'n', plural: 'die Autos' },
            { id: 'w_3_3_3', de: 'der Bus', ar: 'الحافلة', example: 'Wir warten auf den Bus.', exampleAr: 'نحن ننتظر الحافلة.', type: 'noun', gender: 'm', plural: 'die Busse' },
            { id: 'w_3_3_4', de: 'das Flugzeug', ar: 'الطائرة', example: 'Das Flugzeug landet jetzt.', exampleAr: 'الطائرة تهبط الآن.', type: 'noun', gender: 'n', plural: 'die Flugzeuge' },
            { id: 'w_3_3_5', de: 'das Fahrrad', ar: 'الدراجة', example: 'Ich fahre oft Fahrrad.', exampleAr: 'أنا أقود الدراجة غالباً.', type: 'noun', gender: 'n', plural: 'die Fahrräder' },
            { id: 'w_3_3_6', de: 'der Flughafen', ar: 'المطار', example: 'Wie komme ich zum Flughafen?', exampleAr: 'كيف أصل إلى المطار؟', type: 'noun', gender: 'm', plural: 'die Flughäfen' },
            { id: 'w_3_3_7', de: 'die Fahrkarte', ar: 'التذكرة', example: 'Ich brauche eine Fahrkarte nach München.', exampleAr: 'أحتاج تذكرة إلى ميونخ.', type: 'noun', gender: 'f', plural: 'die Fahrkarten' },
            { id: 'w_3_3_8', de: 'die Reise', ar: 'الرحلة', example: 'Gute Reise!', exampleAr: 'رحلة سعيدة!', type: 'noun', gender: 'f', plural: 'die Reisen' },
            { id: 'w_3_3_9', de: 'der Koffer', ar: 'حقيبة السفر', example: 'Der Koffer ist schwer.', exampleAr: 'حقيبة السفر ثقيلة.', type: 'noun', gender: 'm', plural: 'die Koffer' },
            { id: 'w_3_3_10', de: 'der Pass', ar: 'جواز السفر', example: 'Hier ist mein Pass.', exampleAr: 'تفضل جواز سفري.', type: 'noun', gender: 'm', plural: 'die Pässe' },
            { id: 'w_3_3_11', de: 'das Visum', ar: 'التأشيرة', example: 'Brauche ich ein Visum?', exampleAr: 'هل أحتاج إلى تأشيرة؟', type: 'noun', gender: 'n', plural: 'die Visa' },
            { id: 'w_3_3_12', de: 'die Grenze', ar: 'الحدود', example: 'Wir überqueren die Grenze.', exampleAr: 'نحن نعبر الحدود.', type: 'noun', gender: 'f', plural: 'die Grenzen' },
            { id: 'w_3_3_13', de: 'fliegen', ar: 'يطير / يسافر بالطائرة', example: 'Wir fliegen nach Spanien.', exampleAr: 'نحن نسافر بالطائرة إلى إسبانيا.', type: 'verb', gender: null, plural: null },
            { id: 'w_3_3_14', de: 'fahren', ar: 'يسافر / يقود', example: 'Er fährt mit dem Auto.', exampleAr: 'هو يسافر بالسيارة.', type: 'verb', gender: null, plural: null },
            { id: 'w_3_3_15', de: 'das Ticket', ar: 'التذكرة', example: 'Hast du das Ticket gekauft?', exampleAr: 'هل اشتريت التذكرة؟', type: 'noun', gender: 'n', plural: 'die Tickets' }
          ]
        },
        {
          id: 'level_3_4',
          title: 'العمل والمهن',
          titleDe: 'Arbeit & Berufe',
          icon: '💼',
          words: [
            { id: 'w_3_4_1', de: 'der Arzt / die Ärztin', ar: 'الطبيب / الطبيبة', example: 'Der Arzt hilft kranken Menschen.', exampleAr: 'الطبيب يساعد المرضى.', type: 'noun', gender: 'm', plural: 'die Ärzte' },
            { id: 'w_3_4_2', de: 'der Lehrer / die Lehrerin', ar: 'المعلم / المعلمة', example: 'Der Lehrer erklärt die Aufgabe.', exampleAr: 'المعلم يشرح المهمة.', type: 'noun', gender: 'm', plural: 'die Lehrer' },
            { id: 'w_3_4_3', de: 'der Ingenieur', ar: 'المهندس', example: 'Der Ingenieur plant Brücken.', exampleAr: 'المهندس يخطط للجسور.', type: 'noun', gender: 'm', plural: 'die Ingenieure' },
            { id: 'w_3_4_4', de: 'der Koch', ar: 'الطباخ', example: 'Der Koch bereitet das Essen zu.', exampleAr: 'الطباخ يعد الطعام.', type: 'noun', gender: 'm', plural: 'die Köche' },
            { id: 'w_3_4_5', de: 'der Polizist', ar: 'الشرطي', example: 'Der Polizist regelt den Verkehr.', exampleAr: 'الشرطي ينظم المرور.', type: 'noun', gender: 'm', plural: 'die Polizisten' },
            { id: 'w_3_4_6', de: 'die Krankenschwester', ar: 'الممرضة', example: 'Die Krankenschwester misst das Fieber.', exampleAr: 'الممرضة تقيس درجة الحرارة.', type: 'noun', gender: 'f', plural: 'die Krankenschwestern' },
            { id: 'w_3_4_7', de: 'der Anwalt', ar: 'المحامي', example: 'Der Anwalt berät seinen Mandanten.', exampleAr: 'المحامي ينصح موكله.', type: 'noun', gender: 'm', plural: 'die Anwälte' },
            { id: 'w_3_4_8', de: 'der Verkäufer', ar: 'البائع', example: 'Der Verkäufer ist sehr freundlich.', exampleAr: 'البائع ودود جداً.', type: 'noun', gender: 'm', plural: 'die Verkäufer' },
            { id: 'w_3_4_9', de: 'die Arbeit', ar: 'العمل', example: 'Die Arbeit macht Spaß.', exampleAr: 'العمل ممتع.', type: 'noun', gender: 'f', plural: 'die Arbeiten' },
            { id: 'w_3_4_10', de: 'das Büro', ar: 'المكتب', example: 'Ich bin im Büro.', exampleAr: 'أنا في المكتب.', type: 'noun', gender: 'n', plural: 'die Büros' },
            { id: 'w_3_4_11', de: 'die Firma', ar: 'الشركة', example: 'Die Firma hat viele Mitarbeiter.', exampleAr: 'الشركة لديها العديد من الموظفين.', type: 'noun', gender: 'f', plural: 'die Firmen' },
            { id: 'w_3_4_12', de: 'der Chef', ar: 'المدير / الرئيس', example: 'Mein Chef ist sehr nett.', exampleAr: 'مديري لطيف جداً.', type: 'noun', gender: 'm', plural: 'die Chefs' },
            { id: 'w_3_4_13', de: 'der Kollege', ar: 'الزميل', example: 'Der Kollege hilft mir.', exampleAr: 'الزميل يساعدني.', type: 'noun', gender: 'm', plural: 'die Kollegen' },
            { id: 'w_3_4_14', de: 'verdienen', ar: 'يكسب (نقوداً)', example: 'Er verdient viel Geld.', exampleAr: 'هو يكسب الكثير من المال.', type: 'verb', gender: null, plural: null },
            { id: 'w_3_4_15', de: 'der Feierabend', ar: 'نهاية وقت العمل', example: 'Endlich Feierabend!', exampleAr: 'أخيراً انتهى وقت العمل!', type: 'noun', gender: 'm', plural: 'die Feierabende' }
          ]
        },
        {
          id: 'level_3_5',
          title: 'الطقس والطبيعة',
          titleDe: 'Wetter & Natur',
          icon: '☀️',
          words: [
            { id: 'w_3_5_1', de: 'das Wetter', ar: 'الطقس', example: 'Das Wetter ist heute schön.', exampleAr: 'الطقس جميل اليوم.', type: 'noun', gender: 'n', plural: 'die Wetter' },
            { id: 'w_3_5_2', de: 'die Sonne', ar: 'الشمس', example: 'Die Sonne scheint.', exampleAr: 'الشمس تشرق.', type: 'noun', gender: 'f', plural: 'die Sonnen' },
            { id: 'w_3_5_3', de: 'der Regen', ar: 'المطر', example: 'Wir brauchen Regen für die Pflanzen.', exampleAr: 'نحتاج المطر للنباتات.', type: 'noun', gender: 'm', plural: 'die Regen' },
            { id: 'w_3_5_4', de: 'der Schnee', ar: 'الثلج', example: 'Die Kinder spielen im Schnee.', exampleAr: 'الأطفال يلعبون في الثلج.', type: 'noun', gender: 'm', plural: 'die Schnee' },
            { id: 'w_3_5_5', de: 'der Wind', ar: 'الرياح', example: 'Der Wind ist stark.', exampleAr: 'الرياح قوية.', type: 'noun', gender: 'm', plural: 'die Winde' },
            { id: 'w_3_5_6', de: 'kalt', ar: 'بارد', example: 'Mir ist kalt.', exampleAr: 'أشعر بالبرد.', type: 'adjective', gender: null, plural: null },
            { id: 'w_3_5_7', de: 'warm', ar: 'دافئ', example: 'Das Wasser ist angenehm warm.', exampleAr: 'الماء دافئ بشكل مريح.', type: 'adjective', gender: null, plural: null },
            { id: 'w_3_5_8', de: 'heiß', ar: 'حار', example: 'Im Sommer ist es sehr heiß.', exampleAr: 'في الصيف يكون الجو حاراً جداً.', type: 'adjective', gender: null, plural: null },
            { id: 'w_3_5_9', de: 'der Baum', ar: 'الشجرة', example: 'Der Baum ist alt.', exampleAr: 'الشجرة قديمة.', type: 'noun', gender: 'm', plural: 'die Bäume' },
            { id: 'w_3_5_10', de: 'die Blume', ar: 'الزهرة', example: 'Die Blume duftet gut.', exampleAr: 'الزهرة رائحتها طيبة.', type: 'noun', gender: 'f', plural: 'die Blumen' },
            { id: 'w_3_5_11', de: 'der Berg', ar: 'الجبل', example: 'Wir wandern auf den Berg.', exampleAr: 'نحن نتسلق الجبل.', type: 'noun', gender: 'm', plural: 'die Berge' },
            { id: 'w_3_5_12', de: 'das Meer', ar: 'البحر', example: 'Wir fahren ans Meer.', exampleAr: 'نحن نذهب إلى البحر.', type: 'noun', gender: 'n', plural: 'die Meere' },
            { id: 'w_3_5_13', de: 'der Fluss', ar: 'النهر', example: 'Der Fluss ist tief.', exampleAr: 'النهر عميق.', type: 'noun', gender: 'm', plural: 'die Flüsse' },
            { id: 'w_3_5_14', de: 'der See', ar: 'البحيرة', example: 'Wir schwimmen im See.', exampleAr: 'نحن نسبح في البحيرة.', type: 'noun', gender: 'm', plural: 'die Seen' },
            { id: 'w_3_5_15', de: 'der Wald', ar: 'الغابة', example: 'Der Wald ist grün.', exampleAr: 'الغابة خضراء.', type: 'noun', gender: 'm', plural: 'die Wälder' }
          ]
        }
      ]
    },
    {
      id: 'course_4',
      title: 'المتوسط ٢',
      titleDe: 'Mittelstufe 2',
      description: 'الاستعداد لمستوى B1',
      icon: '🌲',
      level: 'A2/B1',
      levels: [
        {
          id: 'level_4_1',
          title: 'المشاعر والأحاسيس',
          titleDe: 'Gefühle & Emotionen',
          icon: '❤️',
          words: [
            { id: 'w_4_1_1', de: 'glücklich', ar: 'سعيد', example: 'Ich bin sehr glücklich.', exampleAr: 'أنا سعيد جداً.', type: 'adjective', gender: null, plural: null },
            { id: 'w_4_1_2', de: 'traurig', ar: 'حزين', example: 'Warum bist du traurig?', exampleAr: 'لماذا أنت حزين؟', type: 'adjective', gender: null, plural: null },
            { id: 'w_4_1_3', de: 'müde', ar: 'متعب', example: 'Ich bin müde und möchte schlafen.', exampleAr: 'أنا متعب وأريد النوم.', type: 'adjective', gender: null, plural: null },
            { id: 'w_4_1_4', de: 'wütend', ar: 'غاضب', example: 'Er ist wütend auf mich.', exampleAr: 'إنه غاضب مني.', type: 'adjective', gender: null, plural: null },
            { id: 'w_4_1_5', de: 'überrascht', ar: 'متفاجئ', example: 'Sie war sehr überrascht.', exampleAr: 'لقد كانت متفاجئة جداً.', type: 'adjective', gender: null, plural: null },
            { id: 'w_4_1_6', de: 'nervös', ar: 'عصبي / متوتر', example: 'Vor der Prüfung bin ich nervös.', exampleAr: 'قبل الامتحان أكون متوتراً.', type: 'adjective', gender: null, plural: null },
            { id: 'w_4_1_7', de: 'zufrieden', ar: 'راضٍ', example: 'Ich bin mit dem Ergebnis zufrieden.', exampleAr: 'أنا راضٍ عن النتيجة.', type: 'adjective', gender: null, plural: null },
            { id: 'w_4_1_8', de: 'enttäuscht', ar: 'محبط / خائب الأمل', example: 'Wir waren sehr enttäuscht.', exampleAr: 'كنا محبطين جداً.', type: 'adjective', gender: null, plural: null },
            { id: 'w_4_1_9', de: 'stolz', ar: 'فخور', example: 'Ich bin stolz auf dich.', exampleAr: 'أنا فخور بك.', type: 'adjective', gender: null, plural: null },
            { id: 'w_4_1_10', de: 'ängstlich', ar: 'خائف', example: 'Das Kind ist ängstlich im Dunkeln.', exampleAr: 'الطفل خائف في الظلام.', type: 'adjective', gender: null, plural: null },
            { id: 'w_4_1_11', de: 'langweilig', ar: 'ممل', example: 'Der Film war langweilig.', exampleAr: 'الفيلم كان مملاً.', type: 'adjective', gender: null, plural: null },
            { id: 'w_4_1_12', de: 'das Gefühl', ar: 'الشعور', example: 'Das ist ein schönes Gefühl.', exampleAr: 'هذا شعور جميل.', type: 'noun', gender: 'n', plural: 'die Gefühle' },
            { id: 'w_4_1_13', de: 'die Angst', ar: 'الخوف', example: 'Hast du Angst?', exampleAr: 'هل تشعر بالخوف؟', type: 'noun', gender: 'f', plural: 'die Ängste' },
            { id: 'w_4_1_14', de: 'lieben', ar: 'يحب', example: 'Ich liebe dich.', exampleAr: 'أنا أحبك.', type: 'verb', gender: null, plural: null },
            { id: 'w_4_1_15', de: 'hassen', ar: 'يكره', example: 'Ich hasse früh aufzustehen.', exampleAr: 'أكره الاستيقاظ مبكراً.', type: 'verb', gender: null, plural: null }
          ]
        },
        {
          id: 'level_4_2',
          title: 'الصحة',
          titleDe: 'Gesundheit',
          icon: '🏥',
          words: [
            { id: 'w_4_2_1', de: 'gesund', ar: 'صحي / معافى', example: 'Er isst sehr gesund.', exampleAr: 'هو يأكل بشكل صحي جداً.', type: 'adjective', gender: null, plural: null },
            { id: 'w_4_2_2', de: 'krank', ar: 'مريض', example: 'Sie ist heute krank.', exampleAr: 'هي مريضة اليوم.', type: 'adjective', gender: null, plural: null },
            { id: 'w_4_2_3', de: 'der Arzt', ar: 'الطبيب', example: 'Ich muss zum Arzt gehen.', exampleAr: 'يجب أن أذهب إلى الطبيب.', type: 'noun', gender: 'm', plural: 'die Ärzte' },
            { id: 'w_4_2_4', de: 'die Medizin', ar: 'الطب / الدواء', example: 'Nimm deine Medizin.', exampleAr: 'تناول دواءك.', type: 'noun', gender: 'f', plural: 'die Medizinen' },
            { id: 'w_4_2_5', de: 'die Tablette', ar: 'قرص الدواء', example: 'Nehmen Sie zwei Tabletten täglich.', exampleAr: 'تناول قرصين يومياً.', type: 'noun', gender: 'f', plural: 'die Tabletten' },
            { id: 'w_4_2_6', de: 'das Fieber', ar: 'الحمى / ارتفاع الحرارة', example: 'Das Kind hat Fieber.', exampleAr: 'الطفل يعاني من الحمى.', type: 'noun', gender: 'n', plural: 'die Fieber' },
            { id: 'w_4_2_7', de: 'der Schmerz', ar: 'الألم', example: 'Ich habe starke Schmerzen.', exampleAr: 'لدي ألم شديد.', type: 'noun', gender: 'm', plural: 'die Schmerzen' },
            { id: 'w_4_2_8', de: 'die Erkältung', ar: 'نزلة البرد', example: 'Ich habe eine Erkältung.', exampleAr: 'لدي نزلة برد.', type: 'noun', gender: 'f', plural: 'die Erkältungen' },
            { id: 'w_4_2_9', de: 'der Husten', ar: 'السعال', example: 'Der Husten ist schlimm.', exampleAr: 'السعال سيء.', type: 'noun', gender: 'm', plural: 'die Husten' },
            { id: 'w_4_2_10', de: 'der Termin', ar: 'الموعد', example: 'Ich habe einen Termin um 10 Uhr.', exampleAr: 'لدي موعد في العاشرة.', type: 'noun', gender: 'm', plural: 'die Termine' },
            { id: 'w_4_2_11', de: 'die Untersuchung', ar: 'الفحص', example: 'Die ärztliche Untersuchung dauerte lang.', exampleAr: 'الفحص الطبي استغرق طويلاً.', type: 'noun', gender: 'f', plural: 'die Untersuchungen' },
            { id: 'w_4_2_12', de: 'das Pflaster', ar: 'الضمادة (البلاستر)', example: 'Hast du ein Pflaster?', exampleAr: 'هل لديك ضمادة؟', type: 'noun', gender: 'n', plural: 'die Pflaster' },
            { id: 'w_4_2_13', de: 'die Apotheke', ar: 'الصيدلية', example: 'Die Apotheke ist nebenan.', exampleAr: 'الصيدلية بالجوار.', type: 'noun', gender: 'f', plural: 'die Apotheken' },
            { id: 'w_4_2_14', de: 'bluten', ar: 'ينزف', example: 'Mein Finger blutet.', exampleAr: 'إصبعي ينزف.', type: 'verb', gender: null, plural: null },
            { id: 'w_4_2_15', de: 'weh tun', ar: 'يؤلم', example: 'Mein Kopf tut weh.', exampleAr: 'رأسي يؤلمني.', type: 'verb', gender: null, plural: null }
          ]
        },
        {
          id: 'level_4_3',
          title: 'التسوق',
          titleDe: 'Einkaufen',
          icon: '🛒',
          words: [
            { id: 'w_4_3_1', de: 'kaufen', ar: 'يشتري', example: 'Ich möchte dieses Buch kaufen.', exampleAr: 'أريد شراء هذا الكتاب.', type: 'verb', gender: null, plural: null },
            { id: 'w_4_3_2', de: 'verkaufen', ar: 'يبيع', example: 'Er verkauft sein Auto.', exampleAr: 'هو يبيع سيارته.', type: 'verb', gender: null, plural: null },
            { id: 'w_4_3_3', de: 'der Preis', ar: 'السعر', example: 'Wie hoch ist der Preis?', exampleAr: 'كم السعر؟', type: 'noun', gender: 'm', plural: 'die Preise' },
            { id: 'w_4_3_4', de: 'teuer', ar: 'غالي', example: 'Das ist mir zu teuer.', exampleAr: 'هذا غالي جداً بالنسبة لي.', type: 'adjective', gender: null, plural: null },
            { id: 'w_4_3_5', de: 'billig', ar: 'رخيص', example: 'Dieses Angebot ist sehr billig.', exampleAr: 'هذا العرض رخيص جداً.', type: 'adjective', gender: null, plural: null },
            { id: 'w_4_3_6', de: 'das Geld', ar: 'المال', example: 'Ich habe nicht genug Geld dabei.', exampleAr: 'ليس معي مال كافٍ.', type: 'noun', gender: 'n', plural: 'die Gelder' },
            { id: 'w_4_3_7', de: 'die Kasse', ar: 'الخزينة (الكاشير)', example: 'Bitte zahlen Sie an der Kasse.', exampleAr: 'من فضلك ادفع عند الخزينة.', type: 'noun', gender: 'f', plural: 'die Kassen' },
            { id: 'w_4_3_8', de: 'der Laden', ar: 'المتجر', example: 'Der Laden schließt um 20 Uhr.', exampleAr: 'المتجر يغلق في الثامنة مساءً.', type: 'noun', gender: 'm', plural: 'die Läden' },
            { id: 'w_4_3_9', de: 'das Angebot', ar: 'العرض', example: 'Wir haben heute ein tolles Angebot.', exampleAr: 'لدينا اليوم عرض رائع.', type: 'noun', gender: 'n', plural: 'die Angebote' },
            { id: 'w_4_3_10', de: 'die Größe', ar: 'المقاس', example: 'Welche Größe brauchen Sie?', exampleAr: 'أي مقاس تحتاج؟', type: 'noun', gender: 'f', plural: 'die Größen' },
            { id: 'w_4_3_11', de: 'die Rechnung', ar: 'الفاتورة', example: 'Die Rechnung, bitte.', exampleAr: 'الفاتورة، من فضلك.', type: 'noun', gender: 'f', plural: 'die Rechnungen' },
            { id: 'w_4_3_12', de: 'bezahlen', ar: 'يدفع', example: 'Wie möchten Sie bezahlen?', exampleAr: 'كيف تود الدفع؟', type: 'verb', gender: null, plural: null },
            { id: 'w_4_3_13', de: 'die Quittung', ar: 'الإيصال', example: 'Brauchen Sie eine Quittung?', exampleAr: 'هل تحتاج إلى إيصال؟', type: 'noun', gender: 'f', plural: 'die Quittungen' },
            { id: 'w_4_3_14', de: 'die Tasche', ar: 'الحقيبة (الكيس)', example: 'Haben Sie eine Tasche für mich?', exampleAr: 'هل لديك حقيبة لي؟', type: 'noun', gender: 'f', plural: 'die Taschen' },
            { id: 'w_4_3_15', de: 'das Wechselgeld', ar: 'الباقي (من المال)', example: 'Hier ist Ihr Wechselgeld.', exampleAr: 'إليك باقي مالك.', type: 'noun', gender: 'n', plural: 'die Wechselgelder' }
          ]
        },
        {
          id: 'level_4_4',
          title: 'الجمل اليومية',
          titleDe: 'Tägliche Sätze',
          icon: '💬',
          words: [
            { id: 'w_4_4_1', de: 'Ich möchte...', ar: 'أرغب في...', example: 'Ich möchte ein Wasser, bitte.', exampleAr: 'أرغب في ماء، من فضلك.', type: 'phrase', gender: null, plural: null },
            { id: 'w_4_4_2', de: 'Können Sie mir helfen?', ar: 'هل يمكنك مساعدتي؟', example: 'Entschuldigung, können Sie mir helfen?', exampleAr: 'معذرة، هل يمكنك مساعدتي؟', type: 'phrase', gender: null, plural: null },
            { id: 'w_4_4_3', de: 'Wo ist...?', ar: 'أين يوجد...؟', example: 'Wo ist die Toilette?', exampleAr: 'أين يوجد الحمام؟', type: 'phrase', gender: null, plural: null },
            { id: 'w_4_4_4', de: 'Wie viel kostet das?', ar: 'كم يكلف هذا؟', example: 'Wie viel kostet das Buch?', exampleAr: 'كم يكلف هذا الكتاب؟', type: 'phrase', gender: null, plural: null },
            { id: 'w_4_4_5', de: 'Ich verstehe nicht', ar: 'لا أفهم', example: 'Tut mir leid, ich verstehe nicht.', exampleAr: 'أنا آسف، لا أفهم.', type: 'phrase', gender: null, plural: null },
            { id: 'w_4_4_6', de: 'Sprechen Sie Arabisch?', ar: 'هل تتحدث العربية؟', example: 'Sprechen Sie Arabisch oder Englisch?', exampleAr: 'هل تتحدث العربية أو الإنجليزية؟', type: 'phrase', gender: null, plural: null },
            { id: 'w_4_4_7', de: 'Ich spreche ein bisschen Deutsch', ar: 'أتحدث القليل من الألمانية', example: 'Ich lerne noch, ich spreche nur ein bisschen Deutsch.', exampleAr: 'أنا ما زلت أتعلم، أتحدث فقط القليل من الألمانية.', type: 'phrase', gender: null, plural: null },
            { id: 'w_4_4_8', de: 'Können Sie das bitte wiederholen?', ar: 'هل يمكنك تكرار ذلك من فضلك؟', example: 'Können Sie das bitte wiederholen? Es war zu schnell.', exampleAr: 'هل يمكنك تكرار ذلك من فضلك؟ كان سريعاً جداً.', type: 'phrase', gender: null, plural: null },
            { id: 'w_4_4_9', de: 'Wie sagt man das auf Deutsch?', ar: 'كيف تقول هذا بالألمانية؟', example: 'Wie sagt man "Thank you" auf Deutsch?', exampleAr: 'كيف تقول "Thank you" بالألمانية؟', type: 'phrase', gender: null, plural: null },
            { id: 'w_4_4_10', de: 'Einen Moment, bitte', ar: 'لحظة من فضلك', example: 'Einen Moment, bitte. Ich bin gleich da.', exampleAr: 'لحظة من فضلك. سأكون هناك حالاً.', type: 'phrase', gender: null, plural: null },
            { id: 'w_4_4_11', de: 'Kein Problem', ar: 'لا مشكلة', example: 'Danke für die Hilfe! - Kein Problem!', exampleAr: 'شكراً على المساعدة! - لا مشكلة!', type: 'phrase', gender: null, plural: null },
            { id: 'w_4_4_12', de: 'Es tut mir leid', ar: 'أنا آسف', example: 'Es tut mir leid, ich bin zu spät.', exampleAr: 'أنا آسف، لقد تأخرت.', type: 'phrase', gender: null, plural: null },
            { id: 'w_4_4_13', de: 'Guten Appetit', ar: 'بالهناء والشفاء', example: 'Guten Appetit, lasst es euch schmecken!', exampleAr: 'بالهناء والشفاء، استمتعوا بطعامكم!', type: 'phrase', gender: null, plural: null },
            { id: 'w_4_4_14', de: 'Gesundheit', ar: 'يرحمكم الله / صحة', example: '(Nach dem Niesen) - Gesundheit!', exampleAr: '(بعد العطس) - صحة / يرحمكم الله!', type: 'phrase', gender: null, plural: null },
            { id: 'w_4_4_15', de: 'Herzlichen Glückwunsch', ar: 'مبروك / تهانينا', example: 'Herzlichen Glückwunsch zum Geburtstag!', exampleAr: 'عيد ميلاد سعيد / تهانينا بمناسبة عيد ميلادك!', type: 'phrase', gender: null, plural: null }
          ]
        },
        {
          id: 'level_4_5',
          title: 'القواعد الأساسية',
          titleDe: 'Basis Grammatik',
          icon: '📚',
          words: [
            { id: 'w_4_5_1', de: 'der / die / das', ar: 'الـ (أدوات التعريف)', example: 'Der Mann, die Frau, das Kind.', exampleAr: 'الرجل، المرأة، الطفل.', type: 'grammar', gender: null, plural: null },
            { id: 'w_4_5_2', de: 'ein / eine', ar: 'أداة التنكير', example: 'Ich habe einen Hund und eine Katze.', exampleAr: 'لدي كلب وقطة.', type: 'grammar', gender: null, plural: null },
            { id: 'w_4_5_3', de: 'ich / du', ar: 'أنا / أنت', example: 'Ich bin hier und du bist dort.', exampleAr: 'أنا هنا وأنت هناك.', type: 'grammar', gender: null, plural: null },
            { id: 'w_4_5_4', de: 'er / sie / es', ar: 'هو / هي / هو أو هي لغير العاقل', example: 'Er arbeitet, sie schläft, es regnet.', exampleAr: 'هو يعمل، هي تنام، إنها تمطر.', type: 'grammar', gender: null, plural: null },
            { id: 'w_4_5_5', de: 'wir / ihr / sie / Sie', ar: 'نحن / أنتم / هم / حضرتك', example: 'Wir gehen, ihr bleibt, sie kommen.', exampleAr: 'نحن نذهب، أنتم تبقون، هم يأتون.', type: 'grammar', gender: null, plural: null },
            { id: 'w_4_5_6', de: 'mein / dein', ar: 'لي / لك (صفات الملكية)', example: 'Das ist mein Buch und dein Stift.', exampleAr: 'هذا كتابي وقلمك.', type: 'grammar', gender: null, plural: null },
            { id: 'w_4_5_7', de: 'sein / ihr', ar: 'له / لها', example: 'Sein Auto ist schnell, ihr Fahrrad ist rot.', exampleAr: 'سيارته سريعة، دراجتها حمراء.', type: 'grammar', gender: null, plural: null },
            { id: 'w_4_5_8', de: 'nicht', ar: 'ليس (للنفي)', example: 'Ich weiß es nicht.', exampleAr: 'أنا لا أعرف ذلك.', type: 'grammar', gender: null, plural: null },
            { id: 'w_4_5_9', de: 'kein / keine', ar: 'لا شيء (نفي الأسماء)', example: 'Ich habe kein Geld.', exampleAr: 'ليس لدي مال.', type: 'grammar', gender: null, plural: null },
            { id: 'w_4_5_10', de: 'und', ar: 'و', example: 'Er und sie kommen heute.', exampleAr: 'هو وهي سيأتيان اليوم.', type: 'grammar', gender: null, plural: null },
            { id: 'w_4_5_11', de: 'oder', ar: 'أو', example: 'Möchtest du Kaffee oder Tee?', exampleAr: 'هل ترغب في قهوة أم شاي؟', type: 'grammar', gender: null, plural: null },
            { id: 'w_4_5_12', de: 'aber', ar: 'لكن', example: 'Es ist kalt, aber die Sonne scheint.', exampleAr: 'الجو بارد، لكن الشمس تشرق.', type: 'grammar', gender: null, plural: null },
            { id: 'w_4_5_13', de: 'weil', ar: 'لأن', example: 'Ich lerne Deutsch, weil ich in Berlin arbeite.', exampleAr: 'أنا أتعلم الألمانية لأنني أعمل في برلين.', type: 'grammar', gender: null, plural: null },
            { id: 'w_4_5_14', de: 'dass', ar: 'أن (حرف ربط)', example: 'Ich glaube, dass es morgen regnet.', exampleAr: 'أعتقد أنها ستمطر غداً.', type: 'grammar', gender: null, plural: null },
            { id: 'w_4_5_15', de: 'wenn', ar: 'إذا / عندما', example: 'Wenn ich Zeit habe, komme ich.', exampleAr: 'إذا كان لدي وقت، سآتي.', type: 'grammar', gender: null, plural: null }
          ]
        }
      ]
    }
  ]
};

// Export for Node or Browser
if (typeof module !== 'undefined' && module.exports) {
  module.exports = APP_DATA;
}
