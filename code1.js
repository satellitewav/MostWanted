gdjs.IntroCode = {};
gdjs.IntroCode.GDMuscleCarBlueObjects1= [];
gdjs.IntroCode.GDMuscleCarBlueObjects2= [];
gdjs.IntroCode.GDMuscleCarBlueObjects3= [];
gdjs.IntroCode.GDJeepBriteGreenObjects1= [];
gdjs.IntroCode.GDJeepBriteGreenObjects2= [];
gdjs.IntroCode.GDJeepBriteGreenObjects3= [];
gdjs.IntroCode.GDLeftArrowRoundButtonObjects1= [];
gdjs.IntroCode.GDLeftArrowRoundButtonObjects2= [];
gdjs.IntroCode.GDLeftArrowRoundButtonObjects3= [];
gdjs.IntroCode.GDRightArrowRoundButtonObjects1= [];
gdjs.IntroCode.GDRightArrowRoundButtonObjects2= [];
gdjs.IntroCode.GDRightArrowRoundButtonObjects3= [];
gdjs.IntroCode.GDTopArrowButtonObjects1= [];
gdjs.IntroCode.GDTopArrowButtonObjects2= [];
gdjs.IntroCode.GDTopArrowButtonObjects3= [];
gdjs.IntroCode.GDConvertiblePurpleObjects1= [];
gdjs.IntroCode.GDConvertiblePurpleObjects2= [];
gdjs.IntroCode.GDConvertiblePurpleObjects3= [];
gdjs.IntroCode.GDCarRedObjects1= [];
gdjs.IntroCode.GDCarRedObjects2= [];
gdjs.IntroCode.GDCarRedObjects3= [];
gdjs.IntroCode.GDCarBlueObjects1= [];
gdjs.IntroCode.GDCarBlueObjects2= [];
gdjs.IntroCode.GDCarBlueObjects3= [];
gdjs.IntroCode.GDSuvTanObjects1= [];
gdjs.IntroCode.GDSuvTanObjects2= [];
gdjs.IntroCode.GDSuvTanObjects3= [];
gdjs.IntroCode.GDSportsCarOrangeObjects1= [];
gdjs.IntroCode.GDSportsCarOrangeObjects2= [];
gdjs.IntroCode.GDSportsCarOrangeObjects3= [];

gdjs.IntroCode.conditionTrue_0 = {val:false};
gdjs.IntroCode.condition0IsTrue_0 = {val:false};
gdjs.IntroCode.condition1IsTrue_0 = {val:false};


gdjs.IntroCode.mapOfGDgdjs_46IntroCode_46GDLeftArrowRoundButtonObjects2Objects = Hashtable.newFrom({"LeftArrowRoundButton": gdjs.IntroCode.GDLeftArrowRoundButtonObjects2});
gdjs.IntroCode.mapOfGDgdjs_46IntroCode_46GDLeftArrowRoundButtonObjects2Objects = Hashtable.newFrom({"LeftArrowRoundButton": gdjs.IntroCode.GDLeftArrowRoundButtonObjects2});
gdjs.IntroCode.mapOfGDgdjs_46IntroCode_46GDRightArrowRoundButtonObjects2Objects = Hashtable.newFrom({"RightArrowRoundButton": gdjs.IntroCode.GDRightArrowRoundButtonObjects2});
gdjs.IntroCode.mapOfGDgdjs_46IntroCode_46GDRightArrowRoundButtonObjects2Objects = Hashtable.newFrom({"RightArrowRoundButton": gdjs.IntroCode.GDRightArrowRoundButtonObjects2});
gdjs.IntroCode.mapOfGDgdjs_46IntroCode_46GDTopArrowButtonObjects2Objects = Hashtable.newFrom({"TopArrowButton": gdjs.IntroCode.GDTopArrowButtonObjects2});
gdjs.IntroCode.mapOfGDgdjs_46IntroCode_46GDTopArrowButtonObjects2Objects = Hashtable.newFrom({"TopArrowButton": gdjs.IntroCode.GDTopArrowButtonObjects2});
gdjs.IntroCode.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("LeftArrowRoundButton"), gdjs.IntroCode.GDLeftArrowRoundButtonObjects2);

