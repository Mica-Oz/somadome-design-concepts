/* @ds-bundle: {"format":4,"namespace":"SomadomeDesignSystem_c7f404","components":[{"name":"Bloom","sourcePath":"components/brand/Bloom.jsx"},{"name":"CoBrandLockup","sourcePath":"components/brand/CoBrandLockup.jsx"},{"name":"Wordmark","sourcePath":"components/brand/Wordmark.jsx"},{"name":"Eyebrow","sourcePath":"components/content/Eyebrow.jsx"},{"name":"PressStrip","sourcePath":"components/content/PressStrip.jsx"},{"name":"Testimonial","sourcePath":"components/content/Testimonial.jsx"},{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"Input","sourcePath":"components/core/Input.jsx"},{"name":"FAMILY_COLORS","sourcePath":"components/session/FamilyLabel.jsx"},{"name":"FamilyLabel","sourcePath":"components/session/FamilyLabel.jsx"},{"name":"SessionCard","sourcePath":"components/session/SessionCard.jsx"}],"sourceHashes":{"components/brand/Bloom.jsx":"528b19f99385","components/brand/CoBrandLockup.jsx":"413e13f8cd12","components/brand/Wordmark.jsx":"1eb3673664ca","components/content/Eyebrow.jsx":"f873f309e89f","components/content/PressStrip.jsx":"ef0523ab94d1","components/content/Testimonial.jsx":"a155bd880987","components/core/Button.jsx":"8561fbd58221","components/core/Input.jsx":"2fdccd07ce71","components/session/FamilyLabel.jsx":"54007fcb2373","components/session/SessionCard.jsx":"3206c373945e","ui_kits/session-app/SessionList.jsx":"ee8f134fc6e2","ui_kits/session-app/SessionPlayer.jsx":"92a2c9011b8e","ui_kits/session-app/sessions.js":"c1dfdaae6825","ui_kits/website/Chrome.jsx":"2b6b907812bb","ui_kits/website/GuestScreen.jsx":"a38f0e96eea7","ui_kits/website/HomeScreen.jsx":"a3bc8320a386","ui_kits/website/OperatorScreen.jsx":"33e97a9599a3","ui_kits/website/ScienceScreen.jsx":"f5a1abf11d87"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.SomadomeDesignSystem_c7f404 = window.SomadomeDesignSystem_c7f404 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/brand/Bloom.jsx
try { (() => {
const TINTS = {
  purple: 'rgba(42,26,94,.95)',
  magenta: 'rgba(238,61,150,.30)',
  cyan: 'rgba(95,211,230,.24)',
  calm: 'rgba(201,169,245,.26)',
  restored: 'rgba(142,134,232,.28)'
};
function Bloom({
  tint = 'purple',
  size = 720,
  x = '50%',
  y = '50%',
  breathe = true,
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    "aria-hidden": "true",
    style: {
      position: 'absolute',
      left: x,
      top: y,
      width: size,
      height: size,
      transform: 'translate(-50%,-50%)',
      pointerEvents: 'none',
      background: 'radial-gradient(closest-side,' + TINTS[tint] + ',transparent)',
      animation: breathe ? 'soma-breathe var(--motion-breathe) var(--ease-light) infinite' : 'none',
      ...style
    }
  });
}
Object.assign(__ds_scope, { Bloom });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/brand/Bloom.jsx", error: String((e && e.message) || e) }); }

// components/brand/Wordmark.jsx
try { (() => {
const FILES = {
  primary: 'logo-wordmark-white.png',
  tagline: 'logo-tagline-white.png',
  mono: 'logo-mono-dark.png'
};
const RATIO = {
  primary: 194 / 1490,
  tagline: 303 / 1449,
  mono: 194 / 1490
};
function Wordmark({
  variant = 'primary',
  width = 160,
  assetsBase = 'assets/',
  style
}) {
  const w = Math.max(96, width);
  return /*#__PURE__*/React.createElement("img", {
    src: assetsBase + FILES[variant],
    alt: "Somadome",
    width: w,
    height: Math.round(w * RATIO[variant]),
    style: {
      display: 'block',
      ...style
    }
  });
}
Object.assign(__ds_scope, { Wordmark });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/brand/Wordmark.jsx", error: String((e && e.message) || e) }); }

// components/brand/CoBrandLockup.jsx
try { (() => {
function CoBrandLockup({
  partner,
  partnerSrc,
  width = 160,
  assetsBase = 'assets/',
  style
}) {
  const h = Math.round(width * 194 / 1490);
  const x = Math.round(h * 0.46);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: x * 2,
      ...style
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Wordmark, {
    width: width,
    assetsBase: assetsBase
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      width: 1,
      height: x * 1.6,
      background: 'var(--color-border-strong)',
      flex: 'none'
    }
  }), partnerSrc ? /*#__PURE__*/React.createElement("img", {
    src: partnerSrc,
    alt: partner,
    style: {
      height: h,
      display: 'block'
    }
  }) : /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 13,
      letterSpacing: '0.16em',
      textTransform: 'lowercase',
      color: 'var(--color-text-muted)',
      border: '1px dashed var(--color-border-strong)',
      padding: '6px 12px'
    }
  }, partner || 'partner mark'));
}
Object.assign(__ds_scope, { CoBrandLockup });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/brand/CoBrandLockup.jsx", error: String((e && e.message) || e) }); }

