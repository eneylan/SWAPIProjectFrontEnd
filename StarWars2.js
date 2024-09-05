document.getElementById("dataDisplay").onclick = async function() {
    console.log("gelo")
    event.preventDefault();
    var race = document.getElementById("inputRace2").options[document.getElementById("inputRace2").selectedIndex].text;
    var faction = document.getElementById("inputFaction2").options[document.getElementById("inputFaction2").selectedIndex].text;
    if (race == "Race" || race == "None") {
        race = "null";
    }
    if (faction == "Faction" || faction == "None") {
        faction = "null";
    }
    console.log(race);
    console.log(faction);

    const apiResponse = `https://starwarsethan1-gefqg0hdb8gpcph8.eastus-01.azurewebsites.net/SWAPI/display?faction=${faction}&race=${race}`

    var response = await fetch(apiResponse);

    const imagesHolder = document.getElementById("imagesHold");
    const data = await response.json();
    for (var s of data) {
        s = s.replace(/\s+/g, ''); 
        console.log(s);
        var image = new Image(50, 50);
        //image.id = s;

        image.src = `https://starwarsethan1-gefqg0hdb8gpcph8.eastus-01.azurewebsites.net/SWAPI/displayImages?path=${s}.jpg`;
         //const imageDisplay = document.createElement("img");
         //imageDisplay.setAttribute=(`src`, `https://starwarsethan1-gefqg0hdb8gpcph8.eastus-01.azurewebsites.net/SWAPI/display?path=${s}.jpg`);
        imagesHolder.appendChild(image);
        //loadImage(`https://starwarsethan1-gefqg0hdb8gpcph8.eastus-01.azurewebsites.net/SWAPI/displayImages?path=${s}.jpg`, image.id);
    }

    

    //document.getElementById("headerLogo").innerHTML = "<img src=\"" + `https://starwarsethan1-gefqg0hdb8gpcph8.eastus-01.azurewebsites.net/SWAPI/display?path=${s}` + ">";
    //document.getElementById("DataFinal").textContent = await response.text();
}

function loadImage(url, id) {
        console.log(url+"   " + id);

        var xhr = new XMLHttpRequest();
        xhr.onload = function (e) {
            console.log(xhr.status);
            if (xhr.status < 400) {
                const src = URL.createObjectURL(xhr.response);
                console.log(src);
                document.getElementById(id).src = src;

            };
        };
        xhr.open("GET", url, true);
        xhr.responseType = 'blob';
        xhr.send();
    
}
