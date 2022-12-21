
if (typeof gdjs.evtsExt__InputValidation__ToAlphanumerical !== "undefined") {
  gdjs.evtsExt__InputValidation__ToAlphanumerical.registeredGdjsCallbacks.forEach(callback =>
    gdjs._unregisterCallback(callback)
  );
}

gdjs.evtsExt__InputValidation__ToAlphanumerical = {};

gdjs.evtsExt__InputValidation__ToAlphanumerical.conditionTrue_0 = {val:false};
gdjs.evtsExt__InputValidation__ToAlphanumerical.condition0IsTrue_0 = {val:false};


gdjs.evtsExt__InputValidation__ToAlphanumerical.userFunc0x7aeaf8 = function(runtimeScene, eventsFunctionContext) {
"use strict";
eventsFunctionContext.returnValue = eventsFunctionContext.getArgument("text").replace(/\W/g, '');
};
gdjs.evtsExt__InputValidation__ToAlphanumerical.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


gdjs.evtsExt__InputValidation__ToAlphanumerical.userFunc0x7aeaf8(runtimeScene, typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined);

}


};

gdjs.evtsExt__InputValidation__ToAlphanumerical.func = function(runtimeScene, text, parentEventsFunctionContext) {
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
if (argName === "text") return text;
    return "";
  },
  getOnceTriggers: function() { return runtimeScene.getOnceTriggers(); }
};


gdjs.evtsExt__InputValidation__ToAlphanumerical.eventsList0(runtimeScene, eventsFunctionContext);

return "" + eventsFunctionContext.returnValue;
}

gdjs.evtsExt__InputValidation__ToAlphanumerical.registeredGdjsCallbacks = [];