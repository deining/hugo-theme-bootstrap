/*! For license information please see search.js.LICENSE.txt */
(()=>{var e={6432:(e,t,n)=>{"use strict";n.d(t,{Z:()=>i});var r=n(3645),s=n.n(r)()((function(e){return e[1]}));s.push([e.id,".search-results{padding:.5rem}.search-result-title{font-size:1.3rem}.search-result-title a{color:var(--bs-primary)}",""]);const i=s},3645:e=>{"use strict";e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n=e(t);return t[2]?"@media ".concat(t[2]," {").concat(n,"}"):n})).join("")},t.i=function(e,n,r){"string"==typeof e&&(e=[[null,e,""]]);var s={};if(r)for(var i=0;i<this.length;i++){var o=this[i][0];null!=o&&(s[o]=!0)}for(var c=0;c<e.length;c++){var a=[].concat(e[c]);r&&s[a[0]]||(n&&(a[2]?a[2]="".concat(n," and ").concat(a[2]):a[2]=n),t.push(a))}},t}},466:function(e){e.exports=function(){"use strict";var e=Object.prototype.toString,t=Array.isArray||function(t){return"[object Array]"===e.call(t)};function n(e){return"function"==typeof e}function r(e){return e.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g,"\\$&")}function s(e,t){return null!=e&&"object"==typeof e&&t in e}var i=RegExp.prototype.test;var o=/\S/;function c(e){return!function(e,t){return i.call(e,t)}(o,e)}var a={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;","/":"&#x2F;","`":"&#x60;","=":"&#x3D;"};var h=/\s*/,l=/\s+/,u=/\s*=/,d=/\s*\}/,f=/#|\^|\/|>|\{|&|=|!/;function p(e){this.string=e,this.tail=e,this.pos=0}function g(e,t){this.view=e,this.cache={".":this.view},this.parent=t}function m(){this.templateCache={_cache:{},set:function(e,t){this._cache[e]=t},get:function(e){return this._cache[e]},clear:function(){this._cache={}}}}p.prototype.eos=function(){return""===this.tail},p.prototype.scan=function(e){var t=this.tail.match(e);if(!t||0!==t.index)return"";var n=t[0];return this.tail=this.tail.substring(n.length),this.pos+=n.length,n},p.prototype.scanUntil=function(e){var t,n=this.tail.search(e);switch(n){case-1:t=this.tail,this.tail="";break;case 0:t="";break;default:t=this.tail.substring(0,n),this.tail=this.tail.substring(n)}return this.pos+=t.length,t},g.prototype.push=function(e){return new g(e,this)},g.prototype.lookup=function(e){var t,r,i,o=this.cache;if(o.hasOwnProperty(e))t=o[e];else{for(var c,a,h,l=this,u=!1;l;){if(e.indexOf(".")>0)for(c=l.view,a=e.split("."),h=0;null!=c&&h<a.length;)h===a.length-1&&(u=s(c,a[h])||(r=c,i=a[h],null!=r&&"object"!=typeof r&&r.hasOwnProperty&&r.hasOwnProperty(i))),c=c[a[h++]];else c=l.view[e],u=s(l.view,e);if(u){t=c;break}l=l.parent}o[e]=t}return n(t)&&(t=t.call(this.view)),t},m.prototype.clearCache=function(){void 0!==this.templateCache&&this.templateCache.clear()},m.prototype.parse=function(e,n){var s=this.templateCache,i=e+":"+(n||y.tags).join(":"),o=void 0!==s,a=o?s.get(i):void 0;return null==a&&(a=function(e,n){if(!e)return[];var s,i,o,a=!1,g=[],m=[],v=[],x=!1,M=!1,w="",b=0;function k(){if(x&&!M)for(;v.length;)delete m[v.pop()];else v=[];x=!1,M=!1}function C(e){if("string"==typeof e&&(e=e.split(l,2)),!t(e)||2!==e.length)throw new Error("Invalid tags: "+e);s=new RegExp(r(e[0])+"\\s*"),i=new RegExp("\\s*"+r(e[1])),o=new RegExp("\\s*"+r("}"+e[1]))}C(n||y.tags);for(var L,S,E,_,I,A,$=new p(e);!$.eos();){if(L=$.pos,E=$.scanUntil(s))for(var j=0,R=E.length;j<R;++j)c(_=E.charAt(j))?(v.push(m.length),w+=_):(M=!0,a=!0,w+=" "),m.push(["text",_,L,L+1]),L+=1,"\n"===_&&(k(),w="",b=0,a=!1);if(!$.scan(s))break;if(x=!0,S=$.scan(f)||"name",$.scan(h),"="===S?(E=$.scanUntil(u),$.scan(u),$.scanUntil(i)):"{"===S?(E=$.scanUntil(o),$.scan(d),$.scanUntil(i),S="&"):E=$.scanUntil(i),!$.scan(i))throw new Error("Unclosed tag at "+$.pos);if(I=">"==S?[S,E,L,$.pos,w,b,a]:[S,E,L,$.pos],b++,m.push(I),"#"===S||"^"===S)g.push(I);else if("/"===S){if(!(A=g.pop()))throw new Error('Unopened section "'+E+'" at '+L);if(A[1]!==E)throw new Error('Unclosed section "'+A[1]+'" at '+L)}else"name"===S||"{"===S||"&"===S?M=!0:"="===S&&C(E)}if(k(),A=g.pop())throw new Error('Unclosed section "'+A[1]+'" at '+$.pos);return function(e){for(var t,n=[],r=n,s=[],i=0,o=e.length;i<o;++i)switch((t=e[i])[0]){case"#":case"^":r.push(t),s.push(t),r=t[4]=[];break;case"/":s.pop()[5]=t[2],r=s.length>0?s[s.length-1][4]:n;break;default:r.push(t)}return n}(function(e){for(var t,n,r=[],s=0,i=e.length;s<i;++s)(t=e[s])&&("text"===t[0]&&n&&"text"===n[0]?(n[1]+=t[1],n[3]=t[3]):(r.push(t),n=t));return r}(m))}(e,n),o&&s.set(i,a)),a},m.prototype.render=function(e,t,n,r){var s=this.parse(e,r),i=t instanceof g?t:new g(t,void 0);return this.renderTokens(s,i,n,e,r)},m.prototype.renderTokens=function(e,t,n,r,s){for(var i,o,c,a="",h=0,l=e.length;h<l;++h)c=void 0,"#"===(o=(i=e[h])[0])?c=this.renderSection(i,t,n,r):"^"===o?c=this.renderInverted(i,t,n,r):">"===o?c=this.renderPartial(i,t,n,s):"&"===o?c=this.unescapedValue(i,t):"name"===o?c=this.escapedValue(i,t):"text"===o&&(c=this.rawValue(i)),void 0!==c&&(a+=c);return a},m.prototype.renderSection=function(e,r,s,i){var o=this,c="",a=r.lookup(e[1]);if(a){if(t(a))for(var h=0,l=a.length;h<l;++h)c+=this.renderTokens(e[4],r.push(a[h]),s,i);else if("object"==typeof a||"string"==typeof a||"number"==typeof a)c+=this.renderTokens(e[4],r.push(a),s,i);else if(n(a)){if("string"!=typeof i)throw new Error("Cannot use higher-order sections without the original template");null!=(a=a.call(r.view,i.slice(e[3],e[5]),(function(e){return o.render(e,r,s)})))&&(c+=a)}else c+=this.renderTokens(e[4],r,s,i);return c}},m.prototype.renderInverted=function(e,n,r,s){var i=n.lookup(e[1]);if(!i||t(i)&&0===i.length)return this.renderTokens(e[4],n,r,s)},m.prototype.indentPartial=function(e,t,n){for(var r=t.replace(/[^ \t]/g,""),s=e.split("\n"),i=0;i<s.length;i++)s[i].length&&(i>0||!n)&&(s[i]=r+s[i]);return s.join("\n")},m.prototype.renderPartial=function(e,t,r,s){if(r){var i=n(r)?r(e[1]):r[e[1]];if(null!=i){var o=e[6],c=e[5],a=e[4],h=i;return 0==c&&a&&(h=this.indentPartial(i,a,o)),this.renderTokens(this.parse(h,s),t,r,h,s)}}},m.prototype.unescapedValue=function(e,t){var n=t.lookup(e[1]);if(null!=n)return n},m.prototype.escapedValue=function(e,t){var n=t.lookup(e[1]);if(null!=n)return y.escape(n)},m.prototype.rawValue=function(e){return e[1]};var y={name:"mustache.js",version:"4.0.1",tags:["{{","}}"],clearCache:void 0,escape:void 0,parse:void 0,render:void 0,Scanner:void 0,Context:void 0,Writer:void 0,set templateCache(e){v.templateCache=e},get templateCache(){return v.templateCache}},v=new m;return y.clearCache=function(){return v.clearCache()},y.parse=function(e,t){return v.parse(e,t)},y.render=function(e,n,r,s){if("string"!=typeof e)throw new TypeError('Invalid template! Template should be a "string" but "'+((t(i=e)?"array":typeof i)+'" was given as the first argument for mustache#render(template, view, partials)'));var i;return v.render(e,n,r,s)},y.escape=function(e){return String(e).replace(/[&<>"'`=\/]/g,(function(e){return a[e]}))},y.Scanner=p,y.Context=g,y.Writer=m,y}()},3379:(e,t,n)=>{"use strict";var r,s=function(){var e={};return function(t){if(void 0===e[t]){var n=document.querySelector(t);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}e[t]=n}return e[t]}}(),i=[];function o(e){for(var t=-1,n=0;n<i.length;n++)if(i[n].identifier===e){t=n;break}return t}function c(e,t){for(var n={},r=[],s=0;s<e.length;s++){var c=e[s],a=t.base?c[0]+t.base:c[0],h=n[a]||0,l="".concat(a," ").concat(h);n[a]=h+1;var u=o(l),d={css:c[1],media:c[2],sourceMap:c[3]};-1!==u?(i[u].references++,i[u].updater(d)):i.push({identifier:l,updater:g(d,t),references:1}),r.push(l)}return r}function a(e){var t=document.createElement("style"),r=e.attributes||{};if(void 0===r.nonce){var i=n.nc;i&&(r.nonce=i)}if(Object.keys(r).forEach((function(e){t.setAttribute(e,r[e])})),"function"==typeof e.insert)e.insert(t);else{var o=s(e.insert||"head");if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(t)}return t}var h,l=(h=[],function(e,t){return h[e]=t,h.filter(Boolean).join("\n")});function u(e,t,n,r){var s=n?"":r.media?"@media ".concat(r.media," {").concat(r.css,"}"):r.css;if(e.styleSheet)e.styleSheet.cssText=l(t,s);else{var i=document.createTextNode(s),o=e.childNodes;o[t]&&e.removeChild(o[t]),o.length?e.insertBefore(i,o[t]):e.appendChild(i)}}function d(e,t,n){var r=n.css,s=n.media,i=n.sourceMap;if(s?e.setAttribute("media",s):e.removeAttribute("media"),i&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),e.styleSheet)e.styleSheet.cssText=r;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(r))}}var f=null,p=0;function g(e,t){var n,r,s;if(t.singleton){var i=p++;n=f||(f=a(t)),r=u.bind(null,n,i,!1),s=u.bind(null,n,i,!0)}else n=a(t),r=d.bind(null,n,t),s=function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)};return r(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;r(e=t)}else s()}}e.exports=function(e,t){(t=t||{}).singleton||"boolean"==typeof t.singleton||(t.singleton=(void 0===r&&(r=Boolean(window&&document&&document.all&&!window.atob)),r));var n=c(e=e||[],t);return function(e){if(e=e||[],"[object Array]"===Object.prototype.toString.call(e)){for(var r=0;r<n.length;r++){var s=o(n[r]);i[s].references--}for(var a=c(e,t),h=0;h<n.length;h++){var l=o(n[h]);0===i[l].references&&(i[l].updater(),i.splice(l,1))}n=a}}}}},t={};function n(r){if(t[r])return t[r].exports;var s=t[r]={id:r,exports:{}};return e[r].call(s.exports,s,s.exports,n),s.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{"use strict";function e(e){return Array.isArray?Array.isArray(e):"[object Array]"===c(e)}function t(e){return"string"==typeof e}function r(e){return"number"==typeof e}function s(e){return"object"==typeof e}function i(e){return null!=e}function o(e){return!e.trim().length}function c(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":Object.prototype.toString.call(e)}const a=Object.prototype.hasOwnProperty;class h{constructor(e){this._keys=[],this._keyMap={};let t=0;e.forEach((e=>{let n=l(e);t+=n.weight,this._keys.push(n),this._keyMap[n.id]=n,t+=n.weight})),this._keys.forEach((e=>{e.weight/=t}))}get(e){return this._keyMap[e]}keys(){return this._keys}toJSON(){return JSON.stringify(this._keys)}}function l(n){let r=null,s=null,i=null,o=1;if(t(n)||e(n))i=n,r=u(n),s=d(n);else{if(!a.call(n,"name"))throw new Error("Missing name property in key");const e=n.name;if(i=e,a.call(n,"weight")&&(o=n.weight,o<=0))throw new Error((e=>`Property 'weight' in key '${e}' must be a positive integer`)(e));r=u(e),s=d(e)}return{path:r,id:s,weight:o,src:i}}function u(t){return e(t)?t:t.split(".")}function d(t){return e(t)?t.join("."):t}var f={isCaseSensitive:!1,includeScore:!1,keys:[],shouldSort:!0,sortFn:(e,t)=>e.score===t.score?e.idx<t.idx?-1:1:e.score<t.score?-1:1,includeMatches:!1,findAllMatches:!1,minMatchCharLength:1,location:0,threshold:.6,distance:100,useExtendedSearch:!1,getFn:function(n,o){let a=[],h=!1;const l=(n,o,u)=>{if(i(n))if(o[u]){const d=n[o[u]];if(!i(d))return;if(u===o.length-1&&(t(d)||r(d)||function(e){return!0===e||!1===e||function(e){return s(e)&&null!==e}(e)&&"[object Boolean]"==c(e)}(d)))a.push(function(e){return null==e?"":function(e){if("string"==typeof e)return e;let t=e+"";return"0"==t&&1/e==-1/0?"-0":t}(e)}(d));else if(e(d)){h=!0;for(let e=0,t=d.length;e<t;e+=1)l(d[e],o,u+1)}else o.length&&l(d,o,u+1)}else a.push(n)};return l(n,t(o)?o.split("."):o,0),h?a:a[0]},ignoreLocation:!1,ignoreFieldNorm:!1};const p=/[^ ]+/g;class g{constructor({getFn:e=f.getFn}={}){this.norm=function(e=3){const t=new Map;return{get(n){const r=n.match(p).length;if(t.has(r))return t.get(r);const s=parseFloat((1/Math.sqrt(r)).toFixed(e));return t.set(r,s),s},clear(){t.clear()}}}(3),this.getFn=e,this.isCreated=!1,this.setIndexRecords()}setSources(e=[]){this.docs=e}setIndexRecords(e=[]){this.records=e}setKeys(e=[]){this.keys=e,this._keysMap={},e.forEach(((e,t)=>{this._keysMap[e.id]=t}))}create(){!this.isCreated&&this.docs.length&&(this.isCreated=!0,t(this.docs[0])?this.docs.forEach(((e,t)=>{this._addString(e,t)})):this.docs.forEach(((e,t)=>{this._addObject(e,t)})),this.norm.clear())}add(e){const n=this.size();t(e)?this._addString(e,n):this._addObject(e,n)}removeAt(e){this.records.splice(e,1);for(let t=e,n=this.size();t<n;t+=1)this.records[t].i-=1}getValueForItemAtKeyId(e,t){return e[this._keysMap[t]]}size(){return this.records.length}_addString(e,t){if(!i(e)||o(e))return;let n={v:e,i:t,n:this.norm.get(e)};this.records.push(n)}_addObject(n,r){let s={i:r,$:{}};this.keys.forEach(((r,c)=>{let a=this.getFn(n,r.path);if(i(a))if(e(a)){let n=[];const r=[{nestedArrIndex:-1,value:a}];for(;r.length;){const{nestedArrIndex:s,value:c}=r.pop();if(i(c))if(t(c)&&!o(c)){let e={v:c,i:s,n:this.norm.get(c)};n.push(e)}else e(c)&&c.forEach(((e,t)=>{r.push({nestedArrIndex:t,value:e})}))}s.$[c]=n}else if(!o(a)){let e={v:a,n:this.norm.get(a)};s.$[c]=e}})),this.records.push(s)}toJSON(){return{keys:this.keys,records:this.records}}}function m(e,t,{getFn:n=f.getFn}={}){const r=new g({getFn:n});return r.setKeys(e.map(l)),r.setSources(t),r.create(),r}function y(e,t){const n=e.matches;t.matches=[],i(n)&&n.forEach((e=>{if(!i(e.indices)||!e.indices.length)return;const{indices:n,value:r}=e;let s={indices:n,value:r};e.key&&(s.key=e.key.src),e.idx>-1&&(s.refIndex=e.idx),t.matches.push(s)}))}function v(e,t){t.score=e.score}function x(e,{errors:t=0,currentLocation:n=0,expectedLocation:r=0,distance:s=f.distance,ignoreLocation:i=f.ignoreLocation}={}){const o=t/e.length;if(i)return o;const c=Math.abs(r-n);return s?o+c/s:c?1:o}const M=32;function w(e){let t={};for(let n=0,r=e.length;n<r;n+=1){const s=e.charAt(n);t[s]=(t[s]||0)|1<<r-n-1}return t}class b{constructor(e,{location:t=f.location,threshold:n=f.threshold,distance:r=f.distance,includeMatches:s=f.includeMatches,findAllMatches:i=f.findAllMatches,minMatchCharLength:o=f.minMatchCharLength,isCaseSensitive:c=f.isCaseSensitive,ignoreLocation:a=f.ignoreLocation}={}){if(this.options={location:t,threshold:n,distance:r,includeMatches:s,findAllMatches:i,minMatchCharLength:o,isCaseSensitive:c,ignoreLocation:a},this.pattern=c?e:e.toLowerCase(),this.chunks=[],!this.pattern.length)return;const h=(e,t)=>{this.chunks.push({pattern:e,alphabet:w(e),startIndex:t})},l=this.pattern.length;if(l>M){let e=0;const t=l%M,n=l-t;for(;e<n;)h(this.pattern.substr(e,M),e),e+=M;if(t){const e=l-M;h(this.pattern.substr(e),e)}}else h(this.pattern,0)}searchIn(e){const{isCaseSensitive:t,includeMatches:n}=this.options;if(t||(e=e.toLowerCase()),this.pattern===e){let t={isMatch:!0,score:0};return n&&(t.indices=[[0,e.length-1]]),t}const{location:r,distance:s,threshold:i,findAllMatches:o,minMatchCharLength:c,ignoreLocation:a}=this.options;let h=[],l=0,u=!1;this.chunks.forEach((({pattern:t,alphabet:d,startIndex:p})=>{const{isMatch:g,score:m,indices:y}=function(e,t,n,{location:r=f.location,distance:s=f.distance,threshold:i=f.threshold,findAllMatches:o=f.findAllMatches,minMatchCharLength:c=f.minMatchCharLength,includeMatches:a=f.includeMatches,ignoreLocation:h=f.ignoreLocation}={}){if(t.length>M)throw new Error("Pattern length exceeds max of 32.");const l=t.length,u=e.length,d=Math.max(0,Math.min(r,u));let p=i,g=d;const m=c>1||a,y=m?Array(u):[];let v;for(;(v=e.indexOf(t,g))>-1;){let e=x(t,{currentLocation:v,expectedLocation:d,distance:s,ignoreLocation:h});if(p=Math.min(e,p),g=v+l,m){let e=0;for(;e<l;)y[v+e]=1,e+=1}}g=-1;let w=[],b=1,k=l+u;const C=1<<l-1;for(let r=0;r<l;r+=1){let i=0,c=k;for(;i<c;)x(t,{errors:r,currentLocation:d+c,expectedLocation:d,distance:s,ignoreLocation:h})<=p?i=c:k=c,c=Math.floor((k-i)/2+i);k=c;let a=Math.max(1,d-c+1),f=o?u:Math.min(d+c,u)+l,v=Array(f+2);v[f+1]=(1<<r)-1;for(let i=f;i>=a;i-=1){let o=i-1,c=n[e.charAt(o)];if(m&&(y[o]=+!!c),v[i]=(v[i+1]<<1|1)&c,r&&(v[i]|=(w[i+1]|w[i])<<1|1|w[i+1]),v[i]&C&&(b=x(t,{errors:r,currentLocation:o,expectedLocation:d,distance:s,ignoreLocation:h}),b<=p)){if(p=b,g=o,g<=d)break;a=Math.max(1,2*d-g)}}if(x(t,{errors:r+1,currentLocation:d,expectedLocation:d,distance:s,ignoreLocation:h})>p)break;w=v}const L={isMatch:g>=0,score:Math.max(.001,b)};if(m){const e=function(e=[],t=f.minMatchCharLength){let n=[],r=-1,s=-1,i=0;for(let o=e.length;i<o;i+=1){let o=e[i];o&&-1===r?r=i:o||-1===r||(s=i-1,s-r+1>=t&&n.push([r,s]),r=-1)}return e[i-1]&&i-r>=t&&n.push([r,i-1]),n}(y,c);e.length?a&&(L.indices=e):L.isMatch=!1}return L}(e,t,d,{location:r+p,distance:s,threshold:i,findAllMatches:o,minMatchCharLength:c,includeMatches:n,ignoreLocation:a});g&&(u=!0),l+=m,g&&y&&(h=[...h,...y])}));let d={isMatch:u,score:u?l/this.chunks.length:1};return u&&n&&(d.indices=h),d}}class k{constructor(e){this.pattern=e}static isMultiMatch(e){return C(e,this.multiRegex)}static isSingleMatch(e){return C(e,this.singleRegex)}search(){}}function C(e,t){const n=e.match(t);return n?n[1]:null}class L extends k{constructor(e,{location:t=f.location,threshold:n=f.threshold,distance:r=f.distance,includeMatches:s=f.includeMatches,findAllMatches:i=f.findAllMatches,minMatchCharLength:o=f.minMatchCharLength,isCaseSensitive:c=f.isCaseSensitive}={}){super(e),this._bitapSearch=new b(e,{location:t,threshold:n,distance:r,includeMatches:s,findAllMatches:i,minMatchCharLength:o,isCaseSensitive:c})}static get type(){return"fuzzy"}static get multiRegex(){return/^"(.*)"$/}static get singleRegex(){return/^(.*)$/}search(e){return this._bitapSearch.searchIn(e)}}class S extends k{constructor(e){super(e)}static get type(){return"include"}static get multiRegex(){return/^'"(.*)"$/}static get singleRegex(){return/^'(.*)$/}search(e){let t,n=0;const r=[],s=this.pattern.length;for(;(t=e.indexOf(this.pattern,n))>-1;)n=t+s,r.push([t,n-1]);const i=!!r.length;return{isMatch:i,score:i?1:0,indices:r}}}const E=[class extends k{constructor(e){super(e)}static get type(){return"exact"}static get multiRegex(){return/^="(.*)"$/}static get singleRegex(){return/^=(.*)$/}search(e){const t=e===this.pattern;return{isMatch:t,score:t?0:1,indices:[0,this.pattern.length-1]}}},S,class extends k{constructor(e){super(e)}static get type(){return"prefix-exact"}static get multiRegex(){return/^\^"(.*)"$/}static get singleRegex(){return/^\^(.*)$/}search(e){const t=e.startsWith(this.pattern);return{isMatch:t,score:t?0:1,indices:[0,this.pattern.length-1]}}},class extends k{constructor(e){super(e)}static get type(){return"inverse-prefix-exact"}static get multiRegex(){return/^!\^"(.*)"$/}static get singleRegex(){return/^!\^(.*)$/}search(e){const t=!e.startsWith(this.pattern);return{isMatch:t,score:t?0:1,indices:[0,e.length-1]}}},class extends k{constructor(e){super(e)}static get type(){return"inverse-suffix-exact"}static get multiRegex(){return/^!"(.*)"\$$/}static get singleRegex(){return/^!(.*)\$$/}search(e){const t=!e.endsWith(this.pattern);return{isMatch:t,score:t?0:1,indices:[0,e.length-1]}}},class extends k{constructor(e){super(e)}static get type(){return"suffix-exact"}static get multiRegex(){return/^"(.*)"\$$/}static get singleRegex(){return/^(.*)\$$/}search(e){const t=e.endsWith(this.pattern);return{isMatch:t,score:t?0:1,indices:[e.length-this.pattern.length,e.length-1]}}},class extends k{constructor(e){super(e)}static get type(){return"inverse-exact"}static get multiRegex(){return/^!"(.*)"$/}static get singleRegex(){return/^!(.*)$/}search(e){const t=-1===e.indexOf(this.pattern);return{isMatch:t,score:t?0:1,indices:[0,e.length-1]}}},L],_=E.length,I=/ +(?=([^\"]*\"[^\"]*\")*[^\"]*$)/,A=new Set([L.type,S.type]);const $=[];function j(e,t){for(let n=0,r=$.length;n<r;n+=1){let r=$[n];if(r.condition(e,t))return new r(e,t)}return new b(e,t)}const R="$and",O=e=>!(!e.$and&&!e.$or),F=e=>({[R]:Object.keys(e).map((t=>({[t]:e[t]})))});function T(n,r,{auto:i=!0}={}){const o=n=>{let c=Object.keys(n);const a=(e=>!!e.$path)(n);if(!a&&c.length>1&&!O(n))return o(F(n));if((t=>!e(t)&&s(t)&&!O(t))(n)){const e=a?n.$path:c[0],s=a?n.$val:n[e];if(!t(s))throw new Error((e=>"Invalid value for key "+e)(e));const o={keyId:d(e),pattern:s};return i&&(o.searcher=j(s,r)),o}let h={children:[],operator:c[0]};return c.forEach((t=>{const r=n[t];e(r)&&r.forEach((e=>{h.children.push(o(e))}))})),h};return O(n)||(n=F(n)),o(n)}class N{constructor(e,t={},n){this.options={...f,...t},this.options.useExtendedSearch,this._keyStore=new h(this.options.keys),this.setCollection(e,n)}setCollection(e,t){if(this._docs=e,t&&!(t instanceof g))throw new Error("Incorrect 'index' type");this._myIndex=t||m(this.options.keys,this._docs,{getFn:this.options.getFn})}add(e){i(e)&&(this._docs.push(e),this._myIndex.add(e))}remove(e=(()=>!1)){const t=[];for(let n=0,r=this._docs.length;n<r;n+=1){const s=this._docs[n];e(s,n)&&(this.removeAt(n),n-=1,r-=1,t.push(s))}return t}removeAt(e){this._docs.splice(e,1),this._myIndex.removeAt(e)}getIndex(){return this._myIndex}search(e,{limit:n=-1}={}){const{includeMatches:s,includeScore:i,shouldSort:o,sortFn:c,ignoreFieldNorm:a}=this.options;let h=t(e)?t(this._docs[0])?this._searchStringList(e):this._searchObjectList(e):this._searchLogical(e);return function(e,{ignoreFieldNorm:t=f.ignoreFieldNorm}){e.forEach((e=>{let n=1;e.matches.forEach((({key:e,norm:r,score:s})=>{const i=e?e.weight:null;n*=Math.pow(0===s&&i?Number.EPSILON:s,(i||1)*(t?1:r))})),e.score=n}))}(h,{ignoreFieldNorm:a}),o&&h.sort(c),r(n)&&n>-1&&(h=h.slice(0,n)),function(e,t,{includeMatches:n=f.includeMatches,includeScore:r=f.includeScore}={}){const s=[];return n&&s.push(y),r&&s.push(v),e.map((e=>{const{idx:n}=e,r={item:t[n],refIndex:n};return s.length&&s.forEach((t=>{t(e,r)})),r}))}(h,this._docs,{includeMatches:s,includeScore:i})}_searchStringList(e){const t=j(e,this.options),{records:n}=this._myIndex,r=[];return n.forEach((({v:e,i:n,n:s})=>{if(!i(e))return;const{isMatch:o,score:c,indices:a}=t.searchIn(e);o&&r.push({item:e,idx:n,matches:[{score:c,value:e,norm:s,indices:a}]})})),r}_searchLogical(e){const t=T(e,this.options),n=(e,t,r)=>{if(!e.children){const{keyId:n,searcher:s}=e,i=this._findMatches({key:this._keyStore.get(n),value:this._myIndex.getValueForItemAtKeyId(t,n),searcher:s});return i&&i.length?[{idx:r,item:t,matches:i}]:[]}switch(e.operator){case R:{const s=[];for(let i=0,o=e.children.length;i<o;i+=1){const o=e.children[i],c=n(o,t,r);if(!c.length)return[];s.push(...c)}return s}case"$or":{const s=[];for(let i=0,o=e.children.length;i<o;i+=1){const o=e.children[i],c=n(o,t,r);if(c.length){s.push(...c);break}}return s}}},r=this._myIndex.records,s={},o=[];return r.forEach((({$:e,i:r})=>{if(i(e)){let i=n(t,e,r);i.length&&(s[r]||(s[r]={idx:r,item:e,matches:[]},o.push(s[r])),i.forEach((({matches:e})=>{s[r].matches.push(...e)})))}})),o}_searchObjectList(e){const t=j(e,this.options),{keys:n,records:r}=this._myIndex,s=[];return r.forEach((({$:e,i:r})=>{if(!i(e))return;let o=[];n.forEach(((n,r)=>{o.push(...this._findMatches({key:n,value:e[r],searcher:t}))})),o.length&&s.push({idx:r,item:e,matches:o})})),s}_findMatches({key:t,value:n,searcher:r}){if(!i(n))return[];let s=[];if(e(n))n.forEach((({v:e,i:n,n:o})=>{if(!i(e))return;const{isMatch:c,score:a,indices:h}=r.searchIn(e);c&&s.push({score:a,key:t,value:e,idx:n,norm:o,indices:h})}));else{const{v:e,n:i}=n,{isMatch:o,score:c,indices:a}=r.searchIn(e);o&&s.push({score:c,key:t,value:e,norm:i,indices:a})}return s}}N.version="6.4.2",N.createIndex=m,N.parseIndex=function(e,{getFn:t=f.getFn}={}){const{keys:n,records:r}=e,s=new g({getFn:t});return s.setKeys(n),s.setIndexRecords(r),s},N.config=f,N.parseQuery=T,function(...e){$.push(...e)}(class{constructor(e,{isCaseSensitive:t=f.isCaseSensitive,includeMatches:n=f.includeMatches,minMatchCharLength:r=f.minMatchCharLength,findAllMatches:s=f.findAllMatches,location:i=f.location,threshold:o=f.threshold,distance:c=f.distance}={}){this.query=null,this.options={isCaseSensitive:t,includeMatches:n,minMatchCharLength:r,findAllMatches:s,location:i,threshold:o,distance:c},this.pattern=t?e:e.toLowerCase(),this.query=function(e,t={}){return e.split("|").map((e=>{let n=e.trim().split(I).filter((e=>e&&!!e.trim())),r=[];for(let e=0,s=n.length;e<s;e+=1){const s=n[e];let i=!1,o=-1;for(;!i&&++o<_;){const e=E[o];let n=e.isMultiMatch(s);n&&(r.push(new e(n,t)),i=!0)}if(!i)for(o=-1;++o<_;){const e=E[o];let n=e.isSingleMatch(s);if(n){r.push(new e(n,t));break}}}return r}))}(this.pattern,this.options)}static condition(e,t){return t.useExtendedSearch}searchIn(e){const t=this.query;if(!t)return{isMatch:!1,score:1};const{includeMatches:n,isCaseSensitive:r}=this.options;e=r?e:e.toLowerCase();let s=0,i=[],o=0;for(let r=0,c=t.length;r<c;r+=1){const c=t[r];i.length=0,s=0;for(let t=0,r=c.length;t<r;t+=1){const r=c[t],{isMatch:a,indices:h,score:l}=r.search(e);if(!a){o=0,s=0,i.length=0;break}if(s+=1,o+=l,n){const e=r.constructor.type;A.has(e)?i=[...i,...h]:i.push(h)}}if(s){let e={isMatch:!0,score:o/s};return n&&(e.indices=i),e}}return{isMatch:!1,score:1}}});const P=N;var U,q,B,V,H=n(466),z=n.n(H);document.addEventListener("DOMContentLoaded",(function(){U=document.getElementById("searchForm"),q=document.getElementById("searchQuery"),B=document.getElementById("searchResults"),V=document.getElementById("searchResultTemplate").innerHTML,function(){let e=new URLSearchParams(window.location.search).get("q");var t,n;e?(q.value=e,t=e,(n=new XMLHttpRequest).onreadystatechange=function(){if(4===n.readyState){var e=n.response,r=new P(e,K).search(t);console.log({results:r}),r.length>0?function(e){B.innerHTML="",e.forEach((function(e){e.item.content.length>W&&(e.item.content=e.item.content.substring(0,W)+"..."),B.insertAdjacentHTML("beforeend",z().render(V,e.item))}))}(r):B.innerHTML='<p class="text-muted">No results</p>'}},n.responseType="json",n.open("GET",U.getAttribute("data-index"),!0),n.send(null)):q.setAttribute("placeholder","Please enter search keywords.")}()}));var W=120,K={keys:[{name:"title",weight:.8},{name:"content",weight:.5},{name:"tags",weight:.3},{name:"categories",weight:.3}]}})(),(()=>{"use strict";var e=n(3379),t=n.n(e),r=n(6432);t()(r.Z,{insert:"head",singleton:!1}),r.Z.locals})()})();