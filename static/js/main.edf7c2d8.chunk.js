(window["webpackJsonpreact-d3-dashboard"]=window["webpackJsonpreact-d3-dashboard"]||[]).push([[0],{23:function(t,e,a){t.exports=a.p+"static/media/adult.2e37fb9b.csv"},33:function(t,e,a){t.exports=a(44)},39:function(t,e,a){},44:function(t,e,a){"use strict";a.r(e);var n=a(0),r=a.n(n),c=a(14),o=a.n(c),i=(a(38),a(2)),l=a(16),u=a(7),s=a(1),d=(a(39),function(t,e,a,n,r,c,o){var i=n.map((function(t){return e.filter((function(e){return e[a]===t})).length})),l=n.map((function(t,e){return{label:n[e],count:i[e]}}));s.o(".".concat(t," > *")).remove();var u=10,d=20,f=30,m=40,p=c-m-d,v=o-u-f,b=s.o(".".concat(t)).append("svg").attr("width",p+m+d).attr("height",v+u+f).append("g").attr("transform","translate("+(p/2+m)+","+(v/2+u)+")"),h=Math.min(p,v)/2,g=s.m(s.n),y=s.a().innerRadius(h-50).outerRadius(h),E=s.a().innerRadius(h-51).outerRadius(h+3),j=s.j().value((function(t){return t.count})).sort(null);b.selectAll("path").data(j(l)).enter().append("path").attr("d",y).attr("fill",(function(t,e){return g(e)})).style("transition","100ms ease-in-out").on("click",(function(t){return r(t.data.label)})).on("mouseover",(function(t,e){s.o(this).style("cursor","pointer").attr("d",E),s.o("#mytooltip").style("visibility","visible").text("".concat(t.data.label,": ").concat(t.data.count))})).on("mouseout",(function(t,e){s.o(this).style("cursor","default").attr("d",y),s.o("#mytooltip").style("visibility","hidden")})).on("mousemove",(function(){s.o("#mytooltip").style("top",s.f.pageY-10+"px").style("left",s.f.pageX+10+"px")}));var O=b.append("g").attr("transform","translate(-100,120)");O.selectAll(null).data(j(l).reverse()).enter().append("rect").attr("y",(function(t){return-10*t.index*1.8})).attr("width",10).attr("height",10).attr("fill",(function(t,e){return g(e)})).attr("stroke","grey").style("stroke-width","1px").on("click",(function(t,e){return r(l[e].label)})).on("mouseover",(function(){s.o(this).style("cursor","pointer")})).on("mouseout",(function(){s.o(this).style("cursor","default")})),O.selectAll(null).data(j(l).reverse()).enter().append("text").text((function(t,e){return l[e].label})).attr("x",12).attr("y",(function(t){return-10*t.index*1.8+10})).style("font-family","sans-serif").style("font-size","".concat(10,"px")).on("click",(function(t,e){return r(l[e].label)})).on("mouseover",(function(){s.o(this).style("cursor","pointer")})).on("mouseout",(function(){s.o(this).style("cursor","default")}))}),f=function(t){var e=t.data,a=t.values,c=t.filter,o="vis-piechart-gender";return Object(n.useEffect)((function(){a&&d(o,e,"gender",a,c,250,250)})),r.a.createElement("div",{id:o,className:"pane"},r.a.createElement("div",{className:"header"},"Sex"),r.a.createElement("div",{className:o}))},m=function(t){var e=t.data,a=t.values,c=t.filter,o="vis-piechart-race";return Object(n.useEffect)((function(){a&&d(o,e,"race",a,c,250,260)})),r.a.createElement("div",{id:o,className:"pane"},r.a.createElement("div",{className:"header"},"Ethnicity"),r.a.createElement("div",{className:o}))},p=function(t,e,a,n,r,c,o){var i=arguments.length>7&&void 0!==arguments[7]?arguments[7]:50,l=!(arguments.length>8&&void 0!==arguments[8])||arguments[8],u=n.map((function(t){return e.filter((function(e){return e[a]===t})).length})),d=n.map((function(t,e){return{label:n[e],count:u[e]}}));s.o(".".concat(t," > *")).remove();var f={top:20,right:20,bottom:i,left:40},m=c-f.left-f.right,p=o-f.top-f.bottom,v=s.o(".".concat(t)).append("svg").attr("width",m+f.left+f.right).attr("height",p+f.top+f.bottom).append("g").attr("transform","translate(".concat(f.left,", ").concat(f.top,")")),b=s.m(s.n),h=s.k().domain(d.map((function(t){return t.label}))).range([0,m]).padding(.1),g=s.l().domain([0,s.h(d,(function(t){return t.count}))]).range([p,0]),y=function(t){return h(t.label)},E=h.bandwidth(),j=function(t){return h(t.label)-2},O=h.bandwidth()+4;v.selectAll(".bar").data(d).enter().append("rect").attr("class","bar").attr("x",y).attr("width",E).attr("y",(function(t){return g(t.count)})).attr("height",(function(t){return p-g(t.count)})).attr("fill",(function(t,e){return b(e)})).style("transition","50ms ease-in-out").on("click",(function(t){return r(t.label)})).on("mouseover",(function(t){s.o(this).style("cursor","pointer").attr("x",j).attr("width",O),s.o("#mytooltip").style("visibility","visible").text("".concat(t.label,": ").concat(t.count))})).on("mouseout",(function(){s.o(this).style("cursor","default").attr("x",y).attr("width",E),s.o("#mytooltip").style("visibility","hidden")})).on("mousemove",(function(){s.o("#mytooltip").style("top",s.f.pageY-10+"px").style("left",s.f.pageX+10+"px")})),v.append("g").attr("transform","translate(0,".concat(p,")")).call(s.b(h)).selectAll("text").style("text-anchor","end").attr("transform","rotate(".concat(l?-65:0,")")).on("click",(function(t){return r(t)})).on("mouseover",(function(){s.o(this).style("cursor","pointer")})).on("mouseout",(function(){s.o(this).style("cursor","default")})),v.append("g").call(s.c(g).tickFormat((function(t){return"".concat(t/1e3,"k")}))),v.append("text").attr("transform","rotate(-90)").attr("y",0-f.left).attr("x",0-p/2).attr("dy","1em").attr("font-size","10px").style("text-anchor","middle").text("count")},v=function(t){var e=t.data,a=t.values,c=t.filter,o="vis-barchart-edu";return Object(n.useEffect)((function(){a&&p(o,e,"education",a,c,500,250,80)})),r.a.createElement("div",{id:o,className:"pane"},r.a.createElement("div",{className:"header"},"Education"),r.a.createElement("div",{className:o}))},b=function(t){var e=t.data,a=t.values,c=t.filter,o="vis-barchart-work";return Object(n.useEffect)((function(){a&&p(o,e,"workclass",a,c,375,250,75)})),r.a.createElement("div",{id:o,className:"pane"},r.a.createElement("div",{className:"header"},"Work Class"),r.a.createElement("div",{className:o}))},h=function(t){var e=t.data,a=t.values,c=t.filter,o="vis-barchart-income";return Object(n.useEffect)((function(){a&&p(o,e,"income",a,c,250,250,50,!1)})),r.a.createElement("div",{id:o,className:"pane"},r.a.createElement("div",{className:"header"},"Income"),r.a.createElement("div",{className:o}))},g=function(t,e,a,n,r,c,o,i){s.o(".".concat(t," > *")).remove();var l,u,d,f=20,m=20,p=i,v=40,b=c-v-m,h=o-f-p,g=s.o(".".concat(t)).append("svg").attr("width",b+v+m).attr("height",h+f+p).append("g").attr("transform","translate("+v+","+f+")"),y=s.l().domain([n[0]-10,n[1]+10]).range([0,b]),E=(d=7,l=function(t){return Math.abs(t/=d)<=1?.75*(1-t*t)/d:0},u=y.ticks(40),function(t){return u.map((function(e){return[e,s.i(t,(function(t){return l(e-t)}))]}))})(e.map((function(t){return t[a]}))),j=s.l().domain([0,s.h(E,(function(t){return t[1]}))]).range([h,0]),O=s.l().domain([0,s.h(e,(function(t){return t[a]}))]).range([h,0]);g.append("path").attr("class","mypath").datum(E).attr("fill","#69b3a2").attr("opacity",".8").attr("stroke","#000").attr("stroke-width",1).attr("stroke-linejoin","round").attr("d",s.g().curve(s.e).x((function(t){return y(t[0])})).y((function(t){return j(t[1])}))),g.append("g").attr("transform","translate(0,"+h+")").call(s.b(y)),g.append("text").attr("transform","translate(".concat(b/2,", ").concat(h+f+10,")")).attr("font-size","10px").style("text-anchor","middle").text("age"),g.append("g").call(s.c(O)),g.append("text").attr("transform","rotate(-90)").attr("y",0-v).attr("x",0-h/2).attr("dy","1em").attr("font-size","10px").style("text-anchor","middle").text("count")},y=a(59),E=function(t){var e=t.data,a=t.range,c=t.filter,o=Object(n.useState)(a),i=Object(u.a)(o,2),l=i[0],s=i[1];return Object(n.useEffect)((function(){g("dist-chart-age",e,"age",a,c,500,250,35)})),Object(n.useEffect)((function(){s(a)}),[a]),r.a.createElement("div",{id:"dist-chart-age",className:"pane"},r.a.createElement("div",{className:"header"},"Age"),r.a.createElement("div",{className:"dist-chart-age"}),r.a.createElement("div",{className:"slider-container"},r.a.createElement(y.a,{min:a[0],max:a[1],value:l,onChange:function(t,e){return s(e)},onChangeCommitted:function(t,e){return c(e)},valueLabelDisplay:"auto","aria-labelledby":"range-slider"})))},j=function(t){var e=t.data,a=t.values,c=t.filter,o="vis-barchart-marital";return Object(n.useEffect)((function(){a&&p(o,e,"marital-status",a,c,375,250,100)})),r.a.createElement("div",{id:o,className:"pane"},r.a.createElement("div",{className:"header"},"Marital Status"),r.a.createElement("div",{className:o}))},O=function(t){var e=t.data,a=t.values,c=t.filter,o="vis-barchart-occupation";return Object(n.useEffect)((function(){a&&p(o,e,"occupation",a,c,625,250,100)})),r.a.createElement("div",{id:o,className:"pane"},r.a.createElement("div",{className:"header"},"Occupation"),r.a.createElement("div",{className:o}))},x=a(23),k=a.n(x),w=function(){var t=Object(n.useState)([]),e=Object(u.a)(t,2),a=e[0],c=e[1],o=Object(n.useState)({}),d=Object(u.a)(o,2),p=d[0],g=d[1],y=Object(n.useState)([]),x=Object(u.a)(y,2),w=x[0],N=x[1],S=Object(n.useState)([]),M=Object(u.a)(S,2),A=M[0],z=M[1],C=Object(n.useState)({gender:null,race:null,education:null,workclass:null,income:null,age:[null,null],marital:null,occupation:null}),R=Object(u.a)(C,2),I=R[0],J=R[1];Object(n.useEffect)((function(){s.o("body").append("div").attr("id","mytooltip").style("position","absolute").style("z-index","10").style("visibility","hidden").style("background-color","whitesmoke").style("color","black").style("padding","2px 5px").style("border-radius","5px").style("border","1px solid lightgray").style("opacity","80%"),s.d(k.a,(function(t){c(t),z(t);var e={};Object.keys(t[0]).map((function(a,n){e[a]=Object(l.a)(new Set(t.map((function(t){return t[a]})).filter((function(t){return"?"!==t}))))})),g(e);var a=t.map((function(t){return+t.age}));N([Math.min.apply(Math,Object(l.a)(a)),Math.max.apply(Math,Object(l.a)(a))])}))}),[]),Object(n.useEffect)((function(){z(a.filter((function(t){return(!I.gender||t.gender===I.gender)&&(!I.gender||t.gender===I.gender)&&(!I.race||t.race===I.race)&&(!I.education||t.education===I.education)&&(!I.workclass||t.workclass===I.workclass)&&(!I.income||t.income===I.income)&&(!I.age[0]||t.age>=I.age[0]&&t.age<=I.age[1])&&(!I.marital||t["marital-status"]===I.marital)&&(!I.occupation||t.occupation===I.occupation)})))}),[a,I]);return r.a.createElement("div",{className:"content"},r.a.createElement("div",{className:"grid"},r.a.createElement(f,{data:A,values:p.gender,filter:function(t){J(Object(i.a)(Object(i.a)({},I),{},{gender:I.gender===t?null:t}))}}),r.a.createElement(m,{data:A,values:p.race,filter:function(t){J(Object(i.a)(Object(i.a)({},I),{},{race:I.race===t?null:t}))}}),r.a.createElement(v,{data:A,values:p.education,filter:function(t){J(Object(i.a)(Object(i.a)({},I),{},{education:I.education===t?null:t}))}}),r.a.createElement(b,{data:A,values:p.workclass,filter:function(t){J(Object(i.a)(Object(i.a)({},I),{},{workclass:I.workclass===t?null:t}))}}),r.a.createElement(h,{data:A,values:p.income,filter:function(t){J(Object(i.a)(Object(i.a)({},I),{},{income:I.income===t?null:t}))}}),r.a.createElement(E,{data:A,range:w,filter:function(t){J(Object(i.a)(Object(i.a)({},I),{},{age:t}))}}),r.a.createElement(j,{data:A,values:p["marital-status"],filter:function(t){J(Object(i.a)(Object(i.a)({},I),{},{marital:I.marital===t?null:t}))}}),r.a.createElement(O,{data:A,values:p.occupation,filter:function(t){J(Object(i.a)(Object(i.a)({},I),{},{occupation:I.occupation===t?null:t}))}})))};o.a.render(r.a.createElement(w,null),document.getElementById("root"))}},[[33,1,2]]]);
//# sourceMappingURL=main.edf7c2d8.chunk.js.map