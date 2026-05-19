import {
  Baby,
  BookOpen,
  Blocks,
  CalendarDays,
  HandHeart,
  Heart,
  HelpCircle,
  Home,
  ListChecks,
  Sparkles
} from "lucide-react";

export const audiences = [
  "不知道宝宝这个月龄正在发展什么",
  "玩具、早教、用品推荐太多，越看越乱",
  "想科学育儿，但不知道每天在家怎么做",
  "听过蒙氏理念，但不知道怎么落地",
  "想培养孩子独立性、动手能力和生活自理能力",
  "不想鸡娃，也不想完全放任",
  "希望有人用妈妈能听懂的话，把发展规律讲清楚"
];

export const columns = [
  {
    title: "0-3岁成长月历",
    description:
      "按阶段整理宝宝常见发展方向、行为特点和妈妈可以提供的支持。",
    icon: CalendarDays,
    href: "/growth-calendar"
  },
  {
    title: "居家练习",
    description:
      "用家里常见物品，做适合宝宝阶段的动手、语言、感官、动作和生活自理练习。",
    icon: HandHeart,
    href: "/growth-calendar/19-24-months"
  },
  {
    title: "玩具用品怎么选",
    description:
      "帮妈妈判断这个阶段真正需要什么，哪些可以买，哪些不急着买，哪些可以用家里物品替代。",
    icon: Blocks,
    href: "/toy-guide"
  },
  {
    title: "蒙氏理念轻理解",
    description:
      "用白话解释蒙氏理念：独立性、秩序感、生活练习、真实参与、自己来。",
    icon: Sparkles,
    href: "/home-montessori"
  },
  {
    title: "妈妈不慌指南",
    description:
      "给妈妈低压力陪伴建议，减少焦虑、比较和自我责备。",
    icon: HelpCircle,
    href: "/mom-faq"
  }
];

export const stages = [
  {
    age: "0-3个月",
    focus: "安全感、感官适应、亲密回应",
    practice: "多抱、多回应，给宝宝稳定的声音、气味和节奏。",
    image: "/images/stage-0-3.svg"
  },
  {
    age: "4-6个月",
    focus: "翻身、抓握、视觉追踪、身体控制",
    practice: "增加趴玩时间，用柔软布书、摇铃和镜子支持观察与伸手。",
    image: "/images/stage-4-6.svg"
  },
  {
    age: "7-9个月",
    focus: "爬行、手部探索、空间探索",
    practice: "准备安全地垫和低矮物品，让宝宝有机会移动、够取、转身。",
    image: "/images/stage-7-9.svg"
  },
  {
    age: "10-12个月",
    focus: "扶站、模仿、简单互动、移动探索",
    practice: "给稳定家具扶站，陪宝宝玩递给我、放进去、拿出来。",
    image: "/images/stage-10-12.svg"
  },
  {
    age: "13-15个月",
    focus: "行走、语言萌芽、生活参与",
    practice: "让宝宝参与擦桌子、递物品、收玩具，用真实词语描述生活。",
    image: "/images/stage-13-18.svg"
  },
  {
    age: "16-18个月",
    focus: "动手兴趣、流程模仿、初步自理",
    practice: "练习舀、倒、开合、分类，给宝宝慢慢尝试的时间。",
    image: "/images/stage-13-18.svg"
  },
  {
    age: "19-24个月",
    focus: "秩序感、独立意识、情绪表达、生活练习",
    practice: "固定物品位置，建立简单流程，允许宝宝在安全范围内选择。",
    image: "/images/stage-19-24.svg",
    href: "/growth-calendar/19-24-months"
  },
  {
    age: "25-30个月",
    focus: "语言扩展、分类配对、规则理解、精细动作",
    practice: "做配对、串珠、倒水、洗水果，规则少而清楚。",
    image: "/images/stage-25-30.svg"
  },
  {
    age: "31-36个月",
    focus: "社交萌芽、合作意识、自我照顾、复杂任务",
    practice: "让孩子完成更长流程，如洗手、穿鞋、收拾小区域。",
    image: "/images/stage-31-36.svg"
  }
];

export const guideLinks = [
  { title: "月龄发展指南", href: "/growth-calendar", icon: Baby },
  { title: "玩具选择指南", href: "/toy-guide", icon: ListChecks },
  { title: "家庭蒙氏环境", href: "/home-montessori", icon: Home },
  { title: "妈妈常见问题", href: "/mom-faq", icon: Heart },
  { title: "关于我们", href: "/about", icon: BookOpen }
];

export const toyPrinciples = [
  "不按商家宣传买，也不按别人家孩子买。",
  "先看宝宝当前发展需求，再看材料能不能支持主动操作。",
  "优先选择能让孩子动手、重复操作、真实参与的材料。",
  "家里已有物品也可以成为很好的练习材料。"
];

