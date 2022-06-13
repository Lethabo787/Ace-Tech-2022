

let color1 = ['blue'];

let button = document.getElementsByClassName("dismisss");

button.addEventListener('click', function() {
    var colors = color1;
    let container = document.getElementsByClassName("note1");

    container.style.background = colors;
})
