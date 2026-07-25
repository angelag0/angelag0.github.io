/* @ds-bundle: {"format":4,"namespace":"HyVueCMSDesignSystem_24ff2f","components":[{"name":"Avatar","sourcePath":"components/core/Avatar.jsx"},{"name":"Badge","sourcePath":"components/core/Badge.jsx"},{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"Card","sourcePath":"components/core/Card.jsx"},{"name":"Chip","sourcePath":"components/core/Chip.jsx"},{"name":"Icon","sourcePath":"components/core/Icon.jsx"},{"name":"IconButton","sourcePath":"components/core/IconButton.jsx"},{"name":"StatCard","sourcePath":"components/data/StatCard.jsx"},{"name":"Alert","sourcePath":"components/feedback/Alert.jsx"},{"name":"ProgressCircular","sourcePath":"components/feedback/ProgressCircular.jsx"},{"name":"ProgressLinear","sourcePath":"components/feedback/ProgressLinear.jsx"},{"name":"Checkbox","sourcePath":"components/forms/Checkbox.jsx"},{"name":"Radio","sourcePath":"components/forms/Checkbox.jsx"},{"name":"Input","sourcePath":"components/forms/Input.jsx"},{"name":"Select","sourcePath":"components/forms/Select.jsx"},{"name":"Switch","sourcePath":"components/forms/Switch.jsx"},{"name":"Breadcrumb","sourcePath":"components/navigation/Breadcrumb.jsx"},{"name":"Pagination","sourcePath":"components/navigation/Pagination.jsx"},{"name":"Tabs","sourcePath":"components/navigation/Tabs.jsx"}],"sourceHashes":{"components/core/Avatar.jsx":"9cad8243c7c4","components/core/Badge.jsx":"7cc4b17953d8","components/core/Button.jsx":"9edb5d18babe","components/core/Card.jsx":"52ec557932f2","components/core/Chip.jsx":"ed03c6272ff2","components/core/Icon.jsx":"4329fe2bea88","components/core/IconButton.jsx":"ff770cf3a4e5","components/data/StatCard.jsx":"fc15319beeea","components/feedback/Alert.jsx":"e1fe6dd55758","components/feedback/ProgressCircular.jsx":"555fa84b8e05","components/feedback/ProgressLinear.jsx":"8864325c1f81","components/forms/Checkbox.jsx":"d59eb0978b64","components/forms/Input.jsx":"63a05cb5f281","components/forms/Radio.jsx":"e0cef06f8b52","components/forms/Select.jsx":"f3c60d1c61ec","components/forms/Switch.jsx":"b49c56a8b87f","components/navigation/Breadcrumb.jsx":"0c9d3e62787d","components/navigation/Pagination.jsx":"497474ff05b3","components/navigation/Tabs.jsx":"93caf4e3c9fd","ui_kits/dashboard/app.view.jsx":"5b1dc842c66c","ui_kits/dashboard/charts.view.jsx":"521699f218f8","ui_kits/dashboard/dashboard.view.jsx":"e292b5b10947","ui_kits/dashboard/datatable.view.jsx":"683e6574de4c","ui_kits/dashboard/sidebar.view.jsx":"1ef410615ec2","ui_kits/dashboard/signin.view.jsx":"0b08a9497bc1","ui_kits/dashboard/topbar.view.jsx":"670fbeff5594"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.HyVueCMSDesignSystem_24ff2f = window.HyVueCMSDesignSystem_24ff2f || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/core/Avatar.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Avatar — user image with initials fallback and optional status dot.
 */
