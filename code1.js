gdjs.InizioCode = {};
gdjs.InizioCode.GDlogoObjects1= [];
gdjs.InizioCode.GDlogoObjects2= [];
gdjs.InizioCode.GDlogoObjects3= [];
gdjs.InizioCode.GDlogoObjects4= [];
gdjs.InizioCode.GDusrnObjects1= [];
gdjs.InizioCode.GDusrnObjects2= [];
gdjs.InizioCode.GDusrnObjects3= [];
gdjs.InizioCode.GDusrnObjects4= [];
gdjs.InizioCode.GDGIOCAObjects1= [];
gdjs.InizioCode.GDGIOCAObjects2= [];
gdjs.InizioCode.GDGIOCAObjects3= [];
gdjs.InizioCode.GDGIOCAObjects4= [];
gdjs.InizioCode.GDIstruzioniObjects1= [];
gdjs.InizioCode.GDIstruzioniObjects2= [];
gdjs.InizioCode.GDIstruzioniObjects3= [];
gdjs.InizioCode.GDIstruzioniObjects4= [];
gdjs.InizioCode.GDbentornatoObjects1= [];
gdjs.InizioCode.GDbentornatoObjects2= [];
gdjs.InizioCode.GDbentornatoObjects3= [];
gdjs.InizioCode.GDbentornatoObjects4= [];
gdjs.InizioCode.GDcambianomeObjects1= [];
gdjs.InizioCode.GDcambianomeObjects2= [];
gdjs.InizioCode.GDcambianomeObjects3= [];
gdjs.InizioCode.GDcambianomeObjects4= [];
gdjs.InizioCode.GDticketObjects1= [];
gdjs.InizioCode.GDticketObjects2= [];
gdjs.InizioCode.GDticketObjects3= [];
gdjs.InizioCode.GDticketObjects4= [];
gdjs.InizioCode.GDNewSpriteObjects1= [];
gdjs.InizioCode.GDNewSpriteObjects2= [];
gdjs.InizioCode.GDNewSpriteObjects3= [];
gdjs.InizioCode.GDNewSpriteObjects4= [];
gdjs.InizioCode.GDSportsCarOrangeObjects1= [];
gdjs.InizioCode.GDSportsCarOrangeObjects2= [];
gdjs.InizioCode.GDSportsCarOrangeObjects3= [];
gdjs.InizioCode.GDSportsCarOrangeObjects4= [];
gdjs.InizioCode.GDbg1Objects1= [];
gdjs.InizioCode.GDbg1Objects2= [];
gdjs.InizioCode.GDbg1Objects3= [];
gdjs.InizioCode.GDbg1Objects4= [];
gdjs.InizioCode.GDPoliceObjects1= [];
gdjs.InizioCode.GDPoliceObjects2= [];
gdjs.InizioCode.GDPoliceObjects3= [];
gdjs.InizioCode.GDPoliceObjects4= [];

gdjs.InizioCode.conditionTrue_0 = {val:false};
gdjs.InizioCode.condition0IsTrue_0 = {val:false};
gdjs.InizioCode.condition1IsTrue_0 = {val:false};
gdjs.InizioCode.condition2IsTrue_0 = {val:false};
gdjs.InizioCode.conditionTrue_1 = {val:false};
gdjs.InizioCode.condition0IsTrue_1 = {val:false};
gdjs.InizioCode.condition1IsTrue_1 = {val:false};
gdjs.InizioCode.condition2IsTrue_1 = {val:false};


gdjs.InizioCode.asyncCallback13427420 = function (runtimeScene, asyncObjectsList) {
}
gdjs.InizioCode.eventsList0 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.3), (runtimeScene) => (gdjs.InizioCode.asyncCallback13427420(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.InizioCode.eventsList1 = function(runtimeScene, asyncObjectsList) {

};gdjs.InizioCode.eventsList2 = function(runtimeScene, asyncObjectsList) {

{



}


{


gdjs.InizioCode.condition0IsTrue_0.val = false;
{
gdjs.InizioCode.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableBoolean(runtimeScene.getVariables().get("risultato").getChild("empty"), true);
}if (gdjs.InizioCode.condition0IsTrue_0.val) {
{runtimeScene.getGame().getVariables().getFromIndex(2).setString(gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(0)));
}{runtimeScene.getGame().getVariables().getFromIndex(1).setNumber(0);
}{runtimeScene.getVariables().getFromIndex(0).getChild("name").setString(gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(0)));
}{runtimeScene.getVariables().getFromIndex(0).getChild("score").setNumber(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(1)));
}{gdjs.evtTools.firebaseTools.firestore.writeDocument("players", gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(0)), runtimeScene.getVariables().getFromIndex(0), runtimeScene.getVariables().get("ok"));
}{runtimeScene.getGame().getVariables().getFromIndex(3).setString(gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(0)));
}{gdjs.evtTools.storage.writeStringInJSONFile("Memoria", "nome", gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(0)));
}{gdjs.evtTools.storage.writeNumberInJSONFile("Memoria", "record", 0);
}}

}


