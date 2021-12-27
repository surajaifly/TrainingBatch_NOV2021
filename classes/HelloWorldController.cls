public with sharing class HelloWorldController {

    @AuraEnabled(cacheable = true)
    public static string callApex(String textVar){
        try {
            return 'Call Processed from APEX.' + textVar;
        } catch (Exception e) {
            throw new AuraHandledException(e.getMessage());
        }
    }
}