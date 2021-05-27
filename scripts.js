// Write your JavaScript code here.
// Remember to pay attention to page loading!


function init () {
    const missionAbort = document.getElementById("missionAbort");
    const takeOff = document.getElementById("takeoff");
    const landButton = document.getElementById("landing"); 
    const paragraph = document.getElementById("flightStatus");
    const rocket = document.getElementById("rocket");
    var height1 = 0;
    //var imgObj = null;
//imgObj = document.getElementById("rocket");
    rocket.style.position = "relative";
    rocket.style.top = '0px';
    rocket.style.left = '0px';
    //const shuttle = document.getElementById("shuttleBackground");
    //console.log("Page loaded");
    
    // function liftOff() {
    //     document.getElementById("statusReport").innerHTML = "Houston, we have liftoff!.";

    takeOff.addEventListener("click",function(event)
      {
        if (window.confirm("Confirm that the shuttle is ready for takeoff."))
        {
            document.getElementById("flightStatus").innerHTML = "Shuttle in flight.";
            document.getElementById("shuttleBackground").style.background = "blue";
            document.getElementById("spaceShuttleHeight").innerText = "10,000 ";
            
        }
      });

      landButton.addEventListener("click",function(event)
      {
            window.alert("The shuttle is landing. Landing gear engaged.");
            document.getElementById("flightStatus").innerHTML = "The shuttle has landed.";
            document.getElementById("shuttleBackground").style.background = "green";
            document.getElementById("spaceShuttleHeight").innerText = " 0 ";
            
        });

      missionAbort.addEventListener("click",function(event)
      {
        if (window.confirm("Confirm that you want to abort the mission."))
        {
            document.getElementById("flightStatus").innerHTML = "Mission aborted.";
            document.getElementById("shuttleBackground").style.background = "green";
            document.getElementById("spaceShuttleHeight").innerText = " 0 ";
            
        }
      });

      document.getElementById("up").addEventListener("click",function(event)
        {
            rocket.style.top = parseInt(rocket.style.top) -10 +'px';
            document.getElementById("shuttleBackground").style.background = "green";
            height1 += 10000;
            document.getElementById("spaceShuttleHeight").innerText  = height1;
        });

        document.getElementById("down").addEventListener("click",function(event)
        {
            
            rocket.style.top = parseInt(rocket.style.top) +10 +'px';
            document.getElementById("shuttleBackground").style.background = "green";
            height1 -= 10000;
            document.getElementById("spaceShuttleHeight").innerText = height1
           
        });

        document.getElementById("left").addEventListener("click",function(event)
        {
            rocket.style.left = parseInt(rocket.style.left) - 10 +'px';
            document.getElementById("shuttleBackground").style.background = "green";
           
        });

        document.getElementById("right").addEventListener("click",function(event)
        {
            rocket.style.left = parseInt(rocket.style.left) + 10 +'px';
            document.getElementById("shuttleBackground").style.background = "green";
           
        });

}

window.addEventListener("load", init);