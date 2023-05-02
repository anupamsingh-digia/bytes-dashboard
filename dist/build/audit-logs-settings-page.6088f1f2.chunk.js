"use strict";(self.webpackChunkbytes=self.webpackChunkbytes||[]).push([[2812],{94699:(G,T,t)=>{t.d(T,{Z:()=>c});var e=t(67294),d=t(45697),v=t.n(d),a=t(86896),M=t(41580),L=t(29728),P=t(89597),g=t(81849);const n=({displayedFilters:f})=>{const[i,B]=(0,e.useState)(!1),{formatMessage:_}=(0,a.Z)(),H=(0,e.useRef)(),U=()=>{B(W=>!W)};return e.createElement(e.Fragment,null,e.createElement(M.x,{paddingTop:1,paddingBottom:1},e.createElement(L.z,{variant:"tertiary",ref:H,startIcon:e.createElement(P.Z,null),onClick:U,size:"S"},_({id:"app.utils.filters",defaultMessage:"Filters"})),i&&e.createElement(g.J5,{displayedFilters:f,isVisible:i,onToggle:U,source:H})),e.createElement(g.W$,{filtersSchema:f}))};n.propTypes={displayedFilters:v().arrayOf(v().shape({name:v().string.isRequired,metadatas:v().shape({label:v().string}),fieldSchema:v().shape({type:v().string})})).isRequired};const c=n},35915:(G,T,t)=>{t.r(T),t.d(T,{default:()=>$});var e=t(67294),d=t(81849),v=t(87751),a=t(86896),M=t(17034),L=t(49066),P=t(41580),g=t(185),n=t(53979),c=t(36989),f=t(45697),i=t.n(f),B=t(15234),_=t(79031),H=t(37909),U=t(75515),W=t(11047),pe=t(12028),ge=t(8934),ee=t(23855);const le=()=>{const{formatDate:o}=(0,a.Z)();return h=>{const u=(0,ee.Z)(h),E=o(u,{dateStyle:"long"}),s=o(u,{timeStyle:"medium",hourCycle:"h24"});return`${E}, ${s}`}},ie={"entry.create":"Create entry{model, select, undefined {} other { ({model})}}","entry.update":"Update entry{model, select, undefined {} other { ({model})}}","entry.delete":"Delete entry{model, select, undefined {} other { ({model})}}","entry.publish":"Publish entry{model, select, undefined {} other { ({model})}}","entry.unpublish":"Unpublish entry{model, select, undefined {} other { ({model})}}","media.create":"Create media","media.update":"Update media","media.delete":"Delete media","media-folder.create":"Create media folder","media-folder.update":"Update media folder","media-folder.delete":"Delete media folder","user.create":"Create user","user.update":"Update user","user.delete":"Delete user","admin.auth.success":"Admin login","admin.logout":"Admin logout","content-type.create":"Create content type","content-type.update":"Update content type","content-type.delete":"Delete content type","component.create":"Create component","component.update":"Update component","component.delete":"Delete component","role.create":"Create role","role.update":"Update role","role.delete":"Delete role","permission.create":"Create permission","permission.update":"Update permission","permission.delete":"Delete permission"},k=o=>ie[o]||o,w=({headers:o,rows:r,onOpenModal:h})=>{const{formatMessage:u}=(0,a.Z)(),E=le(),s=({type:m,value:D,model:b})=>m==="date"?E(D):m==="action"?u({id:`Settings.permissions.auditLogs.${D}`,defaultMessage:k(D)},{model:b}):D||"-";return e.createElement(B.p,null,r.map(m=>e.createElement(_.Tr,{key:m.id,...(0,d.X7)({fn:()=>h(m.id)})},o.map(({key:D,name:b,cellFormatter:y})=>e.createElement(H.Td,{key:D},e.createElement(U.Z,{textColor:"neutral800"},s({type:D,value:y?y(m[b]):m[b],model:m.payload?.model})))),e.createElement(H.Td,{...d.UW},e.createElement(W.k,{justifyContent:"end"},e.createElement(pe.h,{onClick:()=>h(m.id),"aria-label":u({id:"app.component.table.view",defaultMessage:"{target} details"},{target:`${m.action} action`}),noBorder:!0,icon:e.createElement(ge.Z,null)}))))))};w.defaultProps={rows:[]},w.propTypes={headers:i().array.isRequired,rows:i().array,onOpenModal:i().func.isRequired};const fe=w,te=[{name:"action",key:"action",metadatas:{label:{id:"Settings.permissions.auditLogs.action",defaultMessage:"Action"},sortable:!0}},{name:"date",key:"date",metadatas:{label:{id:"Settings.permissions.auditLogs.date",defaultMessage:"Date"},sortable:!0}},{key:"user",name:"user",metadatas:{label:{id:"Settings.permissions.auditLogs.user",defaultMessage:"User"},sortable:!1},cellFormatter:o=>o?o.displayName:""}],l=({pagination:o})=>e.createElement(P.x,{paddingTop:4},e.createElement(W.k,{alignItems:"flex-end",justifyContent:"space-between"},e.createElement(d.v4,null),e.createElement(d.tU,{pagination:o})));l.defaultProps={pagination:{pageCount:0,pageSize:50,total:0}},l.propTypes={pagination:i().shape({page:i().number,pageCount:i().number,pageSize:i().number,total:i().number})};const S=l;var O=t(88767),j=t(42866),x=t(24969),J=t(2407),Ee=t(59946),ae=t(88655),ye=t(11276),Q=t(26614);const de=({actionLabel:o,actionName:r})=>e.createElement(W.k,{direction:"column",alignItems:"baseline",gap:1},e.createElement(U.Z,{textColor:"neutral600",variant:"sigma"},o),e.createElement(U.Z,{textColor:"neutral600"},r));de.propTypes={actionLabel:i().string.isRequired,actionName:i().string.isRequired};const N=de,ne=({status:o,data:r,formattedDate:h})=>{const{formatMessage:u}=(0,a.Z)();if(o==="loading")return e.createElement(W.k,{padding:7,justifyContent:"center",alignItems:"center"},e.createElement(ae.a,null,"Loading content..."));const{action:E,user:s,payload:m}=r;return e.createElement(e.Fragment,null,e.createElement(P.x,{marginBottom:3},e.createElement(U.Z,{variant:"delta",id:"title"},u({id:"Settings.permissions.auditLogs.details",defaultMessage:"Log Details"}))),e.createElement(ye.r,{gap:4,gridCols:2,paddingTop:4,paddingBottom:4,paddingLeft:6,paddingRight:6,marginBottom:4,background:"neutral100",hasRadius:!0},e.createElement(N,{actionLabel:u({id:"Settings.permissions.auditLogs.action",defaultMessage:"Action"}),actionName:u({id:`Settings.permissions.auditLogs.${E}`,defaultMessage:k(E)},{model:m?.model})}),e.createElement(N,{actionLabel:u({id:"Settings.permissions.auditLogs.date",defaultMessage:"Date"}),actionName:h}),e.createElement(N,{actionLabel:u({id:"Settings.permissions.auditLogs.user",defaultMessage:"User"}),actionName:s?.displayName||"-"}),e.createElement(N,{actionLabel:u({id:"Settings.permissions.auditLogs.userId",defaultMessage:"User ID"}),actionName:s?.id.toString()||"-"})),e.createElement(Q.V,{value:JSON.stringify(m,null,2),disabled:!0,label:u({id:"Settings.permissions.auditLogs.payload",defaultMessage:"Payload"})}))};ne.defaultProps={data:{}},ne.propTypes={status:i().oneOf(["idle","loading","error","success"]).isRequired,data:i().shape({action:i().string,date:i().string,payload:i().object,user:i().object}),formattedDate:i().string.isRequired};const ve=ne,se=({handleClose:o,logId:r})=>{const{get:h}=(0,d.kY)(),u=(0,d.lm)(),E=async y=>{const{data:F}=await h(`/admin/audit-logs/${y}`);if(!F)throw new Error("Audit log not found");return F},{data:s,status:m}=(0,O.useQuery)(["audit-log",r],()=>E(r),{onError(){u({type:"warning",message:{id:"notification.error",defaultMessage:"An error occured"}}),o()}}),D=le(),b=s?D(s.date):"";return e.createElement(j.P,{onClose:o,labelledBy:"title"},e.createElement(x.x,null,e.createElement(J.O,{label:b,id:"title"},e.createElement(J.$,null,b))),e.createElement(Ee.f,null,e.createElement(ve,{status:m,data:s,formattedDate:b})))};se.propTypes={handleClose:i().func.isRequired,logId:i().string.isRequired};const ce=se;var he=t(94699),ue=t(38855),Le=t(90608);const oe=({value:o,options:r,onChange:h})=>{const{formatMessage:u}=(0,a.Z)(),E=u({id:"Settings.permissions.auditLogs.filter.aria-label",defaultMessage:"Search and select an option to filter"});return e.createElement(ue.h,{"aria-label":E,value:o,onChange:h},r.map(({label:s,customValue:m})=>e.createElement(Le.O,{key:m,value:m},s)))};oe.defaultProps={value:null},oe.propTypes={value:i().string,options:i().arrayOf(i().shape({label:i().string.isRequired,customValue:i().string.isRequired}).isRequired).isRequired,onChange:i().func.isRequired};const re=oe,I=[{intlLabel:{id:"components.FilterOptions.FILTER_TYPES.$eq",defaultMessage:"is"},value:"$eq"},{intlLabel:{id:"components.FilterOptions.FILTER_TYPES.$ne",defaultMessage:"is not"},value:"$ne"}],Ce=({formatMessage:o,users:r})=>{const h=s=>s.username?s.username:s.firstname&&s.lastname?o({id:"Settings.permissions.auditLogs.user.fullname",defaultMessage:"{firstname} {lastname}"},{firstname:s.firstname,lastname:s.lastname}):s.email,u=Object.keys(ie).map(s=>({label:o({id:`Settings.permissions.auditLogs.${s}`,defaultMessage:k(s)},{model:void 0}),customValue:s})),E=r&&r.results.map(s=>({label:h(s),customValue:s.id.toString()}));return[{name:"action",metadatas:{customOperators:I,label:o({id:"Settings.permissions.auditLogs.action",defaultMessage:"Action"}),options:u,customInput:re},fieldSchema:{type:"enumeration"}},{name:"date",metadatas:{label:o({id:"Settings.permissions.auditLogs.date",defaultMessage:"Date"})},fieldSchema:{type:"datetime"}},{name:"user",metadatas:{customOperators:I,label:o({id:"Settings.permissions.auditLogs.user",defaultMessage:"User"}),options:E,customInput:re},fieldSchema:{type:"relation",mainField:{name:"id"}}}]};var R=t(16550);const Pe=({canRead:o})=>{const{get:r}=(0,d.kY)(),{search:h}=(0,R.TH)(),u=(0,d.lm)(),E=async({queryKey:Y})=>{const De=Y[1],{data:be}=await r(`/admin/audit-logs${De}`);return be},s=async()=>{const{data:Y}=await r("/admin/users");return Y},m={enabled:o,keepPreviousData:!0,retry:!1,staleTime:1e3*20,onError:Y=>u({type:"warning",message:Y.message})},{data:D,isLoading:b,isError:y}=(0,O.useQuery)(["auditLogs",h],E,m),{data:F,isError:Z}=(0,O.useQuery)(["auditLogsUsers"],s,{...m,staleTime:2*(1e3*60)}),me=y||Z;return{auditLogs:D,users:F?.data,isLoading:b,hasError:me}},A=()=>{const{formatMessage:o}=(0,a.Z)(),{allowedActions:{canRead:r}}=(0,d.ss)(v.Z.settings.auditLogs),[{query:h},u]=(0,d.Kx)(),{auditLogs:E,users:s,isLoading:m,hasError:D}=Pe({canRead:r});(0,d.go)();const b=Ce({formatMessage:o,users:s}),y=o({id:"global.auditLogs",defaultMessage:"Audit Logs"}),F=te.map(Z=>({...Z,metadatas:{...Z.metadatas,label:o(Z.metadatas.label)}}));return D?e.createElement(M.A,null,e.createElement(L.D,null,e.createElement(P.x,{paddingTop:8},e.createElement(d.Hn,null)))):e.createElement(g.o,{"aria-busy":m},e.createElement(d.SL,{name:y}),e.createElement(n.T,{title:y,subtitle:o({id:"Settings.permissions.auditLogs.listview.header.subtitle",defaultMessage:"Logs of all the activities that happened in your environment"})}),e.createElement(c.Z,{startActions:e.createElement(he.Z,{displayedFilters:b})}),e.createElement(L.D,{canRead:r},e.createElement(d.tM,{contentType:"Audit logs",headers:F,rows:E?.results||[],withBulkActions:!0,isLoading:m},e.createElement(fe,{headers:F,rows:E?.results||[],onOpenModal:Z=>u({id:Z})})),e.createElement(S,{pagination:E?.pagination})),h?.id&&e.createElement(ce,{handleClose:()=>u({id:null},"remove"),logId:h.id}))},$=()=>e.createElement(d.O4,{permissions:v.Z.settings.auditLogs.main},e.createElement(A,null))},2407:(G,T,t)=>{t.d(T,{$:()=>n,O:()=>c});var e=t(85893),d=t(16405),v=t(71997),a=t(41580),M=t(11047),L=t(75515),P=t(63237);const g=(0,v.ZP)(M.k)`
  svg {
    height: ${10/16}rem;
    width: ${10/16}rem;
    path {
      fill: ${({theme:f})=>f.colors.neutral500};
    }
  }
  :last-of-type ${a.x} {
    display: none;
  }
  :last-of-type ${L.Z} {
    color: ${({theme:f})=>f.colors.neutral800};
    font-weight: ${({theme:f})=>f.fontWeights.bold};
  }
`,n=({children:f})=>(0,e.jsxs)(g,{inline:!0,as:"li",children:[(0,e.jsx)(L.Z,{variant:"pi",textColor:"neutral600",children:f}),(0,e.jsx)(a.x,{"aria-hidden":!0,paddingLeft:3,paddingRight:3,children:(0,e.jsx)(d.Z,{})})]});n.displayName="Crumb";const c=({children:f,label:i,...B})=>(0,e.jsxs)(M.k,{...B,children:[(0,e.jsx)(P.T,{children:i}),(0,e.jsx)("ol",{"aria-hidden":!0,children:f})]});c.displayName="Breadcrumbs"},38855:(G,T,t)=>{t.d(T,{h:()=>z,X:()=>te});var e=t(67294),d=t(70968),v=t(12645),a=t(45697),M=t(90608),L=t(74020),P=t(70389),g=t(7801);const n={Close:"Close",CloseSelect:"CloseSelect",First:"First",Last:"Last",Next:"Next",Open:"Open",PageDown:"PageDown",PageUp:"PageUp",Previous:"Previous",Select:"Select",Space:"Space",Type:"Type"},c={Close:"Close",First:"First",Last:"Last",Next:"Next",Open:"Open",Previous:"Previous",Select:"Select",UpLevel:"UpLevel"};function f(l=[],S=null,O=[]){const j=String(S??"").toLowerCase();return j?l.filter(x=>x.props.children.toString().toLowerCase().includes(j)&&O.indexOf(x)<0):l}function i(l,S){if(!S&&l===g.y.DOWN)return n.Open;if(l===g.y.DOWN)return n.Next;if(l===g.y.UP)return n.Previous;if(l===g.y.HOME)return n.First;if(l===g.y.END)return n.Last;if(l===g.y.ESCAPE)return n.Close;if(l===g.y.ENTER)return n.CloseSelect;if(l===g.y.BACKSPACE||l===g.y.CLEAR||l.length===1)return n.Type}function B(l,S,O){switch(O){case n.First:return 0;case n.Last:return S;case n.Previous:return Math.max(0,l-1);case n.Next:return Math.min(S,l+1);default:return l}}function _(l){(0,P.Z)(l,{scrollMode:"if-needed",block:"nearest",inline:"nearest"}).forEach(({el:S,top:O,left:j})=>{S.scrollTop=O,S.scrollLeft=j})}var H=t(41580),U=t(54574),W=t(19270),pe=t(63428),ge=t(96404),ee=t(11047),Re=t(2504),le=t(88655),ie=t(26048),k=t(81318),w=t(75515),fe=t(63237);const z=({children:l,clearLabel:S,creatable:O,createMessage:j,disabled:x,error:J,hasMoreItems:Ee,hint:ae,id:ye,label:Q,labelAction:de,loading:N,loadingMessage:ne,noOptionsMessage:ve,onChange:se,onClear:ce,onCreateOption:he,onInputChange:ue,onLoadMore:Le,placeholder:oe,required:re,value:I,...Se})=>{const Ce=()=>l.find(p=>p.props?.value.toLowerCase()===I.toLowerCase()).props?.children,[R,Me]=(0,e.useState)(0),[Pe,Ae]=(0,e.useState)(null),[A,Oe]=(0,e.useState)(l),[$,o]=(0,e.useState)(!1),[r,h]=(0,e.useState)(""),u=(0,e.useRef)(),E=(0,e.useRef)(!1),s=(0,e.useRef)(),m=(0,e.useRef)(),D=(0,e.useRef)(),b=(0,e.useRef)(!0),y=(0,Re.M)(ye),F=`${y}-label`;if(!Q&&!Se["aria-label"])throw new Error('The Combobox component needs a "label" or an "aria-label" props');(0,e.useEffect)(()=>{Oe(f(l,r))},[r,l]),(0,e.useEffect)(()=>{$&&u.current&&_(u.current)},[R,$]),(0,e.useLayoutEffect)(()=>{b.current&&(b.current=!1)},[I]);const Z=$?`${y}-${R}`:"",me=()=>{se(null),h("")},Y=p=>{ue&&ue(p);const C=s.current.value;Oe(f(l,C)),Me(0),Ae(null),r!==C&&h(C),$||V(!0,!1)},De=p=>{const{key:C}=p,K=O&&r?A.length:A.length-1,q=i(C,$);switch(I&&!r&&C===g.y.BACKSPACE&&me(),q){case n.Next:{if(R===K){X(0);break}X(B(R,K,q));break}case n.Previous:{if(R===0){X(K);break}X(B(R,K,q));break}case n.Last:case n.First:{if(R===K){X(0);break}X(B(R,K,q));break}case n.CloseSelect:p.preventDefault(),Te(R);break;case n.Close:p.preventDefault(),V(!1);break;case n.Open:V(!0);break}},be=p=>{if(p.preventDefault(),I&&!E.current&&h(""),E.current){E.current=!1;return}V(!1,!1)},X=p=>{Me(p)},Be=p=>{X(p),Te(p)},Ie=()=>{E.current=!0},Te=p=>{const C=A[p];if(h(""),C){se(C.props.value),V(!1);return}O&&(he(r),V(!1))},V=(p,C=!0)=>{o(p),C&&s.current.focus()},Ue=e.Children.toArray(A).map((p,C)=>{const K=R===C;return(0,e.cloneElement)(p,{id:`${y}-${C}`,"aria-selected":Pe===C,"aria-posinset":C+1,"aria-setsize":e.Children.toArray(A).length,ref(q){K&&(u.current=q)},onClick:()=>Be(C),onMouseDown:Ie,isSelected:K})}),$e=()=>{s.current.focus(),ce&&ce(),me()},Fe=()=>{s.current.focus(),V(!0)},Ze=()=>{const p=A.findIndex(C=>C.props?.children===r);return r&&p===-1},Ke=p=>{p.preventDefault(),V(p,!0)};let xe;return J?xe=`${y}-error`:ae&&(xe=`${y}-hint`),e.createElement(U.g,{hint:ae,error:J,id:y,required:re},e.createElement(fe.T,{"aria-live":"polite","aria-atomic":"false","aria-relevant":"additions text"},I),e.createElement(ee.k,{direction:"column",alignItems:"stretch",gap:Q||ae||J?1:0},Q&&e.createElement(W.Q,{action:de},Q),e.createElement(L.d8,{ref:m,$disabled:x,hasError:J},e.createElement(L.fv,{wrap:"wrap"},!r&&I&&e.createElement(L.K7,{id:`${y}-selected-value`},e.createElement(w.Z,null,Ce())),e.createElement(L.II,{"aria-activedescendant":Z,"aria-autocomplete":"list","aria-controls":`${y}-listbox`,"aria-disabled":x,"aria-expanded":$,"aria-haspopup":"listbox","aria-describedby":xe,autoComplete:"off",autoCorrect:"off",id:y,onBlur:x?void 0:be,onClick:x?void 0:Ke,onInput:x?void 0:Y,onKeyDown:x?void 0:De,placeholder:I?"":oe,readOnly:x,ref:s,required:re,role:"combobox",spellCheck:"off",type:"text",value:r})),e.createElement(ee.k,null,(I||r)&&e.createElement(k.zb,{id:`${y}-clear`,"aria-label":S,disabled:x,paddingLeft:3,as:"button",onClick:$e,type:"button"},e.createElement(d.Z,null)),e.createElement(k.AV,{disabled:x,paddingLeft:3,"aria-hidden":!0,as:"button",onClick:Fe,tabIndex:-1,type:"button"},e.createElement(v.Z,null)))),e.createElement(pe.J,null),e.createElement(ge.c,null)),$&&e.createElement(ie.J2,{id:`${y}-popover`,source:m,spacing:4,fullWidth:!0,intersectionId:`${y}-listbox-popover-intersection`,onReachEnd:Ee&&!N?Le:void 0},e.createElement("div",{role:"listbox",ref:D,id:`${y}-listbox`,"aria-labelledby":Q?F:void 0},(Boolean(A.length)||O)&&e.createElement(e.Fragment,null,Ue,Ze()&&O&&e.createElement(M.O,{isSelected:R===A.length,ref:p=>{R===A.length&&(u.current=p)},onMouseDown:Ie,onClick:()=>Te(),taindex:0},j(r))),!A.length&&!O&&!N&&e.createElement(H.x,{paddingLeft:4,paddingRight:4,paddingTop:2,paddingBottom:2,ref:u},e.createElement(w.Z,{textColor:"neutral800"},ve(r))),N&&e.createElement(ee.k,{justifyContent:"center",alignItems:"center",paddingTop:2,paddingBottom:2},e.createElement(le.a,{small:!0},ne)))))},te=l=>e.createElement(z,{...l,creatable:!0});z.defaultProps={"aria-label":void 0,clearLabel:"clear",creatable:!1,createMessage:l=>`Create "${l}"`,disabled:!1,error:void 0,hasMoreItems:!1,hint:void 0,id:void 0,label:void 0,loading:!1,loadingMessage:"Loading content...",noOptionsMessage:()=>"No results found",onClear:void 0,onCreateOption:void 0,onInputChange:void 0,onLoadMore:void 0,placeholder:"Select or enter a value",value:void 0},te.defaultProps=z.defaultProps,z.propTypes={"aria-label":a.string,children:a.oneOfType([a.arrayOf(a.node),a.node]),clearLabel:a.string,creatable:a.bool,createMessage:a.func,disabled:a.bool,error:a.string,hasMoreItems:a.bool,id:a.string,hint:a.oneOfType([a.string,a.node,a.arrayOf(a.node)]),label:a.string,labelAction:a.element,loading:a.bool,loadingMessage:a.string,noOptionsMessage:a.func,onChange:a.func.isRequired,onClear:a.func,onCreateOption:a.func,onInputChange:a.func,onLoadMore:a.func,placeholder:a.string,value:a.string},te.propTypes={...z.propTypes,onCreateOption:a.func.isRequired}},90608:(G,T,t)=>{t.d(T,{O:()=>M});var e=t(67294),d=t(45697),v=t(74020),a=t(75515);const M=(0,e.forwardRef)(({isSelected:L,children:P,...g},n)=>e.createElement(v.Zq,{hasRadius:!0,paddingLeft:4,paddingRight:4,paddingTop:2,paddingBottom:2,role:"option",background:"neutral0",isSelected:L,ref:n,...g},e.createElement(a.Z,{textColor:L?"primary600":"neutral800",fontWeight:L?"bold":null},P)));M.defaultProps={isSelected:!1},M.propTypes={children:d.oneOfType([d.string,d.number]).isRequired,isSelected:d.bool},M.displayName="ComboboxOption"},74020:(G,T,t)=>{t.d(T,{II:()=>g,K7:()=>L,Zq:()=>n,d8:()=>M,fv:()=>P});var e=t(71997),d=t(41580),v=t(11047),a=t(15585);const M=(0,e.ZP)(v.k)`
  position: relative;
  border: 1px solid ${({theme:c,hasError:f})=>f?c.colors.danger600:c.colors.neutral200};
  padding-right: ${({theme:c})=>c.spaces[3]};
  padding-left: ${({theme:c})=>c.spaces[3]};
  border-radius: ${({theme:c})=>c.borderRadius};
  background: ${({theme:c})=>c.colors.neutral0};

  ${({theme:c,$disabled:f})=>f?`
    color: ${c.colors.neutral600};
    background: ${c.colors.neutral150};
  `:void 0}

  ${(0,a.k3)()}
`,L=e.ZP.div`
  padding: 1px 2px;
  grid-area: 1 / 1 / 2 / 3;
`,P=(0,e.ZP)(v.k)`
  display: grid;
  flex: 1 1 0%;
  position: relative;
`,g=e.ZP.input`
  display: inline-grid;
  grid-area: 1 / 1 / 2 / 3;
  grid-template-columns: 0px min-content;
  background: transparent;
  min-height: ${40/16}rem;
  border: none;
  flex: 1;
  font-size: ${14/16}rem;
  color: ${({theme:c})=>c.colors.neutral800};
  outline: none;
  &:focus-visible {
    outline: none;
    box-shadow: none;
    outline-offset: 0;
  }
  &[aria-disabled='true'] {
    background: inherit;
    color: inherit;
    cursor: not-allowed;
  }
`,n=(0,e.ZP)(d.x)`
  width: 100%;
  border: none;
  text-align: left;
  outline-offset: -3px;
  ${({isSelected:c,theme:f})=>c&&`background: ${f.colors.primary100};`}

  &:hover {
    background: ${({theme:c})=>c.colors.primary100};
  }
`},36989:(G,T,t)=>{t.d(T,{Z:()=>g});var e=t(67294),d=t(45697),v=t(71997),a=t(41580),M=t(11047);const L=(0,v.ZP)(M.k)`
  & > * + * {
    margin-left: ${({theme:n})=>n.spaces[2]};
  }

  margin-left: ${({pullRight:n})=>n?"auto":void 0};
`,P=(0,v.ZP)(L)`
  flex-shrink: 0;
`,g=({startActions:n,endActions:c})=>n||c?e.createElement(a.x,{paddingLeft:10,paddingRight:10},e.createElement(a.x,{paddingBottom:4},e.createElement(M.k,{justifyContent:"space-between",alignItems:"flex-start"},n&&e.createElement(L,{wrap:"wrap"},n),c&&e.createElement(P,{pullRight:!0},c)))):null;g.defaultProps={endActions:void 0,startActions:void 0},g.propTypes={endActions:d.node,startActions:d.node}}}]);
