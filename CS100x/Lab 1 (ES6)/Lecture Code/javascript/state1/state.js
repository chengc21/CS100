// color change function
function stateChange(color) {
    document.querySelector('body').style.backgroundColor = color;
    window.location.hash = color;
}
