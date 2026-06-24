/* @ds-bundle: {"format":3,"namespace":"AsashikiDesignSystem_ddff7e","components":[{"name":"Avatar","sourcePath":"components/data/Avatar.jsx"},{"name":"Badge","sourcePath":"components/data/Badge.jsx"},{"name":"Card","sourcePath":"components/data/Card.jsx"},{"name":"Progress","sourcePath":"components/data/Progress.jsx"},{"name":"Stat","sourcePath":"components/data/Stat.jsx"},{"name":"Tag","sourcePath":"components/data/Tag.jsx"},{"name":"Dialog","sourcePath":"components/feedback/Dialog.jsx"},{"name":"Eyebrow","sourcePath":"components/feedback/Eyebrow.jsx"},{"name":"SectionHead","sourcePath":"components/feedback/SectionHead.jsx"},{"name":"Segmented","sourcePath":"components/feedback/Segmented.jsx"},{"name":"Tabs","sourcePath":"components/feedback/Tabs.jsx"},{"name":"Tooltip","sourcePath":"components/feedback/Tooltip.jsx"},{"name":"Button","sourcePath":"components/forms/Button.jsx"},{"name":"Checkbox","sourcePath":"components/forms/Checkbox.jsx"},{"name":"IconButton","sourcePath":"components/forms/IconButton.jsx"},{"name":"Input","sourcePath":"components/forms/Input.jsx"},{"name":"Select","sourcePath":"components/forms/Select.jsx"},{"name":"Switch","sourcePath":"components/forms/Switch.jsx"},{"name":"Textarea","sourcePath":"components/forms/Textarea.jsx"}],"sourceHashes":{"components/data/Avatar.jsx":"69919b4ba8d7","components/data/Badge.jsx":"69676827da97","components/data/Card.jsx":"06611f9e882a","components/data/Progress.jsx":"19756185daa8","components/data/Stat.jsx":"db7a7e910dcd","components/data/Tag.jsx":"5c73366927fd","components/feedback/Dialog.jsx":"a499bbf34d49","components/feedback/Eyebrow.jsx":"72b0ee39e440","components/feedback/SectionHead.jsx":"98138c9eed18","components/feedback/Segmented.jsx":"bc3f2b511bcc","components/feedback/Tabs.jsx":"d84b56c5d85c","components/feedback/Tooltip.jsx":"a5cc7a2fa2dc","components/forms/Button.jsx":"a56ed1baf4b6","components/forms/Checkbox.jsx":"4c799a89cf1d","components/forms/IconButton.jsx":"c98408338b57","components/forms/Input.jsx":"9b1742531295","components/forms/Select.jsx":"f3e155cfeb4c","components/forms/Switch.jsx":"a5ab3b7fe2f1","components/forms/Textarea.jsx":"6d78eb2f36ef"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.AsashikiDesignSystem_ddff7e = window.AsashikiDesignSystem_ddff7e || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/data/Avatar.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Avatar — 头像。传 src 显示图片，否则显示 name 首字或 icon。round 圆形，size sm/md/lg。
 */
