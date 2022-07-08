"use strict";(self.webpackChunksoftware_designs_and_algorithms=self.webpackChunksoftware_designs_and_algorithms||[]).push([[8350],{3905:function(e,t,o){o.d(t,{Zo:function(){return h},kt:function(){return A}});var n=o(7294);function i(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function a(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function s(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?a(Object(o),!0).forEach((function(t){i(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):a(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function r(e,t){if(null==e)return{};var o,n,i=function(e,t){if(null==e)return{};var o,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)o=a[n],t.indexOf(o)>=0||(i[o]=e[o]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)o=a[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(i[o]=e[o])}return i}var l=n.createContext({}),c=function(e){var t=n.useContext(l),o=t;return e&&(o="function"==typeof e?e(t):s(s({},t),e)),o},h=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},g=n.forwardRef((function(e,t){var o=e.components,i=e.mdxType,a=e.originalType,l=e.parentName,h=r(e,["components","mdxType","originalType","parentName"]),g=c(o),A=i,d=g["".concat(l,".").concat(A)]||g[A]||p[A]||a;return o?n.createElement(d,s(s({ref:t},h),{},{components:o})):n.createElement(d,s({ref:t},h))}));function A(e,t){var o=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=o.length,s=new Array(a);s[0]=g;var r={};for(var l in t)hasOwnProperty.call(t,l)&&(r[l]=t[l]);r.originalType=e,r.mdxType="string"==typeof e?e:i,s[1]=r;for(var c=2;c<a;c++)s[c]=o[c];return n.createElement.apply(null,s)}return n.createElement.apply(null,o)}g.displayName="MDXCreateElement"},2683:function(e,t,o){o.r(t),o.d(t,{assets:function(){return h},contentTitle:function(){return l},default:function(){return A},frontMatter:function(){return r},metadata:function(){return c},toc:function(){return p}});var n=o(7462),i=o(3366),a=(o(7294),o(3905)),s=["components"],r={sidebar_position:3},l="2. Unified Modeling Language",c={unversionedId:"building-blocks-of-oop-part-1/unified_modeling_language",id:"building-blocks-of-oop-part-1/unified_modeling_language",title:"2. Unified Modeling Language",description:"2.1 What is UML",source:"@site/docs/2-building-blocks-of-oop-part-1/unified_modeling_language.md",sourceDirName:"2-building-blocks-of-oop-part-1",slug:"/building-blocks-of-oop-part-1/unified_modeling_language",permalink:"/docs/building-blocks-of-oop-part-1/unified_modeling_language",draft:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"1. Programming Paradigm",permalink:"/docs/building-blocks-of-oop-part-1/programming_paradigm"},next:{title:"3. Principles of OOP",permalink:"/docs/building-blocks-of-oop-part-1/principles_of_oop"}},h={},p=[{value:"2.1 What is UML",id:"21-what-is-uml",level:2},{value:"2.2 Association",id:"22-association",level:2},{value:"2.3 Inheritance",id:"23-inheritance",level:2},{value:"2.4 Composition and Aggregation",id:"24-composition-and-aggregation",level:2}],g={toc:p};function A(e){var t=e.components,r=(0,i.Z)(e,s);return(0,a.kt)("wrapper",(0,n.Z)({},g,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"2-unified-modeling-language"},"2. Unified Modeling Language"),(0,a.kt)("h2",{id:"21-what-is-uml"},"2.1 What is UML"),(0,a.kt)("p",null,"UML is a general-purpose, developmental, modeling language in the field of software engineering that is intended to provide a standard way to visualize the design of a system."),(0,a.kt)("p",null,"It is logical to assume that before starting to write code, we need to design our computer system. If the system (program) is small, for example some of your pet-project, then there is no need for visual design, because all the components of this system and their interconnections, in principle, you can keep in your head if you are writing this project alone. As soon as several people appear on the project and information needs to be somehow shared, as soon as the project grows, as soon as the number of components on the project becomes more than ten, you have a certain need for some plan, a representation of your system."),(0,a.kt)("p",null,"There is a language called UML or Unified Modeling Language for describing system components and their interrelationships. In fact, it gives us a list of terms, abstractions, concepts, and tools for high-level modeling of our system. In principle, the UML is to some extent design patterns in the programming world. When I say that in this part of the system, I need to apply a class that has only one instance to share its state between other components of the system - it will take too long, and we all know perfectly well what it is called a singleton. That is, we have some tools, some concepts, in terms of which we can discuss not some low-level details, but higher-level abstractions. The use of UML is not limited to programming, it is also used for modeling business processes, systems design, drawing up the organization structure, and so on."),(0,a.kt)("p",null,"Figure 2.1 - UML diagram of Student class"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"img.png",src:o(2483).Z,width:"144",height:"156"})),(0,a.kt)("p",null,"As you can see on the Figure 2.1, there is nothing complicated in the UML. Here is a diagram of the Student class, where at the top you see the name of the class, below is a list of properties that are inherent in this class, even below its behavior, that is, the methods that this class has."),(0,a.kt)("p",null,"Usually, the system is not limited to just one class, as we have already mentioned, there are tens, hundreds of classes, or even more. Naturally, all these classes somehow interact with each other, somehow communicate, send messages to each other, call each other's methods, send events, and so on. The visual representation of the classes and the relationship between these classes is called class diagrams. There are a lot of relationships, some of the most basic ones are shown in the Figure 2.2."),(0,a.kt)("p",null,"Let us take a closer look at the relationship between the classes."),(0,a.kt)("p",null,"Figure 2.2 \u2013 UML Relations"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"img.png",src:o(2379).Z,width:"2213",height:"1095"})),(0,a.kt)("h2",{id:"22-association"},"2.2 Association"),(0,a.kt)("p",null,"There are different types of relationship between two classes / objects. The most basic type of relationship is association, which means that the two classes are somehow related to each other, and we do not yet know exactly how this relationship is expressed and are going to clarify it in the future. This usually happens in the early stages of system design, when we know that there is a relationship, but what specific relationship - inheritance, composition, or something else is not yet clear to us. We are designing the system more globally. The association helps us a lot when we indicate that one class in some way interact with another class. At the initial stage, this is enough for us. Further, of course, this will be clarified. Why is this a directional association? \u2013 Because the arrow shows us that we have a component that uses another component. In this case the ",(0,a.kt)("inlineCode",{parentName:"p"},"CustomService")," uses the ",(0,a.kt)("inlineCode",{parentName:"p"},"CustomRepository")," component, and not vice versa."),(0,a.kt)("p",null,"Figure 2.3 \u2013 Directed association"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"img.png",src:o(7217).Z,width:"336",height:"156"})),(0,a.kt)("p",null,"An association is a relationship in which objects of one type are somehow related to objects of another type. For example, an object of one type contains or somehow uses an object of another type. The player plays in a team. We do not yet know what kind of relationship they have, or we are not interested in it at this stage of the design. But we know that there is a relationship."),(0,a.kt)("h2",{id:"23-inheritance"},"2.3 Inheritance"),(0,a.kt)("p",null,"A more precise type of relationship is the public inheritance relationship (IS A Relationship), which says that everything that is true for the base class is true for its successor. With its help we can get polymorphic behavior, abstract from the concrete implementation of classes, dealing only with abstractions (interfaces or base classes) and do not pay attention to implementation details."),(0,a.kt)("p",null,"Figure 2.4 \u2013 Inheritance relationship"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"img.png",src:o(8834).Z,width:"182",height:"248"})),(0,a.kt)("p",null,'Although inheritance is a great tool in the hands of any OOP programmer, it is clearly not enough for solving all types of problems. Firstly, not all relationships between classes are defined by the "is a" relationship, and secondly, inheritance is the strongest relationship between two classes that cannot be broken at runtime (this relationship is static and, in strongly typed languages, is determined at compile time).'),(0,a.kt)("p",null,"That is, JavaScript, as we all know, has prototypal inheritance and indeed it can be changed for inherited classes, properties can be changed, you can just change prototypes. But this is more an exception rather than a rule. Because you cannot do this in classical inheritance: once inherited in the source code, at run time you will not break this connection, and you will not change the base class. That is why it is believed that inheritance is the strongest relationship between objects. That is why architects and system designers recommend using inheritance only when it is necessary. I think you have heard the concept of preferring composition over inheritance, this suggests that composition can be broken at run time, and you can replace one object in the composition at runtime with another, change the behavior dynamically. You cannot do this with the inheritance."),(0,a.kt)("h2",{id:"24-composition-and-aggregation"},"2.4 Composition and Aggregation"),(0,a.kt)("p",null,"When relationships between components go beyond inheritance, relationships such as composition and aggregation come to our rescue. They both model a HAS-A Relationship and are usually expressed in that the class of a whole contains the fields (or properties) of its constituent parts. The line between the concepts is thing, but important, especially in the context of dependency management. We will also talk about dependency management a little later, when we touch on the topic of object-oriented design, because dependency management is one of the tools of object-oriented design."),(0,a.kt)("p",null,"Figure 2.5 \u2013 Composition and Aggregation"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"img.png",src:o(6695).Z,width:"324",height:"214"})),(0,a.kt)("p",null,"A couple of points to make it easier to remember the visual notation:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"the diamond is always on the side of the whole, and the simple line is on the side of the component."),(0,a.kt)("li",{parentName:"ol"},"a filled rhombus indicates a stronger bond - composition, an open rhombus indicates a weaker bond - aggregation.")),(0,a.kt)("p",null,"The difference between composition and aggregation is that in the case of composition, the whole explicitly controls the lifetime of its component part (the part does not exist without the whole), and in the case of aggregation, although the whole contains its component part, their lifetimes are not related (for example, the component part is passed via constructor parameters). Listing 2.1."),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"CompositeCustomService")," uses composition to manage its constituent parts, and ",(0,a.kt)("inlineCode",{parentName:"p"},"AggregatedCustomService")," uses aggregation. In this case, explicit control of the lifetime usually leads to a higher coupling between the whole and the part, since a specific type is used that closely connects the participants with each other."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="Listing 2.1 \u2013 Example of Composition and Aggregation"',title:'"Listing',2.1:!0,"\u2013":!0,Example:!0,of:!0,Composition:!0,and:!0,'Aggregation"':!0},"class CompositeCustomService {\n  // Composition\n  private readonly repository: CustomRepository = new CustomRepository();\n\n  public doSomething() {\n    // Usage of repository\n  }\n}\n\nclass AggregatedCustomService {\n  // Aggregation\n  private readonly repository: AbstractRepository;\n  constructor(repository: AbstractRepository) {\n    this.repository = repository;\n  }\n\n  public doSomething() {\n     // Usage of repository\n  }\n}\n")),(0,a.kt)("p",null,"Another example of composition. Let us say a bicycle is a whole part and its components (shock absorbers, wheels, handlebars) are parts. In fact, a single shock absorber without a bike makes no sense. An example of aggregation. Suppose there is a university or a school as a whole and teachers, professors as parts, for a certain period they may be part of this university, in some period they may not be included. They can exist without this university after the university is destroyed, that is, its lifetime is over."))}A.isMDXComponent=!0},6695:function(e,t,o){t.Z=o.p+"assets/images/uml_composition_and_aggregation-aa77851a30b6eb80060ac060aa48099f.png"},7217:function(e,t,o){t.Z=o.p+"assets/images/uml_directed_association-b3207e952435d6e313a29656fb814163.png"},8834:function(e,t,o){t.Z=o.p+"assets/images/uml_inheritance-590f07c2faea2e19b3521fa25068600e.png"},2379:function(e,t,o){t.Z=o.p+"assets/images/uml_relations-300289eef30a79b1fa0fb345d4beeed8.jpg"},2483:function(e,t){t.Z="data:image/png;base64,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"}}]);