// components/content/Eyebrow.jsx
try { (() => {
function Eyebrow({
  children,
  wide = false,
  color = 'var(--color-text-muted)',
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 11,
      lineHeight: 1.4,
      letterSpacing: wide ? '0.24em' : '0.16em',
      color,
      ...style
    }
  }, children);
}
Object.assign(__ds_scope, { Eyebrow });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/Eyebrow.jsx", error: String((e && e.message) || e) }); }

// components/content/PressStrip.jsx
try { (() => {
const DEFAULT = ['Forbes', 'CNET', 'NYLON', 'SELF', 'AFAR', 'Business Insider', 'LA Confidential'];
function PressStrip({
  label = 'As featured in',
  outlets = DEFAULT,
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexWrap: 'wrap',
      alignItems: 'center',
      columnGap: 32,
      rowGap: 12,
      padding: '24px 0',
      borderTop: '1px solid var(--color-hairline)',
      borderBottom: '1px solid var(--color-hairline)',
      ...style
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 11,
      letterSpacing: '0.2em',
      color: 'var(--color-text-muted)'
    }
  }, label), outlets.map(o => /*#__PURE__*/React.createElement("span", {
    key: o,
    style: {
      fontFamily: 'var(--font-headline)',
      fontWeight: 400,
      fontSize: 20,
      color: 'var(--color-text-body)'
    }
  }, o)));
}
Object.assign(__ds_scope, { PressStrip });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/PressStrip.jsx", error: String((e && e.message) || e) }); }

// components/content/Testimonial.jsx
try { (() => {
function Testimonial({
  quote,
  name,
  source,
  style
}) {
  return /*#__PURE__*/React.createElement("figure", {
    style: {
      margin: 0,
      display: 'flex',
      flexDirection: 'column',
      gap: 16,
      paddingTop: 24,
      borderTop: '1px solid var(--color-hairline)',
      ...style
    }
  }, /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      fontFamily: 'var(--font-headline)',
      fontWeight: 300,
      fontSize: 48,
      lineHeight: 0.6,
      color: 'var(--color-accent)',
      height: 20
    }
  }, "\u201C"), /*#__PURE__*/React.createElement("blockquote", {
    style: {
      margin: 0,
      fontFamily: 'var(--font-headline)',
      fontWeight: 300,
      fontSize: 28,
      lineHeight: 1.32,
      color: 'var(--color-text-primary)',
      textWrap: 'pretty'
    }
  }, quote), /*#__PURE__*/React.createElement("figcaption", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 13,
      lineHeight: 1.55,
      color: 'var(--color-text-muted)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--color-text-body)',
      fontWeight: 700
    }
  }, name), source ? ', ' + source : ''));
}
Object.assign(__ds_scope, { Testimonial });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/Testimonial.jsx", error: String((e && e.message) || e) }); }

// components/core/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const sizes = {
  md: {
    minHeight: 44,
    padding: '12px 24px',
    fontSize: 15
  },
  lg: {
    minHeight: 52,
    padding: '14px 32px',
    fontSize: 16
  }
};
function Button({
  variant = 'primary',
  size = 'md',
  disabled = false,
  children,
  onClick,
  type = 'button',
  style,
  ...rest
}) {
  const [pressed, setPressed] = React.useState(false);
  const [hover, setHover] = React.useState(false);
  const s = sizes[size] || sizes.md;
  const base = {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
    minHeight: s.minHeight,
    padding: variant === 'text' ? '12px 0' : s.padding,
    fontFamily: 'var(--font-body)',
    fontWeight: 700,
    fontSize: s.fontSize,
    lineHeight: 1.2,
    borderRadius: 0,
    border: '1px solid transparent',
    cursor: disabled ? 'not-allowed' : 'pointer',
    transition: 'background-color var(--motion-quick) var(--ease-light), border-color var(--motion-quick) var(--ease-light), color var(--motion-quick) var(--ease-light)',
    textDecoration: 'none',
    whiteSpace: 'nowrap'
  };
  const v = {
    primary: {
      background: pressed ? 'var(--color-accent-pressed)' : hover ? '#F0529F' : 'var(--color-accent)',
      color: '#fff'
    },
    guest: {
      background: hover ? 'rgba(95,211,230,.08)' : 'transparent',
      color: 'var(--color-guest)',
      borderColor: 'var(--color-guest)'
    },
    secondary: {
      background: hover ? 'var(--color-surface-raised)' : 'transparent',
      color: 'var(--color-text-primary)',
      borderColor: hover ? 'var(--color-text-muted)' : 'var(--color-border-strong)'
    },
    text: {
      background: 'transparent',
      color: hover ? 'var(--color-text-primary)' : 'var(--color-text-body)',
      borderColor: 'transparent',
      textDecoration: 'underline',
      textUnderlineOffset: 4,
      textDecorationColor: 'var(--color-border-strong)'
    }
  }[variant];
  const dis = disabled ? {
    background: variant === 'text' ? 'transparent' : 'var(--color-surface-raised)',
    color: 'var(--color-text-faint)',
    borderColor: variant === 'text' ? 'transparent' : 'var(--color-hairline)'
  } : {};
  return /*#__PURE__*/React.createElement("button", _extends({
    type: type,
    disabled: disabled,
    onClick: onClick,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => {
      setHover(false);
      setPressed(false);
    },
    onMouseDown: () => setPressed(true),
    onMouseUp: () => setPressed(false),
    style: {
      ...base,
      ...v,
      ...dis,
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/core/Input.jsx
try { (() => {
function Input({
  label,
  placeholder,
  value,
  defaultValue,
  onChange,
  type = 'text',
  hint,
  error,
  disabled = false,
  id,
  style
}) {
  const [focus, setFocus] = React.useState(false);
  const fid = id || (label ? 'in-' + label.toLowerCase().replace(/\s+/g, '-') : undefined);
  return /*#__PURE__*/React.createElement("label", {
    htmlFor: fid,
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 8,
      fontFamily: 'var(--font-body)',
      ...style
    }
  }, label && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 13,
      lineHeight: 1.55,
      color: 'var(--color-text-muted)'
    }
  }, label), /*#__PURE__*/React.createElement("input", {
    id: fid,
    type: type,
    placeholder: placeholder,
    value: value,
    defaultValue: defaultValue,
    onChange: onChange,
    disabled: disabled,
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false),
    style: {
      minHeight: 44,
      padding: '0 12px',
      fontFamily: 'var(--font-body)',
      fontSize: 15,
      color: 'var(--color-text-primary)',
      background: disabled ? 'var(--color-ground)' : 'var(--color-surface)',
      borderRadius: 0,
      border: '1px solid ' + (error ? 'var(--color-accent)' : focus ? 'var(--color-guest)' : 'var(--color-border-strong)'),
      outline: focus ? '2px solid var(--color-guest)' : 'none',
      outlineOffset: 2,
      transition: 'border-color var(--motion-quick) var(--ease-light)'
    }
  }), (error || hint) && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 13,
      lineHeight: 1.55,
      color: error ? 'var(--color-accent)' : 'var(--color-text-muted)'
    }
  }, error || hint));
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Input.jsx", error: String((e && e.message) || e) }); }

// components/session/FamilyLabel.jsx
try { (() => {
const FAMILY_COLORS = {
  calm: 'var(--color-family-calm)',
  sharp: 'var(--color-family-sharp)',
  restored: 'var(--color-family-restored)',
  direction: 'var(--color-family-direction)'
};
function FamilyLabel({
  family = 'calm',
  style
}) {
  return /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 8,
      fontFamily: 'var(--font-body)',
      fontSize: 11,
      lineHeight: 1.4,
      letterSpacing: '0.16em',
      textTransform: 'lowercase',
      color: 'var(--color-text-muted)',
      ...style
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 7,
      height: 7,
      borderRadius: 9999,
      background: FAMILY_COLORS[family],
      flex: 'none'
    }
  }), family);
}
Object.assign(__ds_scope, { FAMILY_COLORS, FamilyLabel });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/session/FamilyLabel.jsx", error: String((e && e.message) || e) }); }

