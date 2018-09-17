// check the state of the URL after each hash change
['DOMContentLoaded', 'hashchange'].forEach((e) => {
    window.addEventListener(e, () => {

      // if there's a # there, that's a saved state, set bg to that color
        if (window.location.hash) {
            let color = window.location.hash.slice(1);
            stateChange(color);
        }
    });
});

// color change function
function stateChange(color)
{
    document.querySelector('body').style.backgroundColor = color;
    window.location.hash = color;
}
