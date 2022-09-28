document.addEventListener("DOMContentLoaded", () => {

    //check dom was loaded correctly
    console.log("DOM loaded");
  
   

    const getCountries = async () => {
        
        // save as variable response
        const response = await fetch("https://restcountries.com/v3.1/all");
        // save json into variable jsonData
        // the data is an array of objects
        const jsonData = await response.json();
        const countriesData = jsonData;
        // make a map of each countries  from the data array
        const countriesNames = countriesData.map((country) => country.name);
        console.log(countriesNames);

        // want a list of items 
        // will need to loop through all items and append to list
        // this will find the first list and as I only have 1 this if fine
        const countriesUl = document.querySelector("ul")
        countriesNames.forEach((countryName) => {
            // make a list element 
            const nameLi = document.createElement("Li");
            // set content to country name 
            nameLi.textContent = countryName;
            countriesUl.appendChild(nameLi);
        });

    }
    
    // only do this when button is clicked
    const button= document.querySelector("#countries-button");
    button.addEventListener("click", getCountries); 

});

