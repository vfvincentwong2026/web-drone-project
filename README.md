markdown


> 基于 React + Vite + Tailwind CSS 构建的现代化产品展示网站，适用于 [无人机 / 机器人 / 无人农机] 等智能装备行业。

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![React](https://img.shields.io/badge/React-18.2-blue)](https://reactjs.org/)
[![Vite](https://img.shields.io/badge/Vite-4.0-purple)](https://vitejs.dev/)
[![Tailwind](https://img.shields.io/badge/Tailwind-3.3-38bdf8)](https://tailwindcss.com/)

---

## 📸 预览

| 桌面端 | 移动端 |
| :---: | :---: |
| ![桌面预览](./screenshot-desktop.png) | ![移动预览](./screenshot-mobile.png) |

> 在线演示：[替换为你的部署链接]

---

## ✨ 特点

- **📱 完全响应式** – 适配桌面、平板、手机多种屏幕
- **🎨 现代 UI** – 使用 Tailwind CSS 构建，风格简洁大气
- **⚡ 极速加载** – 基于 Vite 构建，开发/生产环境均高效
- **🧩 组件化设计** – 易于扩展和二次开发
- **🌍 国际化就绪** – 预留多语言支持接口（可选）
- **🔄 数据驱动** – 产品数据可对接 API 或本地 JSON（按需）

---

## 🛠️ 技术栈

- [React 18](https://reactjs.org/) – UI 框架
- [Vite](https://vitejs.dev/) – 构建工具
- [Tailwind CSS](https://tailwindcss.com/) – 原子化 CSS 框架
- [React Router](https://reactrouter.com/) – 路由管理（如使用）
- [Axios](https://axios-http.com/) – HTTP 请求（如使用）

---

## 📦 快速开始

### 环境要求
- Node.js 16+ 和 npm / yarn / pnpm

### 克隆与安装

```bash
git clone https://github.com/你的用户名/你的仓库名.git
cd 你的仓库名
npm install
开发模式
bash
npm run dev
访问 http://localhost:3000 即可预览。

生产构建
bash
npm run build
构建产物位于 dist/ 目录。

🚀 部署
部署到 Cloudflare Pages（推荐）
Fork 本仓库到你的 GitHub 账号。

登录 Cloudflare Pages。

点击「创建项目」→「连接到 Git」→ 选择你的仓库。

构建设置：

构建命令：npm run build

输出目录：dist

点击「保存并部署」，稍等片刻即可获得 *.pages.dev 链接。

其他部署方式
Vercel / Netlify（同样支持自动构建）

静态托管至 OSS + CDN

📂 目录结构
text
.
├── public/              # 静态资源（favicon 等）
├── src/
│   ├── assets/          # 图片、字体等
│   ├── components/      # UI 组件（Navbar, Hero, Products, Footer...）
│   ├── pages/           # 页面级组件（如有路由）
│   ├── apis/            # API 请求封装（可选）
│   ├── utils/           # 工具函数
│   ├── App.jsx          # 根组件
│   ├── main.jsx         # 入口文件
│   └── index.css        # 全局样式（含 Tailwind 指令）
├── tailwind.config.js   # Tailwind 配置
├── vite.config.js       # Vite 配置
├── package.json
└── README.md
🧩 自定义指南
修改内容
编辑 src/components/Hero.jsx 修改首页大标题和副标题。

编辑 src/components/Products.jsx 修改产品列表（数据可来自 src/assets/ 或 API）。

替换 src/assets/ 中的图片为你自己的产品图。

修改主题色
在 tailwind.config.js 的 theme.extend.colors 中自定义主色，然后全局替换类名（如 bg-primary）。

🤝 贡献
欢迎提交 Issue 或 Pull Request。对于重大改动，请先开 Issue 讨论。

📄 许可证
本项目基于 MIT License 开源，可自由使用和修改，但请保留原作者版权声明。

🙏 致谢
原项目作者：Mochrks

本项目在原始仓库基础上进行了二次开发和定制

📧 联系方式
官网：[你的网站]

邮箱：[你的邮箱]

社交媒体：[可选]

如果这个项目对你有帮助，请给个 ⭐ 支持一下吧！
