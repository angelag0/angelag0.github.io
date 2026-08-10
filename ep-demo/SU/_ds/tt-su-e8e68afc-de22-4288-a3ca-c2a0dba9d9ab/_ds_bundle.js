/* @ds-bundle: {"format":4,"namespace":"TaiwanTradeSUDesignSystem_e8e68a","components":[{"name":"Badge","sourcePath":"components/core/Badge.jsx"},{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"Toggle","sourcePath":"components/core/Toggle.jsx"},{"name":"Modal","sourcePath":"components/feedback/Modal.jsx"},{"name":"SearchInput","sourcePath":"components/forms/SearchInput.jsx"},{"name":"PageHeading","sourcePath":"components/navigation/PageHeading.jsx"},{"name":"Sidebar","sourcePath":"components/navigation/Sidebar.jsx"},{"name":"Steps","sourcePath":"components/navigation/Steps.jsx"}],"sourceHashes":{"components/core/Badge.jsx":"33aa8df92c21","components/core/Button.jsx":"93296ca44bf3","components/core/Toggle.jsx":"5c5e4608bcf3","components/feedback/Modal.jsx":"3addaaf98661","components/forms/SearchInput.jsx":"70e96982bc70","components/navigation/PageHeading.jsx":"ad2c69502f06","components/navigation/Sidebar.jsx":"a6cfe8be157c","components/navigation/Steps.jsx":"2dfa072d5013"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.TaiwanTradeSUDesignSystem_e8e68a = window.TaiwanTradeSUDesignSystem_e8e68a || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/core/Badge.jsx
try { (() => {
function Badge({
  count,
  tone = 'default'
}) {
  if (count === undefined || count === null) return null;
  const tones = {
    default: {
      background: 'var(--action-default)',
      color: '#fff'
    },
    hint: {
      background: 'transparent',
      color: 'var(--c-hint)'
    }
  };
  if (tone === 'hint') {
    return /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 'var(--fs-tiny)',
        color: 'var(--c-hint)'
      }
    }, count);
  }
  return /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-block',
      minWidth: '1.5em',
      height: '1.5em',
      lineHeight: '1.5em',
      padding: '0 .4em',
      borderRadius: 'var(--radius-pill)',
      textAlign: 'center',
      fontSize: '.86em',
      fontWeight: 'bold',
      ...tones.default
    }
  }, count);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Badge.jsx", error: String((e && e.message) || e) }); }

// components/core/Button.jsx
try { (() => {
function Button({
  variant = 'outline',
  size = 'default',
  disabled = false,
  children,
  onClick,
  type = 'button'
}) {
  const base = {
    display: 'inline-block',
    fontFamily: 'var(--font-body)',
    border: 'none',
    cursor: disabled ? 'not-allowed' : 'pointer',
    transition: 'box-shadow var(--dur-base) var(--ease-standard), background var(--dur-base) var(--ease-standard)',
    textAlign: 'center',
    whiteSpace: 'nowrap'
  };
  const sizes = {
    default: {
      padding: '0 16px',
      height: '2.3em',
      lineHeight: '2.3em',
      fontSize: '.95em',
      borderRadius: 'var(--radius-pill)'
    },
    small: {
      padding: '0 .7em',
      height: '1.8em',
      lineHeight: '1.9em',
      fontSize: '.86em',
      borderRadius: 'var(--radius-pill)'
    }
  };
  const variants = {
    outline: {
      background: 'var(--surface-card)',
      color: 'var(--text-body)',
      boxShadow: 'var(--shadow-outline)'
    },
    solid: {
      background: 'var(--action-default)',
      color: '#fff',
      boxShadow: 'none'
    },
    dark: {
      background: 'transparent',
      color: 'var(--text-body)',
      boxShadow: 'var(--shadow-outline)'
    }
  };
  const style = {
    ...base,
    ...sizes[size],
    ...(disabled ? {
      background: 'var(--surface-subtle)',
      color: 'var(--n-border)',
      boxShadow: 'var(--shadow-hairline)'
    } : variants[variant])
  };
  return /*#__PURE__*/React.createElement("button", {
    type: type,
    disabled: disabled,
    onClick: disabled ? undefined : onClick,
    style: style,
    onMouseEnter: e => {
      if (disabled) return;
      if (variant === 'outline') e.currentTarget.style.boxShadow = 'var(--shadow-outline-hover)';
      if (variant === 'solid') e.currentTarget.style.background = 'var(--action-hover)';
      if (variant === 'dark') {
        e.currentTarget.style.background = '#000';
        e.currentTarget.style.color = 'var(--b-yellow)';
      }
    },
    onMouseLeave: e => {
      if (disabled) return;
      if (variant === 'outline') e.currentTarget.style.boxShadow = 'var(--shadow-outline)';
      if (variant === 'solid') e.currentTarget.style.background = 'var(--action-default)';
      if (variant === 'dark') {
        e.currentTarget.style.background = 'transparent';
        e.currentTarget.style.color = 'var(--text-body)';
      }
    }
  }, children);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/core/Toggle.jsx
