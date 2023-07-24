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
            // const bio = document.querySelector("bio");
            const astronautDiv = document.createElement('div');
            astronautDiv.classList.add('astronaut');

            const bioDiv = document.createElement('div');
            bioDiv.classList.add('bio');
             bioDiv.innerHTML = `<h3>${astronaut.firstName} ${astronaut.lastName}</h3>
             <ul>
                 <li>Hours in space: ${astronaut.hoursInSpace}</li>
                 <li>Active: ${astronaut.active}</li>
                 <li>Skills: ${astronaut.skills.join(', ')}</li>
             </ul>
             <img src="${astronaut.picture}">
         `;     
         astronautDiv.appendChild(bioDiv);
         container.appendChild(astronautDiv);
        });
    });
});