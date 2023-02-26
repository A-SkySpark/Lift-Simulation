let floors = prompt("Enter the number of FLOORS you want.");
let lifts = prompt("Enter the number of LIFTS you want");

let container = document.getElementById("container");



for(let i = floors ; i > 0 ; i--){

        //creating the Buttons for calling the lift
        let buttonPalette = document.createElement('div');
        buttonPalette.classList.add("buttonPalette");

        let buttonUp = document.createElement('button');
        var upLogo = document.createElement('img'); upLogo.src = './Images/upBig.svg';
        upLogo.classList.add('arrow');
        buttonUp.appendChild(upLogo);
        
        buttonUp.classList.add('btn');
        buttonUp.classList.add('up');
        let buttonDown = document.createElement('button');
        let downLogo = document.createElement('img'); downLogo.src = './Images/downBig.svg';
        buttonDown.appendChild(downLogo);
        buttonDown.classList.add('btn');
        buttonDown.classList.add('down');

        let floorId = document.createElement('floorId');
        floorId.classList.add('floorId');
        let floorNum = document.createTextNode(''+i)
        floorId.appendChild(floorNum);

       
        buttonPalette.appendChild(buttonUp);
        buttonPalette.appendChild(floorId);
        buttonPalette.appendChild(buttonDown);
        
       
        

        //creating the Space for Lifts - 'lift-duct'
        let liftDuct = document.createElement('div');
        liftDuct.classList.add("liftDuct");
        
        
        //creating the floor div (holds buttons and liftDuct)
        let floorElement = document.createElement('div');
        floorElement.classList.add("floor");

        
        floorElement.appendChild(buttonPalette);
        floorElement.appendChild(liftDuct);


        container.appendChild(floorElement);

        //creating lift

        if(i==1){
            
            for(let i = 0 ; i < lifts ; i++){
                let lift = document.createElement('div');
                lift.classList.add('lift');
                

                let liftDoorLeft = document.createElement('div');
                liftDoorLeft.classList.add('lift-door-left');
                let liftDoorRight = document.createElement('div');
                liftDoorRight.classList.add('lift-door-right');
                lift.appendChild(liftDoorLeft);
                lift.appendChild(liftDoorRight);

                liftDuct.appendChild(lift);
            }
        }
        // let divElementText = document.createTextNode('floor'+i)
        // divElement.appendChild(divElementText)
    }