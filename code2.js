gdjs.InizioCode = {};
gdjs.InizioCode.GDlogoObjects1= [];
gdjs.InizioCode.GDlogoObjects2= [];
gdjs.InizioCode.GDistruzioniObjects1= [];
gdjs.InizioCode.GDistruzioniObjects2= [];
gdjs.InizioCode.GDusrnObjects1= [];
gdjs.InizioCode.GDusrnObjects2= [];
gdjs.InizioCode.GDHOMEObjects1= [];
gdjs.InizioCode.GDHOMEObjects2= [];

gdjs.InizioCode.conditionTrue_0 = {val:false};
gdjs.InizioCode.condition0IsTrue_0 = {val:false};
gdjs.InizioCode.condition1IsTrue_0 = {val:false};


gdjs.InizioCode.eventsList0 = function(runtimeScene) {

{


gdjs.InizioCode.condition0IsTrue_0.val = false;
{
gdjs.InizioCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.InizioCode.condition0IsTrue_0.val) {
{gdjs.evtsExt__Iframe__Create.func(runtimeScene, "home", "/endgame.html", gdjs.evtTools.window.getWindowInnerWidth(), gdjs.evtTools.window.getWindowInnerHeight() / 2, 0, gdjs.evtTools.window.getWindowInnerHeight() / 2, true, false, "", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}{firebase.analytics();
}{firebase.performance();
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("HOME"), gdjs.InizioCode.GDHOMEObjects1);

gdjs.InizioCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.InizioCode.GDHOMEObjects1.length;i<l;++i) {
    if ( gdjs.InizioCode.GDHOMEObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        gdjs.InizioCode.condition0IsTrue_0.val = true;
        gdjs.InizioCode.GDHOMEObjects1[k] = gdjs.InizioCode.GDHOMEObjects1[i];
        ++k;
    }
}
gdjs.InizioCode.GDHOMEObjects1.length = k;}if (gdjs.InizioCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("usrn"), gdjs.InizioCode.GDusrnObjects1);
{gdjs.evtsExt__Iframe__Delete.func(runtimeScene, "home", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Gioco", true);
}{runtimeScene.getGame().getVariables().getFromIndex(0).setString((( gdjs.InizioCode.GDusrnObjects1.length === 0 ) ? "" :gdjs.InizioCode.GDusrnObjects1[0].getString()));
}{runtimeScene.getGame().getVariables().getFromIndex(0).setString(gdjs.evtsExt__InputValidation__ToAlphanumerical.func(runtimeScene, gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(0)), (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)));
}{gdjs.evtTools.firebaseTools.analytics.log("avvio da home", "");
}{gdjs.evtTools.firebaseTools.performance.startTracer("durata partita");
}}

}


};

gdjs.InizioCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.InizioCode.GDlogoObjects1.length = 0;
gdjs.InizioCode.GDlogoObjects2.length = 0;
gdjs.InizioCode.GDistruzioniObjects1.length = 0;
gdjs.InizioCode.GDistruzioniObjects2.length = 0;
gdjs.InizioCode.GDusrnObjects1.length = 0;
gdjs.InizioCode.GDusrnObjects2.length = 0;
gdjs.InizioCode.GDHOMEObjects1.length = 0;
gdjs.InizioCode.GDHOMEObjects2.length = 0;

gdjs.InizioCode.eventsList0(runtimeScene);

return;

}

gdjs['InizioCode'] = gdjs.InizioCode;
