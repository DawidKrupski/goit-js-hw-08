var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},n=/^\s+|\s+$/g,o=/^[-+]0x[0-9a-f]+$/i,r=/^0b[01]+$/i,i=/^0o[0-7]+$/i,a=parseInt,u="object"==typeof e&&e&&e.Object===Object&&e,f="object"==typeof self&&self&&self.Object===Object&&self,l=u||f||Function("return this")(),c=Object.prototype.toString,s=Math.max,d=Math.min,v=function(){return l.Date.now()};function m(e,t,n){var o,r,i,a,u,f,l=0,c=!1,m=!1,y=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function b(t){var n=o,i=r;return o=r=void 0,l=t,a=e.apply(i,n)}function S(e){return l=e,u=setTimeout(j,t),c?b(e):a}function h(e){var n=e-f;return void 0===f||n>=t||n<0||m&&e-l>=i}function j(){var e=v();if(h(e))return O(e);u=setTimeout(j,function(e){var n=t-(e-f);return m?d(n,i-(e-l)):n}(e))}function O(e){return u=void 0,y&&o?b(e):(o=r=void 0,a)}function w(){var e=v(),n=h(e);if(o=arguments,r=this,f=e,n){if(void 0===u)return S(f);if(m)return u=setTimeout(j,t),b(f)}return void 0===u&&(u=setTimeout(j,t)),a}return t=g(t)||0,p(n)&&(c=!!n.leading,i=(m="maxWait"in n)?s(g(n.maxWait)||0,t):i,y="trailing"in n?!!n.trailing:y),w.cancel=function(){void 0!==u&&clearTimeout(u),l=0,o=f=r=u=void 0},w.flush=function(){return void 0===u?a:O(v())},w}function p(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function g(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&"[object Symbol]"==c.call(e)}(e))return NaN;if(p(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=p(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(n,"");var u=r.test(e);return u||i.test(e)?a(e.slice(2),u?2:8):o.test(e)?NaN:+e}t=function(e,t,n){var o=!0,r=!0;if("function"!=typeof e)throw new TypeError("Expected a function");return p(n)&&(o="leading"in n?!!n.leading:o,r="trailing"in n?!!n.trailing:r),m(e,t,{leading:o,maxWait:t,trailing:r})};const y=document.querySelector("form"),b=document.querySelector('[name="email"]'),S=document.querySelector('[name="message"]'),h=document.querySelector('[type="submit"]');b.value;let j=[];if(y.addEventListener("keyup",t((e=>{j=[b.value,S.value],localStorage.setItem("feedback-form-state",JSON.stringify(j))}),500)),0!==localStorage.length){const e=localStorage.getItem("feedback-form-state");0!==e[0].length&&(b.value=JSON.parse(e)[0]),0!==e[1].length&&(S.value=JSON.parse(e)[1])}h.addEventListener("click",(e=>{j=[b.value,S.value],e.preventDefault(),console.log(j),localStorage.removeItem("feedback-form-state"),y.reset()}));
//# sourceMappingURL=03-feedback.a155233a.js.map
