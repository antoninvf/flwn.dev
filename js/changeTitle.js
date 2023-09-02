var title = document.getElementById("title");

// Change the title of the page according to window.location.href
title.innerText = window.location.hostname.toUpperCase();
document.title = window.location.hostname;