function Avatar({
  src,
  name = "",
  size = 40,
  shape = "circle",
  status,
  className = "",
  style = {},
  ...rest
}) {
  const initials = name.trim().split(/\s+/).slice(0, 2).map(w => w[0]).join("").toUpperCase();
  const radius = shape === "square" ? "var(--radius-med)" : "var(--radius-full)";
  const statusColor = {
    online: "var(--sys-success)",
    busy: "var(--sys-error)",
    away: "var(--sys-warning)",
    offline: "var(--sys-text-faint)"
  }[status];
  return /*#__PURE__*/React.createElement("span", _extends({
    className: `hv-avatar ${className}`,
    style: {
      position: "relative",
      display: "inline-flex",
      width: size,
      height: size,
      flex: "none",
      ...style
    }
  }, rest), src ? /*#__PURE__*/React.createElement("img", {
    src: src,
    alt: name,
    style: {
      width: "100%",
      height: "100%",
      objectFit: "cover",
      borderRadius: radius,
      display: "block"
    }
  }) : /*#__PURE__*/React.createElement("span", {
    style: {
      width: "100%",
      height: "100%",
      borderRadius: radius,
      background: "var(--sys-primary-tint)",
      color: "var(--sys-primary)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      fontFamily: "var(--font-sans)",
      fontWeight: "var(--fw-bold)",
      fontSize: Math.round(size * 0.4),
      letterSpacing: 0
    }
  }, initials || "?"), statusColor && /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      right: 0,
      bottom: 0,
      width: Math.max(8, size * 0.26),
      height: Math.max(8, size * 0.26),
      borderRadius: "var(--radius-full)",
      background: statusColor,
      boxShadow: "0 0 0 2px var(--sys-surface-card)"
    }
  }));
}
Object.assign(__ds_scope, { Avatar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Avatar.jsx", error: String((e && e.message) || e) }); }

// components/core/Badge.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const TONES = {
  neutral: {
    fg: "var(--sys-text-body)",
    solidBg: "var(--sys-text-muted)",
    fill: "var(--sys-surface-row)"
  },
  primary: {
    fg: "var(--sys-primary)",
    solidBg: "var(--sys-primary)",
    fill: "var(--sys-primary-tint)"
  },
  info: {
    fg: "var(--sys-info)",
    solidBg: "var(--sys-info)",
    fill: "var(--sys-info-fill)"
  },
  success: {
    fg: "var(--sys-success)",
    solidBg: "var(--sys-success)",
    fill: "var(--sys-success-fill)"
  },
  warning: {
    fg: "var(--sys-warning)",
    solidBg: "var(--sys-warning)",
    fill: "var(--sys-warning-fill)"
  },
  error: {
    fg: "var(--sys-error)",
    solidBg: "var(--sys-error)",
    fill: "var(--sys-error-fill)"
  }
};

/**
 * Badge — compact status label. `variant`:
 *  - soft   (tinted fill + colored text)  [default]
 *  - solid  (filled + white text)
 *  - outline(border + colored text)
 *  - dot    (leading status dot + text)
 */
function Badge({
  children,
  tone = "neutral",
  variant = "soft",
  className = "",
  style = {},
  ...rest
}) {
  const t = TONES[tone] || TONES.neutral;
  const base = {
    display: "inline-flex",
    alignItems: "center",
    gap: 6,
    font: "var(--type-caption)",
    fontWeight: "var(--fw-bold)",
    letterSpacing: "var(--ls-tight)",
    height: 24,
    padding: "0 10px",
    borderRadius: "var(--radius-full)",
    whiteSpace: "nowrap",
    border: "var(--border-thin) solid transparent"
  };
  const skins = {
    soft: {
      background: t.fill,
      color: t.fg
    },
    solid: {
      background: t.solidBg,
      color: "var(--sys-text-onfill)"
    },
    outline: {
      background: "transparent",
      color: t.fg,
      borderColor: t.fg
    },
    dot: {
      background: t.fill,
      color: t.fg,
      paddingLeft: 8
    }
  };
  return /*#__PURE__*/React.createElement("span", _extends({
    className: `hv-badge ${className}`,
    style: {
      ...base,
      ...skins[variant],
      ...style
    }
  }, rest), variant === "dot" && /*#__PURE__*/React.createElement("span", {
    style: {
      width: 7,
      height: 7,
      borderRadius: "var(--radius-full)",
      background: t.solidBg,
      flex: "none"
    }
  }), children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Badge.jsx", error: String((e && e.message) || e) }); }

// components/core/Card.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Card — the standard white content container used across HyVue CMS
 * dashboards (12px radius, soft drop shadow, 24px padding).
 */
function Card({
  children,
  title,
  action,
  padding = 24,
  flush = false,
  className = "",
  style = {},
  ...rest
}) {
  return /*#__PURE__*/React.createElement("section", _extends({
    className: `hv-card ${className}`,
    style: {
      background: "var(--sys-surface-card)",
      borderRadius: "var(--radius-med)",
      boxShadow: "var(--shadow-card)",
      padding: flush ? 0 : padding,
      color: "var(--sys-text-body)",
      ...style
    }
  }, rest), (title || action) && /*#__PURE__*/React.createElement("header", {
    style: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      gap: 12,
      marginBottom: 16,
      padding: flush ? `${padding}px ${padding}px 0` : 0
    }
  }, title && /*#__PURE__*/React.createElement("h2", {
    style: {
      font: "var(--type-h2)",
      color: "var(--sys-text)",
      letterSpacing: "var(--ls-med)"
    }
  }, title), action), children);
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Card.jsx", error: String((e && e.message) || e) }); }

// components/core/Icon.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Icon — Material Symbols Outlined webfont wrapper.
 * HyVue CMS uses Material Symbols throughout the product UI.
 * Pass the symbol name (e.g. "home", "settings", "notifications").
 */
function Icon({
  name,
  size = 24,
  weight = 400,
  fill = false,
  grade = 0,
  color,
  className = "",
  style = {},
  ...rest
}) {
  return /*#__PURE__*/React.createElement("span", _extends({
    className: `material-symbols-outlined ${className}`,
    "aria-hidden": "true",
    style: {
      fontSize: size,
      color: color || "inherit",
      fontVariationSettings: `'FILL' ${fill ? 1 : 0}, 'wght' ${weight}, 'GRAD' ${grade}, 'opsz' ${size}`,
      userSelect: "none",
      flex: "none",
      ...style
    }
  }, rest), name);
}
Object.assign(__ds_scope, { Icon });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Icon.jsx", error: String((e && e.message) || e) }); }

// components/core/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* Inject button styles once. Hover / active / focus / disabled all
   resolve against the design-system CSS custom properties. */
const STYLE_ID = "hv-button-styles";
function ensureStyles() {
  if (typeof document === "undefined" || document.getElementById(STYLE_ID)) return;
  const el = document.createElement("style");
  el.id = STYLE_ID;
  el.textContent = `
.hv-btn{
  --_bg:transparent; --_fg:var(--sys-primary); --_bd:transparent; --_sh:none;
  display:inline-flex; align-items:center; justify-content:center; gap:8px;
  font-family:var(--font-sans); font-weight:var(--fw-bold);
  letter-spacing:var(--ls-tight); white-space:nowrap; cursor:pointer;
  border:var(--border-thin) solid var(--_bd); border-radius:var(--radius-def);
  background:var(--_bg); color:var(--_fg); box-shadow:var(--_sh);
  transition:background .15s ease, box-shadow .15s ease, color .15s ease, border-color .15s ease, transform .05s ease;
  text-decoration:none; -webkit-tap-highlight-color:transparent;
}
.hv-btn:focus-visible{ outline:none; box-shadow:var(--_sh), var(--focus-ring); }
.hv-btn:active{ transform:translateY(.5px); }
.hv-btn[disabled]{ cursor:not-allowed; opacity:1; }

/* sizes */
.hv-btn--lg{ height:56px; padding:0 24px; font-size:var(--fs-18); }
.hv-btn--md{ height:40px; padding:0 16px; font-size:var(--fs-16); }
.hv-btn--sm{ height:32px; padding:0 12px; font-size:var(--fs-14); }

/* ELEVATED (primary solid + shadow) */
.hv-btn--elevated{ --_bg:var(--sys-primary); --_fg:var(--sys-text-onfill); --_sh:var(--shadow-card); }
.hv-btn--elevated:hover{ --_bg:var(--sys-primary-mid); }
.hv-btn--elevated:active{ --_bg:var(--sys-secondary-deep); --_sh:none; }
.hv-btn--elevated[disabled]{ --_bg:var(--sys-border); --_fg:var(--sys-text-faint); --_sh:none; }

/* FLAT (primary solid, no shadow) */
.hv-btn--flat{ --_bg:var(--sys-primary); --_fg:var(--sys-text-onfill); }
.hv-btn--flat:hover{ --_bg:var(--sys-primary-mid); }
.hv-btn--flat:active{ --_bg:var(--sys-secondary-deep); }
.hv-btn--flat[disabled]{ --_bg:var(--sys-border); --_fg:var(--sys-text-faint); }

/* TONAL (soft tint) */
.hv-btn--tonal{ --_bg:var(--sys-tonal); --_fg:var(--sys-secondary-deep); }
.hv-btn--tonal:hover{ --_bg:var(--sys-primary-tint); }
.hv-btn--tonal:active{ --_bg:var(--sys-secondary-teal); --_fg:var(--sys-primary); }
.hv-btn--tonal[disabled]{ --_bg:var(--sys-surface-row); --_fg:var(--sys-text-faint); }

/* OUTLINED */
.hv-btn--outlined{ --_bg:var(--sys-surface-card); --_fg:var(--sys-secondary); --_bd:var(--sys-secondary); }
.hv-btn--outlined:hover{ --_bg:var(--sys-tonal); }
.hv-btn--outlined:active{ --_bg:var(--sys-primary-tint); }
.hv-btn--outlined[disabled]{ --_bg:var(--sys-surface-card); --_fg:var(--sys-text-faint); --_bd:var(--sys-border); }

/* TEXT (hover tint) */
.hv-btn--text{ --_bg:transparent; --_fg:var(--sys-secondary); }
.hv-btn--text:hover{ --_bg:var(--sys-tonal); }
.hv-btn--text:active{ --_bg:var(--sys-primary-tint); }
.hv-btn--text[disabled]{ --_fg:var(--sys-text-faint); }

/* PLAIN (no hover surface) */
.hv-btn--plain{ --_bg:transparent; --_fg:var(--sys-secondary); }
.hv-btn--plain:hover{ --_fg:var(--sys-primary); }
.hv-btn--plain:active{ --_fg:var(--sys-secondary-deep); }
.hv-btn--plain[disabled]{ --_fg:var(--sys-text-faint); }

/* block */
.hv-btn--block{ width:100%; }
`;
  document.head.appendChild(el);
}
const ICON_SIZE = {
  lg: 20,
  md: 18,
  sm: 16
};

/**
 * Button — the HyVue CMS action button.
 * type: elevated | flat | tonal | outlined | text | plain
 * size: lg | md | sm
 */
function Button({
  children,
  type = "elevated",
  size = "md",
  leftIcon,
  rightIcon,
  block = false,
  disabled = false,
  className = "",
  ...rest
}) {
  ensureStyles();
  const isz = ICON_SIZE[size] || 18;
  const renderIcon = ic => typeof ic === "string" ? /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: ic,
    size: isz,
    weight: 700
  }) : ic;
  return /*#__PURE__*/React.createElement("button", _extends({
    className: `hv-btn hv-btn--${type} hv-btn--${size} ${block ? "hv-btn--block" : ""} ${className}`,
    disabled: disabled
  }, rest), leftIcon && renderIcon(leftIcon), children != null && /*#__PURE__*/React.createElement("span", null, children), rightIcon && renderIcon(rightIcon));
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/core/Chip.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const STYLE_ID = "hv-chip-styles";
function ensureStyles() {
  if (typeof document === "undefined" || document.getElementById(STYLE_ID)) return;
  const el = document.createElement("style");
  el.id = STYLE_ID;
  el.textContent = `
.hv-chip{
  display:inline-flex; align-items:center; gap:6px; height:32px; padding:0 12px;
  font:var(--type-body-sm); font-weight:var(--fw-medium); letter-spacing:var(--ls-tight);
  border-radius:var(--radius-full); border:var(--border-thin) solid var(--sys-border);
  background:var(--sys-surface-card); color:var(--sys-text-body); cursor:default;
  transition:background .15s ease, border-color .15s ease, color .15s ease;
}
.hv-chip--clickable{ cursor:pointer; }
.hv-chip--clickable:hover{ background:var(--sys-tonal); border-color:var(--sys-secondary); color:var(--sys-secondary); }
.hv-chip--selected{ background:var(--sys-tonal); border-color:var(--sys-secondary); color:var(--sys-secondary-deep); }
.hv-chip__x{ display:inline-flex; cursor:pointer; opacity:.6; margin-right:-4px; }
.hv-chip__x:hover{ opacity:1; }
`;
  document.head.appendChild(el);
}

/**
 * Chip / Tag — filter or input token. Supports a leading icon, an
 * optional avatar, selected state, and a removable close affordance.
 */
function Chip({
  children,
  leadingIcon,
  selected = false,
  clickable = false,
  onRemove,
  className = "",
  ...rest
}) {
  ensureStyles();
  return /*#__PURE__*/React.createElement("span", _extends({
    className: `hv-chip ${clickable ? "hv-chip--clickable" : ""} ${selected ? "hv-chip--selected" : ""} ${className}`
  }, rest), leadingIcon && (typeof leadingIcon === "string" ? /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: leadingIcon,
    size: 16
  }) : leadingIcon), children, onRemove && /*#__PURE__*/React.createElement("span", {
    className: "hv-chip__x",
    onClick: e => {
      e.stopPropagation();
      onRemove(e);
    },
    role: "button",
    "aria-label": "\u79FB\u9664"
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "close",
    size: 16
  })));
}
Object.assign(__ds_scope, { Chip });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Chip.jsx", error: String((e && e.message) || e) }); }

// components/core/IconButton.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const STYLE_ID = "hv-iconbutton-styles";
function ensureStyles() {
  if (typeof document === "undefined" || document.getElementById(STYLE_ID)) return;
  const el = document.createElement("style");
  el.id = STYLE_ID;
  el.textContent = `
.hv-iconbtn{
  --_bg:transparent; --_fg:var(--sys-text-muted); --_bd:transparent; --_sh:none;
  display:inline-flex; align-items:center; justify-content:center; flex:none;
  border:var(--border-thin) solid var(--_bd); background:var(--_bg); color:var(--_fg);
  box-shadow:var(--_sh); cursor:pointer; position:relative;
  transition:background .15s ease, color .15s ease, box-shadow .15s ease, border-color .15s ease;
  -webkit-tap-highlight-color:transparent;
}
.hv-iconbtn:focus-visible{ outline:none; box-shadow:var(--_sh), var(--focus-ring); }
.hv-iconbtn[disabled]{ cursor:not-allowed; --_fg:var(--sys-text-faint); }

/* shapes */
.hv-iconbtn--circle{ border-radius:var(--radius-full); }
.hv-iconbtn--square{ border-radius:var(--radius-med); }

/* variants */
.hv-iconbtn--surface{ --_bg:var(--sys-surface-card); --_fg:var(--sys-text-muted); --_bd:var(--sys-border); }
.hv-iconbtn--surface:hover{ --_fg:var(--sys-secondary); --_bd:var(--sys-secondary); --_bg:var(--sys-tonal); }

.hv-iconbtn--filled{ --_bg:var(--sys-primary); --_fg:var(--sys-text-onfill); }
.hv-iconbtn--filled:hover{ --_bg:var(--sys-primary-mid); }

.hv-iconbtn--ghost{ --_bg:transparent; --_fg:var(--sys-text-muted); }
.hv-iconbtn--ghost:hover{ --_bg:var(--sys-tonal); --_fg:var(--sys-secondary); }

/* notification dot */
.hv-iconbtn__dot{
  position:absolute; top:10px; right:10px; width:8px; height:8px; border-radius:var(--radius-full);
  background:var(--sys-error); box-shadow:0 0 0 2px var(--sys-surface-card);
}
`;
  document.head.appendChild(el);
}
const SIZES = {
  lg: 56,
  md: 44,
  sm: 36
};

