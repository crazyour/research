# Research Compass

面向中国留学生的日本大学院研究计划书指导网站。项目使用 Next.js App Router、React 与 TypeScript，可部署到 Vercel。

## 本地运行

```bash
npm install
cp .env.example .env.local
npm run dev
```

浏览器打开 `http://localhost:3000`。

## 上线前必须配置

在 `.env.local` 或 Vercel Environment Variables 中设置：

- `NEXT_PUBLIC_SITE_URL`：正式网站地址。
- `NEXT_PUBLIC_WECHAT_ID`：真实微信号。
- `NEXT_PUBLIC_WECHAT_QR`：二维码图片的公开路径，例如 `/images/wechat-qr.webp`。
- `CONTACT_WEBHOOK_URL`：接收咨询表单的服务端 Webhook。
- `NEXT_PUBLIC_CONTACT_FORM_ENABLED=true`：确认接收端可用后启用前端状态。

未配置 Webhook 时，表单接口会明确返回 503，不会伪造“提交成功”。

## 内容维护

- 品牌与导航：`src/data/siteConfig.ts`
- 服务与 FAQ：`src/data/content.ts`
- 价格：`src/data/pricing.ts`
- 研究领域：`src/data/researchCases.ts`

`researchCases.ts` 目前仅包含宽泛演示分类。正式上线前，应依据已获授权的资料逐条核对，不得加入学生姓名、具体学校、原始题目、创新点、实验方案或私人沟通记录。

## 构建与部署

```bash
npm run typecheck
npm run build
```

将项目连接到 Vercel，填写上述环境变量后即可部署。
# research
