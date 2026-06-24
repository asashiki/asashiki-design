# UI Kit · MCP Switch 控制台 Console

自托管 MCP 聚合网关 **mcp-switch** 的管理控制台样板 —— 系统里「MCP 工具 / Agent 应用 / 仪表盘」表面的代表。

**对应产品**：<https://github.com/asashiki/mcp-switch>（控制台 SPA，线上演示 `show.asashiki.com/console/`）。

## 重点
- **侧栏 + 数据表 + 详情**的经典三段仪表盘骨架，全中性墨白；樱粉只在选中导航项、主按钮、`Switch` 开启态、`--glow` 详情卡光带。
- 上游服务器注册表：remote / local 传输用 `Tag`（accent / line）区分，在线/空闲/离线用 `Badge dot`，启用开关用 `Switch`（点击实时联动状态与统计）。
- 顶栏 endpoint 胶囊、网关在线指示灯、审计日志均走 `mono` 字体。
- 交互：点服务器行选中 → 右侧详情卡更新；切开关改状态；明暗切换写 localStorage。

## 结构
单文件 `index.html`：`Sidebar`（logo 锁定 + 导航 + 网关状态）· `Topbar` · `Stats`（4×`Stat`）· `Registry`（服务器行）· `Detail`（`Card glow`）· `Audit`（日志流）。组件来自 `_ds_bundle.js`。

## 用法
浏览器直接打开；点服务器行、切开关、切明暗观察 token 联动。数据为样例，结构对齐 mcp-switch 的真实概念（聚合上游 / OAuth / 审计）。
