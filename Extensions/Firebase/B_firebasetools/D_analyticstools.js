var gdjs;(function(n){let p;(function(a){let o;(function(c){let l;(function(i){let e=null;i.log=(t,s)=>{if(!e)return;let r;if(s)try{r=JSON.parse(s)}catch{r={eventData:s}}e.logEvent(t,r)},i.setUserID=t=>{e&&e.setUserId(t)},i.setProperty=(t,s)=>{if(!e)return;let r={};try{r[t]=JSON.parse(s)}catch{r[t]=s}e.setUserProperties(r)},n.evtTools.firebaseTools.onAppCreated.push(()=>{e=firebase.analytics()}),n.registerRuntimeSceneLoadedCallback(t=>{e&&e.setCurrentScreen(t.getName())})})(l=c.analytics||(c.analytics={}))})(o=a.firebaseTools||(a.firebaseTools={}))})(p=n.evtTools||(n.evtTools={}))})(gdjs||(gdjs={}));
//# sourceMappingURL=D_analyticstools.js.map
