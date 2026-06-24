# UI Kit · 项目展示站 Showcase

`show.asashiki.com` 的 **v2 复刻**。展示落地页在 Asashiki Design v2 下的样子。

**复刻自**：<https://github.com/asashiki/show>（`index.html`）。

## 与原站的差异（v2 升级，非再创作）
- **emoji 卡片图标 → Lucide 线条图标**（原站 🔀🌸🔊 在 v2 红线里）。
- 中性墨白骨架，樱粉只在主按钮 / eyebrow / LIVE 徽章 / 卡片图标底。
- hero 大标题改 **Newsreader 衬线**，配 `--glow-wash` 角落柔光（非撞色渐变）。
- 季节配色轮盘简化为 `Segmented`（樱/墨/苔/柑/凇），含明暗切换，写入 localStorage。

## 结构
单文件 `index.html`：`Nav`（logo 锁定 + 配色/明暗切换）· `Hero` · `项目网格`（8 张 `Card`，`deco` 斜纹标记 LIVE 项目）· `Footer`。组件来自 `_ds_bundle.js`（`Button / Card / Tag / Badge / Segmented / IconButton / Eyebrow`）。

## 用法
浏览器直接打开。切换右上角配色/明暗，观察 token 如何整屏联动而组件代码不变。
