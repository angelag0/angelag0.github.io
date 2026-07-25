/* @ds-bundle: {"format":3,"namespace":"TaiwantradeASTRADesignSystem_1c8c5c","components":[{"name":"ChatBubble","sourcePath":"components/chat/ChatBubble.jsx"},{"name":"ComposerBar","sourcePath":"components/chat/ComposerBar.jsx"},{"name":"PromptTemplate","sourcePath":"components/chat/PromptTemplate.jsx"},{"name":"SidebarNav","sourcePath":"components/chat/SidebarNav.jsx"},{"name":"ProductCard","sourcePath":"components/commerce/ProductCard.jsx"},{"name":"SupplierCard","sourcePath":"components/commerce/SupplierCard.jsx"},{"name":"Avatar","sourcePath":"components/display/Avatar.jsx"},{"name":"Badge","sourcePath":"components/display/Badge.jsx"},{"name":"Card","sourcePath":"components/display/Card.jsx"},{"name":"Tag","sourcePath":"components/display/Tag.jsx"},{"name":"Notice","sourcePath":"components/feedback/Notice.jsx"},{"name":"Button","sourcePath":"components/forms/Button.jsx"},{"name":"Checkbox","sourcePath":"components/forms/Checkbox.jsx"},{"name":"IconButton","sourcePath":"components/forms/IconButton.jsx"},{"name":"Input","sourcePath":"components/forms/Input.jsx"},{"name":"Radio","sourcePath":"components/forms/Radio.jsx"},{"name":"Select","sourcePath":"components/forms/Select.jsx"},{"name":"Switch","sourcePath":"components/forms/Switch.jsx"},{"name":"Textarea","sourcePath":"components/forms/Textarea.jsx"},{"name":"Tabs","sourcePath":"components/navigation/Tabs.jsx"}],"sourceHashes":{"components/chat/ChatBubble.jsx":"fcc7a96920e6","components/chat/ComposerBar.jsx":"1c523343daac","components/chat/PromptTemplate.jsx":"73daaed39447","components/chat/SidebarNav.jsx":"ce67e66ea57d","components/commerce/ProductCard.jsx":"66f372ad266a","components/commerce/SupplierCard.jsx":"719a1e9d747c","components/display/Avatar.jsx":"9ecd21755131","components/display/Badge.jsx":"5c2d88afb2de","components/display/Card.jsx":"e28e94ed2377","components/display/Tag.jsx":"c238bfe6b483","components/feedback/Notice.jsx":"e57d10a922a4","components/forms/Button.jsx":"453fd1096bdf","components/forms/Checkbox.jsx":"0a5d8c390f3e","components/forms/IconButton.jsx":"ec6976d20ed6","components/forms/Input.jsx":"31008308412b","components/forms/Radio.jsx":"0227695bd820","components/forms/Select.jsx":"3a3bced7724a","components/forms/Switch.jsx":"b18cbbbbed5f","components/forms/Textarea.jsx":"b410663d0828","components/navigation/Tabs.jsx":"8e518f658998","ui_kits/astra/Conversation.jsx":"9fb85753012e","ui_kits/astra/HomeCanvas.jsx":"4d0fd6a5e044","ui_kits/astra/data.js":"cfb1c76e76f8"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.TaiwantradeASTRADesignSystem_1c8c5c = window.TaiwantradeASTRADesignSystem_1c8c5c || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/chat/ChatBubble.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
let _injected = {};
function useStyle(id, css) {
  if (typeof document === 'undefined' || _injected[id]) return;
  _injected[id] = true;
  const el = document.createElement('style');
  el.setAttribute('data-astra', id);
  el.textContent = css;
  document.head.appendChild(el);
}
const CSS = `
.astra-bubble-row { display: flex; width: 100%; font-family: var(--font-body); }
.astra-bubble-row--user { justify-content: flex-end; }
.astra-bubble-row--assistant { justify-content: flex-start; }
.astra-bubble--user {
  max-width: 80%; padding: 16px;
  border: 1px solid var(--gray-50); background: #fff;
  border-radius: 16px 4px 16px 16px;
  color: var(--text-strong); font-size: var(--text-base); line-height: 1.6;
}
.astra-bubble--assistant {
  width: 100%; color: var(--text-strong);
  font-size: var(--text-base); line-height: 1.7;
  display: flex; flex-direction: column; gap: 16px;
}
.astra-bubble__files { display: flex; flex-wrap: wrap; justify-content: flex-end; gap: 8px; margin-bottom: 10px; }
.astra-bubble__file { width: 72px; height: 72px; border-radius: var(--radius-8); overflow: hidden; }
.astra-bubble__file img { width: 100%; height: 100%; object-fit: cover; }
`;

/**
 * A chat message. `role="user"` is a right-aligned white bubble with the
 * signature asymmetric radius; `role="assistant"` is a full-width borderless
 * response that can hold nested result cards.
 */
function ChatBubble({
  role = 'assistant',
  files,
  children,
  className = '',
  ...rest
}) {
  useStyle('bubble', CSS);
  return /*#__PURE__*/React.createElement("div", _extends({
    className: ['astra-bubble-row', `astra-bubble-row--${role}`].join(' ')
  }, rest), /*#__PURE__*/React.createElement("div", {
    className: ['astra-bubble--' + role, className].filter(Boolean).join(' ')
  }, files && files.length ? /*#__PURE__*/React.createElement("div", {
    className: "astra-bubble__files"
  }, files.map((src, i) => /*#__PURE__*/React.createElement("span", {
    className: "astra-bubble__file",
    key: i
  }, /*#__PURE__*/React.createElement("img", {
    src: src,
    alt: ""
  })))) : null, children));
}
Object.assign(__ds_scope, { ChatBubble });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/chat/ChatBubble.jsx", error: String((e && e.message) || e) }); }

// components/chat/ComposerBar.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
let _injected = {};
function useStyle(id, css) {
  if (typeof document === 'undefined' || _injected[id]) return;
  _injected[id] = true;
  const el = document.createElement('style');
  el.setAttribute('data-astra', id);
  el.textContent = css;
  document.head.appendChild(el);
}
const CSS = `
.astra-composer {
  width: 100%; box-sizing: border-box;
  border: 1px solid var(--border-default); border-radius: var(--radius-16);
  background: #fff; font-family: var(--font-body);
  display: flex; flex-direction: column;
  transition: var(--transition-base);
}
.astra-composer:focus-within { border-color: var(--border-focus); box-shadow: 0 0 0 3px rgba(15,92,159,.10); }
.astra-composer__area { padding: 16px; }
.astra-composer__area textarea {
  width: 100%; border: none; outline: none; resize: none;
  font-family: var(--font-body); font-size: var(--text-base); color: var(--text-strong);
  line-height: 1.5; background: transparent; min-height: 28px;
}
.astra-composer__area textarea::placeholder { color: var(--gray-300); }
.astra-composer__controls { display: flex; align-items: center; padding: 4px; gap: 4px; }
.astra-composer__img {
  width: 40px; height: 40px; border: none; background: transparent; cursor: pointer;
  border-radius: var(--radius-8) var(--radius-8) var(--radius-8) var(--radius-16);
  display: flex; align-items: center; justify-content: center; transition: var(--transition-base);
}
.astra-composer__img:hover { background: var(--surface-hover); }
.astra-composer__img img { width: 24px; height: 24px; }
.astra-composer__hint { font-size: var(--text-xs); color: var(--text-muted); margin-left: 2px; }
.astra-composer__send {
  margin-left: auto; width: 40px; height: 40px; border: none; cursor: pointer;
  background: transparent; display: flex; align-items: center; justify-content: center;
}
.astra-composer__send button {
  width: 32px; height: 32px; border: none; border-radius: var(--radius-8); cursor: pointer;
  background: var(--control-fill); display: flex; align-items: center; justify-content: center;
  transition: var(--transition-base);
}
.astra-composer__send button:hover:not(:disabled) { background: var(--control-fill-hover); }
.astra-composer__send button:disabled { background: var(--gray-500); cursor: not-allowed; }
.astra-composer__send img { width: 22px; height: 22px; filter: invert(1); }
`;