{



}


{


const keyIteratorReference3 = runtimeScene.getVariables().get("i");
const valueIteratorReference3 = runtimeScene.getVariables().get("doc");
const iterableReference3 = runtimeScene.getVariables().get("risultato").getChild("docs");
if(!iterableReference3.isPrimitive()) {
for(
    const iteratorKey3 in 
    iterableReference3.getType() === "structure"
      ? iterableReference3.getAllChildren()
      : iterableReference3.getType() === "array"
        ? iterableReference3.getAllChildrenArray()
        : []
) {
    if(iterableReference3.getType() === "structure")
        keyIteratorReference3.setString(iteratorKey3);
    else if(iterableReference3.getType() === "array")
        keyIteratorReference3.setNumber(iteratorKey3);
    const structureChildVariable3 = iterableReference3.getChild(iteratorKey3)
    valueIteratorReference3.castTo(structureChildVariable3.getType())
    if(structureChildVariable3.isPrimitive()) {
        valueIteratorReference3.setValue(structureChildVariable3.getValue());
    } else if (structureChildVariable3.getType() === "structure") {
        // Structures are passed by reference like JS objects
        valueIteratorReference3.replaceChildren(structureChildVariable3.getAllChildren());
    } else if (structureChildVariable3.getType() === "array") {
        // Arrays are passed by reference like JS objects
        valueIteratorReference3.replaceChildrenArray(structureChildVariable3.getAllChildrenArray());
    } else console.warn("Cannot identify type: ", type);

gdjs.InizioCode.condition0IsTrue_0.val = false;
{
gdjs.InizioCode.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableBoolean(runtimeScene.getVariables().get("risultato").getChild("empty"), false);
}if (gdjs.InizioCode.condition0IsTrue_0.val)
{
{runtimeScene.getGame().getVariables().getFromIndex(1).setNumber(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getVariables().get("doc").getChild("data").getChild("score")));
}{runtimeScene.getGame().getVariables().getFromIndex(2).setString(gdjs.evtTools.variable.getVariableString(runtimeScene.getVariables().get("doc").getChild("data").getChild("name")));
}{runtimeScene.getGame().getVariables().getFromIndex(3).setString(gdjs.evtTools.variable.getVariableString(runtimeScene.getVariables().get("doc").getChild("id")));
}}
}
}

}


};gdjs.InizioCode.asyncCallback13432364 = function (runtimeScene, asyncObjectsList) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Gioco", true);
}
{ //Subevents
gdjs.InizioCode.eventsList2(runtimeScene, asyncObjectsList);} //End of subevents
}
gdjs.InizioCode.eventsList3 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.6), (runtimeScene) => (gdjs.InizioCode.asyncCallback13432364(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.InizioCode.eventsList4 = function(runtimeScene) {

{


gdjs.InizioCode.condition0IsTrue_0.val = false;
{
gdjs.InizioCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.InizioCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("GIOCA"), gdjs.InizioCode.GDGIOCAObjects1);
gdjs.copyArray(runtimeScene.getObjects("Istruzioni"), gdjs.InizioCode.GDIstruzioniObjects1);
gdjs.copyArray(runtimeScene.getObjects("bentornato"), gdjs.InizioCode.GDbentornatoObjects1);
gdjs.copyArray(runtimeScene.getObjects("cambianome"), gdjs.InizioCode.GDcambianomeObjects1);
gdjs.copyArray(runtimeScene.getObjects("logo"), gdjs.InizioCode.GDlogoObjects1);
gdjs.copyArray(runtimeScene.getObjects("ticket"), gdjs.InizioCode.GDticketObjects1);
gdjs.copyArray(runtimeScene.getObjects("usrn"), gdjs.InizioCode.GDusrnObjects1);
{gdjs.evtsExt__Iframe__Create.func(runtimeScene, "home", "/MostWanted/endgame.html", gdjs.evtTools.window.getWindowInnerWidth(), (gdjs.evtTools.window.getWindowInnerHeight() / 2) - 60, 0, (gdjs.evtTools.window.getWindowInnerHeight() / 2) - 20, true, false, "", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}{firebase.analytics();
}{firebase.performance();
}{for(var i = 0, len = gdjs.InizioCode.GDusrnObjects1.length ;i < len;++i) {
    gdjs.InizioCode.GDusrnObjects1[i].setCenterXInScene(gdjs.evtTools.window.getGameResolutionWidth(runtimeScene) / 2);
}
}{for(var i = 0, len = gdjs.InizioCode.GDIstruzioniObjects1.length ;i < len;++i) {
    gdjs.InizioCode.GDIstruzioniObjects1[i].setCenterXInScene(gdjs.evtTools.window.getGameResolutionWidth(runtimeScene) / 2);
}
}{for(var i = 0, len = gdjs.InizioCode.GDcambianomeObjects1.length ;i < len;++i) {
    gdjs.InizioCode.GDcambianomeObjects1[i].setCenterXInScene(gdjs.evtTools.window.getGameResolutionWidth(runtimeScene) / 2);
}
}{for(var i = 0, len = gdjs.InizioCode.GDlogoObjects1.length ;i < len;++i) {
    gdjs.InizioCode.GDlogoObjects1[i].setCenterXInScene(gdjs.evtTools.window.getGameResolutionWidth(runtimeScene) / 2);
}
}{for(var i = 0, len = gdjs.InizioCode.GDGIOCAObjects1.length ;i < len;++i) {
    gdjs.InizioCode.GDGIOCAObjects1[i].setCenterXInScene(gdjs.evtTools.window.getGameResolutionWidth(runtimeScene) / 2);
}
}{for(var i = 0, len = gdjs.InizioCode.GDticketObjects1.length ;i < len;++i) {
    gdjs.InizioCode.GDticketObjects1[i].setCenterXInScene(gdjs.evtTools.window.getGameResolutionWidth(runtimeScene) / 2);
}
}{for(var i = 0, len = gdjs.InizioCode.GDusrnObjects1.length ;i < len;++i) {
    gdjs.InizioCode.GDusrnObjects1[i].setInputType("email");
}
}{for(var i = 0, len = gdjs.InizioCode.GDbentornatoObjects1.length ;i < len;++i) {
    gdjs.InizioCode.GDbentornatoObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.InizioCode.GDcambianomeObjects1.length ;i < len;++i) {
    gdjs.InizioCode.GDcambianomeObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.InizioCode.GDcambianomeObjects1.length ;i < len;++i) {
    gdjs.InizioCode.GDcambianomeObjects1[i].setX(gdjs.InizioCode.GDcambianomeObjects1[i].getX() + (1000));
}
}{gdjs.evtTools.sound.preloadMusic(runtimeScene, "assets\\mOSTWANTED.mp3");
}{gdjs.evtTools.sound.preloadSound(runtimeScene, "car_crash_effect.mp3");
}{gdjs.evtTools.storage.loadJSONFileFromStorage("Memoria");
}{gdjs.evtTools.storage.readStringFromJSONFile("Memoria", "nome", runtimeScene, runtimeScene.getVariables().getFromIndex(1));
}{gdjs.evtTools.storage.readNumberFromJSONFile("Memoria", "record", runtimeScene, runtimeScene.getVariables().getFromIndex(2));
}{gdjs.evtTools.storage.unloadJSONFile("Memoria");
}}

}


{


gdjs.InizioCode.condition0IsTrue_0.val = false;
gdjs.InizioCode.condition1IsTrue_0.val = false;
{
gdjs.InizioCode.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getVariables().getFromIndex(2)) == 0;
}if ( gdjs.InizioCode.condition0IsTrue_0.val ) {
{
{gdjs.InizioCode.conditionTrue_1 = gdjs.InizioCode.condition1IsTrue_0;
gdjs.InizioCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(12471876);
}
}}
if (gdjs.InizioCode.condition1IsTrue_0.val) {
{gdjs.evtTools.storage.deleteElementFromJSONFile("Memoria", "nome");
}{gdjs.evtTools.storage.deleteElementFromJSONFile("Memoria", "record");
}{gdjs.evtTools.storage.clearJSONFile("Memoria");
}}

}


{


gdjs.InizioCode.condition0IsTrue_0.val = false;
gdjs.InizioCode.condition1IsTrue_0.val = false;
{
gdjs.InizioCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if ( gdjs.InizioCode.condition0IsTrue_0.val ) {
{
gdjs.InizioCode.condition1IsTrue_0.val = gdjs.evtTools.storage.elementExistsInJSONFile("Memoria", "nome");
}}
if (gdjs.InizioCode.condition1IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Istruzioni"), gdjs.InizioCode.GDIstruzioniObjects1);
gdjs.copyArray(runtimeScene.getObjects("bentornato"), gdjs.InizioCode.GDbentornatoObjects1);
gdjs.copyArray(runtimeScene.getObjects("cambianome"), gdjs.InizioCode.GDcambianomeObjects1);
gdjs.copyArray(runtimeScene.getObjects("usrn"), gdjs.InizioCode.GDusrnObjects1);
{for(var i = 0, len = gdjs.InizioCode.GDcambianomeObjects1.length ;i < len;++i) {
    gdjs.InizioCode.GDcambianomeObjects1[i].setX(gdjs.InizioCode.GDcambianomeObjects1[i].getX() - (1000));
}
}{for(var i = 0, len = gdjs.InizioCode.GDcambianomeObjects1.length ;i < len;++i) {
    gdjs.InizioCode.GDcambianomeObjects1[i].hide(false);
}
}{for(var i = 0, len = gdjs.InizioCode.GDbentornatoObjects1.length ;i < len;++i) {
    gdjs.InizioCode.GDbentornatoObjects1[i].hide(false);
}
}{for(var i = 0, len = gdjs.InizioCode.GDbentornatoObjects1.length ;i < len;++i) {
    gdjs.InizioCode.GDbentornatoObjects1[i].setBBText("[outline=white]" + "[align=center]" + "[b]" + "Ciao " + "[color=red]" + gdjs.evtTools.variable.getVariableString(runtimeScene.getVariables().getFromIndex(1)) + "[/color]" + "." + "[/align]" + "[align=center]" + gdjs.evtTools.string.newLine() + "[b]" + "Il tuo record è " + "[color=red]" + gdjs.evtTools.common.toString(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getVariables().getFromIndex(2))) + "[/color]" + "." + "[/b]" + "[/align]" + "[/outline]");
}
}{for(var i = 0, len = gdjs.InizioCode.GDbentornatoObjects1.length ;i < len;++i) {
    gdjs.InizioCode.GDbentornatoObjects1[i].setCenterXInScene(gdjs.evtTools.window.getGameResolutionWidth(runtimeScene) / 2);
}
}{for(var i = 0, len = gdjs.InizioCode.GDusrnObjects1.length ;i < len;++i) {
    gdjs.InizioCode.GDusrnObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.InizioCode.GDusrnObjects1.length ;i < len;++i) {
    gdjs.InizioCode.GDusrnObjects1[i].setString(gdjs.evtTools.variable.getVariableString(runtimeScene.getVariables().getFromIndex(1)));
}
}{for(var i = 0, len = gdjs.InizioCode.GDIstruzioniObjects1.length ;i < len;++i) {
    gdjs.InizioCode.GDIstruzioniObjects1[i].deleteFromScene(runtimeScene);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("cambianome"), gdjs.InizioCode.GDcambianomeObjects1);

gdjs.InizioCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.InizioCode.GDcambianomeObjects1.length;i<l;++i) {
    if ( gdjs.InizioCode.GDcambianomeObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        gdjs.InizioCode.condition0IsTrue_0.val = true;
        gdjs.InizioCode.GDcambianomeObjects1[k] = gdjs.InizioCode.GDcambianomeObjects1[i];
        ++k;
    }
}
gdjs.InizioCode.GDcambianomeObjects1.length = k;}if (gdjs.InizioCode.condition0IsTrue_0.val) {
{gdjs.evtTools.storage.deleteElementFromJSONFile("Memoria", "nome");
}{gdjs.evtTools.storage.deleteElementFromJSONFile("Memoria", "record");
}{gdjs.evtTools.storage.clearJSONFile("Memoria");
}{gdjs.evtsExt__URLTools__Reload.func(runtimeScene, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("ticket"), gdjs.InizioCode.GDticketObjects1);

gdjs.InizioCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.InizioCode.GDticketObjects1.length;i<l;++i) {
    if ( gdjs.InizioCode.GDticketObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        gdjs.InizioCode.condition0IsTrue_0.val = true;
        gdjs.InizioCode.GDticketObjects1[k] = gdjs.InizioCode.GDticketObjects1[i];
        ++k;
    }
}
gdjs.InizioCode.GDticketObjects1.length = k;}if (gdjs.InizioCode.condition0IsTrue_0.val) {
{gdjs.evtTools.firebaseTools.analytics.log("click su ticket", "");
}{gdjs.evtsExt__URLTools__Redirect.func(runtimeScene, "https://www.eventbrite.com/e/biglietti-satellite-most-wanted-satellite-showcase-491786435467?fbclid=PAAaa_xJmvAHKy8YtXbeRWQdIzgV_eL7m_a8boHbUebJhfCZYL2udBVzck9Ec", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("GIOCA"), gdjs.InizioCode.GDGIOCAObjects1);

gdjs.InizioCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.InizioCode.GDGIOCAObjects1.length;i<l;++i) {
    if ( gdjs.InizioCode.GDGIOCAObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        gdjs.InizioCode.condition0IsTrue_0.val = true;
        gdjs.InizioCode.GDGIOCAObjects1[k] = gdjs.InizioCode.GDGIOCAObjects1[i];
        ++k;
    }
}
gdjs.InizioCode.GDGIOCAObjects1.length = k;}if (gdjs.InizioCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("usrn"), gdjs.InizioCode.GDusrnObjects1);
{gdjs.evtTools.firebaseTools.analytics.log("avvio da home", "");
}{gdjs.evtsExt__Iframe__Delete.func(runtimeScene, "home", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}{runtimeScene.getGame().getVariables().getFromIndex(0).setString((( gdjs.InizioCode.GDusrnObjects1.length === 0 ) ? "" :gdjs.InizioCode.GDusrnObjects1[0].getString()));
}{runtimeScene.getGame().getVariables().getFromIndex(0).setString(gdjs.evtsExt__InputValidation__ToAlphanumerical.func(runtimeScene, gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(0)), (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)));
}
{ //Subevents
gdjs.InizioCode.eventsList0(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("GIOCA"), gdjs.InizioCode.GDGIOCAObjects1);

gdjs.InizioCode.condition0IsTrue_0.val = false;
gdjs.InizioCode.condition1IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.InizioCode.GDGIOCAObjects1.length;i<l;++i) {
    if ( gdjs.InizioCode.GDGIOCAObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        gdjs.InizioCode.condition0IsTrue_0.val = true;
        gdjs.InizioCode.GDGIOCAObjects1[k] = gdjs.InizioCode.GDGIOCAObjects1[i];
        ++k;
    }
}
gdjs.InizioCode.GDGIOCAObjects1.length = k;}if ( gdjs.InizioCode.condition0IsTrue_0.val ) {
{
gdjs.InizioCode.condition1IsTrue_0.val = gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(0)) == "";
}}
if (gdjs.InizioCode.condition1IsTrue_0.val) {
{gdjs.evtTools.storage.deleteElementFromJSONFile("Memoria", "nome");
}{gdjs.evtTools.storage.deleteElementFromJSONFile("Memoria", "record");
}{gdjs.evtTools.storage.clearJSONFile("Memoria");
}{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Gioco", true);
}}

}


