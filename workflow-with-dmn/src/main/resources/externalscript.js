var mapvalues = execution.getVariable('mapvalues');
var jsonMap = JSON.parse(mapvalues);
var isDataCleanUp = Boolean(jsonMap.isDataCleanUp);
var isFastTrack = Boolean(jsonMap.isFastTrack);
var isCTABPAdded = Boolean(jsonMap.isCTABPAdded);
var status = String(jsonMap.status);

execution.setVariable('isDataCleanUp', isDataCleanUp);
execution.setVariable('isFastTrack', isFastTrack);
execution.setVariable('isCTABPAdded', isCTABPAdded);
execution.setVariable('status', status);
execution.setVariable('amount', Number(jsonMap.amount));
