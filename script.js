window.addEventListener("load", function() {
   fetch("https://handlers.education.launchcode.org/static/astronauts.json").then(function (response) {
        return response.json();
    }).then(function (data){
        // console.log(data);
        const container = document.getElementById("container");
        // const astronaut = document.querySelector("astronaut");
        // const bio = document.querySelector("bio");
    
        data.forEach(astronaut => {
            // console.log(astronaut);        
            // console.log(astronaut.firstName);
                    
        });
    


    });

   
});