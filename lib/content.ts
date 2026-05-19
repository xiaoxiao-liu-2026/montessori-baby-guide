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
  "不知道宝宝每个阶段主要在发展什么",
  "被玩具、早教和测评推荐搞得越来越乱",
  "想科学育儿，但不知道每天在家怎么做",
  "听过蒙氏理念，却不知道如何落地到生活里",
  "想培养孩子独立性、秩序感和生活自理能力",
  "希望陪伴孩子成长，但不想把自己逼到崩溃"
];

export const columns = [
  {
    title: "0-3岁成长月历",
    description:
      "按月龄查看宝宝的发展重点、常见变化和适合的居家陪伴方式。先理解孩子，再决定怎么支持。",
    icon: CalendarDays,
    href: "/growth-calendar"
  },
  {
    title: "居家练习",
    description:
      "用日常生活里的小动作，支持宝宝的大运动、精细动作、语言、认知和自理能力发展。",
    icon: HandHeart,
    href: "/growth-calendar"
  },
  {
    title: "玩具用品怎么选",
    description:
      "少乱买，买对就好。按阶段整理真正常用、可重复玩、能支持发展的玩具和生活用品。",
    icon: Blocks,
    href: "/toy-guide"
  },
  {
    title: "蒙氏理念轻理解",
    description:
      "不用专业术语吓妈妈，用生活化语言解释秩序感、独立性、敏感期和真实生活练习。",
    icon: Sparkles,
    href: "/home-montessori"
  },
  {
    title: "妈妈不慌指南",
    description:
      "面对睡眠、吃饭、分离焦虑、情绪爆发、不会陪玩等问题，给妈妈低压力、可持续的处理思路。",
    icon: HelpCircle,
    href: "/mom-faq"
  }
];

export const stages = [
  {
    age: "0-3个月",
    focus: "安全感、感官适应、亲密回应",
    practice: "多抱、多回应，给宝宝稳定的声音、气味和节奏。"
  },
  {
    age: "4-6个月",
    focus: "翻身、抓握、视觉追踪、身体控制",
    practice: "增加趴玩时间，用柔软布书、摇铃和镜子支持观察与伸手。"
  },
  {
    age: "7-9个月",
    focus: "爬行、手部探索、空间探索",
    practice: "准备安全地垫和低矮物品，让宝宝有机会移动、够取、转身。"
  },
  {
    age: "10-12个月",
    focus: "扶站、模仿、简单互动、移动探索",
    practice: "给稳定家具扶站，陪宝宝玩递给我、放进去、拿出来。"
  },
  {
    age: "13-15个月",
    focus: "行走、语言萌芽、生活参与",
    practice: "让宝宝参与擦桌子、递物品、收玩具，用真实词语描述生活。"
  },
  {
    age: "16-18个月",
    focus: "动手兴趣、流程模仿、初步自理",
    practice: "练习舀、倒、开合、分类，给宝宝慢慢尝试的时间。"
  },
  {
    age: "19-24个月",
    focus: "秩序感、独立意识、情绪表达、生活练习",
    practice: "固定物品位置，建立简单流程，允许宝宝在安全范围内选择。"
  },
  {
    age: "25-30个月",
    focus: "语言扩展、分类配对、规则理解、精细动作",
    practice: "做配对、串珠、倒水、洗水果，规则少而清楚。"
  },
  {
    age: "31-36个月",
    focus: "社交萌芽、合作意识、自我照顾、复杂任务",
    practice: "让孩子完成更长流程，如洗手、穿鞋、收拾小区域。"
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
  "先看宝宝当下能力，再看玩具适不适合，不用提前囤太多。",
  "优先选择可以反复操作、开放玩法、材质安全、容易收纳的物品。",
  "少一点声光电，多一点真实触摸、抓握、移动、分类和生活练习。",
  "同一时间摆出来的玩具不必多，3-6件更容易让孩子专注。"
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