function Avatar({
  src,
  name,
  icon = null,
  round = false,
  size = 'md',
  className = '',
  ...rest
}) {
  const cls = ['ad-avatar', round && 'ad-avatar--round', size !== 'md' && `ad-avatar--${size}`, className].filter(Boolean).join(' ');
  const initial = name ? name.trim().slice(0, 1).toUpperCase() : null;
  return /*#__PURE__*/React.createElement("span", _extends({
    className: cls
  }, rest), src ? /*#__PURE__*/React.createElement("img", {
    src: src,
    alt: name || ''
  }) : icon || initial);
}
Object.assign(__ds_scope, { Avatar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data/Avatar.jsx", error: String((e && e.message) || e) }); }

// components/data/Badge.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Badge — 状态徽章。tone：neutral/accent/success/warning/danger/info/outline。dot 显示前导小圆点。
 */
function Badge({
  tone = 'neutral',
  dot = false,
  icon = null,
  className = '',
  children,
  ...rest
}) {
  const cls = ['ad-badge', `ad-badge--${tone}`, dot && 'ad-badge--dot', className].filter(Boolean).join(' ');
  return /*#__PURE__*/React.createElement("span", _extends({
    className: cls
  }, rest), icon, children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data/Badge.jsx", error: String((e && e.message) || e) }); }

// components/data/Card.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Card — 通用卡片/面板。装饰：deco（右上 −12° 斜纹）、glow（顶部光带）。
 */
function Card({
  raised = false,
  interactive = false,
  deco = false,
  glow = false,
  className = '',
  children,
  ...rest
}) {
  const cls = ['ad-card', raised && 'ad-card--raised', interactive && 'ad-card--interactive', deco && 'ad-card--deco', glow && 'ad-card--glow', className].filter(Boolean).join(' ');
  return /*#__PURE__*/React.createElement("div", _extends({
    className: cls
  }, rest), children);
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data/Card.jsx", error: String((e && e.message) || e) }); }

// components/data/Progress.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Progress — 单色实填进度条（樱粉），尾端 −12° 切角。可选 label + value 文案。
 */
function Progress({
  value = 0,
  max = 100,
  label,
  valueText,
  className = '',
  ...rest
}) {
  const pct = Math.max(0, Math.min(100, value / max * 100));
  return /*#__PURE__*/React.createElement("div", _extends({
    className: ['ad-progress', className].filter(Boolean).join(' ')
  }, rest), (label || valueText) && /*#__PURE__*/React.createElement("div", {
    className: "ad-progress__head"
  }, /*#__PURE__*/React.createElement("span", null, label), valueText && /*#__PURE__*/React.createElement("b", null, valueText)), /*#__PURE__*/React.createElement("div", {
    className: "ad-progress__track"
  }, /*#__PURE__*/React.createElement("div", {
    className: "ad-progress__fill",
    style: {
      width: `${pct}%`
    }
  })));
}
Object.assign(__ds_scope, { Progress });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data/Progress.jsx", error: String((e && e.message) || e) }); }

// components/data/Stat.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Stat — 数字指标。num 走等宽字体；用 <em> 包裹的部分自动着樱粉强调色。
 */
function Stat({
  num,
  label,
  className = '',
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    className: ['ad-stat', className].filter(Boolean).join(' ')
  }, rest), /*#__PURE__*/React.createElement("div", {
    className: "ad-stat__num"
  }, num), label && /*#__PURE__*/React.createElement("div", {
    className: "ad-stat__lab"
  }, label));
}
Object.assign(__ds_scope, { Stat });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data/Stat.jsx", error: String((e && e.message) || e) }); }

// components/data/Tag.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Tag — 标签/keyword。variant：default/accent/line。skew 启用 −12° 签名斜切（文字自动摆正）。
 */
function Tag({
  variant = 'default',
  skew = false,
  className = '',
  children,
  ...rest
}) {
  const cls = ['ad-tag', variant !== 'default' && `ad-tag--${variant}`, skew && 'ad-tag--skew', className].filter(Boolean).join(' ');
  return /*#__PURE__*/React.createElement("span", _extends({
    className: cls
  }, rest), skew ? /*#__PURE__*/React.createElement("span", null, children) : children);
}
Object.assign(__ds_scope, { Tag });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data/Tag.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Dialog.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Dialog — 模态弹层。open 控制显隐，onClose 点遮罩/Esc 关闭。title + 内容 + footer。
 */
function Dialog({
  open,
  onClose,
  title,
  footer,
  className = '',
  children,
  ...rest
}) {
  React.useEffect(() => {
    if (!open) return;
    const onKey = e => {
      if (e.key === 'Escape' && onClose) onClose();
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open, onClose]);
  if (!open) return null;
  return /*#__PURE__*/React.createElement("div", {
    className: "ad-overlay",
    onClick: onClose
  }, /*#__PURE__*/React.createElement("div", _extends({
    className: ['ad-dialog', className].filter(Boolean).join(' '),
    role: "dialog",
    "aria-modal": "true",
    onClick: e => e.stopPropagation()
  }, rest), title && /*#__PURE__*/React.createElement("div", {
    className: "ad-dialog__title"
  }, title), /*#__PURE__*/React.createElement("div", {
    className: "ad-dialog__body"
  }, children), footer && /*#__PURE__*/React.createElement("div", {
    className: "ad-dialog__foot"
  }, footer)));
}
Object.assign(__ds_scope, { Dialog });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Dialog.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Eyebrow.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Eyebrow — 区块小标题前缀，自带 −12° 斜切色块。全大写 + 字间距。
 */
function Eyebrow({
  className = '',
  children,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    className: ['ad-eyebrow', className].filter(Boolean).join(' ')
  }, rest), children);
}
Object.assign(__ds_scope, { Eyebrow });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Eyebrow.jsx", error: String((e && e.message) || e) }); }

// components/feedback/SectionHead.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * SectionHead — 区块标题行：大标题 + 拉丁副名 + 斜纹延伸线。
 */
function SectionHead({
  title,
  jp,
  line = true,
  className = '',
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    className: ['ad-sechead', className].filter(Boolean).join(' ')
  }, rest), /*#__PURE__*/React.createElement("span", {
    className: "ad-sechead__title"
  }, title), jp && /*#__PURE__*/React.createElement("span", {
    className: "ad-sechead__jp"
  }, jp), line && /*#__PURE__*/React.createElement("span", {
    className: "ad-sechead__line"
  }));
}
Object.assign(__ds_scope, { SectionHead });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/SectionHead.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Segmented.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Segmented — 分段控件（主题/视图切换这类二三选一）。items: {key,label}[]，受控 value + onChange。
 */
