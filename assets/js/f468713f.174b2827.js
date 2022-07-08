"use strict";(self.webpackChunksoftware_designs_and_algorithms=self.webpackChunksoftware_designs_and_algorithms||[]).push([[6616],{3905:function(t,e,n){n.d(e,{Zo:function(){return p},kt:function(){return c}});var a=n(7294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function i(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function o(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?i(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function l(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},i=Object.keys(t);for(a=0;a<i.length;a++)n=i[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(a=0;a<i.length;a++)n=i[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var s=a.createContext({}),m=function(t){var e=a.useContext(s),n=e;return t&&(n="function"==typeof t?t(e):o(o({},e),t)),n},p=function(t){var e=m(t.components);return a.createElement(s.Provider,{value:e},t.children)},u={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},d=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,i=t.originalType,s=t.parentName,p=l(t,["components","mdxType","originalType","parentName"]),d=m(n),c=r,g=d["".concat(s,".").concat(c)]||d[c]||u[c]||i;return n?a.createElement(g,o(o({ref:e},p),{},{components:n})):a.createElement(g,o({ref:e},p))}));function c(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var i=n.length,o=new Array(i);o[0]=d;var l={};for(var s in e)hasOwnProperty.call(e,s)&&(l[s]=e[s]);l.originalType=t,l.mdxType="string"==typeof t?t:r,o[1]=l;for(var m=2;m<i;m++)o[m]=n[m];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},126:function(t,e,n){n.r(e),n.d(e,{assets:function(){return p},contentTitle:function(){return s},default:function(){return c},frontMatter:function(){return l},metadata:function(){return m},toc:function(){return u}});var a=n(7462),r=n(3366),i=(n(7294),n(3905)),o=["components"],l={sidebar_position:6},s="5. Other sorting algorithms",m={unversionedId:"algorithms-and-data-structures-part-2/other_sorting_algorithms",id:"algorithms-and-data-structures-part-2/other_sorting_algorithms",title:"5. Other sorting algorithms",description:"There are many other sorting algorithms. The following table provides an overview of some sorting algorithms. It is a selection of the most common sorting algorithms.",source:"@site/docs/8-algorithms-and-data-structures-part-2/other_sorting_algorithms.md",sourceDirName:"8-algorithms-and-data-structures-part-2",slug:"/algorithms-and-data-structures-part-2/other_sorting_algorithms",permalink:"/docs/algorithms-and-data-structures-part-2/other_sorting_algorithms",draft:!1,tags:[],version:"current",sidebarPosition:6,frontMatter:{sidebar_position:6},sidebar:"tutorialSidebar",previous:{title:"4. Heap. Heap Sort. Priority Queue",permalink:"/docs/algorithms-and-data-structures-part-2/heap"},next:{title:"6. \ud83d\udcda Home Task",permalink:"/docs/algorithms-and-data-structures-part-2/hometask"}},p={},u=[],d={toc:u};function c(t){var e=t.components,l=(0,r.Z)(t,o);return(0,i.kt)("wrapper",(0,a.Z)({},d,l,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"5-other-sorting-algorithms"},"5. Other sorting algorithms"),(0,i.kt)("p",null,"There are many other sorting algorithms. The following table provides an overview of some sorting algorithms. It is a selection of the most common sorting algorithms."),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Algorithm"),(0,i.kt)("th",{parentName:"tr",align:null},"Time best case"),(0,i.kt)("th",{parentName:"tr",align:null},"Time avg case"),(0,i.kt)("th",{parentName:"tr",align:null},"Time worst case"),(0,i.kt)("th",{parentName:"tr",align:null},"Space"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("strong",{parentName:"td"},"Quicksort")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"O(n log n)")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"O(n log n)")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("code",null,"O(n",(0,i.kt)("sup",null,"2"),")")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"O(log n)"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("strong",{parentName:"td"},"Bubble Sort")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"O(n)")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("code",null,"O(n",(0,i.kt)("sup",null,"2"),")")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("code",null,"O(n",(0,i.kt)("sup",null,"2"),")")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"O(1)"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("strong",{parentName:"td"},"Counting Sort")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"O(n + k)")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"O(n + k)")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"O(n + k)")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"O(n + k)"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("strong",{parentName:"td"},"Selection Sort")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("code",null,"O(n",(0,i.kt)("sup",null,"2"),")")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("code",null,"O(n",(0,i.kt)("sup",null,"2"),")")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("code",null,"O(n",(0,i.kt)("sup",null,"2"),")")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"O(1)"))))),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Some of them, like ",(0,i.kt)("strong",{parentName:"li"},"Quicksort")," and ",(0,i.kt)("strong",{parentName:"li"},"Merge Sort")," alongside with ",(0,i.kt)("strong",{parentName:"li"},"Heap Sort")," are based on the divide and conquer principle and are considered efficient sorting algorithms that achieve a much better time complexity of ",(0,i.kt)("inlineCode",{parentName:"li"},"\u0398(nlogn)")," and therefore, also suitable for large data sets with billions of elements."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Quicksort")," picks an element as a pivot and partitions the array based on the pivot. How to pick pivot?",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Always pick the first element as a pivot"),(0,i.kt)("li",{parentName:"ul"},"Always pick the last element as a pivot (implemented below)"),(0,i.kt)("li",{parentName:"ul"},"Pick a random element as a pivot"),(0,i.kt)("li",{parentName:"ul"},"Pick median as a pivot")))),(0,i.kt)("p",null,"The partition process is a key process. Choose x element as pivot, put x and its position in a sorted array, then put all smaller elements before the pivot, and all larger elements after the pivot."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"img.gif",src:n(1999).Z,width:"300",height:"180"})),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Bubble Sort")," algorithm is the most straightforward way of sorting, it has the suboptimal characteristics, but it is easy to perceive.")),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"img.gif",src:n(5959).Z,width:"300",height:"180"})),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Counting Sort")," sorts the elements of an array by counting the number of occurrences of each unique element in the array. It has the linear time and will take ",(0,i.kt)("inlineCode",{parentName:"li"},"O(k + n)")," (where ",(0,i.kt)("inlineCode",{parentName:"li"},"k")," is the value of the max element in the input array) time to finish, but it is efficient if the range of input data is not significantly greater than the number of elements to be sorted.")),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"img.gif",src:n(3375).Z,width:"825",height:"461"})),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Selection Sort")," sorts elements by picking a minimum element from an unsorted subarray and putting it at the beginning of the sorted subarray (considering ascending order).")),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"img.webp",src:n(7256).Z,width:"399",height:"285"})),(0,i.kt)("div",{className:"admonition admonition-warning alert alert--danger"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"Article")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"If you are interested in more algorithms you can find useful information in the ",(0,i.kt)("a",{parentName:"p",href:"https://www.happycoders.eu/algorithms/sorting-algorithms/"},"article"),"."))))}c.isMDXComponent=!0},5959:function(t,e,n){e.Z=n.p+"assets/images/bubble-3d9a8bc54ee1ce9c8fdae83fafba130c.gif"},3375:function(t,e,n){e.Z=n.p+"assets/images/counting_sort-e5e0a4ce74eaa6d9139e4b2dcae3edbd.gif"},1999:function(t,e,n){e.Z=n.p+"assets/images/quicksort-1f34ac910005055a38e0a9df1ee21386.gif"},7256:function(t,e,n){e.Z=n.p+"assets/images/selection_sort-2dc72dd2292ae4cf8bcf5b81ca8cd99a.webp"}}]);