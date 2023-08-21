---
title: Environments
---

# Create Environments

import TimeEstimate from '@site/src/components/TimeEstimate';

<TimeEstimate>Estimated Time to Complete: 10 minutes</TimeEstimate>

## Overview 

**<a href="https://docs.servicenow.com/csh?topicname=config-pipeline-environments.html&version=latest" target="_blank">Environments ↗</a>** contain information about a ServiceNow instance and how to access it.

Next, you will create an Environment record for both "Production" and "Development" on the Controller instance where AEMC is installed

### Before
``` mermaid
graph LR
    Production[Production Instance]
    style Production fill:#CCFFCC
```

### After
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

## Instructions

:::caution
For this exercise, the specific Application Scope is not critical - Global is acceptable. Always check with your Platform Administrator for any company policies around **<a href="https://docs.servicenow.com/csh?topicname=connection-alias.html&version=latest" target="_blank">Connection and Credential Aliases ↗</a>**.
:::

:::warning
**Complete this section in PROD.**
:::

1. Log in to **Prod**.


2. Click **All** >> type **environment** >> click **Environments**

![relative](../../assets/images/2023-06-30-15-17-33.png)

3. Click **New** in the top-right.

![relative](../../assets/images/2023-06-30-15-19-10.png)

4. Complete the form as below.

:::caution
**FOR THE INSTANCE URL YOU MUST PUT THE DEV INSTANCE URL!!!**
:::

|Field | Value 
|---|---
|**Name** | Dev
|**Instance Type** | Development 
|**Instance URL** | ![](../assets/images/2023-08-10-12-53-04.png)
|**Instance credential** | Pipeline_Credentials 
|**Is Controller?** | **UNCHECKED**
|**Instance Id** | This will auto populate after clicking Validate. 

5. Click **Validate**

![relative](../../assets/images/2023-07-11-15-38-49.png)

![relative](../../assets/images/2023-07-11-15-14-18.png)

You should see a blue message that says "The environment was validated successfully". 

![relative](../../assets/images/2023-07-31-17-13-43.png)

6. Click **Submit** to finish creating the environment record.

![relative](../../assets/images/2023-07-11-15-37-58.png)

7. Click **New** in the top right.

![relative](../../assets/images/2023-06-30-15-19-10.png)

8. Complete the form as below.

:::caution
**FOR THE INSTANCE URL YOU MUST PUT THE PROD INSTANCE URL!!!**
:::

|Field | Value 
|---|---
|**Name** | Prod 
|**Instance Type** | Production 
|**Instance URL** | ![](../assets/images/2023-08-10-13-17-01.png)
|**Instance credential** | Pipeline_Credentials 
|**Is Controller?** | **CHECK THE BOX**
|**Instance Id** | This will auto populate after clicking Validate. 

9. Click the "Validate" button. 

![relative](../../assets/images/2023-07-11-15-38-49.png)

You should see a blue or yellow message that says "*The controller environment was validated successfully*". 

![relative](../../assets/images/2023-07-31-17-16-45.png)

![relative](../../assets/images/2023-07-13-17-13-29.png)

10. Click **Submit** to finish creating the environment record.

![relative](../../assets/images/2023-07-11-15-37-58.png)

## Lessons Learned

In this exercise, you have:

- Understood the function and importance of Environment records in the ServiceNow platform.

- Acquired the knowledge of validating these Environment records.

- Successfully configured Environment records for both Development and Production instances in your Prod environment.