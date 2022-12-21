
if (typeof gdjs.evtsExt__Iframe__Delete !== "undefined") {
  gdjs.evtsExt__Iframe__Delete.registeredGdjsCallbacks.forEach(callback =>
    gdjs._unregisterCallback(callback)
  );
}

gdjs.evtsExt__Iframe__Delete = {};

gdjs.evtsExt__Iframe__Delete.conditionTrue_0 = {val:false};
gdjs.evtsExt__Iframe__Delete.condition0IsTrue_0 = {val:false};
gdjs.evtsExt__Iframe__Delete.condition1IsTrue_0 = {val:false};
gdjs.evtsExt__Iframe__Delete.conditionTrue_1 = {val:false};
gdjs.evtsExt__Iframe__Delete.condition0IsTrue_1 = {val:false};
gdjs.evtsExt__Iframe__Delete.condition1IsTrue_1 = {val:false};


gdjs.evtsExt__Iframe__Delete.userFunc0x7d26c0 = function(runtimeScene, eventsFunctionContext) {
"use strict";
document.getElementById(eventsFunctionContext.getArgument("Name")).remove();
};
gdjs.evtsExt__Iframe__Delete.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


gdjs.evtsExt__Iframe__Delete.userFunc0x7d26c0(runtimeScene, typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined);

}


};gdjs.evtsExt__Iframe__Delete.eventsList1 = function(runtimeScene, eventsFunctionContext) {

{


gdjs.evtsExt__Iframe__Delete.condition0IsTrue_0.val = false;
{
{gdjs.evtsExt__Iframe__Delete.conditionTrue_1 = gdjs.evtsExt__Iframe__Delete.condition0IsTrue_0;
gdjs.evtsExt__Iframe__Delete.conditionTrue_1.val = eventsFunctionContext.getOnceTriggers().triggerOnce(10818396);
}
}if (gdjs.evtsExt__Iframe__Delete.condition0IsTrue_0.val) {

{ //Subevents
gdjs.evtsExt__Iframe__Delete.eventsList0(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


};

gdjs.evtsExt__Iframe__Delete.func = function(runtimeScene, Name, parentEventsFunctionContext) {
var eventsFunctionContext = {
  _objectsMap: {
},
  _objectArraysMap: {
},
  _behaviorNamesMap: {
},
  getObjects: function(objectName) {
    return eventsFunctionContext._objectArraysMap[objectName] || [];
  },
  getObjectsLists: function(objectName) {
    return eventsFunctionContext._objectsMap[objectName] || null;
  },
  getBehaviorName: function(behaviorName) {
    return eventsFunctionContext._behaviorNamesMap[behaviorName] || behaviorName;
  },
  createObject: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    if (objectsList) {
      const object = parentEventsFunctionContext ?
        parentEventsFunctionContext.createObject(objectsList.firstKey()) :
        runtimeScene.createObject(objectsList.firstKey());
      if (object) {
        objectsList.get(objectsList.firstKey()).push(object);
        eventsFunctionContext._objectArraysMap[objectName].push(object);
      }
      return object;    }
    return null;
  },
  getInstancesCountOnScene: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    let count = 0;
    if (objectsList) {
      for(const objectName in objectsList.items)
        count += parentEventsFunctionContext ?
parentEventsFunctionContext.getInstancesCountOnScene(objectName) :
        runtimeScene.getInstancesCountOnScene(objectName);
    }
    return count;
  },
  getLayer: function(layerName) {
    return runtimeScene.getLayer(layerName);
  },
  getArgument: function(argName) {
if (argName === "Name") return Name;
    return "";
  },
  getOnceTriggers: function() { return runtimeScene.getOnceTriggers(); }
};


gdjs.evtsExt__Iframe__Delete.eventsList1(runtimeScene, eventsFunctionContext);

return;
}

gdjs.evtsExt__Iframe__Delete.registeredGdjsCallbacks = [];