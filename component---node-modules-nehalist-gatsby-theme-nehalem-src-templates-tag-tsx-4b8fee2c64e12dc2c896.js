(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{"3//0":function(e,t,a){"use strict";var n=a("q1tI"),r=a.n(n),o=a("vOnD"),i=a("15bR"),l=o.default.div.withConfig({displayName:"subheader__StyledSubheader",componentId:"sc-113zvsz-0"})(["background-color:",";color:",";display:flex;align-items:center;height:90px;margin-bottom:30px;"],(function(e){return e.backgroundColor?e.backgroundColor:"#000"}),(function(e){return e.textColor?e.textColor:"#fff"})),c=o.default.h1.withConfig({displayName:"subheader__SubheaderTitle",componentId:"sc-113zvsz-1"})(["font-size:1.2em;font-weight:bold;color:#fff;margin:0;line-height:1em;"]),d=o.default.small.withConfig({displayName:"subheader__SubheaderSubtitle",componentId:"sc-113zvsz-2"})(["font-weight:normal;display:block;opacity:.9;"]);t.a=function(e){var t=e.title,a=e.subtitle,n=e.backgroundColor,o=e.textColor;return r.a.createElement(l,{backgroundColor:n,textColor:o},r.a.createElement(i.a,null,r.a.createElement(c,null,t,r.a.createElement(d,null,a))))}},"J/tY":function(e,t,a){"use strict";var n=a("q1tI"),r=a.n(n),o=a("15bR"),i=a("fuXR");t.a=function(e){var t=e.posts;return r.a.createElement(o.b,null,t.map((function(e,t){return r.a.createElement(i.a,{title:e.frontmatter.title,path:e.frontmatter.path,featuredImage:e.frontmatter.featuredImage?e.frontmatter.featuredImage.childImageSharp:null,content:e.frontmatter.excerpt,key:t,meta:{time:e.frontmatter.created,timePretty:e.frontmatter.createdPretty,tag:e.frontmatter.tags.length>0?e.frontmatter.tags[0]:null}})})))}},Qg7I:function(e,t,a){"use strict";a.r(t),a.d(t,"query",(function(){return m}));var n=a("q1tI"),r=a.n(n),o=a("IJQQ"),i=a("3//0"),l=a("ywv1"),c=a("PvO4"),d=a("J/tY");t.default=function(e){var t=e.data,a=e.location,n=t.tag,m=t.posts.edges.map((function(e){return e.node}));return!n&&m.length>0&&(n={name:m[0].frontmatter.tags[0],color:c.a.layout.primaryColor,icon:null,featured:!1}),r.a.createElement(o.a,{bigHeader:!1},r.a.createElement(l.a,{title:n.name,location:a,type:"Series"}),r.a.createElement(i.a,{title:n.name,subtitle:m.length+" posts",backgroundColor:n.color}),r.a.createElement(d.a,{posts:m}))};var m="3933631837"},fuXR:function(e,t,a){"use strict";a.d(t,"a",(function(){return g}));var n=a("q1tI"),r=a.n(n),o=a("vOnD"),i=a("Wbzz"),l=a("PvO4"),c=a("9eSz"),d=a.n(c),m=Object(o.default)(i.Link).withConfig({displayName:"style__StyledCard",componentId:"sc-7a2jjo-0"})(["display:block;background-color:#fff;border-radius:3px;box-shadow:0 1px 1px #e6e6e6,0 2px 4px #e6e6e6;transition:.5s all;width:100%;height:100%;overflow:hidden;&:hover{transform:translate3d(0,-5px,0);box-shadow:0 1px 1px #ccc,0 4px 4px #ccc;}"]),s=o.default.article.withConfig({displayName:"style__StyledArticle",componentId:"sc-7a2jjo-1"})(["display:inline-block;width:100%;@media (max-width:","){grid-area:unset !important;}"],l.a.breakpoints.sm),u=Object(o.default)(d.a).withConfig({displayName:"style__FeaturedImage",componentId:"sc-7a2jjo-2"})(["background-position:center;background-size:cover;max-width:100%;border-top-left-radius:3px;",";"],(function(e){return e.halfImage?"\n    width: 50%;\n    float: left;\n    margin-right: 30px;\n    height: 320px;\n    border-bottom-left-radius: 3px;\n\n    @media (max-width: "+l.a.breakpoints.sm+") {\n      width: 100%;\n      float: none;\n      height: 190px;\n    }\n  ":"\n    height: 190px;\n    max-height: 190px;\n    width: 100%;\n    border-top-right-radius: 3px;\n  "})),f=o.default.section.withConfig({displayName:"style__CardContent",componentId:"sc-7a2jjo-3"})(["padding:",";p{margin:15px 0;}h2{font-size:1.2em;}"],(function(e){return e.compact?"10px":"40px"})),p=o.default.section.withConfig({displayName:"style__CardMeta",componentId:"sc-7a2jjo-4"})(["display:flex;justify-content:space-between;margin-bottom:8px;font-size:.8em;opacity:.8;line-height:1em;"]),h=o.default.h2.withConfig({displayName:"style__CardTitle",componentId:"sc-7a2jjo-5"})(["margin:0;padding:0;"]),g=function(e){var t=e.title,a=e.meta,n=e.path,o=e.featuredImage,i=e.content,l=e.halfImage,c=void 0!==l&&l,d=e.compact,g=void 0!==d&&d,b=e.style,x=e.children;return r.a.createElement(s,{style:b},r.a.createElement(m,{to:n},o&&o.fixed&&r.a.createElement(u,{fixed:o.fixed,halfImage:c}),o&&o.sizes&&r.a.createElement(u,{sizes:o.sizes,halfImage:c}),r.a.createElement(f,{compact:g},x,r.a.createElement("header",null,a&&r.a.createElement(p,null,a.tag&&r.a.createElement(r.a.Fragment,null,a.tag),a.time&&r.a.createElement("time",{dateTime:a.time},a.timePretty)),t&&r.a.createElement(h,null,t)),i&&r.a.createElement("p",{dangerouslySetInnerHTML:{__html:i}}))))}}}]);
//# sourceMappingURL=component---node-modules-nehalist-gatsby-theme-nehalem-src-templates-tag-tsx-4b8fee2c64e12dc2c896.js.map