import { Question, StageInfo } from '../types';

export const STAGES: StageInfo[] = [
  {
    id: 1,
    title: '第一關：臺灣生活暖身',
    subtitle: '重溫熟悉的生活日常與美味回憶',
    themeColor: 'emerald',
    badgeBg: 'bg-emerald-100 text-emerald-800 border-emerald-300',
    description: '從身邊最熟悉的節慶食物、日常習俗開始，輕鬆動動腦！',
  },
  {
    id: 2,
    title: '第二關：臺灣地名旅行',
    subtitle: '乘著記憶列車遊歷寶島名勝景點',
    themeColor: 'sky',
    badgeBg: 'bg-sky-100 text-sky-800 border-sky-300',
    description: '走訪臺北101、日月潭與阿里山，重溫美麗風光！',
  },
  {
    id: 3,
    title: '第三關：臺灣民俗記憶',
    subtitle: '感受熱鬧傳統節慶與民俗文化的溫暖',
    themeColor: 'amber',
    badgeBg: 'bg-amber-100 text-amber-800 border-amber-300',
    description: '天燈祈福、鹽水蜂炮與媽祖文化，喚起親切回憶！',
  },
  {
    id: 4,
    title: '第四關：臺灣故事挑戰',
    subtitle: '深入探索寶島傳奇與歷史文化的精采篇章',
    themeColor: 'purple',
    badgeBg: 'bg-purple-100 text-purple-800 border-purple-300',
    description: '探索邵族白鹿傳奇、艋舺龍山寺與更多動人故事！',
  },
];

export const ENCOURAGEMENT_MESSAGES = [
  '答對了！太棒了！',
  '你找到了！',
  '你的記憶力真好！',
  '很棒，我們繼續！',
  '成功了！再挑戰一題！',
];

