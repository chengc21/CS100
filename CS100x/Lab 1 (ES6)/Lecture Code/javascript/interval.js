// Set starting value of counter to 0
if (!localStorage.getItem('counter'))
{
    localStorage.setItem('counter', 0);
}

// Load current value of  counter
document.addEventListener('DOMContentLoaded', () => {

    let counter = localStorage.getItem('counter');
    document.querySelector('#counter').innerHTML = counter;

    // Change the value of counter every 1000ms
    setInterval(() => {
            counter++;
            document.querySelector('#counter').innerHTML = counter;
            localStorage.setItem('counter', counter)
        }, 1000);
});