/**
 * IconButton — a single-icon control. Used for the dashboard top-bar
 * (surface), the sidebar logout (filled), and inline ghost actions.
 */
function IconButton({
  icon,
  variant = "surface",
  shape = "square",
  size = "lg",
  dot = false,
  fill = false,
  disabled = false,
  "aria-label": ariaLabel,
  className = "",
  ...rest
}) {
  ensureStyles();
  const px = SIZES[size] || 56;
  return /*#__PURE__*/React.createElement("button", _extends({
    className: `hv-iconbtn hv-iconbtn--${variant} hv-iconbtn--${shape} ${className}`,
    style: {
      width: px,
      height: px
    },
    disabled: disabled,
    "aria-label": ariaLabel
  }, rest), typeof icon === "string" ? /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon,
    size: Math.round(px * 0.43),
    fill: fill
  }) : icon, dot && /*#__PURE__*/React.createElement("span", {
    className: "hv-iconbtn__dot"
  }));
}
Object.assign(__ds_scope, { IconButton });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/IconButton.jsx", error: String((e && e.message) || e) }); }

// components/data/StatCard.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * StatCard — KPI tile for dashboards. Shows a label, a large figure,
 * an optional icon, an optional trend delta, and a footnote.
 */
function StatCard({
  label,
  value,
  unit,
  icon,
  tone = "primary",
  trend,
  // { dir: "up" | "down", value: "12%" }
  note,
  className = "",
  style = {},
  ...rest
}) {
  const toneColor = {
    primary: "var(--sys-primary)",
    accent: "var(--sys-secondary)",
    success: "var(--sys-success)",
    warning: "var(--sys-warning)",
    error: "var(--sys-error)"
  }[tone] || "var(--sys-primary)";
  const trendUp = trend && trend.dir === "up";
  const trendColor = trend ? trendUp ? "var(--sys-success)" : "var(--sys-error)" : undefined;
  return /*#__PURE__*/React.createElement("section", _extends({
    className: `hv-stat ${className}`,
    style: {
      background: "var(--sys-surface-card)",
      borderRadius: "var(--radius-med)",
      boxShadow: "var(--shadow-card)",
      padding: 24,
      display: "flex",
      flexDirection: "column",
      gap: 14,
      minWidth: 0,
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      gap: 12
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: "var(--type-body-sm)",
      fontWeight: "var(--fw-bold)",
      color: "var(--sys-text-body)",
      letterSpacing: "var(--ls-tight)"
    }
  }, label), icon && /*#__PURE__*/React.createElement("span", {
    style: {
      width: 40,
      height: 40,
      borderRadius: "var(--radius-def)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      background: "var(--sys-primary-tint)",
      color: toneColor,
      flex: "none"
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon,
    size: 22,
    fill: true
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "baseline",
      gap: 6
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-num)",
      fontWeight: "var(--fw-bold)",
      fontSize: 40,
      lineHeight: 1,
      color: "var(--sys-text)"
    }
  }, value), unit && /*#__PURE__*/React.createElement("span", {
    style: {
      font: "var(--type-body-sm)",
      color: "var(--sys-text-muted)"
    }
  }, unit)), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 8,
      font: "var(--type-caption)",
      color: "var(--sys-text-muted)",
      letterSpacing: "var(--ls-tight)"
    }
  }, trend && /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 2,
      color: trendColor,
      fontWeight: "var(--fw-bold)"
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: trendUp ? "arrow_upward" : "arrow_downward",
    size: 14,
    weight: 700
  }), trend.value), note && /*#__PURE__*/React.createElement("span", null, note)));
}
Object.assign(__ds_scope, { StatCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data/StatCard.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Alert.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const TONES = {
  default: {
    c: "var(--sys-text)",
    fill: "var(--sys-surface-app)",
    icon: "info"
  },
  info: {
    c: "var(--sys-info)",
    fill: "var(--sys-info-fill)",
    icon: "info"
  },
  success: {
    c: "var(--sys-success)",
    fill: "var(--sys-success-fill)",
    icon: "check_circle"
  },
  warning: {
    c: "var(--sys-warning)",
    fill: "var(--sys-warning-fill)",
    icon: "warning"
  },
  error: {
    c: "var(--sys-error)",
    fill: "var(--sys-error-fill)",
    icon: "cancel"
  }
};

/**
 * Alert — inline status banner with icon, title, message and close.
 * variant: soft (tinted) | outline | solid | accent (left bar)
 */
function Alert({
  tone = "info",
  variant = "soft",
  title,
  children,
  icon,
  onClose,
  className = "",
  style = {},
  ...rest
}) {
  const t = TONES[tone] || TONES.info;
  const skins = {
    soft: {
      background: t.fill,
      border: `1px solid ${t.c}`,
      color: "var(--sys-text-body)"
    },
    outline: {
      background: "var(--sys-surface-card)",
      border: `1px solid ${t.c}`,
      color: "var(--sys-text-body)"
    },
    solid: {
      background: t.c,
      border: `1px solid ${t.c}`,
      color: "var(--sys-text-onfill)"
    },
    accent: {
      background: t.fill,
      border: "1px solid transparent",
      borderLeft: `4px solid ${t.c}`,
      color: "var(--sys-text-body)"
    }
  };
  const solid = variant === "solid";
  const accentColor = solid ? "var(--sys-text-onfill)" : t.c;
  return /*#__PURE__*/React.createElement("div", _extends({
    role: "alert",
    className: `hv-alert ${className}`,
    style: {
      display: "flex",
      gap: 12,
      padding: "14px 16px",
      borderRadius: "var(--radius-def)",
      font: "var(--type-body-sm)",
      letterSpacing: "var(--ls-tight)",
      alignItems: "flex-start",
      ...skins[variant],
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon || t.icon,
    size: 22,
    fill: true,
    style: {
      color: accentColor,
      marginTop: 1,
      flex: "none"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minWidth: 0
    }
  }, title && /*#__PURE__*/React.createElement("div", {
    style: {
      font: "var(--type-label)",
      color: solid ? "var(--sys-text-onfill)" : "var(--sys-text)",
      marginBottom: children ? 4 : 0
    }
  }, title), children && /*#__PURE__*/React.createElement("div", {
    style: {
      lineHeight: 1.6
    }
  }, children)), onClose && /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "close",
    size: 20,
    onClick: onClose,
    role: "button",
    "aria-label": "\u95DC\u9589",
    style: {
      color: accentColor,
      cursor: "pointer",
      opacity: 0.8,
      flex: "none"
    }
  }));
}
Object.assign(__ds_scope, { Alert });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Alert.jsx", error: String((e && e.message) || e) }); }

// components/feedback/ProgressCircular.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * ProgressCircular — ring progress indicator. Pass `value` 0–100 for
 * determinate, or omit for an indeterminate spinner.
 */
const STYLE_ID = "hv-circular-styles";
function ensureStyles() {
  if (typeof document === "undefined" || document.getElementById(STYLE_ID)) return;
  const el = document.createElement("style");
  el.id = STYLE_ID;
  el.textContent = `@keyframes hv-spin{to{transform:rotate(360deg)}}`;
  document.head.appendChild(el);
}
function ProgressCircular({
  value = null,
  size = 56,
  thickness = 6,
  tone = "primary",
  showLabel = false,
  className = "",
  style = {},
  ...rest
}) {
  ensureStyles();
  const color = {
    primary: "var(--sys-primary)",
    success: "var(--sys-success)",
    warning: "var(--sys-warning)",
    error: "var(--sys-error)"
  }[tone] || "var(--sys-primary)";
  const r = (size - thickness) / 2;
  const circ = 2 * Math.PI * r;
  const pct = value == null ? 25 : Math.max(0, Math.min(100, value));
  const dash = circ * (pct / 100);
  return /*#__PURE__*/React.createElement("div", _extends({
    className: `hv-circular ${className}`,
    style: {
      position: "relative",
      width: size,
      height: size,
      display: "inline-flex",
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("svg", {
    width: size,
    height: size,
    style: value == null ? {
      animation: "hv-spin 0.9s linear infinite"
    } : undefined
  }, /*#__PURE__*/React.createElement("circle", {
    cx: size / 2,
    cy: size / 2,
    r: r,
    fill: "none",
    stroke: "var(--sys-surface-row)",
    strokeWidth: thickness
  }), /*#__PURE__*/React.createElement("circle", {
    cx: size / 2,
    cy: size / 2,
    r: r,
    fill: "none",
    stroke: color,
    strokeWidth: thickness,
    strokeLinecap: "round",
    strokeDasharray: `${dash} ${circ}`,
    transform: `rotate(-90 ${size / 2} ${size / 2})`,
    style: value == null ? undefined : {
      transition: "stroke-dasharray .3s ease"
    }
  })), showLabel && value != null && /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      inset: 0,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      font: "var(--type-body-sm)",
      fontWeight: "var(--fw-bold)",
      color: "var(--sys-text)"
    }
  }, Math.round(pct), "%"));
}
Object.assign(__ds_scope, { ProgressCircular });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/ProgressCircular.jsx", error: String((e && e.message) || e) }); }

// components/feedback/ProgressLinear.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * ProgressLinear — horizontal progress / loading bar.
 * Omit `value` (or pass null) for an indeterminate sweep.
 */
const STYLE_ID = "hv-progress-styles";
function ensureStyles() {
  if (typeof document === "undefined" || document.getElementById(STYLE_ID)) return;
  const el = document.createElement("style");
  el.id = STYLE_ID;
  el.textContent = `
@keyframes hv-prog-indet{ 0%{left:-40%;width:40%} 50%{left:30%;width:50%} 100%{left:100%;width:40%} }
.hv-prog__indet{ position:absolute; top:0; bottom:0; border-radius:inherit;
  background:var(--sys-primary); animation:hv-prog-indet 1.4s ease-in-out infinite; }
`;
  document.head.appendChild(el);
}
function ProgressLinear({
  value = null,
  height = 8,
  tone = "primary",
  showLabel = false,
  className = "",
  style = {},
  ...rest
}) {
  ensureStyles();
  const color = {
    primary: "var(--sys-primary)",
    success: "var(--sys-success)",
    warning: "var(--sys-warning)",
    error: "var(--sys-error)"
  }[tone] || "var(--sys-primary)";
  const pct = value == null ? null : Math.max(0, Math.min(100, value));
  return /*#__PURE__*/React.createElement("div", _extends({
    className: `hv-prog ${className}`,
    style: {
      display: "flex",
      alignItems: "center",
      gap: 10,
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      flex: 1,
      height,
      borderRadius: "var(--radius-full)",
      background: "var(--sys-surface-row)",
      overflow: "hidden"
    }
  }, pct == null ? /*#__PURE__*/React.createElement("span", {
    className: "hv-prog__indet",
    style: {
      background: color
    }
  }) : /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      top: 0,
      bottom: 0,
      left: 0,
      width: `${pct}%`,
      borderRadius: "var(--radius-full)",
      background: color,
      transition: "width .3s ease"
    }
  })), showLabel && pct != null && /*#__PURE__*/React.createElement("span", {
    style: {
      font: "var(--type-caption)",
      fontWeight: "var(--fw-bold)",
      color: "var(--sys-text-body)",
      minWidth: 36,
      textAlign: "right"
    }
  }, Math.round(pct), "%"));
}
Object.assign(__ds_scope, { ProgressLinear });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/ProgressLinear.jsx", error: String((e && e.message) || e) }); }