gdjs.IntroCode.condition0IsTrue_0.val = false;
{
gdjs.IntroCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.IntroCode.mapOfGDgdjs_46IntroCode_46GDLeftArrowRoundButtonObjects2Objects, runtimeScene, true, false);
}if (gdjs.IntroCode.condition0IsTrue_0.val) {
/* Reuse gdjs.IntroCode.GDLeftArrowRoundButtonObjects2 */
gdjs.copyArray(runtimeScene.getObjects("SportsCarOrange"), gdjs.IntroCode.GDSportsCarOrangeObjects2);
{for(var i = 0, len = gdjs.IntroCode.GDSportsCarOrangeObjects2.length ;i < len;++i) {
    gdjs.IntroCode.GDSportsCarOrangeObjects2[i].addForce(-(150), 0, 0);
}
}{for(var i = 0, len = gdjs.IntroCode.GDLeftArrowRoundButtonObjects2.length ;i < len;++i) {
    gdjs.IntroCode.GDLeftArrowRoundButtonObjects2[i].setVariableBoolean(gdjs.IntroCode.GDLeftArrowRoundButtonObjects2[i].getVariables().getFromIndex(0), true);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("LeftArrowRoundButton"), gdjs.IntroCode.GDLeftArrowRoundButtonObjects2);

gdjs.IntroCode.condition0IsTrue_0.val = false;
{
gdjs.IntroCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.IntroCode.mapOfGDgdjs_46IntroCode_46GDLeftArrowRoundButtonObjects2Objects, runtimeScene, true, true);
}if (gdjs.IntroCode.condition0IsTrue_0.val) {
/* Reuse gdjs.IntroCode.GDLeftArrowRoundButtonObjects2 */
{for(var i = 0, len = gdjs.IntroCode.GDLeftArrowRoundButtonObjects2.length ;i < len;++i) {
    gdjs.IntroCode.GDLeftArrowRoundButtonObjects2[i].setVariableBoolean(gdjs.IntroCode.GDLeftArrowRoundButtonObjects2[i].getVariables().getFromIndex(0), false);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("LeftArrowRoundButton"), gdjs.IntroCode.GDLeftArrowRoundButtonObjects2);

gdjs.IntroCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.IntroCode.GDLeftArrowRoundButtonObjects2.length;i<l;++i) {
    if ( gdjs.IntroCode.GDLeftArrowRoundButtonObjects2[i].getVariableNumber(gdjs.IntroCode.GDLeftArrowRoundButtonObjects2[i].getVariables().getFromIndex(0)) == 1 ) {
        gdjs.IntroCode.condition0IsTrue_0.val = true;
        gdjs.IntroCode.GDLeftArrowRoundButtonObjects2[k] = gdjs.IntroCode.GDLeftArrowRoundButtonObjects2[i];
        ++k;
    }
}
gdjs.IntroCode.GDLeftArrowRoundButtonObjects2.length = k;}if (gdjs.IntroCode.condition0IsTrue_0.val) {
/* Reuse gdjs.IntroCode.GDLeftArrowRoundButtonObjects2 */
{for(var i = 0, len = gdjs.IntroCode.GDLeftArrowRoundButtonObjects2.length ;i < len;++i) {
    gdjs.IntroCode.GDLeftArrowRoundButtonObjects2[i].setY(810);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("LeftArrowRoundButton"), gdjs.IntroCode.GDLeftArrowRoundButtonObjects2);

gdjs.IntroCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.IntroCode.GDLeftArrowRoundButtonObjects2.length;i<l;++i) {
    if ( gdjs.IntroCode.GDLeftArrowRoundButtonObjects2[i].getVariableNumber(gdjs.IntroCode.GDLeftArrowRoundButtonObjects2[i].getVariables().getFromIndex(0)) == 0 ) {
        gdjs.IntroCode.condition0IsTrue_0.val = true;
        gdjs.IntroCode.GDLeftArrowRoundButtonObjects2[k] = gdjs.IntroCode.GDLeftArrowRoundButtonObjects2[i];
        ++k;
    }
}
gdjs.IntroCode.GDLeftArrowRoundButtonObjects2.length = k;}if (gdjs.IntroCode.condition0IsTrue_0.val) {
/* Reuse gdjs.IntroCode.GDLeftArrowRoundButtonObjects2 */
{for(var i = 0, len = gdjs.IntroCode.GDLeftArrowRoundButtonObjects2.length ;i < len;++i) {
    gdjs.IntroCode.GDLeftArrowRoundButtonObjects2[i].setY(800);
}
}}

}


