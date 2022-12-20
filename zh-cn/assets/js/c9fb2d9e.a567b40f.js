"use strict";(self.webpackChunkopensergo_github_io=self.webpackChunkopensergo_github_io||[]).push([[2643],{3905:function(e,n,t){t.d(n,{Zo:function(){return c},kt:function(){return d}});var a=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var p=a.createContext({}),s=function(e){var n=a.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},c=function(e){var n=s(e.components);return a.createElement(p.Provider,{value:n},e.children)},g={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},u=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=s(t),d=r,m=u["".concat(p,".").concat(d)]||u[d]||g[d]||o;return t?a.createElement(m,i(i({ref:n},c),{},{components:t})):a.createElement(m,i({ref:n},c))}));function d(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,i=new Array(o);i[0]=u;var l={};for(var p in n)hasOwnProperty.call(n,p)&&(l[p]=n[p]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var s=2;s<o;s++)i[s]=t[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}u.displayName="MDXCreateElement"},1776:function(e,n,t){t.r(n),t.d(n,{assets:function(){return c},contentTitle:function(){return p},default:function(){return d},frontMatter:function(){return l},metadata:function(){return s},toc:function(){return g}});var a=t(7462),r=t(3366),o=(t(7294),t(3905)),i=["components"],l={slug:"opensergo-database-governance-spec-with-shardingsphere",title:"OpenSergo & ShardingSphere \u793e\u533a\u5171\u5efa\u5fae\u670d\u52a1\u89c6\u89d2\u7684\u6570\u636e\u5e93\u6cbb\u7406\u6807\u51c6",authors:["sczyh30"],tags:[]},p=void 0,s={permalink:"/zh-cn/blog/opensergo-database-governance-spec-with-shardingsphere",editUrl:"https://github.com/opensergo/opensergo.github.io/tree/main/blog/2022-11-10-opensergo-database-governance-spec-with-shardingsphere/2022-11-10-opensergo-database-governance-spec-with-shardingsphere.md",source:"@site/i18n/zh-cn/docusaurus-plugin-content-blog/2022-11-10-opensergo-database-governance-spec-with-shardingsphere/2022-11-10-opensergo-database-governance-spec-with-shardingsphere.md",title:"OpenSergo & ShardingSphere \u793e\u533a\u5171\u5efa\u5fae\u670d\u52a1\u89c6\u89d2\u7684\u6570\u636e\u5e93\u6cbb\u7406\u6807\u51c6",description:"\u4e3a\u4ec0\u4e48\u9700\u8981\u5fae\u670d\u52a1\u6cbb\u7406\u4e0e OpenSergo\uff1f",date:"2022-11-10T00:00:00.000Z",formattedDate:"2022\u5e7411\u670810\u65e5",tags:[],truncated:!1,authors:[{name:"\u8d75\u5955\u8c6a",title:"Maintainer of Sentinel && OpenSergo",url:"https://github.com/sczyh30",imageURL:"https://avatars.githubusercontent.com/u/9434884",key:"sczyh30"}],frontMatter:{slug:"opensergo-database-governance-spec-with-shardingsphere",title:"OpenSergo & ShardingSphere \u793e\u533a\u5171\u5efa\u5fae\u670d\u52a1\u89c6\u89d2\u7684\u6570\u636e\u5e93\u6cbb\u7406\u6807\u51c6",authors:["sczyh30"],tags:[]},prevItem:{title:"OpenSergo \u793e\u533a\u53cc\u5468\u4f1a\u7eaa\u8981\uff082022/11/23\uff09",permalink:"/zh-cn/blog/opensergo-community-meeting-20221123"},nextItem:{title:"OpenSergo \u793e\u533a\u53cc\u5468\u4f1a\u7eaa\u8981\uff082022/11/09\uff09",permalink:"/zh-cn/blog/opensergo-community-meeting-20221109"}},c={authorsImageUrls:[void 0]},g=[{value:"\u4e3a\u4ec0\u4e48\u9700\u8981\u5fae\u670d\u52a1\u6cbb\u7406\u4e0e OpenSergo\uff1f",id:"\u4e3a\u4ec0\u4e48\u9700\u8981\u5fae\u670d\u52a1\u6cbb\u7406\u4e0e-opensergo",level:2},{value:"\u5fae\u670d\u52a1\u89c6\u89d2\u7684\u6570\u636e\u5e93\u6cbb\u7406\u662f\u4fdd\u969c\u670d\u52a1\u7a33\u5b9a\u6027\u7684\u5173\u952e\u4e00\u73af",id:"\u5fae\u670d\u52a1\u89c6\u89d2\u7684\u6570\u636e\u5e93\u6cbb\u7406\u662f\u4fdd\u969c\u670d\u52a1\u7a33\u5b9a\u6027\u7684\u5173\u952e\u4e00\u73af",level:2},{value:"OpenSergo \u8054\u5408 ShardingSphere \u793e\u533a\u5171\u5efa\u6570\u636e\u5e93\u6cbb\u7406\u6807\u51c6",id:"opensergo-\u8054\u5408-shardingsphere-\u793e\u533a\u5171\u5efa\u6570\u636e\u5e93\u6cbb\u7406\u6807\u51c6",level:2},{value:"\u5bf9\u6570\u636e\u5e93 workload \u53ca\u8bbf\u95ee\u5bf9\u8c61\u7684\u62bd\u8c61",id:"\u5bf9\u6570\u636e\u5e93-workload-\u53ca\u8bbf\u95ee\u5bf9\u8c61\u7684\u62bd\u8c61",level:3},{value:"\u6d41\u91cf\u6cbb\u7406\u5728\u6570\u636e\u5e93\u8bbf\u95ee\u7684\u4f53\u73b0",id:"\u6d41\u91cf\u6cbb\u7406\u5728\u6570\u636e\u5e93\u8bbf\u95ee\u7684\u4f53\u73b0",level:3},{value:"\u5176\u5b83\u6570\u636e\u5e93\u6cbb\u7406\u80fd\u529b",id:"\u5176\u5b83\u6570\u636e\u5e93\u6cbb\u7406\u80fd\u529b",level:3},{value:"\u5c55\u671b",id:"\u5c55\u671b",level:2}],u={toc:g};function d(e){var n=e.components,l=(0,r.Z)(e,i);return(0,o.kt)("wrapper",(0,a.Z)({},u,l,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"\u4e3a\u4ec0\u4e48\u9700\u8981\u5fae\u670d\u52a1\u6cbb\u7406\u4e0e-opensergo"},"\u4e3a\u4ec0\u4e48\u9700\u8981\u5fae\u670d\u52a1\u6cbb\u7406\u4e0e OpenSergo\uff1f"),(0,o.kt)("p",null,"\u5728\u7ecf\u5178\u5fae\u670d\u52a1\u67b6\u6784\u4e2d\uff0c\u6211\u4eec\u901a\u5e38\u5c06\u670d\u52a1\u8c03\u7528\u4e2d\u5404\u89d2\u8272\u5212\u5206\u4e3a\u4e09\u90e8\u5206\uff1a\u670d\u52a1\u63d0\u4f9b\u8005\u3001\u670d\u52a1\u6d88\u8d39\u8005\u3001\u6ce8\u518c\u4e2d\u5fc3\u3002\u7ecf\u5178\u7684\u5fae\u670d\u52a1\u67b6\u6784\u53ef\u4ee5\u89e3\u51b3\u5fae\u670d\u52a1\u80fd\u8c03\u901a\u3001\u53ef\u4ee5\u8fd0\u884c\u8d77\u6765\u7684\u95ee\u9898\u3002\u968f\u7740\u5206\u5e03\u5f0f\u670d\u52a1\u67b6\u6784\u7684\u4e0d\u65ad\u6f14\u8fdb\u3001\u4e1a\u52a1\u89c4\u6a21\u7684\u6269\u5f20\uff0c\u8bf8\u591a\u590d\u6742\u7684\u7a33\u5b9a\u6027\u4e0e\u6613\u7528\u6027\u95ee\u9898\u663e\u73b0\u51fa\u6765\uff0c\u8fd9\u65f6\u5019\u5c31\u9700\u8981\u4e00\u4e9b\u624b\u6bb5\u6765\u9488\u5bf9\u65e5\u76ca\u590d\u6742\u7684\u5fae\u670d\u52a1\u67b6\u6784\u8fdb\u884c\u201c\u6cbb\u7406\u201d\u3002\u5fae\u670d\u52a1\u6cbb\u7406\u5c31\u662f\u901a\u8fc7\u6d41\u91cf\u6cbb\u7406\u3001\u670d\u52a1\u5bb9\u9519\u3001\u5b89\u5168\u6cbb\u7406\u7b49\u6280\u672f\u624b\u6bb5\u6765\u51cf\u5c11\u751a\u81f3\u907f\u514d\u53d1\u5e03\u548c\u7ba1\u7406\u5927\u89c4\u6a21\u5e94\u7528\u8fc7\u7a0b\u4e2d\u9047\u5230\u7684\u7a33\u5b9a\u6027\u95ee\u9898\uff0c\u5bf9\u5fae\u670d\u52a1\u9886\u57df\u4e2d\u7684\u5404\u4e2a\u7ec4\u4ef6\u8fdb\u884c\u6cbb\u7406\u3002\u670d\u52a1\u63d0\u4f9b\u8005\u3001\u6d88\u8d39\u8005\u3001\u6ce8\u518c\u4e2d\u5fc3\u3001\u670d\u52a1\u6cbb\u7406\uff0c\u6784\u6210\u73b0\u4ee3\u5fae\u670d\u52a1\u67b6\u6784\u4e2d\u91cd\u8981\u7684\u51e0\u73af\u3002"),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/9434884/201810889-b31e7ac3-d39f-431e-a291-73ff3038b688.png",alt:"image"})),(0,o.kt)("p",null,"\u5fae\u670d\u52a1\u6cbb\u7406\u662f\u628a\u5fae\u670d\u52a1\u505a\u7a33\u505a\u597d\u7684\u5173\u952e\u4e00\u73af\u3002\u4f46\u662f\uff0c\u4e1a\u754c\u5fae\u670d\u52a1\u6cbb\u7406\u5b58\u5728\u6982\u5ff5\u4e0d\u7edf\u4e00\u3001\u914d\u7f6e\u5f62\u5f0f\u4e0d\u7edf\u4e00\u3001\u80fd\u529b\u4e0d\u7edf\u4e00\u3001\u591a\u6846\u67b6\u7edf\u4e00\u7ba1\u63a7\u8f83\u4e3a\u590d\u6742\u7b49\u95ee\u9898\u3002\u6bd4\u5982\u6211\u4eec\u5e0c\u671b\u914d\u7f6e\u6d41\u91cf\u7070\u5ea6\u89c4\u5219\uff0c\u5728 Spring Cloud Alibaba \u4e2d\u53ef\u80fd\u9700\u8981\u901a\u8fc7 YAML \u65b9\u5f0f\u914d\u7f6e\uff0c\u5728 Dubbo \u4e2d\u9700\u8981\u901a\u8fc7\u53e6\u4e00\u79cd\u914d\u7f6e\u683c\u5f0f\u8fdb\u884c\u914d\u7f6e\uff0c\u5728 Istio \u4f53\u7cfb\u5185\u4e2d\u53ef\u80fd\u53c8\u9700\u8981\u901a\u8fc7 Istio CRD \u7684\u65b9\u5f0f\u8fdb\u884c\u914d\u7f6e\u3002",(0,o.kt)("strong",{parentName:"p"},"\u4e0d\u540c\u6846\u67b6\u6cbb\u7406\u914d\u7f6e\u65b9\u5f0f\u7684\u4e0d\u4e00\u81f4\u4f7f\u5f97\u5fae\u670d\u52a1\u7edf\u4e00\u6cbb\u7406\u7ba1\u63a7\u7684\u590d\u6742\u5ea6\u76f8\u5f53\u9ad8"),"\u3002\u53e6\u5916\uff0c\u4e1a\u754c\u7684\u5404\u79cd\u6846\u67b6\u652f\u6301\u7684\u670d\u52a1\u6cbb\u7406\u80fd\u529b\u90fd\u4e0d\u7edf\u4e00\uff0c\u4e14\u901a\u5e38\u6bd4\u8f83\u57fa\u7840\uff0c\u5f88\u591a\u65f6\u5019\u65e0\u6cd5\u8986\u76d6\u751f\u4ea7\u7ea7\u7684\u573a\u666f\u3002"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"background",src:t(3395).Z,width:"2628",height:"1012"})),(0,o.kt)("p",null,"\u57fa\u4e8e\u4e0a\u9762\u8fd9\u4e9b\u75db\u70b9\uff0c\u963f\u91cc\u5df4\u5df4\u57282022\u5e741\u6708\u5f00\u59cb\u548c bilibili\u3001\u5b57\u8282\u7b49\u4f01\u4e1a\u8ba8\u8bba\u670d\u52a1\u6cbb\u7406\u5982\u4f55\u89c4\u8303\u5316\u548c\u66f4\u52a0\u666e\u53ca\uff0c\u4ece\u800c\u5171\u540c\u53d1\u8d77\u4e86 ",(0,o.kt)("a",{parentName:"p",href:"https://opensergo.io/zh-cn/"},"OpenSergo \u9879\u76ee"),"\u3002",(0,o.kt)("strong",{parentName:"p"},"OpenSergo \u662f\u5f00\u653e\u901a\u7528\u7684\uff0c\u8986\u76d6\u5fae\u670d\u52a1\u53ca\u4e0a\u4e0b\u6e38\u5173\u8054\u7ec4\u4ef6\u7684\u5fae\u670d\u52a1\u6cbb\u7406\u9879\u76ee\uff0c\u4ece\u5fae\u670d\u52a1\u7684\u89d2\u5ea6\u51fa\u53d1\uff0c\u6db5\u76d6\u6d41\u91cf\u6cbb\u7406\u3001\u670d\u52a1\u5bb9\u9519\u3001\u670d\u52a1\u5143\u4fe1\u606f\u6cbb\u7406\u3001\u5b89\u5168\u6cbb\u7406\u7b49\u5173\u952e\u6cbb\u7406\u9886\u57df\uff0c\u63d0\u4f9b\u4e00\u7cfb\u5217\u7684\u6cbb\u7406\u80fd\u529b\u4e0e\u6807\u51c6\u3001\u751f\u6001\u9002\u914d\u4e0e\u6700\u4f73\u5b9e\u8df5\uff0c\u652f\u6301 Java, Go, Rust \u7b49\u591a\u8bed\u8a00\u751f\u6001"),"\u3002OpenSergo \u7684\u6700\u5927\u7279\u70b9\u5c31\u662f\u4ee5\u7edf\u4e00\u7684\u4e00\u5957\u914d\u7f6e/DSL/\u534f\u8bae\u5b9a\u4e49\u670d\u52a1\u6cbb\u7406\u89c4\u5219\uff0c\u9762\u5411\u591a\u8bed\u8a00\u5f02\u6784\u5316\u67b6\u6784\uff0c\u8986\u76d6\u5fae\u670d\u52a1\u6846\u67b6\u53ca\u4e0a\u4e0b\u6e38\u5173\u8054\u7ec4\u4ef6\u3002\u65e0\u8bba\u5fae\u670d\u52a1\u7684\u8bed\u8a00\u662f Java, Go, Node.js \u8fd8\u662f\u5176\u5b83\u8bed\u8a00\uff0c\u65e0\u8bba\u662f\u6807\u51c6\u5fae\u670d\u52a1\u8fd8\u662f Mesh \u63a5\u5165\uff0c\u4ece\u7f51\u5173\u5230\u5fae\u670d\u52a1\u8c03\u7528\uff0c\u518d\u5230\u5fae\u670d\u52a1\u5bf9\u6570\u636e\u5e93/\u7f13\u5b58\u7684\u8bbf\u95ee\uff0c\u5f00\u53d1\u8005\u90fd\u53ef\u4ee5\u901a\u8fc7\u540c\u4e00\u5957 OpenSergo CRD \u6807\u51c6\u914d\u7f6e\u8fdb\u884c\u7edf\u4e00\u7684\u6cbb\u7406\u7ba1\u63a7\uff0c\u800c\u65e0\u9700\u5173\u6ce8\u5404\u6846\u67b6\u3001\u8bed\u8a00\u7684\u5dee\u5f02\u70b9\uff0c\u964d\u4f4e\u5f02\u6784\u5316\u3001\u5168\u94fe\u8def\u5fae\u670d\u52a1\u6cbb\u7406\u7ba1\u63a7\u7684\u590d\u6742\u5ea6\u3002"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"overview",src:t(6426).Z,width:"1417",height:"737"})),(0,o.kt)("p",null,"OpenSergo \u63d0\u4f9b Java\u3001Go \u7b49\u591a\u8bed\u8a00\u7684 SDK\uff0c\u5404\u4e2a\u6846\u67b6\u751f\u6001\u53ef\u4ee5\u975e\u5e38\u65b9\u4fbf\u5730\u901a\u8fc7 OpenSergo SDK \u6765\u5bf9\u63a5 OpenSergo \u6807\u51c6\u914d\u7f6e\uff0c\u63a5\u5165\u5230 OpenSergo \u751f\u6001\u4e2d\uff0c\u901a\u8fc7 OpenSergo \u63a7\u5236\u5e73\u9762 (Control Plane) \u7edf\u4e00\u7ba1\u7406\u670d\u52a1\u6cbb\u7406\u89c4\u5219\u3002"),(0,o.kt)("h2",{id:"\u5fae\u670d\u52a1\u89c6\u89d2\u7684\u6570\u636e\u5e93\u6cbb\u7406\u662f\u4fdd\u969c\u670d\u52a1\u7a33\u5b9a\u6027\u7684\u5173\u952e\u4e00\u73af"},"\u5fae\u670d\u52a1\u89c6\u89d2\u7684\u6570\u636e\u5e93\u6cbb\u7406\u662f\u4fdd\u969c\u670d\u52a1\u7a33\u5b9a\u6027\u7684\u5173\u952e\u4e00\u73af"),(0,o.kt)("p",null,"\u63d0\u5230\u201c\u5fae\u670d\u52a1\u6cbb\u7406\u201d\uff0c\u5f88\u591a\u5f00\u53d1\u8005\u4f1a\u9996\u5148\u60f3\u5230\u9488\u5bf9\u5fae\u670d\u52a1\u4e4b\u95f4\u7684\u8c03\u7528\u6d41\u91cf\u8fdb\u884c\u6cbb\u7406\uff0c\u4f46\u5f88\u591a\u65f6\u5019\u5927\u5bb6\u5bb9\u6613\u5ffd\u89c6\u6389\u5fae\u670d\u52a1\u8bbf\u95ee\u5b58\u50a8\u4e0e\u5176\u5b83\u4e2d\u95f4\u4ef6\u7684\u8fd9\u90e8\u5206\u6d41\u91cf\u3002\u5728\u4e00\u4e2a\u771f\u5b9e\u7684\u4e1a\u52a1\u751f\u4ea7\u73af\u5883\u4e2d\uff0c\u6d41\u91cf\u9996\u5148\u5148\u8fdb\u5165\u5165\u53e3\u7f51\u5173\uff08\u5982 Nginx\u3001Envoy\uff09\uff0c\u518d\u6d41\u8f6c\u5230\u540e\u7aef Web Server\uff0c\u518d\u6d41\u8f6c\u5230\u5fae\u670d\u52a1\u4e4b\u95f4\u7684 RPC \u8c03\u7528\uff0c\u518d\u6d41\u8f6c\u5230\u9488\u5bf9\u6570\u636e\u5e93\u3001\u7f13\u5b58\u3001\u6d88\u606f\u7b49\u5b58\u50a8/\u4e2d\u95f4\u4ef6\u7684\u8bbf\u95ee\u3002\u5728\u8fd9\u6837\u4e00\u4e2a\u5168\u94fe\u8def\u7684\u67b6\u6784\u4e2d\uff0c\u4ec5\u4ec5\u5173\u6ce8\u5fae\u670d\u52a1\u4e4b\u95f4\u7684\u8c03\u7528\u662f\u4e0d\u591f\u7684\uff0c\u6211\u4eec\u9700\u8981\u9488\u5bf9\u94fe\u8def\u4e2d\u7684\u6bcf\u4e00\u73af\u5206\u522b\u8fdb\u884c\u9488\u5bf9\u6027\u7684\u6cbb\u7406\u3002\u5176\u4e2d\u5fae\u670d\u52a1\u5bf9\u6570\u636e\u5e93\u7684\u8bbf\u95ee\u662f\u975e\u5e38\u666e\u904d\u7684\uff0c\u4e5f\u662f\u5bb9\u6613\u51fa\u73b0\u7a33\u5b9a\u6027\u95ee\u9898\u7684\u4e00\u73af\u3002\u6bd4\u5982\uff1a"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"\u67d0\u4e2a\u5e94\u7528\u67d0\u7c7b\u62a5\u8868 SQL \u8bbf\u95ee\u91cf\u975e\u5e38\u5927\uff0c\u4e14\u67e5\u8be2\u975e\u5e38\u6d88\u8017\u6027\u80fd\uff0c\u628a\u6570\u636e\u5e93 CPU \u6253\u6ee1"),(0,o.kt)("li",{parentName:"ul"},"\u6162 SQL \u8bbf\u95ee\u975e\u5e38\u591a\uff0c\u5360\u6ee1\u8fde\u63a5\u6c60/\u4e1a\u52a1\u7ebf\u7a0b\u6c60\uff0c\u5bfc\u81f4\u670d\u52a1\u65e0\u6cd5\u5904\u7406\u6b63\u5e38\u8bf7\u6c42\uff0c\u751a\u81f3\u5bfc\u81f4\u7ea7\u8054\u96ea\u5d29"),(0,o.kt)("li",{parentName:"ul"},"\u8fde\u63a5\u6c60\u53c2\u6570\u914d\u7f6e\u4e0d\u5408\u7406\uff0c\u5bfc\u81f4\u5927\u91cf SQL \u5199\u64cd\u4f5c\u65f6\u65e0\u6cd5\u6709\u6548\u83b7\u53d6\u8fde\u63a5\uff0c\u4e1a\u52a1\u5927\u91cf\u62a5\u9519"),(0,o.kt)("li",{parentName:"ul"},"\u6570\u636e\u5e93\u8bbf\u95ee\u9700\u8981\u6309\u73af\u5883\u6807\u8fdb\u884c\u9694\u79bb\uff0c\u6bd4\u5982\u7070\u5ea6\u6570\u636e\u5199\u5165\u5230\u7070\u5ea6\u8868\u4e2d")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"db-gov-bg",src:t(4657).Z,width:"2204",height:"1184"})),(0,o.kt)("p",null,"\u5bf9\u4e8e\u5927\u591a\u6570\u7684\u540e\u7aef\u5e94\u7528\u6765\u8bb2\uff0c\u7cfb\u7edf\u6027\u80fd\u6269\u5c55\u7684\u74f6\u9888\u4e3b\u8981\u53d7\u9650\u4e8e\u6570\u636e\u5e93\u3002\u5c24\u5176\u5728\u5fae\u670d\u52a1\u7684\u73af\u5883\u4e0b\uff0c\u6570\u636e\u5e93\u7684\u6027\u80fd\u6cbb\u7406\u95ee\u9898\u5f80\u5f80\u4e5f\u662f\u56e2\u961f\u4f18\u5148\u7ea7\u6700\u9ad8\u7684\u51e0\u7c7b\u5de5\u4f5c\u4e4b\u4e00\uff0c\u6570\u636e\u5e93\u6cbb\u7406\u81ea\u7136\u4e5f\u6210\u4e3a\u5fae\u670d\u52a1\u6cbb\u7406\u4e2d\u5fc5\u4e0d\u53ef\u5c11\u7684\u4e00\u73af\u3002\u6211\u4eec\u671f\u671b\u5f00\u53d1\u8005\u53ef\u4ee5\u7ed3\u5408\u6570\u636e\u5e93\u6cbb\u7406\u80fd\u529b\uff0c\u6765\u4fdd\u969c\u5fae\u670d\u52a1\u8bbf\u95ee\u6570\u636e\u5e93\u7684\u7a33\u5b9a\u6027\uff08\u4fdd\u62a4\u5fae\u670d\u52a1\u81ea\u8eab\u4e0d\u88ab\u62d6\u57ae\uff09\uff0c\u540c\u65f6\u4e5f\u4fdd\u969c\u6570\u636e\u5e93\u7684\u7a33\u5b9a\u6027\u3002"),(0,o.kt)("h2",{id:"opensergo-\u8054\u5408-shardingsphere-\u793e\u533a\u5171\u5efa\u6570\u636e\u5e93\u6cbb\u7406\u6807\u51c6"},"OpenSergo \u8054\u5408 ShardingSphere \u793e\u533a\u5171\u5efa\u6570\u636e\u5e93\u6cbb\u7406\u6807\u51c6"),(0,o.kt)("p",null,"\u57fa\u4e8e\u4ee5\u4e0a\u80cc\u666f\uff0cOpenSergo \u793e\u533a\u671f\u671b\u7ed3\u5408\u4f01\u4e1a\u4e0e\u5f00\u6e90\u793e\u533a\u7684\u7ecf\u9a8c\uff0c\u62bd\u51fa\u4e00\u5957\u901a\u7528\u7684\u3001\u4ece\u5fae\u670d\u52a1\u89c6\u89d2\u51fa\u53d1\u7684\u6570\u636e\u5e93\u6cbb\u7406\u6807\u51c6\u89c4\u8303\u3002",(0,o.kt)("a",{parentName:"p",href:"https://shardingsphere.apache.org/"},"ShardingSphere")," \u4f5c\u4e3a\u6570\u636e\u5e93\u6cbb\u7406\u9886\u57df\u7684\u6807\u6746\u9879\u76ee\uff0c\u6c89\u6dc0\u4e86\u975e\u5e38\u4e30\u5bcc\u7684\u6700\u4f73\u5b9e\u8df5\u4e0e\u6280\u672f\u7ecf\u9a8c\uff0c\u53ef\u4ee5\u5f88\u597d\u5730\u4e3a OpenSergo \u8865\u5145\u6570\u636e\u5e93\u6cbb\u7406\u9886\u57df\u7684\u7a7a\u7f3a\u3002",(0,o.kt)("strong",{parentName:"p"},"\u56e0\u6b64 OpenSergo \u793e\u533a\u8054\u5408 ShardingSphere \u793e\u533a\u5171\u5efa\u5fae\u670d\u52a1\u89c6\u89d2\u7684\u6570\u636e\u5e93\u6cbb\u7406\u6807\u51c6\uff0c\u6269\u5145\u6cbb\u7406\u8fb9\u754c\uff0c\u8ba9\u793e\u533a\u80fd\u591f\u4ee5\u6807\u51c6\u5316\u7684\u65b9\u5f0f\u9488\u5bf9\u4e0d\u540c\u6570\u636e\u5c42\u6846\u67b6\u4e0e\u6d41\u91cf\u8fdb\u884c\u7edf\u4e00\u6cbb\u7406\u7ba1\u63a7\uff0c\u5171\u540c\u63a8\u8fdb\u6cbb\u7406\u9886\u57df\u6280\u672f\u4e0e\u751f\u6001\u6f14\u8fdb\u3002")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"opensergo-db-governance-overview",src:t(2638).Z,width:"2216",height:"1000"})),(0,o.kt)("p",null,"\u5bf9\u4e8e\u6b64\u6b21 OpenSergo \u4e0e ShardingSphere \u793e\u533a\u4e4b\u95f4\u7684\u5408\u4f5c\uff0c\u53cc\u65b9\u793e\u533a\u8d1f\u8d23\u4eba\u90fd\u5bf9\u6b64\u6b21\u5408\u4f5c\u8868\u8fbe\u4e86\u81ea\u5df1\u7684\u89c2\u70b9\uff1a"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("strong",{parentName:"p"},"Apache ShardingSphere PMC Chair \u5f20\u4eae"),": \u5728\u5fae\u670d\u52a1\u9886\u57df\uff0c\u670d\u52a1\u95f4\u7684\u4ea4\u4e92\u4e0e\u534f\u4f5c\u5df2\u65e5\u81fb\u5b8c\u5584\uff0c\u800c\u670d\u52a1\u5bf9\u6570\u636e\u5e93\u7684\u8bbf\u95ee\u5374\u4f9d\u7136\u7f3a\u5931\u884c\u4e4b\u6709\u6548\u7684\u6807\u51c6\u3002ShardingSphere \u81ea\u5f00\u6e90\u4ee5\u6765\uff0c\u4e00\u76f4\u6301\u7eed\u4e0d\u65ad\u7684\u8df5\u884c\u7740\u201c\u8fde\u63a5\u3001\u589e\u5f3a\u3001\u53ef\u63d2\u62d4\u201d\u7684\u8bbe\u8ba1\u54f2\u5b66\u3002\u5176\u4e2d\uff0c\u201c\u8fde\u63a5\u201d\u5219\u662f\u5e0c\u671b\u63d0\u4f9b\u6807\u51c6\u5316\u7684\u534f\u8bae\u548c\u63a5\u53e3\uff0c\u6253\u7834\u5f00\u53d1\u8bed\u8a00\u8bbf\u95ee\u5f02\u6784\u6570\u636e\u5e93\u7684\u58c1\u5792\u3002OpenSergo \u63d0\u51fa\u4e86\u5fae\u670d\u52a1\u6cbb\u7406\u7684\u6807\u51c6\uff0c\u5e76\u9996\u6b21\u5c06\u6570\u636e\u5e93\u7684\u8bbf\u95ee\u653e\u5728\u4e86\u6807\u51c6\u4e2d\uff0c\u975e\u5e38\u5177\u5907\u524d\u77bb\u6027\u3002\u4f5c\u4e3a\u8bbf\u95ee\u6570\u636e\u5e93\u91cd\u8981\u5165\u53e3\u7684\u5fae\u670d\u52a1\uff0c\u6211\u975e\u5e38\u5e0c\u671b ShardingSphere \u548c OpenSergo \u5171\u5efa\u6807\u51c6\u3002")),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("strong",{parentName:"p"},"OpenSergo && Sentinel \u793e\u533a\u8d1f\u8d23\u4eba \u8d75\u5955\u8c6a\uff08\u5bbf\u4f55\uff09"),"\uff1a\u5728\u5fae\u670d\u52a1\u6cbb\u7406\u9886\u57df\u4e2d\uff0c\u9664\u4e86\u5fae\u670d\u52a1\u672c\u8eab\u7684\u6cbb\u7406\u4e4b\u5916\uff0c\u9488\u5bf9\u6570\u636e\u5e93\u8bbf\u95ee\u7684\u6cbb\u7406\u4e5f\u662f\u4fdd\u969c\u4e1a\u52a1\u53ef\u9760\u6027\u4e0e\u8fde\u7eed\u6027\u7684\u5173\u952e\u4e00\u73af\u3002ShardingSphere \u4f5c\u4e3a\u6570\u636e\u5e93\u6cbb\u7406\u9886\u57df\u7684\u6807\u6746\u9879\u76ee\uff0c\u6c89\u6dc0\u4e86\u975e\u5e38\u4e30\u5bcc\u7684\u6700\u4f73\u5b9e\u8df5\u4e0e\u6280\u672f\u7ecf\u9a8c\uff0c\u53ef\u4ee5\u5f88\u597d\u5730\u4e3a OpenSergo \u8865\u5145\u6570\u636e\u5e93\u6cbb\u7406\u9886\u57df\u7684\u7a7a\u7f3a\u3002\u56e0\u6b64\u6211\u4eec\u8054\u5408 ShardingSphere \u793e\u533a\u5171\u5efa\u5fae\u670d\u52a1\u89c6\u89d2\u7684\u6570\u636e\u5e93\u6cbb\u7406\u6807\u51c6\uff0c\u6269\u5145\u6cbb\u7406\u8fb9\u754c\uff0c\u671f\u5f85\u8ba9\u793e\u533a\u80fd\u591f\u4ee5\u6807\u51c6\u5316\u7684\u65b9\u5f0f\u9488\u5bf9\u4e0d\u540c\u6570\u636e\u5c42\u6846\u67b6\u4e0e\u6d41\u91cf\u8fdb\u884c\u7edf\u4e00\u6cbb\u7406\u7ba1\u63a7\uff0c\u5171\u540c\u63a8\u8fdb\u6cbb\u7406\u9886\u57df\u6280\u672f\u4e0e\u751f\u6001\u6f14\u8fdb\u3002")),(0,o.kt)("p",null,"OpenSergo \u5fae\u670d\u52a1\u89c6\u89d2\u7684\u6570\u636e\u5e93\u6cbb\u7406\u6807\u51c6\u4e3b\u8981\u5305\u62ec\u4ee5\u4e0b\u51e0\u90e8\u5206\uff1a"),(0,o.kt)("h3",{id:"\u5bf9\u6570\u636e\u5e93-workload-\u53ca\u8bbf\u95ee\u5bf9\u8c61\u7684\u62bd\u8c61"},"\u5bf9\u6570\u636e\u5e93 workload \u53ca\u8bbf\u95ee\u5bf9\u8c61\u7684\u62bd\u8c61"),(0,o.kt)("p",null,"\u5728\u6cbb\u7406\u89c4\u5219\u4e2d\uff0c\u6211\u4eec\u901a\u5e38\u9700\u8981\u6307\u5b9a\u89c4\u5219\u4f5c\u7528\u7684\u6570\u636e\u5e93\u5b9e\u4f8b\uff08\u6216\u5b9e\u4f8b\u7ec4\uff09\uff0c\u6216\u8005\u6ee1\u8db3\u7684 SQL \u6761\u4ef6\u3002\u9488\u5bf9\u8fd9\u4e00\u90e8\u5206\uff0c\u6211\u4eec\u5728 OpenSergo \u6570\u636e\u5e93\u6cbb\u7406\u6807\u51c6\u4e2d\u9488\u5bf9\u6570\u636e\u5e93 target workload \u53ca\u8bbf\u95ee\u5bf9\u8c61\u8fdb\u884c\u4e86\u4e00\u4e9b\u62bd\u8c61\u3002"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"\u865a\u62df\u6570\u636e\u5e93 (VirtualDatabase)"),"\uff1a\u5728\u6570\u636e\u5e93\u6cbb\u7406\u4e2d\uff0c\u4e0d\u7ba1\u662f\u8bfb\u5199\u5206\u79bb\u3001\u5206\u5e93\u5206\u8868\u3001\u5f71\u5b50\u5e93\uff0c\u8fd8\u662f\u52a0\u5bc6\u3001\u5ba1\u8ba1\u548c\u8bbf\u95ee\u63a7\u5236\u7b49\uff0c\u90fd\u9700\u8981\u4f5c\u7528\u5728\u4e00\u4e2a\u5177\u4f53\u7684\u6570\u636e\u5e93\u4e4b\u4e0a\u3002\u5728\u8fd9\u91cc\u5c06\u8fd9\u6837\u7684\u4e00\u4e2a\u903b\u8f91\u7684\u6570\u636e\u5e93\u79f0\u4e3a\u865a\u62df\u6570\u636e\u5e93\uff0c\u5373 VirtualDatabase\u3002VirtualDatabase \u5728\u5e94\u7528\u770b\u6765\u662f\u4e00\u7ec4\u7279\u5b9a\u7684\u6570\u636e\u5e93\u8bbf\u95ee\u4fe1\u606f\uff0c\u5e76\u901a\u8fc7\u7ed1\u5b9a\u7279\u5b9a\u7684\u6cbb\u7406\u7b56\u7565\u5b9e\u73b0\u76f8\u5e94\u7684\u6cbb\u7406\u80fd\u529b"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"\u6570\u636e\u5e93\u7aef\u70b9 (DatabaseEndpoint)"),"\uff1a\u5728\u6570\u636e\u5e93\u6cbb\u7406\u4e2d\uff0c\u901a\u8fc7 VirtualDatabase \u5411\u5e94\u7528\u58f0\u660e\u4e86\u53ef\u4ee5\u4f7f\u7528\u7684\u903b\u8f91\u6570\u636e\u5e93\uff0c\u800c\u6570\u636e\u7684\u771f\u5b9e\u5b58\u50a8\u5219\u4f9d\u8d56\u4e8e\u8fd9\u6837\u7684\u4e00\u4e2a\u7269\u7406\u7684\u6570\u636e\u5e93\uff0c\u8fd9\u91cc\u79f0\u4e3a\u6570\u636e\u5e93\u8bbf\u95ee\u7aef\u70b9\uff0c\u5373 DatabaseEndpoint\u3002DatabaseEndpoint \u5bf9\u5e94\u7528\u65e0\u611f\u77e5\uff0c\u5b83\u53ea\u80fd\u88ab VirtualDatabase \u901a\u8fc7\u7279\u5b9a\u6cbb\u7406\u7b56\u7565\u6240\u7ed1\u5b9a\u7136\u540e\u8fde\u63a5\u548c\u4f7f\u7528\u3002")),(0,o.kt)("p",null,"\u9488\u5bf9\u8bbf\u95ee\u5bf9\u8c61\u7684\u6761\u4ef6\u62bd\u8c61\uff1a"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"\u6570\u636e\u5e93\u8bbf\u95ee\u5bf9\u8c61 (DatabaseAccessTarget)"),"\uff1a\u5b9a\u4e49\u4e00\u7ec4\u5339\u914d\u6761\u4ef6\uff0c\u5982\u9488\u5bf9\u67d0\u4e2a\u5b9e\u4f8b/\u5e93/\u8868\u7684\u8bbf\u95ee\u3001\u9488\u5bf9\u67d0\u7c7b SQL \u6027\u8d28\uff08\u8bfb/\u5199\u64cd\u4f5c\uff09\u3001\u6309 SQL pattern \u5339\u914d\u3001\u6309 SQL \u53c2\u6570\u5339\u914d\u7b49\u3002\u5c06 DatabaseAccessTarget \u4e0e\u5177\u4f53\u7684\u6cbb\u7406\u89c4\u5219\u7ed3\u5408\uff0c\u6211\u4eec\u53ef\u4ee5\u5b9e\u73b0\u7ec6\u7c92\u5ea6\u7684\u6570\u636e\u5e93\u6d41\u91cf\u6cbb\u7406\u3002")),(0,o.kt)("h3",{id:"\u6d41\u91cf\u6cbb\u7406\u5728\u6570\u636e\u5e93\u8bbf\u95ee\u7684\u4f53\u73b0"},"\u6d41\u91cf\u6cbb\u7406\u5728\u6570\u636e\u5e93\u8bbf\u95ee\u7684\u4f53\u73b0"),(0,o.kt)("p",null,"\u5728\u5fae\u670d\u52a1\u5bf9\u6570\u636e\u5e93\u7684\u8bbf\u95ee\u4e2d\uff0c\u6d41\u91cf\u8def\u7531\u3001\u6d41\u91cf\u9694\u79bb\u3001\u6d41\u63a7\u964d\u7ea7\u4e0e\u5bb9\u9519\u7b49\u76f8\u5173\u6d41\u91cf\u6cbb\u7406\u80fd\u529b\u662f\u6570\u636e\u5e93\u6cbb\u7406\u4e2d\u975e\u5e38\u91cd\u8981\u7684\u4e00\u5757\u3002"),(0,o.kt)("p",null,"\u5728\u6d41\u63a7\u964d\u7ea7\u4e0e\u5bb9\u9519\u9886\u57df\uff0c\u6211\u4eec\u590d\u7528\u4e86 OpenSergo \u6d41\u63a7\u964d\u7ea7\u4e0e\u5bb9\u9519\u6807\u51c6\u3002OpenSergo \u6d41\u63a7\u964d\u7ea7\u4e0e\u5bb9\u9519 spec \u5b9a\u4e49\u4e86\u4e09\u8981\u7d20\uff1aTarget\uff08\u9488\u5bf9\u600e\u6837\u7684\u6d41\u91cf\uff09\u3001Strategy\uff08\u5bf9\u5e94\u600e\u6837\u7684\u6d41\u91cf\u6cbb\u7406\u7b56\u7565\uff09\u3001FallbackAction\uff08\u89e6\u53d1\u7b56\u7565\u4e4b\u540e\u7684\u884c\u4e3a\uff09\u3002\u5728\u9488\u5bf9\u6570\u636e\u5e93\u8bbf\u95ee\u7684\u6cbb\u7406\u4e2d\uff0c\u6211\u4eec\u5c06\u6d41\u91cf\u6761\u4ef6\u62bd\u8c61\u4e3a ",(0,o.kt)("inlineCode",{parentName:"p"},"DatabaseAccessTarget"),"\uff0c\u7ed3\u5408 OpenSergo \u81ea\u6709\u7684\u6d41\u63a7\u3001\u5e76\u53d1\u63a7\u5236\u3001\u7194\u65ad\u7b49\u7b56\u7565\uff0c\u5373\u53ef\u4ee5\u5b9e\u73b0\u7ec6\u7c92\u5ea6\u7684\u6d41\u63a7\u964d\u7ea7\u4e0e\u5bb9\u9519\u3002"),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/9434884/201811647-23da5d68-1c7f-4fcf-b6ca-6c3f9e1dae5b.png",alt:"db-ft"})),(0,o.kt)("p",null,"\u540c\u65f6\u6570\u636e\u5e93\u6d41\u91cf\u6cbb\u7406\u4f53\u7cfb\u4e2d\u8fd8\u6709\u4e00\u4e9b\u5173\u952e\u7684\u3001\u6570\u636e\u5e93\u9886\u57df\u7279\u6709\u7684\u6cbb\u7406\u80fd\u529b\uff1a"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"\u8bfb\u5199\u6d41\u91cf\u8def\u7531 (ReadWriteSplitting)"),"\uff1a\u8bfb\u5199\u5206\u79bb\u662f\u5e38\u7528\u7684\u6570\u636e\u5e93\u6269\u5c55\u65b9\u5f0f\u4e4b\u4e00\uff0c\u4e3b\u5e93\u7528\u4e8e\u4e8b\u52a1\u6027\u7684\u8bfb\u5199\u64cd\u4f5c\uff0c\u4ece\u5e93\u4e3b\u8981\u7528\u4e8e\u67e5\u8be2\u7b49\u64cd\u4f5c\u3002\u8bfb\u5199\u6d41\u91cf\u8def\u7531\u89c4\u5219\u53ef\u4ee5\u6307\u5b9a\u5c06\u8bfb SQL \u8def\u7531\u5230\u8bfb\u5e93\uff0c\u4e8b\u52a1\u6027\u7684\u8bfb\u5199\u64cd\u4f5c\u8def\u7531\u5230\u4e3b\u5e93\u3002"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"\u5206\u5e93\u5206\u8868\u8def\u7531 (Sharding)"),"\uff1a\u6570\u636e\u5206\u7247\u8def\u7531\u662f\u57fa\u4e8e\u6570\u636e\u5c5e\u6027\u4e00\u79cd\u6269\u5c55\u7b56\u7565\uff0c\u5bf9\u6570\u636e\u5c5e\u6027\u8fdb\u884c\u8ba1\u7b97\u540e\u5c06\u8bf7\u6c42\u8def\u7531\u5230\u7279\u5b9a\u7684\u6570\u636e\u540e\u7aef\uff0c\u76ee\u524d\u5206\u4e3a\u5206\u7247\u952e\u5206\u7247\u548c\u81ea\u52a8\u5206\u7247\u3002\u5176\u4e2d\u5206\u7247\u952e\u5206\u7247\u4e2d\u9700\u8981\u6307\u660e\u9700\u8981\u5206\u7247\u7684\u8868\u3001\u5217\u3001\u4ee5\u53ca\u8fdb\u884c\u5206\u7247\u7684\u7b97\u6cd5\u3002"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"\u6570\u636e\u6d41\u91cf\u9694\u79bb (\u5f71\u5b50\u5e93\u8868 Shadow)"),"\uff1a\u5f71\u5b50\u5e93\u8868\u53ef\u4ee5\u5e2e\u52a9\u5728\u7070\u5ea6\u73af\u5883\u6216\u8005\u6d4b\u8bd5\u73af\u5883\u4e2d\uff0c\u63a5\u6536\u7070\u5ea6\u6d41\u91cf\u6216\u8005\u6d4b\u8bd5\u6570\u636e\u8bf7\u6c42\uff0c\u7ed3\u5408\u5f71\u5b50\u7b97\u6cd5\u7b49\u7075\u6d3b\u914d\u7f6e\u591a\u79cd\u8def\u7531\u65b9\u5f0f\u3002"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"\u6570\u636e\u52a0\u5bc6 (Encryption)"),"\uff1a\u4f01\u4e1a\u5f80\u5f80\u56e0\u4e3a\u5b89\u5168\u5ba1\u8ba1\u548c\u5408\u89c4\u7684\u8981\u6c42\uff0c\u9700\u8981\u5bf9\u6570\u636e\u5b58\u50a8\u63d0\u4f9b\u591a\u79cd\u5b89\u5168\u52a0\u56fa\u63aa\u65bd\uff0c\u6bd4\u5982\u6570\u636e\u52a0\u5bc6\u3002 \u6570\u636e\u52a0\u5bc6\u901a\u8fc7\u5bf9\u7528\u6237\u8f93\u5165\u7684 SQL \u8fdb\u884c\u89e3\u6790\uff0c\u5e76\u4f9d\u636e\u7528\u6237\u63d0\u4f9b\u7684\u52a0\u5bc6\u89c4\u5219\u5bf9 SQL \u8fdb\u884c\u6539\u5199\uff0c\u4ece\u800c\u5b9e\u73b0\u5bf9\u539f\u6587\u6570\u636e\u8fdb\u884c\u52a0\u5bc6\uff0c\u5e76\u5c06\u539f\u6587\u6570\u636e\uff08\u53ef\u9009\uff09\u53ca\u5bc6\u6587\u6570\u636e\u540c\u65f6\u5b58\u50a8\u5230\u5e95\u5c42\u6570\u636e\u5e93\u3002\u5728\u7528\u6237\u67e5\u8be2\u6570\u636e\u65f6\uff0c\u5b83\u4ec5\u4ece\u6570\u636e\u5e93\u4e2d\u53d6\u51fa\u5bc6\u6587\u6570\u636e\uff0c\u5e76\u5bf9\u5176\u89e3\u5bc6\uff0c\u6700\u7ec8\u5c06\u89e3\u5bc6\u540e\u7684\u539f\u59cb\u6570\u636e\u8fd4\u56de\u7ed9\u7528\u6237\u3002")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"db-gov-feature-intro-1",src:t(7995).Z,width:"3484",height:"908"})),(0,o.kt)("p",null,"\u4ee5\u4e0b\u662f\u4e00\u4e2a\u8bfb\u5199\u6d41\u91cf\u8def\u7531\u89c4\u5219\u7684\u793a\u4f8b\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},'# \u865a\u62df\u6570\u636e\u5e93\u914d\u7f6e\napiVersion: database.opensergo.io/v1alpha1\nkind: VirtualDatabase\nmetadata:\n  name: readwrite_splitting_db\nspec:\n  services:\n  - name: readwrite_splitting_db\n    databaseMySQL:\n      db: readwrite_splitting_db\n      host: localhost\n      port: 3306\n      user: root\n      password: root\n    readWriteSplitting: "readwrite"  # \u58f0\u660e\u6240\u9700\u8981\u7684\u8bfb\u5199\u5206\u79bb\u7b56\u7565\n---\n# \u5199\u6570\u636e\u6e90\u7684\u6570\u636e\u5e93\u7aef\u70b9\u914d\u7f6e\napiVersion: database.opensergo.io/v1alpha1\nkind: DatabaseEndpoint\nmetadata:\n  name: write_ds\nspec:\n  database:\n    MySQL:                 # \u58f0\u660e\u540e\u7aef\u6570\u636e\u6e90\u7684\u7c7b\u578b\u53ca\u76f8\u5173\u4fe1\u606f\n      url: jdbc:mysql://192.168.1.110:3306/demo_write_ds?serverTimezone=UTC&useSSL=false\n      username: root\n      password: root\n      connectionTimeout: 30000\n      idleTimeoutMilliseconds: 60000\n      maxLifetimeMilliseconds: 1800000\n      maxPoolSize: 50\n      minPoolSize: 1\n---\n# \u7b2c\u4e00\u4e2a\u8bfb\u6570\u636e\u6e90\u7684\u6570\u636e\u5e93\u7aef\u70b9\u914d\u7f6e\napiVersion: database.opensergo.io/v1alpha1\nkind: DatabaseEndpoint\nmetadata:\n  name: read_ds_0\nspec:\n  database:\n    MySQL:                 # \u58f0\u660e\u540e\u7aef\u6570\u636e\u6e90\u7684\u7c7b\u578b\u53ca\u76f8\u5173\u4fe1\u606f\n      url: jdbc:mysql://192.168.1.110:3306/demo_read_ds_0?serverTimezone=UTC&useSSL=false\n      username: root\n      password: root\n      connectionTimeout: 30000\n      idleTimeoutMilliseconds: 60000\n      maxLifetimeMilliseconds: 1800000\n      maxPoolSize: 50\n      minPoolSize: 1      \n---\n# \u7b2c\u4e8c\u4e2a\u8bfb\u6570\u636e\u6e90\u7684\u6570\u636e\u5e93\u7aef\u70b9\u914d\u7f6e\napiVersion: database.opensergo.io/v1alpha1\nkind: DatabaseEndpoint\nmetadata:\n  name: read_ds_1\nspec:\n  database:\n    MySQL:                              # \u58f0\u660e\u540e\u7aef\u6570\u636e\u6e90\u7684\u7c7b\u578b\u53ca\u76f8\u5173\u4fe1\u606f\n      url: jdbc:mysql://192.168.1.110:3306/demo_read_ds_1?serverTimezone=UTC&useSSL=false\n      username: root\n      password: root\n      connectionTimeout: 30000\n      idleTimeoutMilliseconds: 60000\n      maxLifetimeMilliseconds: 1800000\n      maxPoolSize: 50\n      minPoolSize: 1\n---\n# \u9759\u6001\u8bfb\u5199\u5206\u79bb\u914d\u7f6e\napiVersion: database.opensergo.io/v1alpha1\nkind: ReadWriteSplitting\nmetadata:\n  name: readwrite\nspec:\n  rules:\n    staticStrategy:\n      writeDataSourceName: "write_ds"\n      readDataSourceNames: \n      - "read_ds_0"\n      - "read_ds_1"\n      loadBalancerName: "random"\n    loadBalancers:\n    - loadBalancerName: "random"\n      type: "RANDOM"\n')),(0,o.kt)("p",null,"\u4ee5\u4e0b\u662f\u4e00\u4e2a\u9488\u5bf9\u67d0\u4e2a SQL \u8fdb\u884c\u5e76\u53d1\u63a7\u5236\u7684\u793a\u4f8b\u3002\u8fd9\u4e2a\u89c4\u5219\u4f1a\u9488\u5bf9 foo \u5e94\u7528\u9488\u5bf9 ",(0,o.kt)("inlineCode",{parentName:"p"},"SELECT * FROM users WHERE id = ?")," \u7684 SQL \u8bbf\u95ee\u8fdb\u884c\u5e76\u53d1\u63a7\u5236\uff0c\u5355\u673a\u5e76\u53d1\u6570\u4e0d\u8d85\u8fc7 8\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: traffic.opensergo.io/v1alpha1\nkind: DatabaseAccessTarget\nmetadata:\n  name: target-foo-user-select-sql\nspec:\n  sqlMatch:\n    - exactMatch: \"SELECT * FROM users WHERE id = ?\"\n---\napiVersion: fault-tolerance.opensergo.io/v1alpha1\nkind: ConcurrencyLimitStrategy\nmetadata:\n  name: concurrency-limit-foo\nspec:\n  maxConcurrency: 8\n  limitMode: 'Local'\n---\napiVersion: fault-tolerance.opensergo.io/v1alpha1\nkind: FaultToleranceRule\nmetadata:\n  name: my-sql-conc-limit-rule\nspec:\n  selector:\n    app: foo\n  targets:\n    - targetRef: target-foo-user-select-sql\n  strategies: \n    - name: concurrency-limit-foo\n")),(0,o.kt)("h3",{id:"\u5176\u5b83\u6570\u636e\u5e93\u6cbb\u7406\u80fd\u529b"},"\u5176\u5b83\u6570\u636e\u5e93\u6cbb\u7406\u80fd\u529b"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"\u6570\u636e\u5e93\u53d1\u73b0 (DatabaseDiscovery)"),"\uff1a\u6570\u636e\u5e93\u81ea\u52a8\u53d1\u73b0\u6307\u7684\u662f\u6839\u636e\u6570\u636e\u5e93\u9ad8\u53ef\u7528\u914d\u7f6e\uff0c\u901a\u8fc7\u63a2\u6d4b\u7684\u65b9\u5f0f\u611f\u77e5\u6570\u636e\u6e90\u72b6\u6001\u53d8\u5316\uff0c\u5e76\u5bf9\u6d41\u91cf\u7b56\u7565\u505a\u51fa\u76f8\u5e94\u7684\u8c03\u6574\u3002\u6bd4\u5982\u540e\u7aef\u6570\u636e\u6e90\u4e3a MySQL MGR\uff0c\u90a3\u4e48\u53ef\u4ee5\u914d\u7f6e\u6570\u636e\u5e93\u53d1\u73b0\u7c7b\u578b\u4e3a MYSQL.MGR\uff0c\u6307\u5b9a group-name\uff0c\u5e76\u914d\u7f6e\u76f8\u5e94\u7684\u63a2\u6d4b\u5fc3\u8df3\u8282\u5f8b\u3002"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"\u5206\u5e03\u5f0f\u4e8b\u52a1\u914d\u7f6e (DistributedTransaction)"),"\uff1a\u58f0\u660e\u5206\u5e03\u5f0f\u4e8b\u52a1\u76f8\u5173\u7684\u914d\u7f6e\uff0c\u76ee\u524d\u652f\u6301\u58f0\u660e\u4e8b\u52a1\u7684\u7c7b\u578b\u3002")),(0,o.kt)("h2",{id:"\u5c55\u671b"},"\u5c55\u671b"),(0,o.kt)("p",null,"\u5fae\u670d\u52a1\u89c6\u89d2\u7684\u6570\u636e\u5e93\u6cbb\u7406\u662f\u4fdd\u969c\u5fae\u670d\u52a1\u7a33\u5b9a\u6027\u7684\u91cd\u8981\u4e00\u73af\u3002OpenSergo \u793e\u533a\u5c06\u6301\u7eed\u4e0e ShardingSphere \u53ca Database Mesh \u793e\u533a\u8fdb\u884c\u5408\u4f5c\uff0c\u4e0d\u65ad\u5b8c\u5584\u4e0e\u4e30\u5bcc\u6570\u636e\u5e93\u6cbb\u7406\u6807\u51c6\u53ca\u573a\u666f\u3002\u63a5\u4e0b\u6765\u793e\u533a\u4f1a\u5f00\u5c55 ShardingSphere \u4e0e OpenSergo \u7684\u96c6\u6210\u5de5\u4f5c\uff0c\u5c06\u6570\u636e\u5e93\u6cbb\u7406 spec \u843d\u5730\u5230\u793e\u533a\u5b9e\u73b0\u3002"),(0,o.kt)("p",null,"\u5fae\u670d\u52a1\u6cbb\u7406\u662f\u5fae\u670d\u52a1\u6539\u9020\u6df1\u5165\u5230\u4e00\u5b9a\u9636\u6bb5\u4e4b\u540e\u7684\u5fc5\u7ecf\u4e4b\u8def\uff0c\u662f\u5c06\u5fae\u670d\u52a1\u505a\u7a33\u505a\u597d\u7684\u5173\u952e\u3002OpenSergo \u793e\u533a\u6301\u7eed\u4e0e ShardingSphere\u3001Database Mesh\u3001CloudWeGo\u3001Kratos\u3001Spring Cloud Alibaba\u3001Dubbo \u7b49\u793e\u533a\u5171\u540c\u5efa\u8bbe OpenSergo \u5fae\u670d\u52a1\u6cbb\u7406\u6807\u51c6\uff0c\u5c06\u4f01\u4e1a\u4e0e\u793e\u533a\u4e2d\u5fae\u670d\u52a1\u6cbb\u7406\u7684\u573a\u666f\u4e0e\u6700\u4f73\u5b9e\u8df5\u5171\u540c\u63d0\u53d6\u6210\u6807\u51c6\u89c4\u8303\uff0c\u4e5f\u6b22\u8fce\u66f4\u591a\u793e\u533a\u4e0e\u4f01\u4e1a\u4e00\u8d77\u53c2\u4e0e OpenSergo \u5fae\u670d\u52a1\u6cbb\u7406\u6807\u51c6\u7684\u5171\u5efa\u3002"),(0,o.kt)("p",null,"OpenSergo \u793e\u533a\u73b0\u5728\u5904\u4e8e\u9ad8\u901f\u53d1\u5c55\u9636\u6bb5\uff0c\u4ece\u5fae\u670d\u52a1\u6cbb\u7406\u6807\u51c6\u5b9a\u4e49\uff0c\u5230 Control Plane \u7684\u5b9e\u73b0\uff0c\u518d\u5230 Java/Go/C++/Rust \u7b49\u591a\u8bed\u8a00 SDK \u4e0e\u6cbb\u7406\u529f\u80fd\u7684\u5b9e\u73b0\uff0c\u518d\u5230\u5404\u4e2a\u5fae\u670d\u52a1\u751f\u6001\u7684\u6574\u5408\u4e0e\u843d\u5730\uff0c\u90fd\u8fd8\u6709\u5927\u91cf\u7684\u6f14\u8fdb\u5de5\u4f5c\uff0c\u6b22\u8fce\u793e\u533a\u4e00\u8d77\u53c2\u4e0e\u6807\u51c6\u5b8c\u5584\u4e0e\u4ee3\u7801\u8d21\u732e\u3002"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"OpenSergo \u5f00\u6e90\u8d21\u732e\u5c0f\u7ec4\u6b63\u5728\u706b\u70ed\u62db\u52df\u8d21\u732e\u8005"),"\u3002\u5982\u679c\u60a8\u6709\u65f6\u95f4\uff0c\u6709\u70ed\u60c5\uff0c\u6709\u610f\u613f\uff0c\u6b22\u8fce\u8054\u7cfb\u793e\u533a\u52a0\u5165\u5f00\u6e90\u8d21\u732e\u5c0f\u7ec4\uff0c\u4e00\u8d77\u5171\u540c\u5b8c\u5584 OpenSergo \u548c Sentinel\uff0c\u4e00\u8d77\u4e3b\u5bfc\u5fae\u670d\u52a1\u6cbb\u7406\u6280\u672f\u4e0e\u6807\u51c6\u6f14\u8fdb\u3002Now let's start hacking!"),(0,o.kt)("p",null,"\u6b22\u8fce\u5173\u6ce8 OpenSergo \u793e\u533a\u5fae\u4fe1\u516c\u4f17\u53f7\uff0c\u4e86\u89e3\u5fae\u670d\u52a1\u6cbb\u7406\u793e\u533a\u6700\u65b0\u52a8\u6001\uff1aOpenSergo"))}d.isMDXComponent=!0},2638:function(e,n,t){n.Z=t.p+"assets/images/opensergo-db-governance-overview-bf371dad0d4f8ea740c7149dc284f1e0.jpg"},4657:function(e,n,t){n.Z=t.p+"assets/images/database-governance-background-b33bab01d26d0af07bdc1c510694b137.jpg"},7995:function(e,n,t){n.Z=t.p+"assets/images/db-governance-feature-intro-s1-f305d3bf46b2ed90a228ec6a6a17c9fa.jpg"},6426:function(e,n,t){n.Z=t.p+"assets/images/opensergo-spec-areas-cn-3089657c690085df443ce633db8ad2ae.png"},3395:function(e,n,t){n.Z=t.p+"assets/images/why-do-we-need-spec-background-2fac977371c859603a8322d60b011a6d.jpg"}}]);