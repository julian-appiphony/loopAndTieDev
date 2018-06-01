({
    calculateProgressPercent: function(component, event, helper){
        var steps = component.get('v.steps');
        var totalSteps = steps.length;
        var activeStep = component.get('v.activeStep');
        var progressPercent = (100 / (totalSteps - 1)) * activeStep;
        component.set('v.progressPercent', progressPercent <= 100 ? progressPercent : 100);
    }
})