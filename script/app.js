document.addEventListener('DOMContentLoaded', function(){

    console.log("Script loaded!");

    function handleFloatingLabel(){
        var input = document.getElementsByClassName("js-name-input");
        var label = document.getElementsByClassName("js-floating-label");

        // console.log(input);
        // console.log(label);

        input[0].addEventListener("blur", function(){
            if(this.value !== ""){
                console.log("Dit is niet leeg");
                label[0].classList.add('is-floating');
            }else{
                label[0].classList.remove('is-floating');
            }
        });
    }

    function handlePasswordSwitcher(){
        let passwordInput = document.querySelector(".js-password-input");
        let passwordToggle = document.querySelector(".js-password-toggle-checkbox");
        let passwordSymbolShow = document.querySelector(".c-password-toggle__symbol--show");
        let passwordSymbolHide = document.querySelector(".c-password-toggle__symbol--hide");


        passwordToggle.addEventListener('click', function(){
            console.log("Er is geklikt!");
            if(passwordToggle.checked == true){
                passwordInput.type = "text";
                passwordSymbolShow.classList.remove("c-password-toggle__symbol--none");
                passwordSymbolHide.classList.add("c-password-toggle__symbol--none");
            }else if(passwordToggle.checked == false){
                passwordInput.type = "password";
                passwordSymbolShow.classList.add("c-password-toggle__symbol--none");
                passwordSymbolHide.classList.remove("c-password-toggle__symbol--none");

            };
        });
    }

    function handleQualityRange(){
        let rangeInput = document.querySelector(".js-quality-input");
        let rangeHolder = document.querySelector(".js-range-holder");
        let rangeHolderValue = rangeHolder.value;

        rangeInput.addEventListener("input", function(e){
            rangeHolder.style.marginLeft = e.target.value + "%";
            rangeHolder.setAttribute("data-value", e.target.value);
        });

    }

    function handleDropdownButton(){
        let dropdownButton = document.querySelector(".js-dropdown-button");
        let dropdownList = document.querySelector(".js-dropdown-list-open");
        let dropdownButtons = document.querySelectorAll(".c-dropdown-button");

        console.log(dropdownButton);
        console.log(dropdownList);

        dropdownButton.addEventListener("click", function(e){
            if(dropdownList.classList.contains("c-dropdown-list-hidden")){
                dropdownList.classList.remove("c-dropdown-list-hidden");
            }else{
                dropdownList.classList.add("c-dropdown-list-hidden");
            };
            e.preventDefault();
        });

        console.log(dropdownButtons);

        dropdownButtons = Array.from(dropdownButtons);

        dropdownButtons.map( b => b.addEventListener("click",function(e){
            e.preventDefault();
        }));
    }


    //Functions  
    handleFloatingLabel();
    handlePasswordSwitcher();
    handleQualityRange();
    handleDropdownButton();
});