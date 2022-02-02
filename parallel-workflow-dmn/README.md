
# Camunda - Parallel Implementation
## Camunda workflow with parallel execution and approval/rejection flow

### Queries to check task details
``` sql
SELECT * FROM ACT_HI_TASKINST order by start_time_ desc

SELECT * FROM ACT_HI_TASKINST where PROC_INST_ID_ ='8f9a4187-8356-11ec-8cb2-fa2a44d56e9b' order by start_time_ desc
```

## Request Varable maps
### To check process definition
http://localhost:8080/engine-rest/process-definition?keyLike=parallel-rejection
``` json
{}
```

### To start the process
http://localhost:8080/engine-rest/process-definition/key/parallel-rejection/start

``` json
{}
```
### To get all pending tasks
http://localhost:8080/engine-rest/task?processDefinationKey=parallel-rejection

### To complete the task
http://localhost:8080/engine-rest/task/3864d5dc-8413-11ec-906c-fa2a44d56e9b/complete

``` json
{
    "variables": {
        "groups": {
            "value": ["WFM", "COO"],
            "valueInfo": {
                "objectTypeName": "java.util.ArrayList",
                "serializationDataFormat": "application/json"
            }
        },
        "isApproved": {
            "value": true,
            "type": "Boolean"
        }
    }
}
```

### To reject request just change isApproved false
``` json
{
    "variables": {
        "isApproved": {
            "value": false,
            "type": "Boolean"
        }
    }
}
```
