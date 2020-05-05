function mySlider(){
    var img_1 = document.getElementsByClassName("slider-more")[0]
    var img_2 = document.getElementsByClassName("slider-art")[0]
    var display_1 = document.getElementsByClassName("display1")[0]
    var display_2 = document.getElementsByClassName("display2")[0]
    var button_1 = document.getElementsByClassName("slider-button")[0];
    var button_2 = document.getElementsByClassName("slider-button2")[0];

    if ( img_1.style.width == "") {
        img_2.style.width = "90%";
        img_2.style.left = "0%";
        img_1.style.width = "10%";
        img_1.style.left = "90%";
        display_1.style.display = "none";
        display_2.style.display = "block";
        button_1.style.display = "none";
        button_2.style.display = "block";
    }
    else if ( img_1.style.width == "10%") {
        img_2.style.width = "10%";
        img_2.style.left = "90%";
        img_1.style.width = "90%";
        img_1.style.left = "0%";
        display_1.style.display = "block";
        display_2.style.display = "none";
        button_1.style.display = "block";
        button_2.style.display = "none";
    }

    else if ( img_2.style.width == "10%") {
        img_2.style.width = "90%";
        img_2.style.left = "0%";
        img_1.style.width = "10%";
        img_1.style.left = "90%";
        display_1.style.display = "none";
        display_2.style.display = "block";
        button_1.style.display = "none";
        button_2.style.display = "block";
    }
    
}