function Segmented({
  items = [],
  value,
  onChange,
  className = '',
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    className: ['ad-seg', className].filter(Boolean).join(' ')
  }, rest), items.map(it => /*#__PURE__*/React.createElement("button", {
    key: it.key,
    className: value === it.key ? 'ad-seg--on' : '',
    onClick: () => onChange && onChange(it.key)
  }, it.label)));
}
Object.assign(__ds_scope, { Segmented });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Segmented.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Tabs.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Tabs — 下划线式选项卡。items: {key,label}[]，受控传 value + onChange(key)。
 */
function Tabs({
  items = [],
  value,
  onChange,
  className = '',
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    className: ['ad-tabs', className].filter(Boolean).join(' '),
    role: "tablist"
  }, rest), items.map(it => /*#__PURE__*/React.createElement("button", {
    key: it.key,
    role: "tab",
    "aria-selected": value === it.key,
    className: `ad-tab${value === it.key ? ' ad-tab--active' : ''}`,
    onClick: () => onChange && onChange(it.key)
  }, it.label)));
}
Object.assign(__ds_scope, { Tabs });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Tabs.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Tooltip.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Tooltip — 纯 CSS hover/focus 气泡，包裹任意子元素，tip 为提示文字。
 */
function Tooltip({
  tip,
  children,
  className = '',
  ...rest
}) {
  return /*#__PURE__*/React.createElement("span", _extends({
    className: ['ad-tooltip', className].filter(Boolean).join(' '),
    tabIndex: 0
  }, rest), children, /*#__PURE__*/React.createElement("span", {
    className: "ad-tooltip__bubble",
    role: "tooltip"
  }, tip));
}
Object.assign(__ds_scope, { Tooltip });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Tooltip.jsx", error: String((e && e.message) || e) }); }

// components/forms/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Button — 主操作按钮。变体：primary（樱粉实心）/ secondary / ghost / quiet / danger。
 */
function Button({
  variant = 'primary',
  size = 'md',
  block = false,
  icon = null,
  iconRight = null,
  className = '',
  children,
  ...rest
}) {
  const cls = ['ad-btn', `ad-btn--${variant}`, size !== 'md' && `ad-btn--${size}`, block && 'ad-btn--block', className].filter(Boolean).join(' ');
  return /*#__PURE__*/React.createElement("button", _extends({
    className: cls
  }, rest), icon, children && /*#__PURE__*/React.createElement("span", null, children), iconRight);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Button.jsx", error: String((e && e.message) || e) }); }

// components/forms/Checkbox.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Checkbox — 复选框（樱粉勾选态）。受控传 checked + onChange。
 */
function Checkbox({
  label,
  className = '',
  ...rest
}) {
  return /*#__PURE__*/React.createElement("label", {
    className: ['ad-check', className].filter(Boolean).join(' ')
  }, /*#__PURE__*/React.createElement("input", _extends({
    type: "checkbox"
  }, rest)), /*#__PURE__*/React.createElement("span", {
    className: "ad-check__box"
  }, /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor"
  }, /*#__PURE__*/React.createElement("polyline", {
    points: "20 6 9 17 4 12"
  }))), label && /*#__PURE__*/React.createElement("span", null, label));
}
Object.assign(__ds_scope, { Checkbox });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Checkbox.jsx", error: String((e && e.message) || e) }); }

// components/forms/IconButton.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * IconButton — 仅图标的方形按钮，用于工具栏 / 卡片角操作。
 */
function IconButton({
  icon,
  label,
  outline = false,
  className = '',
  ...rest
}) {
  const cls = ['ad-iconbtn', outline && 'ad-iconbtn--outline', className].filter(Boolean).join(' ');
  return /*#__PURE__*/React.createElement("button", _extends({
    className: cls,
    "aria-label": label,
    title: label
  }, rest), icon);
}
Object.assign(__ds_scope, { IconButton });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/IconButton.jsx", error: String((e && e.message) || e) }); }

// components/forms/Input.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Input — 文本输入框，可选 label / hint / 错误态 / 前置图标。
 */
