const INPUTS = document.querySelectorAll("main input");
const S_BUTTON = document.querySelector(".switch");
const P_RIGHT = document.querySelectorAll(".text-right");
const P_LEFT = document.querySelectorAll(".text-left");

let first = true;

    INPUTS.forEach(input => {
        input.addEventListener("input", ()=>{
            
            if(first == true){

                //Km -- Mile
                let mile;
                mile = (0.621371192 * INPUTS[0].value); 
                INPUTS[1].value = mile.toFixed(4); 
            
                //Kg -- Funt
                let funt;
                funt = (2.20462262 * INPUTS[2].value);
                INPUTS[3].value = funt.toFixed(2);

                //C -- K
                let kelviny;
                kelviny = parseInt(INPUTS[4].value) + 273.15;
                INPUTS[5].value = kelviny;
            }else{

                //Mile -- Km
                let km;
                km = (1.60934 * INPUTS[1].value);
                INPUTS[0].value = km.toFixed(2);

                //Funt -- Kg
                let kg;
                kg = (0.4535923 * INPUTS[3].value);
                INPUTS[2].value = kg.toFixed(2);

                //K -- C 
                let celsjusz;
                celsjusz = parseInt(INPUTS[5].value) - 273.15;
                INPUTS[4].value = celsjusz.toFixed(2);
            }

        })
    })

S_BUTTON.addEventListener("click", ()=>{
    if(first == true){
        first = false;

        P_LEFT.forEach(l_button => {
            l_button.style.animationName = "switchAnimation";
            l_button.style.animationDuration = "2s";
            l_button.classList.remove("text-left");
            l_button.classList.add("text-right");
        })
        P_RIGHT.forEach(p_button => {
            p_button.style.animationName = "switchAnimation";
            p_button.style.animationDuration = "2s";
            p_button.classList.remove("text-right");
            p_button.classList.add("text-left");
        })

        INPUTS.forEach(input => {
            input.value = null;
        })
    }else{
        first = true;

        P_LEFT.forEach(l_button => {
            l_button.style.animationName = "returnAnimation";
            l_button.style.animationDuration = "2s";
            l_button.classList.remove("text-right");
            l_button.classList.add("text-left");
        })
        P_RIGHT.forEach(p_button => {
            p_button.style.animationName = "returnAnimation";
            p_button.style.animationDuration = "2s";
            p_button.classList.remove("text-left");
            p_button.classList.add("text-right");
        })

        INPUTS.forEach(input => {
            input.value = null;
        })
    }

})