// components/session/SessionCard.jsx
try { (() => {
function SessionCard({
  family = 'calm',
  name,
  duration = '20 min',
  modality = 'light and sound',
  selected = false,
  onClick,
  style
}) {
  const [hover, setHover] = React.useState(false);
  return /*#__PURE__*/React.createElement("div", {
    role: onClick ? 'button' : undefined,
    tabIndex: onClick ? 0 : undefined,
    onClick: onClick,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 8,
      padding: 16,
      minHeight: 44,
      boxSizing: 'border-box',
      background: selected || hover ? 'var(--color-surface-raised)' : 'var(--color-surface)',
      border: '1px solid ' + (selected ? __ds_scope.FAMILY_COLORS[family] : 'var(--color-hairline)'),
      cursor: onClick ? 'pointer' : 'default',
      transition: 'background-color var(--motion-quick) var(--ease-light), border-color var(--motion-quick) var(--ease-light)',
      ...style
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.FamilyLabel, {
    family: family
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-headline)',
      fontWeight: 700,
      fontSize: 28,
      lineHeight: 1.1,
      color: 'var(--color-text-primary)'
    }
  }, name), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 13,
      lineHeight: 1.55,
      color: 'var(--color-text-muted)'
    }
  }, duration, " \xB7 ", modality));
}
Object.assign(__ds_scope, { SessionCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/session/SessionCard.jsx", error: String((e && e.message) || e) }); }

// ui_kits/session-app/SessionList.jsx
try { (() => {
const {
  SessionCard,
  FamilyLabel,
  Button,
  Wordmark,
  Eyebrow
} = window.SomadomeDesignSystem_c7f404;
function SessionList({
  onStart
}) {
  const fams = Object.keys(window.SOMA_SESSIONS);
  const [fam, setFam] = React.useState('all');
  const [sel, setSel] = React.useState(null);
  const list = fams.filter(f => fam === 'all' || f === fam).flatMap(f => window.SOMA_SESSIONS[f].names.map(n => ({
    family: f,
    name: n
  })));
  const tab = (id, label) => /*#__PURE__*/React.createElement("button", {
    key: id,
    onClick: () => setFam(id),
    style: {
      minHeight: 44,
      padding: '0 16px',
      background: 'transparent',
      border: 0,
      borderBottom: '1px solid ' + (fam === id ? '#fff' : 'transparent'),
      color: fam === id ? '#fff' : 'var(--color-text-muted)',
      fontFamily: 'var(--font-body)',
      fontSize: 13,
      cursor: 'pointer',
      display: 'flex',
      alignItems: 'center',
      gap: 8
    }
  }, id !== 'all' && /*#__PURE__*/React.createElement("i", {
    style: {
      width: 7,
      height: 7,
      borderRadius: 9999,
      background: window.SOMA_SESSIONS[id].hex
    }
  }), label);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      height: '100%'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      padding: '24px 32px',
      borderBottom: '1px solid var(--color-hairline)'
    }
  }, /*#__PURE__*/React.createElement(Wordmark, {
    width: 120,
    assetsBase: "../../assets/"
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      marginLeft: 'auto',
      fontSize: 13,
      color: 'var(--color-text-muted)'
    }
  }, "Choose your program")), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '32px 32px 0'
    }
  }, /*#__PURE__*/React.createElement("h1", {
    style: {
      margin: 0,
      fontFamily: 'var(--font-headline)',
      fontWeight: 700,
      fontSize: 48,
      lineHeight: 1,
      color: '#fff'
    }
  }, "What do you want from the next twenty minutes?"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 4,
      marginTop: 24,
      borderBottom: '1px solid var(--color-hairline)'
    }
  }, tab('all', 'All twenty'), fams.map(f => tab(f, f)))), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minHeight: 0,
      overflowY: 'auto',
      overflowX: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '24px 32px',
      display: 'grid',
      gridTemplateColumns: 'repeat(4,minmax(0,1fr))',
      gridAutoRows: 'max-content',
      gap: 16
    }
  }, list.map(s => /*#__PURE__*/React.createElement(SessionCard, {
    key: s.name,
    family: s.family,
    name: s.name,
    modality: "light and sound",
    selected: sel && sel.name === s.name,
    onClick: () => setSel(s)
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 16,
      padding: '16px 32px',
      borderTop: '1px solid var(--color-hairline)',
      background: 'var(--color-surface)'
    }
  }, sel ? /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(FamilyLabel, {
    family: sel.family
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-headline)',
      fontWeight: 700,
      fontSize: 22,
      color: '#fff'
    }
  }, sel.name), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 13,
      color: 'var(--color-text-muted)'
    }
  }, "20 min \xB7 light and sound")) : /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 13,
      color: 'var(--color-text-muted)'
    }
  }, "Select a session to begin."), /*#__PURE__*/React.createElement(Button, {
    disabled: !sel,
    onClick: () => onStart(sel),
    style: {
      marginLeft: 'auto'
    }
  }, "Begin session")));
}
window.SessionList = SessionList;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/session-app/SessionList.jsx", error: String((e && e.message) || e) }); }

