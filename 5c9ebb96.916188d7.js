(window.webpackJsonp=window.webpackJsonp||[]).push([[48],{104:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return d})),n.d(t,"default",(function(){return l}));var o=n(2),a=n(6),r=(n(0),n(174)),i={id:"code",title:"Animated.Code",sidebar_label:"Animated.Code"},c={id:"version-1.x.x/code",title:"Animated.Code",description:"Animated.Code component allows you to define reanimated nodes that you want to execute when their input nodes updates, but aren't necessarily strictly related to some view properties and hence it does not feel right to place them under translate or other prop of an Animated.View. This component renders null, so you can place it in any place you want in your render method. It is required that your code is put inside component as we rely on componentDidMount and componentWillUnmount callbacks to install and cleanup animated nodes. Note that the code you put is going to be executed only once. We currently have no way of telling if your code changes and so it will only be run in componentDidMount. If you wish for your reanimated nodes to be updated when the component updates, you can update the key property of the Animated.Code component, which will effectively unmount old and mount new versions of it in the React tree. You can provide dependencies key which works just like second argueent in useCode.",source:"@site/versioned_docs/version-1.x.x/code.md",permalink:"/react-native-reanimated/docs/code",editUrl:"https://github.com/software-mansion/react-native-reanimated/tree/master/docs/versioned_docs/version-1.x.x/code.md",version:"1.x.x",sidebar_label:"Animated.Code",sidebar:"version-1.x.x/docs",previous:{title:"View, Props, etc",permalink:"/react-native-reanimated/docs/view"}},d=[{value:"<code>Animated.useCode</code>",id:"animatedusecode",children:[]}],s={rightToc:d};function l(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(r.b)("wrapper",Object(o.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"Animated.Code")," component allows you to define reanimated nodes that you want to execute when their input nodes updates, but aren't necessarily strictly related to some view properties and hence it does not feel right to place them under ",Object(r.b)("inlineCode",{parentName:"p"},"translate")," or other prop of an ",Object(r.b)("inlineCode",{parentName:"p"},"Animated.View"),". This component renders ",Object(r.b)("inlineCode",{parentName:"p"},"null"),", so you can place it in any place you want in your render method. It is required that your code is put inside component as we rely on ",Object(r.b)("inlineCode",{parentName:"p"},"componentDidMount")," and ",Object(r.b)("inlineCode",{parentName:"p"},"componentWillUnmount")," callbacks to install and cleanup animated nodes. Note that the code you put is going to be executed only once. We currently have no way of telling if your code changes and so it will only be run in ",Object(r.b)("inlineCode",{parentName:"p"},"componentDidMount"),". If you wish for your reanimated nodes to be updated when the component updates, you can update the ",Object(r.b)("inlineCode",{parentName:"p"},"key")," property of the ",Object(r.b)("inlineCode",{parentName:"p"},"Animated.Code")," component, which will effectively unmount old and mount new versions of it in the React tree. You can provide ",Object(r.b)("inlineCode",{parentName:"p"},"dependencies")," key which works just like second argueent in ",Object(r.b)("inlineCode",{parentName:"p"},"useCode"),"."),Object(r.b)("pre",null,Object(r.b)("code",Object(o.a)({parentName:"pre"},{className:"language-js"}),"<Animated.Code>\n  {() =>\n    block([\n      set(this.transX1, add(multiply(-1, this._transX))),\n      set(this.transX2, add(multiply(-2, this._transX), 120)),\n      set(this.transX3, sub(multiply(2, this._transX), 120)),\n      set(this.transX4, add(multiply(1, this._transX))),\n    ])\n  }\n</Animated.Code>\n")),Object(r.b)("p",null,"or:"),Object(r.b)("pre",null,Object(r.b)("code",Object(o.a)({parentName:"pre"},{className:"language-js"}),"<Animated.Code\n  exec={block([\n    set(this.transX1, add(multiply(-1, this._transX))),\n    set(this.transX2, add(multiply(-2, this._transX), 120)),\n    set(this.transX3, sub(multiply(2, this._transX), 120)),\n    set(this.transX4, add(multiply(1, this._transX))),\n  ])}\n/>\n")),Object(r.b)("h2",{id:"animatedusecode"},Object(r.b)("inlineCode",{parentName:"h2"},"Animated.useCode")),Object(r.b)("p",null,"The ",Object(r.b)("inlineCode",{parentName:"p"},"useCode")," hook acts as an alternative to the ",Object(r.b)("inlineCode",{parentName:"p"},"Animated.Code")," component."),Object(r.b)("pre",null,Object(r.b)("code",Object(o.a)({parentName:"pre"},{className:"language-js"}),"Animated.useCode(\n    () => Node | Node[] | boolean | null | undefined,\n    [...dependencies]\n)\n")),Object(r.b)("p",null,"It's passed as 1st parameter a factory function that should return an optional animated node, or array of nodes (which will be then placed in a ",Object(r.b)("inlineCode",{parentName:"p"},"block")," node), and as 2nd parameter, an array of dependencies. It will update that node, both when the component mounts and every time a value in that array changes. It does nothing on versions of React Native that don't support hooks (<0.59)."),Object(r.b)("pre",null,Object(r.b)("code",Object(o.a)({parentName:"pre"},{className:"language-js"}),"const [animated, setAnimated] = React.useState(false);\nconst [offset, setOffset] = React.useState(20);\n\nAnimated.useCode(\n  () =>\n    animated && [\n      //...\n      set(transX1, add(_transX, offset)),\n    ],\n  [animated, offset]\n);\n")),Object(r.b)("p",null,"We recommend to use ",Object(r.b)("inlineCode",{parentName:"p"},"useCode()")," with the ",Object(r.b)("inlineCode",{parentName:"p"},"react-hooks/exhaustive-deps")," ",Object(r.b)("a",Object(o.a)({parentName:"p"},{href:"https://www.npmjs.com/package/eslint-plugin-react-hooks"}),"eslint rule"),"."))}l.isMDXComponent=!0},174:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return b}));var o=n(0),a=n.n(o);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function d(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=a.a.createContext({}),l=function(e){var t=a.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},p=function(e){var t=l(e.components);return a.a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},m=a.a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,i=e.parentName,s=d(e,["components","mdxType","originalType","parentName"]),p=l(n),m=o,b=p["".concat(i,".").concat(m)]||p[m]||u[m]||r;return n?a.a.createElement(b,c(c({ref:t},s),{},{components:n})):a.a.createElement(b,c({ref:t},s))}));function b(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=m;var c={};for(var d in t)hasOwnProperty.call(t,d)&&(c[d]=t[d]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var s=2;s<r;s++)i[s]=n[s];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);