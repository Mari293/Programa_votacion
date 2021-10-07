const nameUser = document.querySelector("#name");
const ageUser = document.querySelector("#age");
const btn_Calculate = document.querySelector("#calculate");
const message = document.querySelector(("#message"));

btn_Calculate.addEventListener("click", calculateAge);

function calculateAge(){
    const age =Number (ageUser.value); 
    console.log(age)
    if(age >=18){
       message.textContent = `${nameUser.value} SI puede votar`;
    }
    else if (age<0){
        message.textContent = `Ingrese valores válidos`;
    }
    else {
        message.textContent = `${nameUser.value} NO puede votar`;
    }

}
