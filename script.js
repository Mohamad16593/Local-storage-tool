let allSpans = document.querySelectorAll(".buttons span");
let results = document.querySelector(".results > span");
let theInput = document.getElementById("the-input");

allSpans.forEach(span => {
    span.addEventListener("click" , (e) => {
        if(e.target.classList.contains("check-item")){
            checkItem();
        }
        if(e.target.classList.contains("add-item")){
            addItem();
        }
        if(e.target.classList.contains("delete-item")){
            deleteItem();
        }
        if(e.target.classList.contains("show-item")){
            showItem();
        }

    });
});

function showMessage(){
        results.innerHTML = "Input can't be empty";
}

function checkItem(){
    if (theInput.value !== ''){
        if(localStorage.getItem(theInput.value)){
            results.innerHTML = `Found Local Item Called <span>${theInput.value}</span>`;
        }else{
            results.innerHTML = `Local Storage Item With the Name : <span>${theInput.value}</span> Is Not Exist`;
        }
    }else{
        showMessage()
    }
}
function addItem(){
    if (theInput.value !== ''){
        localStorage.setItem(theInput.value, "Test");
        results.innerHTML = `Local Storage Item <span>${theInput.value}</span> Successfuly Added`
        theInput.value = '' ;
    }else{
        showMessage()
    }
}
function deleteItem(){
    if (theInput.value !== ''){
        if(localStorage.getItem(theInput.value)){
            localStorage.removeItem(theInput.value)
            results.innerHTML = `Local Item Called <span>${theInput.value}</span> Has Been Deleted`;
            theInput.value = '' ;
        }else{
            results.innerHTML = `Local Storage Item With the Name : <span>${theInput.value}</span> Does Not Exist`;
        }
    }else{
        showMessage()
    }
}
function showItem(){
    if(localStorage.length){
        // console.log(`Found ${localStorage.length} Elements`);
        results.innerHTML = '' ;
        for (let [key , value] of Object.entries(localStorage)){
            results.innerHTML += `<span>${key} => ${value}</span>`
        }
    }else{
        results.innerHTML = "Local Storage Is Empty"
    }

}