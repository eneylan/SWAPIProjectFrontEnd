

document.getElementById("button").onclick = async function() {
    event.preventDefault();
    const name = document.getElementById("inputName").value;
    const faction = document.getElementById("inputFaction").options[document.getElementById("inputFaction").selectedIndex].text;
    const race = document.getElementById("inputRace").options[document.getElementById("inputRace").selectedIndex].text;

    const apiResponse = `https://starwarsethan1-gefqg0hdb8gpcph8.eastus-01.azurewebsites.net/SWAPI/storeData?name=${name}&faction=${faction}&race=${race}&tableName=Characters`

    const response = await fetch(apiResponse);

    console.log(response);
    if (response == "exceptionrc") {
        document.getElementById("returnField").textContent = "Repeated character in database, data not accepted";
    } else {
        document.getElementById("returnField").textContent = "Character Added To DataBase";
    }

    
}

document.getElementById("resetButton").onclick = async function() {
    const apiResponse = `https://starwarsethan1-gefqg0hdb8gpcph8.eastus-01.azurewebsites.net/SWAPI/reset`

    const response = await fetch(apiResponse);

    document.getElementById("returnField").textContent = "Database has been reset";
}



