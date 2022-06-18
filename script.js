const form = document.querySelector(".form");
const formInput = form.querySelectorAll(".form .form-input");
const submitButton = form.querySelector(".form .submit-btn .btn");
const feedBack = form.querySelector(".feedback")

const validation = (formList) => {
    formList.forEach(inputItem => {
        const input = inputItem.querySelector("input");
        const small = inputItem.querySelector("small");
        const error = inputItem.querySelector(".error-icon");
        if(!input.value){
            small.style.display = "flex";
            input.classList.add("error");
            feedBack.style.display = "none";
            error.style.display = "inline";
        }

        else if(input.placeholder === "Password" && input.value.length < 4){
            small.innerText = 'Password must be more than 4 characters.';
            small.style.display = "flex";
            error.style.display = "inline";
            feedBack.style.display = "none";
        }

        else{
            input.classList.add("success");
            small.style.display = 'none';
            error.style.display = "none";
            feedBack.style.display = "flex";
        }
    })
}

form.addEventListener('submit', (event) => {
    event.preventDefault();
    validation(formInput);
});



















// const fname = form.querySelector(".fname");
// const lname = form.querySelector(".lname");
// const email = form.querySelector(".email");
// const password = form.querySelector(".password");