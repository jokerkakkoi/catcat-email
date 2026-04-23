# AGENT.md

## 项目定位

`catcat-email` 是一个基于 Tauri 2 的桌面应用，前端使用 React 19 + TypeScript + Vite，样式体系使用 Tailwind CSS 4，并混合了 shadcn/radix 风格组件。当前项目更接近“邮箱客户端 UI 原型”而不是完整业务应用：前端已有导航、侧栏、列表面板和营销内容模块，Rust 端仍接近默认 Tauri 壳层。

本文件给进入仓库的 agent / 开发者一个可直接执行的工作约定，目标是：

- 先理解现有结构，再改代码。
- 优先延续项目已有写法，不额外发明一套模式。
- 在前端改动时兼顾 Tauri 桌面场景，而不是按纯网页站点处理。

## 技术栈

- Desktop shell: Tauri 2
- Frontend: React 19 + TypeScript
- Build tool: Vite 7
- Styling: Tailwind CSS 4 + `tw-animate-css`
- UI primitives: `radix-ui`
- Utility libs: `clsx`, `tailwind-merge`, `class-variance-authority`
- State/data: `zustand` 已安装，但当前主流程里基本还没真正接入
- Mock: 当前使用 `src/mock/index.ts` 中的静态 mock 数据
- Package manager: `pnpm`

## 目录速览

- `src/main.tsx`: React 入口
- `src/App.tsx`: 当前页面总装配，包含顶部导航、左侧可拖拽 sidebar、邮件 pane 和主内容区
- `src/components/`: 当前业务 UI 组件
  - `navigation/`: 顶部导航和搜索
  - `sidebar/`: 左侧分组导航
  - `pane/`: 邮件列表面板
  - `hero.tsx` / `features.tsx` / `platforms.tsx` / `cta.tsx` / `footer.tsx`: 当前主内容区模块
- `components/ui/`: 通用 UI 基础组件，偏 shadcn/radix 风格
- `src/lib/utils.tsx`: `cn()` 等基础工具
- `src/assets/styles/globals.css`: 全局样式、主题 token、品牌色
- `src/mock/`: mock 数据示例
- `src-tauri/`: Rust / Tauri 配置与入口
  - `src/lib.rs`: Tauri command 和 app builder
  - `tauri.conf.json`: 桌面端构建与 dev server 绑定配置

## 运行与构建

- 前端开发：`pnpm dev`
- 前端构建：`pnpm build`
- Tauri 开发：`pnpm tauri dev`
- Tauri 构建：`pnpm tauri build`

注意事项：

- Tauri 配置要求前端 dev server 固定跑在 `http://localhost:1420`
- HMR 端口是 `1421`
- `vite.config.ts` 已启用 `strictPort: true`，端口被占用时不会自动换端口

## 当前代码现状

进入仓库后，请先默认以下判断成立：

- 前端 UI 已经脱离模板，有真实结构，但整体仍在原型阶段。
- Rust 端仍接近 Tauri 默认模板，仅有 `greet` command 和 opener plugin。
- 仓库里存在两套组件目录：
  - `src/components/` 放当前页面/业务模块
  - `components/ui/` 放可复用基础组件
- 路径别名 `@` 指向仓库根目录，不是 `src/`
  - `@/lib/utils` 实际对应根目录下的 `src/lib/utils.tsx`
  - 写 import 时要先确认 alias 对应目标，避免凭惯性按常见 React 项目结构猜

## 编码与文本约束

仓库里已有多处中文文本出现乱码痕迹，像是文件编码不一致导致的 mojibake。处理文本相关改动时：

- 默认统一按 UTF-8 编码编辑文件
- 不要在乱码文件上直接“顺手微调”文案，先确认原始文本应该是什么
- 如果只是结构性改动，尽量避免扩大乱码 diff
- 如果要系统修复文案编码问题，单独做一次明确提交/变更说明

## 前端改动约定

