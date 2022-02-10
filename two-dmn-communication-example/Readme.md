# One dmn output used as other dmn input

## Request payloades to test this

http://localhost:8080/engine-rest/process-definition/key/two-dmn-communication-example-process/start

```json
{
	"variables": {
         "assignorGroup": {
             "value": "WFM",
             "type": "String"
        },
        "userAction": {
             "value": "Start",
             "type": "String"
        },
        "hireType": {
             "value": 88,
             "type": "Integer"
        }
        
    }
}
```
http://localhost:8080/engine-rest/task?processDefinationKey=two-dmn-communication-example-process

http://localhost:8080/engine-rest/task/c3b0623d-8a86-11ec-b107-fa2a44d56e9b/complete
```json
{
    "variables": {
        "assignorGroup": {
            "value": "WFM",
            "type": "String"
        },
        "userAction": {
            "value": "Submit",
            "type": "String"
        },
        "hireType": {
            "value": 88,
            "type": "Integer"
        },
        "channelType": {
            "value": "Green",
            "type": "String"
        }
    }
}
```
http://localhost:8080/engine-rest/task?processDefinationKey=two-dmn-communication-example-process

http://localhost:8080/engine-rest/task/c3b0623d-8a86-11ec-b107-fa2a44d56e9b/complete
```json
{
    "variables": {
        "assignorGroup": {
            "value": "BM",
            "type": "String"
        },
        "userAction": {
            "value": "Approve",
            "type": "String"
        },
        "hireType": {
            "value": 88,
            "type": "Integer"
        },
        "channelType": {
            "value": "Green",
            "type": "String"
        }
    }
}
```
http://localhost:8080/engine-rest/task?processDefinationKey=two-dmn-communication-example-process

http://localhost:8080/engine-rest/task/c3b0623d-8a86-11ec-b107-fa2a44d56e9b/complete
```json
{
    "variables": {
        "assignorGroup": {
            "value": "BM",
            "type": "String"
        },
        "userAction": {
            "value": "Approve",
            "type": "String"
        },
        "hireType": {
            "value": 88,
            "type": "Integer"
        },
        "channelType": {
            "value": "Red",
            "type": "String"
        }
    }
}
```
http://localhost:8080/engine-rest/task?processDefinationKey=two-dmn-communication-example-process

http://localhost:8080/engine-rest/task/c3b0623d-8a86-11ec-b107-fa2a44d56e9b/complete
```json
{
    "variables": {
        "assignorGroup": {
            "value": "ITCM",
            "type": "String"
        },
        "userAction": {
            "value": "Approve",
            "type": "String"
        },
        "hireType": {
            "value": 88,
            "type": "Integer"
        },
        "channelType": {
            "value": "Red",
            "type": "String"
        }
    }
}

```
http://localhost:8080/engine-rest/task?processDefinationKey=two-dmn-communication-example-process

http://localhost:8080/engine-rest/task/c3b0623d-8a86-11ec-b107-fa2a44d56e9b/complete
```json
{
    "variables": {
        "assignorGroup": {
            "value": "BM",
            "type": "String"
        },
        "userAction": {
            "value": "Reject",
            "type": "String"
        },
        "hireType": {
            "value": 88,
            "type": "Integer"
        },
        "channelType": {
            "value": "Green",
            "type": "String"
        },
        "receiverGoup": {
            "value": "WFM",
            "type": "String"
        }
        
    }
}