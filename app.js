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

        
        // make a map of each countries common name from the data array
        // the common name is down 2 levels so have to map twice
        // collect all name objects
        const countriesNames = countriesData.map((country) => country.name);
        // collect common name from within name 
        const countriesCommon = countriesNames.map((countryName) => countryName.common); 
        
        // want a list of items 
        // will need to loop through all items and append common name to list
        // this will find the first list and as I only have 1 this if fine
        const countriesUl = document.querySelector("ul")
        countriesCommon.forEach((countryCommonName) => {
            // make a list element 
            const nameLi = document.createElement("Li");
            // set content to country name 
            nameLi.textContent = countryCommonName;
            countriesUl.appendChild(nameLi);
        });

        //Extension - attach flag
        const countriesFlag = countriesData.map((flag) => country.flag);
        countriesFlag.forEach((countriesFlag) => {
            countriesFlag.appendChild(nameLi);
        });
    };
    
    // only do this when button is clicked
    const button= document.querySelector("#countries-button");
    button.addEventListener("click", getCountries); 

});

