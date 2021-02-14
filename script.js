
//dark-mode
var btn = document.getElementById("dark");

btn.addEventListener("click", function () {
    document.body.classList.toggle("dark-mode");
});

document.getElementsByClassName("")

var light = document.querySelector(".light");

light.addEventListener("click", function () {
    document.body.classList.toggle("dark-mode");
});


//mirror input text "type something".
/*var input = document.getElementById('test-text');
var mirror = document.getElementsByClassName('font');
input.onkeyup = function () {
    for(var i = 0; i < mirror.length; i++) {
    mirror[i].innerHTML = input.value;
    }
}*/

//change text size v2.
var sizeSelector = document.getElementById("size");
sizeSelector.addEventListener("change", function () {
    for (var i = 0; i < contentArray.length; i++) {
        contentArray[i].style.fontSize = (sizeSelector.value.toString() + "px");
    }
});

//reset button.
function resetPage() {
    for (var i = 0; i < contentArray.length; i++) {
        contentArray[i].textContent = sampleText;
        contentArray[i].style.fontSize = "20px";
        customText.value = "";
        document.getElementById("search").value = "";
        sizeSelector.value = 20;
    }
};

var resetButton = document.getElementById("restart");
resetButton.addEventListener("click", function () {
    document.body.classList.remove("dark-mode");
    resetPage();
});

//mirror input text in "type something" and put sample text if empty.
var customText = document.getElementById("test-text");
var contentArray = Array.from(document.getElementsByClassName("font"));
var sampleText = "“You are not entitled to your opinion. You are entitled to your informed opinion. No one is entitled to be ignorant.”";

customText.addEventListener("keyup", function () {
    if (customText.value !== "") {
        for (var i = 0; i < contentArray.length; i++) {
            contentArray[i].textContent = customText.value;
        }
    }
    else {
        for (var i = 0; i < contentArray.length; i++) {
            contentArray[i].textContent = sampleText;
        }
    }
});