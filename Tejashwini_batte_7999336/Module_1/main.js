console.log("Welcome to the Community Portal");
alert("Page Loaded Successfully");
const eventName = "Plantation Drive";
const eventDate = "10 June 2026";
let seats = 50;
console.log(`Event: ${eventName}`);
console.log(`Date: ${eventDate}`);
console.log(`Available Seats: ${seats}`);
seats--;
console.log(`Seats After Registration: ${seats}`);
const events = [
    {
        name: "Plantation Drive",
        seats: 10,
        upcoming: true
    },
    {
        name: "Cooking Workshop",
        seats: 0,
        upcoming: true
    },
    {
        name: "Old Music Event",
        seats: 20,
        upcoming: false
    }
];
events.forEach(function(event){
    if(event.upcoming && event.seats > 0){
        console.log(`${event.name} is available`);
    }
    else{
        console.log(`${event.name} is unavailable`);
    }
});
try{
    let registration = seats--;
    console.log("Registration Successful");
}
catch(error){
    console.log("Error in registration");
}
function videoReady(){
    document.getElementById("videoMessage").innerHTML ="Video ready to play";
}
const eventDropdown=document.getElementById("eventType");
function savePreference(){
    let selectedEvent=document.getElementById("eventType").value;
    localStorage.setItem(
        "event",selectedEvent
    )
    alert("Preference Saved");
}
window.onload = function(){
    let savedEvent=localStorage.getItem("event");
    if(savedEvent){
        document.getElementById("eventType").value=savedEvent;
    }
}
function findLocation(){
    navigator.geolocation.getCurrentPosition(
        showPosition,
        showError
    );
}
function showPosition(position){
    document.getElementById("location").innerHTML ="Latitude: " +position.coords.latitude +"<br>Longitude: " +position.coords.longitude;
}
function showError(){
    alert("Location access denied");
}
function addEvent(name){
    console.log(name + " Added");
}
addEvent("Music Event");
function registerUser(){
    console.log("User Registered");
}
registerUser();
function filterEventsByCategory(category){
    console.log(category);
}
filterEventsByCategory("Music");
function counter(){
    let count = 0;
    return function(){
        count++;
        console.log(count);
    };
}
let total = counter();
total();
function Event(name){
    this.name = name;
}
let event1 = new Event("Cooking");
console.log(event1);
Event.prototype.checkAvailability = function(){
    console.log("Seats Available");
};
event1.checkAvailability();
events.push({
    name:"Dance Event"
});
let musicEvents = events.filter(function(event){
    return event.category === "Music";
});
console.log(musicEvents);
let eventNames = events.map(function(event){
    return event.name;
});
console.log(eventNames);