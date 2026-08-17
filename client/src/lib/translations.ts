import type { Language } from "@/contexts/LanguageContext";

export interface Bi {
  ja: string;
  en: string;
}

export const t = {
  // Nav
  nav: {
    overview: { ja: "プログラム概要", en: "Overview" },
    indonesia: { ja: "インドネシア", en: "Indonesia" },
    benefits: { ja: "３つの武器", en: "Benefits" },
    curriculum: { ja: "カリキュラム", en: "Curriculum" },
    partners: { ja: "運営チーム", en: "Partners" },
    apply: { ja: "今すぐ申し込む", en: "Apply Now" },
  },

  // Hero
  hero: {
    eyebrow: { ja: "唐津東高等学校の生徒の皆さんへ", en: "To the Students of Karatsu Higashi High School" },
    title: { ja: "世界と出会う２ヶ月間", en: "Two Months to Discover a New World" },
    programName: { ja: "Discover a New World", en: "Discover a New World" },
    programType: { ja: "バーチャル交流プログラム", en: "Virtual Exchange Program" },
    subtitle: { ja: "インドネシア × 日本 ／ Powered by Mirai Eduventure", en: "Indonesia × Japan / Powered by Mirai Eduventure" },
    freeBadge: { ja: "参加費無料", en: "Free of Charge" },
    deadline: { ja: "応募締切: 9月4日(金)", en: "Application Deadline: September 4 (Fri)" },
    period: { ja: "開催期間: 9/8(火)〜11/12(木)(予定)", en: "Program Period: Sep 8 – Nov 12 (planned)" },
    cta: { ja: "今すぐ申し込む", en: "Apply Now" },
  },

  // Section 2: Study Abroad Intro
  studyAbroad: {
    title: { ja: "これからの「留学」は、自宅から始まる。", en: 'The Next "Study Abroad" Starts at Home.' },
    body: {
      ja: "Zoomをつなげば、そこはもう海外。インドネシアの同世代の高校生とチームを組み、英語を使って一つのプロジェクトに取り組みます。「英語を話したい」「海外に友達が欲しい」「自分の視野を広げたい」そんなあなたのためのプログラムです。",
      en: 'Connect on Zoom, and you\'re already overseas. Team up with high school students your age from Indonesia and work together on one shared project in English. "I want to speak English." "I want friends abroad." "I want to broaden my perspective." This program is for you.',
    },
    quotes: {
      ja: ["英語を話したい", "海外に友達が欲しい", "自分の視野を広げたい"],
      en: ["I want to speak English.", "I want friends abroad.", "I want to broaden my perspective."],
    },
  },

  // Section 3: Program Overview
  overview: {
    title: { ja: "プログラム概要", en: "Program Overview" },
    intro: {
      ja: "唐津東高等学校とインドネシアの高校生をオンラインでつなぐ、2ヶ月間のバーチャル交流プログラムです。",
      en: "A two-month virtual exchange program connecting students from Karatsu Higashi High School with high school students in Indonesia, entirely online.",
    },
    table: {
      headers: {
        ja: ["項目", "内容"],
        en: ["Item", "Details"],
      },
      rows: [
        {
          label: { ja: "参加人数", en: "Participants" },
          value: { ja: "唐津東高校生 10名 × インドネシア高校生 10名", en: "10 students from Karatsu Higashi × 10 students from Indonesia" },
        },
        {
          label: { ja: "開催期間", en: "Program Period" },
          value: { ja: "2026年9月8日(火)〜11月12日(木)", en: "September 8 – November 12, 2026" },
        },
        {
          label: { ja: "実施形式", en: "Format" },
          value: { ja: "オンライン(Zoom)、週2回(火・木)", en: "Online (Zoom), twice a week (Tue/Thu)" },
        },
        {
          label: { ja: "参加費", en: "Cost" },
          value: { ja: "無料", en: "Free of charge" },
        },
        {
          label: { ja: "主催", en: "Organized by" },
          value: { ja: "唐津東高等学校 × Mirai Eduventure", en: "Karatsu Higashi High School × Mirai Eduventure" },
        },
      ],
    },
  },

  // Section 4: Indonesia
  indonesia: {
    label: { ja: "REPUBLIC OF INDONESIA", en: "REPUBLIC OF INDONESIA" },
    title: { ja: "交流相手を知ろう：インドネシアってどんな国？", en: "Get to Know Your Exchange Partner: What Is Indonesia Like?" },
    intro: {
      ja: "バリ島などのリゾートだけでなく、著しい経済成長と多様な文化を持つアジアのリーダーです。",
      en: "More than just Bali resorts — Indonesia is an Asian leader with remarkable economic growth and rich cultural diversity.",
    },
    points: [
      {
        title: { ja: "メガシティ「ジャカルタ」", en: "Megacity Jakarta" },
        body: {
          ja: "首都ジャカルタは、高層ビルが立ち並ぶ世界有数の大都市。おしゃれなカフェや巨大なショッピングモールがあり、東京と同じようにモダンで刺激的な生活があります。",
          en: "Skyscrapers, trendy cafes, and huge malls — a modern, energetic capital much like Tokyo.",
        },
      },
      {
        title: { ja: "G20メンバーの経済大国", en: "G20 Economic Powerhouse" },
        body: {
          ja: "インドネシアはG20の一員であり、著しい経済成長を続けています。世界のビジネスパーソンが注目する「未来の市場」です。",
          en: 'A G20 member with strong ongoing growth, watched closely as a "market of the future."',
        },
      },
      {
        title: { ja: "世界屈指のSNS大国", en: "A Leading Social Media Nation" },
        body: {
          ja: "インドネシアの高校生はデジタルネイティブ！InstagramやTikTokの利用率が非常に高く、流行に敏感です。共通のアプリやトレンドの話ですぐに仲良くなれます。",
          en: "Indonesian high schoolers are digital natives — heavy Instagram and TikTok users who stay on top of trends, making it easy to connect over shared apps and culture.",
        },
      },
      {
        title: { ja: "人口 世界第4位", en: "4th Largest Population in the World" },
        body: {
          ja: "約2.7億人。平均年齢は約29歳と非常に若く、国全体がエネルギーに満ちています。",
          en: "About 270 million people, with an average age of just 29 — a country full of energy.",
        },
      },
      {
        title: { ja: "多様な宗教", en: "Diverse Religions" },
        body: {
          ja: "世界最大のイスラム教徒人口を持ちますが、多様性を尊重する国です。お互いの文化を学ぶ良い機会になります。",
          en: "Home to the world's largest Muslim population, while respecting diversity — a great opportunity to learn about each other's cultures.",
        },
      },
    ],
  },

  // Section 5: 3 Benefits
  benefits: {
    title: { ja: "このプログラムで得られる3つの武器", en: "Three Strengths You'll Gain" },
    items: [
      {
        title: { ja: "「伝わった！」という自信", en: 'The Confidence That "It Got Across!"' },
        body: {
          ja: "完璧な英語である必要はありません。間違いを恐れずに話す度胸と、実践的なコミュニケーション力が身につきます。",
          en: "You don't need perfect English. You'll build the courage to speak without fear of mistakes, along with real, practical communication skills.",
        },
      },
      {
        title: { ja: "世界中に『仲間』がいる未来へ。", en: "A Future with Friends Around the World." },
        body: {
          ja: "日本にいながら、海外に同世代の仲間ができる。共に課題に挑んだ経験と絆は、あなたの視野を広げ、将来グローバルに活躍するための第一歩になります。",
          en: "Make friends your own age overseas — all from Japan. The experience and bonds built while tackling a shared challenge together will broaden your perspective and be your first step toward a globally active future.",
        },
      },
      {
        title: { ja: "大学入試へのアピール", en: "A Strong Asset for University Applications" },
        body: {
          ja: "SDGsをテーマにした協働プロジェクトの経験は、総合型選抜などの活動報告書や面接で強力なアピール材料になります。",
          en: "Your experience in an SDGs-themed collaborative project can be a powerful talking point in AO/comprehensive-selection application reports and interviews.",
        },
      },
    ],
  },

  // Section 6: Month 1
  month1: {
    label: { ja: "MONTH 1 CURRICULUM", en: "MONTH 1 CURRICULUM" },
    title: { ja: "英会話集中トレーニング", en: "Intensive English Conversation Training" },
    intro: {
      ja: "最初の1ヶ月は、各自自宅から参加し、週2回・各90分の集中クラスで英語を使う自信を一気に高めます。",
      en: "For the first month, join from home, twice a week for 90-minute intensive classes to build your confidence in using English.",
    },
    roadmapTitle: { ja: "Month 1 ロードマップ（自宅オンライン受講）", en: "Month 1 Roadmap (Online, From Home)" },
    weeks: [
      {
        week: { ja: "W1-2", en: "W1-2" },
        title: { ja: "アイスブレイク＆自己紹介（基礎・関係づくり）", en: "Icebreakers & Self-Introduction (Foundation & Relationship-Building)" },
        topics: {
          ja: "「My name is...」を超えた自己紹介 / ニックネームの使用 / 情熱的な趣味の話し方",
          en: 'Self-introductions beyond "My name is..." / using nicknames / talking passionately about your hobbies',
        },
        activities: {
          ja: "Two Truths and a Lie / Speed Friending / 発音ドリル（ELSA Speak）",
          en: "Two Truths and a Lie / Speed Friending / pronunciation drills (ELSA Speak)",
        },
      },
      {
        week: { ja: "W3-4", en: "W3-4" },
        title: { ja: "表現力の強化（日常と意見）（伝える力）", en: "Strengthening Expression (Daily Life & Opinions) (Communication Skills)" },
        topics: {
          ja: '街の描写（"There is/are...", 形容詞）/ 日常ルーティン（現在形、予定）/ 意見交換（"I think...", "I agree because..."）',
          en: 'Describing your town ("There is/are...", adjectives) / daily routines (present tense, plans) / exchanging opinions ("I think...", "I agree because...")',
        },
        activities: {
          ja: "バーチャルツアー（写真で案内）/ Vlog制作（1日の紹介動画）/ 「推し」についての情熱トーク",
          en: 'Virtual tour (guide with photos) / vlog creation (a day-in-the-life video) / passionate talk about your "oshi"',
        },
      },
    ],
  },

  // Section 7: Month 2
  month2: {
    label: { ja: "MONTH 2 CURRICULUM", en: "MONTH 2 CURRICULUM" },
    title: { ja: "協働プロジェクト（PBL）", en: "Collaborative Project (PBL)" },
    intro: {
      ja: "後半は、インドネシアの生徒とチームを組み、デジタルツールを駆使して「一つの作品」を作り上げます。",
      en: 'In the second half, you\'ll team up with students in Indonesia and use digital tools to create "one shared work" together.',
    },
    info: {
      location: { ja: "自宅からオンライン参加", en: "Online, from home" },
      time: { ja: "19:30-21:00 (JST) / 17:30-19:00 (WIB)", en: "19:30–21:00 (JST) / 17:30–19:00 (WIB)" },
      required: { ja: "PC・ネット環境", en: "PC & internet connection" },
    },
    themesTitle: { ja: "選べる5つのプロジェクト・テーマ", en: "Choose from 5 Project Themes" },
    themes: [
      { ja: "私の街・あなたの街ガイド (SDG11)", en: "My Town, Your Town Guide (SDG 11)" },
      { ja: "Z世代の1日（文化理解）", en: "A Day in the Life of Gen Z (Cultural Understanding)" },
      { ja: "好きなもの図鑑（異文化交流）", en: "Encyclopedia of Favorites (Cross-Cultural Exchange)" },
      { ja: "学校から見える未来 (SDG12)", en: "The Future Seen from School (SDG 12)" },
      { ja: "祭りと季節の行事（多文化共生）", en: "Festivals & Seasonal Events (Multicultural Coexistence)" },
    ],
    roadmapTitle: { ja: "Month 2 ロードマップ（自宅オンライン）", en: "Month 2 Roadmap (Online, From Home)" },
    weeks: [
      {
        week: { ja: "Week 5", en: "Week 5" },
        title: { ja: "チーム結成 (Kick-off)", en: "Team Formation (Kick-off)" },
        body: { ja: "Find Your Twin（共通点探しゲーム）/ チームチャーター作成 / テーマ決定", en: "Find Your Twin / Team charter creation / Theme selection" },
      },
      {
        week: { ja: "Week 6", en: "Week 6" },
        title: { ja: "調査と発見 (Research)", en: "Research & Discovery" },
        body: { ja: "専門家インタビュー / 文化比較ディスカッション", en: "Expert interviews / Cultural comparison discussion" },
      },
      {
        week: { ja: "Week 7", en: "Week 7" },
        title: { ja: "制作 (Creation)", en: "Creation" },
        body: { ja: "Canvaでデジタル雑誌編集 / ピアレビュー（相互評価）", en: "Digital magazine editing in Canva / Peer review" },
      },
      {
        week: { ja: "Week 8", en: "Week 8" },
        title: { ja: "発表＆表彰 (Presentation)", en: "Presentation & Awards" },
        body: { ja: "チーム成果発表（5分）/ ギャラリーウォーク＆表彰式", en: "Team presentations (5 min) / Gallery walk & awards ceremony" },
      },
    ],
  },

  // Section 8: Testimonial
  testimonial: {
    label: { ja: "VOICES", en: "VOICES" },
    title: { ja: "参加者の声", en: "Participant Voices" },
    placeholder: {
      ja: "実際に参加した先輩たちの声をお届けします",
      en: "Hear from students who have actually participated",
    },
    note: {
      ja: "※ このセクションは現在準備中です。動画・写真等の素材が確定次第、更新されます。",
      en: "※ This section is currently being prepared. It will be updated once video and photo materials are confirmed.",
    },
  },

  // Section 9: Partners
  partners: {
    label: { ja: "PARTNERSHIP", en: "PARTNERSHIP" },
    title: { ja: "唐津東高等学校 × Mirai Eduventure", en: "Karatsu Higashi High School × Mirai Eduventure" },
    meiTitle: { ja: "Mirai Eduventureとは？", en: "What Is Mirai Eduventure?" },
    meiBody: {
      ja: "インドネシア・日本・ベトナムを繋ぐ教育事業を展開する、ジャカルタ拠点の教育会社です。2023年の創業後、佐賀学園高等学校との協定を皮切りに2024年よりインドネシア人高校生向けの短期留学プログラムを開始。今年は6名のインドネシア人高校生が佐賀県・福岡県で短期留学を経験しました。",
      en: "Mirai Eduventure is a Jakarta-based education company connecting Indonesia, Japan, and Vietnam. Since its founding in 2023, MEI began a short-term study program for Indonesian high school students in 2024, starting with a partnership with Saga Gakuen High School. This year, six Indonesian high school students studied in Saga and Fukuoka Prefectures.",
    },
    meiBelief: {
      ja: "私たちが大切にしているのは、\"本物との関わりが、変化を生む。\"ということ。観光でも、テンプレート通りの交流でもなく、同世代の生徒同士が本気で向き合う時間だからこそ、人は変わります。",
      en: 'What we believe: "Real connection. Real change." Not tourism. Not a templated exchange. It\'s the genuine, unscripted time students spend engaging with peers their own age that truly changes them.',
    },
    whyTitle: { ja: "なぜ唐津東高校なのか", en: "Why Karatsu Higashi?" },
    whyBody: {
      ja: "今回の提携の背景には、Mirai Eduventure共同代表の一人が唐津出身であるという縁があります。「お世話になった唐津に恩返しがしたい」「唐津の若者たちにも世界とつながる機会を届けたい」という思いから、2026年、唐津東高等学校とのパートナーシップが実現しました。",
      en: "This partnership has a personal story behind it: one of Mirai Eduventure's co-founders is originally from Karatsu. Wanting to give back to the city that shaped him and to open a window to the world for Karatsu's young people, this partnership was realized in 2026.",
    },
    purpose: {
      ja: "知らなかった世界に出会うたびに、人生の可能性が広がっていく。これが私たちMirai Eduventureのパーパスです。このプログラムの名前「Discover a New World（世界と出会う）」も、この想いから生まれました。",
      en: '"Every new world you meet, opens another possibility." This is Mirai Eduventure\'s purpose — and it\'s exactly where this program\'s name, "Discover a New World," comes from.',
    },
    whoOrgTitle: { ja: "誰が運営しているの？", en: "Who Organizes This Program?" },
    whoOrgBody: {
      ja: "Mirai Eduventure (MEI): インドネシア・ジャカルタを拠点に、日本・インドネシア・ベトナムを繋ぐ教育事業を展開。2023年11月設立。",
      en: "Mirai Eduventure (MEI): Based in Jakarta, Indonesia, MEI runs education programs connecting Japan, Indonesia, and Vietnam. Founded in November 2023.",
    },
    whoTeachTitle: { ja: "誰が教えてくれるの？", en: "Who Will Teach You?" },
    teachers: [
      {
        name: { ja: "Eka先生", en: "Mr. Eka" },
        tag: { ja: "日本語OK", en: "Speaks Japanese" },
        role: { ja: "プログラム責任者", en: "Program Lead" },
        body: {
          ja: "日本での留学経験が5年あり、日本語も堪能なバイリンガル。責任者として、言葉の壁を心配することなく皆さんの成長を温かくサポートします。",
          en: "A bilingual educator with 5 years of study experience in Japan. As the program lead, he warmly supports your growth without worrying about language barriers.",
        },
        affiliation: {
          ja: "Sampoerna University 教育学部長",
          en: "Head of Education, Sampoerna University",
        },
      },
      {
        name: { ja: "Gaby先生", en: "Ms. Gaby" },
        tag: { ja: "日本語OK", en: "Speaks Japanese" },
        role: { ja: "メンター", en: "Mentor" },
        body: {
          ja: "日本語と英語を話すバイリンガル。皆さんと年齢が近い頼れる先輩メンターです。",
          en: "A bilingual student speaking both Japanese and English. A reliable senior mentor close to your age.",
        },
        affiliation: {
          ja: "Sampoerna University 教育学部4年生",
          en: "Senior, Faculty of Education, Sampoerna University",
        },
      },
    ],
    sampoernaNote: {
      ja: "※ Eka先生・Gaby先生が所属するSampoerna Universityは、インドネシアで唯一のアメリカンスタイル大学（米国アリゾナ大学提携）。本プログラムの運営はMirai Eduventureが行っています。",
      en: "※ Sampoerna University, where Mr. Eka and Ms. Gaby are based, is Indonesia's only American-style university (partnered with the University of Arizona). This program is operated by Mirai Eduventure.",
    },
  },

  // Section 10: CTA / Footer
  cta: {
    title: { ja: "世界への一歩を、ここから踏み出そう。", en: "Take Your First Step Into the World, Starting Here." },
    body: {
      ja: "興味がある人は、まずは話を聞きに来てください。国際交流担当の先生が待っています！",
      en: "If you're interested, come talk to us! Your international exchange coordinator is ready to help.",
    },
    contact: {
      ja: "お問い合わせ・申し込み: 唐津東高校 横山先生（英語科）まで",
      en: "Inquiries & Applications: Mr. Yokoyama, English Department, Karatsu Higashi High School",
    },
    applyBtn: { ja: "Google Formで申し込む", en: "Apply via Google Form" },
    applyNote: { ja: "※申し込みフォームのURLは後日公開されます", en: "※ Application form URL will be available soon" },
    table: {
      headers: {
        ja: ["プログラム期間", "応募締切", "参加費"],
        en: ["Program Period", "Application Deadline", "Cost"],
      },
      values: [
        { ja: "9/8(火)〜11/12(木)(予定)", en: "Sep 8 – Nov 12 (planned)" },
        { ja: "9月4日(金)", en: "September 4 (Fri)" },
        { ja: "無料", en: "Free" },
      ],
    },
    copyright: {
      ja: "© 2026 Mirai Eduventure. All rights reserved.",
      en: "© 2026 Mirai Eduventure. All rights reserved.",
    },
    poweredBy: {
      ja: "Powered by Mirai Eduventure",
      en: "Powered by Mirai Eduventure",
    },
  },
};

export function pick<T>(item: T, lang: Language): T extends { ja: string; en: string } ? string : T {
  // @ts-expect-error dynamic
  return item[lang];
}