function Input({
  label,
  hint,
  error,
  icon = null,
  id,
  required = false,
  className = '',
  ...rest
}) {
  const inputId = id || (label ? `ad-in-${Math.random().toString(36).slice(2, 7)}` : undefined);
  const field = /*#__PURE__*/React.createElement("div", {
    className: icon ? 'ad-input-wrap' : undefined
  }, icon, /*#__PURE__*/React.createElement("input", _extends({
    id: inputId,
    className: ['ad-input', className].filter(Boolean).join(' '),
    "aria-invalid": error ? 'true' : undefined
  }, rest)));
  if (!label && !hint && !error) return field;
  return /*#__PURE__*/React.createElement("div", {
    className: "ad-field"
  }, label && /*#__PURE__*/React.createElement("label", {
    className: "ad-label",
    htmlFor: inputId
  }, label, required && /*#__PURE__*/React.createElement("span", {
    className: "ad-req"
  }, "*")), field, (error || hint) && /*#__PURE__*/React.createElement("span", {
    className: `ad-hint${error ? ' ad-hint--error' : ''}`
  }, error || hint));
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Input.jsx", error: String((e && e.message) || e) }); }

// components/forms/Select.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Select — 原生 select 的皮肤封装（自带斜下箭头）。options: {value,label}[] 或直接传 children。
 */
function Select({
  label,
  hint,
  id,
  options,
  required = false,
  className = '',
  children,
  ...rest
}) {
  const selId = id || (label ? `ad-se-${Math.random().toString(36).slice(2, 7)}` : undefined);
  const el = /*#__PURE__*/React.createElement("div", {
    className: "ad-select-wrap"
  }, /*#__PURE__*/React.createElement("select", _extends({
    id: selId,
    className: ['ad-select', className].filter(Boolean).join(' ')
  }, rest), options ? options.map(o => /*#__PURE__*/React.createElement("option", {
    key: o.value,
    value: o.value
  }, o.label)) : children));
  if (!label && !hint) return el;
  return /*#__PURE__*/React.createElement("div", {
    className: "ad-field"
  }, label && /*#__PURE__*/React.createElement("label", {
    className: "ad-label",
    htmlFor: selId
  }, label, required && /*#__PURE__*/React.createElement("span", {
    className: "ad-req"
  }, "*")), el, hint && /*#__PURE__*/React.createElement("span", {
    className: "ad-hint"
  }, hint));
}
Object.assign(__ds_scope, { Select });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Select.jsx", error: String((e && e.message) || e) }); }

// components/forms/Switch.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Switch — 开关。受控传 checked + onChange。
 */
function Switch({
  label,
  className = '',
  ...rest
}) {
  const sw = /*#__PURE__*/React.createElement("span", {
    className: "ad-switch"
  }, /*#__PURE__*/React.createElement("input", _extends({
    type: "checkbox"
  }, rest)), /*#__PURE__*/React.createElement("span", {
    className: "ad-switch__track"
  }), /*#__PURE__*/React.createElement("span", {
    className: "ad-switch__thumb"
  }));
  if (!label) return sw;
  return /*#__PURE__*/React.createElement("label", {
    className: ['ad-check', className].filter(Boolean).join(' '),
    style: {
      justifyContent: 'space-between',
      width: '100%'
    }
  }, /*#__PURE__*/React.createElement("span", null, label), sw);
}
Object.assign(__ds_scope, { Switch });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Switch.jsx", error: String((e && e.message) || e) }); }

// components/forms/Textarea.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Textarea — 多行文本输入，可选 label / hint。
 */
function Textarea({
  label,
  hint,
  id,
  required = false,
  className = '',
  ...rest
}) {
  const taId = id || (label ? `ad-ta-${Math.random().toString(36).slice(2, 7)}` : undefined);
  const el = /*#__PURE__*/React.createElement("textarea", _extends({
    id: taId,
    className: ['ad-textarea', className].filter(Boolean).join(' ')
  }, rest));
  if (!label && !hint) return el;
  return /*#__PURE__*/React.createElement("div", {
    className: "ad-field"
  }, label && /*#__PURE__*/React.createElement("label", {
    className: "ad-label",
    htmlFor: taId
  }, label, required && /*#__PURE__*/React.createElement("span", {
    className: "ad-req"
  }, "*")), el, hint && /*#__PURE__*/React.createElement("span", {
    className: "ad-hint"
  }, hint));
}
Object.assign(__ds_scope, { Textarea });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Textarea.jsx", error: String((e && e.message) || e) }); }

__ds_ns.Avatar = __ds_scope.Avatar;

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.Progress = __ds_scope.Progress;

__ds_ns.Stat = __ds_scope.Stat;

__ds_ns.Tag = __ds_scope.Tag;

__ds_ns.Dialog = __ds_scope.Dialog;

__ds_ns.Eyebrow = __ds_scope.Eyebrow;

__ds_ns.SectionHead = __ds_scope.SectionHead;

__ds_ns.Segmented = __ds_scope.Segmented;

__ds_ns.Tabs = __ds_scope.Tabs;

__ds_ns.Tooltip = __ds_scope.Tooltip;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Checkbox = __ds_scope.Checkbox;

__ds_ns.IconButton = __ds_scope.IconButton;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.Select = __ds_scope.Select;

__ds_ns.Switch = __ds_scope.Switch;

__ds_ns.Textarea = __ds_scope.Textarea;

})();
