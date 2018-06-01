({
    init : function(component, event, helper){
        var steps = [
            {label: "Select Recipients"},
            {label: "Select Gift Collection"},
            {label: "Customize Message"},
            {label: "Review  Send"}
        ]
        component.set('v.steps', steps);
        component.set('v.totalSteps', steps.length);
    },
    handleNextClick: function(component, event, helper) {
        var activeStep = component.get('v.activeStep');
        var steps = component.get('v.steps');
        var totalSteps = steps.length;

        if(activeStep === 3) {
            //will send gift object to loop&Tie to create record
        } else {
            component.set('v.activeStep', ++activeStep);
            helper.calculateProgressPercent(component, helper);
        };
    },
    handlePreviousClick: function(component, event, helper) {
        var activeStep = component.get('v.activeStep');
        var steps = component.get('v.steps');
        var totalSteps = steps.length;

        if(activeStep === 0) {
            var navEvt = $A.get('e.force:navigateToSObject');
            var recordId = component.get('v.recordId');
            navEvt.setParams({
                "recordId": recordId 
            })
            navEvt.fire()
        } else {
            component.set('v.activeStep', --activeStep);
            helper.calculateProgressPercent(component, helper);
        };
    }

})