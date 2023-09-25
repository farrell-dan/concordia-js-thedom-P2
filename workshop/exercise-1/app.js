// Preset values
const FROGS = 3;
//Exercise 1.1
for ( let count = 1 ; count <= FROGS ; count++) {
    let lane = document.createElement("li");
    lane.id = `lane-${count}`;
    
    const laneNumber = document.createElement("span");
    laneNumber.textContent = count ;
    lane.appendChild(laneNumber);
    
    const track = document.querySelector("ol");
    track.appendChild(lane);
} ;

//Exercise 1.2
const racers = [ ];

for (let frogs = 0; frogs < 3; frogs++ ) {
    racers.push(frogStable[frogs]);
}

//Exercise 1.3 & 1.4 & 1.5
racers.forEach((frog, count) => {
    const laneId = `lane-${count+1}`;
    let lane = document.getElementById(laneId);

    const frogElement = document.createElement("div");
    frogElement.classList.add("frog");
    frogElement.style.backgroundColor = frog.color;

    const frogNumber = document.createElement("span");
    frogNumber.classList.add("frog");
    frogNumber.textContent = `${frog.number}`;

    const frogName = document.createElement("span")
    frogName.classList.add("frog-name");
    frogName.textContent = `${frog.name}`;


    
    
    lane.appendChild(frogElement);
    frogElement.appendChild(frogNumber);
    lane.appendChild(frogName);

    frog.progress = 0;
    frog.lane = laneId
});

console.log(racers);

//Exercise 1.6
function racingFrog(racer) {
    console.log("racingFrog() ", racer)
    
    const trackWidth = track.offsetWidth;
    const frogElement = document.querySelector(`#${racer.lane} .frog`)
    
    const hop = setInterval(function (){
        const hopLength = Math.floor(((Math.random()* 100) / trackWidth)*100);
        
        racer.progress += hopLength;
        
        if (racer.progress >=100){
            racer.progress = 100;
            console.log( `${racer.name} has finished the race!`)
            clearInterval(hop);
        }else{
        console.log(`${racer.name} is at ${racer.progress}`)

        const newPosition = (racer.progress / 100) * (trackWidth - 50)
        frogElement.style.left = `${newPosition}px`

          }
    },1000);
}

racers.forEach((racer) =>{
    racingFrog(racer);
});