try { (() => {
function Toggle({
  on = false,
  onChange
}) {
  return /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: () => onChange && onChange(!on),
    style: {
      display: 'inline-block',
      position: 'relative',
      border: 'none',
      cursor: 'pointer',
      fontFamily: 'var(--font-body)',
      fontSize: '14px',
      fontWeight: 'bold',
      width: '64px',
      height: '32px',
      lineHeight: '32px',
      borderRadius: '20px',
      background: on ? 'var(--c-success)' : 'var(--action-default)',
      color: '#fff',
      transition: 'background var(--dur-base) var(--ease-standard)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      top: '3px',
      left: on ? '36px' : '3px',
      width: '26px',
      height: '26px',
      background: '#fff',
      borderRadius: 'var(--radius-circle)',
      transition: 'left .12s linear'
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      top: 0,
      lineHeight: '32px',
      right: on ? 'auto' : '8px',
      left: on ? '9px' : 'auto'
    }
  }, on ? 'On' : 'Off'));
}
Object.assign(__ds_scope, { Toggle });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Toggle.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Modal.jsx
try { (() => {
function Modal({
  title,
  children,
  onClose,
  actions
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'fixed',
      inset: 0,
      background: 'rgba(200,200,200,.5)',
      zIndex: 8890,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      background: 'var(--surface-card)',
      borderRadius: 'var(--radius-md)',
      padding: '35px 20px 30px',
      width: '560px',
      maxWidth: '90vw',
      maxHeight: '80vh',
      overflowY: 'auto',
      boxShadow: 'var(--shadow-modal)'
    }
  }, onClose && /*#__PURE__*/React.createElement("button", {
    "aria-label": "close",
    onClick: onClose,
    style: {
      position: 'absolute',
      top: '4px',
      right: '4px',
      width: '36px',
      height: '36px',
      borderRadius: 'var(--radius-circle)',
      border: 'none',
      background: 'rgba(0,0,0,.4)',
      color: '#fff',
      cursor: 'pointer',
      fontSize: '1rem'
    }
  }, "\xD7"), title && /*#__PURE__*/React.createElement("h3", {
    style: {
      margin: '0 0 25px',
      padding: '0 0 5px',
      fontWeight: 'bold',
      borderBottom: '3px solid var(--border-subtle)'
    }
  }, title), /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: '20px',
      lineHeight: 1.7
    }
  }, children), actions && /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: 'right',
      borderTop: '1px solid var(--border-default)',
      paddingTop: '10px',
      display: 'flex',
      gap: '8px',
      justifyContent: 'flex-end'
    }
  }, actions)));
}
Object.assign(__ds_scope, { Modal });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Modal.jsx", error: String((e && e.message) || e) }); }

