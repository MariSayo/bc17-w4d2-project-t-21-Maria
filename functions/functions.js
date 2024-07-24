import activities from "../activities/activities.json" with {type : "json" };

export async function getActivities (){
    return activities
};