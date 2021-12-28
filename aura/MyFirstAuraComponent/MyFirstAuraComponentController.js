({
	myAction : function(component, event, helper) {
        var action = component.get("c.getContacts");
        action.setCallback(this, function(response){
            var state = response.getState();//SUCCESS, ERROR, and INCOMPLETE
            if (state === "SUCCESS") {
                var responseObj = response.getReturnValue();
                console.log('responseObj', responseObj);
            }
        });
        $A.enqueueAction(action);//Comeback to the Controller.
	}
})