// components/forms/Checkbox.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const STYLE_ID = "hv-choice-styles";
function ensureStyles() {
  if (typeof document === "undefined" || document.getElementById(STYLE_ID)) return;
  const el = document.createElement("style");
  el.id = STYLE_ID;
  el.textContent = `
.hv-choice{ display:inline-flex; align-items:center; gap:10px; font:var(--type-body-sm);
  color:var(--sys-text-body); letter-spacing:var(--ls-tight); cursor:pointer; user-select:none; }
.hv-choice input{ position:absolute; opacity:0; width:0; height:0; }
.hv-choice--disabled{ cursor:not-allowed; color:var(--sys-text-faint); }

.hv-check{ width:20px; height:20px; flex:none; border-radius:var(--radius-sm);
  border:var(--border-med) solid var(--sys-border-strong); background:var(--sys-surface-card);
  display:flex; align-items:center; justify-content:center; color:transparent;
  transition:background .12s ease, border-color .12s ease, color .12s ease; }
.hv-choice:hover .hv-check{ border-color:var(--sys-secondary); }
.hv-choice input:checked + .hv-check{ background:var(--sys-primary); border-color:var(--sys-primary); color:#fff; }
.hv-choice input:focus-visible + .hv-check{ box-shadow:var(--focus-ring); }
.hv-choice--disabled .hv-check{ background:var(--sys-surface-row); border-color:var(--sys-border); }

.hv-radio{ width:20px; height:20px; flex:none; border-radius:var(--radius-full);
  border:var(--border-med) solid var(--sys-border-strong); background:var(--sys-surface-card);
  display:flex; align-items:center; justify-content:center;
  transition:border-color .12s ease; position:relative; }
.hv-choice:hover .hv-radio{ border-color:var(--sys-secondary); }
.hv-radio::after{ content:""; width:10px; height:10px; border-radius:var(--radius-full);
  background:var(--sys-primary); transform:scale(0); transition:transform .12s ease; }
.hv-choice input:checked + .hv-radio{ border-color:var(--sys-primary); }
.hv-choice input:checked + .hv-radio::after{ transform:scale(1); }
.hv-choice input:focus-visible + .hv-radio{ box-shadow:var(--focus-ring); }
`;
  document.head.appendChild(el);
}

/** Checkbox — square, brand-blue when checked. */
function Checkbox({
  label,
  checked,
  defaultChecked,
  disabled = false,
  className = "",
  ...rest
}) {
  ensureStyles();
  return /*#__PURE__*/React.createElement("label", {
    className: `hv-choice ${disabled ? "hv-choice--disabled" : ""} ${className}`
  }, /*#__PURE__*/React.createElement("input", _extends({
    type: "checkbox",
    checked: checked,
    defaultChecked: defaultChecked,
    disabled: disabled
  }, rest)), /*#__PURE__*/React.createElement("span", {
    className: "hv-check"
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "check",
    size: 14,
    weight: 700
  })), label != null && /*#__PURE__*/React.createElement("span", null, label));
}

/** Radio — round single-select control. */
function Radio({
  label,
  checked,
  defaultChecked,
  disabled = false,
  className = "",
  ...rest
}) {
  ensureStyles();
  return /*#__PURE__*/React.createElement("label", {
    className: `hv-choice ${disabled ? "hv-choice--disabled" : ""} ${className}`
  }, /*#__PURE__*/React.createElement("input", _extends({
    type: "radio",
    checked: checked,
    defaultChecked: defaultChecked,
    disabled: disabled
  }, rest)), /*#__PURE__*/React.createElement("span", {
    className: "hv-radio"
  }), label != null && /*#__PURE__*/React.createElement("span", null, label));
}
Object.assign(__ds_scope, { Checkbox, Radio });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Checkbox.jsx", error: String((e && e.message) || e) }); }

// components/forms/Input.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const STYLE_ID = "hv-input-styles";
function ensureStyles() {
  if (typeof document === "undefined" || document.getElementById(STYLE_ID)) return;
  const el = document.createElement("style");
  el.id = STYLE_ID;
  el.textContent = `
.hv-field{ display:flex; flex-direction:column; gap:6px; font-family:var(--font-sans); }
.hv-field__label{ font:var(--type-body-sm); font-weight:var(--fw-bold); color:var(--sys-text-body); letter-spacing:var(--ls-tight); }
.hv-field__req{ color:var(--sys-error); margin-left:2px; }
.hv-field__box{
  --_bd:var(--sys-border); --_bg:var(--sys-surface-card);
  display:flex; align-items:center; gap:8px; height:var(--field-h);
  padding:0 14px; border:var(--border-thin) solid var(--_bd); border-radius:var(--radius-def);
  background:var(--_bg); transition:border-color .15s ease, box-shadow .15s ease, background .15s ease;
}
.hv-field__box:hover{ --_bd:var(--sys-text-faint); }
.hv-field__box:focus-within{ --_bd:var(--sys-secondary); box-shadow:var(--focus-ring); }
.hv-field--filled .hv-field__box{ --_bg:var(--sys-surface-app); --_bd:transparent; }
.hv-field--error .hv-field__box{ --_bd:var(--sys-error); }
.hv-field--error .hv-field__box:focus-within{ box-shadow:0 0 0 3px rgba(196,0,0,.15); }
.hv-field--warning .hv-field__box{ --_bd:var(--sys-warning); }
.hv-field--disabled .hv-field__box{ --_bg:var(--sys-surface-row); --_bd:var(--sys-border); cursor:not-allowed; }
.hv-field__input{
  flex:1; min-width:0; border:none; outline:none; background:transparent;
  font:var(--type-body-sm); color:var(--sys-text); letter-spacing:var(--ls-tight);
}
.hv-field__input::placeholder{ color:var(--sys-text-faint); }
.hv-field__input:disabled{ cursor:not-allowed; }
.hv-field__icon{ color:var(--sys-text-muted); flex:none; }
.hv-field__hint{ font:var(--type-caption); color:var(--sys-text-muted); letter-spacing:var(--ls-tight); }
.hv-field--error .hv-field__hint{ color:var(--sys-error); }
.hv-field--warning .hv-field__hint{ color:var(--sys-warning); }
`;
  document.head.appendChild(el);
}

/**
 * Input — labelled text field with optional leading/trailing icons,
 * helper text, and validation states (error / warning).
 */
function Input({
  label,
  required = false,
  leftIcon,
  rightIcon,
  hint,
  state = "default",
  // default | error | warning
  filled = false,
  disabled = false,
  className = "",
  id,
  ...rest
}) {
  ensureStyles();
  const fieldId = id || (label ? `hv-${label}` : undefined);
  return /*#__PURE__*/React.createElement("label", {
    htmlFor: fieldId,
    className: `hv-field hv-field--${state} ${filled ? "hv-field--filled" : ""} ${disabled ? "hv-field--disabled" : ""} ${className}`
  }, label && /*#__PURE__*/React.createElement("span", {
    className: "hv-field__label"
  }, label, required && /*#__PURE__*/React.createElement("span", {
    className: "hv-field__req"
  }, "*")), /*#__PURE__*/React.createElement("span", {
    className: "hv-field__box"
  }, leftIcon && (typeof leftIcon === "string" ? /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    className: "hv-field__icon",
    name: leftIcon,
    size: 20
  }) : leftIcon), /*#__PURE__*/React.createElement("input", _extends({
    id: fieldId,
    className: "hv-field__input",
    disabled: disabled
  }, rest)), rightIcon && (typeof rightIcon === "string" ? /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    className: "hv-field__icon",
    name: rightIcon,
    size: 20
  }) : rightIcon)), hint && /*#__PURE__*/React.createElement("span", {
    className: "hv-field__hint"
  }, hint));
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Input.jsx", error: String((e && e.message) || e) }); }

