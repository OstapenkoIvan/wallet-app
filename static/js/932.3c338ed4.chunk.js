"use strict";(self.webpackChunkwallet_app=self.webpackChunkwallet_app||[]).push([[932],{2710:function(e,t,a){a.d(t,{Dq:function(){return n},E7:function(){return s.Z},Fw:function(){return r},JT:function(){return u},KB:function(){return l},UQ:function(){return i},VP:function(){return m},jY:function(){return c},n5:function(){return o},qL:function(){return d}});var s=a(4596),c=a(2106),i=(a(391),a(1497),a(5300)),n=a(5275),o=a(6443),r=a(6924),l=a(9942),d=a(2887),u=a(906),m=a(2942)},4505:function(e,t,a){a.r(t),a.d(t,{default:function(){return w}});var s=a(885),c=a(2791),i=a(5848),n={table:"StatisticsTable_table__yiYU9",wrapper:"StatisticsTable_wrapper__wDkD-",thead:"StatisticsTable_thead__4BbBy",thedTitl:"StatisticsTable_thedTitl__mNIVH",tbody:"StatisticsTable_tbody__UDAoE",colName:"StatisticsTable_colName__iERCd",colData:"StatisticsTable_colData__FR-5F",colored:"StatisticsTable_colored__KhgA3",divData:"StatisticsTable_divData__aUV5h",tbodyRow:"StatisticsTable_tbodyRow__qJAcl",botomTd:"StatisticsTable_botomTd__JkoMH",botomTdExpense:"StatisticsTable_botomTdExpense__sfDrL",tblList:"StatisticsTable_tblList__duG3P",tblItem:"StatisticsTable_tblItem__7RTPt",botomExpense:"StatisticsTable_botomExpense__sFBif",botomIncome:"StatisticsTable_botomIncome__xTzj9"},o=a(3329),r=function(e){return e.data.map((function(e,t){var a=e.name,s=e.total,c=(e.type,s.toString().slice(1));return(0,o.jsxs)("tr",{className:n.tbodyRow,children:[(0,o.jsxs)("td",{className:[n.colName,n["col-".concat(t+1)]].join(" "),children:[(0,o.jsx)("div",{style:{backgroundColor:i.p3[t]},className:[n.colored,n["colored-".concat(t+1)]].join(" ")}),(0,o.jsx)("div",{className:n.divData,children:a})]}),(0,o.jsx)("td",{className:[n.colData,n["col-".concat(t+1)]].join(" "),children:c})]},t)}))},l=function(e){var t=e.statData,a=t.expenseSummary,s=t.incomeSummary,c=t.preparedArray;return(0,o.jsx)("div",{className:n.container,children:(0,o.jsxs)("div",{className:n.wrapper,children:[(0,o.jsxs)("table",{className:n.table,children:[(0,o.jsx)("thead",{className:n.thead,children:(0,o.jsxs)("tr",{className:n.theadRow,children:[(0,o.jsx)("th",{className:n.thedTitl,children:"Category"}),(0,o.jsx)("th",{className:n.thedTitl,children:"Sum"})]})}),(0,o.jsx)("tbody",{className:n.tbody,children:(0,o.jsx)(r,{data:c})})]}),(0,o.jsxs)("ul",{className:n.tblList,children:[(0,o.jsxs)("li",{className:n.tblItem,children:[(0,o.jsx)("p",{className:n.botomName,children:"Expenses:"}),(0,o.jsx)("p",{className:[n.botomSum,n.botomExpense].join(" "),children:a})]}),(0,o.jsxs)("li",{className:n.tblItem,children:[(0,o.jsx)("p",{className:n.botomName,children:"Income:"}),(0,o.jsx)("p",{className:[n.botomSum,n.botomIncome].join(" "),children:s})]})]})]})})},d=a(8398),u=a(9683),m="StatisticChart_noStatMessage__SJCi4";d.kL.register(d.qi,d.u);var p={cutout:"70%"};function h(e){var t=e.statChartData,a=void 0===t?{}:t,n=e.periodTotal,r=void 0===n?0:n,l=e.expenseSummary,d=void 0===l?0:l,h=(0,c.useState)(""),x=(0,s.Z)(h,2),b=x[0],_=x[1],f=(0,c.useState)(""),g=(0,s.Z)(f,2),j=g[0],S=g[1],N=(0,c.useState)(""),A=(0,s.Z)(N,2),v=A[0],y=A[1],T=0!==d?d.toString().slice(1):0,I={labels:v,datasets:[{label:"# of Votes",data:b,backgroundColor:j,borderWidth:0}]};(0,c.useEffect)((function(){var e=a.map((function(e){return e.total})),t=a.map((function(e,t){return i.p3[t]})),s=a.map((function(e){return e.name}));_(e),S(t),y(s)}),[a,r]);var C=[{beforeDraw:function(e){var t=e.width,a=e.height,s=e.ctx;s.restore();var c=(a/160).toFixed(2);s.font=c+"em sans-serif",s.textBaseline="top";var i="\u20b4 ".concat(T," "),n=Math.round((t-s.measureText(i).width)/2),o=a/2.2;s.fillText(i,n,o),s.save()}}];return 0===r?(0,o.jsx)("h2",{className:m,children:"No statistic information"}):(0,o.jsx)(u.$I,{plugins:C,options:p,redraw:!0,data:I})}var x=a(9434),b=a(9961),_=a(114),f=a(5309),g={selectWrapper:"DateSelect_selectWrapper__dvNA8",select:"DateSelect_select__pSMb4",selectHeader:"DateSelect_selectHeader__Rrwkw",isChosen:"DateSelect_isChosen__1hJ+R",selectIcon:"DateSelect_selectIcon__5MX+p",selectBody:"DateSelect_selectBody__NO90N",isActive:"DateSelect_isActive__Rzkml",selectItem:"DateSelect_selectItem__e3X54",hiddenInput:"DateSelect_hiddenInput__t91xQ"},j=a(2710),S=function(){var e=(0,c.useState)(!1),t=(0,s.Z)(e,2),a=t[0],n=t[1],r=(0,c.useState)(!1),l=(0,s.Z)(r,2),d=l[0],u=l[1],m=(0,c.useState)(""),p=(0,s.Z)(m,2),h=p[0],_=p[1],f=(0,c.useState)(""),S=(0,s.Z)(f,2),N=S[0],A=S[1],v=(0,x.I0)(),y=new Date,T=y.getMonth()+1,I=i.vc.getKeyByValue(T),C=y.getFullYear(),w=function(e){var t=e.target.id;_(t)},D=function(e){var t=e.target.textContent;A(Number(t))};return(0,c.useEffect)((function(){var e=i.vc[h];e&&N&&v(b.h4.getSummaryThunk({month:e,year:N}))}),[v,h,N]),(0,o.jsx)(o.Fragment,{children:(0,o.jsxs)("div",{className:g.selectWrapper,children:[(0,o.jsxs)("div",{onClick:function(){n(!a)},className:g.select,tabIndex:"0",id:"month",children:[(0,o.jsx)("div",{className:"Month"===h?g.selectHeader:[g.selectHeader,g.isChosen].join(" "),children:h||I}),(0,o.jsx)("svg",{className:g.selectIcon,width:"40",height:"19",children:(0,o.jsx)("use",{href:j.E7+"#icon-select-arrow"})}),(0,o.jsx)("ul",{className:a?[g.selectBody,g.isActive].join(" "):g.selectBody,children:i.Yi.map((function(e){return(0,o.jsx)("li",{onClick:w,className:g.selectItem,tabIndex:"0",id:e,children:e},e)}))}),(0,o.jsx)("input",{className:g.hiddenInput,name:"category",id:"category",placeholder:"Month",value:h,onChange:w,required:!0})]}),(0,o.jsxs)("div",{onClick:function(){u(!d)},className:g.select,tabIndex:"0",id:"year",children:[(0,o.jsx)("div",{className:"Year"===N?g.selectHeader:[g.selectHeader,g.isChosen].join(" "),children:N||C}),(0,o.jsx)("svg",{className:g.selectIcon,width:"40",height:"19",children:(0,o.jsx)("use",{href:j.E7+"#icon-select-arrow"})}),(0,o.jsx)("ul",{className:d?[g.selectBody,g.isActive].join(" "):g.selectBody,children:i.Iu.map((function(e){return(0,o.jsx)("li",{onClick:D,className:g.selectItem,tabIndex:"0",id:e,children:e},e)}))}),(0,o.jsx)("input",{className:g.hiddenInput,name:"category",id:"category",placeholder:"Year",value:N,onChange:D,required:!0})]})]})})},N="StatisticsPage_Statistics__oUcOq",A="StatisticsPage_statisticsTitle__bgxxB",v="StatisticsPage_chartWrapper__6PLD7",y="StatisticsPage_tableWrapper__1cgUp",T="StatisticsPage_noStatisticContainer__8EeBr",I="StatisticsPage_modalOpenSpan__HbGxe",C="StatisticsPage_noStatisticMessage__BOa98",w=function(){var e=(0,x.I0)(),t=(0,x.v9)(b.pX.H2),a=(0,x.v9)(b.pX.f1),n=t||{},r=n.categoriesSummary,d=n.expenseSummary,u=n.incomeSummary,m=n.periodTotal,p=null===r||void 0===r?void 0:r.filter((function(e){return"EXPENSE"===e.type})),g=(0,c.useState)(!1),j=(0,s.Z)(g,2),w=j[0],D=j[1],E=new Date,k=E.getMonth()+1,B=i.vc.getKeyByValue(k),M=E.getFullYear();(0,c.useEffect)((function(){var t=i.vc[B];e(b.h4.getSummaryThunk({month:t,year:M}))}),[M,e,B]);var Y=function(){D(!w)};return(0,o.jsx)("div",{className:N,children:a.length>0?(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)("div",{className:v,children:[(0,o.jsx)("h2",{className:A,children:"Statistics"}),t&&(0,o.jsx)(h,{statChartData:p,periodTotal:m,expenseSummary:d,incomeSummary:u})]}),(0,o.jsxs)("div",{className:y,children:[(0,o.jsx)(S,{}),t&&(0,o.jsx)(l,{statData:{preparedArray:p,incomeSummary:u,expenseSummary:d}})]})]}):(0,o.jsxs)("div",{className:T,children:[(0,o.jsxs)("h1",{className:C,children:["You should"," ",(0,o.jsx)("span",{className:I,tabIndex:"1",onClick:Y,children:"add the first transaction"})," ","to show statistics information"]}),w&&(0,o.jsx)(_.ZP,{defaultButton:!1,handleToggle:Y,children:(0,o.jsx)(f.Z,{onClose:Y})})]})})}},391:function(e,t,a){e.exports=a.p+"static/media/desktop-background.8453699a7aa1e090ecbc.png"},5300:function(e,t,a){e.exports=a.p+"static/media/desktop-image-signup.d98244f3657e4c4020ab.png"},5275:function(e,t,a){e.exports=a.p+"static/media/desktop-image-signup@2x.cc79892da871809148ff.png"},9942:function(e,t,a){e.exports=a.p+"static/media/desktop-image.7ba410a8f55aadd7f4f4.png"},2887:function(e,t,a){e.exports=a.p+"static/media/desktop-image@2x.e048d01bf79ae1392c52.png"},1497:function(e,t,a){e.exports=a.p+"static/media/tablet-background.c6b4363a4497fb89dc3e.png"},6443:function(e,t,a){e.exports=a.p+"static/media/tablet-image-signup.5b0c07a56ee9065b9a2a.png"},6924:function(e,t,a){e.exports=a.p+"static/media/tablet-image-signup@2x.608fb241ffb736035a00.png"},906:function(e,t,a){e.exports=a.p+"static/media/tablet-image.dbd87431a5a3e92cec65.png"},2942:function(e,t,a){e.exports=a.p+"static/media/tablet-image@2x.459cb90a2560d0bf0fd6.png"},2106:function(e){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAK1SURBVHgB7Zi9btNQFMf/xzFpxjAiocaVisTYSIW1yYqQmi7QiqV9gqZP0PQJKE9AWEgLQ81Ay+jOqKrZkCiSoQNrWFDU2D6ca9W0DY4afyTykJ8U3Y/ce/33PeceH5uQIfMnnW0C1plhSNPSC9j4Wl1zkAIdGfDgpLMuxbYSxlfdNdfDaynrSAEhBdeFDR3EqJ89WrOQkEQ7OJKwK5ryswY7H552DFXe5gKxdnB0YWQz/GNiMl29ZDvVla7qnf/cqUGjZQI3wjWI0O5rpa1wTCKBwcKEbanWhgjqyoVMseexXMwML2acHpTv+L2GVJeYSUouR05n7IgbtCJXRmJhZIH5WCrWdR9TpnNdbsjWLGPoDf23ln22uFqN/AcjC4vepX/jB0wXF7dQuhtlZhoujNRgG+x/IGbr2+MXdjhuZNPFgKGtfF98bg726zfEKWEMZbYdV5+xB+9ICdPd3gLcXu0y3v2QpV8hAwj+8EPSWP1luHAN5AAdumPu3XPCNj15di4m5RbygwNdWzl8ez9wKU0cu4l8YcDzN8OGJr6U2sGzhnAVCTTknKnAtEwFpiWTjDoa3ilqxfb1oJsECdQ/GRnDxFtH+5Xdp6vnNR9sIAHso3v0btbMXKBkPNbH/dl6Nk8oamXug+zzl2BpecQjNdzM/pAQgqyEyS/f7JZ+YicoR6c8sVPMulc/3K/MeZpXjTNvYgKLfyRLET7tzTlx5o0xzNzkoqhvSt75pu97S/LGN/K8iQlUJ/rC77cQkzEcEqoEBchBepxxBOpu8cKb65VQLvjaAYMWkAi2oRc2xmHicn+m8LLU87ZMsxLrxEYxlkfdJSrmmQz+jbgwOYfvZ9uqOs5Doj7FNZN8QCMt+NjUVvVpPpiWqcC05F8gqYCYM8KcUqGxRGuVpyEnqIzcLxR3w/ZfEKIgZ8ATgJ0AAAAASUVORK5CYII="}}]);
//# sourceMappingURL=932.3c338ed4.chunk.js.map