/** The ASTRA composer — auto-area textarea with image-search + send affordances. */
function ComposerBar({
  placeholder = 'What are you looking for?',
  value,
  onChange,
  onSubmit,
  onImage,
  showImage = true,
  imageHint = 'Image Search',
  disabled,
  iconBase = '../../assets/icons/',
  className = '',
  ...rest
}) {
  useStyle('composer', CSS);
  const canSend = typeof value === 'string' ? value.trim().length > 0 : !disabled;
  return /*#__PURE__*/React.createElement("div", _extends({
    className: ['astra-composer', className].filter(Boolean).join(' ')
  }, rest), /*#__PURE__*/React.createElement("div", {
    className: "astra-composer__area"
  }, /*#__PURE__*/React.createElement("textarea", {
    rows: 1,
    placeholder: placeholder,
    value: value,
    onChange: onChange,
    maxLength: 5000
  })), /*#__PURE__*/React.createElement("div", {
    className: "astra-composer__controls"
  }, showImage ? /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("button", {
    type: "button",
    className: "astra-composer__img",
    "aria-label": imageHint,
    onClick: onImage
  }, /*#__PURE__*/React.createElement("img", {
    src: iconBase + 'img.svg',
    alt: ""
  })), /*#__PURE__*/React.createElement("span", {
    className: "astra-composer__hint"
  }, imageHint)) : null, /*#__PURE__*/React.createElement("span", {
    className: "astra-composer__send"
  }, /*#__PURE__*/React.createElement("button", {
    type: "button",
    "aria-label": "Send",
    disabled: !canSend,
    onClick: onSubmit
  }, /*#__PURE__*/React.createElement("img", {
    src: iconBase + 'arrow.svg',
    alt: ""
  })))));
}
Object.assign(__ds_scope, { ComposerBar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/chat/ComposerBar.jsx", error: String((e && e.message) || e) }); }

// components/chat/PromptTemplate.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
let _injected = {};
function useStyle(id, css) {
  if (typeof document === 'undefined' || _injected[id]) return;
  _injected[id] = true;
  const el = document.createElement('style');
  el.setAttribute('data-astra', id);
  el.textContent = css;
  document.head.appendChild(el);
}
const CSS = `
.astra-prompt {
  width: 100%; display: flex; justify-content: space-between; align-items: center; gap: 8px;
  padding: 8px; border: none; background: transparent; cursor: pointer; text-align: left;
  border-bottom: 1px solid var(--border-subtle);
  font-family: var(--font-body); transition: var(--transition-base);
}
.astra-prompt:hover { background: var(--surface-page); }
.astra-prompt__text { font-size: var(--text-base); color: var(--text-strong); line-height: 1.6; }
.astra-prompt__slot {
  display: inline-block; color: var(--color-accent);
  background: rgba(15,92,159,.05); border-radius: var(--radius-4);
  padding: 0 4px;
}
.astra-prompt__send { flex-shrink: 0; width: 24px; height: 24px; display: flex; align-items: center; justify-content: center; }
.astra-prompt__send img { width: 22px; height: 22px; opacity: .4; filter: invert(1); }
`;

/**
 * Fill-in-the-blank prompt template. Pass `parts` as an array of strings and
 * { slot: 'placeholder' } objects; slots render as tinted blue inline fields.
 */
function PromptTemplate({
  parts = [],
  onSelect,
  iconBase = '../../assets/icons/',
  className = '',
  ...rest
}) {
  useStyle('prompt', CSS);
  return /*#__PURE__*/React.createElement("button", _extends({
    type: "button",
    className: ['astra-prompt', className].filter(Boolean).join(' '),
    onClick: onSelect
  }, rest), /*#__PURE__*/React.createElement("span", {
    className: "astra-prompt__text"
  }, parts.map((p, i) => typeof p === 'string' ? /*#__PURE__*/React.createElement("span", {
    key: i
  }, p) : /*#__PURE__*/React.createElement("span", {
    key: i,
    className: "astra-prompt__slot"
  }, p.slot))), /*#__PURE__*/React.createElement("span", {
    className: "astra-prompt__send"
  }, /*#__PURE__*/React.createElement("img", {
    src: iconBase + 'arrow.svg',
    alt: ""
  })));
}
Object.assign(__ds_scope, { PromptTemplate });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/chat/PromptTemplate.jsx", error: String((e && e.message) || e) }); }

// components/chat/SidebarNav.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
let _injected = {};
function useStyle(id, css) {
  if (typeof document === 'undefined' || _injected[id]) return;
  _injected[id] = true;
  const el = document.createElement('style');
  el.setAttribute('data-astra', id);
  el.textContent = css;
  document.head.appendChild(el);
}
const CSS = `
.astra-side {
  width: var(--sidebar-width); height: 100%; box-sizing: border-box;
  background: var(--surface-sidebar); box-shadow: var(--shadow-sidebar);
  display: flex; flex-direction: column; gap: 24px; padding: 20px;
  font-family: var(--font-body); flex-shrink: 0;
}
.astra-side__top { display: flex; align-items: center; justify-content: space-between; }
.astra-side__logo img { height: 44px; width: auto; display: block; }
.astra-side__collapse { width: 40px; height: 40px; border: none; background: transparent; border-radius: var(--radius-8); cursor: pointer; display: flex; align-items: center; justify-content: center; }
.astra-side__collapse:hover { background: var(--surface-hover); }
.astra-side__collapse img { width: 24px; height: 24px; }
.astra-side__nav { display: flex; flex-direction: column; gap: 2px; }
.astra-side__item {
  display: flex; align-items: center; gap: 8px; width: 100%;
  border: none; background: transparent; padding: 8px; border-radius: var(--radius-8);
  color: var(--text-body); font-size: var(--text-sm); cursor: pointer; text-align: left;
  transition: var(--transition-base);
}
.astra-side__item:hover, .astra-side__item--active { background: var(--surface-hover); }
.astra-side__item img { width: 24px; height: 24px; }
.astra-side__item--new img { background: var(--gray-900); border-radius: var(--radius-8); padding: 4px; box-sizing: border-box; }
.astra-side__recent { margin-top: auto; }
.astra-side__recent-title { font-size: var(--text-sm); font-weight: var(--weight-medium); color: var(--text-strong); margin-bottom: 8px; }
.astra-side__recent-empty { font-size: var(--text-sm); color: var(--text-muted); }
.astra-side__recent-item {
  display: block; width: 100%; text-align: left; border: none; background: transparent;
  padding: 8px; border-radius: var(--radius-8); color: var(--text-body); font-size: var(--text-sm);
  cursor: pointer; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; transition: var(--transition-base);
}
.astra-side__recent-item:hover { background: var(--surface-hover); }
`;

/** The ASTRA left sidebar — logo, New chat, History, Favorites, Recent list. */
function SidebarNav({
  logo = '../../assets/logo.png',
  active = 'new',
  recent = [],
  onNewChat,
  onSelect,
  onCollapse,
  iconBase = '../../assets/icons/',
  className = '',
  ...rest
}) {
  useStyle('sidebar', CSS);
  const items = [{
    key: 'history',
    icon: 'comic_bubble.svg',
    label: 'History'
  }, {
    key: 'favorites',
    icon: 'favorite.svg',
    label: 'Favorites'
  }];
  return /*#__PURE__*/React.createElement("aside", _extends({
    className: ['astra-side', className].filter(Boolean).join(' ')
  }, rest), /*#__PURE__*/React.createElement("div", {
    className: "astra-side__top"
  }, /*#__PURE__*/React.createElement("span", {
    className: "astra-side__logo"
  }, /*#__PURE__*/React.createElement("img", {
    src: logo,
    alt: "taiwantrade ASTRA"
  })), /*#__PURE__*/React.createElement("button", {
    type: "button",
    className: "astra-side__collapse",
    "aria-label": "Collapse sidebar",
    onClick: onCollapse
  }, /*#__PURE__*/React.createElement("img", {
    src: iconBase + 'dock_to_right.svg',
    alt: ""
  }))), /*#__PURE__*/React.createElement("nav", {
    className: "astra-side__nav"
  }, /*#__PURE__*/React.createElement("button", {
    type: "button",
    className: "astra-side__item astra-side__item--new",
    onClick: onNewChat
  }, /*#__PURE__*/React.createElement("img", {
    src: iconBase + 'add.svg',
    alt: ""
  }), /*#__PURE__*/React.createElement("span", null, "New chat")), items.map(it => /*#__PURE__*/React.createElement("button", {
    key: it.key,
    type: "button",
    className: 'astra-side__item' + (active === it.key ? ' astra-side__item--active' : ''),
    onClick: () => onSelect && onSelect(it.key)
  }, /*#__PURE__*/React.createElement("img", {
    src: iconBase + it.icon,
    alt: ""
  }), /*#__PURE__*/React.createElement("span", null, it.label)))), /*#__PURE__*/React.createElement("div", {
    className: "astra-side__recent"
  }, /*#__PURE__*/React.createElement("div", {
    className: "astra-side__recent-title"
  }, "Recent"), recent.length ? recent.map((r, i) => /*#__PURE__*/React.createElement("button", {
    key: i,
    type: "button",
    className: "astra-side__recent-item",
    onClick: () => onSelect && onSelect('recent', r)
  }, typeof r === 'string' ? r : r.title)) : /*#__PURE__*/React.createElement("div", {
    className: "astra-side__recent-empty"
  }, "No recent chats")));
}
Object.assign(__ds_scope, { SidebarNav });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/chat/SidebarNav.jsx", error: String((e && e.message) || e) }); }

// components/commerce/ProductCard.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
let _injected = {};
function useStyle(id, css) {
  if (typeof document === 'undefined' || _injected[id]) return;
  _injected[id] = true;
  const el = document.createElement('style');
  el.setAttribute('data-astra', id);
  el.textContent = css;
  document.head.appendChild(el);
}
const CSS = `
.astra-prod {
  display: flex; flex-direction: column; gap: 8px;
  padding: 8px; border-radius: var(--radius-8);
  background: var(--surface-page);
  font-family: var(--font-body); position: relative;
  transition: var(--transition-base);
}
.astra-prod:hover { box-shadow: var(--shadow-hover); }
.astra-prod__picwrap { position: relative; }
.astra-prod__pic { width: 100%; aspect-ratio: 1; border-radius: var(--radius-8); object-fit: cover; display: block; background: #fff; }
.astra-prod__fav {
  position: absolute; top: 4px; right: 4px; width: 30px; height: 30px;
  border: none; border-radius: var(--radius-4); cursor: pointer;
  background: rgba(255,255,255,.85); display: flex; align-items: center; justify-content: center;
  transition: var(--transition-base);
}
.astra-prod__fav img { width: 24px; height: 24px; }
.astra-prod__desc {
  font-size: var(--text-base); font-weight: var(--weight-bold); color: var(--text-strong);
  line-height: 1.2; display: -webkit-box; -webkit-line-clamp: 2; -webkit-box-orient: vertical;
  overflow: hidden; min-height: 39px;
}
.astra-prod__supplier { font-size: var(--text-sm); color: var(--text-body); white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }
.astra-prod__price { font-size: var(--text-sm); font-weight: var(--weight-bold); color: var(--text-strong); }
.astra-prod__price .was { text-decoration: line-through; font-weight: var(--weight-medium); color: var(--text-body); margin-right: 6px; }
.astra-prod__price .now { color: var(--price-drop); }
.astra-prod__source { display: flex; align-items: center; gap: 4px; font-size: var(--text-sm); color: var(--text-body); }
.astra-prod__source .logo { width: 24px; height: 24px; border-radius: 50%; overflow: hidden; display: flex; align-items: center; justify-content: center; background: #fff; flex-shrink: 0; border: 1px solid var(--border-subtle); }
.astra-prod__source .logo img { width: 16px; height: 16px; object-fit: cover; }
.astra-prod__badges { display: flex; flex-wrap: wrap; gap: 4px; overflow: hidden; }
`;

/** Product result tile — photo, title, supplier, price, source, attribute badges. */
function ProductCard({
  image,
  title,
  supplier,
  price,
  originalPrice,
  source,
  sourceLogo = '../../assets/icons/store.svg',
  favorite = false,
  onToggleFavorite,
  badges,
  iconBase = '../../assets/icons/',
  className = '',
  ...rest
}) {
  useStyle('productcard', CSS);
  return /*#__PURE__*/React.createElement("div", _extends({
    className: ['astra-prod', className].filter(Boolean).join(' ')
  }, rest), /*#__PURE__*/React.createElement("div", {
    className: "astra-prod__picwrap"
  }, /*#__PURE__*/React.createElement("img", {
    className: "astra-prod__pic",
    src: image,
    alt: title
  }), /*#__PURE__*/React.createElement("button", {
    type: "button",
    className: "astra-prod__fav",
    "aria-pressed": favorite,
    "aria-label": favorite ? 'Remove from favorites' : 'Add to favorites',
    onClick: onToggleFavorite
  }, /*#__PURE__*/React.createElement("img", {
    src: iconBase + (favorite ? 'favorite_red.svg' : 'favorite.svg'),
    alt: ""
  }))), supplier ? /*#__PURE__*/React.createElement("div", {
    className: "astra-prod__supplier"
  }, supplier) : null, /*#__PURE__*/React.createElement("div", {
    className: "astra-prod__desc"
  }, title), price ? /*#__PURE__*/React.createElement("div", {
    className: "astra-prod__price"
  }, originalPrice ? /*#__PURE__*/React.createElement("span", {
    className: "was"
  }, originalPrice) : null, /*#__PURE__*/React.createElement("span", {
    className: originalPrice ? 'now' : ''
  }, price)) : null, source ? /*#__PURE__*/React.createElement("div", {
    className: "astra-prod__source"
  }, /*#__PURE__*/React.createElement("span", {
    className: "logo"
  }, /*#__PURE__*/React.createElement("img", {
    src: sourceLogo,
    alt: ""
  })), /*#__PURE__*/React.createElement("span", null, source)) : null, badges && badges.length ? /*#__PURE__*/React.createElement("div", {
    className: "astra-prod__badges"
  }, badges) : null);
}
Object.assign(__ds_scope, { ProductCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/commerce/ProductCard.jsx", error: String((e && e.message) || e) }); }

// components/commerce/SupplierCard.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
let _injected = {};
function useStyle(id, css) {
  if (typeof document === 'undefined' || _injected[id]) return;
  _injected[id] = true;
  const el = document.createElement('style');
  el.setAttribute('data-astra', id);
  el.textContent = css;
  document.head.appendChild(el);
}
const CSS = `
.astra-supp {
  display: flex; flex-direction: column; gap: 10px;
  padding: 12px; border-radius: var(--radius-8);
  background: var(--surface-page);
  font-family: var(--font-body); position: relative;
  transition: var(--transition-base);
}
.astra-supp:hover { box-shadow: var(--shadow-hover); }
.astra-supp__head { display: flex; align-items: center; gap: 10px; }
.astra-supp__logo {
  width: 48px; height: 48px; border-radius: var(--radius-8); flex-shrink: 0;
  background: #fff; border: 1px solid var(--border-subtle);
  display: flex; align-items: center; justify-content: center; overflow: hidden;
}
.astra-supp__logo img { max-width: 100%; max-height: 100%; object-fit: contain; }
.astra-supp__info { flex: 1; min-width: 0; }
.astra-supp__name { font-size: var(--text-sm); font-weight: var(--weight-bold); color: var(--text-strong); line-height: 1.2; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }
.astra-supp__country { font-size: var(--text-2xs); color: var(--text-muted); display: flex; align-items: center; gap: 4px; margin-top: 3px; }
.astra-supp__country img { width: 14px; height: 14px; opacity: .6; }
.astra-supp__fav {
  position: absolute; top: 8px; right: 8px; width: 30px; height: 30px;
  border: none; border-radius: var(--radius-4); cursor: pointer;
  background: rgba(255,255,255,.85); display: flex; align-items: center; justify-content: center;
}
.astra-supp__fav img { width: 24px; height: 24px; }
.astra-supp__certs { display: flex; flex-wrap: wrap; gap: 6px; }
.astra-supp__foot { display: flex; gap: 8px; margin-top: 2px; }
`;

/** Supplier result card — logo, name, country, certifications, actions. */
function SupplierCard({
  logo,
  name,
  country,
  countryFlag,
  certifications,
  favorite = false,
  onToggleFavorite,
  footer,
  iconBase = '../../assets/icons/',
  className = '',
  ...rest
}) {
  useStyle('suppliercard', CSS);
  return /*#__PURE__*/React.createElement("div", _extends({
    className: ['astra-supp', className].filter(Boolean).join(' ')
  }, rest), /*#__PURE__*/React.createElement("button", {
    type: "button",
    className: "astra-supp__fav",
    "aria-pressed": favorite,
    "aria-label": favorite ? 'Remove from favorites' : 'Add to favorites',
    onClick: onToggleFavorite
  }, /*#__PURE__*/React.createElement("img", {
    src: iconBase + (favorite ? 'favorite_red.svg' : 'favorite.svg'),
    alt: ""
  })), /*#__PURE__*/React.createElement("div", {
    className: "astra-supp__head"
  }, /*#__PURE__*/React.createElement("div", {
    className: "astra-supp__logo"
  }, logo ? /*#__PURE__*/React.createElement("img", {
    src: logo,
    alt: name
  }) : /*#__PURE__*/React.createElement("img", {
    src: iconBase + 'store.svg',
    alt: ""
  })), /*#__PURE__*/React.createElement("div", {
    className: "astra-supp__info"
  }, /*#__PURE__*/React.createElement("div", {
    className: "astra-supp__name"
  }, name), country ? /*#__PURE__*/React.createElement("div", {
    className: "astra-supp__country"
  }, countryFlag ? /*#__PURE__*/React.createElement("img", {
    src: countryFlag,
    alt: ""
  }) : null, country) : null)), certifications && certifications.length ? /*#__PURE__*/React.createElement("div", {
    className: "astra-supp__certs"
  }, certifications) : null, footer ? /*#__PURE__*/React.createElement("div", {
    className: "astra-supp__foot"
  }, footer) : null);
}
Object.assign(__ds_scope, { SupplierCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/commerce/SupplierCard.jsx", error: String((e && e.message) || e) }); }

// components/display/Avatar.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
let _injected = {};
function useStyle(id, css) {
  if (typeof document === 'undefined' || _injected[id]) return;
  _injected[id] = true;
  const el = document.createElement('style');
  el.setAttribute('data-astra', id);
  el.textContent = css;
  document.head.appendChild(el);
}
const CSS = `
.astra-avatar {
  display: inline-flex; align-items: center; justify-content: center;
  border-radius: 50%; overflow: hidden; flex-shrink: 0;
  background: var(--surface-tag); color: var(--color-accent);
  font-family: var(--font-body); font-weight: var(--weight-medium);
  border: 1px solid var(--border-subtle);
}
.astra-avatar--sq { border-radius: var(--radius-8); }
.astra-avatar img { width: 100%; height: 100%; object-fit: cover; display: block; }
`;
const SIZES = {
  sm: 24,
  md: 32,
  lg: 40,
  xl: 48
};

/** Round (or squared) avatar for suppliers / users; falls back to initials. */
function Avatar({
  src,
  alt = '',
  name,
  size = 'md',
  square = false,
  className = '',
  ...rest
}) {
  useStyle('avatar', CSS);
  const px = SIZES[size] || size;
  const initials = name ? name.split(/\s+/).slice(0, 2).map(w => w[0]).join('').toUpperCase() : '';
  return /*#__PURE__*/React.createElement("span", _extends({
    className: ['astra-avatar', square ? 'astra-avatar--sq' : '', className].filter(Boolean).join(' '),
    style: {
      width: px,
      height: px,
      fontSize: Math.round(px * 0.4)
    }
  }, rest), src ? /*#__PURE__*/React.createElement("img", {
    src: src,
    alt: alt
  }) : initials);
}
Object.assign(__ds_scope, { Avatar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/display/Avatar.jsx", error: String((e && e.message) || e) }); }

// components/display/Badge.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
let _injected = {};
function useStyle(id, css) {
  if (typeof document === 'undefined' || _injected[id]) return;
  _injected[id] = true;
  const el = document.createElement('style');
  el.setAttribute('data-astra', id);
  el.textContent = css;
  document.head.appendChild(el);
}
const CSS = `
.astra-badge {
  display: inline-flex; align-items: center; gap: 4px;
  font-family: var(--font-body); font-size: var(--text-micro); font-weight: var(--weight-medium);
  line-height: 1; padding: 4px 8px; border-radius: var(--radius-4);
  border: 1px solid currentColor; white-space: nowrap;
}
.astra-badge--neutral { color: var(--gray-900); border-color: var(--gray-700); background: #fff; }
.astra-badge--green { color: var(--eco-green); border-color: var(--eco-green); background: #fff; }
.astra-badge--red { color: var(--price-drop); border-color: var(--price-drop); background: #fff; }
.astra-badge--blue { color: var(--blue-600); border-color: var(--blue-600); background: #fff; }
.astra-badge--solid { color: #fff; border-color: var(--gray-900); background: var(--gray-900); }
.astra-badge__icon { width: 14px; height: 14px; display: inline-flex; }
.astra-badge__icon img, .astra-badge__icon svg { width: 100%; height: 100%; }
`;

/** Small outlined product attribute badge (certifications, "New", price-drop, etc.). */
function Badge({
  color = 'neutral',
  icon,
  children,
  className = '',
  ...rest
}) {
  useStyle('badge', CSS);
  return /*#__PURE__*/React.createElement("span", _extends({
    className: ['astra-badge', `astra-badge--${color}`, className].filter(Boolean).join(' ')
  }, rest), icon ? /*#__PURE__*/React.createElement("span", {
    className: "astra-badge__icon"
  }, icon) : null, children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/display/Badge.jsx", error: String((e && e.message) || e) }); }

// components/display/Card.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
let _injected = {};
function useStyle(id, css) {
  if (typeof document === 'undefined' || _injected[id]) return;
  _injected[id] = true;
  const el = document.createElement('style');
  el.setAttribute('data-astra', id);
  el.textContent = css;
  document.head.appendChild(el);
}
const CSS = `
.astra-card {
  background: var(--surface-card);
  border: 1px solid var(--border-default);
  border-radius: var(--radius-16);
  box-shadow: var(--shadow-card);
  padding: 16px;
  font-family: var(--font-body);
  color: var(--text-strong);
}
.astra-card--flat { box-shadow: none; }
.astra-card--inset { background: var(--surface-page); border: none; border-radius: var(--radius-8); box-shadow: none; }
.astra-card--hover { transition: var(--transition-base); }
.astra-card--hover:hover { box-shadow: var(--shadow-hover); }
`;

/** Surface container — white, 16px radius, 1px border + soft ambient shadow. */
function Card({
  variant = 'default',
  hover = false,
  className = '',
  children,
  ...rest
}) {
  useStyle('card', CSS);
  const cls = ['astra-card', variant !== 'default' ? `astra-card--${variant}` : '', hover ? 'astra-card--hover' : '', className].filter(Boolean).join(' ');
  return /*#__PURE__*/React.createElement("div", _extends({
    className: cls
  }, rest), children);
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/display/Card.jsx", error: String((e && e.message) || e) }); }

// components/display/Tag.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
let _injected = {};
function useStyle(id, css) {
  if (typeof document === 'undefined' || _injected[id]) return;
  _injected[id] = true;
  const el = document.createElement('style');
  el.setAttribute('data-astra', id);
  el.textContent = css;
  document.head.appendChild(el);
}
const CSS = `
.astra-tag {
  display: inline-flex; align-items: center; gap: 4px;
  font-family: var(--font-body); font-size: var(--text-sm); font-weight: var(--weight-medium);
  line-height: 1.4; padding: 4px 8px; border-radius: var(--radius-8);
  background: var(--surface-tag); color: var(--color-accent);
  white-space: nowrap; border: none;
}
.astra-tag--gray { background: var(--surface-inset); color: var(--text-body); }
.astra-tag--removable { cursor: default; }
.astra-tag__x {
  display: inline-flex; align-items: center; justify-content: center;
  width: 16px; height: 16px; margin-right: -2px; border: none; background: transparent;
  cursor: pointer; opacity: .6; border-radius: 50%;
}
.astra-tag__x:hover { opacity: 1; }
.astra-tag__x::before { content: '×'; font-size: 15px; line-height: 1; color: inherit; }
`;

/** Tinted blue label chip — category / case-study tags ("Product search"). */
function Tag({
  color = 'blue',
  onRemove,
  children,
  className = '',
  ...rest
}) {
  useStyle('tag', CSS);
  const cls = ['astra-tag', color === 'gray' ? 'astra-tag--gray' : '', onRemove ? 'astra-tag--removable' : '', className].filter(Boolean).join(' ');
  return /*#__PURE__*/React.createElement("span", _extends({
    className: cls
  }, rest), children, onRemove ? /*#__PURE__*/React.createElement("button", {
    type: "button",
    className: "astra-tag__x",
    "aria-label": "Remove",
    onClick: onRemove
  }) : null);
}
Object.assign(__ds_scope, { Tag });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/display/Tag.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Notice.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
let _injected = {};
function useStyle(id, css) {
  if (typeof document === 'undefined' || _injected[id]) return;
  _injected[id] = true;
  const el = document.createElement('style');
  el.setAttribute('data-astra', id);
  el.textContent = css;
  document.head.appendChild(el);
}
const ICONS = {
  info: 'info.svg',
  success: 'check_circle.svg',
  warning: 'warning.svg',
  error: 'cancel.svg'
};
const CSS = `
.astra-notice {
  position: relative; display: flex; align-items: flex-start; gap: 10px;
  width: 100%; box-sizing: border-box;
  padding: 10px 42px 10px 14px;
  border-radius: var(--radius-8);
  font-family: var(--font-body); font-size: var(--text-sm); line-height: 1.5;
}
.astra-notice__icon { width: 20px; height: 20px; flex-shrink: 0; margin-top: 1px; }
.astra-notice__icon img { width: 100%; height: 100%; display: block; }
.astra-notice__body { flex: 1; }
.astra-notice__close {
  position: absolute; right: 8px; top: 8px; width: 24px; height: 24px;
  border: none; background: transparent; cursor: pointer; opacity: .45; border-radius: var(--radius-4);
  display: inline-flex; align-items: center; justify-content: center;
}
.astra-notice__close:hover { opacity: 1; }
.astra-notice__close img { width: 16px; height: 16px; }
.astra-notice--info    { color: var(--notice-info-fg);    background: var(--notice-info-bg); }
.astra-notice--success { color: var(--notice-success-fg); background: var(--notice-success-bg); }
.astra-notice--warning { color: var(--notice-warning-fg); background: var(--notice-warning-bg); }
.astra-notice--error   { color: var(--notice-error-fg);   background: var(--notice-error-bg); }
.astra-notice--neutral { color: var(--notice-neutral-fg); background: var(--notice-neutral-bg); }
`;

/**
 * Status banner. Tones: info | success | warning | error | neutral.
 * Icons resolve relative to assets/icons; pass `iconBase` if your page sits
 * at a different depth (default '../../assets/icons/').
 */
function Notice({
  tone = 'info',
  onClose,
  iconBase = '../../assets/icons/',
  children,
  className = '',
  ...rest
}) {
  useStyle('notice', CSS);
  const icon = ICONS[tone];
  return /*#__PURE__*/React.createElement("div", _extends({
    role: "alert",
    className: ['astra-notice', `astra-notice--${tone}`, className].filter(Boolean).join(' ')
  }, rest), icon ? /*#__PURE__*/React.createElement("span", {
    className: "astra-notice__icon"
  }, /*#__PURE__*/React.createElement("img", {
    src: iconBase + icon,
    alt: ""
  })) : null, /*#__PURE__*/React.createElement("div", {
    className: "astra-notice__body"
  }, children), onClose ? /*#__PURE__*/React.createElement("button", {
    type: "button",
    className: "astra-notice__close",
    "aria-label": "Dismiss",
    onClick: onClose
  }, /*#__PURE__*/React.createElement("img", {
    src: iconBase + 'close_dk.svg',
    alt: ""
  })) : null);
}
Object.assign(__ds_scope, { Notice });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Notice.jsx", error: String((e && e.message) || e) }); }

// components/forms/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* Injects a stylesheet once per id, so :hover/:disabled states work with
   the design-system CSS custom properties. */
let _injected = {};
function useStyle(id, css) {
  if (typeof document === 'undefined') return;
  if (_injected[id]) return;
  _injected[id] = true;
  const el = document.createElement('style');
  el.setAttribute('data-astra', id);
  el.textContent = css;
  document.head.appendChild(el);
}
const CSS = `
.astra-btn {
  font-family: var(--font-body);
  display: inline-flex; align-items: center; justify-content: center; gap: 8px;
  min-height: var(--control-height);
  padding: 5px 16px;
  border-radius: var(--radius-8);
  border: 1px solid transparent;
  font-size: var(--text-sm); font-weight: var(--weight-medium);
  line-height: 1.6;
  cursor: pointer;
  transition: var(--transition-base);
  white-space: nowrap;
}
.astra-btn--block { width: 100%; }
.astra-btn--sm { min-height: 32px; padding: 4px 12px; font-size: var(--text-sm); }
.astra-btn--lg { min-height: 48px; padding: 10px 24px; font-size: var(--text-base); }

/* primary — near-black fill that shifts to brand blue on hover */
.astra-btn--primary { background: var(--control-fill); color: var(--text-on-primary); }
.astra-btn--primary:not(:disabled):hover { background: var(--control-fill-hover); color: #fff; }

/* outline — white, gray border, blue on hover */
.astra-btn--outline { background: #fff; color: var(--text-strong); border-color: var(--border-strong); }
.astra-btn--outline:not(:disabled):hover { color: var(--color-accent); border-color: var(--color-accent); }

/* danger */
.astra-btn--danger { background: var(--red-500); color: #fff; }
.astra-btn--danger:not(:disabled):hover { filter: brightness(0.93); }

.astra-btn:disabled { background: var(--control-fill-disabled); color: #fff; border-color: transparent; cursor: not-allowed; }
.astra-btn--outline:disabled { background: #fff; color: var(--gray-300); border-color: var(--gray-100); }
.astra-btn__icon { width: 18px; height: 18px; display: inline-flex; flex-shrink: 0; }
.astra-btn__icon img, .astra-btn__icon svg { width: 100%; height: 100%; }
`;

/**
 * ASTRA primary action button. Variants: primary (default, dark→blue),
 * outline, danger. Sizes: sm | md | lg.
 */
function Button({
  variant = 'primary',
  size = 'md',
  block = false,
  iconLeft,
  iconRight,
  children,
  className = '',
  ...rest
}) {
  useStyle('button', CSS);
  const cls = ['astra-btn', `astra-btn--${variant}`, size !== 'md' ? `astra-btn--${size}` : '', block ? 'astra-btn--block' : '', className].filter(Boolean).join(' ');
  return /*#__PURE__*/React.createElement("button", _extends({
    className: cls
  }, rest), iconLeft ? /*#__PURE__*/React.createElement("span", {
    className: "astra-btn__icon"
  }, iconLeft) : null, children ? /*#__PURE__*/React.createElement("span", null, children) : null, iconRight ? /*#__PURE__*/React.createElement("span", {
    className: "astra-btn__icon"
  }, iconRight) : null);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Button.jsx", error: String((e && e.message) || e) }); }

// components/forms/Checkbox.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
let _injected = {};
function useStyle(id, css) {
  if (typeof document === 'undefined' || _injected[id]) return;
  _injected[id] = true;
  const el = document.createElement('style');
  el.setAttribute('data-astra', id);
  el.textContent = css;
  document.head.appendChild(el);
}
const CSS = `
.astra-check { display: inline-flex; align-items: center; gap: 8px; cursor: pointer; font-family: var(--font-body); font-size: var(--text-sm); color: var(--text-strong); padding: 4px 0; user-select: none; }
.astra-check input { position: absolute; opacity: 0; width: 0; height: 0; }
.astra-check__box {
  width: 18px; height: 18px; flex-shrink: 0;
  border: 1px solid var(--border-default); border-radius: var(--radius-4);
  background: #fff; transition: var(--transition-base);
  display: inline-flex; align-items: center; justify-content: center;
}
.astra-check input:checked + .astra-check__box {
  background: var(--gray-900) url('../../assets/icons/check_w.svg') no-repeat center / 95%;
  border-color: var(--gray-900);
}
.astra-check input:focus-visible + .astra-check__box { outline: 2px solid var(--border-focus); outline-offset: 2px; }
.astra-check--disabled { opacity: .5; cursor: not-allowed; }
`;

/** Custom checkbox — white box, gray-900 fill + white tick when checked. */
function Checkbox({
  label,
  checked,
  disabled,
  className = '',
  ...rest
}) {
  useStyle('checkbox', CSS);
  return /*#__PURE__*/React.createElement("label", {
    className: ['astra-check', disabled ? 'astra-check--disabled' : '', className].filter(Boolean).join(' ')
  }, /*#__PURE__*/React.createElement("input", _extends({
    type: "checkbox",
    checked: checked,
    disabled: disabled
  }, rest)), /*#__PURE__*/React.createElement("span", {
    className: "astra-check__box"
  }), label ? /*#__PURE__*/React.createElement("span", null, label) : null);
}
Object.assign(__ds_scope, { Checkbox });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Checkbox.jsx", error: String((e && e.message) || e) }); }

// components/forms/IconButton.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
let _injected = {};
function useStyle(id, css) {
  if (typeof document === 'undefined' || _injected[id]) return;
  _injected[id] = true;
  const el = document.createElement('style');
  el.setAttribute('data-astra', id);
  el.textContent = css;
  document.head.appendChild(el);
}
const CSS = `
.astra-iconbtn {
  display: inline-flex; align-items: center; justify-content: center;
  width: var(--control-height); height: var(--control-height);
  min-width: var(--control-height);
  padding: 0; border: none; background: transparent;
  border-radius: var(--radius-8);
  color: var(--text-body);
  cursor: pointer;
  transition: var(--transition-base);
}
.astra-iconbtn:hover { background: var(--surface-hover); }
.astra-iconbtn--sm { width: 32px; height: 32px; min-width: 32px; }
.astra-iconbtn--active { background: var(--surface-hover); }
.astra-iconbtn:disabled { opacity: .4; cursor: not-allowed; }
.astra-iconbtn img, .astra-iconbtn svg { width: 24px; height: 24px; display: block; }
.astra-iconbtn--sm img, .astra-iconbtn--sm svg { width: 20px; height: 20px; }
`;

/** Square, ghost icon-only button used across ASTRA chrome (sidebar, top bar). */
function IconButton({
  size = 'md',
  active = false,
  label,
  children,
  className = '',
  ...rest
}) {
  useStyle('iconbtn', CSS);
  const cls = ['astra-iconbtn', size === 'sm' ? 'astra-iconbtn--sm' : '', active ? 'astra-iconbtn--active' : '', className].filter(Boolean).join(' ');
  return /*#__PURE__*/React.createElement("button", _extends({
    className: cls,
    "aria-label": label
  }, rest), children);
}
Object.assign(__ds_scope, { IconButton });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/IconButton.jsx", error: String((e && e.message) || e) }); }

// components/forms/Input.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
let _injected = {};
function useStyle(id, css) {
  if (typeof document === 'undefined' || _injected[id]) return;
  _injected[id] = true;
  const el = document.createElement('style');
  el.setAttribute('data-astra', id);
  el.textContent = css;
  document.head.appendChild(el);
}
const CSS = `
.astra-field { display: flex; flex-direction: column; gap: 6px; font-family: var(--font-body); }
.astra-field__label { font-size: var(--text-sm); color: var(--text-strong); font-weight: var(--weight-medium); }
.astra-field__label em { color: var(--red-500); font-style: normal; margin-right: 4px; }
.astra-inputwrap { position: relative; display: flex; align-items: center; }
.astra-input {
  width: 100%;
  font-family: var(--font-body); font-size: var(--text-base);
  color: var(--text-strong);
  background: #fff;
  border: 1px solid var(--border-default);
  border-radius: var(--radius-8);
  padding: 10px 14px;
  min-height: 44px;
  transition: var(--transition-base);
}
.astra-input::placeholder { color: var(--gray-300); }
.astra-input:focus { outline: none; border-color: var(--border-focus); box-shadow: 0 0 0 3px rgba(15,92,159,.12); }
.astra-input:disabled { background: var(--gray-50); color: var(--gray-500); cursor: not-allowed; }
.astra-inputwrap--icon-left .astra-input { padding-left: 44px; }
.astra-inputwrap--icon-right .astra-input { padding-right: 44px; }
.astra-input__icon { position: absolute; width: 24px; height: 24px; display: flex; align-items: center; justify-content: center; pointer-events: none; }
.astra-input__icon img, .astra-input__icon svg { width: 20px; height: 20px; opacity: .7; }
.astra-input__icon--left { left: 12px; }
.astra-input__icon--right { right: 12px; }
.astra-field--error .astra-input { border-color: var(--red-500); }
.astra-field--error .astra-input::placeholder { color: var(--red-500); }
.astra-field__help { font-size: var(--text-xs); color: var(--text-muted); }
.astra-field--error .astra-field__help { color: var(--red-500); }
`;

/** Single-line text input with optional label, leading/trailing icon, error state. */
function Input({
  label,
  required = false,
  iconLeft,
  iconRight,
  error = false,
  help,
  id,
  className = '',
  ...rest
}) {
  useStyle('input', CSS);
  const fid = id || (label ? `in-${label.replace(/\s+/g, '-').toLowerCase()}` : undefined);
  const wrapCls = ['astra-inputwrap', iconLeft ? 'astra-inputwrap--icon-left' : '', iconRight ? 'astra-inputwrap--icon-right' : ''].filter(Boolean).join(' ');
  return /*#__PURE__*/React.createElement("div", {
    className: ['astra-field', error ? 'astra-field--error' : '', className].filter(Boolean).join(' ')
  }, label ? /*#__PURE__*/React.createElement("label", {
    className: "astra-field__label",
    htmlFor: fid
  }, required ? /*#__PURE__*/React.createElement("em", null, "*") : null, label) : null, /*#__PURE__*/React.createElement("div", {
    className: wrapCls
  }, iconLeft ? /*#__PURE__*/React.createElement("span", {
    className: "astra-input__icon astra-input__icon--left"
  }, iconLeft) : null, /*#__PURE__*/React.createElement("input", _extends({
    id: fid,
    className: "astra-input"
  }, rest)), iconRight ? /*#__PURE__*/React.createElement("span", {
    className: "astra-input__icon astra-input__icon--right"
  }, iconRight) : null), help ? /*#__PURE__*/React.createElement("div", {
    className: "astra-field__help"
  }, help) : null);
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Input.jsx", error: String((e && e.message) || e) }); }

// components/forms/Radio.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
let _injected = {};
function useStyle(id, css) {
  if (typeof document === 'undefined' || _injected[id]) return;
  _injected[id] = true;
  const el = document.createElement('style');
  el.setAttribute('data-astra', id);
  el.textContent = css;
  document.head.appendChild(el);
}
const CSS = `
.astra-radio { display: inline-flex; align-items: center; gap: 8px; cursor: pointer; font-family: var(--font-body); font-size: var(--text-sm); color: var(--text-strong); padding: 4px 0; user-select: none; }
.astra-radio input { position: absolute; opacity: 0; width: 0; height: 0; }
.astra-radio__dot {
  width: 20px; height: 20px; flex-shrink: 0;
  border: 2px solid var(--gray-900); border-radius: 50%;
  background: #fff; transition: var(--transition-base);
}
.astra-radio input:checked + .astra-radio__dot {
  background: var(--gray-900); box-shadow: inset 0 0 0 2px #fff;
}
.astra-radio input:focus-visible + .astra-radio__dot { outline: 2px solid var(--border-focus); outline-offset: 2px; }
.astra-radio--disabled { opacity: .5; cursor: not-allowed; }
`;

/** Custom radio — 2px ring, gray-900 fill with white inset when selected. */
function Radio({
  label,
  disabled,
  className = '',
  ...rest
}) {
  useStyle('radio', CSS);
  return /*#__PURE__*/React.createElement("label", {
    className: ['astra-radio', disabled ? 'astra-radio--disabled' : '', className].filter(Boolean).join(' ')
  }, /*#__PURE__*/React.createElement("input", _extends({
    type: "radio",
    disabled: disabled
  }, rest)), /*#__PURE__*/React.createElement("span", {
    className: "astra-radio__dot"
  }), label ? /*#__PURE__*/React.createElement("span", null, label) : null);
}
Object.assign(__ds_scope, { Radio });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Radio.jsx", error: String((e && e.message) || e) }); }

// components/forms/Select.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
let _injected = {};
function useStyle(id, css) {
  if (typeof document === 'undefined' || _injected[id]) return;
  _injected[id] = true;
  const el = document.createElement('style');
  el.setAttribute('data-astra', id);
  el.textContent = css;
  document.head.appendChild(el);
}
const CSS = `
.astra-sel-field { display: flex; flex-direction: column; gap: 6px; font-family: var(--font-body); }
.astra-sel-field__label { font-size: var(--text-sm); color: var(--text-strong); font-weight: var(--weight-medium); }
.astra-sel { position: relative; }
.astra-sel::after {
  content: ''; position: absolute; right: 12px; top: 50%; transform: translateY(-50%);
  width: 20px; height: 20px; pointer-events: none;
  background: url('../../assets/icons/select_arrow_dk.svg') no-repeat center / contain;
}
.astra-sel select {
  width: 100%; font-family: var(--font-body); font-size: var(--text-base);
  color: var(--text-strong); background: #fff;
  border: 1px solid var(--border-default); border-radius: var(--radius-8);
  padding: 10px 40px 10px 14px; min-height: 44px;
  appearance: none; -webkit-appearance: none; -moz-appearance: none;
  cursor: pointer; transition: var(--transition-base);
}
.astra-sel select:focus { outline: none; border-color: var(--border-focus); box-shadow: 0 0 0 3px rgba(15,92,159,.12); }
.astra-sel select:disabled { background: var(--gray-50); color: var(--gray-500); cursor: not-allowed; }
`;

/** Native select with the ASTRA dropdown-arrow affordance. */
function Select({
  label,
  id,
  options,
  children,
  className = '',
  ...rest
}) {
  useStyle('select', CSS);
  const fid = id || (label ? `sel-${label.replace(/\s+/g, '-').toLowerCase()}` : undefined);
  return /*#__PURE__*/React.createElement("div", {
    className: ['astra-sel-field', className].filter(Boolean).join(' ')
  }, label ? /*#__PURE__*/React.createElement("label", {
    className: "astra-sel-field__label",
    htmlFor: fid
  }, label) : null, /*#__PURE__*/React.createElement("div", {
    className: "astra-sel"
  }, /*#__PURE__*/React.createElement("select", _extends({
    id: fid
  }, rest), options ? options.map(o => {
    const val = typeof o === 'string' ? o : o.value;
    const lbl = typeof o === 'string' ? o : o.label;
    return /*#__PURE__*/React.createElement("option", {
      key: val,
      value: val
    }, lbl);
  }) : children)));
}
Object.assign(__ds_scope, { Select });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Select.jsx", error: String((e && e.message) || e) }); }

// components/forms/Switch.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
let _injected = {};
function useStyle(id, css) {
  if (typeof document === 'undefined' || _injected[id]) return;
  _injected[id] = true;
  const el = document.createElement('style');
  el.setAttribute('data-astra', id);
  el.textContent = css;
  document.head.appendChild(el);
}
const CSS = `
.astra-switch { display: inline-flex; align-items: center; gap: 10px; cursor: pointer; font-family: var(--font-body); font-size: var(--text-sm); color: var(--text-strong); user-select: none; }
.astra-switch input { position: absolute; opacity: 0; width: 0; height: 0; }
.astra-switch__track {
  width: 40px; height: 24px; flex-shrink: 0; border-radius: var(--radius-pill);
  background: var(--gray-300); position: relative; transition: var(--transition-base);
}
.astra-switch__track::after {
  content: ''; position: absolute; top: 3px; left: 3px;
  width: 18px; height: 18px; border-radius: 50%; background: #fff;
  transition: var(--transition-base);
}
.astra-switch input:checked + .astra-switch__track { background: var(--color-accent); }
.astra-switch input:checked + .astra-switch__track::after { transform: translateX(16px); }
.astra-switch input:focus-visible + .astra-switch__track { outline: 2px solid var(--border-focus); outline-offset: 2px; }
.astra-switch--disabled { opacity: .5; cursor: not-allowed; }
`;

/** Toggle switch — gray off, brand-blue on. */
function Switch({
  label,
  disabled,
  className = '',
  ...rest
}) {
  useStyle('switch', CSS);
  return /*#__PURE__*/React.createElement("label", {
    className: ['astra-switch', disabled ? 'astra-switch--disabled' : '', className].filter(Boolean).join(' ')
  }, /*#__PURE__*/React.createElement("input", _extends({
    type: "checkbox",
    role: "switch",
    disabled: disabled
  }, rest)), /*#__PURE__*/React.createElement("span", {
    className: "astra-switch__track"
  }), label ? /*#__PURE__*/React.createElement("span", null, label) : null);
}
Object.assign(__ds_scope, { Switch });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Switch.jsx", error: String((e && e.message) || e) }); }

// components/forms/Textarea.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
let _injected = {};
function useStyle(id, css) {
  if (typeof document === 'undefined' || _injected[id]) return;
  _injected[id] = true;
  const el = document.createElement('style');
  el.setAttribute('data-astra', id);
  el.textContent = css;
  document.head.appendChild(el);
}
const CSS = `
.astra-ta-field { display: flex; flex-direction: column; gap: 6px; font-family: var(--font-body); }
.astra-ta-field__label { font-size: var(--text-sm); color: var(--text-strong); font-weight: var(--weight-medium); }
.astra-ta {
  width: 100%; font-family: var(--font-body); font-size: var(--text-base);
  color: var(--text-strong); background: #fff;
  border: 1px solid var(--border-default); border-radius: var(--radius-16);
  padding: 14px 16px; min-height: 80px; resize: vertical; line-height: 1.5;
  transition: var(--transition-base);
}
.astra-ta::placeholder { color: var(--gray-300); }
.astra-ta:focus { outline: none; border-color: var(--border-focus); box-shadow: 0 0 0 3px rgba(15,92,159,.12); }
.astra-ta:disabled { background: var(--gray-50); color: var(--gray-500); cursor: not-allowed; }
`;

/** Multi-line text area (16px radius, matching the ASTRA composer style). */
function Textarea({
  label,
  id,
  className = '',
  ...rest
}) {
  useStyle('textarea', CSS);
  const fid = id || (label ? `ta-${label.replace(/\s+/g, '-').toLowerCase()}` : undefined);
  return /*#__PURE__*/React.createElement("div", {
    className: ['astra-ta-field', className].filter(Boolean).join(' ')
  }, label ? /*#__PURE__*/React.createElement("label", {
    className: "astra-ta-field__label",
    htmlFor: fid
  }, label) : null, /*#__PURE__*/React.createElement("textarea", _extends({
    id: fid,
    className: "astra-ta"
  }, rest)));
}
Object.assign(__ds_scope, { Textarea });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Textarea.jsx", error: String((e && e.message) || e) }); }

// components/navigation/Tabs.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
let _injected = {};
function useStyle(id, css) {
  if (typeof document === 'undefined' || _injected[id]) return;
  _injected[id] = true;
  const el = document.createElement('style');
  el.setAttribute('data-astra', id);
  el.textContent = css;
  document.head.appendChild(el);
}
const CSS = `
.astra-tabs { display: flex; gap: 4px; font-family: var(--font-body); border-bottom: 1px solid var(--border-subtle); }
.astra-tabs__tab {
  position: relative; border: none; background: transparent; cursor: pointer;
  padding: 10px 16px; font-size: var(--text-sm); font-weight: var(--weight-medium);
  color: var(--text-body); transition: var(--transition-base);
}
.astra-tabs__tab:hover { color: var(--text-strong); }
.astra-tabs__tab--active { color: var(--color-accent); }
.astra-tabs__tab--active::after {
  content: ''; position: absolute; left: 12px; right: 12px; bottom: -1px; height: 2px;
  background: var(--color-accent); border-radius: 2px;
}
.astra-tabs__count {
  margin-left: 6px; font-size: var(--text-xs); color: var(--text-muted);
  background: var(--surface-inset); border-radius: var(--radius-pill); padding: 1px 7px;
}
.astra-tabs__tab--active .astra-tabs__count { background: var(--surface-tag); color: var(--color-accent); }
`;

/** Underline tab strip used across the search & comparison panes. */
function Tabs({
  tabs = [],
  value,
  onChange,
  className = '',
  ...rest
}) {
  useStyle('tabs', CSS);
  return /*#__PURE__*/React.createElement("div", _extends({
    className: ['astra-tabs', className].filter(Boolean).join(' '),
    role: "tablist"
  }, rest), tabs.map(t => {
    const key = typeof t === 'string' ? t : t.value;
    const label = typeof t === 'string' ? t : t.label;
    const count = typeof t === 'string' ? undefined : t.count;
    const isActive = key === value;
    return /*#__PURE__*/React.createElement("button", {
      key: key,
      type: "button",
      role: "tab",
      "aria-selected": isActive,
      className: 'astra-tabs__tab' + (isActive ? ' astra-tabs__tab--active' : ''),
      onClick: () => onChange && onChange(key)
    }, label, count != null ? /*#__PURE__*/React.createElement("span", {
      className: "astra-tabs__count"
    }, count) : null);
  }));
}
Object.assign(__ds_scope, { Tabs });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/Tabs.jsx", error: String((e && e.message) || e) }); }

// ui_kits/astra/Conversation.jsx
try { (() => {
/* Conversation view — chat pane (left) + results answer pane (right). */
const NS = window.TaiwantradeASTRADesignSystem_1c8c5c;
const {
  ChatBubble,
  ComposerBar,
  ProductCard,
  SupplierCard,
  Badge,
  Button,
  Tabs
} = NS;
function Conversation({
  query,
  onNewChat
}) {
  const D = window.ASTRA_DATA;
  const [tab, setTab] = React.useState('products');
  const [fav, setFav] = React.useState({});
  const [loading, setLoading] = React.useState(true);
  const [v, setV] = React.useState('');
  React.useEffect(() => {
    setLoading(true);
    const t = setTimeout(() => setLoading(false), 900);
    return () => clearTimeout(t);
  }, [query]);
  const tog = k => setFav(p => ({
    ...p,
    [k]: !p[k]
  }));
  return /*#__PURE__*/React.createElement("div", {
    className: "astra-conv"
  }, /*#__PURE__*/React.createElement("div", {
    className: "astra-conv__chat"
  }, /*#__PURE__*/React.createElement("div", {
    className: "astra-conv__head"
  }, /*#__PURE__*/React.createElement("span", {
    className: "astra-conv__chat-title"
  }, query)), /*#__PURE__*/React.createElement("div", {
    className: "astra-conv__stream"
  }, /*#__PURE__*/React.createElement(ChatBubble, {
    role: "user"
  }, query), /*#__PURE__*/React.createElement(ChatBubble, {
    role: "assistant"
  }, /*#__PURE__*/React.createElement("div", {
    className: "astra-aisearch"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "astra-aisearch__t"
  }, "Searching taiwantrade catalogue"), /*#__PURE__*/React.createElement("div", {
    className: "astra-aisearch__s"
  }, "Products \xB7 Suppliers \xB7 Certifications")), /*#__PURE__*/React.createElement("img", {
    src: "../../assets/icons/paste_search.svg",
    width: "22",
    height: "22",
    alt: ""
  })), loading ? /*#__PURE__*/React.createElement("div", {
    className: "astra-loader"
  }, /*#__PURE__*/React.createElement("span", {
    className: "astra-loader__dot"
  }), " Finding the best matches\u2026") : /*#__PURE__*/React.createElement("div", null, "I found ", /*#__PURE__*/React.createElement("b", null, D.products.length, " products"), " and ", /*#__PURE__*/React.createElement("b", null, D.suppliers.length, " suppliers"), " matching your request. The strongest matches carry HACCP and FDA certification. Open the results panel to compare, favorite, or send an inquiry."))), /*#__PURE__*/React.createElement(ComposerBar, {
    value: v,
    onChange: e => setV(e.target.value),
    placeholder: "Ask a follow-up\u2026"
  })), /*#__PURE__*/React.createElement("div", {
    className: "astra-conv__answer"
  }, /*#__PURE__*/React.createElement("div", {
    className: "astra-answer__bar"
  }, /*#__PURE__*/React.createElement(Tabs, {
    value: tab,
    onChange: setTab,
    tabs: [{
      value: 'products',
      label: 'Products',
      count: D.products.length
    }, {
      value: 'suppliers',
      label: 'Suppliers',
      count: D.suppliers.length
    }]
  }), /*#__PURE__*/React.createElement("div", {
    className: "astra-answer__tools"
  }, /*#__PURE__*/React.createElement("button", {
    className: "astra-tool"
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/icons/filter.svg",
    alt: ""
  }), "Filter"), /*#__PURE__*/React.createElement("button", {
    className: "astra-tool"
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/icons/advanced.svg",
    alt: ""
  }), "Advanced"))), loading ? /*#__PURE__*/React.createElement("div", {
    className: "astra-answer__skeleton"
  }, [0, 1, 2, 3].map(i => /*#__PURE__*/React.createElement("div", {
    className: "astra-skel",
    key: i
  }))) : tab === 'products' ? /*#__PURE__*/React.createElement("div", {
    className: "astra-answer__grid"
  }, D.products.map(p => /*#__PURE__*/React.createElement(ProductCard, {
    key: p.id,
    image: p.image,
    supplier: p.supplier,
    title: p.title,
    price: p.price,
    originalPrice: p.original,
    source: p.source,
    favorite: !!fav[p.id],
    onToggleFavorite: () => tog(p.id),
    badges: p.badges.map(([c, t], i) => /*#__PURE__*/React.createElement(Badge, {
      key: i,
      color: c
    }, t))
  }))) : /*#__PURE__*/React.createElement("div", {
    className: "astra-answer__grid"
  }, D.suppliers.map(s => /*#__PURE__*/React.createElement(SupplierCard, {
    key: s.id,
    logo: s.logo,
    name: s.name,
    country: s.country,
    favorite: !!fav[s.id],
    onToggleFavorite: () => tog(s.id),
    certifications: s.certs.map(([c, t], i) => /*#__PURE__*/React.createElement(Badge, {
      key: i,
      color: c
    }, t)),
    footer: /*#__PURE__*/React.createElement(Button, {
      size: "sm",
      variant: "outline",
      block: true
    }, "View supplier")
  })))));
}
window.Conversation = Conversation;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/astra/Conversation.jsx", error: String((e && e.message) || e) }); }

// ui_kits/astra/HomeCanvas.jsx
try { (() => {
/* Home canvas — the ASTRA empty state ("main page"). */
const {
  ComposerBar,
  PromptTemplate,
  Tag
} = window.TaiwantradeASTRADesignSystem_1c8c5c;
function HomeCanvas({
  onSubmit
}) {
  const D = window.ASTRA_DATA;
  const [v, setV] = React.useState('');
  const send = text => onSubmit(text || v || 'Find frozen passion fruit concentrate suppliers in Taiwan.');
  return /*#__PURE__*/React.createElement("div", {
    className: "astra-home"
  }, /*#__PURE__*/React.createElement("div", {
    className: "astra-home__inner"
  }, /*#__PURE__*/React.createElement("h1", {
    className: "astra-home__title"
  }, "Smart Sourcing, Taiwan Quality"), /*#__PURE__*/React.createElement(ComposerBar, {
    value: v,
    onChange: e => setV(e.target.value),
    onSubmit: () => send(),
    placeholder: "What are you looking for?"
  }), /*#__PURE__*/React.createElement("div", {
    className: "astra-home__prompts"
  }, D.prompts.map((parts, i) => /*#__PURE__*/React.createElement(PromptTemplate, {
    key: i,
    parts: parts,
    onSelect: () => send(flatten(parts))
  }))), /*#__PURE__*/React.createElement("div", {
    className: "astra-home__cases"
  }, D.cases.map((c, i) => /*#__PURE__*/React.createElement("button", {
    className: "astra-case",
    key: i,
    onClick: () => send(c.con)
  }, /*#__PURE__*/React.createElement("div", {
    className: "astra-case__top"
  }, /*#__PURE__*/React.createElement(Tag, null, c.tag), /*#__PURE__*/React.createElement("span", {
    className: "astra-case__go"
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/icons/arrow_to_right.svg",
    alt: ""
  }))), /*#__PURE__*/React.createElement("div", {
    className: "astra-case__con"
  }, c.con), /*#__PURE__*/React.createElement("div", {
    className: "astra-case__pic"
  }, /*#__PURE__*/React.createElement("img", {
    src: c.pic,
    alt: ""
  })))))));
}
function flatten(parts) {
  return parts.map(p => typeof p === 'string' ? p : '[' + p.slot + ']').join('');
}
window.HomeCanvas = HomeCanvas;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/astra/HomeCanvas.jsx", error: String((e && e.message) || e) }); }

// ui_kits/astra/data.js
try { (() => {
/* taiwantrade ASTRA — UI kit mock data (illustrative only). */
window.ASTRA_DATA = {
  products: [{
    id: 'p4',
    image: '../../assets/demo/p4.jpg',
    supplier: 'Tropical Harvest Co., Ltd.',
    title: 'Frozen Passion Fruit Concentrate',
    price: 'US$ 3.20 / kg',
    source: 'taiwantrade.com',
    badges: [['green', 'HACCP'], ['neutral', 'FDA']],
    match: 98
  }, {
    id: 'p1',
    image: '../../assets/demo/p1.jpg',
    supplier: 'Formosa Fresh Foods',
    title: 'IQF Diced Mango — Grade A Export',
    price: 'US$ 2.85 / kg',
    source: 'taiwantrade.com',
    badges: [['green', 'Organic'], ['neutral', 'ISO 22000']],
    match: 94
  }, {
    id: 'p2',
    image: '../../assets/demo/p2.jpg',
    supplier: 'Lin Beverage Group',
    title: 'Concentrated Lychee Juice 65 Brix',
    price: 'US$ 2.40 / kg',
    original: 'US$ 3.00 / kg',
    source: 'taiwantrade.com',
    badges: [['red', '−20%'], ['neutral', 'HALAL']],
    match: 91
  }, {
    id: 'p3',
    image: '../../assets/demo/p3.jpg',
    supplier: 'Yilan Orchard Export',
    title: 'Frozen Pineapple Chunks, Bulk Pack',
    price: 'US$ 1.95 / kg',
    source: 'taiwantrade.com',
    badges: [['neutral', 'FDA'], ['green', 'GAP']],
    match: 88
  }],
  suppliers: [{
    id: 's1',
    logo: '../../assets/demo/m1.png',
    name: 'Acme Foods Industrial Co., Ltd.',
    country: 'Taichung, Taiwan',
    certs: [['neutral', 'ISO 9001'], ['green', 'HACCP'], ['neutral', 'FDA']],
    match: 96
  }, {
    id: 's2',
    logo: '../../assets/demo/m2.png',
    name: 'Formosa Precision Mfg.',
    country: 'Tainan, Taiwan',
    certs: [['blue', 'CE'], ['neutral', 'ISO 14001']],
    match: 92
  }, {
    id: 's3',
    logo: '../../assets/demo/m3.png',
    name: 'Da Lin Frozen Foods',
    country: 'Kaohsiung, Taiwan',
    certs: [['neutral', 'ISO 22000'], ['green', 'Organic']],
    match: 89
  }, {
    id: 's4',
    logo: '../../assets/demo/m4.png',
    name: 'Yilan Orchard Export Ltd.',
    country: 'Yilan, Taiwan',
    certs: [['neutral', 'GAP'], ['neutral', 'HALAL']],
    match: 85
  }],
  prompts: [['Locate manufacturers to produce ', {
    slot: 'quantity'
  }, ' units of ', {
    slot: 'custom product description'
  }, '.'], ['Analyze current market trends in ', {
    slot: 'product category'
  }, '.'], ['Identify the best-matching ', {
    slot: 'product type'
  }, ' based on ', {
    slot: 'price, style, etc.'
  }, '.']],
  cases: [{
    tag: 'Product search',
    con: 'Frozen Passion Fruit Concentrate.',
    pic: '../../assets/demo/p4.jpg'
  }, {
    tag: 'Supplier search',
    con: 'Seeking ISO 13485 certified medical device manufacturers.',
    pic: '../../assets/demo/p5.jpg'
  }, {
    tag: 'Product search',
    con: 'Inquiry for Mountain Bike (MTB) Tires.',
    pic: '../../assets/demo/p6.jpg'
  }]
};
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/astra/data.js", error: String((e && e.message) || e) }); }

__ds_ns.ChatBubble = __ds_scope.ChatBubble;

__ds_ns.ComposerBar = __ds_scope.ComposerBar;

__ds_ns.PromptTemplate = __ds_scope.PromptTemplate;

__ds_ns.SidebarNav = __ds_scope.SidebarNav;

__ds_ns.ProductCard = __ds_scope.ProductCard;

__ds_ns.SupplierCard = __ds_scope.SupplierCard;

__ds_ns.Avatar = __ds_scope.Avatar;

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.Tag = __ds_scope.Tag;

__ds_ns.Notice = __ds_scope.Notice;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Checkbox = __ds_scope.Checkbox;

__ds_ns.IconButton = __ds_scope.IconButton;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.Radio = __ds_scope.Radio;

__ds_ns.Select = __ds_scope.Select;

__ds_ns.Switch = __ds_scope.Switch;

__ds_ns.Textarea = __ds_scope.Textarea;

__ds_ns.Tabs = __ds_scope.Tabs;

})();