{



}


{

gdjs.copyArray(runtimeScene.getObjects("RightArrowRoundButton"), gdjs.IntroCode.GDRightArrowRoundButtonObjects2);

gdjs.IntroCode.condition0IsTrue_0.val = false;
{
gdjs.IntroCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.IntroCode.mapOfGDgdjs_46IntroCode_46GDRightArrowRoundButtonObjects2Objects, runtimeScene, true, false);
}if (gdjs.IntroCode.condition0IsTrue_0.val) {
/* Reuse gdjs.IntroCode.GDRightArrowRoundButtonObjects2 */
gdjs.copyArray(runtimeScene.getObjects("SportsCarOrange"), gdjs.IntroCode.GDSportsCarOrangeObjects2);
{for(var i = 0, len = gdjs.IntroCode.GDSportsCarOrangeObjects2.length ;i < len;++i) {
    gdjs.IntroCode.GDSportsCarOrangeObjects2[i].addForce(150, 0, 0);
}
}{for(var i = 0, len = gdjs.IntroCode.GDRightArrowRoundButtonObjects2.length ;i < len;++i) {
    gdjs.IntroCode.GDRightArrowRoundButtonObjects2[i].setVariableBoolean(gdjs.IntroCode.GDRightArrowRoundButtonObjects2[i].getVariables().get("focus"), true);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("RightArrowRoundButton"), gdjs.IntroCode.GDRightArrowRoundButtonObjects2);

gdjs.IntroCode.condition0IsTrue_0.val = false;
{
gdjs.IntroCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.IntroCode.mapOfGDgdjs_46IntroCode_46GDRightArrowRoundButtonObjects2Objects, runtimeScene, true, true);
}if (gdjs.IntroCode.condition0IsTrue_0.val) {
/* Reuse gdjs.IntroCode.GDRightArrowRoundButtonObjects2 */
{for(var i = 0, len = gdjs.IntroCode.GDRightArrowRoundButtonObjects2.length ;i < len;++i) {
    gdjs.IntroCode.GDRightArrowRoundButtonObjects2[i].setVariableBoolean(gdjs.IntroCode.GDRightArrowRoundButtonObjects2[i].getVariables().get("focus"), false);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("RightArrowRoundButton"), gdjs.IntroCode.GDRightArrowRoundButtonObjects2);

gdjs.IntroCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.IntroCode.GDRightArrowRoundButtonObjects2.length;i<l;++i) {
    if ( gdjs.IntroCode.GDRightArrowRoundButtonObjects2[i].getVariableNumber(gdjs.IntroCode.GDRightArrowRoundButtonObjects2[i].getVariables().get("focus")) == 1 ) {
        gdjs.IntroCode.condition0IsTrue_0.val = true;
        gdjs.IntroCode.GDRightArrowRoundButtonObjects2[k] = gdjs.IntroCode.GDRightArrowRoundButtonObjects2[i];
        ++k;
    }
}
gdjs.IntroCode.GDRightArrowRoundButtonObjects2.length = k;}if (gdjs.IntroCode.condition0IsTrue_0.val) {
/* Reuse gdjs.IntroCode.GDRightArrowRoundButtonObjects2 */
{for(var i = 0, len = gdjs.IntroCode.GDRightArrowRoundButtonObjects2.length ;i < len;++i) {
    gdjs.IntroCode.GDRightArrowRoundButtonObjects2[i].setY(810);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("RightArrowRoundButton"), gdjs.IntroCode.GDRightArrowRoundButtonObjects2);

gdjs.IntroCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.IntroCode.GDRightArrowRoundButtonObjects2.length;i<l;++i) {
    if ( gdjs.IntroCode.GDRightArrowRoundButtonObjects2[i].getVariableNumber(gdjs.IntroCode.GDRightArrowRoundButtonObjects2[i].getVariables().get("focus")) == 0 ) {
        gdjs.IntroCode.condition0IsTrue_0.val = true;
        gdjs.IntroCode.GDRightArrowRoundButtonObjects2[k] = gdjs.IntroCode.GDRightArrowRoundButtonObjects2[i];
        ++k;
    }
}
gdjs.IntroCode.GDRightArrowRoundButtonObjects2.length = k;}if (gdjs.IntroCode.condition0IsTrue_0.val) {
/* Reuse gdjs.IntroCode.GDRightArrowRoundButtonObjects2 */
{for(var i = 0, len = gdjs.IntroCode.GDRightArrowRoundButtonObjects2.length ;i < len;++i) {
    gdjs.IntroCode.GDRightArrowRoundButtonObjects2[i].setY(800);
}
}}

}