// ui_kits/session-app/SessionPlayer.jsx
try { (() => {
const {
  Button,
  FamilyLabel
} = window.SomadomeDesignSystem_c7f404;
function SessionPlayer({
  session,
  onEnd
}) {
  const hex = window.SOMA_SESSIONS[session.family].hex;
  const [t, setT] = React.useState(0);
  const [on, setOn] = React.useState(false);
  React.useEffect(() => {
    const a = setTimeout(() => setOn(true), 50);
    const i = setInterval(() => setT(x => Math.min(1200, x + 1)), 1000);
    return () => {
      clearTimeout(a);
      clearInterval(i);
    };
  }, []);
  const left = 1200 - t,
    mm = Math.floor(left / 60),
    ss = String(left % 60).padStart(2, '0');
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      height: '100%',
      overflow: 'hidden',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      gap: 16
    }
  }, /*#__PURE__*/React.createElement("div", {
    "aria-hidden": "true",
    style: {
      position: 'absolute',
      left: '50%',
      top: '50%',
      width: 900,
      height: 900,
      transform: 'translate(-50%,-50%)',
      background: 'radial-gradient(closest-side,' + hex + '55, transparent)',
      opacity: on ? 1 : 0,
      transition: 'opacity var(--motion-session) var(--ease-light)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: '100%',
      height: '100%',
      background: 'radial-gradient(closest-side,' + hex + '33, transparent)',
      animation: 'soma-breathe var(--motion-breathe) var(--ease-light) infinite'
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement(FamilyLabel, {
    family: session.family
  }), /*#__PURE__*/React.createElement("h1", {
    style: {
      margin: 0,
      fontFamily: 'var(--font-headline)',
      fontWeight: 700,
      fontSize: 82,
      lineHeight: .96,
      color: '#fff'
    }
  }, session.name), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: 15,
      color: 'var(--color-text-body)'
    }
  }, window.SOMA_SESSIONS[session.family].blurb), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 24,
      fontFamily: 'var(--font-headline)',
      fontWeight: 300,
      fontSize: 38,
      color: '#fff'
    }
  }, mm, ":", ss), /*#__PURE__*/React.createElement("div", {
    style: {
      width: 280,
      height: 1,
      background: 'var(--color-hairline)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      height: 1,
      width: t / 1200 * 100 + '%',
      background: hex,
      transition: 'width 1s linear'
    }
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      bottom: 32,
      display: 'flex',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    onClick: onEnd
  }, "End session")));
}
window.SessionPlayer = SessionPlayer;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/session-app/SessionPlayer.jsx", error: String((e && e.message) || e) }); }

