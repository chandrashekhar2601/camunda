var isFasttrackAndCTA = execution.getVariable('isFasttrackAndCTA');
var isCtaBPPresent = execution.getVariable('isCtaBPPresent');
var mapvalues = execution.getVariable('mapvalues');
var jsonMap = JSON.parse(mapvalues);

if(String(jsonMap.status) == String('Approved')){
	execution.setVariable('amount', 100);
}else{
	execution.setVariable('amount', 100000);
}

execution.setVariable('status', String(jsonMap.status));
execution.setVariable('isFasttrackAndCTA', isFasttrackAndCTA);
execution.setVariable('isCtaBPPresent', isCtaBPPresent);