export const homePracticeCards = [
  {
    title: "倒水练习",
    image: "/images/practice-water.svg",
    text: "小水壶、小杯子和托盘就够了。水少一点，洒了也可以顺便练习擦一擦。"
  },
  {
    title: "擦桌子",
    image: "/images/practice-wipe.svg",
    text: "准备小抹布和小喷壶，重点不是擦得多干净，而是参与真实生活。"
  },
  {
    title: "收纳玩具",
    image: "/images/practice-tidy.svg",
    text: "固定篮子或收纳盒，从一类玩具开始，帮助宝宝建立物品归位的秩序。"
  },
  {
    title: "穿脱鞋袜",
    image: "/images/practice-shoes.svg",
    text: "选容易穿脱的鞋袜，给孩子一点时间，动作慢也没关系。"
  },
  {
    title: "洗水果 / 洗菜",
    image: "/images/practice-wash.svg",
    text: "小盆、少量水果或蔬菜，配合防滑地面，让宝宝参与真实家务。"
  },
  {
    title: "分类配对",
    image: "/images/practice-sort.svg",
    text: "用家里的勺子、袜子、积木或小盒子做配对，不需要复杂教具。"
  }
];

export const recommendedItems = [
  "小抹布",
  "小水壶",
  "小篮子",
  "简单拼图",
  "大颗粒串珠",
  "分类盒",
  "真实生活小工具"
];

export const skipItems = [
  "声光电玩具",
  "功能太复杂的早教玩具",
  "过度宣传开发智力的产品",
  "需要妈妈全程操作的复杂教具"
];

export const practicalCare = [
  "家里已有物品怎么用",
  "妈妈累的时候怎么低配陪伴",
  "孩子为什么会出现某些行为",
  "什么东西真正符合宝宝阶段需求",
  "如何少买、少焦虑、少被营销带着跑",
  "如何让孩子在真实生活中发展独立性"
];

export const month19to24Activities = [
  {
    title: "倒水练习",
    image: "/images/practice-water.svg",
    prepare: "小水壶、小杯子、托盘、少量水",
    benefit: "练习手部控制、专注和独立性",
    reminder: "水少一点，洒了也可以顺便让孩子擦一擦。"
  },
  {
    title: "擦桌子",
    image: "/images/practice-wipe.svg",
    prepare: "小抹布、小喷壶",
    benefit: "生活参与、手部控制、秩序感",
    reminder: "重点不是擦干净，而是让孩子参与真实生活。"
  },
  {
    title: "收纳玩具",
    image: "/images/practice-tidy.svg",
    prepare: "固定篮子或收纳盒",
    benefit: "秩序感、分类、生活习惯",
    reminder: "先从一个篮子开始，不要要求一次收完所有。"
  },
  {
    title: "穿脱鞋袜",
    image: "/images/practice-shoes.svg",
    prepare: "容易穿脱的鞋袜",
    benefit: "自理能力、身体协调、独立意识",
    reminder: "给孩子时间，不要急着替他完成。"
  },
  {
    title: "洗水果 / 洗菜",
    image: "/images/practice-wash.svg",
    prepare: "小盆、少量水果或蔬菜",
    benefit: "感官体验、真实生活参与",
    reminder: "水量少一点，地面防滑。"
  }
];

export const montessoriHomeTips = [
  "孩子够得到：低矮收纳、固定水杯、可拿取的毛巾和小扫把。",
  "物品有位置：玩具和生活用品尽量固定摆放，帮助孩子建立秩序感。",
  "动作可重复：倒水、擦桌、开关盒子、穿脱鞋袜，都可以成为练习。",
  "大人慢一点：先示范，再等待，让孩子在真实生活中获得能力感。"
];

export const faqs = [
  {
    question: "宝宝比同龄孩子慢一点，我是不是做错了？",
    answer:
      "大多数发展项目都有一个范围，不是某一天必须达标。你可以观察宝宝是否持续进步、是否有互动意愿和探索兴趣。如果出现明显倒退或强烈担心，请及时咨询儿保医生。"
  },
  {
    question: "蒙氏是不是一定要买很多教具？",
    answer:
      "不是。0-3岁的蒙氏启蒙更重视真实生活、秩序感、独立性和手部工作。家里的杯子、勺子、毛巾、收纳篮，在合适安排下都能成为很好的练习材料。"
  },
  {
    question: "每天陪玩多久才够？",
    answer:
      "不需要把一天塞满活动。稳定回应、共同生活、短时间高质量互动，加上孩子自由探索的时间，比密集安排更可持续。妈妈能长期坚持，才是最重要的。"
  },
  {
    question: "玩具越多，孩子是不是学得越多？",
    answer:
      "通常不是。玩具太多会增加选择压力，也更难专注。建议按阶段轮换，保留少量适合当下能力的玩具，让孩子有机会反复尝试。"
  }
];
