//Initializing Array
let myFavouritePlace = ["Biratnagar", "Lalitpur", "Patan", "Kathmandu","Pokhara","Palpa"];

//Function to add two favourite place to myFavouritePlace array
const addFavouriitePlace = (firstPlace, secondPlace) => {
    myFavouritePlace.push(firstPlace, secondPlace)
    console.log(myFavouritePlace)

}

//Calling the function to add 2 new places
addFavouriitePlace('Jhapa', 'Darjeeling');
// Returns : ['Biratnagar','Lalitpur','Patan','kathmandu', Pokhara','Palpa','Jhapa','Darjeeling']

//function to remove place from the array
const removePlace = place => {
    let placeIndex = myFavouritePlace.indexOf(place);
    myFavouritePlace.splice(placeIndex, 1);
    console.log(myFavouritePlace)
}

//Calling remove function to remove Kathmandu from the myFavouritePlace array
removePlace('Kathmandu');
// Returns : ['Biratnagar','Lalitpur','Patan','Pokhara','Palpa','Jhapa','Darjeeling']; =>  'Kathmandu' is removed from array