### 1. 先复用已有模式

优先沿用这些现有模式：

- 函数组件 + hooks
- `cn()` 合并 class
- Tailwind utility class 直接写在 JSX 上
- 可复用基础组件优先放在 `components/ui/`
- 页面/业务组合组件放在 `src/components/`

### 2. 组件职责划分

- 通用按钮、弹层、菜单、sheet 之类基础能力放 `components/ui/`
- 邮箱特有的列表、侧栏、导航、阅读区这类业务组件放 `src/components/`
- 不要把只用一次的页面结构硬抽成“通用组件”

### 3. 样式约定

- 优先复用 `globals.css` 中已有 token 和品牌色
- 已有品牌色：
  - `#24C8DB` 蓝色
  - `#FFC131` 橙色
- 当前 UI 是轻量、明亮、桌面应用感的风格，新增界面尽量保持同一视觉语言
- 尽量使用现有圆角尺度和边框透明度，不要突然切成另一套设计体系

### 4. 桌面应用意识

这是 Tauri 应用，不是纯营销站。改前端时优先考虑：

- 桌面窗口内的信息密度
- 侧栏 / 列表 / 详情面板的布局稳定性
- 长列表滚动体验
- 顶栏和固定区域在窗口缩放时的表现

如果新增功能是邮件客户端核心能力，优先增强现有“三栏式”结构，而不是继续堆营销模块。

## Rust / Tauri 改动约定

- 只有在确实需要本地能力时再下沉到 Rust command
- 新增 command 时：
  - 在 `src-tauri/src/lib.rs` 注册
  - 保持参数和返回值结构清晰，优先 `serde` 可序列化类型
- 不要随意改 `tauri.conf.json` 的 dev/build 绑定，除非任务明确要求
- Windows 下 Tauri 构建对路径、端口和前端产物目录比较敏感，改完配置后要顺手验证

## Mock 与数据流

- `mockjs` 已存在，但当前并没有形成完整 API 层
- 如果只是做 UI 联调，可继续使用 `src/mock/` 或组件内局部 mock 数据
- 如果开始出现多个视图共享状态，优先考虑把状态整理到 `zustand` store，而不是层层 props 传递
- 若要引入真实接口，请先明确 mock、store、view model 的边界，不要把请求逻辑散落在多个组件内

## 做改动前的检查清单

开始编码前，先过一遍：

1. 改动属于 `src/components/` 业务组件，还是 `components/ui/` 基础组件？
2. 是否需要兼容 Tauri 窗口尺寸，而不只是浏览器大屏？
3. 是否会碰到已有中文乱码内容？
4. 是否真的需要新增抽象，还是复用现有结构更自然？
5. 如果涉及状态或数据，是否需要顺手收敛到 store / mock 层？

## 完成改动后的最低验证

前端小改至少做这些：

- 能通过 `pnpm build`
- 关键页面没有明显布局错位
- 侧栏拖拽、固定头部、滚动区域没有被改坏

如果涉及 Tauri / Rust：

- 至少确认 `pnpm tauri dev` 能起
- 若改了 command，前端调用链走通

## 不建议做的事

- 不要把 `@` 默认理解成 `src/`
- 不要把 `components/ui/` 和 `src/components/` 混用到边界模糊
- 不要为了“小改动”顺手重写全局样式体系
- 不要在未确认编码的情况下批量替换中文文案
- 不要把桌面应用页面继续做成单纯落地页

## 推荐的工作方式

面对这个仓库，比较稳妥的节奏是：

1. 先读 `src/App.tsx` 理解页面拼装方式
2. 再看目标组件以及它依赖的 `components/ui/`
3. 若涉及桌面能力，再进入 `src-tauri/`
4. 改完先做最小验证，再决定是否继续扩展

一句话总结：这个项目现在最需要的是“在现有邮箱桌面原型上继续收敛和落地”，而不是再铺一层新模板。