// ui_kits/session-app/sessions.js
try { (() => {
window.SOMA_SESSIONS = {
  calm: {
    hex: '#C9A9F5',
    blurb: 'Settling, opening, letting go',
    names: ['Ascend', 'Bliss', 'Confidence', 'Aspire', 'Clarity']
  },
  sharp: {
    hex: '#5FD3E6',
    blurb: 'Alert, clear, ready',
    names: ['Motivate', 'Focus', 'Succeed', 'Create', 'Overcome']
  },
  restored: {
    hex: '#8E86E8',
    blurb: 'Recovering, repairing, resting',
    names: ['Fit', 'Heal', 'Recharge', 'Relax', 'Snooze']
  },
  direction: {
    hex: '#EE3D96',
    blurb: 'Intent, drive, forward',
    names: ['Perform', 'Manifest', 'Reclaim', 'Love', 'Prosper']
  }
};
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/session-app/sessions.js", error: String((e && e.message) || e) }); }

// ui_kits/website/Chrome.jsx
try { (() => {
const {
  Wordmark,
  Button
} = window.SomadomeDesignSystem_c7f404;
const A = '../../assets/';
const wsWrap = {
  maxWidth: 1200,
  margin: '0 auto',
  padding: '0 48px',
  boxSizing: 'border-box'
};
function SiteHeader({
  page,
  go
}) {
  const link = (id, label) => /*#__PURE__*/React.createElement("a", {
    onClick: () => go(id),
    style: {
      cursor: 'pointer',
      fontSize: 13,
      color: page === id ? '#fff' : 'var(--color-text-muted)',
      textDecoration: 'none',
      whiteSpace: 'nowrap',
      borderBottom: page === id ? '1px solid var(--color-text-muted)' : '1px solid transparent',
      paddingBottom: 4
    }
  }, label);
  return /*#__PURE__*/React.createElement("header", {
    style: {
      position: 'sticky',
      top: 0,
      zIndex: 10,
      background: 'rgba(11,14,26,.86)',
      backdropFilter: 'blur(12px)',
      borderBottom: '1px solid var(--color-hairline)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      ...wsWrap,
      height: 72,
      display: 'flex',
      alignItems: 'center',
      gap: 32
    }
  }, /*#__PURE__*/React.createElement("a", {
    onClick: () => go('home'),
    style: {
      cursor: 'pointer'
    }
  }, /*#__PURE__*/React.createElement(Wordmark, {
    width: 132,
    assetsBase: A
  })), /*#__PURE__*/React.createElement("nav", {
    style: {
      display: 'flex',
      gap: 28,
      marginLeft: 16
    }
  }, link('home', 'The experience'), link('operators', 'For operators'), link('science', 'The science')), /*#__PURE__*/React.createElement("div", {
    style: {
      marginLeft: 'auto',
      display: 'flex',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "guest",
    onClick: () => go('find')
  }, "Find a dome"), /*#__PURE__*/React.createElement(Button, {
    onClick: () => go('operators')
  }, "Get a dome"))));
}
function SiteFooter({
  go
}) {
  return /*#__PURE__*/React.createElement("footer", {
    style: {
      borderTop: '1px solid var(--color-hairline)',
      padding: '48px 0 32px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      ...wsWrap,
      display: 'grid',
      gridTemplateColumns: '2fr 1fr 1fr',
      gap: 32
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 16
    }
  }, /*#__PURE__*/React.createElement(Wordmark, {
    width: 132,
    assetsBase: A
  }), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: 13,
      lineHeight: 1.55,
      color: 'var(--color-text-muted)',
      maxWidth: 380
    }
  }, "Somadome is the world's first immersive wellness dome, a twenty-minute, self-guided session of light, sound, and stillness, installed in spas, workplaces, and homes worldwide.")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 8,
      fontSize: 13
    }
  }, /*#__PURE__*/React.createElement("a", {
    onClick: () => go('find'),
    style: {
      cursor: 'pointer',
      color: 'var(--color-text-body)',
      textDecoration: 'none'
    }
  }, "Find a dome"), /*#__PURE__*/React.createElement("a", {
    onClick: () => go('operators'),
    style: {
      cursor: 'pointer',
      color: 'var(--color-text-body)',
      textDecoration: 'none'
    }
  }, "Get a dome"), /*#__PURE__*/React.createElement("a", {
    onClick: () => go('science'),
    style: {
      cursor: 'pointer',
      color: 'var(--color-text-body)',
      textDecoration: 'none'
    }
  }, "The science")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 8,
      fontSize: 13,
      color: 'var(--color-text-muted)'
    }
  }, /*#__PURE__*/React.createElement("span", null, "Press and image requests"), /*#__PURE__*/React.createElement("a", {
    href: "mailto:press@somadome.com"
  }, "press@somadome.com"))), /*#__PURE__*/React.createElement("div", {
    style: {
      ...wsWrap,
      marginTop: 40,
      fontSize: 11,
      letterSpacing: '0.16em',
      color: 'var(--color-text-faint)'
    }
  }, "somadome\xAE is a registered trademark \xB7 somadome.com"));
}
Object.assign(window, {
  SiteHeader,
  SiteFooter,
  wsWrap,
  A
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Chrome.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/GuestScreen.jsx
try { (() => {
const {
  Button,
  Input,
  Eyebrow,
  Bloom,
  FamilyLabel
} = window.SomadomeDesignSystem_c7f404;
function GuestScreen({
  go
}) {
  const [q, setQ] = React.useState('');
  const hosts = [['Somadome at the Ojai Valley Inn', 'Wellness and spa'], ['Somadome at Adobe', 'Corporate and workplace'], ['Somadome at the Sports Academy', 'Sports and performance'], ['Somadome at Sweat Equity', 'Sports and performance']];
  const shown = hosts.filter(h => h[0].toLowerCase().includes(q.toLowerCase()));
  return /*#__PURE__*/React.createElement("main", null, /*#__PURE__*/React.createElement("section", {
    style: {
      position: 'relative',
      overflow: 'hidden',
      borderBottom: '1px solid var(--color-hairline)'
    }
  }, /*#__PURE__*/React.createElement(Bloom, {
    tint: "cyan",
    size: 800,
    x: "80%",
    y: "40%"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      ...wsWrap,
      position: 'relative',
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 48,
      alignItems: 'center',
      padding: '80px 48px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 24
    }
  }, /*#__PURE__*/React.createElement(Eyebrow, {
    wide: true,
    color: "var(--color-guest)"
  }, "find a dome"), /*#__PURE__*/React.createElement("h1", {
    style: {
      margin: 0,
      fontFamily: 'var(--font-headline)',
      fontWeight: 700,
      fontSize: 48,
      lineHeight: 1,
      color: '#fff'
    }
  }, "Activate your higher self."), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: 17,
      lineHeight: 1.65,
      color: 'var(--color-text-body)',
      maxWidth: 480
    }
  }, "Twenty minutes of light, sound, and stillness. Zero skill, zero setup, total privacy."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 12,
      alignItems: 'flex-end',
      maxWidth: 480
    }
  }, /*#__PURE__*/React.createElement(Input, {
    label: "Search hosts",
    placeholder: "Partner or city",
    value: q,
    onChange: e => setQ(e.target.value),
    style: {
      flex: 1
    }
  }))), /*#__PURE__*/React.createElement("img", {
    src: A + 'photo-in-the-world.jpg',
    alt: "A Somadome at dusk",
    style: {
      width: '100%',
      display: 'block',
      border: '1px solid var(--color-hairline)'
    }
  }))), /*#__PURE__*/React.createElement("section", {
    style: {
      ...wsWrap,
      padding: '48px 48px 96px'
    }
  }, /*#__PURE__*/React.createElement(Eyebrow, null, "join a growing network of hosts"), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 16
    }
  }, shown.map(([n, v]) => /*#__PURE__*/React.createElement("div", {
    key: n,
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 240px auto',
      alignItems: 'center',
      gap: 24,
      padding: '20px 0',
      borderTop: '1px solid var(--color-hairline)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-headline)',
      fontWeight: 700,
      fontSize: 28,
      lineHeight: 1.1,
      color: '#fff'
    }
  }, n), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 13,
      color: 'var(--color-text-muted)'
    }
  }, v), /*#__PURE__*/React.createElement(Button, {
    variant: "guest"
  }, "View host"))), shown.length === 0 && /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 15,
      color: 'var(--color-text-muted)',
      borderTop: '1px solid var(--color-hairline)',
      paddingTop: 20
    }
  }, "No hosts match that search yet.")), /*#__PURE__*/React.createElement("p", {
    style: {
      marginTop: 32,
      fontSize: 13,
      color: 'var(--color-text-faint)'
    }
  }, "Illustrative host list built from partners named in the brand kit. Locations and booking are not part of the source material.")));
}
window.GuestScreen = GuestScreen;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/GuestScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/HomeScreen.jsx
try { (() => {
const {
  Button,
  Bloom,
  Eyebrow,
  Testimonial,
  PressStrip
} = window.SomadomeDesignSystem_c7f404;
function HomeScreen({
  go
}) {
  const props3 = [['For the guest', 'Gives me twenty minutes that actually shift my state.', 'You step inside and the noise falls away. Light softens, sound settles you below thought, and twenty minutes later you step out lighter than you went in.'], ['For the space', 'Makes my space the one people remember.', 'A premium object that elevates a beautiful space. Photogenic by design, and a decade of press coverage to draw on.'], ['For the operator', 'Pays for itself and runs without me.', 'One plug. No dedicated room. No staff on the floor. Sessions sell for $25 to $40, and most partners reach payback inside eighteen months.']];
  return /*#__PURE__*/React.createElement("main", null, /*#__PURE__*/React.createElement("section", {
    style: {
      position: 'relative',
      overflow: 'hidden',
      minHeight: 640,
      borderBottom: '1px solid var(--color-hairline)'
    }
  }, /*#__PURE__*/React.createElement(Bloom, {
    tint: "purple",
    size: 1100,
    x: "68%",
    y: "46%"
  }), /*#__PURE__*/React.createElement(Bloom, {
    tint: "magenta",
    size: 520,
    x: "72%",
    y: "40%"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      ...wsWrap,
      position: 'relative',
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      alignItems: 'center',
      gap: 48,
      minHeight: 640
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 24,
      animation: 'soma-rise 600ms var(--ease-light) both'
    }
  }, /*#__PURE__*/React.createElement(Eyebrow, {
    wide: true
  }, "the world's first immersive wellness dome"), /*#__PURE__*/React.createElement("h1", {
    style: {
      margin: 0,
      fontFamily: 'var(--font-headline)',
      fontWeight: 700,
      fontSize: 82,
      lineHeight: 0.96,
      color: '#fff'
    }
  }, "20 minutes.", /*#__PURE__*/React.createElement("br", null), "Profound shift."), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: 17,
      lineHeight: 1.65,
      color: 'var(--color-text-body)',
      maxWidth: 440
    }
  }, "No practice required. No clearing your mind. Just step inside, choose your program, and let the dome guide you."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 12,
      marginTop: 8
    }
  }, /*#__PURE__*/React.createElement(Button, {
    size: "lg",
    onClick: () => go('operators')
  }, "Get a dome"), /*#__PURE__*/React.createElement(Button, {
    size: "lg",
    variant: "guest",
    onClick: () => go('find')
  }, "Find a dome"))), /*#__PURE__*/React.createElement("img", {
    src: A + 'dome-object-open.png',
    alt: "The Somadome, lit",
    style: {
      width: '100%',
      maxWidth: 560,
      justifySelf: 'end'
    }
  }))), /*#__PURE__*/React.createElement("section", {
    style: {
      ...wsWrap,
      padding: '96px 48px'
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: '0 0 48px',
      fontFamily: 'var(--font-headline)',
      fontWeight: 300,
      fontSize: 28,
      lineHeight: 1.32,
      color: '#fff',
      maxWidth: 720
    }
  }, "A twenty-minute, self-guided experience of light, sound, and stillness that shifts your state."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3,1fr)',
      gap: 24
    }
  }, props3.map(([e, t, b]) => /*#__PURE__*/React.createElement("div", {
    key: e,
    style: {
      borderTop: '1px solid var(--color-hairline)',
      paddingTop: 24,
      display: 'flex',
      flexDirection: 'column',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement(Eyebrow, null, e.toLowerCase()), /*#__PURE__*/React.createElement("h3", {
    style: {
      margin: 0,
      fontFamily: 'var(--font-headline)',
      fontWeight: 700,
      fontSize: 28,
      lineHeight: 1.1,
      color: '#fff'
    }
  }, t), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: 15,
      lineHeight: 1.65,
      color: 'var(--color-text-body)'
    }
  }, b))))), /*#__PURE__*/React.createElement("section", {
    style: {
      position: 'relative',
      overflow: 'hidden',
      background: 'var(--color-bloom)'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: A + 'photo-in-place.jpg',
    alt: "Somadome installed",
    style: {
      width: '100%',
      height: 520,
      objectFit: 'cover',
      display: 'block',
      opacity: .92
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: 0,
      right: 0,
      bottom: 0,
      height: 200,
      background: 'linear-gradient(transparent, var(--color-ground))'
    }
  })), /*#__PURE__*/React.createElement("section", {
    style: {
      ...wsWrap,
      padding: '48px 48px 96px',
      display: 'flex',
      flexDirection: 'column',
      gap: 48
    }
  }, /*#__PURE__*/React.createElement(PressStrip, {
    outlets: ['Forbes', 'CNET', 'NYLON', 'SELF', 'AFAR', 'Business Insider', 'LA Confidential', 'Haute Living']
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3,1fr)',
      gap: 24
    }
  }, /*#__PURE__*/React.createElement(Testimonial, {
    quote: "No matter how I feel going into the dome, I pop out of that dome ready to take on the world.",
    name: "Rob Dyrdek",
    source: "entrepreneur"
  }), /*#__PURE__*/React.createElement(Testimonial, {
    quote: "The dome has been booked out for weeks at a time and everybody is blown away.",
    name: "Sara Torres",
    source: "Adobe corporate wellness lead"
  }), /*#__PURE__*/React.createElement(Testimonial, {
    quote: "It did help me push past the biggest roadblock to effective meditation, the nagging of the real world.",
    name: "Harrison Jacobs",
    source: "Business Insider"
  }))), /*#__PURE__*/React.createElement("section", {
    style: {
      position: 'relative',
      overflow: 'hidden',
      borderTop: '1px solid var(--color-hairline)'
    }
  }, /*#__PURE__*/React.createElement(Bloom, {
    tint: "purple",
    size: 900,
    x: "50%",
    y: "60%"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      ...wsWrap,
      position: 'relative',
      padding: '96px 48px',
      textAlign: 'center',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: 24
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: 0,
      fontFamily: 'var(--font-headline)',
      fontWeight: 700,
      fontSize: 48,
      lineHeight: 1,
      color: '#fff'
    }
  }, "Find your edge to help you soar."), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: 17,
      lineHeight: 1.65,
      color: 'var(--color-text-body)'
    }
  }, "Step in stressed. Step out restored."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement(Button, {
    size: "lg",
    onClick: () => go('operators')
  }, "Get a dome"), /*#__PURE__*/React.createElement(Button, {
    size: "lg",
    variant: "guest",
    onClick: () => go('find')
  }, "Find a dome")))));
}
window.HomeScreen = HomeScreen;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/HomeScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/OperatorScreen.jsx
try { (() => {
const {
  Button,
  Input,
  Eyebrow,
  Testimonial,
  Bloom
} = window.SomadomeDesignSystem_c7f404;
function OperatorScreen() {
  const [sent, setSent] = React.useState(false);
  const [vertical, setVertical] = React.useState('Wellness and spa');
  const verticals = [['Wellness and spa', 'A signature treatment that needs no therapist'], ['Hotels and hospitality', 'A wellness moment guests remember the property for'], ['Corporate and workplace', 'Visible proof the company invests in its people'], ['Sports and performance', 'Nervous-system recovery between sessions'], ['Retail and brand experience', 'Traffic, dwell time, and something worth posting'], ['Medical and clinical', 'A drug-free adjunct that survives scrutiny'], ['Residential and private', 'Twenty minutes a day, with no booking']];
  const facts = [['Session', '20 minutes, self-guided'], ['Sessions', '20, in four families'], ['Install', 'One standard outlet, no plumbing'], ['In market', 'Since 2015']];
  return /*#__PURE__*/React.createElement("main", null, /*#__PURE__*/React.createElement("section", {
    style: {
      position: 'relative',
      overflow: 'hidden',
      borderBottom: '1px solid var(--color-hairline)'
    }
  }, /*#__PURE__*/React.createElement(Bloom, {
    tint: "purple",
    size: 900,
    x: "85%",
    y: "30%"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      ...wsWrap,
      position: 'relative',
      padding: '96px 48px 64px',
      display: 'flex',
      flexDirection: 'column',
      gap: 24,
      maxWidth: 1200
    }
  }, /*#__PURE__*/React.createElement(Eyebrow, {
    wide: true
  }, "for operators"), /*#__PURE__*/React.createElement("h1", {
    style: {
      margin: 0,
      fontFamily: 'var(--font-headline)',
      fontWeight: 700,
      fontSize: 48,
      lineHeight: 1,
      color: '#fff',
      maxWidth: 720
    }
  }, "A revenue-generating amenity with a decade of proof."), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: 17,
      lineHeight: 1.65,
      color: 'var(--color-text-body)',
      maxWidth: 620
    }
  }, "One plug. No dedicated room. No staff on the floor. Sessions sell for $25 to $40, and most partners reach payback inside eighteen months."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(4,1fr)',
      gap: 24,
      marginTop: 32
    }
  }, facts.map(([k, v]) => /*#__PURE__*/React.createElement("div", {
    key: k,
    style: {
      borderTop: '1px solid var(--color-hairline)',
      paddingTop: 16
    }
  }, /*#__PURE__*/React.createElement(Eyebrow, null, k.toLowerCase()), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 8,
      fontFamily: 'var(--font-headline)',
      fontSize: 22,
      lineHeight: 1.2,
      color: '#fff'
    }
  }, v)))))), /*#__PURE__*/React.createElement("section", {
    style: {
      ...wsWrap,
      padding: '64px 48px 96px',
      display: 'grid',
      gridTemplateColumns: '1.2fr 1fr',
      gap: 64
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: '0 0 24px',
      fontFamily: 'var(--font-headline)',
      fontWeight: 700,
      fontSize: 38,
      lineHeight: 1.05,
      color: '#fff'
    }
  }, "Where it goes"), /*#__PURE__*/React.createElement("div", null, verticals.map(([v, d]) => /*#__PURE__*/React.createElement("button", {
    key: v,
    onClick: () => setVertical(v),
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1.3fr',
      gap: 16,
      width: '100%',
      textAlign: 'left',
      background: vertical === v ? 'var(--color-surface)' : 'transparent',
      border: 0,
      borderTop: '1px solid var(--color-hairline)',
      padding: '16px',
      minHeight: 44,
      cursor: 'pointer',
      fontFamily: 'var(--font-body)',
      transition: 'background-color var(--motion-quick) var(--ease-light)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 15,
      fontWeight: 700,
      color: vertical === v ? '#fff' : 'var(--color-text-body)'
    }
  }, v), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 13,
      lineHeight: 1.55,
      color: 'var(--color-text-muted)'
    }
  }, d)))), /*#__PURE__*/React.createElement(Testimonial, {
    style: {
      marginTop: 48
    },
    quote: "The dome has been booked out for weeks at a time and everybody is blown away.",
    name: "Sara Torres",
    source: "Adobe corporate wellness lead"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--color-surface)',
      border: '1px solid var(--color-hairline)',
      padding: 32,
      alignSelf: 'start',
      display: 'flex',
      flexDirection: 'column',
      gap: 16
    }
  }, sent ? /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 12,
      animation: 'soma-rise 600ms var(--ease-light) both'
    }
  }, /*#__PURE__*/React.createElement("h3", {
    style: {
      margin: 0,
      fontFamily: 'var(--font-headline)',
      fontWeight: 700,
      fontSize: 28,
      lineHeight: 1.1,
      color: '#fff'
    }
  }, "Thank you."), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: 15,
      lineHeight: 1.65,
      color: 'var(--color-text-body)'
    }
  }, "We'll be in touch about Somadome for ", vertical.toLowerCase(), ".")) : /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("h3", {
    style: {
      margin: 0,
      fontFamily: 'var(--font-headline)',
      fontWeight: 700,
      fontSize: 28,
      lineHeight: 1.1,
      color: '#fff'
    }
  }, "Get a dome"), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: 13,
      lineHeight: 1.55,
      color: 'var(--color-text-muted)'
    }
  }, "For ", vertical.toLowerCase(), "."), /*#__PURE__*/React.createElement(Input, {
    label: "Your name",
    placeholder: "Full name"
  }), /*#__PURE__*/React.createElement(Input, {
    label: "Your email",
    placeholder: "hello@somadome.com"
  }), /*#__PURE__*/React.createElement(Input, {
    label: "Property or company",
    placeholder: "Where the dome would go"
  }), /*#__PURE__*/React.createElement(Button, {
    size: "lg",
    onClick: () => setSent(true),
    style: {
      marginTop: 8
    }
  }, "Get a dome"), /*#__PURE__*/React.createElement(Button, {
    variant: "text"
  }, "Download the session guide")))));
}
window.OperatorScreen = OperatorScreen;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/OperatorScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/ScienceScreen.jsx
try { (() => {
const {
  Eyebrow,
  Bloom
} = window.SomadomeDesignSystem_c7f404;
function ScienceScreen() {
  const say = ["An NIH grant is underway with UCLA's cardiology department.", 'In a single-use survey, 92% of users surveyed reported improved mood.', 'In-house and partnership research with HealthCorps, the Sports Academy, and others.', 'A research advisory board of experts in neuroscience and colour and light therapies.'];
  return /*#__PURE__*/React.createElement("main", null, /*#__PURE__*/React.createElement("section", {
    style: {
      position: 'relative',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement(Bloom, {
    tint: "restored",
    size: 900,
    x: "20%",
    y: "30%"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      ...wsWrap,
      position: 'relative',
      padding: '96px 48px',
      display: 'grid',
      gridTemplateColumns: '1fr 1.2fr',
      gap: 64
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 24
    }
  }, /*#__PURE__*/React.createElement(Eyebrow, {
    wide: true
  }, "the science"), /*#__PURE__*/React.createElement("h1", {
    style: {
      margin: 0,
      fontFamily: 'var(--font-headline)',
      fontWeight: 700,
      fontSize: 48,
      lineHeight: 1,
      color: '#fff'
    }
  }, "Research, described precisely."), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: 17,
      lineHeight: 1.65,
      color: 'var(--color-text-body)'
    }
  }, "In-house and partnership research, plus an NIH grant underway. Light, colour, and binaural sound, as a designed sensory experience.")), /*#__PURE__*/React.createElement("div", null, say.map((s, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      display: 'grid',
      gridTemplateColumns: '48px 1fr',
      gap: 16,
      padding: '24px 0',
      borderTop: '1px solid var(--color-hairline)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-headline)',
      fontSize: 22,
      color: 'var(--color-guest)'
    }
  }, String(i + 1).padStart(2, '0')), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-headline)',
      fontWeight: 300,
      fontSize: 28,
      lineHeight: 1.32,
      color: '#fff'
    }
  }, s)))))));
}
window.ScienceScreen = ScienceScreen;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/ScienceScreen.jsx", error: String((e && e.message) || e) }); }

__ds_ns.Bloom = __ds_scope.Bloom;

__ds_ns.CoBrandLockup = __ds_scope.CoBrandLockup;

__ds_ns.Wordmark = __ds_scope.Wordmark;

__ds_ns.Eyebrow = __ds_scope.Eyebrow;

__ds_ns.PressStrip = __ds_scope.PressStrip;

__ds_ns.Testimonial = __ds_scope.Testimonial;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.FAMILY_COLORS = __ds_scope.FAMILY_COLORS;

__ds_ns.FamilyLabel = __ds_scope.FamilyLabel;

__ds_ns.SessionCard = __ds_scope.SessionCard;

})();
