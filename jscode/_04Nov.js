



function checkDrivingLicence(age , drivingTest){
    

    console.log("Checking Eligiblity for Driving Licence");

    if(age >= 18){
        console.log("Eligible for Driving licence , Scheduling for Driving Test");
        if(drivingTest){
            console.log(`Test Cleared , Collect the Driving Licence`);
        }else{
            console.log(`Test Failed , Apply Next Month`)
        }
    }else{
        console.log("You are UnderAge , Apply on your 18th Birthday");
    }
}

checkDrivingLicence(10, true);



