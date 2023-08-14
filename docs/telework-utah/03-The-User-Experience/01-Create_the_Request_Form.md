---
layout: default
title: Create the Request Form
parent: Part 2. Create the User Experience
nav_order: 1
---

# Create the Request Form

## Purpose

ServiceNow offers multiple ways to create a user experience for submitting a form. In this exercise, we will learn one quick way to get users off paper forms and emails.

1. Go to App Home tab, "App home Telework"

2. On the application homepage, locate the **Experience** section and click the **⨁ Add icon**.
 ![relative](../Click_Add_Experience.png)

    This takes us to a selection where we can identify the type of experience we wish to create.

3. **Select** the **Record Producer** option.

 ![relative](./user_form/Select_the_Record_Producer_option.png)

    :::info

    A record producer is a specific type of catalog item that allows end users to create records from the service catalog.

    :::

4. This launches the record producer creator.

5. Click on the <span className="aes_button">Begin</span> button

 ![relative](./user_form/Record_Producer_Click_Begin.png)

6. Set the following values (💡 double-click, copy & paste into the form).

    Field Name                | Field Value
    --------------------------| --------------
    **(1)** Name              | Apply for Telework
    **(2)** Short Description | Use this form to apply for Telework

    **(3)** Click on the <span className="aes_button">Continue</span> button.

 ![relative](./user_form/Set_Record_Producer_Name.png)

7. Click on the <span className="aes_button">Edit record producer</span> button.

 ![relative](./user_form/Click_on_the_Edit_record_producer_button.png)

8. Click on **Destination** , then type **Tel**, and select the **Telework Case** table.

 ![relative](./user_form/Click_on_Destination.png)

9. Click on **Location** , then under **Catalogs**, click on **Browse**.

 ![relative](./user_form/Select_Catalog.png)

10. Click on **Service Catalog** , then click on the right arrow to move the item over to the Selected list.
11. At the bottom, Click on the <span className="aes_button">Save selections</span> button.

 ![relative](./user_form/selected_catalog.png)

12. Under **Categories** , **click** on **Browse**.

13. Move **Can We Help You?** to the right-hand side and Click on the <span className="aes_button">Save selections</span> button.

    Your screen should look like below.
 ![relative](./images/RecordProducer_Location.png)

14. Let's add questions to the form. Click the <span className="aes_button">Continue to Questions</span> button.

    :::info
    Unlike in a paper-based form, we don't need to ask users to fill personal information like first name, last name, …, or date of request. That information will be automatically attached to the case. This makes filling forms so much faster.
    :::

15. We want to allow users to open a case on behalf of another individual, so let's start by asking users " **Who is this request for?**" and " **When do you need this?"**

16. **Click** on Questions.

17. **Click the arrow next to** Insert new questionthen click "Question set".

 ![relative](./user_form/Click_Insert_new_question.png)

18. Select "Standard Employee Questions" and click Submit.

 ![relative](./user_form/Select_Standard_Employee_Questions.png)

    This will add two frequently asked questions on forms. Click the little arrow on the left to see the questions.
 ![relative](./user_form/Standard_Employee_Questions_Added.png)

19. One key information we need users to provide is the type of arrangement they are applying for.
    1. Click Insert new question.
    2. For Question type, select **Choice**.
    3. For **Question subtype** , select **Record reference**.

 ![relative](./user_form/Question_subtype_select_Record_reference.png)

    4. Scroll down to the **Details** section.

    5. In the **Details** section, enter the following information: (💡 double-click, copy & paste into the form).

        Field Name                   | Field Value
        -----------------------------| --------------
        **Map to a specific field**  | We want to store that information so let's check the box
        **Table field**              | choose **Arrangement**
        **Question label**           | What type of Telework arrangement are you applying for? |
        **Mandatory**                | Checked |

        :::info
        Notice the **Question Preview** that shows what the question will look like to the user.
     ![relative](./user_form/question_Arrangement.png)
        :::

    6. Click on **Continue to Additional details →**.

    7. In the **Additional details** section, set the **Source Table** to the **Arrangement** table we imported earlier. 
     as options for this question.

    8. then Click on the **Annotation** tab.

     ![relative](./user_form/Click_on_the_Annotation_Tab.png)

    9. Today, the team is spending a lot of time correcting and manually re-routing applications due to people confusing the different types of Telework arrangement. Let's fix that.

    10. We'll use the  **Annotation**  tab to provide users with additional instructions for the question.

    11. Check the box **Show instructions**.

    12. Open the file: **telework form annotation.docx**.

    13. Copy all the text in the file ( ⌘ Cmd  or CTRL+A, CTRL+C )

    14. Paste it into the Annotation section of the Telework Form (⌘ Cmd  or CTRL+V ). You can choose to either keep or remove formatting.

    15. Click on the <span className="aes_button">Insert Question</span> button.

 ![relative](./user_form/add_Annotation_Complete.png)

20. Back to the main form, Click on the <span className="aes_button">Insert Question</span> button.

 ![relative](./user_form/Click_on_Insert_New_Question.png)

