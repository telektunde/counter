let counter = document.getElementById('count');

function myFunction() {
    counter++;
    $('h2').text(counter);
}

btn.addEventListener('click', myFunction);