// components/forms/Radio.jsx
try { (() => {

Object.assign(__ds_scope, { Radio: __ds_scope.Radio });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Radio.jsx", error: String((e && e.message) || e) }); }

// components/forms/Select.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Select — styled native <select> matching the Input field. Reuses the
 * hv-field styles (injected by Input). Pass options as [{value,label}]
 * or use children <option>s.
 */
function Select({
  label,
  required = false,
  hint,
  state = "default",
  filled = false,
  disabled = false,
  options,
  placeholder,
  className = "",
  id,
  children,
  ...rest
}) {
  const fieldId = id || (label ? `hv-sel-${label}` : undefined);
  return /*#__PURE__*/React.createElement("label", {
    htmlFor: fieldId,
    className: `hv-field hv-field--${state} ${filled ? "hv-field--filled" : ""} ${disabled ? "hv-field--disabled" : ""} ${className}`
  }, label && /*#__PURE__*/React.createElement("span", {
    className: "hv-field__label"
  }, label, required && /*#__PURE__*/React.createElement("span", {
    className: "hv-field__req"
  }, "*")), /*#__PURE__*/React.createElement("span", {
    className: "hv-field__box",
    style: {
      position: "relative"
    }
  }, /*#__PURE__*/React.createElement("select", _extends({
    id: fieldId,
    className: "hv-field__input",
    disabled: disabled,
    defaultValue: placeholder ? "" : undefined,
    style: {
      appearance: "none",
      WebkitAppearance: "none",
      cursor: disabled ? "not-allowed" : "pointer",
      paddingRight: 24
    }
  }, rest), placeholder && /*#__PURE__*/React.createElement("option", {
    value: "",
    disabled: true,
    hidden: true
  }, placeholder), options ? options.map(o => /*#__PURE__*/React.createElement("option", {
    key: o.value,
    value: o.value
  }, o.label)) : children), /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    className: "hv-field__icon",
    name: "expand_more",
    size: 20,
    style: {
      position: "absolute",
      right: 12,
      pointerEvents: "none"
    }
  })), hint && /*#__PURE__*/React.createElement("span", {
    className: "hv-field__hint"
  }, hint));
}
Object.assign(__ds_scope, { Select });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Select.jsx", error: String((e && e.message) || e) }); }

// components/forms/Switch.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const STYLE_ID = "hv-switch-styles";
function ensureStyles() {
  if (typeof document === "undefined" || document.getElementById(STYLE_ID)) return;
  const el = document.createElement("style");
  el.id = STYLE_ID;
  el.textContent = `
.hv-switch{ display:inline-flex; align-items:center; gap:10px; font:var(--type-body-sm);
  color:var(--sys-text-body); letter-spacing:var(--ls-tight); cursor:pointer; user-select:none; }
.hv-switch input{ position:absolute; opacity:0; width:0; height:0; }
.hv-switch__track{ width:44px; height:24px; flex:none; border-radius:var(--radius-full);
  background:var(--sys-border); padding:2px; transition:background .18s ease; position:relative; }
.hv-switch__thumb{ width:20px; height:20px; border-radius:var(--radius-full); background:#fff;
  box-shadow:0 1px 3px rgba(34,34,34,.3); transition:transform .18s ease; }
.hv-switch input:checked + .hv-switch__track{ background:var(--sys-primary); }
.hv-switch input:checked + .hv-switch__track .hv-switch__thumb{ transform:translateX(20px); }
.hv-switch input:focus-visible + .hv-switch__track{ box-shadow:var(--focus-ring); }
.hv-switch--disabled{ cursor:not-allowed; color:var(--sys-text-faint); }
.hv-switch--disabled .hv-switch__track{ opacity:.5; }
`;
  document.head.appendChild(el);
}

/** Switch — on/off toggle, brand-blue when on. */
function Switch({
  label,
  checked,
  defaultChecked,
  disabled = false,
  className = "",
  ...rest
}) {
  ensureStyles();
  return /*#__PURE__*/React.createElement("label", {
    className: `hv-switch ${disabled ? "hv-switch--disabled" : ""} ${className}`
  }, /*#__PURE__*/React.createElement("input", _extends({
    type: "checkbox",
    role: "switch",
    checked: checked,
    defaultChecked: defaultChecked,
    disabled: disabled
  }, rest)), /*#__PURE__*/React.createElement("span", {
    className: "hv-switch__track"
  }, /*#__PURE__*/React.createElement("span", {
    className: "hv-switch__thumb"
  })), label != null && /*#__PURE__*/React.createElement("span", null, label));
}
Object.assign(__ds_scope, { Switch });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Switch.jsx", error: String((e && e.message) || e) }); }

// components/navigation/Breadcrumb.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Breadcrumb — path trail. Pass `items` as
 * [{ label, href?, icon? }]. The first item shows a home icon by
 * default; the last item renders as the current (non-link) page.
 */
function Breadcrumb({
  items = [],
  homeIcon = "home",
  className = "",
  style = {},
  ...rest
}) {
  return /*#__PURE__*/React.createElement("nav", _extends({
    "aria-label": "breadcrumb",
    className: `hv-breadcrumb ${className}`,
    style: {
      display: "flex",
      alignItems: "center",
      gap: 8,
      font: "var(--type-body-sm)",
      letterSpacing: "var(--ls-tight)",
      ...style
    }
  }, rest), items.map((item, i) => {
    const last = i === items.length - 1;
    const content = /*#__PURE__*/React.createElement("span", {
      style: {
        display: "inline-flex",
        alignItems: "center",
        gap: 6
      }
    }, i === 0 && homeIcon && /*#__PURE__*/React.createElement(__ds_scope.Icon, {
      name: item.icon || homeIcon,
      size: 18
    }), i !== 0 && item.icon && /*#__PURE__*/React.createElement(__ds_scope.Icon, {
      name: item.icon,
      size: 18
    }), item.label);
    return /*#__PURE__*/React.createElement(React.Fragment, {
      key: i
    }, last || !item.href ? /*#__PURE__*/React.createElement("span", {
      style: {
        color: last ? "var(--sys-text)" : "var(--sys-text-muted)",
        fontWeight: last ? "var(--fw-bold)" : "var(--fw-regular)"
      }
    }, content) : /*#__PURE__*/React.createElement("a", {
      href: item.href,
      style: {
        color: "var(--sys-text-muted)"
      }
    }, content), !last && /*#__PURE__*/React.createElement(__ds_scope.Icon, {
      name: "chevron_right",
      size: 18,
      style: {
        color: "var(--sys-text-faint)"
      }
    }));
  }));
}
Object.assign(__ds_scope, { Breadcrumb });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/Breadcrumb.jsx", error: String((e && e.message) || e) }); }

// components/navigation/Pagination.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const STYLE_ID = "hv-pagination-styles";
function ensureStyles() {
  if (typeof document === "undefined" || document.getElementById(STYLE_ID)) return;
  const el = document.createElement("style");
  el.id = STYLE_ID;
  el.textContent = `
.hv-pg{ display:inline-flex; align-items:center; gap:6px; }
.hv-pg__btn{ min-width:40px; height:40px; padding:0 8px; display:inline-flex; align-items:center;
  justify-content:center; border-radius:var(--radius-def); border:1px solid var(--sys-border);
  background:var(--sys-surface-card); color:var(--sys-text-body); font:var(--type-body-sm);
  font-weight:var(--fw-bold); font-family:var(--font-num); cursor:pointer;
  transition:background .15s ease, border-color .15s ease, color .15s ease; }
.hv-pg__btn:hover:not(:disabled){ border-color:var(--sys-secondary); color:var(--sys-secondary); background:var(--sys-tonal); }
.hv-pg__btn--active{ background:var(--sys-primary); border-color:var(--sys-primary); color:var(--sys-text-onfill); }
.hv-pg__btn--active:hover{ background:var(--sys-primary) !important; color:var(--sys-text-onfill) !important; }
.hv-pg__btn:disabled{ color:var(--sys-text-faint); cursor:not-allowed; }
.hv-pg__ellipsis{ min-width:24px; text-align:center; color:var(--sys-text-faint); }
`;
  document.head.appendChild(el);
}
function range(start, end) {
  const out = [];
  for (let i = start; i <= end; i++) out.push(i);
  return out;
}

/**
 * Pagination — page navigator with first/prev/next/last and an
 * ellipsis-collapsed page list. Controlled via `page` + `onChange`.
 */
function Pagination({
  page = 1,
  count = 1,
  siblings = 1,
  onChange,
  className = "",
  ...rest
}) {
  ensureStyles();
  const go = p => onChange && p >= 1 && p <= count && p !== page && onChange(p);
  let pages;
  const total = count;
  if (total <= 7) {
    pages = range(1, total);
  } else {
    const left = Math.max(2, page - siblings);
    const right = Math.min(total - 1, page + siblings);
    pages = [1];
    if (left > 2) pages.push("…");
    pages.push(...range(left, right));
    if (right < total - 1) pages.push("…");
    pages.push(total);
  }
  const navBtn = (icon, p, label, disabled) => /*#__PURE__*/React.createElement("button", {
    className: "hv-pg__btn",
    onClick: () => go(p),
    disabled: disabled,
    "aria-label": label
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon,
    size: 20
  }));
  return /*#__PURE__*/React.createElement("nav", _extends({
    className: `hv-pg ${className}`,
    "aria-label": "pagination"
  }, rest), navBtn("first_page", 1, "第一頁", page === 1), navBtn("chevron_left", page - 1, "上一頁", page === 1), pages.map((p, i) => p === "…" ? /*#__PURE__*/React.createElement("span", {
    key: `e${i}`,
    className: "hv-pg__ellipsis"
  }, "\u2026") : /*#__PURE__*/React.createElement("button", {
    key: p,
    className: `hv-pg__btn ${p === page ? "hv-pg__btn--active" : ""}`,
    onClick: () => go(p),
    "aria-current": p === page ? "page" : undefined
  }, p)), navBtn("chevron_right", page + 1, "下一頁", page === count), navBtn("last_page", count, "最後一頁", page === count));
}
Object.assign(__ds_scope, { Pagination });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/Pagination.jsx", error: String((e && e.message) || e) }); }

