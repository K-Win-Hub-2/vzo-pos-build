var x=i=>{throw TypeError(i)};var C=(i,t,s)=>t.has(i)||x("Cannot "+s);var e=(i,t,s)=>(C(i,t,"read from private field"),s?s.call(i):t.get(i)),b=(i,t,s)=>t.has(i)?x("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(i):t.set(i,s),p=(i,t,s,r)=>(C(i,t,"write to private field"),r?r.call(i,s):t.set(i,s),s),m=(i,t,s)=>(C(i,t,"access private method"),s);import{X as q,Y as U,Z as w,$ as k,a0 as R,q as L,r as f}from"./index-HH_UOIZx.js";import{n as j,s as A}from"./axiosInstance-f51KjAOb.js";var a,l,o,h,n,g,M,K,D=(K=class extends q{constructor(t,s){super();b(this,n);b(this,a);b(this,l);b(this,o);b(this,h);p(this,a,t),this.setOptions(s),this.bindMethods(),m(this,n,g).call(this)}bindMethods(){this.mutate=this.mutate.bind(this),this.reset=this.reset.bind(this)}setOptions(t){var r;const s=this.options;this.options=e(this,a).defaultMutationOptions(t),U(this.options,s)||e(this,a).getMutationCache().notify({type:"observerOptionsUpdated",mutation:e(this,o),observer:this}),s!=null&&s.mutationKey&&this.options.mutationKey&&w(s.mutationKey)!==w(this.options.mutationKey)?this.reset():((r=e(this,o))==null?void 0:r.state.status)==="pending"&&e(this,o).setOptions(this.options)}onUnsubscribe(){var t;this.hasListeners()||(t=e(this,o))==null||t.removeObserver(this)}onMutationUpdate(t){m(this,n,g).call(this),m(this,n,M).call(this,t)}getCurrentResult(){return e(this,l)}reset(){var t;(t=e(this,o))==null||t.removeObserver(this),p(this,o,void 0),m(this,n,g).call(this),m(this,n,M).call(this)}mutate(t,s){var r;return p(this,h,s),(r=e(this,o))==null||r.removeObserver(this),p(this,o,e(this,a).getMutationCache().build(e(this,a),this.options)),e(this,o).addObserver(this),e(this,o).execute(t)}},a=new WeakMap,l=new WeakMap,o=new WeakMap,h=new WeakMap,n=new WeakSet,g=function(){var s;const t=((s=e(this,o))==null?void 0:s.state)??k();p(this,l,{...t,isPending:t.status==="pending",isSuccess:t.status==="success",isError:t.status==="error",isIdle:t.status==="idle",mutate:this.mutate,reset:this.reset})},M=function(t){R.batch(()=>{var s,r,u,v,c,y,E,S;if(e(this,h)&&this.hasListeners()){const d=e(this,l).variables,O=e(this,l).context;(t==null?void 0:t.type)==="success"?((r=(s=e(this,h)).onSuccess)==null||r.call(s,t.data,d,O),(v=(u=e(this,h)).onSettled)==null||v.call(u,t.data,null,d,O)):(t==null?void 0:t.type)==="error"&&((y=(c=e(this,h)).onError)==null||y.call(c,t.error,d,O),(S=(E=e(this,h)).onSettled)==null||S.call(E,void 0,t.error,d,O))}this.listeners.forEach(d=>{d(e(this,l))})})},K);function T(i,t){const s=L(),[r]=f.useState(()=>new D(s,i));f.useEffect(()=>{r.setOptions(i)},[r,i]);const u=f.useSyncExternalStore(f.useCallback(c=>r.subscribe(R.batchCalls(c)),[r]),()=>r.getCurrentResult(),()=>r.getCurrentResult()),v=f.useCallback((c,y)=>{r.mutate(c,y).catch(j)},[r]);if(u.error&&A(r.options.throwOnError,[u.error]))throw u.error;return{...u,mutate:v,mutateAsync:u.mutate}}export{T as u};