export const RAW_QUESTIONS: Question[] = [
  // 第一關：臺灣生活暖身
  {
    id: 1,
    stageId: 1,
    stageName: '臺灣生活暖身',
    question: '下列哪一個是臺灣常見的傳統點心？',
    options: [
      { id: '1-1', text: '鳳梨酥', illustrationKey: 'pineapple-cake' },
      { id: '1-2', text: '漢堡', illustrationKey: 'hamburger' },
      { id: '1-3', text: '披薩', illustrationKey: 'pizza' },
    ],
    correctAnswer: '鳳梨酥',
    explanation: '鳳梨酥是臺灣常見的傳統糕點。',
  },
  {
    id: 2,
    stageId: 1,
    stageName: '臺灣生活暖身',
    question: '端午節常見的食物是什麼？',
    options: [
      { id: '2-1', text: '粽子', illustrationKey: 'zongzi' },
      { id: '2-2', text: '月餅', illustrationKey: 'mooncake' },
      { id: '2-3', text: '湯圓', illustrationKey: 'tangyuan' },
    ],
    correctAnswer: '粽子',
    explanation: '端午節有吃粽子的習俗。',
  },
  {
    id: 3,
    stageId: 1,
    stageName: '臺灣生活暖身',
    question: '中秋節常見的食物是什麼？',
    options: [
      { id: '3-1', text: '月餅', illustrationKey: 'mooncake' },
      { id: '3-2', text: '粽子', illustrationKey: 'zongzi' },
      { id: '3-3', text: '水餃', illustrationKey: 'dumpling' },
    ],
    correctAnswer: '月餅',
    explanation: '中秋節常會賞月和吃月餅。',
  },
  {
    id: 4,
    stageId: 1,
    stageName: '臺灣生活暖身',
    question: '過年時，哪一種顏色最常代表喜氣？',
    options: [
      { id: '4-1', text: '紅色', illustrationKey: 'color-red' },
      { id: '4-2', text: '灰色', illustrationKey: 'color-gray' },
      { id: '4-3', text: '黑色', illustrationKey: 'color-black' },
    ],
    correctAnswer: '紅色',
    explanation: '紅色在過年習俗中常代表喜氣與祝福。',
  },
  {
    id: 5,
    stageId: 1,
    stageName: '臺灣生活暖身',
    question: '布袋戲的人偶主要如何操作？',
    options: [
      { id: '5-1', text: '用手套入戲偶', illustrationKey: 'puppet-hand' },
      { id: '5-2', text: '用腳踩踏', illustrationKey: 'puppet-foot' },
      { id: '5-3', text: '用風吹動', illustrationKey: 'puppet-wind' },
    ],
    correctAnswer: '用手套入戲偶',
    explanation: '布袋戲表演者用手操控戲偶演出故事。',
  },

  // 第二關：臺灣地名旅行
  {
    id: 6,
    stageId: 2,
    stageName: '臺灣地名旅行',
    question: '臺北101位於哪一個城市？',
    options: [
      { id: '6-1', text: '臺北市', illustrationKey: 'taipei-101' },
      { id: '6-2', text: '臺南市', illustrationKey: 'tainan-city' },
      { id: '6-3', text: '花蓮縣', illustrationKey: 'hualien-county' },
    ],
    correctAnswer: '臺北市',
    explanation: '臺北101是臺北市的代表性地標。',
  },
  {
    id: 7,
    stageId: 2,
    stageName: '臺灣地名旅行',
    question: '日月潭位於哪一個縣？',
    options: [
      { id: '7-1', text: '南投縣', illustrationKey: 'nantou-sunmoon' },
      { id: '7-2', text: '宜蘭縣', illustrationKey: 'yilan-county' },
      { id: '7-3', text: '屏東縣', illustrationKey: 'pingtung-county' },
    ],
    correctAnswer: '南投縣',
    explanation: '日月潭位於南投縣魚池鄉。',
  },
  {
    id: 8,
    stageId: 2,
    stageName: '臺灣地名旅行',
    question: '阿里山位於哪一個縣？',
    options: [
      { id: '8-1', text: '嘉義縣', illustrationKey: 'chiayi-alishan' },
      { id: '8-2', text: '苗栗縣', illustrationKey: 'miaoli-county' },
      { id: '8-3', text: '臺東縣', illustrationKey: 'taitung-county' },
    ],
    correctAnswer: '嘉義縣',
    explanation: '阿里山國家風景區主要位於嘉義縣。',
  },
  {
    id: 9,
    stageId: 2,
    stageName: '臺灣地名旅行',
    question: '平溪天燈最具代表性的活動地點在哪裡？',
    options: [
      { id: '9-1', text: '新北市', illustrationKey: 'pingxi-lantern' },
      { id: '9-2', text: '高雄市', illustrationKey: 'kaohsiung-city' },
      { id: '9-3', text: '彰化縣', illustrationKey: 'changhua-county' },
    ],
    correctAnswer: '新北市',
    explanation: '平溪天燈是新北市平溪地區著名的民俗活動。',
  },
  {
    id: 10,
    stageId: 2,
    stageName: '臺灣地名旅行',
    question: '鹽水蜂炮是哪個城市的著名民俗活動？',
    options: [
      { id: '10-1', text: '臺南市', illustrationKey: 'yanshui-fireworks' },
      { id: '10-2', text: '臺中市', illustrationKey: 'taichung-city' },
      { id: '10-3', text: '基隆市', illustrationKey: 'keelung-city' },
    ],
    correctAnswer: '臺南市',
    explanation: '鹽水蜂炮是臺南鹽水重要的元宵民俗活動。',
  },

  // 第三關：臺灣民俗記憶
  {
    id: 11,
    stageId: 3,
    stageName: '臺灣民俗記憶',
    question: '天燈上常寫下什麼？',
    options: [
      { id: '11-1', text: '祝福與願望', illustrationKey: 'lantern-wish' },
      { id: '11-2', text: '購物清單', illustrationKey: 'shopping-list' },
      { id: '11-3', text: '車牌號碼', illustrationKey: 'car-plate' },
    ],
    correctAnswer: '祝福與願望',
    explanation: '人們常在天燈上寫下祝福與願望。',
  },
  {
    id: 12,
    stageId: 3,
    stageName: '臺灣民俗記憶',
    question: '『北天燈、南蜂炮』中的『南蜂炮』是指哪個地方？',
    options: [
      { id: '12-1', text: '臺南鹽水', illustrationKey: 'yanshui-fireworks' },
      { id: '12-2', text: '臺北北投', illustrationKey: 'taipei-beitou' },
      { id: '12-3', text: '花蓮瑞穗', illustrationKey: 'hualien-ruisui' },
    ],
    correctAnswer: '臺南鹽水',
    explanation: '鹽水蜂炮是臺南具有代表性的元宵民俗活動。',
  },
  {
    id: 13,
    stageId: 3,
    stageName: '臺灣民俗記憶',
    question: '媽祖信仰傳統上與哪一種生活最有關？',
    options: [
      { id: '13-1', text: '航海與漁業', illustrationKey: 'sea-fishing' },
      { id: '13-2', text: '高山滑雪', illustrationKey: 'mountain-ski' },
      { id: '13-3', text: '沙漠旅行', illustrationKey: 'desert-travel' },
    ],
    correctAnswer: '航海與漁業',
    explanation: '媽祖信仰與沿海居民、航海及漁業生活關係密切。',
  },
  {
    id: 14,
    stageId: 3,
    stageName: '臺灣民俗記憶',
    question: '元宵節常見的傳統活動是哪一個？',
    options: [
      { id: '14-1', text: '賞花燈', illustrationKey: 'lantern-festival' },
      { id: '14-2', text: '划龍舟', illustrationKey: 'dragon-boat' },
      { id: '14-3', text: '賞月吃月餅', illustrationKey: 'mooncake' },
    ],
    correctAnswer: '賞花燈',
    explanation: '元宵節常有花燈、燈會及猜燈謎活動。',
  },
  {
    id: 15,
    stageId: 3,
    stageName: '臺灣民俗記憶',
    question: '端午節常見的活動是哪一個？',
    options: [
      { id: '15-1', text: '划龍舟', illustrationKey: 'dragon-boat' },
      { id: '15-2', text: '放天燈', illustrationKey: 'pingxi-lantern' },
      { id: '15-3', text: '賞楓', illustrationKey: 'maple-leaves' },
    ],
    correctAnswer: '划龍舟',
    explanation: '划龍舟是端午節具有代表性的活動。',
  },

  // 第四關：臺灣故事挑戰
  {
    id: 16,
    stageId: 4,
    stageName: '臺灣故事挑戰',
    question: '日月潭白鹿傳說與哪一個原住民族有關？',
    options: [
      { id: '16-1', text: '邵族', illustrationKey: 'tribe-thao' },
      { id: '16-2', text: '阿美族', illustrationKey: 'tribe-amis' },
      { id: '16-3', text: '達悟族', illustrationKey: 'tribe-tao' },
    ],
    correctAnswer: '邵族',
    explanation: '日月潭流傳邵族先人追逐白鹿並發現日月潭的故事。',
  },
  {
    id: 17,
    stageId: 4,
    stageName: '臺灣故事挑戰',
    question: '日月潭中的拉魯島，對哪一族具有重要文化意義？',
    options: [
      { id: '17-1', text: '邵族', illustrationKey: 'tribe-thao' },
      { id: '17-2', text: '排灣族', illustrationKey: 'tribe-paiwan' },
      { id: '17-3', text: '噶瑪蘭族', illustrationKey: 'tribe-kavalan' },
    ],
    correctAnswer: '邵族',
    explanation: '拉魯島是邵族重要的文化與信仰場所。',
  },
  {
    id: 18,
    stageId: 4,
    stageName: '臺灣故事挑戰',
    question: '傳統故事裡，媽祖常被視為保護哪一類人的神明？',
    options: [
      { id: '18-1', text: '航海與漁民', illustrationKey: 'mazu-fisher' },
      { id: '18-2', text: '登山者', illustrationKey: 'mountain-hiker' },
      { id: '18-3', text: '牧羊人', illustrationKey: 'shepherd' },
    ],
    correctAnswer: '航海與漁民',
    explanation: '媽祖信仰傳統上具有守護航海安全的意義。',
  },
  {
    id: 19,
    stageId: 4,
    stageName: '臺灣故事挑戰',
    question: '鹽水蜂炮的民俗起源與哪一項願望有關？',
    options: [
      { id: '19-1', text: '祈求平安、驅除瘟疫', illustrationKey: 'blessing-peace' },
      { id: '19-2', text: '祈求下雪', illustrationKey: 'wish-snow' },
      { id: '19-3', text: '慶祝豐收葡萄', illustrationKey: 'harvest-grape' },
    ],
    correctAnswer: '祈求平安、驅除瘟疫',
    explanation: '鹽水蜂炮的歷史淵源包含驅逐瘟疫及祈求平安。',
  },
  {
    id: 20,
    stageId: 4,
    stageName: '臺灣故事挑戰',
    question: '龍山寺位於臺北哪一個地區？',
    options: [
      { id: '20-1', text: '萬華', illustrationKey: 'taipei-wanhua' },
      { id: '20-2', text: '北投', illustrationKey: 'taipei-beitou' },
      { id: '20-3', text: '信義', illustrationKey: 'taipei-xinyi' },
    ],
    correctAnswer: '萬華',
    explanation: '艋舺龍山寺位於臺北市萬華區。',
  },
];

/**
 * Fisher-Yates shuffle helper
 */
export function shuffleArray<T>(array: T[]): T[] {
  const arr = [...array];
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

/**
 * Get randomized questions for a stage with shuffled options
 */
export function getStageQuestions(stageId: number): Question[] {
  const stageQs = RAW_QUESTIONS.filter(q => q.stageId === stageId);
  const shuffledQs = shuffleArray(stageQs);

  // Also shuffle options for every question so correct answers aren't fixed in position
  return shuffledQs.map(q => ({
    ...q,
    options: shuffleArray(q.options),
  }));
}
