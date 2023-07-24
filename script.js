window.addEventListener("load", function() {
   fetch("https://handlers.education.launchcode.org/static/astronauts.json").then(function (response) {
        return response.json();
    }).then(function (data){
        // console.log(data);
        const container = document.getElementById("container");
        // const astronaut = document.querySelector("astronaut");
        
        data.forEach(astronaut => {
            // console.log(astronaut);        
            // console.log(astronaut.firstName);
            container.innerHTML += `
            <div id="container">
            <div class="astronaut">
            <div class="bio">
            <h3>${astronaut.firstName} ${astronaut.lastName}</h3>
            <ul>
            <li>Hours in space: ${astronaut.hoursInSpace} </li>
            <li>Active: ${astronaut.active}</li>
            <li>Skills: ${astronaut.skills}</li>
            </ul>
            </div>
            <img src="${astronaut.picture}" class="avatar"/>
            </div>
            </div>
            `;
        });
    


    });

   
});