{



}


{

gdjs.copyArray(runtimeScene.getObjects("TopArrowButton"), gdjs.IntroCode.GDTopArrowButtonObjects2);

gdjs.IntroCode.condition0IsTrue_0.val = false;
{
gdjs.IntroCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.IntroCode.mapOfGDgdjs_46IntroCode_46GDTopArrowButtonObjects2Objects, runtimeScene, true, false);
}if (gdjs.IntroCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("SportsCarOrange"), gdjs.IntroCode.GDSportsCarOrangeObjects2);
/* Reuse gdjs.IntroCode.GDTopArrowButtonObjects2 */
{for(var i = 0, len = gdjs.IntroCode.GDSportsCarOrangeObjects2.length ;i < len;++i) {
    gdjs.IntroCode.GDSportsCarOrangeObjects2[i].addForce(0, -(350), 0);
}
}{for(var i = 0, len = gdjs.IntroCode.GDTopArrowButtonObjects2.length ;i < len;++i) {
    gdjs.IntroCode.GDTopArrowButtonObjects2[i].setVariableBoolean(gdjs.IntroCode.GDTopArrowButtonObjects2[i].getVariables().get("focus"), true);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("TopArrowButton"), gdjs.IntroCode.GDTopArrowButtonObjects2);

gdjs.IntroCode.condition0IsTrue_0.val = false;
{
gdjs.IntroCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.IntroCode.mapOfGDgdjs_46IntroCode_46GDTopArrowButtonObjects2Objects, runtimeScene, true, true);
}if (gdjs.IntroCode.condition0IsTrue_0.val) {
/* Reuse gdjs.IntroCode.GDTopArrowButtonObjects2 */
{for(var i = 0, len = gdjs.IntroCode.GDTopArrowButtonObjects2.length ;i < len;++i) {
    gdjs.IntroCode.GDTopArrowButtonObjects2[i].setVariableBoolean(gdjs.IntroCode.GDTopArrowButtonObjects2[i].getVariables().get("focus"), false);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("TopArrowButton"), gdjs.IntroCode.GDTopArrowButtonObjects2);

gdjs.IntroCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.IntroCode.GDTopArrowButtonObjects2.length;i<l;++i) {
    if ( gdjs.IntroCode.GDTopArrowButtonObjects2[i].getVariableNumber(gdjs.IntroCode.GDTopArrowButtonObjects2[i].getVariables().get("focus")) == 1 ) {
        gdjs.IntroCode.condition0IsTrue_0.val = true;
        gdjs.IntroCode.GDTopArrowButtonObjects2[k] = gdjs.IntroCode.GDTopArrowButtonObjects2[i];
        ++k;
    }
}
gdjs.IntroCode.GDTopArrowButtonObjects2.length = k;}if (gdjs.IntroCode.condition0IsTrue_0.val) {
/* Reuse gdjs.IntroCode.GDTopArrowButtonObjects2 */
{for(var i = 0, len = gdjs.IntroCode.GDTopArrowButtonObjects2.length ;i < len;++i) {
    gdjs.IntroCode.GDTopArrowButtonObjects2[i].setY(810);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("TopArrowButton"), gdjs.IntroCode.GDTopArrowButtonObjects1);

gdjs.IntroCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.IntroCode.GDTopArrowButtonObjects1.length;i<l;++i) {
    if ( gdjs.IntroCode.GDTopArrowButtonObjects1[i].getVariableNumber(gdjs.IntroCode.GDTopArrowButtonObjects1[i].getVariables().get("focus")) == 0 ) {
        gdjs.IntroCode.condition0IsTrue_0.val = true;
        gdjs.IntroCode.GDTopArrowButtonObjects1[k] = gdjs.IntroCode.GDTopArrowButtonObjects1[i];
        ++k;
    }
}
gdjs.IntroCode.GDTopArrowButtonObjects1.length = k;}if (gdjs.IntroCode.condition0IsTrue_0.val) {
/* Reuse gdjs.IntroCode.GDTopArrowButtonObjects1 */
{for(var i = 0, len = gdjs.IntroCode.GDTopArrowButtonObjects1.length ;i < len;++i) {
    gdjs.IntroCode.GDTopArrowButtonObjects1[i].setY(800);
}
}}

}


};gdjs.IntroCode.mapOfGDgdjs_46IntroCode_46GDJeepBriteGreenObjects2Objects = Hashtable.newFrom({"JeepBriteGreen": gdjs.IntroCode.GDJeepBriteGreenObjects2});
gdjs.IntroCode.mapOfGDgdjs_46IntroCode_46GDMuscleCarBlueObjects2Objects = Hashtable.newFrom({"MuscleCarBlue": gdjs.IntroCode.GDMuscleCarBlueObjects2});
gdjs.IntroCode.mapOfGDgdjs_46IntroCode_46GDCarRedObjects2Objects = Hashtable.newFrom({"CarRed": gdjs.IntroCode.GDCarRedObjects2});
gdjs.IntroCode.mapOfGDgdjs_46IntroCode_46GDSuvTanObjects2Objects = Hashtable.newFrom({"SuvTan": gdjs.IntroCode.GDSuvTanObjects2});
gdjs.IntroCode.mapOfGDgdjs_46IntroCode_46GDConvertiblePurpleObjects1Objects = Hashtable.newFrom({"ConvertiblePurple": gdjs.IntroCode.GDConvertiblePurpleObjects1});
gdjs.IntroCode.eventsList1 = function(runtimeScene) {

{


gdjs.IntroCode.condition0IsTrue_0.val = false;
{
gdjs.IntroCode.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getVariables().getFromIndex(0)) == 1;
}if (gdjs.IntroCode.condition0IsTrue_0.val) {
gdjs.IntroCode.GDJeepBriteGreenObjects2.length = 0;

{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.IntroCode.mapOfGDgdjs_46IntroCode_46GDJeepBriteGreenObjects2Objects, gdjs.randomInRange(20, 400), -(gdjs.randomInRange(75, 125)), "");
}{for(var i = 0, len = gdjs.IntroCode.GDJeepBriteGreenObjects2.length ;i < len;++i) {
    gdjs.IntroCode.GDJeepBriteGreenObjects2[i].setSize(125, 90);
}
}{for(var i = 0, len = gdjs.IntroCode.GDJeepBriteGreenObjects2.length ;i < len;++i) {
    gdjs.IntroCode.GDJeepBriteGreenObjects2[i].rotateTowardAngle(270, 0, runtimeScene);
}
}{for(var i = 0, len = gdjs.IntroCode.GDJeepBriteGreenObjects2.length ;i < len;++i) {
    gdjs.IntroCode.GDJeepBriteGreenObjects2[i].setZOrder(1);
}
}{runtimeScene.getVariables().getFromIndex(0).setNumber(0);
}}

}


