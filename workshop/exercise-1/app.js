// Preset values
const FROGS = 3;

for ( let count = 1 ; count <= FROGS ; count++) {
    
    let lane = document.createElement("li");

    lane.id = `lane-${count}`;
    
    const laneNumber = document.createElement("span");
    laneNumber.textContent = count ;
    lane.appendChild(laneNumber);
    
    const track = document.querySelector("ol");
    track.appendChild(lane);
} ;

const racers = [ ];

for (let frogs = 0; frogs < 3; frogs++ ) {
    racers.push(frogStable[frogs]);
}

racers.forEach((frog, count) => {
    const laneId = `lane-${count+1}`;
    let lane = document.getElementById(laneId);

    const frogElement = document.createElement("div");
    frogElement.classList.add("frog");
    frogElement.style.backgroundColor = frog.color;

    const frogNumber = document.createElement("span");
    frogNumber.textContent = `${frog.number}`;

    const frogName = document.createElement("span")
    frogName.classList.add("frog-name");
    frogName.textContent = `${frog.name}`;


    frogElement.appendChild(frogNumber);
    
    lane.appendChild(frogElement);
    lane.appendChild(frogName);

    frog.progress = 0;
    frog.lane = laneId
});

console.log(racers);

function racingFrog(racer) {
    // console.log("racingFrog() ", racer)
}

racers.forEach((racer) =>{
    const trackWidth = track.offsetWidth;
    
    const hop = setInterval(function (){
        const hopLength = Math.floor(((Math.random()* 100) / trackWidth)*100);
        
        racer.progress += hopLength;
        
        if (racer.progress >=100){
            racer.progress = 100;
            console.log( `${racer.name} has finished the race!`)
            clearInterval(hop);
        }else{
        console.log(`${racer.name} is at ${racer.progress}`)
          }
    },1000);
});
