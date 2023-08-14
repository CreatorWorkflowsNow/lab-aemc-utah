---
title: Intake Approval
---
# Intake Approval

import TimeEstimate from '@site/src/components/TimeEstimate';

<TimeEstimate>Estimated Time to Complete: 10 minutes</TimeEstimate>

## Overview

<details>
  <summary><strong>App Engine Admin</strong> [<em>ap en-jin ad-min</em>]</summary>
  Someone who has administrative responsibilities for configuring and managing App Engine applications on ServiceNow. An App Engine Admin oversees the deployment, scaling, and maintenance of applications while ensuring optimal performance and availability.
</details>

| Jayne Nigel| App Engine Admin
|--|--|
| ![](../assets/images/2023-03-28-16-42-23.png) | Jayne is familiar with many different software methodologies such as Agile and SAFe. She is familiar with Update Sets from her ServiceNow training, but she does not regularly work with them.

In this section, our **App Engine Admin** Jayne will review and approve Sydney's App Intake request. 

When Sydney submitted her Intake Request it triggered an email to Jayne to let her know to take action. 

Here is a sample of what the email would look like in real life:

:::info
**SUBJECT:** Please select user permission type for a new app request

![relative](https://creatorworkflowsnow.github.io/lab-aemc-utah-v2/assets/images/2023-07-11-21-08-36.png)
:::

Upon clicking **Review request** in the email, Jayne would be taken directly to App Engine Management Center. 

## Instructions

:::warning
Complete this section in **PROD**.
:::

1. Log in to **Prod**

2. Click the avatar in the top-right, then click **Impersonate another user**.

![relative](../assets/images/2023-03-14-12-44-50.png)

3. Type **Jayne Nigel** and click **Jayne Nigel**.

![relative](../assets/images/2023-03-14-12-45-21.png)

4. Click **Impersonate user**.

5. Click **All** >> type **app engine management** >> click **App Engine Management Center**.

![relative](../assets/images/2023-07-05-16-16-55.png)

:::caution
This will open AEMC in a new browser tab.
:::

6. In the **Pending requests to complete** widget, click the number **1** above **Intake** to open Sydney's request. 

![relative](../assets/images/2023-07-11-16-34-50.png)

7. Click the **RITM** number to open Sydney's request.

![relative](../assets/images/2023-07-11-16-36-33.png)

8. Scroll down the left-hand side of the page in the **Details** section.

![relative](../assets/images/2023-07-11-16-39-06.png)

9. In the **Administration** section of the form, click on the **Permission type** drop-down field.

![relative](../assets/images/2023-07-11-16-42-31.png)

10. Click on **Create/edit applications (AES User Group)**

![relative](../assets/images/2023-07-11-16-44-56.png)

11. Scroll to the top of the page and click **Save** in the top right. 

![relative](../assets/images/2023-07-11-16-46-15.png)

12. Click on the **Catalog Tasks (1)** related list. 

![relative](../assets/images/2023-07-11-16-47-20.png)

13. Click the **SCTASK** number to open the Catalog Task.

![relative](../assets/images/2023-07-11-16-47-55.png)

14. Click **Close Task** in the top-right.

![relative](../assets/images/2023-07-11-16-49-14.png)

15. Click the **ⓘ** icon next to the **RITM** number to go back to the **RITM** record. 

![relative](../assets/images/2023-07-11-16-54-30.png)

:::caution
If you do not see the **Approve** button in the next step, you may need to refresh the page.
:::

16. Click **Approve** in the top-right of the page. 

![relative](../assets/images/2023-07-11-16-56-47.png)

![relative](../assets/images/2023-07-11-17-01-13.png)

After Jayne approved the request, an automated email was sent to Sydney letting her know.

:::info
**SUBJECT:** Request REQ0010005 was approved

![relative](../assets/images/2023-07-11-21-14-08.png)
:::

The Prod instance will configure Sydney's App Engine User access on the Dev environment.
 
In the real world, there might be more than one person to do the approval and more time may be taken to review the answers.
 
You may also want to require the person to undergo additional training before approving their access to build applications. 

## Lessons Learned

During our journey through the 'Intake - Approval' process, several insightful takeaways emerged, all of which can prove helpful for future reference:

1. **Role Clarification**: The process shed light on the critical role that Jayne, the App Engine Admin, plays within the system. Her duties, while not labeled 'Platform Administrator' or assigned any 'admin' roles in any environment, are far-reaching. Her approvals initiate a sequence of automated procedures that are crucial for the smooth functioning of the system. This serves as a reminder that all roles, regardless of their titles, have significant responsibilities and impacts.

2. **Approval Process**: The impact of the approval process on subsequent actions (like triggering an automated email to Sydney) was an essential takeaway. This demonstrates the power of automated workflows in saving time and reducing manual errors.

3. **Segregation of Duties**: Successfully completing this process without Jayne needing an 'admin' role showcases the 'Segregation of Duties' principle. It illustrates that high-level access (like the 'admin' role) isn't always required to complete significant tasks. This reduces potential security risks and promotes system integrity.