{


gdjs.IntroCode.condition0IsTrue_0.val = false;
{
gdjs.IntroCode.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getVariables().getFromIndex(0)) == 2;
}if (gdjs.IntroCode.condition0IsTrue_0.val) {
gdjs.IntroCode.GDMuscleCarBlueObjects2.length = 0;

{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.IntroCode.mapOfGDgdjs_46IntroCode_46GDMuscleCarBlueObjects2Objects, gdjs.randomInRange(20, 400), -(gdjs.randomInRange(75, 125)), "");
}{for(var i = 0, len = gdjs.IntroCode.GDMuscleCarBlueObjects2.length ;i < len;++i) {
    gdjs.IntroCode.GDMuscleCarBlueObjects2[i].setSize(125, 90);
}
}{for(var i = 0, len = gdjs.IntroCode.GDMuscleCarBlueObjects2.length ;i < len;++i) {
    gdjs.IntroCode.GDMuscleCarBlueObjects2[i].rotateTowardAngle(270, 0, runtimeScene);
}
}{for(var i = 0, len = gdjs.IntroCode.GDMuscleCarBlueObjects2.length ;i < len;++i) {
    gdjs.IntroCode.GDMuscleCarBlueObjects2[i].setZOrder(1);
}
}{runtimeScene.getVariables().getFromIndex(0).setNumber(0);
}}

}


