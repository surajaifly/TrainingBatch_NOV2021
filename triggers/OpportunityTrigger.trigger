//TRIGGER BEST PRACTICES:
//1. Design the trigger logic so that it will work for the Bulk of Recrods.
//
trigger OpportunityTrigger on Opportunity (before update) {
    for(Opportunity opp : trigger.new){
        if(opp.StageName == 'Closed Lost'){
            if(opp.NextStep == NULL){
                opp.nextStep.addError('Please add the Next Step.');
            }
        }
    }
}