{



}


{

gdjs.copyArray(runtimeScene.getObjects("GIOCA"), gdjs.InizioCode.GDGIOCAObjects1);

gdjs.InizioCode.condition0IsTrue_0.val = false;
gdjs.InizioCode.condition1IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.InizioCode.GDGIOCAObjects1.length;i<l;++i) {
    if ( gdjs.InizioCode.GDGIOCAObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        gdjs.InizioCode.condition0IsTrue_0.val = true;
        gdjs.InizioCode.GDGIOCAObjects1[k] = gdjs.InizioCode.GDGIOCAObjects1[i];
        ++k;
    }
}
gdjs.InizioCode.GDGIOCAObjects1.length = k;}if ( gdjs.InizioCode.condition0IsTrue_0.val ) {
{
gdjs.InizioCode.condition1IsTrue_0.val = gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(0)) != "";
}}
if (gdjs.InizioCode.condition1IsTrue_0.val) {
{gdjs.evtTools.firebaseTools.firestore.startQuery("ControlloUtente", "players");
}{gdjs.evtTools.firebaseTools.firestore.queryWhere("ControlloUtente", "name", "==", gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(0)));
}{gdjs.evtTools.firebaseTools.firestore.watchQuery("ControlloUtente", runtimeScene.getVariables().get("risultato"), runtimeScene.getVariables().get("stato"));
}
{ //Subevents
gdjs.InizioCode.eventsList3(runtimeScene);} //End of subevents
}

}