{


gdjs.IntroCode.condition0IsTrue_0.val = false;
{
gdjs.IntroCode.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getVariables().getFromIndex(0)) == 3;
}if (gdjs.IntroCode.condition0IsTrue_0.val) {
gdjs.IntroCode.GDCarRedObjects2.length = 0;

{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.IntroCode.mapOfGDgdjs_46IntroCode_46GDCarRedObjects2Objects, gdjs.randomInRange(20, 400), -(gdjs.randomInRange(75, 125)), "");
}{for(var i = 0, len = gdjs.IntroCode.GDCarRedObjects2.length ;i < len;++i) {
    gdjs.IntroCode.GDCarRedObjects2[i].setSize(125, 90);
}
}{for(var i = 0, len = gdjs.IntroCode.GDCarRedObjects2.length ;i < len;++i) {
    gdjs.IntroCode.GDCarRedObjects2[i].rotateTowardAngle(270, 0, runtimeScene);
}
}{for(var i = 0, len = gdjs.IntroCode.GDCarRedObjects2.length ;i < len;++i) {
    gdjs.IntroCode.GDCarRedObjects2[i].setZOrder(1);
}
}{runtimeScene.getVariables().getFromIndex(0).setNumber(0);
}}

}


{


gdjs.IntroCode.condition0IsTrue_0.val = false;
{
gdjs.IntroCode.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getVariables().getFromIndex(0)) == 4;
}if (gdjs.IntroCode.condition0IsTrue_0.val) {
gdjs.IntroCode.GDSuvTanObjects2.length = 0;

{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.IntroCode.mapOfGDgdjs_46IntroCode_46GDSuvTanObjects2Objects, gdjs.randomInRange(20, 400), -(gdjs.randomInRange(75, 125)), "");
}{for(var i = 0, len = gdjs.IntroCode.GDSuvTanObjects2.length ;i < len;++i) {
    gdjs.IntroCode.GDSuvTanObjects2[i].setSize(125, 90);
}
}{for(var i = 0, len = gdjs.IntroCode.GDSuvTanObjects2.length ;i < len;++i) {
    gdjs.IntroCode.GDSuvTanObjects2[i].rotateTowardAngle(270, 0, runtimeScene);
}
}{for(var i = 0, len = gdjs.IntroCode.GDSuvTanObjects2.length ;i < len;++i) {
    gdjs.IntroCode.GDSuvTanObjects2[i].setZOrder(1);
}
}{runtimeScene.getVariables().getFromIndex(0).setNumber(0);
}}

}


