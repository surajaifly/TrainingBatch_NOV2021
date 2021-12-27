//Trigger Event:
//1. BEFORE and AFTER.
//BEFORE --> When we have to make changes in the Self-Recrod.
//AFTER --> When we have to make chages in the related recrods or Perform and Action.
//DML(Data Manipulation Language) Statements -> Insert, Update, and Delete.
//
//BEFORE Insert, AFTER Insert
//BEFORE Update, AFTER Update
//AFTER Delete
//AFTER Undelete

//Requirement: If "Mobile phone" is Empty, then copy the "Phone" into "Mobile Phone".

//TRIGGER BEST PRACTICES:
//1. Design the trigger logic so that it will work for the Bulk of Recrods.
//
trigger ContactTrigger on Contact (before insert, after insert) {
    //trigger.new --> List<sObject>, and this sObject, 
    //is changes one the Basis of SObject on which we had designed the trigger.
    //
    if(trigger.isBefore){
        for(Contact contactObj :trigger.new){
            /*****
             * BEFORE INSERT STARTS
            system.debug(contactObj.FirstName); 
            system.debug(contactObj.Phone); 
            system.debug(contactObj.MobilePhone); 
            if(contactObj.MobilePhone == NULL){
                contactObj.MobilePhone = contactObj.Phone;
            }
            contactObj.Department = 'IT';
            * BEFORE INSERT ENDS
            ***/
            system.debug(contactObj.FirstName); 
            system.debug(contactObj.Phone); 
            system.debug(contactObj.MobilePhone); 
            if(contactObj.MobilePhone == NULL){
                contactObj.MobilePhone = contactObj.Phone;
            }
            contactObj.Department = 'IT';
        }
        }else{
            //HERE We can design code for AFTER TRIGGER.
            //Requirement: Create a Task for the Contact 
            //if it mapped in the "Reports To" Field.
            //Since, we need to create a task record, then we have to go for AFTER TRIGGER.
            //WE ARE IN AFTER INSTANCE.
            //
            
            List<Task> taskList = new List<Task>();
            for(Contact contactObj :trigger.new){
                if(contactObj.ReportsToId != NULL){
                    //Create Task.
                    Task tkObj = new Task();
                    tkObj.subject = 'Contact Report To';
                    tkObj.WhoId = contactObj.ReportsToId;
                    tkObj.Status = 'Not-Started';
                    taskList.add(tkObj);
                }
            }
            
            INSERT taskList;
        }
}

/**********
 * ASSIGNMENT 1:
 * Design a trigger on the Opportunity Object say 
 * that when new Opportunity is created, 
 * "Next Step" field will populated with the value 
 * "Please Contact with Primary Contact."
 * 
 * 
 * ASSIGNMENT 2:
 * Create a Field on the Account called "Create Primary Contact"(checkbox).
 * Design a trigger on the Account such that, when a Account is inserted and 
 * "Create Primary Contact" == True, 
 * then Create a new Contact recrod 
 * with FirstName = 'Primary'
 * LastName = Account.Name,
 * AccountId = Account.Id
 * 
 */