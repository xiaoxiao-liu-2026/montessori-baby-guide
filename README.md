# 宝宝成长，妈妈不慌

一个面向 0-3 岁宝宝家庭的科学育儿与蒙氏启蒙静态网站原型，使用 Next.js App Router + Tailwind CSS 构建。

## 页面

- 首页：网站定位、适合人群、核心声明、栏目入口、0-3 岁阶段导航
- 月龄发展指南：按阶段整理发展重点与居家练习
- 玩具选择指南：按年龄段整理玩具选择原则
- 家庭蒙氏环境：低成本家庭环境布置建议
- 妈妈常见问题：新手妈妈高频困惑
- 关于我们：理念、边界与内容说明

## 本地运行

```bash
npm install
npm run dev
```

打开浏览器访问：

```text
http://localhost:3000
```

## 构建检查

```bash
npm run build
```

## 部署到 Vercel

1. 将项目推送到 GitHub、GitLab 或 Bitbucket。
2. 登录 [Vercel](https://vercel.com)。
3. 点击 `Add New Project`，选择这个仓库。
4. Framework Preset 选择 `Next.js`。
5. 保持默认构建命令：

```bash
npm run build
```

6. 点击 `Deploy`。

这个项目目前不需要数据库、登录系统或环境变量。
