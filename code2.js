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
gdjs.InizioCode.GDVincitoriObjects1= [];
gdjs.InizioCode.GDVincitoriObjects2= [];
gdjs.InizioCode.GDVincitoriObjects3= [];
gdjs.InizioCode.GDVincitoriObjects4= [];
gdjs.InizioCode.GDIstruzioniObjects1= [];
gdjs.InizioCode.GDIstruzioniObjects2= [];
gdjs.InizioCode.GDIstruzioniObjects3= [];
gdjs.InizioCode.GDIstruzioniObjects4= [];
gdjs.InizioCode.GDloadingObjects1= [];
gdjs.InizioCode.GDloadingObjects2= [];
gdjs.InizioCode.GDloadingObjects3= [];
gdjs.InizioCode.GDloadingObjects4= [];
gdjs.InizioCode.GDtop5Objects1= [];
gdjs.InizioCode.GDtop5Objects2= [];
gdjs.InizioCode.GDtop5Objects3= [];
gdjs.InizioCode.GDtop5Objects4= [];
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
gdjs.InizioCode.GDNewSprite2Objects1= [];
gdjs.InizioCode.GDNewSprite2Objects2= [];
gdjs.InizioCode.GDNewSprite2Objects3= [];
gdjs.InizioCode.GDNewSprite2Objects4= [];


gdjs.InizioCode.asyncCallback18368372 = function (runtimeScene, asyncObjectsList) {
}
gdjs.InizioCode.eventsList0 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.3), (runtimeScene) => (gdjs.InizioCode.asyncCallback18368372(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.InizioCode.eventsList1 = function(runtimeScene, asyncObjectsList) {

};gdjs.InizioCode.eventsList2 = function(runtimeScene, asyncObjectsList) {

{



}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableBoolean(runtimeScene.getScene().getVariables().get("risultato").getChild("empty"), true);
if (isConditionTrue_0) {
{runtimeScene.getGame().getVariables().getFromIndex(2).setString(gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(0)));
}{runtimeScene.getGame().getVariables().getFromIndex(1).setNumber(0);
}{runtimeScene.getScene().getVariables().getFromIndex(0).getChild("name").setString(gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(0)));
}{runtimeScene.getScene().getVariables().getFromIndex(0).getChild("score").setNumber(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(1)));
}{gdjs.evtTools.firebaseTools.firestore.writeDocument("players3", gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(0)), runtimeScene.getScene().getVariables().getFromIndex(0), runtimeScene.getScene().getVariables().get("ok"));
}{runtimeScene.getGame().getVariables().getFromIndex(3).setString(gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(0)));
}{gdjs.evtTools.storage.writeStringInJSONFile("Memoria", "nome", gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(0)));
}{gdjs.evtTools.storage.writeNumberInJSONFile("Memoria", "record", 0);
}}

}


{



}


