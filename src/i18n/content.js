/* Every user-facing string on the site, in both languages.
   Multi-paragraph copy is stored as arrays rather than baked-in <br /> tags, so
   the components decide the markup and the translations stay plain data.

   ⚠️ The English is a translation of Sarit's Hebrew copy, not copy she wrote
   herself. It should be read over by her before it goes in front of clients —
   tone in marketing copy rarely survives translation untouched. That applies
   doubly to testimonials.items, where the English renders somebody else's
   words. */

export const LANGUAGES = ['he', 'en']

export const CONTENT = {
  he: {
    /* `dir` drives the document direction and the [data-lang] styling hooks. */
    dir: 'rtl',
    label: 'עברית',
    switchTo: 'Switch to English',

    nav: {
      about: 'קצת עליי',
      why: 'למה בחרתי',
      parents: 'הורים מספרים',
      testimonials: 'מילים טובות',
      meetings: 'המפגשים',
      contact: 'צור קשר',
      openMenu: 'פתיחת תפריט',
      closeMenu: 'סגירת תפריט',
      logoAlt: 'אמא וחצי – שרית חלפון, הדרכת הורים',
      backToTop: 'חזרה לתחילת הדף',
    },

    hero: {
      titleMain: 'אתם רוצים להיות הורים טובים.',
      titleSub: 'לפעמים פשוט צריך כלים.',
      lead: 'הדרכת הורים בגובה העיניים, מתוך הקשבה, הבנה וללא שיפוטיות — כדי להבין טוב יותר את הילדים שלכם, את מה שקורה בבית ואת הדרך שמתאימה למשפחה שלכם.',
      imgAlt: 'שרית חלפון, מדריכת הורים, יושבת ליד שולחן עם ספל קפה ומחייכת',
    },

    issueStart: {
      header: 'אולי הגעתם לכאן כי...',
      intro: 'אתם אוהבים את הילדים שלכם ורוצים להיות ההורים הכי טובים שאתם יכולים להיות — אבל היומיום לפעמים מרגיש מורכב ומתיש.',
      items: [
        'אולי הילד שלכם מתקשה לקבל גבולות, וכל בקשה הופכת למאבק.',
        'אולי יש בבית הרבה התנגדויות, ויכוחים או התקפי זעם.',
        'אולי אתם מרגישים שאתם חוזרים שוב ושוב לאותן סיטואציות ולא בטוחים איך נכון להגיב.',
        'אולי אתם יודעים מה לא עובד — אבל עדיין לא מצאתם את הדרך שמתאימה לכם.',
        'ואולי אתם פשוט רוצים להבין טוב יותר את הילד שלכם, את עצמכם כהורים ואת מה שקורה ביניכם בבית.',
      ],
      outro: [
        'אם מצאתם את עצמכם באחת מהשורות האלה — אתם ממש לא לבד.',
        'אפשר להבין, אפשר ללמוד ואפשר למצוא דרכים חדשות להתמודד.',
      ],
    },

    meetings: {
      header: 'המפגשים',
      helpHeader: 'איך אני יכולה לעזור?',
      helpParagraphs: [
        'בהדרכת ההורים נתחיל מהמקום שבו אתם נמצאים היום.',
        'נכיר את המשפחה שלכם, נבין את האתגרים שמעסיקים אתכם וננסה להסתכל יחד על מה שקורה בבית — לא רק על ההתנהגות עצמה, אלא גם על הצרכים שמאחוריה.',
        'יחד נחשוב על דרכים וכלים מעשיים שיכולים לעזור לכם ביומיום, מתוך התאמה לכם, לילד שלכם ולמשפחה שלכם.',
      ],
      helpHighlight: 'המטרה היא לא להפוך אתכם להורים אחרים — אלא לעזור לכם להרגיש יותר בטוחים בדרך שלכם, להבין טוב יותר את הילדים שלכם ולמצוא דרכים שמתאימות לכם באמת.',
      approachHeader: 'הגישה שלי',
      approachIntro: [
        'אני מאמינה שהתנהגות של ילד היא רק חלק מהסיפור. מאחורי התנגדות, התקף זעם, קושי בגבולות או התנהגות שמאתגרת אותנו, יש בדרך כלל צורך שמבקש לקבל מקום.',
        'לכן אני לא מחפשת רק איך "להפסיק" התנהגות מסוימת, אלא להבין יחד איתכם מה קורה מתחת לפני השטח:',
      ],
      approachQuestions: [
        'מה הילד שלכם מנסה לומר?',
        'מה הוא צריך?',
        'ומה אתם, כהורים, מביאים איתכם לתוך הסיטואציה?',
      ],
      approachOutro: [
        'אני מאמינה בחינוך מתוך הבנה, בתקשורת, בהקשבה וביכולת לראות את הטוב והאור שבילד. אני מאמינה שהורים רוצים להיות הורים טובים — לפעמים הם פשוט צריכים מקום לעצור, לחשוב, להבין ולקבל כלים.',
        'ההדרכה שלי נעשית בגובה העיניים, ללא שיפוטיות ומתוך הקשבה אמיתית למי שאתם, למשפחה שלכם ולמה שאתם מביאים איתכם להורות.',
      ],
      suitableHeader: 'למי ההדרכה מתאימה?',
      suitableIntro: [
        'אני מלווה בעיקר הורים לילדים צעירים — מגיל שנה ועד גיל בית הספר היסודי.',
        'ההדרכה יכולה להתאים לכם אם אתם מתמודדים עם:',
      ],
      suitableItems: [
        'קושי בהצבת גבולות',
        'התקפי זעם והתפרצויות',
        'התנגדויות ומאבקים ביומיום',
        'קושי בשיתוף פעולה',
        'מריבות ומתחים בבית',
        'התלבטויות סביב הדרך הנכונה להגיב',
        'תחושה שאתם רוצים להבין טוב יותר את הילד שלכם',
        'רצון ליצור בבית יותר תקשורת, חיבור ואווירה נעימה',
      ],
      suitableNote: 'וגם אם אין "בעיה גדולה" — אלא פשוט רצון לעצור, להתייעץ ולקבל כלים להורות.',
    },

    about: {
      header: 'נעים מאוד, אני שרית',
      paragraphs: [
        'היי, אני שרית חלפון, נשואה לאייל ואמא לאורי (27) ותומר (21).',
        'אני בעלת תואר ראשון בחינוך ותואר שני בייעוץ חינוכי. במהלך השנים המשכתי להעמיק ולהתמקצע בתחום המשפחה וההורות במסגרת לימודי תעודה בייעוץ משפחתי וזוגי באוניברסיטת בר-אילן, וכן בהנחיית מעגלי אימהות לאחר לידה.',
        'כבר 12 שנים שאני עובדת כיועצת חינוכית בבית ספר. במקביל, במשך 7 שנים אני מלווה ומדריכה הורים במסגרת המשחקייה המודרכת של עיריית תל אביב, ומנחה אחת לשבוע מעגלי אימהות. בשלוש השנים האחרונות אני גם מלווה הורים באופן עצמאי.',
        'לאורך השנים פגשתי ילדים, הורים ומשפחות במגוון רחב של מצבים — ובעיקר למדתי שוב ושוב עד כמה הקשבה, הבנה וקשר יכולים ליצור שינוי.',
      ],
      imgAlt: 'שרית חלפון, יועצת חינוכית ומדריכת הורים, מחייכת על רקע קיר לבן',
    },

    issue: {
      header: 'למה בחרתי לעסוק בהדרכת הורים?',
      paragraphs: [
        'כי ילדים ובני אדם תמיד עניינו אותי. אני מרגישה שיש בי רצון ויכולת להבין אנשים לעומק, לראות את מה שנמצא מתחת לפני השטח ולהקשיב גם למה שלא תמיד נאמר במילים.',
        'אבל מעבר למקצוע וללימודים, יש משהו בעבודה עם משפחות שנוגע בי באופן עמוק. חשוב לי לעשות טוב בתוך בית.',
        'אני מאמינה שכאשר הורים מקבלים יותר הבנה, ביטחון וכלים — משהו יכול להשתנות באווירה בבית. וכשילד גדל בבית שבו יש תקשורת, הקשבה, גבולות וקבלה — יש לו יותר מקום לצמוח ולפרוח.',
      ],
      highlight: 'לראות ילדים שמחים, שמרגישים שרואים אותם ושהם גדלים בתוך אווירה מאפשרת וטובה — זה משהו שנמצא ממש בלב שלי.',
      imgAlt: 'שרית חלפון קוראת בספר ומחייכת',
    },

    testimonials: {
      header: 'מילים טובות',
      intro: 'הורים שליוויתי מספרים על הדרך שעשינו יחד.',
      items: [
        {
          quote: 'היה ממש מלמד ואיכותי 🤍 תודה עליכן צוות מדהים ושרית כמרצה בחסד 🤍',
          author: 'משתתפת בסדנה',
        },
        {
          quote: 'תודה רבה על כל הסדנאות שהיו, נהניתי ממש והחכמתי. שניפגש רק בדברים טובים ❤️',
          author: 'משתתפת בסדנאות',
        },
        {
          quote: 'שמחנו מאוד להגיע כל שבוע וציפינו ליום חמישי למפגש. המסגרת הזו כל כך חשובה לנשים אחרי לידה — השיתוף, ההבנה, החברויות שנוצרות והתמיכה. ההנחיה של שרית כל כך מכילה ורגישה, וכל מפגש היה משמעותי מאוד עבורי.',
          author: 'משתתפת במעגל אימהות',
        },
        {
          quote: 'תודה רבה על ההשקעה שלך לאורך כל הדרך! זה נתן לנו אוויר, שינוי אווירה מרענן, וממש חיכינו למפגש מדי שבוע. זכינו שזו את — נעימה תמיד, אכפתית, מכילה ומיוחדת! ✨❤️',
          author: 'אמא מהפעילות השבועית',
        },
        {
          quote: 'שרית יקרה ❤️ תודה רבה על השיחה אתמול, כרגיל עזרת לנו מאוד ופתחת עבורנו אפיקי חשיבה נוספים.',
          author: 'הורה בליווי אישי',
        },
      ],
    },

    contact: {
      header: 'לא חייבים להתמודד עם הכול לבד',
      text: [
        'אם משהו בהורות שלכם מעסיק אתכם, מבלבל אתכם או פשוט מרגיש מורכב — אני כאן כדי לחשוב איתכם. לפעמים שינוי מתחיל דווקא מעצירה קטנה. משיחה. מהקשבה.',
        'מוזמנים ליצור איתי קשר ולבדוק יחד האם הדרכת הורים יכולה לעזור לכם.',
      ],
      firstName: 'שם פרטי',
      lastName: 'שם משפחה',
      email: 'אימייל',
      phone: 'טלפון',
      message: 'הודעה',
      submit: 'שליחה',
      submitting: 'שולח...',
      success: 'ההודעה נשלחה בהצלחה, נחזור אליכם בהקדם!',
      error: 'משהו השתבש בשליחה, נסו שוב מאוחר יותר.',
      logoAlt: 'לוגו אמא וחצי',
      emailSubject: 'פנייה חדשה מהאתר',
    },

    a11y: {
      title: 'הגדרות נגישות',
      open: 'פתיחת תפריט נגישות',
      close: 'סגירת תפריט נגישות',
      skipToContent: 'דילוג לתוכן הראשי',
      biggerText: 'הגדלת טקסט',
      smallerText: 'הקטנת טקסט',
      highContrast: 'ניגודיות גבוהה',
      highlightLinks: 'הדגשת קישורים',
      readableFont: 'גופן קריא',
      stopMotion: 'עצירת אנימציות',
      reset: 'איפוס הגדרות',
      on: 'פעיל',
      off: 'כבוי',
    },
  },

  en: {
    dir: 'ltr',
    label: 'English',
    switchTo: 'מעבר לעברית',

    /* Kept deliberately short — six English labels plus the logo and the utility
       cluster only fit the bar between 900 and 1200px if the labels stay tight.
       The longer phrasing lives in the section headings themselves. */
    nav: {
      about: 'About',
      why: 'Why I do this',
      parents: 'Parents say',
      testimonials: 'Kind words',
      meetings: 'Sessions',
      contact: 'Contact',
      openMenu: 'Open menu',
      closeMenu: 'Close menu',
      logoAlt: 'Mom and a Half – Sarit Halfon, parenting guidance',
      backToTop: 'Back to top',
    },

    hero: {
      titleMain: 'You want to be good parents.',
      titleSub: 'Sometimes you just need the tools.',
      lead: 'Parenting guidance at eye level — built on listening, understanding and no judgement — so you can better understand your children, what is happening at home, and the approach that fits your own family.',
      imgAlt: 'Sarit Halfon, parenting guide, sitting at a table with a cup of coffee, smiling',
    },

    issueStart: {
      header: 'Maybe you came here because…',
      intro: 'You love your children and want to be the best parents you can be — but day to day it sometimes feels complicated and exhausting.',
      items: [
        'Maybe your child struggles with boundaries, and every request turns into a battle.',
        'Maybe there is a lot of resistance, arguing or rage at home.',
        'Maybe you feel you keep returning to the same situations, unsure how to respond.',
        'Maybe you know what is not working — but you have not yet found the approach that fits you.',
        'And maybe you simply want to understand your child better, yourself as a parent, and what happens between you at home.',
      ],
      outro: [
        'If you recognised yourself in any of these — you are truly not alone.',
        'It is possible to understand, to learn, and to find new ways to cope.',
      ],
    },

    meetings: {
      header: 'The sessions',
      helpHeader: 'How can I help?',
      helpParagraphs: [
        'In our parenting sessions we start from wherever you are today.',
        'We will get to know your family, understand the challenges on your mind, and look together at what is happening at home — not only at the behaviour itself, but at the needs behind it.',
        'Together we will think through practical approaches and tools for everyday life, suited to you, to your child and to your family.',
      ],
      helpHighlight: 'The goal is not to turn you into different parents — it is to help you feel more confident in your own way, understand your children better, and find approaches that genuinely fit you.',
      approachHeader: 'My approach',
      approachIntro: [
        'I believe a child’s behaviour is only part of the story. Behind resistance, a tantrum, difficulty with boundaries or behaviour that challenges us, there is usually a need asking to be met.',
        'So I am not only looking for how to "stop" a particular behaviour, but to understand with you what is happening beneath the surface:',
      ],
      approachQuestions: [
        'What is your child trying to say?',
        'What do they need?',
        'And what do you, as parents, bring with you into the situation?',
      ],
      approachOutro: [
        'I believe in raising children through understanding, communication and listening, and in the ability to see the good and the light in a child. I believe parents want to be good parents — sometimes they simply need room to pause, think, understand and receive tools.',
        'My guidance is given at eye level, without judgement, and from genuine listening to who you are, to your family, and to what you bring with you into parenthood.',
      ],
      suitableHeader: 'Who is this for?',
      suitableIntro: [
        'I mainly work with parents of young children — from age one through primary school.',
        'The guidance may suit you if you are dealing with:',
      ],
      suitableItems: [
        'Difficulty setting boundaries',
        'Tantrums and outbursts',
        'Everyday resistance and power struggles',
        'Difficulty co-operating',
        'Arguments and tension at home',
        'Uncertainty about the right way to respond',
        'A sense that you want to understand your child better',
        'A wish for more communication, connection and ease at home',
      ],
      suitableNote: 'And also if there is no "big problem" — just a wish to pause, talk it through and pick up some tools for parenting.',
    },

    about: {
      header: 'Lovely to meet you, I’m Sarit',
      paragraphs: [
        'Hi, I’m Sarit Halfon, married to Eyal and mother to Ori (27) and Tomer (21).',
        'I hold a BA in education and an MA in educational counselling. Over the years I continued to specialise in family and parenting through certificate studies in family and couples counselling at Bar-Ilan University, and in facilitating postnatal mothers’ circles.',
        'I have worked as a school educational counsellor for 12 years. Alongside that, for 7 years I have been guiding parents at the Tel Aviv municipality’s supervised playgroup, and I facilitate a weekly mothers’ circle. For the past three years I have also been working with parents independently.',
        'Over the years I have met children, parents and families in a wide range of situations — and above all I have learned, again and again, how much listening, understanding and connection can change.',
      ],
      imgAlt: 'Sarit Halfon, educational counsellor and parenting guide, smiling against a white wall',
    },

    issue: {
      header: 'Why I chose to work in parenting guidance',
      paragraphs: [
        'Because children and people have always interested me. I feel I have both the wish and the ability to understand people deeply, to see what lies beneath the surface, and to listen also to what is not always said in words.',
        'But beyond the profession and the studies, there is something in working with families that touches me deeply. Doing good inside a home matters to me.',
        'I believe that when parents gain more understanding, confidence and tools, something can shift in the atmosphere at home. And when a child grows up in a home with communication, listening, boundaries and acceptance, they have more room to grow and to flourish.',
      ],
      highlight: 'Seeing children who are happy, who feel seen, and who are growing up in a warm and enabling atmosphere — that is something that sits right at my heart.',
      imgAlt: 'Sarit Halfon reading a book and smiling',
    },

    testimonials: {
      header: 'Kind words',
      intro: 'Parents I have worked with, on the journey we made together.',
      items: [
        {
          quote: 'It was genuinely instructive and of real quality 🤍 Thank you all, an amazing team, and Sarit — a truly gifted teacher 🤍',
          author: 'Workshop participant',
        },
        {
          quote: 'Thank you so much for all the workshops. I really enjoyed them and learned a great deal. May we only meet on happy occasions ❤️',
          author: 'Workshop participant',
        },
        {
          quote: 'We were so happy to come every week and looked forward to Thursday’s session. This kind of space matters so much for women after birth — the sharing, the understanding, the friendships that form, the support. Sarit’s facilitation is so containing and sensitive, and every session was deeply meaningful for me.',
          author: 'Participant, mothers’ circle',
        },
        {
          quote: 'Thank you so much for everything you put in along the way! It gave us air, a refreshing change of atmosphere, and we genuinely looked forward to the session each week. We were lucky it was you — always warm, caring, accepting and special! ✨❤️',
          author: 'Mother, weekly parent-and-child group',
        },
        {
          quote: 'Dear Sarit ❤️ thank you so much for the conversation yesterday. As always, you helped us a great deal and opened up new ways of thinking for us.',
          author: 'Parent, individual guidance',
        },
      ],
    },

    contact: {
      header: 'You don’t have to face it all alone',
      text: [
        'If something in your parenting is on your mind, confusing you, or simply feels complicated — I am here to think it through with you. Sometimes change begins with a small pause. With a conversation. With being listened to.',
        'You are welcome to get in touch, and we can look together at whether parenting guidance could help you.',
      ],
      firstName: 'First name',
      lastName: 'Last name',
      email: 'Email',
      phone: 'Phone',
      message: 'Message',
      submit: 'Send',
      submitting: 'Sending…',
      success: 'Your message was sent — I’ll get back to you soon!',
      error: 'Something went wrong. Please try again later.',
      logoAlt: 'Mom and a Half logo',
      emailSubject: 'New enquiry from the website',
    },

    a11y: {
      title: 'Accessibility settings',
      open: 'Open accessibility menu',
      close: 'Close accessibility menu',
      skipToContent: 'Skip to main content',
      biggerText: 'Larger text',
      smallerText: 'Smaller text',
      highContrast: 'High contrast',
      highlightLinks: 'Highlight links',
      readableFont: 'Readable font',
      stopMotion: 'Stop animations',
      reset: 'Reset settings',
      on: 'on',
      off: 'off',
    },
  },
}
