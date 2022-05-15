const INPUTS = document.querySelectorAll("main input");
const S_BUTTON = document.querySelector(".switch");
const P_RIGHT = document.querySelectorAll(".text-right");
const P_LEFT = document.querySelectorAll(".text-left");

let first = true;

    INPUTS.forEach(input => {
        input.addEventListener("input", ()=>{
            
            if(first == true){

                //t -- lb
                let funt0;
                funt0 = (2204.62262 * INPUTS[0].value); 
                INPUTS[1].value = funt0.toFixed(3); 
            
                //kg -- lb
                let funt1;
                funt1 = (2.20462262 * INPUTS[2].value);
                INPUTS[3].value = funt1.toFixed(3);

                //dag -- lb
                let funt2;
                funt2 = (0.0244192843874988 * INPUTS[4].value);
                INPUTS[5].value = funt2.toFixed(3);

                //g -- lb
                let funt3;
                funt3 = (0.00220462262 * INPUTS[6].value);
                INPUTS[7].value = funt3.toFixed(3);
                
            }else{

                //lb -- t
                let t;
                t = (0.00045359237 * INPUTS[1].value); 
                INPUTS[0].value = t.toFixed(3); 
            
                //lb -- kg
                let kg;
                kg = (0.45359237 * INPUTS[3].value);
                INPUTS[2].value = kg.toFixed(3);

                //lb -- dag
                let dag;
                dag = (45.36 * INPUTS[5].value);
                INPUTS[4].value = dag.toFixed(3);

                //lb -- g
                let g;
                g = (453.59 * INPUTS[7].value);
                INPUTS[6].value = g.toFixed(3);
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
