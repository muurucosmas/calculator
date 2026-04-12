//define the problem
/*1.task fetch and display live data on a webpage 
  2.retrieve data from an external API and update the content dynamically without reloading the page 
  3.challenge -manual data updates are ineffieient,slow and hard to manage for real-time applications
  4.solutions use fetch()*/
//design&develop the code -identify data requirements
//determine the data needed -identify the data you want to fetch(e.g a list of astronauts currently in space)
//api endpoint
//use a public api like
//initiate fetch()request
const addkey = "http://api.open-notify.org/astros.json";
const apiRequest = fetch(addkey); //sends arequest to the specified url or end point

//receive and process response

apiRequest
  .then((response) => response.json())//The first .then() method processes the response by converting it to JSON.
  .then((data) => displayAstro(data))//The second .then() method calls the returned data to the displayAstro.
  .catch((error) => {
    console.error("error fetching data :", error);
    //handle fetch errors
  }); 


//update the dom
//select the DOM Element -chose where to display the data
let people = [
  {
    name: cosmas,
  },
];
function displayAstro(data) {
  const listAstro = document.getElementById("astronaut-list");
  data.people.forEach((people) => {
    const liAstro = document.createElement("li");
    liAstro.innerText = people.name;
    listAstro.appendChild(liAstro);
  });
}

//this allows you to dynamically add content to the web page

//display results dynamically

//test &refine -edge cases-tools&techniques
// jest -test the fetch()request and response handling
//eslint -enforce consistent code style and catch syntax errors
//console logging debug the API response and track data processing
//error handling -verify the app handles network failures and api errors gracefully

//document &maintain
//purpose unsure API-fetching code is clear and maintainable
//version control use git to track changes and collaborate 
//comments add inline notes explaining fetch()requests and error handling 
//best practices -maintain consistency and catch errors using eslint 