{


gdjs.IntroCode.condition0IsTrue_0.val = false;
{
gdjs.IntroCode.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getVariables().getFromIndex(0)) == 5;
}if (gdjs.IntroCode.condition0IsTrue_0.val) {
gdjs.IntroCode.GDConvertiblePurpleObjects1.length = 0;

{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.IntroCode.mapOfGDgdjs_46IntroCode_46GDConvertiblePurpleObjects1Objects, gdjs.randomInRange(20, 400), -(gdjs.randomInRange(75, 125)), "");
}{for(var i = 0, len = gdjs.IntroCode.GDConvertiblePurpleObjects1.length ;i < len;++i) {
    gdjs.IntroCode.GDConvertiblePurpleObjects1[i].setSize(125, 90);
}
}{for(var i = 0, len = gdjs.IntroCode.GDConvertiblePurpleObjects1.length ;i < len;++i) {
    gdjs.IntroCode.GDConvertiblePurpleObjects1[i].rotateTowardAngle(270, 0, runtimeScene);
}
}{for(var i = 0, len = gdjs.IntroCode.GDConvertiblePurpleObjects1.length ;i < len;++i) {
    gdjs.IntroCode.GDConvertiblePurpleObjects1[i].setZOrder(1);
}
}{runtimeScene.getVariables().getFromIndex(0).setNumber(0);
}}

}


};gdjs.IntroCode.eventsList2 = function(runtimeScene) {

{


gdjs.IntroCode.condition0IsTrue_0.val = false;
{
gdjs.IntroCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "spawnrate") >= 2;
}if (gdjs.IntroCode.condition0IsTrue_0.val) {
{runtimeScene.getVariables().getFromIndex(0).setNumber(gdjs.randomInRange(1, 5));
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "spawnrate");
}
{ //Subevents
gdjs.IntroCode.eventsList1(runtimeScene);} //End of subevents
}

}


};gdjs.IntroCode.eventsList3 = function(runtimeScene) {

{


gdjs.IntroCode.condition0IsTrue_0.val = false;
{
gdjs.IntroCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.IntroCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "spawnrate");
}}

}


{


{
gdjs.copyArray(runtimeScene.getObjects("CarRed"), gdjs.IntroCode.GDCarRedObjects1);
gdjs.copyArray(runtimeScene.getObjects("ConvertiblePurple"), gdjs.IntroCode.GDConvertiblePurpleObjects1);
gdjs.copyArray(runtimeScene.getObjects("JeepBriteGreen"), gdjs.IntroCode.GDJeepBriteGreenObjects1);
gdjs.copyArray(runtimeScene.getObjects("MuscleCarBlue"), gdjs.IntroCode.GDMuscleCarBlueObjects1);
gdjs.copyArray(runtimeScene.getObjects("SportsCarOrange"), gdjs.IntroCode.GDSportsCarOrangeObjects1);
gdjs.copyArray(runtimeScene.getObjects("SuvTan"), gdjs.IntroCode.GDSuvTanObjects1);
{for(var i = 0, len = gdjs.IntroCode.GDJeepBriteGreenObjects1.length ;i < len;++i) {
    gdjs.IntroCode.GDJeepBriteGreenObjects1[i].addPolarForce(-(270), 250, 0);
}
}{for(var i = 0, len = gdjs.IntroCode.GDMuscleCarBlueObjects1.length ;i < len;++i) {
    gdjs.IntroCode.GDMuscleCarBlueObjects1[i].addPolarForce(-(270), 250, 0);
}
}{for(var i = 0, len = gdjs.IntroCode.GDCarRedObjects1.length ;i < len;++i) {
    gdjs.IntroCode.GDCarRedObjects1[i].addPolarForce(-(270), 250, 0);
}
}{for(var i = 0, len = gdjs.IntroCode.GDSuvTanObjects1.length ;i < len;++i) {
    gdjs.IntroCode.GDSuvTanObjects1[i].addPolarForce(-(270), 250, 0);
}
}{for(var i = 0, len = gdjs.IntroCode.GDConvertiblePurpleObjects1.length ;i < len;++i) {
    gdjs.IntroCode.GDConvertiblePurpleObjects1[i].addPolarForce(-(270), 250, 0);
}
}{for(var i = 0, len = gdjs.IntroCode.GDSportsCarOrangeObjects1.length ;i < len;++i) {
    gdjs.IntroCode.GDSportsCarOrangeObjects1[i].addPolarForce(-(270), 200, 0);
}
}}

}


