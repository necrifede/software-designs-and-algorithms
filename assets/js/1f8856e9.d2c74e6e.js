"use strict";(self.webpackChunksoftware_designs_and_algorithms=self.webpackChunksoftware_designs_and_algorithms||[]).push([[9732],{3905:function(e,t,n){n.d(t,{Zo:function(){return h},kt:function(){return c}});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=a.createContext({}),p=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},h=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,l=e.parentName,h=o(e,["components","mdxType","originalType","parentName"]),u=p(n),c=i,m=u["".concat(l,".").concat(c)]||u[c]||d[c]||r;return n?a.createElement(m,s(s({ref:t},h),{},{components:n})):a.createElement(m,s({ref:t},h))}));function c(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,s=new Array(r);s[0]=u;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:i,s[1]=o;for(var p=2;p<r;p++)s[p]=n[p];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},2674:function(e,t,n){n.r(t),n.d(t,{assets:function(){return h},contentTitle:function(){return l},default:function(){return c},frontMatter:function(){return o},metadata:function(){return p},toc:function(){return d}});var a=n(7462),i=n(3366),r=(n(7294),n(3905)),s=["components"],o={sidebar_position:6},l="5. Graphs",p={unversionedId:"algorithms-and-data-structures-part-1/graphs",id:"algorithms-and-data-structures-part-1/graphs",title:"5. Graphs",description:"Finishing theme of this lecture will be about graphs. All types of trees we looked at in this lecture are special cases of graphs. A graph is a data structure, that consists of finite set of vertices, together with a set of unordered pairs of these vertices for an undirected graph or a set of ordered pairs for a directed graph. These pairs are known as edges.",source:"@site/docs/7-algorithms-and-data-structures-part-1/graphs.md",sourceDirName:"7-algorithms-and-data-structures-part-1",slug:"/algorithms-and-data-structures-part-1/graphs",permalink:"/docs/algorithms-and-data-structures-part-1/graphs",draft:!1,tags:[],version:"current",sidebarPosition:6,frontMatter:{sidebar_position:6},sidebar:"tutorialSidebar",previous:{title:"4. B-Trees",permalink:"/docs/algorithms-and-data-structures-part-1/b-trees"},next:{title:"6. \ud83d\udcda Home Task",permalink:"/docs/algorithms-and-data-structures-part-1/hometask"}},h={},d=[{value:"5.1 BFS",id:"51-bfs",level:2},{value:"5.2 DFS",id:"52-dfs",level:2},{value:"5.3 Finding the Shortest Path",id:"53-finding-the-shortest-path",level:2},{value:"5.4 Dijkstra&#39;s Algorithm",id:"54-dijkstras-algorithm",level:2}],u={toc:d};function c(e){var t=e.components,o=(0,i.Z)(e,s);return(0,r.kt)("wrapper",(0,a.Z)({},u,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"5-graphs"},"5. Graphs"),(0,r.kt)("p",null,"Finishing theme of this lecture will be about graphs. All types of trees we looked at in this lecture are special cases of graphs. A graph is a data structure, that consists of finite set of vertices, together with a set of unordered pairs of these vertices for an undirected graph or a set of ordered pairs for a directed graph. These pairs are known as edges."),(0,r.kt)("p",null,"The ",(0,r.kt)("strong",{parentName:"p"},"adjacency-list representation")," of a graph ",(0,r.kt)("inlineCode",{parentName:"p"},"G = (V, E)")," consists of an array Adj of ",(0,r.kt)("inlineCode",{parentName:"p"},"|V|")," lists, one for each vertex in ",(0,r.kt)("inlineCode",{parentName:"p"},"V"),". For each ",(0,r.kt)("inlineCode",{parentName:"p"},"u \u03f5 V"),", the adjacency list ",(0,r.kt)("inlineCode",{parentName:"p"},"Adj[u]")," contains all the vertices v such that there is an edge ",(0,r.kt)("inlineCode",{parentName:"p"},"(u,v) \u03f5 E"),". That is, ",(0,r.kt)("inlineCode",{parentName:"p"},"Adj[u]")," consists of all the vertices adjacent to ",(0,r.kt)("inlineCode",{parentName:"p"},"u")," in ",(0,r.kt)("inlineCode",{parentName:"p"},"G"),".\nIf ",(0,r.kt)("inlineCode",{parentName:"p"},"G")," is a directed graph, the sum of the lengths of all the adjacency lists is ",(0,r.kt)("inlineCode",{parentName:"p"},"|E|"),", since an edge of the form ",(0,r.kt)("inlineCode",{parentName:"p"},"(u, v)")," is represented by having ",(0,r.kt)("inlineCode",{parentName:"p"},"v")," appear in ",(0,r.kt)("inlineCode",{parentName:"p"},"Adj[u]"),". If ",(0,r.kt)("inlineCode",{parentName:"p"},"G")," is an undirected graph, the sum of the lengths of all the adjacency lists is ",(0,r.kt)("inlineCode",{parentName:"p"},"2|E|"),"."),(0,r.kt)("p",null,"We can readily adapt adjacency lists to represent weighted graphs, that is, graphs for which each edge has an associated weight, typically given by a weight function. For example, let ",(0,r.kt)("inlineCode",{parentName:"p"},"G = (V, E)")," be a weighted graph with weight function ",(0,r.kt)("inlineCode",{parentName:"p"},"w"),". We simply store the weight ",(0,r.kt)("inlineCode",{parentName:"p"},"w(u, v)")," of the edge ",(0,r.kt)("inlineCode",{parentName:"p"},"(u, v) \u03f5 E")," with vertex ",(0,r.kt)("inlineCode",{parentName:"p"},"v")," in ",(0,r.kt)("inlineCode",{parentName:"p"},"u"),"s adjacency list. The adjacency-list representation is quite robust in that we can modify it to support many other graph variants."),(0,r.kt)("p",null,"Figure 5.1"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Graph",src:n(6471).Z,width:"720",height:"300"})),(0,r.kt)("p",null,"Let's look at types of searches that can be performed on a graph."),(0,r.kt)("h2",{id:"51-bfs"},"5.1 BFS"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Breadth-first search")," (BFS) is one of the simplest algorithms for searching a graph and the archetype for many important graph algorithms."),(0,r.kt)("p",null,"Given a graph ",(0,r.kt)("inlineCode",{parentName:"p"},"G = (V, E)")," and a distinguished ",(0,r.kt)("strong",{parentName:"p"},"source")," vertex ",(0,r.kt)("inlineCode",{parentName:"p"},"s"),", breadth-first search systematically explores the edges of ",(0,r.kt)("inlineCode",{parentName:"p"},"G")," to discover every vertex that is reachable from ",(0,r.kt)("inlineCode",{parentName:"p"},"s"),". It computes the distance (the smallest number of edges) from ",(0,r.kt)("inlineCode",{parentName:"p"},"s")," to each reachable vertex. It also produces a ",(0,r.kt)("em",{parentName:"p"},"breadth-first tree")," with root s that contains all reachable vertices. For any vertex ",(0,r.kt)("inlineCode",{parentName:"p"},"v")," reachable from ",(0,r.kt)("inlineCode",{parentName:"p"},"s"),", the simple path in the breadth-first tree from ",(0,r.kt)("inlineCode",{parentName:"p"},"s")," to ",(0,r.kt)("inlineCode",{parentName:"p"},"v")," corresponds to ",(0,r.kt)("em",{parentName:"p"},"the shortest path")," from ",(0,r.kt)("inlineCode",{parentName:"p"},"s")," to ",(0,r.kt)("inlineCode",{parentName:"p"},"v")," in ",(0,r.kt)("inlineCode",{parentName:"p"},"G"),", that is, a path containing the smallest number of edges. The algorithm works on both directed and undirected graphs."),(0,r.kt)("p",null,"The breadth-first-search procedure BFS below assumes that the input graph ",(0,r.kt)("inlineCode",{parentName:"p"},"G = (V, E)")," is represented using adjacency lists. It attaches several additional attributes to each vertex in the graph. We store the color of each vertex ",(0,r.kt)("inlineCode",{parentName:"p"},"u \u03f5 V")," in the attribute ",(0,r.kt)("inlineCode",{parentName:"p"},"u.color")," and the predecessor of ",(0,r.kt)("inlineCode",{parentName:"p"},"u")," in the attribute ",(0,r.kt)("inlineCode",{parentName:"p"},"u.p"),". If ",(0,r.kt)("inlineCode",{parentName:"p"},"u")," has no predecessor (for example, if ",(0,r.kt)("inlineCode",{parentName:"p"},"u = s")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"u")," has not been discovered), then ",(0,r.kt)("inlineCode",{parentName:"p"},"u.p = null"),". The attribute ",(0,r.kt)("inlineCode",{parentName:"p"},"u.d")," holds the distance from the source ",(0,r.kt)("inlineCode",{parentName:"p"},"s")," to vertex ",(0,r.kt)("inlineCode",{parentName:"p"},"u")," computed by the algorithm. The algorithm also uses a first-in, first-out queue ",(0,r.kt)("inlineCode",{parentName:"p"},"Q")," to manage the set of gray vertices."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="Listing 5.1 - BFS"',title:'"Listing',5.1:!0,"-":!0,'BFS"':!0},"function BFS(G, s) {\n  let u, v;\n\n  for (u of G) {\n    u.color = 'WHITE';\n    u.d = Number.POSITIVE_INFINITY;\n    u.p = null;\n  }\n\n  s.color = 'GRAY';\n  s.d = 0;\n  s.p = null;\n  Q = [];\n  Q.push(s);\n\n  while (Q.length > 0) {\n    u = Q.unshift();\n\n    for (v of G.Adj[u]) {\n      if (v.color === 'WHITE') {\n        v.color = 'GRAY';\n        v.d = u.d + 1;\n        v.p = u;\n        Q.push(Q, v)\n      }\n    }\n\n    u.color = 'BLACK';\n  }\n}\n")),(0,r.kt)("p",null,"Here is a visualization of this type of search."),(0,r.kt)("p",null,"Figure 5.2"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"BFS",src:n(2634).Z,width:"890",height:"700"})),(0,r.kt)("h2",{id:"52-dfs"},"5.2 DFS"),(0,r.kt)("p",null,"The strategy followed by ",(0,r.kt)("strong",{parentName:"p"},"depth-first search"),' (DFS) is, as its name implies, to search "deeper" in the graph whenever possible. Depth-first search explores edges out of the most recently discovered vertex v that still has unexplored edges leaving it. Once all of ',(0,r.kt)("inlineCode",{parentName:"p"},"v"),'s edges have been explored, the search "backtracks" to explore edges leaving the vertex from which ',(0,r.kt)("inlineCode",{parentName:"p"},"v")," was discovered. This process continues until we have discovered all the vertices that are reachable from the original source vertex. If any undiscovered vertices remain, then depth-first search selects one of them as a new source, and it repeats the search from that source. The algorithm repeats this entire process until it has discovered every vertex."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="Listing 5.2 - DFS"',title:'"Listing',5.2:!0,"-":!0,'DFS"':!0},"function DFS(G) {\n  for (let u of G) {\n    u.color = 'WHITE';\n    u.p = null;\n  }\n\n  let time = 0;\n\n  for (let u of G) {\n    if (u.color === 'WHITE') {\n      dfsVsisit(G, u);\n    }\n  }\n\n  function dfsVsisit(G, u) {\n    time++;\n    u.d = time;\n    u.color = 'GRAY';\n\n    for (let v of G.Adj[u]) {\n      if (v.color === 'WHITE') {\n        v.p = u;\n        dfsVsisit(G, v);\n      }\n    }\n\n    u.color = 'BLACK';\n    time++;\n    u.f = time;\n  }\n}\n")),(0,r.kt)("p",null,"Here is an example of steps performed in DFS."),(0,r.kt)("p",null,"Figure 5.3"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"DFS",src:n(2377).Z,width:"706",height:"612"})),(0,r.kt)("h2",{id:"53-finding-the-shortest-path"},"5.3 Finding the Shortest Path"),(0,r.kt)("p",null,"And now we are reaching the theme of your home task \u2013 search of the shortest path."),(0,r.kt)("p",null,'To find the shortest path in an unweighted graph, the best solution will be to use BFS. With weighted graphs the task becomes non-trivial. One of the most common tasks of searching a short path is a travelling salesman problem that asks the following question: "Given a list of cities and the distances between each pair of cities, what is the shortest possible route that visits each city exactly once and returns to the origin city?". The simplest way to find out is to use brute-force and try to find all permutations and see which one is the cheapest. The downside to this approach is its running time which lies within a polynomial factor of ',(0,r.kt)("inlineCode",{parentName:"p"},"O(n!)"),", the factorial of the number of cities, so this solution becomes impractical even for only 20 cities."),(0,r.kt)("p",null,"Let us look at a different, much easier problem."),(0,r.kt)("p",null,"Professor Patrick wishes to find the shortest possible route from Phoenix to Indianapolis. Given a road map of the United States on which the distance between each pair of adjacent intersections is marked, how can she determine this shortest route?"),(0,r.kt)("p",null,"One possible way would be to enumerate all the routes from Phoenix to Indianapolis, add up the distances on each route, and select the shortest. It is easy to see, however, that even disallowing routes that contain cycles, Professor Patrick would have to examine an enormous number of possibilities, most of which are simply not worth considering. For example, a route from Phoenix to Indianapolis that passes through Seattle is obviously a poor choice, because Seattle is several hundred miles out of the way."),(0,r.kt)("p",null,"In a ",(0,r.kt)("strong",{parentName:"p"},"shortest-paths problem"),", we are given a weighted, directed graph ",(0,r.kt)("inlineCode",{parentName:"p"},"G = (V, E)"),", with weight function: ",(0,r.kt)("inlineCode",{parentName:"p"},"E -> R")," mapping edges to real-valued weights. The weight ",(0,r.kt)("inlineCode",{parentName:"p"},"w(p)")," of path ",(0,r.kt)("inlineCode",{parentName:"p"},"p = (v[0], v[1], \u2026, v[k])")," is the sum of the weights of its constituent edges:"),(0,r.kt)("div",{className:"formula"},(0,r.kt)("img",{src:"https://latex.codecogs.com/svg.image?\\omega(p)=\\sum_{i=1}^{k}\\omega(\\nu_{i-1},\\nu_{i})",title:"\\omega(p)=\\sum_{i=1}^{k}\\omega(\\nu_{i-1},\\nu_{i})"})),(0,r.kt)("p",null,"One of the ways to solve this problem would be to use Dijkstra's algorithm."),(0,r.kt)("h2",{id:"54-dijkstras-algorithm"},"5.4 Dijkstra's Algorithm"),(0,r.kt)("p",null,"Dijkstra's algorithm solves the single-source shortest-paths problem on a weighted, directed graph ",(0,r.kt)("inlineCode",{parentName:"p"},"G = (V, \u0415)")," for the case in which all edge weights are nonnegative. In this section, therefore, we assume that ",(0,r.kt)("inlineCode",{parentName:"p"},"w(u, v) > 0")," for each edge ",(0,r.kt)("inlineCode",{parentName:"p"},"(u, v) \u03f5 \u0415"),"."),(0,r.kt)("p",null,"Dijkstra's algorithm maintains a set ",(0,r.kt)("inlineCode",{parentName:"p"},"S")," of vertices whose final shortest-path weights from the source ",(0,r.kt)("inlineCode",{parentName:"p"},"s")," have already been determined. The algorithm repeatedly selects the vertex u ",(0,r.kt)("inlineCode",{parentName:"p"},"2 V - S")," with the minimum shortest-path estimate, adds ",(0,r.kt)("inlineCode",{parentName:"p"},"u")," to ",(0,r.kt)("inlineCode",{parentName:"p"},"S"),", and relaxes all edges leaving ",(0,r.kt)("inlineCode",{parentName:"p"},"u"),". In the following implementation, we use a min-priority queue ",(0,r.kt)("inlineCode",{parentName:"p"},"Q")," of vertices, keyed by their ",(0,r.kt)("inlineCode",{parentName:"p"},"d")," values."),(0,r.kt)("p",null,"Dijkstra's algorithm can be implemented as following:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="Listing 5.3 - Dijkstra"',title:'"Listing',5.3:!0,"-":!0,'Dijkstra"':!0},"function Dijkstra(G, w, s) {\n  initSingleSource(G, s);\n  S = [];\n  Q = G.V; // build queue with priorities according to d values of vertices\n\n  while (Q) {\n    let u = Q.extractMin();\n    S.push(u);\n\n    for (let vertex in G.Adj[u]) {\n      relax(u, v, w);\n    }\n  }\n}\n")),(0,r.kt)("p",null,"Where functions ",(0,r.kt)("inlineCode",{parentName:"p"},"initSingleSource")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"relax")," are defined like this:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="Listing 5.4 - initSingleSource and relax"',title:'"Listing',5.4:!0,"-":!0,initSingleSource:!0,and:!0,'relax"':!0},"function initSingleSource(G, s) {\n  for (let vertex of G) {\n    v.d = Number.MAX_SAFE_INTEGER;\n    v.p = null;\n  }\n\n  s.d = 0;\n} \n\nfunction relax(u, v, w) {\n  if (v.d > u.d + w(u, v)) {\n    v.d = u.d + w(u, v);\n    v.p = u;\n  }\n}\n")),(0,r.kt)("p",null,"And here is a visualization of Dijkstra's algorithm."),(0,r.kt)("p",null,"The process of relaxing an edge ",(0,r.kt)("inlineCode",{parentName:"p"},"(u, v)")," consists of testing whether we can improve the shortest path to ",(0,r.kt)("inlineCode",{parentName:"p"},"v")," found so far by going through ",(0,r.kt)("inlineCode",{parentName:"p"},"u")," and, if so, updating ",(0,r.kt)("inlineCode",{parentName:"p"},"v.d")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"v.p"),"."),(0,r.kt)("p",null,"Figure 5.4"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Visualization of Dijkstra&#39;s algorithm",src:n(3747).Z,width:"936",height:"476"})))}c.isMDXComponent=!0},2634:function(e,t,n){t.Z=n.p+"assets/images/bfs-590248ccd0bf3d5c50f6fc4e7fe635d0.jpg"},2377:function(e,t,n){t.Z=n.p+"assets/images/dfs-421e062e7551bce4dd0913aade4ea3b6.jpg"},3747:function(e,t,n){t.Z=n.p+"assets/images/dijkstra-bcc2ef4f5cdf381350fd1f72a99792f2.jpg"},6471:function(e,t,n){t.Z=n.p+"assets/images/graph-65acb28c173367bda5d289b493764ef8.jpg"}}]);