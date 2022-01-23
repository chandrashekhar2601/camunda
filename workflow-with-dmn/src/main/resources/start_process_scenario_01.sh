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