import activities from "../activities/activities.json" with {type : "json" };

export async function getActivities (){
    return activities
};

export async function createActivities(userInput){
    activities.push(userInput);
    return activities;
}

export async function replaceActivity(requestId , newActivity) {
        const index = activities.findIndex(({ id }) => id === requestId);
        console.log(index, newActivity);
        if (index === -1) {
            throw new Error(`No activity with ID ${requestId} found.`);
          }
        activities[index] = newActivity;
        return activities;
      }