import { photos, stagePhotos } from "@/lib/photos";

export type GrowthTrendStage = {
  start: number;
  end: number;
  label: string;
  image: string;
  dimensions: string[];
  focus: string[];
  support: string;
  calm: string;
};

export const growthTrendStages: GrowthTrendStage[] = [
  {
    start: 0,
    end: 3,
    label: "0-3个月",
    image: stagePhotos.months0to3,
    dimensions: ["社交情绪", "大运动", "认知"],
    focus: ["亲密回应和安全感", "趴卧观察", "视觉追踪", "感官适应"],
    support:
      "多抱、多回应，给宝宝稳定的声音、气味和日常节奏；清醒时可以短时间趴卧观察。",
    calm: "这时最重要的不是训练，而是稳定回应和安全感。"
  },
  {
    start: 4,
    end: 6,
    label: "4-6个月",
    image: stagePhotos.months4to6,
    dimensions: ["大运动", "精细动作", "认知"],
    focus: ["翻身准备", "抓握和够取", "感官探索", "身体控制"],
    support:
      "增加安全趴玩和侧躺探索，准备容易抓握的软布书、摇铃或不同触感材料。",
    calm: "翻身和抓握会有早晚，先看宝宝是否越来越愿意看、伸手和探索。"
  },
  {
    start: 7,
    end: 9,
    label: "7-9个月",
    image: stagePhotos.months7to9,
    dimensions: ["大运动", "精细动作", "认知"],
    focus: ["爬行和移动", "手部探索", "空间探索", "拿起和放下"],
    support:
      "给宝宝安全地垫和低矮物品，减少围困，让他有机会够取、转身、爬向目标。",
    calm: "爬行方式不一定一样，重点是宝宝是否有主动移动和探索的机会。"
  },
  {
    start: 10,
    end: 12,
    label: "10-12个月",
    image: stagePhotos.months10to12,
    dimensions: ["大运动", "语言", "社交情绪"],
    focus: ["扶站", "模仿", "简单互动", "移动探索"],
    support:
      "提供稳定家具扶站，和宝宝玩递给我、放进去、拿出来、挥手再见等简单互动。",
    calm: "不要急着催走路，稳定扶站、蹲起和移动探索也是重要准备。"
  },
  {
    start: 13,
    end: 15,
    label: "13-15个月",
    image: stagePhotos.months13to15,
    dimensions: ["大运动", "语言", "生活自理 / 蒙氏生活练习"],
    focus: ["行走", "语言萌芽", "拿取和递物", "生活参与"],
    support:
      "让孩子参与递物品、拿小篮子、收一个玩具，用真实词语描述正在发生的事情。",
    calm: "会走以后不代表要安排更多课程，真实生活里的小参与就很有价值。"
  },
  {
    start: 16,
    end: 18,
    label: "16-18个月",
    image: stagePhotos.months16to18,
    dimensions: ["精细动作", "认知", "生活自理 / 蒙氏生活练习"],
    focus: ["动手兴趣", "流程模仿", "初步自理", "物品归位"],
    support:
      "准备低矮收纳、小篮子、小抹布，让孩子模仿拿、放、擦、收这些真实动作。",
    calm: "孩子想自己做，常常不是捣乱，而是独立意识正在冒出来。"
  },
  {
    start: 19,
    end: 24,
    label: "19-24个月",
    image: photos.pouring,
    dimensions: ["精细动作", "社交情绪", "生活自理 / 蒙氏生活练习"],
    focus: ["秩序感", "独立意识", "情绪表达", "生活练习"],
    support:
      "可以从倒水、擦桌子、洗水果、收纳、穿脱鞋袜这些低风险生活练习开始。",
    calm: "情绪爆发不等于脾气坏，很多时候是想做、会一点、又做不好的阶段。"
  },
  {
    start: 25,
    end: 30,
    label: "25-30个月",
    image: photos.spooning,
    dimensions: ["语言", "认知", "精细动作"],
    focus: ["分类配对", "简单拼图", "语言表达", "规则理解"],
    support:
      "用家里的袜子、勺子、积木、小碗做分类配对和转移工作，规则少一点、清楚一点。",
    calm: "分类、拼图和规则理解不需要刷题，生活材料就能反复练习。"
  },
  {
    start: 31,
    end: 36,
    label: "31-36个月",
    image: stagePhotos.months31to36,
    dimensions: ["语言", "社交情绪", "生活自理 / 蒙氏生活练习"],
    focus: ["自我照顾", "合作意识", "社交萌芽", "复杂小任务"],
    support:
      "让孩子完成更长一点的流程，比如洗手、穿鞋、收拾一小块区域，给清楚步骤和等待时间。",
    calm: "三岁前后的合作能力还在发展，慢一点、步骤少一点，孩子更容易完成。"
  }
];

export const trendDimensions = [
  "大运动",
  "精细动作",
  "语言",
  "认知",
  "社交情绪",
  "生活自理 / 蒙氏生活练习"
];
