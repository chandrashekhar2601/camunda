# camunda
# Camunda workflow with script executer executes external script

# Use below urls to check on postman or command prompt

curl --location --request POST 'http://localhost:8080/engine-rest/process-definition/key/workflow-poc1/start' --header 'Content-Type: application/json' --data-raw '{
     "variables": {
         "isFasttrackAndCTA": {
             "value": true,
             "type": "Boolean"
        },
        "isCtaBPPresent": {
             "value": true,
             "type": "Boolean"
        }
    }
}'

# Process defination: workflow-poc1

# Get all runing definatins
http://localhost:8080/engine-rest/process-definition?keyLike=workflow-poc1

# Start process with process defination
http://localhost:8080/engine-rest/process-definition/key/workflow-poc1/start

# Get all tasks available with perticular process defination
http://localhost:8080/engine-rest/task?processDefinationKey=workflow-poc1

# Complete task by task id and Request body
http://localhost:8080/engine-rest/task/7fb04465-76e1-11ec-b3df-fa2a44d56e9b/complete

{
	"variables": {
         "isFasttrackAndCTA": {
             "value": false,
             "type": "Boolean"
        },
        "isCtaBPPresent": {
             "value": true,
             "type": "Boolean"
        },
        "mapvalues": {
             "value": "{\"status\": \"Approved\"}",
             "type": "String"
        }
    }
}