21. When users select the arrangement type **Situational** , we'll prompt them for the number of days per week. 

    a. So, let's go ahead and in the **Type** section set the following values:

    Field Name                    | Field Value
    -----------------------------| --------------
    Question type                | Text
    Question subtype             | Single line

 ![relative](./user_form/question_Text_Single_line.png)

    b. Scroll down to the **Details** section.

    c. In the **Details** section, enter the following information: (💡 double-click, copy & paste into the form).

    Field Name                   | Field Value
    -----------------------------| --------------
    Map to a specific field      | Checked
    Table field                  | Days per week
    Question label	             | Number of Days per Week?

    d. Click on **Additional details**.

 ![relative](./user_form/Question_Number_of_Days_per_Week.png)

    e. In the **Additional details** section, for the **Text validation** field, select **Number**.

    f. Click on the <span className="aes_button">Insert Question</span> button.

22. Back on the **Questions** page, we're going to define the dynamic behavior of this question based on the answer to the previous question.

    a. Click on the **behavior** icon.
    b. Click on the **Define new behavior** icon.

 ![relative](./user_form/Click_on_the_Define_new_behavior_icon.png)

    c. In the **Actions** tab, we'll specify the behavior we need:

    Field Name                     | Field Value
    ------------------------------ | --------------
    1) Make the question mandatory | Yes
    2) Make the question visible   | Yes

    3) Click on the **Conditions** tab.

 ![relative](./user_form/Select_the_conditions.png)

    d. In the **Conditions** tab,

    1) Set the filter to [arrangement] [is] [Situational Telework].

    2) Click on the <span className="aes_button">Add behavior</span> button.

 ![relative](./user_form/Define_Behavior_Condition.png)

23. Back on the **Questions** page, we're going to ask for the reason for Teleworking. Click on the <span className="aes_button">Insert Question</span> button.
    
    a. In the **Type** section set the following values:

    Field Name                    | Field Value
    -----------------------------| --------------
    Question type                | Choice
    Question subtype             | Dropdown (fixed values)

 ![relative](./images/Reason_ChoiceType.png)

    b. Scroll down to the **Details** section.

    c. In the **Details** section, enter the following information: (💡 Copy & paste into the form). 
    
    Field Name                   | Field Value
    -----------------------------| --------------
    **Map to a specific field**  | We want to store that information so let's check the box
    **Table field**              | choose **Reason**
    **Question label**           | What is the reason for Teleworking? |
    **Mandatory**                | Checked |
    
    d. Click on **Continue to Choices**. 

 ![relative](./images/Reason_Details.png)
  
    e. Check **Include none choice**. 

 ![relative](./images/Reason_IncludeNone.png)

    f. In the **Available choices** section, click the + to insert a new choice. Add the following choices. (💡 Type in the Display Name and the value is created for you).

    Display Name                 | Value
    -----------------------------| --------------
    Medical                      | medical
    Dependent Care               | dependent_care
    Reasonable Accommodation     | reasonable_accommodation

    f. Click on the <span className="aes_button">Insert Question</span> button.
    
 ![relative](./images/Reason_Choices.png)

24. Back to the questions page:

    a. Click on the <span className="aes_button">Save</span> button.

    b. Click on Preview.

 ![relative](./user_form/Define_Behavior_Save_Preview.png)

25. The **Preview** page allows to visualize what our form will look like in different experiences. (You can interact with the item but not submit it).

    | **Mobile** | **Portal** |
    | --- | --- |
    | ![relative](./user_form/Preview_Mobile.png) |  ![relative](./user_form/Preview_Portal.png)  |

26. Close the Preview by clicking on the X on the top right.

 ![relative](./user_form/Preview_Close.png)

    :::info
    If you want to preview your catalog item in the Virtual Agent you will need to activate the plugins_ _ **Glide Virtual Agent** and **Service Management Virtual Agent Topic Blocks**.
    Additional setup beyond that is required to get NLU to perform a topic conversation via the Virtual Agent.
    Feel free to experiment this after completing the entire lab.
    :::

27. Let's publish the form to the Service Portal

    a. Click on **Review and Submit**.
    b. Click on the <span className="aes_button">Submit</span> button.

![relative](./user_form/Click_on_Review_and_Submit.png)

28. Congratulations. The form is published on your development instance. Click on the <span className="aes_button">Return to my application</span> button.

 ![relative](./user_form/Return_to_my_app.png)

29. Let's see how users can easily find it on the Service Portal

30. Go to the tab with ServiceNow Admin Home page.

 ![relative](../go_to_the_Home_tab.png)

31. and then open the Service Portal
    a. Click All.
    b. Type **Portal**.
    c. Click on **Service Portal**.

 ![relative](../open_portal.png)

32. In the portal, search for "Telework"

 ![relative](./user_form/Sp_Search_for_Telework.png)

33. The catalog item is found.

34. Click on the item to Apply for Telework.

 ![relative](./user_form/Click_Apply_for_Telework.png)

35. In the **Details** section, enter the following information: (💡 double-click, copy & paste into the form).

    Field Name                     | Field Value
    ------------------------------ | --------------
    a) Who is this request for?   | David Loo
    b) When do you need this?     | This week
    c) What type of arrangement?  | Situational
    d) Number of days per week?   | 3

    e) Click on the <span className="aes_button">Submit</span> button.

 ![relative](./user_form/Form_Apply_for_Telework_Filled.png)

**Exercise Recap**

In this exercise, we learned how to use App Engine Studio (AES) to easily create customized Catalog Items that users can access in Service Portal and on mobile devices.

Our next exercise will focus on taking the building blocks created to this point and making them actionable to drive automation and process optimization