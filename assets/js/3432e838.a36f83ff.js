"use strict";(self.webpackChunksoftware_designs_and_algorithms=self.webpackChunksoftware_designs_and_algorithms||[]).push([[8087],{3905:function(A,e,t){t.d(e,{Zo:function(){return w},kt:function(){return g}});var n=t(7294);function r(A,e,t){return e in A?Object.defineProperty(A,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):A[e]=t,A}function i(A,e){var t=Object.keys(A);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(A);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(A,e).enumerable}))),t.push.apply(t,n)}return t}function a(A){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?i(Object(t),!0).forEach((function(e){r(A,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(A,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(e){Object.defineProperty(A,e,Object.getOwnPropertyDescriptor(t,e))}))}return A}function f(A,e){if(null==A)return{};var t,n,r=function(A,e){if(null==A)return{};var t,n,r={},i=Object.keys(A);for(n=0;n<i.length;n++)t=i[n],e.indexOf(t)>=0||(r[t]=A[t]);return r}(A,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(A);for(n=0;n<i.length;n++)t=i[n],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(A,t)&&(r[t]=A[t])}return r}var o=n.createContext({}),l=function(A){var e=n.useContext(o),t=e;return A&&(t="function"==typeof A?A(e):a(a({},e),A)),t},w=function(A){var e=l(A.components);return n.createElement(o.Provider,{value:e},A.children)},s={inlineCode:"code",wrapper:function(A){var e=A.children;return n.createElement(n.Fragment,{},e)}},d=n.forwardRef((function(A,e){var t=A.components,r=A.mdxType,i=A.originalType,o=A.parentName,w=f(A,["components","mdxType","originalType","parentName"]),d=l(t),g=r,p=d["".concat(o,".").concat(g)]||d[g]||s[g]||i;return t?n.createElement(p,a(a({ref:e},w),{},{components:t})):n.createElement(p,a({ref:e},w))}));function g(A,e){var t=arguments,r=e&&e.mdxType;if("string"==typeof A||r){var i=t.length,a=new Array(i);a[0]=d;var f={};for(var o in e)hasOwnProperty.call(e,o)&&(f[o]=e[o]);f.originalType=A,f.mdxType="string"==typeof A?A:r,a[1]=f;for(var l=2;l<i;l++)a[l]=t[l];return n.createElement.apply(null,a)}return n.createElement.apply(null,t)}d.displayName="MDXCreateElement"},461:function(A,e,t){t.r(e),t.d(e,{assets:function(){return w},contentTitle:function(){return o},default:function(){return g},frontMatter:function(){return f},metadata:function(){return l},toc:function(){return s}});var n=t(7462),r=t(3366),i=(t(7294),t(3905)),a=["components"],f={sidebar_position:5},o="4. B-Trees",l={unversionedId:"algorithms-and-data-structures-part-1/b-trees",id:"algorithms-and-data-structures-part-1/b-trees",title:"4. B-Trees",description:"B-trees are an immensely powerful tools that are used in SQL and in filesystems. They inherited a loft from red-black trees. Let us figure out what they are and how they work.",source:"@site/docs/7-algorithms-and-data-structures-part-1/b-trees.md",sourceDirName:"7-algorithms-and-data-structures-part-1",slug:"/algorithms-and-data-structures-part-1/b-trees",permalink:"/software-designs-and-algorithms/docs/algorithms-and-data-structures-part-1/b-trees",draft:!1,tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"tutorialSidebar",previous:{title:"3. Red-Black Tree",permalink:"/software-designs-and-algorithms/docs/algorithms-and-data-structures-part-1/red-black_tree"},next:{title:"5. Graphs",permalink:"/software-designs-and-algorithms/docs/algorithms-and-data-structures-part-1/graphs"}},w={},s=[],d={toc:s};function g(A){var e=A.components,f=(0,r.Z)(A,a);return(0,i.kt)("wrapper",(0,n.Z)({},d,f,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"4-b-trees"},"4. B-Trees"),(0,i.kt)("p",null,"B-trees are an immensely powerful tools that are used in SQL and in filesystems. They inherited a loft from red-black trees. Let us figure out what they are and how they work."),(0,i.kt)("p",null,"B-trees are balanced search trees designed to work well on disks or other direct-access secondary storage devices. B-trees are like red-black trees, but they are better at minimizing disk I/O operations. Many database systems use B-trees, or variants of B-trees, to store information."),(0,i.kt)("p",null,'B-trees differ from red-black trees in that B-tree nodes may have many children, from a few to thousands. That is, the "branching factor" of a B-tree can be quite large, although it usually depends on characteristics of the disk unit used. B-trees are similar to red-black trees in that every n-node B-tree has height ',(0,i.kt)("inlineCode",{parentName:"p"},"O(lgn)")," The exact height of a B-tree can be less than that of a red-black tree, however, because its branching factor, and hence the base of the logarithm that expresses its height, can be much larger. Therefore, we can also use B-trees to implement many dynamic-set operations in time ",(0,i.kt)("inlineCode",{parentName:"p"},"O(lgn)"),"."),(0,i.kt)("p",null,"B-trees generalize binary search trees in a natural manner. Next image shows a simple B-tree. If an internal B-tree node x contains ",(0,i.kt)("inlineCode",{parentName:"p"},"x[n]")," keys, then ",(0,i.kt)("inlineCode",{parentName:"p"},"x")," has ",(0,i.kt)("inlineCode",{parentName:"p"},"x[n] + 1")," children. The keys in node ",(0,i.kt)("inlineCode",{parentName:"p"},"x")," serve as dividing points separating the range of keys handled by ",(0,i.kt)("inlineCode",{parentName:"p"},"x")," into ",(0,i.kt)("inlineCode",{parentName:"p"},"x[n]")," C 1 subranges, each handled by one child of ",(0,i.kt)("inlineCode",{parentName:"p"},"x"),". When searching for a key in a B-tree, we make an ",(0,i.kt)("inlineCode",{parentName:"p"},"(x[n] + 1)"),"-way decision based on comparisons with the ",(0,i.kt)("inlineCode",{parentName:"p"},"x[n]")," keys stored at node ",(0,i.kt)("inlineCode",{parentName:"p"},"x"),". The structure of leaf nodes differs from that of internal nodes; we will examine these differences."),(0,i.kt)("p",null,"Figure 5.1"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"B-tree",src:t(4036).Z,width:"936",height:"274"})),(0,i.kt)("p",null,"A B-tree T is a rooted tree (whose root is ",(0,i.kt)("inlineCode",{parentName:"p"},"T.root"),") having the following properties:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Every node ",(0,i.kt)("inlineCode",{parentName:"li"},"x")," has the following attributes:",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"x[n]"),", the number of keys currently stored in node ",(0,i.kt)("inlineCode",{parentName:"li"},"x")),(0,i.kt)("li",{parentName:"ul"},"the ",(0,i.kt)("inlineCode",{parentName:"li"},"x.n")," keys themselves, ",(0,i.kt)("inlineCode",{parentName:"li"},"x[key[1]]; x[key[2]], \u2026, x[key[x[n]]]"),", stored in nondecreasing order, so that ",(0,i.kt)("inlineCode",{parentName:"li"},"x[key[1]] \u2264 x[key[2]] \u2264 \u2026 \u2264 x[key[x[n]]]")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"x.leaf"),", a boolean value that is ",(0,i.kt)("inlineCode",{parentName:"li"},"true")," if ",(0,i.kt)("inlineCode",{parentName:"li"},"x")," is a leaf and ",(0,i.kt)("inlineCode",{parentName:"li"},"false")," if ",(0,i.kt)("inlineCode",{parentName:"li"},"x")," is an internal node."))),(0,i.kt)("li",{parentName:"ul"},"Each internal node ",(0,i.kt)("inlineCode",{parentName:"li"},"x")," also contains ",(0,i.kt)("inlineCode",{parentName:"li"},"x[n] + 1 ")," pointers ",(0,i.kt)("inlineCode",{parentName:"li"},"x[c[1]];x[c[2]]; \u2026 ;x[c[x[n] + 1]]")," to its children. Leaf nodes have no children, and so their ",(0,i.kt)("inlineCode",{parentName:"li"},"c[i]")," attributes are undefined."),(0,i.kt)("li",{parentName:"ul"},"The keys ",(0,i.kt)("inlineCode",{parentName:"li"},"x[key[i]]")," separate the ranges of keys stored in each subtree: if ",(0,i.kt)("inlineCode",{parentName:"li"},"k[i]")," is any key stored in the subtree with root ",(0,i.kt)("inlineCode",{parentName:"li"},"x[c[i]]"),", then:\n",(0,i.kt)("inlineCode",{parentName:"li"},"k1 \u2264 x[key[1]] \u2264 k[2] \u2264 x[key[2]] \u2264 \u2026 \u2264 x[key[x[n]]] \u2264 k[x[n] + 1]")),(0,i.kt)("li",{parentName:"ul"},"All leaves have the same depth, which is the tree's height ",(0,i.kt)("inlineCode",{parentName:"li"},"h")),(0,i.kt)("li",{parentName:"ul"},"Nodes have lower and upper bounds on the number of keys they can contain. We express these bounds in terms of a fixed integer ",(0,i.kt)("inlineCode",{parentName:"li"},"t \u2265 2")," called the minimum degree of the B-tree:",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Every node other than the root must have at least ",(0,i.kt)("inlineCode",{parentName:"li"},"t - 1")," keys. Every internal node other than the root thus has at least t children. If the tree is nonempty, the root must have at least one key."),(0,i.kt)("li",{parentName:"ul"},"Every node may contain at most ",(0,i.kt)("inlineCode",{parentName:"li"},"2t - 1")," keys. Therefore, an internal node may have at most ",(0,i.kt)("inlineCode",{parentName:"li"},"2t")," children. We say that a node is ",(0,i.kt)("strong",{parentName:"li"},"full")," if it contains exactly ",(0,i.kt)("inlineCode",{parentName:"li"},"2t - 1")," keys.")))),(0,i.kt)("p",null,"To perform an insertion follow this procedure:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Check if the tree is empty."),(0,i.kt)("li",{parentName:"ul"},"If tree is empty, create a new node with inserted value and use it as root of the tree."),(0,i.kt)("li",{parentName:"ul"},"If tree is not empty, find an appropriate leaf node to append the value by using b-tree search algorithm."),(0,i.kt)("li",{parentName:"ul"},"If found element has an empty position, add new value to the node, following nondecreasing order."),(0,i.kt)("li",{parentName:"ul"},"If found element is full, split the leaf node, while sending the middle value to the parent. Repeat this process until sent value is added to a node."),(0,i.kt)("li",{parentName:"ul"},"If split is performed on a root node, then create a new root node and add the middle value into it. The tree height is then increased by 1.")),(0,i.kt)("p",null,"Following is an example of adding values 1 through 10 to a b-tree."),(0,i.kt)("p",null,"Add element 1 by creating a root node."),(0,i.kt)("p",null,"Figure 5.2"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"B-tree",src:t(754).Z,width:"178",height:"82"})),(0,i.kt)("p",null,"Add element 2 by adding it to a root node."),(0,i.kt)("p",null,"Figure 5.3"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"B-tree",src:t(9603).Z,width:"142",height:"80"})),(0,i.kt)("p",null,"Add element 3 by splitting root node."),(0,i.kt)("p",null,"Figure 5.4"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"B-tree",src:t(8184).Z,width:"474",height:"132"})),(0,i.kt)("p",null,"Add element 4 by adding it to the appropriate leaf."),(0,i.kt)("p",null,"Figure 5.5"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"B-tree",src:t(9742).Z,width:"200",height:"126"})),(0,i.kt)("p",null,"Add element 5 by splitting node with 3 and 4."),(0,i.kt)("p",null,"Figure 5.6"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"B-tree",src:t(9845).Z,width:"530",height:"120"})),(0,i.kt)("p",null,"Add element 6 to the appropriate leaf."),(0,i.kt)("p",null,"Figure 5.7"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"B-tree",src:t(5221).Z,width:"252",height:"122"})),(0,i.kt)("p",null,"Add element 7 to appropriate leaf. Then split the leaf and send middle value (6) up."),(0,i.kt)("p",null,"Figure 5.8"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"B-tree",src:t(1647).Z,width:"626",height:"168"})),(0,i.kt)("p",null,"Add element 8 to appropriate leaf."),(0,i.kt)("p",null,"Figure 5.9"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"B-tree",src:t(9463).Z,width:"390",height:"206"})),(0,i.kt)("p",null,"Add element 9 to leaf with values 7 and 8. Split the node and send the 8 upwards."),(0,i.kt)("p",null,"Figure 5.10"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"B-tree",src:t(432).Z,width:"452",height:"180"})),(0,i.kt)("p",null,"Add value 10 to node with 9."),(0,i.kt)("p",null,"Figure 5.11"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"B-tree",src:t(5435).Z,width:"436",height:"180"})))}g.isMDXComponent=!0},4036:function(A,e,t){e.Z=t.p+"assets/images/b-tree1-ae1f402fb0ea799d6fc4a9ee75133f6a.jpg"},432:function(A,e,t){e.Z=t.p+"assets/images/b-tree10-5976627e59e8b02dcd4063f4dcb0fc37.jpg"},5435:function(A,e,t){e.Z=t.p+"assets/images/b-tree11-7c4c8fc95bbaff537f97c4e2aa810767.jpg"},754:function(A,e){e.Z="data:image/jpeg;base64,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"},9603:function(A,e){e.Z="data:image/jpeg;base64,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"},8184:function(A,e,t){e.Z=t.p+"assets/images/b-tree4-4bb2f9c2ff0e0c19276ab94987cbd999.jpg"},9742:function(A,e){e.Z="data:image/jpeg;base64,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"},9845:function(A,e,t){e.Z=t.p+"assets/images/b-tree6-95183a3daea2e6ffcedd4f13e90b7cd7.jpg"},5221:function(A,e){e.Z="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAkACQAAD/4QCARXhpZgAATU0AKgAAAAgABAEaAAUAAAABAAAAPgEbAAUAAAABAAAARgEoAAMAAAABAAIAAIdpAAQAAAABAAAATgAAAAAAAACQAAAAAQAAAJAAAAABAAOgAQADAAAAAQABAACgAgAEAAAAAQAAAPygAwAEAAAAAQAAAHoAAAAA/+0AOFBob3Rvc2hvcCAzLjAAOEJJTQQEAAAAAAAAOEJJTQQlAAAAAAAQ1B2M2Y8AsgTpgAmY7PhCfv/AABEIAHoA/AMBIgACEQEDEQH/xAAfAAABBQEBAQEBAQAAAAAAAAAAAQIDBAUGBwgJCgv/xAC1EAACAQMDAgQDBQUEBAAAAX0BAgMABBEFEiExQQYTUWEHInEUMoGRoQgjQrHBFVLR8CQzYnKCCQoWFxgZGiUmJygpKjQ1Njc4OTpDREVGR0hJSlNUVVZXWFlaY2RlZmdoaWpzdHV2d3h5eoOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4eLj5OXm5+jp6vHy8/T19vf4+fr/xAAfAQADAQEBAQEBAQEBAAAAAAAAAQIDBAUGBwgJCgv/xAC1EQACAQIEBAMEBwUEBAABAncAAQIDEQQFITEGEkFRB2FxEyIygQgUQpGhscEJIzNS8BVictEKFiQ04SXxFxgZGiYnKCkqNTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqCg4SFhoeIiYqSk5SVlpeYmZqio6Slpqeoqaqys7S1tre4ubrCw8TFxsfIycrS09TV1tfY2dri4+Tl5ufo6ery8/T19vf4+fr/2wBDAAICAgICAgMCAgMFAwMDBQYFBQUFBggGBgYGBggKCAgICAgICgoKCgoKCgoMDAwMDAwODg4ODg8PDw8PDw8PDw//2wBDAQICAgQEBAcEBAcQCwkLEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBD/3QAEABD/2gAMAwEAAhEDEQA/AP38ooooAKKKKACiiigAooooAKKKKACiivz18VeP/wBqrxz+0n47+EvwZ8R+HtB0rwdYaVdk6tp8lzJIdQRyQHjYdGQ9R0IrpwuFdVuzSsr6/d+plVqqFtNz9CqK+Ff+EL/4KHf9FH8Ef+Ce5/8Ai6P+EL/4KHf9FH8Ef+Ce5/8Ai66PqEf+fsfx/wAiPrD/AJWfdVFfCv8Awhf/AAUO/wCij+CP/BPc/wDxdeO/G/xj+3r8DfCNn4v1vxv4P1KC81Ow0tY7fSZ1cSX8whRyXcDapOT3x0q6WWc8lCNSN35v/ImWK5VdxZ+plFfCv/CF/wDBQ3/oo/gj/wAE9z/8XR/whf8AwUO/6KP4I/8ABPc//F1H1CP/AD9j+P8AkV9Yf8rPuqivhX/hC/8Agod/0UfwR/4J7n/4uj/hC/8Agod/0UfwR/4J7n/4uj6hH/n7H8f8g+sP+Vn3VRXyd+x58UviL8Vvh54i1D4o3Nnd674f8S6robzWMBt4HTT2SMMqEk8tuOTzjFfWNcmIoOlN05bo1p1FKKkgooorEsKKKKACiiigAooooAKKKKAP/9D9/KKKKACiiigAooooAKKKKACiiigAr4X+En/J9Xx1/wCwJ4Z/9Anr7or4X+En/J9Xx1/7Anhn/wBAnr0cD8Fb/D/7dE56+8PX9GfdFfn14/8AC/7cV1/wkXi3T/GmmaJYaS91JZafbxoWuLWAsUZmeJwrOgyAzd/m284/QWvzR/al/adi8TXkvwC+EWo2/wBt1Rjaapqsk6w2tvGcrLCsrEDpkSODwMquWJw8rjOVS0Ip97q9kfpfhvhsXWxvssLRhNaOUpwUowit3rotPm9ke+/sffHLXvjl8NrjVPFMaf2vpF19knmiXYk4KB0fb0DYOGA4zXD/APBQj/kiWh/9jd4d/wDS1K9d/Zi8G/D34efDeHwf4E1208QzWz+dqN1aypIHupRySFJ2rgYQHsPXNeRf8FCP+SJaH/2N3h3/ANLUrpw3L9fjyKyufNceSwrzDFPBQ5KXM+VWtp6PZPdLomfdNePfHb4taV8F/htqnjTUCHukXyLGD+K4u5eIkA9Afmb0UE17DX5j/tW6R8Z/Evxy8PXemeAb3xh4P8JrDdQ20JKW91cv8z+Y4DdCFBAU5UY4zmuHAUI1KiUtlr/wD0+Bcko4/MYU8TJKnFOTu1HmS+ym2leTst9Fd9Ct+yT8XPjh4n+PuseA/in4hm1CKy0ie5e0eOFEin8y2K4KIrZVZCME9+a/UGvxS+CnxA+JMf7YXiDxJD4HlfW9bMkGp6Z5jbtNt5prfzZmbZlhFtXggZ3da/a2urOaXLUTSSulsfUeMGWRoZhRnCnCCnTg7Q5bXtrpHz2fXdNnwz+wV/yIvxK/7KJ4o/8ASha+5q+Gf2Cv+RF+JX/ZRPFH/pQtfc1Y5t/vE/U/HsL/AA0FFFFecdAUUUUAFFFFABRRRQAUUUUAf//R/fyiiigAooooAKKKKACiiigAoopGZVUsxwBySegFAC1+c3gr4ifD/wAF/tyfG+48Y+J9L0GK40jw5FE1/ewWqySRpMXRTK65ZQRuA5GRnqK1PiJ+0F49+OXi+++Bn7JMqtJZt5OveMmXfp+lKeGjtm6TXHXG04B6Hqw7/wAGfsI/s2+G9Bh0/wAReFbfxjqzFpbzVtYU3N7eXEh3SSyOx6s3OB09+te3QpQoQl9YbTkrWW9rp3fbbbc4KlSVSS9ktnv0PY3/AGg/2f5EZH+JfhkqwIP/ABObLof+21fKNz8Jf+Cc15cS3Vxr3hx5JmZ3P/CWOMsxyTgX2Ote7f8ADGP7Kv8A0S/Q/wDwFFH/AAxj+yr/ANEv0P8A8BRUUq2Gh8E5r0t/mezlmfZrgub6nWdO+/LKUb22va1zD+F2sfsa/Bi3v7X4b+NfDWlRamyPcA+Iorje0YIU5nupCMAnpivBv26/jF8IvFHwe0bT/DXjjQtWuo/FOgTtFaanazyLFFeI0khWORiFQcs2MAcnivpX/hjH9lX/AKJfof8A4Civj79tr9mb4AeA/hLpGs+DvAelaRfTeJtDtXmt4AjtBcXapLGT/ddTgj0rrwE8NLEwlzSbut7f5nm5tj8biXOviZ88nu222/m9T78/4aG+AP8A0Uzwx/4ObL/47R/w0N8Af+imeGP/AAc2X/x2uE/4Yx/ZV/6Jfof/AICij/hjH9lX/ol+h/8AgKK862D7y+5f5kXr9l+Jznh3VP2PfC3xL1f4uaP4/wDD0fiXXEkjupm8Q2zxssrIzYiacouTGvQcfjXr3/DQ3wB/6KZ4Y/8ABzZf/Ha4T/hjH9lX/ol+h/8AgKKP+GMf2Vf+iX6H/wCAorSc8LJ3lKb+7/M68ZmGOxElKvPmaSSu27JbL0XQ8r/4J/3lpqHw6+Il/YTx3Vtc/EHxLLFLEweOSN51ZHRlJDKwIIIOCORX3fX53eNv2ePG/wCznr03xf8A2QLVfsTBW1vwUXIstQijHMlmCf3VwF6Afe7f3T9S/Av4+eA/j/4UPiPwdO8N3aN5Oo6bcjy73T7kfeiniPKkEHBxhu3cAzKl7RvE0tYv715P9HsziwtTl/dT0f5+h7ZRRRXknaFFFFABRRRQAUUUUAFFFFAH/9L9/KKKKACiiigAooooAKKK85+KfxY8BfBjwhd+OPiJqsel6XajgscyTSY+WOJB8zu3ZR/LmrhCUmoxV2yZSSV2djruu6N4Y0e88QeIb2LTtNsI2muLidxHFHGvVmY8AV+dGpeK/ih+3HrU3hj4by3Xgv4HWzmLUNfwYtQ1/acPDZA4McB+6X7jJJ5CVJovw6+Jf7a+s2fjn45Wlz4S+EdnKtxpHhPeYrnVdpzHcakRghCOVjGODxj7x/RrTNL03RNOt9I0e1isrK0RYoYIUEccaKMKqquAAB0Ar1Lwwu2tT8I/5v8ABepx+9W8o/i/8l+Zyvw6+G/gr4T+ErLwR4A0uLSNIsFwkUQ5Zj953bq7t/EzZJruKKK8qc3JuUnds7YxSVkFFFFSMK+Fv+ChH/JEtD/7G7w7/wClqV9018Lf8FCP+SJaH/2N3h3/ANLUr0cp/wB5p+qOfF/w5H3TRRRXnHQFFFFABXxZ8c/2ZNWvfEzfHb9ni/Xwn8UrJcyY+Ww1qJeWt72MYBLY+WTqDjPqPtOiujDYmdKXND/gPyZnVpRmrSPlz9n39pvRfjA914K8VafJ4P8AiVoQ2atoF2dsiuvWa2Jx5sDdQw5AOD2Y/UdfMf7Qv7NGg/GuKy8T6JfSeE/iF4fPmaP4gs/luIJF5EcuP9bCT1U5xzjqQeB+CX7THiGPxanwG/aVsYvC3xJgG20uFOzTtdjHAms3Py727x5znoAflHZVwsKsXVw/TePVea7r8V17nPCtKD5Kvyff17P8z7aoooryzsCiiigAooooAKKKKAP/0/38oor438Rft8/st+FvEuseEdZ8U3MeqaBe3Gn3scelajKIrm1kaKVN8duyttdSMqSD1BIrehhatVtU4t+iuZ1K0Iazdj7Ior4h/wCHiv7Jf/Q13n/gl1T/AORqP+Hiv7Jf/Q13n/gl1T/5Grp/snFf8+pfczH69R/nX3o+3qK+If8Ah4r+yX/0Nd5/4JdU/wDkavHfjZ/wU++DXhjwe3/Cn5Z/E3ii/byLZLmxvLO1tyf+W0xmiRnVc8JGGYnrgVpSyXFzkoqk9e6aJnmFCKu5r7z69+P/AO0b4K+AWhQS6qJNY8S6u3k6RodkPNvr+c8AJGuWCA/ecjA6csQD4Z8MP2cvHHxN8ZWPx6/a0eHUdftsS6L4YjO/TNDU/Mu9eVmuRwWY7gGHBOFI+XfgH8dP2RfAGs3HxY+K/j688bfFTWFzd6rPomqGKzU/8u9jGbXEUa5xkAE+w4r66/4eK/sl/wDQ13n/AIJdU/8AkavRngq9FOnh6cm+srP7l2Xnu/Q5Y4mlUfNVmrdFdfj5/kfb1FfEP/DxX9kv/oa7z/wS6p/8jUf8PFf2S/8Aoa7z/wAEuqf/ACNXlf2Tiv8An1L7mdn16j/OvvR9vUV518K/iv4F+NXg228f/DjUG1PQ7uSaKKdoZbcl4HMcg8uZUcYYEcrz2ryD4l/tmfs8fCLxld+APHniKey12xjilmgi06+uQiTLuQ74IHTkehrnhhKspunGDcl0tqayrwjHmclY+pKK+If+Hiv7Jf8A0Nd5/wCCXVP/AJGo/wCHiv7Jf/Q13n/gl1T/AORq6P7JxX/PqX3My+vUf5196Pt6vhb/AIKEf8kS0P8A7G7w7/6WpVv/AIeK/sl/9DXef+CXVP8A5Gr5P/bI/bO/Z4+J/wALNL8P+DPENxd3tr4i0W/kWTTL63UW9pdLJM2+aBFyqgnaDk9ACa78syzExxEJSpySv2ZhicZRdNpTX3o/Y6iviD/h4r+yUeR4rvCD/wBQXVP/AJGpf+Hiv7Jf/Q13n/gl1T/5Grg/snFf8+pfczf69R/nX3o+3qK+If8Ah4r+yX/0Nd5/4JdU/wDkaj/h4r+yX/0Nd5/4JdU/+RqP7JxX/PqX3MPr1H+dfej7eorxn4NfH/4VfH7TtT1X4Was+q2+jzrbXRktbi1McrrvC7biOMn5ecgEVxXxT/bB/Z/+C/i9vAfxD8QzWGtpbx3Rt4tPvbrEMv3W328Mi849cjvWEcFWc3TUHzLpZ3+40eIpqPO5K3c+m68Y+OPwG+H3x/8ACDeFPHVmS8LedY30J8u7sbgfdlglHKkHqOjDqOmPCP8Ah4r+yX/0Nd5/4JdU/wDkaj/h4r+yX/0Nd5/4JdU/+Rq66WXYyElOFOSa8mYzxeHkuWU1b1RyHgX45/EL9nLxhp3wR/aquPtekagwg8PeNsEWt4BwkGoN0iuBwCzYBOCeDvr9Co5I5Y1liYOjgFWU5BB6EEdq/PPx5+2v+w58TfC194L8davNq+j6ihSWCbRNTI9mU/Zsqy9VYYIPSvkn4RftueCv2c/Gcfw5Txbe+P8A4PXPNhqFzYXkOp6CCeIJhPChuIR/CU3MB0A+6fQqZTWrxc40nGa3Vmk/Ndn5fd2OWOOp03yuacfXVevl5/efuLRXw+v/AAUX/ZJdQ6eLLtlYAgjRtTIIPQj/AEanf8PFf2S/+hrvP/BLqn/yNXl/2Tiv+fUvuZ2fXqP86+9H29RXxD/w8V/ZL/6Gu8/8Euqf/I1H/DxX9kv/AKGu8/8ABLqn/wAjUf2Tiv8An1L7mH16j/OvvR9vUV4Z8GP2j/hB+0C2tJ8KtZk1VvDxtxfCSzubQxG68zyuLiOPdu8p/u5xjnGRn3OuOrRnTk4TVn2ZvCpGS5ou6P/U/fyvz3/YisbK68TftENdW8czD4ma+AXQMceefUV+hFfAX7Df/IyftE/9lM1//wBHmvSwj/2et8vzOSv/ABafz/I+6m0nRkUu9lAFUZJ8peAPwr5D1b9sL9nyx8aWfgjS4X1m6vLqKz860tUNukssgjALuVyATyVBFfZzKGUq3IPBr8nv2uvAng/wF8WfgrYeDtIt9JhutUmmm8hArSyG8sjudvvMeTjJOMnFPLaUKk+Sd/L7j9L8Ocky7MMa8JjYyblGTjZpJcsZSd+vRWt8z9Uf7G0j/nxg/wC/S/4V+XX/AAUGsbGD4wfsxxwW8cayeLGDBUADDz7Hggda/Vavyz/4KF/8lj/Zg/7G1v8A0osa2yGT+tR9Jf8ApLPzHMl+5fy/NH6d/wBjaR/z4wf9+l/wo/sbSP8Anxg/79L/AIVo0V5HMzusZ39jaR/z4wf9+l/wo/sfSP8Anxg/79L/AIVo0UczCx8Ff8E2Bj9ljSwP+gvrf/pfLUvwrtLW7/bp+Oi3UKTBdE8M43qGx8k/TNRf8E2f+TWNL/7DGt/+l8tXfhJ/yfV8df8AsCeGf/QJ6+gxX8fFfP8A9KR51L+HS+X5M+1/7G0j/nxg/wC/S/4V8ffEP9sH4D/DnxVf+DtS026vNQ0uYwXPkWSbI5F6jLlc/UcHtX2lXyB+0hqnxH8J2l7F8KvhfaeKo9etJ21O98qN3SQKI13wjDznZ0HPTFeXgVGU+WevzsffcF4LB4jGKhi6fMpbfvI00n3cpJ9L2W7dkezfC7x98M/jD4ZXxV4HEF1abzFKjwqksMoGSkikcHBB9COQa+Lf+Cpun2Ft+yZqUttbRRP/AGrpw3Iiqf8AWHuBW7/wTsi8HWHw41vT9J1OS68QPdrLqdrLGYmtsLsjUA/eHynLevBAxWd/wVU/5NI1L/sK6b/6MNelgqSp5jCEb2Ukef4iZLRy7HYrB0L8kHZcys7Wv5fJ9Vr1PvLwzpGkt4b0ktZQEm0g/wCWa/8APNfatz+xtI/58YP+/S/4VU8L/wDItaT/ANekH/ota3K8KcndngJaGd/Y2kf8+MH/AH6X/Cj+xtI/58YP+/S/4Vo0UuZlWPg39kCOOL4u/tJxxKERfGgAVRgAfZl6AVgaDb29z/wU18Vx3Mayp/wrqI7XUMM/brTsa6L9kT/ksH7Sn/Y6D/0mWsPw1/yk58V/9k6j/wDS60r6OT/fVv8AAvyieV9in/i/zPvr+xtI/wCfGD/v0v8AhXyb8Wv2rPg58HfGs/gTxFotzdahbwxTO1rbQvGBMMgZZlOQOvHevsOvzO+I3w7/AGmfCfx78Y/G74deG9O1myvoY7eGO6eOaRrWGKPdsi3oQzNGcc5weleXl8ITk1UfTvbU/TuAcpy/F4qpDMGlFQbinNU1KV0kuZp20bez2Prf4J/Fr4ffHbQ9Q17wnpD20GnXItpBd28aMXKB8gKW4w1fPf8AwUk07T7f9kbxZLb2sUbiawwyoqn/AI+U7gV6v+yx+0BbfHXwzqbXWkx6JrmhypFe28XETeYDskQH5hnawKnkEdeRXmn/AAUq/wCTQ/Fv/Xaw/wDSlK68FBwx9OFre8tL36o+b45yx4PE4nDOk6fLf3XLmtp/NZXvunbZnv8A+zxpemS/s/8AwykltIXdvC+ikkxqSf8AQYepxXSfEjxv8LvhJ4bk8WfEC5s9J05GEatJGpaWQgkRxoAWdyATgDoCegNZX7On/Jvnwx/7FfRf/SGGvys/a8v/ABf8V/2ztC+F2j6OniVfD8MK2el3MvlWssssX2mV5WyMJgL5mOSqYrw81xLpyk1ve34nyGZZg8Nh4ygrydkvVn6EfBD9pn4OfH/xNqfhnwHpk/maXbi5ea5tEijZC4QbeSc5OeQOK+nv7G0j/nxg/wC/S/4V+cnwT/aU+Jng744Wn7M3xw8JaV4du76MHTZNGTybYBkZ4wEDMrI4RlDDBDAgiv0srHDV3KOr1+42ynFe2pNyd5J2elrPtY+Av2YIo4f2sv2oY4UCIt74bwFAAH+jXXYV9+18Dfsy/wDJ2v7UX/X74b/9JrqvvmvYzb+N/wBux/8ASUdGB/h/OX/pTP/V/fyvgL9hv/kZP2if+yma/wD+jzX37X5qaD+zt+2X8MvGnxE1X4Q+NPCNlovjjxLqWviHUbS6nnj+2zM6KzKgAKoVBAyM5wa9TA8sqVSnKSTdt/JnJiLqcJJXtf8AI/SuviP9qX4JfEH4pfEj4XeI/B1nFc2Phe7klvmknSIojXFrICquQW+WJunp71h/8If/AMFH/wDof/AX/gtu/wD4mj/hD/8Ago//AND/AOAv/Bbd/wDxNaYfD+ynzxqxv6v/ACPc4f4mr5bio4zDwvJKS1V170XF7NdGffFfln/wUL/5LH+zB/2Nrf8ApRY16p/wh/8AwUf/AOh/8Bf+C27/APia8V+Kv7Kn7b3xk1/wZ4l8aeO/Bj3vgO+Oo6Ybe0u4lE5aJ/3q7DvXMS8cd/WunK6FOjXVSdWNter6prsfN4ycp03GMH0/M/WKivgf/hD/APgo/wD9D/4C/wDBbd//ABNH/CH/APBR/wD6H/wF/wCC27/+Jrg/s+P/AD9j97/yOr6y/wCRn3xRXwP/AMIf/wAFH/8Aof8AwF/4Lbv/AOJo/wCEP/4KP/8AQ/8AgL/wW3f/AMTR/Z8f+fsfvf8AkH1l/wAjH/8ABNn/AJNY0v8A7DGt/wDpfLV34Sf8n1fHX/sCeGf/AECevUf2Sfgr4k+AHwV0/wCG3i3ULTU9Ttry/upJ7LeIG+13DzAL5iq3AbB4614z44+A37UOm/H7xh8YfgX4q8NaTa+LrPTrSeHV7e4uJQLBGCkCNNoyXbucjFds6tOpiMRaSSleze3xJmCjKNOnpt/kz79r4Q8faR+3RZ+Ltc/4QLUdKvdA1C6ley3NEJLW3c/Ih85UO5V643DOcGq3/CH/APBR/wD6H/wF/wCC27/+Jo/4Q/8A4KP/APQ/+Av/AAW3f/xNY4fDqm788H63f6H0eRcTSwFSU1h41Lq1pxUl8tVZnb/sp/s26v8ABG31rxH4z1KLUvE/iRg1z9nyYYUDFyoZgpd2ZiWO0DsMjk+Q/wDBVT/k0jUv+wrpv/ow10//AAh//BR//of/AAF/4Lbv/wCJryP42fsyftz/ALQHgWb4dfEPx54Lk0eeeG4YWtndwS74DuTD7G4z1GOa7MKksVDEVasdGn16fI4uJ+IMVmlapisSm5z8klorJJdElofpx4X/AORa0n/r0g/9FrW5X5/WfgX/AIKNWNpBY2/j7wGIreNY0zp12TtQYGfl9BVn/hD/APgo/wD9D/4C/wDBbd//ABNebLARbv7WP3v/ACPPWIf8jPviivgf/hD/APgo/wD9D/4C/wDBbd//ABNH/CH/APBR/wD6H/wF/wCC27/+Jpf2fH/n7H73/kP6y/5GWf2RP+SwftKf9joP/SZaw/DX/KTnxX/2TqP/ANLrSvUv2V/gj8T/AISXXxC8QfFnWdL1nXfHerpqssmlJLHArCIRsNkqqRkjIAz9a88+KX7Pf7Rsn7SWofH74F+J/D2jy6joUOiSRaxBcTt5aypM5CxqVBLRpg56Z45r0Pa03XqrnVnGyfS9l/kcrhL2cHbZ3/M+/K+A/Guj/t5v4g1rT/C9/pD6HqFzcG1mV4g9tbSuTGm6RFkyiEDO1uRxmpP+EP8A+Cj/AP0P/gL/AMFt3/8AE0f8If8A8FH/APof/AX/AILbv/4mufD4dU23zwfrd/ofT5DxPLATlNYaNS/ScVJLzWqsz1z9mD9nofATwvfxarqC6r4h16VJ9QuIwRECgOyOPd8xC7mJYgFic4HAryn/AIKVf8mh+Lf+u1h/6UpUP/CH/wDBR/8A6H/wF/4Lbv8A+JrzL4v/ALOv7eHxw8B3/wAOPHXjzwS+jai0TSi2sruGXMLiRcPsOOQM8V0YWCWKhXq1Y6NN79PkebxFnmJzKrVxOITdSe7sl0svRJaLyPuH9nT/AJN8+GP/AGK+i/8ApDDXzL+0p+zH8SPEHxT0X9oX4B6pbWXjPSEWKa1vDtiuFQFVZHwV3bWKMj4Vl53AjBxfCnwq/wCChfgzwto3g7RPHvgVdO0KytrC2Emn3juIbWNYo9zbeW2qMnua6D/hD/8Ago//AND/AOAv/Bbd/wDxNefjMtp1ZSftY2bvu/8AI8bEUY1qSp1IPS226a6o5r4Mfsy/GfxD8dI/2jf2l7+zOt6ZCsOnafYkOsZVWVWYp8iqm9iqgsSzEkjAz+jtfA//AAh//BR//of/AAF/4Lbv/wCJo/4Q/wD4KP8A/Q/+Av8AwW3f/wATWVLKYQVlVj97/wAisFSjQi4wjLV3berb8xP2Zf8Ak7X9qL/r98N/+k11X3zXxr+y98Cvi78MPHHxN+Inxk1zSNa1n4hS6XKTpEc0UUbWCTxtlJVXG4SrjBPQ57V9lVeaTjKt7rurRX3RSOvBxap6q2r/ABbP/9b9/KKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKAP/2Q=="},1647:function(A,e,t){e.Z=t.p+"assets/images/b-tree8-6a49c9b2d5878897131333972c3c1b72.jpg"},9463:function(A,e,t){e.Z=t.p+"assets/images/b-tree9-1796c9b9f691a31224d42cbce2e509a6.jpg"}}]);