{


gdjs.IntroCode.eventsList0(runtimeScene);
}


{


gdjs.IntroCode.eventsList2(runtimeScene);
}


};

gdjs.IntroCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.IntroCode.GDMuscleCarBlueObjects1.length = 0;
gdjs.IntroCode.GDMuscleCarBlueObjects2.length = 0;
gdjs.IntroCode.GDMuscleCarBlueObjects3.length = 0;
gdjs.IntroCode.GDJeepBriteGreenObjects1.length = 0;
gdjs.IntroCode.GDJeepBriteGreenObjects2.length = 0;
gdjs.IntroCode.GDJeepBriteGreenObjects3.length = 0;
gdjs.IntroCode.GDLeftArrowRoundButtonObjects1.length = 0;
gdjs.IntroCode.GDLeftArrowRoundButtonObjects2.length = 0;
gdjs.IntroCode.GDLeftArrowRoundButtonObjects3.length = 0;
gdjs.IntroCode.GDRightArrowRoundButtonObjects1.length = 0;
gdjs.IntroCode.GDRightArrowRoundButtonObjects2.length = 0;
gdjs.IntroCode.GDRightArrowRoundButtonObjects3.length = 0;
gdjs.IntroCode.GDTopArrowButtonObjects1.length = 0;
gdjs.IntroCode.GDTopArrowButtonObjects2.length = 0;
gdjs.IntroCode.GDTopArrowButtonObjects3.length = 0;
gdjs.IntroCode.GDConvertiblePurpleObjects1.length = 0;
gdjs.IntroCode.GDConvertiblePurpleObjects2.length = 0;
gdjs.IntroCode.GDConvertiblePurpleObjects3.length = 0;
gdjs.IntroCode.GDCarRedObjects1.length = 0;
gdjs.IntroCode.GDCarRedObjects2.length = 0;
gdjs.IntroCode.GDCarRedObjects3.length = 0;
gdjs.IntroCode.GDCarBlueObjects1.length = 0;
gdjs.IntroCode.GDCarBlueObjects2.length = 0;
gdjs.IntroCode.GDCarBlueObjects3.length = 0;
gdjs.IntroCode.GDSuvTanObjects1.length = 0;
gdjs.IntroCode.GDSuvTanObjects2.length = 0;
gdjs.IntroCode.GDSuvTanObjects3.length = 0;
gdjs.IntroCode.GDSportsCarOrangeObjects1.length = 0;
gdjs.IntroCode.GDSportsCarOrangeObjects2.length = 0;
gdjs.IntroCode.GDSportsCarOrangeObjects3.length = 0;

gdjs.IntroCode.eventsList3(runtimeScene);

return;

}

gdjs['IntroCode'] = gdjs.IntroCode;
