const nameUser = document.querySelector("#name");
const ageUser = document.querySelector("#age");
const btn_Calculate = document.querySelector("#calculate");
const message = document.querySelector(("#message"));

btn_Calculate.addEventListener("click", calculateAge);

function calculateAge(){
    const age =Number (ageUser.value); 
    console.log(age)
    if(age >=18){
       message.textContent = `Sr(a) ${nameUser.value} usted SI puede votar`;
    }
    else {
        message.textContent = `Sr(a) ${nameUser.value} usted NO puede votar`;
    }

}

// let element = document.getElementById("xyz");
// //	Event Listener
// element.addEventListener("click", myFunction);

// // Call Function On Click
// function myFunction() {
//     alert("Hello World!");
// }

