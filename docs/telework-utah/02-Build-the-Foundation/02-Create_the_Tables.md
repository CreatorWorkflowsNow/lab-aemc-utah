---
layout: default
title: Create the Tables
parent: Part 1. Build the Foundation
nav_order: 2
---

# Create the Tables with Data

We will create the core tables for our application. To create a table in App Engine Studio:

1. Click the  **Add**  icon (⨁ Add) for _Data_ on the _App Home_ tab.

 ![relative](images/data_add_icon.png)

2. On the _How do you want to add data to your app?_ screen, select the **Import a spreadsheet** tile.
   
3. Click on the <span className="aes_button">Continue</span> button.

 ![relative](images/AddData_ImportASpreadsheet.png)

4. On the _Choose a spreadsheet to import from_ screen, click the  **Drag and drop or browse to upload spreadsheet** link.

5. Browse and select the  **Telework Data.xlsx**  file you downloaded.

6. Click on the <span className="aes_button">Continue</span> button.
   
 ![relative](images/AddData_ChooseASpreadsheet.png)

7. Our spreadsheet has multiple sheets. **We only need the first one** "Telework Arrangement".

8. Select ☑ **Import spreadsheet data** in the "Telework Arrangement" box.

9.  Click on **Convert to table** to the right of the Telework Arrangement Sheet name.

 ![relative](images/data_Convert_to_table.png)

10. We will create a new table in our app to hold the Arrangement data. Select the **Create new table** tile. 
11. Click on the <span className="aes_button">Continue</span> button.
 ![relative](images/AddData-CreateNewTable.png)

:::tip
We need to set what value to display when these records will be referenced.
:::

12. Let's set the display value so that _Code_ is displayed when other tables reference this table.
    a. Click the Expand/Collapse icon (⌄) to see advanced configuration options.
    b. Check the **Display** checkbox.
    c. Click on the <span className="aes_button">Continue</span> button.

 ![relative](images/data_Check_Display.png)

13. Set the table label to **Arrangement**. The table name will auto populate.
14. Click on the <span className="aes_button">Continue</span> button.

 ![relative](images/data_Set_the_table_label.png)

15. For the **admin** role, click the **All** checkbox

16. For the **user** role, click the **All** checkbox and then remove the **Delete** permission.

17. Click on the <span className="aes_button">Continue</span> button.
     
  ![relative](images/data_add_table_permissions.png)

18. A loading screen will appear while the table is being created. When it completes, click <span className="aes_button">Done</span>.

19. We haven't converted all the sheets in the spreadsheets, so we'll see this message pop up.

20. Click <span className="aes_button">Yes, leave</span>.
    
 ![relative](images/data_leave_without_converting_other_sheets.png)

21. Let's add the Telework Case table. Again, click the  **Add**  icon (⨁ Add) for _Data_ on the _App Home_ tab.

 ![relative](images/AddData-CreateCaseTable.png)

22. On the _How do you want to add data to your app?_ screen, select the **Import a spreadsheet** tile.

23. Click on the <span className="aes_button">Continue</span> button.
    
 ![relative](images/AddData_ImportASpreadsheet.png)

24. On the _Choose a spreadsheet to import from_ screen, click the  **Drag and drop or browse to upload spreadsheet** link.

25. Browse and select the  **Telework Cases.xlsx**  file you downloaded.

26. Select ☑ **Import spreadsheet data**.

27. Click on the <span className="aes_button">Continue</span> button.
 ![relative](images/AddData-ChooseSpreadsheetCase.png)

28. This time on the _Where do you want to import your file into?_ screen, select the **Create from an extensible table** tile.

29. Click on the <span className="aes_button">Continue</span> button.
    
 ![relative](images/AddData-CreateFromExt.png)

30. On the _Which table do you want to use?_ screen, select the **Task** table.

31. Click on the <span className="aes_button">Continue</span> button.

 ![relative](images/AddData-WhichTable.png)

32. Set the table label to **Telework Case**. The table name will auto populate.

33. Give the table the following properties

    Field Name      | Field Value
    ----------------| --------------
    (1) Table label | Telework Case
    (2) Auto number | Checked ☑
    (3) Prefix      | TLW
    
34. Click on the <span className="aes_button">Continue</span> button.
    
 ![relative](images/data_new_table_properties.png)

35. For the **admin** role, click the **All** checkbox.

36. For the **user** role, click the **All** checkbox and then remove the **Delete** permission.

37. Click on the <span className="aes_button">Continue</span> button.
  ![relative](images/data_add_table_permissions.png)

38. On the _Great! Now your table is ready for data_ screen, select the <span className="aes_button">Continue</span> button.

 ![relative](images/AddData-TableReadyForData.png)

39. A loading screen will appear: _Sit tight while we create data mapping instance for table Arrangement_.

40. Read the help pop-up and click <span className="aes_button">Next</span> until <span className="aes_button">Done</span>.

 ![relative](images/AddData_MapTeleworkCase.png)

41. Notice the fields have already been auto-mapped, but some are not correct. Clear out the _Transfer reason_ value.

 ![relative](images/AddData_ClearTransferReason.png)

42. Click on the Add Fields link button at the top.

 ![relative](images/AddData_AddFields.png)

43. Hover over the row and edit the Reason field by clicking on the pencil icon.

 ![relative](images/AddData_EditReason.png)
    
44. In the **Field type** section select **Choice** then click the <span className="aes_button">Update field</span> button. The choices will be added for you based on the spreadsheet data!
  
 ![relative](images/AddData_UpdateReason.png)

45. Days per week is ok as an integer.

46. Days per week is ok as an integer, but Edit the Arrangment field.
    1. Field type: **Reference**
    2. Reference table: **Arrangement**
    3. Click the <span className="aes_button">Update field</span> button.
  
 ![relative](images/AddData-EditArrangement.png)

47.   Lets add the new fields to our table by clicking the <span className="aes_button">Add fields</span> button. 

 ![relative](images/AddData-AddFieldsDone.png)

48. Clear the Description, Opened, and Transfer reason values. Click on the <span className="aes_button">Continue</span> button.

 ![relative](images/AddData_RemoveOpened.png)

49. Your table is now ready. Click the <span className="aes_button">Edit table</span> button. Click through all the helper screens.

 ![relative](images/AddData-TableisReady.png)

50. Click the <span className="aes_button">Next</span> button on the Welcome to Table builder helper and other popups.
 ![relative](images/AddData_Welcome.png)  

:::info
We can see all the fields that our table inherited from the Task table, making building applications faster.
:::

51. We have all the data elements we need to manage our use case. Click the **Filter options** button and then select **Hide extended fields**. You should have 3 fields as below:

 ![relative](images/create_fields_completed.png)

**Exercise Recap**
Congratulations, you've built the first tables in your solution.

In this exercise, we learned how to create a new application and map out the data elements important to enable our business process.

We learned to use the Table Builder to add and configure columns including Reference fields and Choice lists.

We were able to complete all these tasks using simple point-and-click administration and without requiring specialized application or database knowledge.

**Next we'll take a look at the list & form views that have been generated for our table and adjust the layouts.**