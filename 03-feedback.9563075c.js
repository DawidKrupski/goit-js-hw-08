!function(){var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{};function t(e){return e&&e.__esModule?e.default:e}var n={},o={};Object.defineProperty(o,"__esModule",{value:!0}),o.default=function(e){return e&&e.constructor===Symbol?"symbol":typeof e};var r="Expected a function",i=/^\s+|\s+$/g,u=/^[-+]0x[0-9a-f]+$/i,a=/^0b[01]+$/i,f=/^0o[0-7]+$/i,l=parseInt,c="object"==typeof e&&e&&e.Object===Object&&e,d="object"==typeof self&&self&&self.Object===Object&&self,s=c||d||Function("return this")(),v=Object.prototype.toString,m=Math.max,y=Math.min,p=function(){return s.Date.now()};function g(e,t,n){var o,i,u,a,f,l,c=0,d=!1,s=!1,v=!0;if("function"!=typeof e)throw new TypeError(r);function g(t){var n=o,r=i;return o=i=void 0,c=t,a=e.apply(r,n)}function h(e){return c=e,f=setTimeout(O,t),d?g(e):a}function j(e){var n=e-l;return void 0===l||n>=t||n<0||s&&e-c>=u}function O(){var e=p();if(j(e))return w(e);f=setTimeout(O,function(e){var n=t-(e-l);return s?y(n,u-(e-c)):n}(e))}function w(e){return f=void 0,v&&o?g(e):(o=i=void 0,a)}function T(){var e=p(),n=j(e);if(o=arguments,i=this,l=e,n){if(void 0===f)return h(l);if(s)return f=setTimeout(O,t),g(l)}return void 0===f&&(f=setTimeout(O,t)),a}return t=S(t)||0,b(n)&&(d=!!n.leading,u=(s="maxWait"in n)?m(S(n.maxWait)||0,t):u,v="trailing"in n?!!n.trailing:v),T.cancel=function(){void 0!==f&&clearTimeout(f),c=0,o=l=i=f=void 0},T.flush=function(){return void 0===f?a:w(p())},T}function b(e){var n=void 0===e?"undefined":t(o)(e);return!!e&&("object"==n||"function"==n)}function S(e){if("number"==typeof e)return e;if(function(e){return"symbol"==(void 0===e?"undefined":t(o)(e))||function(e){return!!e&&"object"==typeof e}(e)&&"[object Symbol]"==v.call(e)}(e))return NaN;if(b(e)){var n="function"==typeof e.valueOf?e.valueOf():e;e=b(n)?n+"":n}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(i,"");var r=a.test(e);return r||f.test(e)?l(e.slice(2),r?2:8):u.test(e)?NaN:+e}n=function(e,t,n){var o=!0,i=!0;if("function"!=typeof e)throw new TypeError(r);return b(n)&&(o="leading"in n?!!n.leading:o,i="trailing"in n?!!n.trailing:i),g(e,t,{leading:o,maxWait:t,trailing:i})};var h=document.querySelector("form"),j=document.querySelector('[name="email"]'),O=document.querySelector('[name="message"]'),w=document.querySelector('[type="submit"]'),T=(j.value,[]);if(h.addEventListener("keyup",n((function(e){T=[j.value,O.value],localStorage.setItem("feedback-form-state",JSON.stringify(T))}),500)),0!==localStorage.length){var N=localStorage.getItem("feedback-form-state");0!==N[0].length&&(j.value=JSON.parse(N)[0]),0!==N[1].length&&(O.value=JSON.parse(N)[1])}w.addEventListener("click",(function(e){T=[j.value,O.value],e.preventDefault(),console.log(T),localStorage.removeItem("feedback-form-state"),h.reset()}))}();
//# sourceMappingURL=03-feedback.9563075c.js.map