// components/forms/SearchInput.jsx
try { (() => {
function SearchInput({
  placeholder = '搜尋',
  value,
  onChange,
  onSubmit
}) {
  return /*#__PURE__*/React.createElement("form", {
    onSubmit: e => {
      e.preventDefault();
      onSubmit && onSubmit();
    },
    style: {
      position: 'relative',
      background: 'var(--surface-card)',
      borderRadius: 'var(--radius-pill)',
      padding: '4px',
      maxWidth: '360px'
    }
  }, /*#__PURE__*/React.createElement("input", {
    type: "text",
    placeholder: placeholder,
    value: value,
    onChange: e => onChange && onChange(e.target.value),
    style: {
      height: '32px',
      lineHeight: '32px',
      borderRadius: 'var(--radius-pill)',
      padding: '0 40px 0 12px',
      margin: 0,
      border: 'none',
      width: '100%',
      fontSize: '1em',
      fontFamily: 'var(--font-body)',
      background: 'transparent'
    }
  }), /*#__PURE__*/React.createElement("button", {
    type: "submit",
    "aria-label": "search",
    style: {
      position: 'absolute',
      right: '4px',
      top: '4px',
      bottom: '4px',
      width: '32px',
      borderRadius: 'var(--radius-pill)',
      border: 'none',
      background: 'var(--action-default)',
      color: '#fff',
      cursor: 'pointer'
    }
  }, "→"));
}
Object.assign(__ds_scope, { SearchInput });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/SearchInput.jsx", error: String((e && e.message) || e) }); }

// components/navigation/PageHeading.jsx
try { (() => {
function PageHeading({
  title,
  path = []
}) {
  return /*#__PURE__*/React.createElement("header", {
    style: {
      position: 'relative',
      overflow: 'hidden',
      padding: '9px 20px',
      background: 'var(--surface-brand)',
      minHeight: '29px',
      color: 'var(--text-onBrand)',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: 0,
      top: 0,
      bottom: 0,
      width: '6px',
      background: 'var(--b-orange)'
    }
  }), /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: '0 1em 0 0',
      padding: 0,
      fontSize: '22px',
      lineHeight: 1.4,
      color: '#fff',
      fontWeight: 'normal'
    }
  }, title), path.length > 0 && /*#__PURE__*/React.createElement("ul", {
    style: {
      listStyle: 'none',
      margin: 0,
      padding: 0,
      fontSize: '13px',
      lineHeight: 2,
      display: 'flex',
      gap: '2px'
    }
  }, path.map((p, i) => /*#__PURE__*/React.createElement("li", {
    key: i
  }, p, i < path.length - 1 && ' / '))));
}
Object.assign(__ds_scope, { PageHeading });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/PageHeading.jsx", error: String((e && e.message) || e) }); }

// components/navigation/Sidebar.jsx
try { (() => {
const {
  useState
} = React;
function Sidebar({
  groups,
  activeHref
}) {
  const [openIdx, setOpenIdx] = useState(0);
  return /*#__PURE__*/React.createElement("nav", {
    style: {
      width: '240px',
      background: 'rgba(255,255,255,.95)',
      boxShadow: 'var(--shadow-sidebar)',
      fontFamily: 'var(--font-body)',
      fontSize: '.95em'
    }
  }, /*#__PURE__*/React.createElement("ul", {
    style: {
      listStyle: 'none',
      margin: 0,
      padding: 0
    }
  }, groups.map((g, i) => {
    const open = openIdx === i;
    return /*#__PURE__*/React.createElement("li", {
      key: i
    }, /*#__PURE__*/React.createElement("a", {
      onClick: () => setOpenIdx(open ? -1 : i),
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: '10px',
        padding: '12px 16px',
        cursor: 'pointer',
        borderBottom: '1px solid var(--border-subtle)',
        color: 'var(--text-body)',
        fontWeight: open ? 'bold' : 'normal'
      }
    }, g.icon && /*#__PURE__*/React.createElement("img", {
      src: g.icon,
      alt: "",
      width: "20",
      height: "20"
    }), /*#__PURE__*/React.createElement("span", {
      style: {
        flex: 1
      }
    }, g.label), /*#__PURE__*/React.createElement("span", {
      style: {
        transform: open ? 'rotate(225deg)' : 'rotate(45deg)',
        width: '7px',
        height: '7px',
        borderRight: '2px solid var(--n-slate)',
        borderBottom: '2px solid var(--n-slate)',
        marginRight: '4px'
      }
    })), open && /*#__PURE__*/React.createElement("ul", {
      style: {
        listStyle: 'none',
        margin: 0,
        padding: '4px 0 8px'
      }
    }, g.items.map((it, j) => /*#__PURE__*/React.createElement("li", {
      key: j
    }, /*#__PURE__*/React.createElement("a", {
      href: it.href || '#',
      style: {
        display: 'block',
        padding: '8px 16px 8px 46px',
        fontSize: '.95em',
        color: it.href === activeHref ? 'var(--b-teal)' : 'var(--text-body)',
        fontWeight: it.href === activeHref ? 'bold' : 'normal',
        border: 'none',
        background: it.href === activeHref ? 'var(--surface-subtle)' : 'transparent'
      }
    }, it.label)))));
  })));
}
Object.assign(__ds_scope, { Sidebar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/Sidebar.jsx", error: String((e && e.message) || e) }); }

// components/navigation/Steps.jsx
try { (() => {
function Steps({
  steps,
  current
}) {
  return /*#__PURE__*/React.createElement("ul", {
    style: {
      display: 'flex',
      gap: '4px',
      listStyle: 'none',
      margin: 0,
      padding: 0,
      flexWrap: 'wrap'
    }
  }, steps.map((label, i) => /*#__PURE__*/React.createElement("li", {
    key: i,
    style: {
      padding: '.5em 1.1em',
      borderRadius: 'var(--radius-pill)',
      fontSize: '.95em',
      background: i === current ? 'var(--surface-brand)' : 'var(--surface-subtle)',
      color: i === current ? '#fff' : 'var(--text-muted)',
      fontWeight: i === current ? 'bold' : 'normal',
      whiteSpace: 'nowrap',
      flexShrink: 0
    }
  }, i + 1, " ", label)));
}
Object.assign(__ds_scope, { Steps });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/Steps.jsx", error: String((e && e.message) || e) }); }

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Toggle = __ds_scope.Toggle;

__ds_ns.Modal = __ds_scope.Modal;

__ds_ns.SearchInput = __ds_scope.SearchInput;

__ds_ns.PageHeading = __ds_scope.PageHeading;

__ds_ns.Sidebar = __ds_scope.Sidebar;

__ds_ns.Steps = __ds_scope.Steps;

})();