// components/navigation/Tabs.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const STYLE_ID = "hv-tabs-styles";
function ensureStyles() {
  if (typeof document === "undefined" || document.getElementById(STYLE_ID)) return;
  const el = document.createElement("style");
  el.id = STYLE_ID;
  el.textContent = `
.hv-tabs{ display:flex; gap:4px; border-bottom:1px solid var(--sys-border); }
.hv-tab{ position:relative; display:inline-flex; align-items:center; gap:6px;
  padding:12px 18px; font:var(--type-body-sm); font-weight:var(--fw-bold);
  letter-spacing:var(--ls-tight); color:var(--sys-text-muted); background:none; border:none;
  cursor:pointer; transition:color .15s ease; }
.hv-tab:hover{ color:var(--sys-secondary); }
.hv-tab--active{ color:var(--sys-primary); }
.hv-tab--active::after{ content:""; position:absolute; left:12px; right:12px; bottom:-1px;
  height:3px; border-radius:3px 3px 0 0; background:var(--sys-primary); }
.hv-tab:disabled{ color:var(--sys-text-faint); cursor:not-allowed; }
`;
  document.head.appendChild(el);
}

/**
 * Tabs — underline tab strip. Controlled via `value` + `onChange`, or
 * uncontrolled with `defaultValue`. Items: [{ value, label, icon?, disabled? }].
 */
function Tabs({
  items = [],
  value,
  defaultValue,
  onChange,
  className = "",
  style = {},
  ...rest
}) {
  ensureStyles();
  const [internal, setInternal] = React.useState(defaultValue ?? items[0]?.value);
  const active = value !== undefined ? value : internal;
  const pick = v => {
    if (value === undefined) setInternal(v);
    onChange && onChange(v);
  };
  return /*#__PURE__*/React.createElement("div", _extends({
    className: `hv-tabs ${className}`,
    role: "tablist",
    style: style
  }, rest), items.map(it => /*#__PURE__*/React.createElement("button", {
    key: it.value,
    role: "tab",
    "aria-selected": active === it.value,
    disabled: it.disabled,
    className: `hv-tab ${active === it.value ? "hv-tab--active" : ""}`,
    onClick: () => pick(it.value)
  }, it.icon && /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: it.icon,
    size: 18
  }), it.label)));
}
Object.assign(__ds_scope, { Tabs });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/Tabs.jsx", error: String((e && e.message) || e) }); }

