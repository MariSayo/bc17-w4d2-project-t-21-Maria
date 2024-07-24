import activities from "../activities/activities.json" with {type : "json" };

export async function getActivities (){
    return activities
};

export async function createActivities(userInput){
    activities.push(userInput);
    return activities;
}