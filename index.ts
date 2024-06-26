// Creating a guest list array
let guestList = ["Umer","Mubeen","Huzaifa","Areeb"]

// Making variable for those guest who cant come
let dontCome = guestList[0];

// Print the name of guest who cant come
console.log(dontCome,"don't want to come");

// Add or remove values FRom guest list array
guestList.splice(0,1,"Rayyan")

// Message for bigger table
console.log("Good News ! We have found a bigger table for dinner.");

// Adding a new guest at Starting index of array
guestList.unshift("Ali")

// Adding a new guest at ending index of array
guestList.push("Rafay")

//get a middle index of our guest list  array
let middleIndex = Math.floor(guestList.length / 2)

//adding a new guest to middle of index array
guestList.splice(middleIndex,0,"Osama")

//Print message for updated list
console.log("Updated list of our guests");

// Sending a invitation message to our guests one by one with their name 
guestList.forEach(oneGuest => console.log(`hello ${oneGuest}, Would you like to dinner with me? `));

// Informaing that only two guest can be invited for dinner
console.log("Unfortunately, The dinner table wont arrive on time, so i can only invite two guests to dinner with me ");

//Using while loop to remove guests from the until two names remains
while(guestList.length > 2){
    let removeGuests = guestList.pop();
    console.log(`sorry ${removeGuests} I cant invite you to dinner`);
};
// Sending a invitations to the last two guests on the list
console.log("invitation fpr the last two guest");

guestList.forEach(lastTwo => console.log(`Luckly ${lastTwo} you are still invites to the dinner`));

//Removing last two guests from the the list

guestList.pop();
guestList.pop();

console.log("Empty list" , guestList );

