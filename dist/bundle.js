!function(e){var r={};function u(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,u),n.l=!0,n.exports}u.m=e,u.c=r,u.d=function(e,r,t){u.o(e,r)||Object.defineProperty(e,r,{configurable:!1,enumerable:!0,get:t})},u.r=function(e){Object.defineProperty(e,"__esModule",{value:!0})},u.n=function(e){var r=e&&e.__esModule?function(){return e.default}:function(){return e};return u.d(r,"a",r),r},u.o=function(e,r){return Object.prototype.hasOwnProperty.call(e,r)},u.p="",u(u.s=4)}([function(e,r,u){"use strict";u.r(r),u.d(r,"form",function(){return t});const t={inputs:document.querySelectorAll("input[type=range]"),outputs:document.querySelectorAll("output"),btn:document.getElementById("submitBtn"),answer:document.getElementById("triangleType")}},function(e,r){e.exports=(e=>{let[r,u,t]=e,n=null;return n=r+u<=t?"imaginary":r==u&&u==t?"equilateral":r==u||u==t||r==t?"isosceles":"scalene"})},function(e,r,u){"use strict";u.r(r),u.d(r,"getRanges",function(){return n});const{form:t}=u(0),n=()=>{t.inputs.forEach(e=>{e.addEventListener("input",i)})},i=()=>{for(var e=0;e<t.inputs.length;e++)t.outputs[e].value=t.inputs[e].value}},function(e,r,u){var t;"undefined"!=typeof self&&self,t=function(){return function(e){var r={};function u(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,u),n.l=!0,n.exports}return u.m=e,u.c=r,u.d=function(e,r,t){u.o(e,r)||Object.defineProperty(e,r,{configurable:!1,enumerable:!0,get:t})},u.n=function(e){var r=e&&e.__esModule?function(){return e.default}:function(){return e};return u.d(r,"a",r),r},u.o=function(e,r){return Object.prototype.hasOwnProperty.call(e,r)},u.p="",u(u.s=1)}([function(e,r){r.check=function(e,u){if(u){var t=new RegExp(u+"$");e=e.replace(t,"")}return r.list.indexOf(e)>-1},r.list=["eunuch","eucalyptus","eugenics","eulogy","euphemism","euphony","euphoria","eureka","european","euphemistic","euphonic","euphoric","euphemistically","euphonically","euphorically","heir","heiress","herb","homage","honesty","honor","honour","hour","honest","honorous","honestly","hourly","one","ouija","once","ubiquity","udometer","ufo","uke","ukelele","ululate","unicorn","unicycle","uniform","unify","union","unison","unit","unity","universe","university","upas","ural","uranium","urea","ureter","urethra","urine","urology","urus","usage","use","usual","usurp","usury","utensil","uterus","utility","utopia","utricle","uvarovite","uvea","uvula","ubiquitous","ugandan","ukrainian","unanimous","unicameral","unified","unique","unisex","universal","urinal","urological","useful","useless","usurious","usurped","utilitarian","utopic","ubiquitously","unanimously","unicamerally","uniquely","universally","urologically","usefully","uselessly","usuriously","yttria","yggdrasil","ylem","yperite","ytterbia","ytterbium","yttrium","ytterbous","ytterbic","yttric"]},function(e,r,u){var t=u(0),n=u(2),i=n.startsWithVowel,o=n.xor,s=n.bothOrNeither,a=n.isAcronym,l=n.isIrregularAcronym,c=n.checkForIrregulars,f=n.capitalize,p=n.getFirst,y=function(e){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},u=i(e);if(a(e,r.caseInsensitive)){var t=l(e),n=s(u,t)?"a":"an";return f(n,e,r)}var y=p(e),h=c(y),d=o(u,h)?"an":"a";return f(d,e,r)};y.irregularWords=t.list,e.exports=y},function(e,r,u){var t=u(0),n=/^[A-Z]+$/,i=/^[UFHLMNRSX]/,o=/^[aeiouAEIOU]/,s=/[\s'-]/;r.startsWithVowel=function(e){return o.test(e)},r.xor=function(e,r){return(e||r)&&!(e&&r)},r.bothOrNeither=function(e,r){return e===r},r.isAcronym=function(e,r){return!r&&n.test(e.split(" ")[0])},r.isIrregularAcronym=function(e){return i.test(e.charAt(0))},r.checkForIrregulars=function(e){return[null,"s","es","ed"].reduce(function(r,u){return r||t.check(e,u)},!1)},r.capitalize=function(e,r,u){return u.capitalize&&(e=""+e.charAt(0).toUpperCase()+e.slice(1)),e+" "+r},r.getFirst=function(e){return e.split(s)[0].toLowerCase()}}])},e.exports=t()},function(e,r,u){const t=u(3),{getRanges:n}=u(2),{form:i}=u(0),o=u(1);(()=>{const e=()=>{let e=o((()=>Array.from(i.inputs).map(e=>e.value))());i.answer.innerHTML="imaginary"===e?"Sorry, that's "+t(`${e}`)+" triangle. Try again!":"You created "+t(`${e}`)+" triangle"};return{showAnswer:()=>{i.btn.addEventListener("click",e)}}})().showAnswer(),n()}]);