{


{
gdjs.copyArray(runtimeScene.getObjects("bg1"), gdjs.InizioCode.GDbg1Objects1);
{for(var i = 0, len = gdjs.InizioCode.GDbg1Objects1.length ;i < len;++i) {
    gdjs.InizioCode.GDbg1Objects1[i].setYOffset(gdjs.InizioCode.GDbg1Objects1[i].getYOffset() + (-(200) * gdjs.evtTools.runtimeScene.getElapsedTimeInSeconds(runtimeScene)));
}
}}

}


};

gdjs.InizioCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.InizioCode.GDlogoObjects1.length = 0;
gdjs.InizioCode.GDlogoObjects2.length = 0;
gdjs.InizioCode.GDlogoObjects3.length = 0;
gdjs.InizioCode.GDlogoObjects4.length = 0;
gdjs.InizioCode.GDusrnObjects1.length = 0;
gdjs.InizioCode.GDusrnObjects2.length = 0;
gdjs.InizioCode.GDusrnObjects3.length = 0;
gdjs.InizioCode.GDusrnObjects4.length = 0;
gdjs.InizioCode.GDGIOCAObjects1.length = 0;
gdjs.InizioCode.GDGIOCAObjects2.length = 0;
gdjs.InizioCode.GDGIOCAObjects3.length = 0;
gdjs.InizioCode.GDGIOCAObjects4.length = 0;
gdjs.InizioCode.GDIstruzioniObjects1.length = 0;
gdjs.InizioCode.GDIstruzioniObjects2.length = 0;
gdjs.InizioCode.GDIstruzioniObjects3.length = 0;
gdjs.InizioCode.GDIstruzioniObjects4.length = 0;
gdjs.InizioCode.GDbentornatoObjects1.length = 0;
gdjs.InizioCode.GDbentornatoObjects2.length = 0;
gdjs.InizioCode.GDbentornatoObjects3.length = 0;
gdjs.InizioCode.GDbentornatoObjects4.length = 0;
gdjs.InizioCode.GDcambianomeObjects1.length = 0;
gdjs.InizioCode.GDcambianomeObjects2.length = 0;
gdjs.InizioCode.GDcambianomeObjects3.length = 0;
gdjs.InizioCode.GDcambianomeObjects4.length = 0;
gdjs.InizioCode.GDticketObjects1.length = 0;
gdjs.InizioCode.GDticketObjects2.length = 0;
gdjs.InizioCode.GDticketObjects3.length = 0;
gdjs.InizioCode.GDticketObjects4.length = 0;
gdjs.InizioCode.GDNewSpriteObjects1.length = 0;
gdjs.InizioCode.GDNewSpriteObjects2.length = 0;
gdjs.InizioCode.GDNewSpriteObjects3.length = 0;
gdjs.InizioCode.GDNewSpriteObjects4.length = 0;
gdjs.InizioCode.GDSportsCarOrangeObjects1.length = 0;
gdjs.InizioCode.GDSportsCarOrangeObjects2.length = 0;
gdjs.InizioCode.GDSportsCarOrangeObjects3.length = 0;
gdjs.InizioCode.GDSportsCarOrangeObjects4.length = 0;
gdjs.InizioCode.GDbg1Objects1.length = 0;
gdjs.InizioCode.GDbg1Objects2.length = 0;
gdjs.InizioCode.GDbg1Objects3.length = 0;
gdjs.InizioCode.GDbg1Objects4.length = 0;
gdjs.InizioCode.GDPoliceObjects1.length = 0;
gdjs.InizioCode.GDPoliceObjects2.length = 0;
gdjs.InizioCode.GDPoliceObjects3.length = 0;
gdjs.InizioCode.GDPoliceObjects4.length = 0;

gdjs.InizioCode.eventsList4(runtimeScene);

return;

}

gdjs['InizioCode'] = gdjs.InizioCode;
