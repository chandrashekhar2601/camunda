# camunda - Implementation
# Camunda workflow with script executer executes external script also it contains complex user tasks workflow

# Process defination: workflow-with-dmn

# Get all runing definatins
http://localhost:8080/engine-rest/process-definition?keyLike=workflow-with-dmn

# Start process with process defination - pass empty object as to start process variables are not required
http://localhost:8080/engine-rest/process-definition/key/workflow-with-dmn/start
{}

# Get all tasks available with perticular process defination
http://localhost:8080/engine-rest/task?processDefinationKey=workflow-with-dmn

# Complete task by task id and Request body
http://localhost:8080/engine-rest/task/984b4142-7c71-11ec-8193-fa2a44d56e9b/complete

{
	"variables": {
        "mapvalues": {
             "value": "{\"isDataCleanUp\": false,\"isFastTrack\": true,\"isCTABPAdded\": true,\"status\": \"Approved\",\"amount\": 100000}",
             "type": "String"
        }
    }
}

# To Check DMN is deployed and working fine use below API - DMN key is: tpmDecisionTable
http://localhost:8080/engine-rest/decision-definition/key/tpmDecisionTable/evaluate
{
	"variables": {
         "isDataCleanUp": {
             "value": false,
             "type": "Boolean"
        },
        "isFastTrack": {
             "value": true,
             "type": "Boolean"
        },
        "isCTABPAdded": {
             "value": true,
             "type": "Boolean"
        },
        "status": {
             "value": "Approved",
             "type": "String"
        },
        "amount": {
             "value": 1000000,
             "type": "Number"
        }
    }
}

# Modify API rest call to get process back to the requester
http://localhost:8080/engine-rest/process-instance/21c5423c-7d1a-11ec-a200-fa2a44d56e9b/modification
# POST /process-instance/aProcessInstanceId/modification

# Request Body:
{
    "skipCustomListeners": true,
    "skipIoMappings": true,
    "instructions": [{
            "type": "startBeforeActivity",
            "activityId": "Activity_0bs2j7c",
            "variables": {
                "isDataCleanUp": {
                    "value": false,
                    "local": true,
                    "type": "Boolean"
                },
                "isFastTrack": {
                    "value": true,
                    "local": true,
                    "type": "Boolean"
                },
                "isCTABPAdded": {
                    "value": true,
                    "local": true,
                    "type": "Boolean"
                },
                "status": {
                    "value": "Approved",
                    "local": true,
                    "type": "String"
                },
                "amount": {
                    "value": "1000000",
                    "local": true,
                    "type": "Double"
                }
            }
        }, {
            "type": "cancel",
            "activityInstanceId": "Activity_1oy9r7w:58433100-7d1b-11ec-a200-fa2a44d56e9b"
        }
    ],
    "annotation": "Modified to resolve an error."
}