{


const keyIteratorReference3 = runtimeScene.getScene().getVariables().get("i");
const valueIteratorReference3 = runtimeScene.getScene().getVariables().get("doc");
const iterableReference3 = runtimeScene.getScene().getVariables().get("risultato").getChild("docs");
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

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableBoolean(runtimeScene.getScene().getVariables().get("risultato").getChild("empty"), false);
if (isConditionTrue_0)
{
{runtimeScene.getGame().getVariables().getFromIndex(1).setNumber(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("doc").getChild("data").getChild("score")));
}{runtimeScene.getGame().getVariables().getFromIndex(2).setString(gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().get("doc").getChild("data").getChild("name")));
}{runtimeScene.getGame().getVariables().getFromIndex(3).setString(gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().get("doc").getChild("id")));
}}
}
}

}


};gdjs.InizioCode.asyncCallback18373476 = function (runtimeScene, asyncObjectsList) {
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
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.8), (runtimeScene) => (gdjs.InizioCode.asyncCallback18373476(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.InizioCode.eventsList4 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("GIOCA"), gdjs.InizioCode.GDGIOCAObjects1);
gdjs.copyArray(runtimeScene.getObjects("Istruzioni"), gdjs.InizioCode.GDIstruzioniObjects1);
gdjs.copyArray(runtimeScene.getObjects("Vincitori"), gdjs.InizioCode.GDVincitoriObjects1);
gdjs.copyArray(runtimeScene.getObjects("bentornato"), gdjs.InizioCode.GDbentornatoObjects1);
gdjs.copyArray(runtimeScene.getObjects("cambianome"), gdjs.InizioCode.GDcambianomeObjects1);
gdjs.copyArray(runtimeScene.getObjects("loading"), gdjs.InizioCode.GDloadingObjects1);
gdjs.copyArray(runtimeScene.getObjects("logo"), gdjs.InizioCode.GDlogoObjects1);
gdjs.copyArray(runtimeScene.getObjects("ticket"), gdjs.InizioCode.GDticketObjects1);
gdjs.copyArray(runtimeScene.getObjects("top5"), gdjs.InizioCode.GDtop5Objects1);
gdjs.copyArray(runtimeScene.getObjects("usrn"), gdjs.InizioCode.GDusrnObjects1);
{firebase.analytics();
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
}{for(var i = 0, len = gdjs.InizioCode.GDVincitoriObjects1.length ;i < len;++i) {
    gdjs.InizioCode.GDVincitoriObjects1[i].setCenterXInScene(gdjs.evtTools.window.getGameResolutionWidth(runtimeScene) / 2);
}
}{for(var i = 0, len = gdjs.InizioCode.GDloadingObjects1.length ;i < len;++i) {
    gdjs.InizioCode.GDloadingObjects1[i].setCenterXInScene(gdjs.evtTools.window.getGameResolutionWidth(runtimeScene) / 2);
}
}{for(var i = 0, len = gdjs.InizioCode.GDticketObjects1.length ;i < len;++i) {
    gdjs.InizioCode.GDticketObjects1[i].setCenterXInScene(gdjs.evtTools.window.getGameResolutionWidth(runtimeScene) / 2);
}
}{for(var i = 0, len = gdjs.InizioCode.GDtop5Objects1.length ;i < len;++i) {
    gdjs.InizioCode.GDtop5Objects1[i].setCenterXInScene(gdjs.evtTools.window.getGameResolutionWidth(runtimeScene) / 2);
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
}{gdjs.evtTools.storage.readStringFromJSONFile("Memoria", "nome", runtimeScene, runtimeScene.getScene().getVariables().getFromIndex(1));
}{gdjs.evtTools.storage.readNumberFromJSONFile("Memoria", "record", runtimeScene, runtimeScene.getScene().getVariables().getFromIndex(2));
}{gdjs.evtTools.storage.unloadJSONFile("Memoria");
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (gdjs.evtTools.window.getWindowInnerHeight() > gdjs.evtTools.window.getWindowInnerWidth());
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(18151084);
}
}
if (isConditionTrue_0) {
{gdjs.evtsExt__Iframe__Create.func(runtimeScene, "classifica", "/MostWanted/endgame.html", 390, 300, 0, 360, false, false, "", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (gdjs.evtTools.window.getWindowInnerHeight() < gdjs.evtTools.window.getWindowInnerWidth());
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(20065132);
}
}
if (isConditionTrue_0) {
{gdjs.evtsExt__Iframe__Delete.func(runtimeScene, "classifica", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(2)) == 0;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(18360684);
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.storage.deleteElementFromJSONFile("Memoria", "nome");
}{gdjs.evtTools.storage.deleteElementFromJSONFile("Memoria", "record");
}{gdjs.evtTools.storage.clearJSONFile("Memoria");
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.storage.elementExistsInJSONFile("Memoria", "nome");
}
if (isConditionTrue_0) {
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
    gdjs.InizioCode.GDbentornatoObjects1[i].setBBText("[outline=white]" + "[align=center]" + "[b]" + "Ciao " + "[color=red]" + gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().getFromIndex(1)) + "[/color]" + "." + "[/align]" + "[align=center]" + gdjs.evtTools.string.newLine() + "[b]" + "Il tuo record è " + "[color=red]" + gdjs.evtTools.common.toString(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(2))) + "[/color]" + "." + "[/b]" + "[/align]" + "[/outline]");
}
}{for(var i = 0, len = gdjs.InizioCode.GDbentornatoObjects1.length ;i < len;++i) {
    gdjs.InizioCode.GDbentornatoObjects1[i].setCenterXInScene(gdjs.evtTools.window.getGameResolutionWidth(runtimeScene) / 2);
}
}{for(var i = 0, len = gdjs.InizioCode.GDusrnObjects1.length ;i < len;++i) {
    gdjs.InizioCode.GDusrnObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.InizioCode.GDusrnObjects1.length ;i < len;++i) {
    gdjs.InizioCode.GDusrnObjects1[i].setString(gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().getFromIndex(1)));
}
}{for(var i = 0, len = gdjs.InizioCode.GDIstruzioniObjects1.length ;i < len;++i) {
    gdjs.InizioCode.GDIstruzioniObjects1[i].deleteFromScene(runtimeScene);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("cambianome"), gdjs.InizioCode.GDcambianomeObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.InizioCode.GDcambianomeObjects1.length;i<l;++i) {
    if ( gdjs.InizioCode.GDcambianomeObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.InizioCode.GDcambianomeObjects1[k] = gdjs.InizioCode.GDcambianomeObjects1[i];
        ++k;
    }
}
gdjs.InizioCode.GDcambianomeObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.storage.deleteElementFromJSONFile("Memoria", "nome");
}{gdjs.evtTools.storage.deleteElementFromJSONFile("Memoria", "record");
}{gdjs.evtTools.storage.clearJSONFile("Memoria");
}{gdjs.evtsExt__URLTools__Reload.func(runtimeScene, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("ticket"), gdjs.InizioCode.GDticketObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.InizioCode.GDticketObjects1.length;i<l;++i) {
    if ( gdjs.InizioCode.GDticketObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.InizioCode.GDticketObjects1[k] = gdjs.InizioCode.GDticketObjects1[i];
        ++k;
    }
}
gdjs.InizioCode.GDticketObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.firebaseTools.analytics.log("click su ticket", "");
}{gdjs.evtsExt__URLTools__Redirect.func(runtimeScene, "https://www.eventbrite.com/e/biglietti-most-wanted-act03-satellite-showcase-689301237557", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("GIOCA"), gdjs.InizioCode.GDGIOCAObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.InizioCode.GDGIOCAObjects1.length;i<l;++i) {
    if ( gdjs.InizioCode.GDGIOCAObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.InizioCode.GDGIOCAObjects1[k] = gdjs.InizioCode.GDGIOCAObjects1[i];
        ++k;
    }
}
gdjs.InizioCode.GDGIOCAObjects1.length = k;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("usrn"), gdjs.InizioCode.GDusrnObjects1);
{gdjs.evtsExt__Iframe__Delete.func(runtimeScene, "classifica", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}{gdjs.evtTools.firebaseTools.analytics.log("avvio da home", "");
}{runtimeScene.getGame().getVariables().getFromIndex(0).setString((( gdjs.InizioCode.GDusrnObjects1.length === 0 ) ? "" :gdjs.InizioCode.GDusrnObjects1[0].getString()));
}{runtimeScene.getGame().getVariables().getFromIndex(0).setString(gdjs.evtsExt__InputValidation__ToAlphanumerical.func(runtimeScene, gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(0)), (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)));
}
{ //Subevents
gdjs.InizioCode.eventsList0(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("GIOCA"), gdjs.InizioCode.GDGIOCAObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.InizioCode.GDGIOCAObjects1.length;i<l;++i) {
    if ( gdjs.InizioCode.GDGIOCAObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.InizioCode.GDGIOCAObjects1[k] = gdjs.InizioCode.GDGIOCAObjects1[i];
        ++k;
    }
}
gdjs.InizioCode.GDGIOCAObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(0)) == "";
}
if (isConditionTrue_0) {
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

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.InizioCode.GDGIOCAObjects1.length;i<l;++i) {
    if ( gdjs.InizioCode.GDGIOCAObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.InizioCode.GDGIOCAObjects1[k] = gdjs.InizioCode.GDGIOCAObjects1[i];
        ++k;
    }
}
gdjs.InizioCode.GDGIOCAObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(0)) != "";
}
if (isConditionTrue_0) {
/* Reuse gdjs.InizioCode.GDGIOCAObjects1 */
{gdjs.evtTools.firebaseTools.firestore.startQuery("ControlloUtente", "players3");
}{gdjs.evtTools.firebaseTools.firestore.queryWhere("ControlloUtente", "name", "==", gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(0)));
}{gdjs.evtTools.firebaseTools.firestore.watchQuery("ControlloUtente", runtimeScene.getScene().getVariables().get("risultato"), runtimeScene.getScene().getVariables().get("stato"));
}{for(var i = 0, len = gdjs.InizioCode.GDGIOCAObjects1.length ;i < len;++i) {
    gdjs.InizioCode.GDGIOCAObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.InizioCode.GDGIOCAObjects1.length ;i < len;++i) {
    gdjs.InizioCode.GDGIOCAObjects1[i].setY(gdjs.InizioCode.GDGIOCAObjects1[i].getY() - (1500));
}
}
{ //Subevents
gdjs.InizioCode.eventsList3(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("bg1"), gdjs.InizioCode.GDbg1Objects1);
{for(var i = 0, len = gdjs.InizioCode.GDbg1Objects1.length ;i < len;++i) {
    gdjs.InizioCode.GDbg1Objects1[i].setYOffset(gdjs.InizioCode.GDbg1Objects1[i].getYOffset() + (-(200) * gdjs.evtTools.runtimeScene.getElapsedTimeInSeconds(runtimeScene)));
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Vincitori"), gdjs.InizioCode.GDVincitoriObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.InizioCode.GDVincitoriObjects1.length;i<l;++i) {
    if ( gdjs.InizioCode.GDVincitoriObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.InizioCode.GDVincitoriObjects1[k] = gdjs.InizioCode.GDVincitoriObjects1[i];
        ++k;
    }
}
gdjs.InizioCode.GDVincitoriObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "fine", true);
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
gdjs.InizioCode.GDVincitoriObjects1.length = 0;
gdjs.InizioCode.GDVincitoriObjects2.length = 0;
gdjs.InizioCode.GDVincitoriObjects3.length = 0;
gdjs.InizioCode.GDVincitoriObjects4.length = 0;
gdjs.InizioCode.GDIstruzioniObjects1.length = 0;
gdjs.InizioCode.GDIstruzioniObjects2.length = 0;
gdjs.InizioCode.GDIstruzioniObjects3.length = 0;
gdjs.InizioCode.GDIstruzioniObjects4.length = 0;
gdjs.InizioCode.GDloadingObjects1.length = 0;
gdjs.InizioCode.GDloadingObjects2.length = 0;
gdjs.InizioCode.GDloadingObjects3.length = 0;
gdjs.InizioCode.GDloadingObjects4.length = 0;
gdjs.InizioCode.GDtop5Objects1.length = 0;
gdjs.InizioCode.GDtop5Objects2.length = 0;
gdjs.InizioCode.GDtop5Objects3.length = 0;
gdjs.InizioCode.GDtop5Objects4.length = 0;
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
gdjs.InizioCode.GDNewSprite2Objects1.length = 0;
gdjs.InizioCode.GDNewSprite2Objects2.length = 0;
gdjs.InizioCode.GDNewSprite2Objects3.length = 0;
gdjs.InizioCode.GDNewSprite2Objects4.length = 0;

gdjs.InizioCode.eventsList4(runtimeScene);

return;

}

gdjs['InizioCode'] = gdjs.InizioCode;
