export type PdfResource = {
  title: string;
  description: string;
  type: "PDF";
  size: string;
  updated: string;
  status: "即将上线" | "可下载";
  href?: string;
};

export const pdfResources: PdfResource[] = [
  {
    title: "0-3 岁宝宝成长月历简表",
    description:
      "按阶段整理宝宝可能的发展重点，帮助妈妈快速了解不同阶段孩子正在经历什么。",
    type: "PDF",
    size: "约 1.2MB",
    updated: "2026年",
    status: "即将上线"
  },
  {
    title: "玩具用品选择判断表",
    description:
      "帮助妈妈判断哪些玩具和用品真正符合宝宝当前发展需求，哪些不急着买。",
    type: "PDF",
    size: "约 860KB",
    updated: "2026年",
    status: "即将上线"
  },
  {
    title: "妈妈低压力陪伴清单",
    description:
      "整理更可持续的陪伴提醒，帮助妈妈少一点比较、打卡和自责。",
    type: "PDF",
    size: "约 720KB",
    updated: "2026年",
    status: "即将上线"
  }
];

export const upcomingResources = [
  "0-6 个月感官与亲密回应指南",
  "7-12 个月爬行与探索支持清单",
  "13-18 个月生活参与练习表",
  "妈妈低压力陪伴清单",
  "居家蒙氏环境布置入门表"
];
