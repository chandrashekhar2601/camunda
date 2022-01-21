var mapvalues = execution.getVariable('variables');
var jsonMap = JSON.parse(mapvalues);
var dayInput = String(jsonMap.dayInput);
var headCount = String(jsonMap.headCount);

execution.setVariable('jsonMap', String(jsonMap));
execution.setVariable('dayInput', dayInput);
execution.setVariable('headCount', headCount);

