var replaceList = document.querySelectorAll('[id=replaceName]');


// Change the title of the page according to window.location.hostname

document.title = window.location.hostname;

for (var i = 0; i < replaceList.length; i++) {
    replaceList[i].innerText = replaceList[i].innerText.replace("GANGNAMSTYLE.DEV", window.location.hostname);
}