// ui_kits/dashboard/app.view.jsx
try { (() => {
const {
  useState
} = React;
function App() {
  const [signedIn, setSignedIn] = useState(false);
  const [collapsed, setCollapsed] = useState(false);
  const [openId, setOpenId] = useState("element");
  const [activeId, setActiveId] = useState("home");
  const [activeChild, setActiveChild] = useState("系統首頁儀表板");
  const [theme, setTheme] = useState("blue");
  const [large, setLarge] = useState(false);
  function applyTheme(t) {
    setTheme(t);
    document.documentElement.setAttribute("data-theme", t);
  }
  function cycleTheme() {
    const i = window.THEMES.indexOf(theme);
    applyTheme(window.THEMES[(i + 1) % window.THEMES.length]);
  }
  const labelOf = {
    home: "首頁",
    element: "內容節點",
    members: "會員管理",
    stats: "統計分析",
    system: "系統設定"
  };
  const crumbs = [{
    label: "首頁",
    href: "#"
  }, {
    label: labelOf[activeId] || "首頁",
    href: "#"
  }, {
    label: activeChild
  }];
  if (!signedIn) {
    return /*#__PURE__*/React.createElement(window.SignIn, {
      onSignIn: () => setSignedIn(true)
    });
  }
  return /*#__PURE__*/React.createElement("div", {
    className: "hv-app",
    "data-large": large ? "" : undefined
  }, /*#__PURE__*/React.createElement(window.Sidebar, {
    collapsed: collapsed,
    onCollapse: () => setCollapsed(c => !c),
    openId: openId,
    activeId: activeId,
    activeChild: activeChild,
    onToggle: id => {
      setOpenId(o => o === id ? null : id);
      setActiveId(id);
    },
    onPick: (id, child) => {
      setActiveId(id);
      setActiveChild(child);
    }
  }), /*#__PURE__*/React.createElement("div", {
    className: "hv-main"
  }, /*#__PURE__*/React.createElement(window.TopBar, {
    crumbs: crumbs,
    theme: theme,
    onCycleTheme: cycleTheme,
    large: large,
    onToggleLarge: () => setLarge(l => !l),
    onLogout: () => setSignedIn(false)
  }), /*#__PURE__*/React.createElement("div", {
    className: "hv-scroll"
  }, /*#__PURE__*/React.createElement(window.Dashboard, null))));
}

// Mount only when this file runs as the UI-kit page's own script.
const _hvRoot = document.getElementById("root");
if (_hvRoot) ReactDOM.createRoot(_hvRoot).render(/*#__PURE__*/React.createElement(App, null));
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/dashboard/app.view.jsx", error: String((e && e.message) || e) }); }

// ui_kits/dashboard/charts.view.jsx
try { (() => {
const {
  Icon
} = window.HyVueCMSDesignSystem_24ff2f;

/* ---- smooth cubic path helper ---- */
function smoothPath(pts) {
  if (pts.length < 2) return "";
  let d = `M ${pts[0][0]},${pts[0][1]}`;
  for (let i = 0; i < pts.length - 1; i++) {
    const [x0, y0] = pts[i];
    const [x1, y1] = pts[i + 1];
    const cx = (x0 + x1) / 2;
    d += ` C ${cx},${y0} ${cx},${y1} ${x1},${y1}`;
  }
  return d;
}
function Series({
  data,
  w,
  h,
  color,
  gradId
}) {
  const max = 120,
    min = 0;
  const pts = data.map((v, i) => [i / (data.length - 1) * w, h - (v - min) / (max - min) * h]);
  const line = smoothPath(pts);
  const area = `${line} L ${w},${h} L 0,${h} Z`;
  return /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("defs", null, /*#__PURE__*/React.createElement("linearGradient", {
    id: gradId,
    x1: "0",
    y1: "0",
    x2: "0",
    y2: "1"
  }, /*#__PURE__*/React.createElement("stop", {
    offset: "0%",
    stopColor: color,
    stopOpacity: "0.32"
  }), /*#__PURE__*/React.createElement("stop", {
    offset: "100%",
    stopColor: color,
    stopOpacity: "0.02"
  }))), /*#__PURE__*/React.createElement("path", {
    d: area,
    fill: `url(#${gradId})`
  }), /*#__PURE__*/React.createElement("path", {
    d: line,
    fill: "none",
    stroke: color,
    strokeWidth: "2.5"
  }));
}
function AreaChart() {
  const W = 980,
    H = 320,
    padL = 40,
    padB = 28;
  const w = W - padL,
    h = H - padB;
  const a = [52, 58, 62, 70, 66, 60, 58, 64, 108, 104, 102];
  const b = [48, 70, 78, 74, 82, 80, 70, 88, 92, 90, 88];
  const labels = ["00:00", "01:00", "02:00", "03:00", "04:00", "05:00", "06:00"];
  const yTicks = [30, 60, 90, 120];
  return /*#__PURE__*/React.createElement("svg", {
    viewBox: `0 0 ${W} ${H}`,
    width: "100%",
    style: {
      display: "block"
    }
  }, /*#__PURE__*/React.createElement("g", {
    transform: `translate(${padL},6)`
  }, yTicks.map(t => {
    const y = h - t / 120 * h;
    return /*#__PURE__*/React.createElement("g", {
      key: t
    }, /*#__PURE__*/React.createElement("line", {
      x1: "0",
      y1: y,
      x2: w,
      y2: y,
      stroke: "#F1F1F1",
      strokeWidth: "1"
    }), /*#__PURE__*/React.createElement("text", {
      x: "-12",
      y: y + 4,
      textAnchor: "end",
      fontSize: "12",
      fontFamily: "Helvetica, Arial, sans-serif",
      fill: "#97A3B6"
    }, t));
  }), /*#__PURE__*/React.createElement(Series, {
    data: b,
    w: w,
    h: h,
    color: "#80CBD7",
    gradId: "gA"
  }), /*#__PURE__*/React.createElement(Series, {
    data: a,
    w: w,
    h: h,
    color: "#057BB7",
    gradId: "gB"
  }), labels.map((l, i) => /*#__PURE__*/React.createElement("text", {
    key: l,
    x: i / (labels.length - 1) * w,
    y: h + 22,
    textAnchor: "middle",
    fontSize: "12",
    fontFamily: "Helvetica, Arial, sans-serif",
    fill: "#69707D"
  }, l))));
}
function Legend({
  items
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 18,
      justifyContent: "center",
      flexWrap: "wrap",
      marginTop: 6
    }
  }, items.map(it => /*#__PURE__*/React.createElement("span", {
    key: it.label,
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 6,
      font: "var(--type-caption)",
      color: "var(--sys-text-body)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 10,
      height: 10,
      borderRadius: "50%",
      background: it.color
    }
  }), it.label)));
}
function PieChart() {
  const data = [{
    label: "公告",
    value: 38,
    color: "#014D92"
  }, {
    label: "新聞",
    value: 24,
    color: "#057BB7"
  }, {
    label: "活動",
    value: 18,
    color: "#80CBD7"
  }, {
    label: "其他",
    value: 12,
    color: "#2D62B3"
  }, {
    label: "草稿",
    value: 8,
    color: "#97A3B6"
  }];
  const total = data.reduce((s, d) => s + d.value, 0);
  const R = 96,
    cx = 110,
    cy = 110,
    r = 64,
    sw = 40;
  const circ = 2 * Math.PI * r;
  let acc = 0;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      gap: 14
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: R * 2,
    height: R * 2,
    viewBox: `0 0 ${cx * 2} ${cy * 2}`
  }, /*#__PURE__*/React.createElement("g", {
    transform: `rotate(-90 ${cx} ${cy})`
  }, data.map(d => {
    const frac = d.value / total;
    const dash = frac * circ;
    const el = /*#__PURE__*/React.createElement("circle", {
      key: d.label,
      cx: cx,
      cy: cy,
      r: r,
      fill: "none",
      stroke: d.color,
      strokeWidth: sw,
      strokeDasharray: `${dash} ${circ - dash}`,
      strokeDashoffset: -acc * circ
    });
    acc += frac;
    return el;
  })), /*#__PURE__*/React.createElement("text", {
    x: cx,
    y: cy - 4,
    textAnchor: "middle",
    fontSize: "13",
    fill: "#69707D",
    fontFamily: "\"Noto Sans TC\", sans-serif"
  }, "\u7E3D\u8A08"), /*#__PURE__*/React.createElement("text", {
    x: cx,
    y: cy + 20,
    textAnchor: "middle",
    fontSize: "26",
    fontWeight: "700",
    fill: "#333333",
    fontFamily: "Helvetica, Arial, sans-serif"
  }, total)), /*#__PURE__*/React.createElement(Legend, {
    items: data
  }));
}
Object.assign(window, {
  AreaChart,
  PieChart,
  ChartLegend: Legend
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/dashboard/charts.view.jsx", error: String((e && e.message) || e) }); }

// ui_kits/dashboard/dashboard.view.jsx
try { (() => {
const {
  StatCard,
  Card
} = window.HyVueCMSDesignSystem_24ff2f;
const POPULAR = [{
  no: "01",
  title: "通勤搭車看預報 環保集點 10 倍送",
  date: "2025/01/01",
  tag: "活動"
}, {
  no: "02",
  title: "春節不無聊 上網學習環境教育",
  date: "2025/01/01",
  tag: "公告"
}, {
  no: "03",
  title: "洗錢防制，國家向前",
  date: "2025/01/01",
  tag: "新聞"
}, {
  no: "04",
  title: "春節送禮認標章 環保減碳又健康",
  date: "2025/01/01",
  tag: "活動"
}, {
  no: "05",
  title: "環保替代役 歲末春送溫暖",
  date: "2025/01/01",
  tag: "公告"
}];
const PAGES = [{
  no: "01",
  title: "節點管理操作手冊更新通知",
  date: "2025/01/01",
  views: "3,182"
}, {
  no: "02",
  title: "佈景主題切換功能上線",
  date: "2025/01/01",
  views: "2,640"
}, {
  no: "03",
  title: "媒體庫批次上傳教學",
  date: "2025/01/01",
  views: "2,118"
}, {
  no: "04",
  title: "會員權限角色設定說明",
  date: "2025/01/01",
  views: "1,905"
}, {
  no: "05",
  title: "無障礙網頁設計指引",
  date: "2025/01/01",
  views: "1,540"
}];
function Dashboard() {
  const {
    Badge
  } = window.HyVueCMSDesignSystem_24ff2f;
  return /*#__PURE__*/React.createElement("div", {
    className: "hv-dash"
  }, /*#__PURE__*/React.createElement("div", {
    className: "hv-dash__title"
  }, /*#__PURE__*/React.createElement("span", {
    className: "hv-dash__bar"
  }), /*#__PURE__*/React.createElement("h1", null, "\u7CFB\u7D71\u9996\u9801\u5100\u8868\u677F")), /*#__PURE__*/React.createElement("div", {
    className: "hv-dash__stats"
  }, /*#__PURE__*/React.createElement(StatCard, {
    label: "\u4ECA\u65E5\u8A2A\u5BA2\u4EBA\u6578",
    value: "1,284",
    icon: "group",
    trend: {
      dir: "up",
      value: "12%"
    },
    note: "\u8F03\u6628\u65E5"
  }), /*#__PURE__*/React.createElement(StatCard, {
    label: "\u672C\u6708\u767C\u5E03\u6587\u7AE0",
    value: "86",
    unit: "\u7BC7",
    icon: "description",
    tone: "accent",
    trend: {
      dir: "up",
      value: "8%"
    },
    note: "\u8F03\u4E0A\u6708"
  }), /*#__PURE__*/React.createElement(StatCard, {
    label: "\u5F85\u5BE9\u6838\u9805\u76EE",
    value: "14",
    icon: "pending_actions",
    tone: "warning",
    trend: {
      dir: "down",
      value: "3"
    },
    note: "\u8F03\u6628\u65E5"
  }), /*#__PURE__*/React.createElement(StatCard, {
    label: "\u7CFB\u7D71\u53EF\u7528\u7387",
    value: "99.9",
    unit: "%",
    icon: "monitoring",
    tone: "success",
    note: "\u8FD1 30 \u65E5"
  })), /*#__PURE__*/React.createElement("div", {
    className: "hv-dash__charts"
  }, /*#__PURE__*/React.createElement(Card, {
    title: "\u7DB2\u7AD9\u6D41\u91CF\u8DA8\u52E2"
  }, /*#__PURE__*/React.createElement(window.AreaChart, null), /*#__PURE__*/React.createElement(window.ChartLegend, {
    items: [{
      label: "本週",
      color: "var(--sys-secondary)"
    }, {
      label: "上週",
      color: "var(--sys-secondary-teal)"
    }]
  })), /*#__PURE__*/React.createElement(Card, {
    title: "\u5167\u5BB9\u5206\u985E\u5360\u6BD4"
  }, /*#__PURE__*/React.createElement(window.PieChart, null))), /*#__PURE__*/React.createElement("div", {
    className: "hv-dash__tables"
  }, /*#__PURE__*/React.createElement(window.DataTable, {
    title: "\u4ECA\u65E5\u71B1\u9580\u7DB2\u9801",
    columns: [{
      key: "no",
      label: "編號",
      width: 64,
      align: "center"
    }, {
      key: "title",
      label: "標題"
    }, {
      key: "tag",
      label: "分類",
      width: 88,
      align: "center",
      render: v => /*#__PURE__*/React.createElement(Badge, {
        tone: v === "活動" ? "success" : v === "新聞" ? "info" : "primary"
      }, v)
    }, {
      key: "date",
      label: "日期",
      width: 110,
      align: "center"
    }],
    rows: POPULAR
  }), /*#__PURE__*/React.createElement(window.DataTable, {
    title: "\u71B1\u9580\u7BA1\u7406\u9801\u9762",
    columns: [{
      key: "no",
      label: "編號",
      width: 64,
      align: "center"
    }, {
      key: "title",
      label: "標題"
    }, {
      key: "views",
      label: "瀏覽",
      width: 88,
      align: "right"
    }, {
      key: "date",
      label: "日期",
      width: 110,
      align: "center"
    }],
    rows: PAGES
  })));
}
Object.assign(window, {
  Dashboard
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/dashboard/dashboard.view.jsx", error: String((e && e.message) || e) }); }

// ui_kits/dashboard/datatable.view.jsx
try { (() => {
const {
  Button,
  Badge
} = window.HyVueCMSDesignSystem_24ff2f;
function DataTable({
  title,
  columns,
  rows,
  onMore
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: "hv-tablecard"
  }, /*#__PURE__*/React.createElement("div", {
    className: "hv-tablecard__head"
  }, /*#__PURE__*/React.createElement("h2", null, title)), /*#__PURE__*/React.createElement("table", {
    className: "hv-table"
  }, /*#__PURE__*/React.createElement("thead", null, /*#__PURE__*/React.createElement("tr", null, columns.map(c => /*#__PURE__*/React.createElement("th", {
    key: c.key,
    style: {
      width: c.width,
      textAlign: c.align || "left"
    }
  }, c.label)))), /*#__PURE__*/React.createElement("tbody", null, rows.map((r, i) => /*#__PURE__*/React.createElement("tr", {
    key: i
  }, columns.map(c => /*#__PURE__*/React.createElement("td", {
    key: c.key,
    style: {
      textAlign: c.align || "left"
    }
  }, c.render ? c.render(r[c.key], r) : r[c.key])))))), /*#__PURE__*/React.createElement("div", {
    className: "hv-tablecard__foot"
  }, /*#__PURE__*/React.createElement(Button, {
    type: "elevated",
    size: "md",
    onClick: onMore
  }, "\u66F4\u591A")));
}
Object.assign(window, {
  DataTable
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/dashboard/datatable.view.jsx", error: String((e && e.message) || e) }); }

// ui_kits/dashboard/sidebar.view.jsx
try { (() => {
const {
  Icon,
  Avatar,
  IconButton
} = window.HyVueCMSDesignSystem_24ff2f;
const NAV = [{
  id: "home",
  icon: "home",
  label: "首頁",
  children: ["系統首頁儀表板"]
}, {
  id: "element",
  icon: "dashboard",
  label: "內容節點",
  children: ["節點管理", "頁面管理", "選單設定", "媒體庫", "標籤分類"]
}, {
  id: "members",
  icon: "group",
  label: "會員管理",
  children: ["會員列表", "權限角色"]
}, {
  id: "stats",
  icon: "leaderboard",
  label: "統計分析",
  children: ["流量總覽", "熱門內容"]
}, {
  id: "system",
  icon: "settings",
  label: "系統設定",
  children: ["基本設定", "佈景主題", "備份還原"]
}];
function SidebarItem({
  item,
  open,
  active,
  activeChild,
  onToggle,
  onPick
}) {
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("button", {
    className: "hv-nav__item",
    "data-active": active ? "" : undefined,
    onClick: () => onToggle(item.id)
  }, /*#__PURE__*/React.createElement(Icon, {
    name: item.icon,
    size: 22,
    fill: active
  }), /*#__PURE__*/React.createElement("span", {
    className: "hv-nav__label"
  }, item.label), /*#__PURE__*/React.createElement(Icon, {
    name: open ? "expand_more" : "chevron_right",
    size: 20,
    className: "hv-nav__chev"
  })), open && /*#__PURE__*/React.createElement("div", {
    className: "hv-nav__sub"
  }, item.children.map(c => /*#__PURE__*/React.createElement("button", {
    key: c,
    className: "hv-nav__subitem",
    "data-active": activeChild === c ? "" : undefined,
    onClick: () => onPick(item.id, c)
  }, c))));
}
function Sidebar({
  collapsed,
  onCollapse,
  openId,
  activeId,
  activeChild,
  onToggle,
  onPick
}) {
  return /*#__PURE__*/React.createElement("aside", {
    className: `hv-sidebar ${collapsed ? "hv-sidebar--collapsed" : ""}`
  }, /*#__PURE__*/React.createElement("div", {
    className: "hv-sidebar__logo"
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/logo-mark.png",
    width: "34",
    height: "34",
    alt: "HyVue CMS"
  }), !collapsed && /*#__PURE__*/React.createElement("span", {
    className: "hv-sidebar__word"
  }, "HyVue CMS"), /*#__PURE__*/React.createElement("button", {
    className: "hv-sidebar__collapse",
    onClick: onCollapse,
    "aria-label": "\u6536\u5408\u9078\u55AE"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: collapsed ? "chevron_right" : "chevron_left",
    size: 20
  }))), /*#__PURE__*/React.createElement("nav", {
    className: "hv-nav"
  }, NAV.map(item => /*#__PURE__*/React.createElement(SidebarItem, {
    key: item.id,
    item: item,
    open: !collapsed && openId === item.id,
    active: activeId === item.id,
    activeChild: activeChild,
    onToggle: onToggle,
    onPick: onPick
  }))), /*#__PURE__*/React.createElement("div", {
    className: "hv-sidebar__user"
  }, /*#__PURE__*/React.createElement(Avatar, {
    src: "https://i.pravatar.cc/80?img=12",
    name: "Elle Wang",
    size: 44,
    status: "online"
  }), !collapsed && /*#__PURE__*/React.createElement("div", {
    className: "hv-sidebar__userinfo"
  }, /*#__PURE__*/React.createElement("div", {
    className: "hv-sidebar__username"
  }, "Elle Wang"), /*#__PURE__*/React.createElement("div", {
    className: "hv-sidebar__userrole"
  }, "\u4F01\u5283\u8655")), !collapsed && /*#__PURE__*/React.createElement(IconButton, {
    icon: "logout",
    variant: "filled",
    size: "md",
    shape: "square",
    "aria-label": "\u767B\u51FA"
  })));
}
Object.assign(window, {
  Sidebar
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/dashboard/sidebar.view.jsx", error: String((e && e.message) || e) }); }

// ui_kits/dashboard/signin.view.jsx
try { (() => {
const {
  Button,
  Input,
  Checkbox
} = window.HyVueCMSDesignSystem_24ff2f;
function SignIn({
  onSignIn
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: "hv-signin"
  }, /*#__PURE__*/React.createElement("div", {
    className: "hv-signin__art"
  }, /*#__PURE__*/React.createElement("div", {
    className: "hv-signin__brand"
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/logo-mark.png",
    width: "44",
    height: "44",
    alt: "HyVue CMS"
  }), /*#__PURE__*/React.createElement("span", null, "HyVue CMS")), /*#__PURE__*/React.createElement("div", {
    className: "hv-signin__pitch"
  }, /*#__PURE__*/React.createElement("div", {
    className: "hv-signin__ver"
  }, "\u66F4\u65B0\u65E5\u671F\uFF1A2025/09/01"), /*#__PURE__*/React.createElement("h1", null, "HyVue CMS 1.1"), /*#__PURE__*/React.createElement("p", null, "\u4EE5\u4EBA\u70BA\u672C\u3001\u4EE5\u6280\u8853\u70BA\u6838\u5FC3\u3001\u4EE5\u5BA2\u6236\u70BA\u5C0E\u5411\u7684\u5167\u5BB9\u7BA1\u7406\u5E73\u53F0\u3002")), /*#__PURE__*/React.createElement("div", {
    className: "hv-signin__foot"
  }, "\xA9 2025 HyWeb \xB7 \u51CC\u7DB2\u79D1\u6280")), /*#__PURE__*/React.createElement("div", {
    className: "hv-signin__panel"
  }, /*#__PURE__*/React.createElement("div", {
    className: "hv-signin__form"
  }, /*#__PURE__*/React.createElement("h2", null, "\u767B\u5165\u7CFB\u7D71"), /*#__PURE__*/React.createElement("p", {
    className: "hv-signin__sub"
  }, "\u8ACB\u8F38\u5165\u60A8\u7684\u5E33\u865F\u8207\u5BC6\u78BC\u4EE5\u7E7C\u7E8C\u3002"), /*#__PURE__*/React.createElement("form", {
    onSubmit: e => {
      e.preventDefault();
      onSignIn();
    },
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 18,
      marginTop: 24
    }
  }, /*#__PURE__*/React.createElement(Input, {
    label: "\u5E33\u865F",
    leftIcon: "account_circle",
    placeholder: "\u8ACB\u8F38\u5165\u5E33\u865F",
    defaultValue: "elle.wang",
    required: true
  }), /*#__PURE__*/React.createElement(Input, {
    label: "\u5BC6\u78BC",
    leftIcon: "lock",
    type: "password",
    placeholder: "\u8ACB\u8F38\u5165\u5BC6\u78BC",
    defaultValue: "password",
    required: true
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between"
    }
  }, /*#__PURE__*/React.createElement(Checkbox, {
    label: "\u8A18\u4F4F\u6211",
    defaultChecked: true
  }), /*#__PURE__*/React.createElement("a", {
    href: "#",
    style: {
      font: "var(--type-body-sm)",
      fontWeight: "var(--fw-bold)"
    }
  }, "\u5FD8\u8A18\u5BC6\u78BC\uFF1F")), /*#__PURE__*/React.createElement(Button, {
    type: "elevated",
    size: "lg",
    block: true,
    rightIcon: "arrow_right"
  }, "\u767B\u5165")))));
}
Object.assign(window, {
  SignIn
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/dashboard/signin.view.jsx", error: String((e && e.message) || e) }); }

// ui_kits/dashboard/topbar.view.jsx
try { (() => {
const {
  IconButton,
  Breadcrumb
} = window.HyVueCMSDesignSystem_24ff2f;
const THEMES = ["blue", "green", "red", "purple"];
function TopBar({
  crumbs,
  theme,
  onCycleTheme,
  large,
  onToggleLarge,
  onLogout
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: "hv-topbar"
  }, /*#__PURE__*/React.createElement(Breadcrumb, {
    items: crumbs
  }), /*#__PURE__*/React.createElement("div", {
    className: "hv-topbar__controls"
  }, /*#__PURE__*/React.createElement(IconButton, {
    icon: "logout",
    variant: "surface",
    "aria-label": "\u767B\u51FA",
    onClick: onLogout
  }), /*#__PURE__*/React.createElement(IconButton, {
    icon: "settings",
    variant: "surface",
    "aria-label": "\u8A2D\u5B9A"
  }), /*#__PURE__*/React.createElement(IconButton, {
    icon: "notifications",
    variant: "surface",
    dot: true,
    "aria-label": "\u901A\u77E5"
  }), /*#__PURE__*/React.createElement(IconButton, {
    icon: "contrast",
    variant: "surface",
    "aria-label": "\u5C0D\u6BD4"
  }), /*#__PURE__*/React.createElement(IconButton, {
    icon: "format_size",
    variant: large ? "filled" : "surface",
    "aria-label": "\u5B57\u7D1A",
    onClick: onToggleLarge
  }), /*#__PURE__*/React.createElement(IconButton, {
    icon: "palette",
    variant: "surface",
    "aria-label": `主題：${theme}`,
    onClick: onCycleTheme
  })));
}
Object.assign(window, {
  TopBar,
  THEMES
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/dashboard/topbar.view.jsx", error: String((e && e.message) || e) }); }

__ds_ns.Avatar = __ds_scope.Avatar;

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.Chip = __ds_scope.Chip;

__ds_ns.Icon = __ds_scope.Icon;

__ds_ns.IconButton = __ds_scope.IconButton;

__ds_ns.StatCard = __ds_scope.StatCard;

__ds_ns.Alert = __ds_scope.Alert;

__ds_ns.ProgressCircular = __ds_scope.ProgressCircular;

__ds_ns.ProgressLinear = __ds_scope.ProgressLinear;

__ds_ns.Checkbox = __ds_scope.Checkbox;

__ds_ns.Radio = __ds_scope.Radio;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.Select = __ds_scope.Select;

__ds_ns.Switch = __ds_scope.Switch;

__ds_ns.Breadcrumb = __ds_scope.Breadcrumb;

__ds_ns.Pagination = __ds_scope.Pagination;

__ds_ns.Tabs = __ds_scope.Tabs;

})();
