//an array of objects, each rep a freelancer.
//Every object has a name, price, and occupation
//this is where we are storing the freelancer data
const freelancersArray = [
    {name: "Alexandra", price: 30, occupation: "stylist"},
    {name: "Paul", price: 25, occupation: "furniture handler"},
    {name: "Sasha", price:40, occupation: "art installer"},
    {name: "Kamila", price:50, occupation:"translator"},
    {name: "Nico", price:60, occupation:"photographer"},
    {name:"Katie", price: 40, occupation:"makeup artist"},
    {name: "Bruno", price:60, occupation:"private chef"},
    {name:"Emmy", price:50, occupation:"writer"},
];

//This is referencing to HTML elements by their IDs
//These elements will be used to display freelancer information on the body of HTML page
function displayFreelancers(){
    const freelancersList = document.getElementById("freelancers");
    const averagePriceElement= document.getElementById("averagePrice");
//This is clearing the content inside the "freelancers" element
//essentially erasing the old list of freelancers so we can show a new one
//ensures that you always display the current list of freelancers without any remnants of previous data
    while (freelancersList.firstChild) {
        freelancersList.removeChild(freelancersList.firstChild);
    }
    //this initializes a variable to keep track of the total price of all freelancers
    let totalPrice=0;
    //this is looping through each freelancer and their index in the array
    freelancersArray.forEach((freelancer) =>{
        //this is creating a list item (a new item in the list)
        const listItem = document.createElement("li");
        //this is setting the text content of the list items to show details of each
        //freelancer, like their name, occupation, and hourly rate
        listItem.textContent= `${freelancer.name} - ${freelancer.occupation}, hourly rate: $${freelancer.price}`;
        //this adds the list item to the "freelancers" list, like adding a new entry to the list of freelancers
        freelancersList.appendChild(listItem);
        //this is adding the freelancers price to the total price
        totalPrice+=freelancer.price;
    });
    //this calculates the average hourly rate of all the freelancers 
    //by diving the total price by the number of freelancers
    const averagePrice=totalPrice/freelancersArray.length;
    //this updates the text content of "averagePrice" element
    //showing the calculated average hourly rate with two decimal places.
    averagePriceElement.textContent = `Average hourly rate : $${averagePrice.toFixed(2)}`;
}
// stops the list at 36 (because 1=0 in context of index)
const maxFreelancers = 35;
// creates a function with options for random picks of names, occupations 
function generatedFreelancer() {
    //if the array is greater than or equal to my maxFreelancers, then stop the list
    if (freelancersArray.length<= maxFreelancers) {
    names =["Alice", "Agatha", "Ashley", "Eve", "Steve", "George", "Karma", "Plato", "Rahul", "Jimena", "Frank", "Madeline", "Elise"];
    occupations =["dancer", "painter", "chef", "dogwalker", "builder", "plumber", "electrician", "musician"];
    // picks random name from the new array of names above
    const randomName = names[Math.floor(Math.random() * names.length)];
    //picks random occupation from new array of occupations
    const randomOccupations= occupations[Math.floor(Math.random()*occupations.length)];
    //generates a random price between 50-79
    const randomPrice = Math.floor(Math.random()*50) +30;
    // shows how the new random generated information will be displayed and assigns 
    //name, occupation, and price to one random name as we displayed in new array
    const randomFreelancer = {
        name: randomName,
        occupation: randomOccupations,
        price: randomPrice,
    };
    //pushes random freelancer array at the end of the old established array, then displays it
    freelancersArray.push (randomFreelancer);
    // displays 
    displayFreelancers();
}
}
//generates a new random freelancer every 3 seconds
const addFreelancerIntervalId = setInterval(generatedFreelancer, 3000);
//displays original premade array 
displayFreelancers();