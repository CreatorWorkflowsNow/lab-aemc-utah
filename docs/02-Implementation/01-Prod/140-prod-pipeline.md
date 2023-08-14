---
title: Pipeline
---

# Configure Pipeline in Prod

import TimeEstimate from '@site/src/components/TimeEstimate';

<TimeEstimate>Estimated Time to Complete: 15 minutes</TimeEstimate>

## Overview

**<a href="https://docs.servicenow.com/csh?topicname=config-pipeline.html&version=latest" target="_blank">Pipelines ↗</a>** establish the path an application takes from Development to Production.

This facilitates administrators' ability to efficiently transfer applications across different instances in the App Engine Management Center.

The process involves setting up and configuring your pipeline, specifying the **<a href="https://docs.servicenow.com/csh?topicname=config-pipeline-environments.html&version=latest" target="_blank">Environments ↗</a>** to include, and determining their position in the pipeline. 

The Pipeline is exclusive to the Controller Environment, which in this case is the Production instance. 

### Before

``` mermaid
graph TD
    subgraph Prod1["Production Instance"]
        Dev("#quot; Dev #quot;
        Environment record
        ‎")
        Prod("#quot; Prod #quot;
        Environment record
        (The Controller)")
    end
    class Prod1 prodStyle
    class Dev,Prod envStyle
    classDef prodStyle fill:#CCFFCC;
    classDef envStyle fill:#F3F3F3;
```

### After

``` mermaid
graph LR
    subgraph Prod1["Production Instance"]
        subgraph Pipeline
            Dev("#quot; Dev #quot;
            (Source)")
            Prod("#quot; Prod #quot;
            (Order: 100)")
        end
    end
    Dev --> Prod
    class Prod1 prodStyle
    class Dev,Prod envStyle
    classDef prodStyle fill:#CCFFCC;
    classDef envStyle fill:#F3F3F3;
```

### **EXAMPLE ONLY** 
*If you had a Test or other Subprod environments, the Pipeline would get defined like this:*

``` mermaid
graph LR
    subgraph Prod1["Production Instance"]
        subgraph Pipeline
            Dev("#quot; Dev #quot;
            (Source)")
            Test("#quot; Test #quot;
            (Order: 100)")
            Prod("#quot; Prod #quot;
            (Order: 200)")
        end
    end
    Dev --> Test
    Test --> Prod
    class Prod1 prodStyle
    class Dev,Test,Prod envStyle
    classDef prodStyle fill:#CCFFCC;
    classDef envStyle fill:#F3F3F3;
```

:::danger
In this Lab, you will only configure Dev and Prod in the Pipeline.
:::

## Instructions

:::caution
For this exercise, the specific Application Scope is not critical - Global is acceptable. Always check with your Platform Administrator for any company policies around **<a href="https://docs.servicenow.com/csh?topicname=connection-alias.html&version=latest" target="_blank">Connection and Credential Aliases ↗</a>**.
:::

:::warning
**Complete this section in PROD.**
 
There's **NO** necessity to create a Pipeline in any other environment. 
:::

1. Click **All** >> type **pipelines** >> click **Pipelines**.

![Navigate to Pipelines](../../assets/images/2023-06-30-15-31-49.png)

2. Initiate a new pipeline: Click **New** in the top-right corner.

![Create New Pipeline](../../assets/images/2023-06-30-15-19-10.png)

3. Fill out the form as follows:

|#|Field | Value                     
|--|--|--
|1|**Name** | Main Pipeline
|2|**Pipeline Type** | Application Deployment
|3|**Source Environment** | Dev                     
|4|**Active** | **Checked**

![Pipeline Form](../../assets/images/2023-07-31-14-55-26.png)

4. Submit the form.

![Submit](../../assets/images/2023-07-11-15-49-01.png)

5. Open the newly created **Main Pipeline** record.

![Main Pipeline](../../assets/images/2023-07-31-14-57-44.png)

6. Click **New** in the **Pipeline Environments Order** related list.

![New Order](../../assets/images/2023-07-31-14-59-00.png)

7. Complete the new form as shown below and click **Submit** when done.

|#| Field       | Value           
|-|-|-
|1| **Pipeline**    | Main Pipeline
|2| **Environment** | Prod
|3| **Order**       | 100

![Environment Order Form](../../assets/images/2023-07-31-15-02-04.png)

Your completed Pipeline record will look like this:

![relative](../../assets/images/2023-07-31-15-05-01.png) 

:::warning
Make sure your Pipeline configuration matches the screenshot above.
 
DO NOT add Dev to the **Pipeline Environments Order** related list. 
 
It is the **Source Environment** and does not get added to the additional environments list. 
:::

## Lessons Learned

Through this exercise, we grasped the importance of correctly configuring the Pipeline in the Production instance.