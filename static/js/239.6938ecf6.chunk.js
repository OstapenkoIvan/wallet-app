"use strict";(self.webpackChunkwallet_app=self.webpackChunkwallet_app||[]).push([[239],{4596:function(e,t,a){a(2791);t.Z=a.p+"static/media/sprite.f58d0f3c45d472ac1740c58e802719cb.svg"},2710:function(e,t,a){a.d(t,{Dq:function(){return i},E7:function(){return s.Z},Fw:function(){return o},JT:function(){return u},KB:function(){return l},UQ:function(){return c},VP:function(){return m},jY:function(){return n},n5:function(){return r},qL:function(){return d}});var s=a(4596),n=a(2106),c=(a(391),a(1497),a(5300)),i=a(5275),r=a(6443),o=a(6924),l=a(9942),d=a(2887),u=a(906),m=a(2942)},9239:function(e,t,a){a.r(t),a.d(t,{default:function(){return v}});var s=a(2791),n=a(4272),c={table:"StatisticsTable_table__yiYU9",wrapper:"StatisticsTable_wrapper__wDkD-",thead:"StatisticsTable_thead__4BbBy",thedTitl:"StatisticsTable_thedTitl__mNIVH",tbody:"StatisticsTable_tbody__UDAoE",colName:"StatisticsTable_colName__iERCd",colData:"StatisticsTable_colData__FR-5F",colored:"StatisticsTable_colored__KhgA3",divData:"StatisticsTable_divData__aUV5h",tbodyRow:"StatisticsTable_tbodyRow__qJAcl",botomTd:"StatisticsTable_botomTd__JkoMH",botomTdExpense:"StatisticsTable_botomTdExpense__sfDrL",tblList:"StatisticsTable_tblList__duG3P",tblItem:"StatisticsTable_tblItem__7RTPt",botomExpense:"StatisticsTable_botomExpense__sFBif",botomIncome:"StatisticsTable_botomIncome__xTzj9"},i=a(3329),r=function(e){return e.data.map((function(e,t){var a=e.name,s=e.total,r=(e.type,s.toString().slice(1));return(0,i.jsxs)("tr",{className:c.tbodyRow,children:[(0,i.jsxs)("td",{className:[c.colName,c["col-".concat(t+1)]].join(" "),children:[(0,i.jsx)("div",{style:{backgroundColor:n.p3[t]},className:[c.colored,c["colored-".concat(t+1)]].join(" ")}),(0,i.jsx)("div",{className:c.divData,children:a})]}),(0,i.jsx)("td",{className:[c.colData,c["col-".concat(t+1)]].join(" "),children:r})]},t)}))},o=function(e){var t=e.statData,a=t.expenseSummary,s=t.incomeSummary,n=t.preparedArray;return(0,i.jsx)("div",{className:c.container,children:(0,i.jsxs)("div",{className:c.wrapper,children:[(0,i.jsxs)("table",{className:c.table,children:[(0,i.jsx)("thead",{className:c.thead,children:(0,i.jsxs)("tr",{className:c.theadRow,children:[(0,i.jsx)("th",{className:c.thedTitl,children:"Category"}),(0,i.jsx)("th",{className:c.thedTitl,children:"Sum"})]})}),(0,i.jsx)("tbody",{className:c.tbody,children:(0,i.jsx)(r,{data:n})})]}),(0,i.jsxs)("ul",{className:c.tblList,children:[(0,i.jsxs)("li",{className:c.tblItem,children:[(0,i.jsx)("p",{className:c.botomName,children:"Expenses:"}),(0,i.jsx)("p",{className:[c.botomSum,c.botomExpense].join(" "),children:a})]}),(0,i.jsxs)("li",{className:c.tblItem,children:[(0,i.jsx)("p",{className:c.botomName,children:"Income:"}),(0,i.jsx)("p",{className:[c.botomSum,c.botomIncome].join(" "),children:s})]})]})]})})},l=a(885),d=a(8398),u=a(9683),m=a(2507),p=a(9434);d.kL.register(d.qi,d.u);var f={cutout:"70%"};function h(e){var t=e.statChartData,a=void 0===t?{}:t,c=(0,s.useState)(""),r=(0,l.Z)(c,2),o=r[0],d=r[1],h=(0,s.useState)(""),b=(0,l.Z)(h,2),x=b[0],_=b[1],g=(0,s.useState)(""),N=(0,l.Z)(g,2),j=N[0],A=N[1];console.log(a);var S={labels:j,datasets:[{label:"# of Votes",data:o,backgroundColor:x,borderWidth:0}]},v=(0,p.v9)(m.n3);(0,s.useEffect)((function(){var e=a.map((function(e){return e.total})),t=a.map((function(e,t){return n.p3[t]})),s=a.map((function(e){return e.name}));d(e),_(t),A(s)}),[a,v]);var y=[{beforeDraw:function(e){var t=e.width,a=e.height,s=e.ctx;s.restore();var n=(a/160).toFixed(2);s.font=n+"em sans-serif",s.textBaseline="top";var c="\u20b4 ".concat(v),i=Math.round((t-s.measureText(c).width)/2),r=a/2.2;s.fillText(c,i,r),s.save()}}];return(0,i.jsx)(u.$I,{plugins:y,options:f,data:S})}var b=a(9961),x={selectWrapper:"DateSelect_selectWrapper__dvNA8",select:"DateSelect_select__pSMb4",selectHeader:"DateSelect_selectHeader__Rrwkw",isChosen:"DateSelect_isChosen__1hJ+R",selectIcon:"DateSelect_selectIcon__5MX+p",selectBody:"DateSelect_selectBody__NO90N",isActive:"DateSelect_isActive__Rzkml",selectItem:"DateSelect_selectItem__e3X54",hiddenInput:"DateSelect_hiddenInput__t91xQ"},_=a(2710),g=function(){var e=(0,s.useState)(!1),t=(0,l.Z)(e,2),a=t[0],c=t[1],r=(0,s.useState)(!1),o=(0,l.Z)(r,2),d=o[0],u=o[1],m=(0,s.useState)(""),f=(0,l.Z)(m,2),h=f[0],g=f[1],N=(0,s.useState)(""),j=(0,l.Z)(N,2),A=j[0],S=j[1],v=(0,p.I0)(),y=function(e){var t=e.target.id;g(t)},I=function(e){var t=e.target.textContent;S(Number(t))};return(0,s.useEffect)((function(){var e,t=null===(e=n.vc.filter((function(e){return e.monthName===h}))[0])||void 0===e?void 0:e.monthNumber;h&&A&&v(b.h4.getSummaryThunk({month:t,year:A}))}),[v,h,A]),(0,i.jsx)(i.Fragment,{children:(0,i.jsxs)("div",{className:x.selectWrapper,children:[(0,i.jsxs)("div",{onClick:function(){c(!a)},className:x.select,tabIndex:"0",id:"month",children:[(0,i.jsx)("div",{className:"Month"===h?x.selectHeader:[x.selectHeader,x.isChosen].join(" "),children:h||"Month"}),(0,i.jsx)("svg",{className:x.selectIcon,width:"40",height:"19",children:(0,i.jsx)("use",{href:_.E7+"#icon-select-arrow"})}),(0,i.jsx)("ul",{className:a?[x.selectBody,x.isActive].join(" "):x.selectBody,children:n.vc.map((function(e){return(0,i.jsx)("li",{onClick:y,className:x.selectItem,tabIndex:"0",id:e.monthName,children:e.monthName},e.monthNumber)}))}),(0,i.jsx)("input",{className:x.hiddenInput,name:"category",id:"category",placeholder:"Month",value:h,onChange:y,required:!0})]}),(0,i.jsxs)("div",{onClick:function(){u(!d)},className:x.select,tabIndex:"0",id:"year",children:[(0,i.jsx)("div",{className:"Year"===A?x.selectHeader:[x.selectHeader,x.isChosen].join(" "),children:A||"Year"}),(0,i.jsx)("svg",{className:x.selectIcon,width:"40",height:"19",children:(0,i.jsx)("use",{href:_.E7+"#icon-select-arrow"})}),(0,i.jsx)("ul",{className:d?[x.selectBody,x.isActive].join(" "):x.selectBody,children:n.Iu.map((function(e){return(0,i.jsx)("li",{onClick:I,className:x.selectItem,tabIndex:"0",id:e,children:e},e)}))}),(0,i.jsx)("input",{className:x.hiddenInput,name:"category",id:"category",placeholder:"Year",value:A,onChange:I,required:!0})]})]})})},N="StatisticsPage_Statistics__oUcOq",j="StatisticsPage_statisticsTitle__bgxxB",A="StatisticsPage_chartWrapper__6PLD7",S="StatisticsPage_tableWrapper__1cgUp",v=function(){var e=(0,p.I0)(),t=(0,p.v9)(b.pX.H2),a=t||{},n=a.categoriesSummary,c=a.expenseSummary,r=a.incomeSummary,l=null===n||void 0===n?void 0:n.filter((function(e){return"EXPENSE"===e.type}));return(0,s.useEffect)((function(){e(b.h4.getSummaryThunk({month:11,year:2022}))}),[e]),(0,i.jsxs)("div",{className:N,children:[(0,i.jsxs)("div",{className:A,children:[(0,i.jsx)("h2",{className:j,children:"Statistics"}),t&&(0,i.jsx)(h,{statChartData:l})]}),(0,i.jsxs)("div",{className:S,children:[(0,i.jsx)(g,{}),t&&(0,i.jsx)(o,{statData:{preparedArray:l,expenseSummary:c,incomeSummary:r}})]})]})}},6845:function(e,t,a){a.d(t,{CP:function(){return n},H2:function(){return c},f1:function(){return s}});var s=function(e){return e.finance.transactions},n=function(e){return e.finance.categories},c=function(e){return e.finance.summary}},9961:function(e,t,a){a.d(t,{h4:function(){return s},pX:function(){return n}});var s=a(5867),n=(a(3587),a(6845))},391:function(e,t,a){e.exports=a.p+"static/media/desktop-background.8453699a7aa1e090ecbc.png"},5300:function(e,t,a){e.exports=a.p+"static/media/desktop-image-signup.d98244f3657e4c4020ab.png"},5275:function(e,t,a){e.exports=a.p+"static/media/desktop-image-signup@2x.cc79892da871809148ff.png"},9942:function(e,t,a){e.exports=a.p+"static/media/desktop-image.7ba410a8f55aadd7f4f4.png"},2887:function(e,t,a){e.exports=a.p+"static/media/desktop-image@2x.e048d01bf79ae1392c52.png"},1497:function(e,t,a){e.exports=a.p+"static/media/tablet-background.c6b4363a4497fb89dc3e.png"},6443:function(e,t,a){e.exports=a.p+"static/media/tablet-image-signup.5b0c07a56ee9065b9a2a.png"},6924:function(e,t,a){e.exports=a.p+"static/media/tablet-image-signup@2x.608fb241ffb736035a00.png"},906:function(e,t,a){e.exports=a.p+"static/media/tablet-image.dbd87431a5a3e92cec65.png"},2942:function(e,t,a){e.exports=a.p+"static/media/tablet-image@2x.459cb90a2560d0bf0fd6.png"},2106:function(e){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAK1SURBVHgB7Zi9btNQFMf/xzFpxjAiocaVisTYSIW1yYqQmi7QiqV9gqZP0PQJKE9AWEgLQ81Ay+jOqKrZkCiSoQNrWFDU2D6ca9W0DY4afyTykJ8U3Y/ce/33PeceH5uQIfMnnW0C1plhSNPSC9j4Wl1zkAIdGfDgpLMuxbYSxlfdNdfDaynrSAEhBdeFDR3EqJ89WrOQkEQ7OJKwK5ryswY7H552DFXe5gKxdnB0YWQz/GNiMl29ZDvVla7qnf/cqUGjZQI3wjWI0O5rpa1wTCKBwcKEbanWhgjqyoVMseexXMwML2acHpTv+L2GVJeYSUouR05n7IgbtCJXRmJhZIH5WCrWdR9TpnNdbsjWLGPoDf23ln22uFqN/AcjC4vepX/jB0wXF7dQuhtlZhoujNRgG+x/IGbr2+MXdjhuZNPFgKGtfF98bg726zfEKWEMZbYdV5+xB+9ICdPd3gLcXu0y3v2QpV8hAwj+8EPSWP1luHAN5AAdumPu3XPCNj15di4m5RbygwNdWzl8ez9wKU0cu4l8YcDzN8OGJr6U2sGzhnAVCTTknKnAtEwFpiWTjDoa3ilqxfb1oJsECdQ/GRnDxFtH+5Xdp6vnNR9sIAHso3v0btbMXKBkPNbH/dl6Nk8oamXug+zzl2BpecQjNdzM/pAQgqyEyS/f7JZ+YicoR6c8sVPMulc/3K/MeZpXjTNvYgKLfyRLET7tzTlx5o0xzNzkoqhvSt75pu97S/LGN/K8iQlUJ/rC77cQkzEcEqoEBchBepxxBOpu8cKb65VQLvjaAYMWkAi2oRc2xmHicn+m8LLU87ZMsxLrxEYxlkfdJSrmmQz+jbgwOYfvZ9uqOs5Doj7FNZN8QCMt+NjUVvVpPpiWqcC05F8gqYCYM8KcUqGxRGuVpyEnqIzcLxR3w/ZfEKIgZ8ATgJ0AAAAASUVORK5CYII="}}]);
//# sourceMappingURL=239.6938ecf6.chunk.js.map