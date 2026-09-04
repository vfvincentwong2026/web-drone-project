> 基于 React + Vite + Tailwind CSS 构建的智能装备展示网站，适配 **无人机 / 机器人 / 无人农机** 等产品，并集成了 Cloudflare 后端 API 支持，可快速实现产品数据管理、表单提交等功能。

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![React](https://img.shields.io/badge/React-18.2-blue)](https://reactjs.org/)
[![Vite](https://img.shields.io/badge/Vite-4.0-purple)](https://vitejs.dev/)
[![Tailwind](https://img.shields.io/badge/Tailwind-3.3-38bdf8)](https://tailwindcss.com/)
[![Cloudflare](https://img.shields.io/badge/Cloudflare-Pages+Workers-orange)](https://pages.cloudflare.com/)

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
- **🌐 全栈部署** – 前端托管在 Cloudflare Pages，后端 API 使用 Cloudflare Workers（Pages Functions），无需额外服务器
- **🗄️ 可扩展数据** – 产品数据可来自本地 JSON、Cloudflare KV 或 D1 数据库（示例提供 API 接口）

---

## 🛠️ 技术栈

### 前端
- [React 18](https://reactjs.org/)
- [Vite](https://vitejs.dev/)
- [Tailwind CSS](https://tailwindcss.com/)
- [React Router](https://reactrouter.com/)（可选）

### 后端（Cloudflare 生态）
- [Cloudflare Pages](https://pages.cloudflare.com/) – 静态托管 + Functions
- [Cloudflare Workers](https://workers.cloudflare.com/) – 无服务器 API 运行环境
- [Cloudflare KV](https://developers.cloudflare.com/kv/) 或 [D1](https://developers.cloudflare.com/d1/) – 可选数据存储

---

## 📦 快速开始

### 环境要求
- Node.js 16+ 和 npm / yarn / pnpm

### 克隆与安装

```bash
git clone https://github.com/你的用户名/你的仓库名.git
cd 你的仓库名
npm install
本地开发（前端 + API 模拟）
启动开发服务器（前端）：

bash
npm run dev
访问 http://localhost:3000

（可选）本地模拟后端 API：

在项目根目录创建 functions 目录，按照 Cloudflare Pages Functions 规范编写 API 路由。

使用 wrangler 或 Pages 的本地开发工具进行测试。

也可以先用 json-server 或 mock 数据替代。

生产构建
bash
npm run build
构建产物位于 dist/ 目录。

📂 项目结构（包含后端 API）
text
.
├── public/                    # 静态资源
├── src/
│   ├── assets/                # 图片、字体等
│   ├── components/            # UI 组件
│   ├── pages/                 # 页面组件（如有路由）
│   ├── apis/                  # 前端 API 调用封装（请求后端接口）
│   ├── utils/                 # 工具函数
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── functions/                 # Cloudflare Pages Functions（后端 API）
│   ├── api/
│   │   ├── products.js        # GET /api/products 返回产品列表
│   │   └── contact.js         # POST /api/contact 处理表单提交
│   └── _middleware.js         # 可选全局中间件
├── tailwind.config.js
├── vite.config.js
├── wrangler.toml              # Cloudflare Workers 配置（如单独使用 Worker）
├── package.json
└── README.md
🚀 部署到 Cloudflare（前后端一体）
1. 准备仓库
将代码推送到 GitHub（或 GitLab）。

2. 登录 Cloudflare Pages
访问 Cloudflare Pages，点击「创建项目」→「连接到 Git」→ 选择你的仓库。

3. 构建设置
框架预设：选择 Vite（或手动配置）

构建命令：npm run build

输出目录：dist

环境变量（如需要）：在此添加后端需要的变量（如 KV 命名空间 ID 等）

4. 启用 Functions（后端 API）
Cloudflare Pages 会自动识别 functions 目录，并将其部署为 Pages Functions（即 Workers）。

无需额外配置，API 路由将自动映射为 /api/*。

5. 部署
点击「保存并部署」，等待构建完成。部署成功后，你会获得一个 *.pages.dev 域名，前端和 API 均在同一个域名下（例如 https://my-project.pages.dev/api/products）。

6. （可选）绑定 KV 或 D1
如果需要在 API 中读写数据，可以在 Pages 项目的「设置」→「Functions」→「KV 命名空间绑定」中绑定你的 KV 或 D1 数据库。

🧩 自定义指南
修改前端内容
编辑 src/components/Hero.jsx 修改首页大标题和副标题。

编辑 src/components/Products.jsx 修改产品展示逻辑（数据从 API 获取或静态）。

替换 src/assets/ 中的图片为你自己的产品图。

修改 API 接口
在 functions/api/products.js 中修改返回的产品数据（可改为从 KV 或数据库读取）。

在 functions/api/contact.js 中实现表单提交逻辑（发送邮件、存储等）。

修改主题色
在 tailwind.config.js 的 theme.extend.colors 中自定义主色，然后全局替换类名。

🤝 贡献
欢迎提交 Issue 或 Pull Request。对于重大改动，请先开 Issue 讨论。

📄 许可证
本项目基于 MIT License 开源，可自由使用和修改，但请保留原作者版权声明。

🙏 致谢
原项目作者：Mochrks

本项目在原始仓库基础上进行了二次开发，并集成了 Cloudflare 全栈部署能力。

📧 联系方式
官网：[你的网站]

邮箱：[你的邮箱]

社交媒体：[可选]
