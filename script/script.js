function feelingLucky() {
    let query = document.querySelector('input[name="q"]').value;
    window.location.href = "https://www.google.com/search?q=" + encodeURIComponent(query) + "&btnI=I";
};

function image() {
    let query = document.querySelector('input[name = "q"]').value;
    window.location.href = "https://www.google.com/search?q=" + encodeURIComponent(query) + "&udm=2";
};