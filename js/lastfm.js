var api = "https://api.gangnamstyle.dev/lastfm";

function isElementOverflowing(element) {
    var overflowX = element.offsetWidth < element.scrollWidth,
        overflowY = element.offsetHeight < element.scrollHeight;

    return (overflowX || overflowY);
}

// get elements by id
const title = document.getElementById("musicbox_title");
const cover = document.getElementById("musicbox_cover");

const song = document.getElementById("musicbox_song");
const artist = document.getElementById("musicbox_artist");
const album = document.getElementById("musicbox_album");

const listening = document.getElementById("musicbox_listening");
const listens = document.getElementById("musicbox_listens");

function main() {
    // get lastfm data from api
    fetch(api)
        .then(response => response.json())
        .then(data => {
            var e = data.recenttracks.track[0];

            title.innerHTML = "ye";
            cover.src = e.image[3]["#text"];

            song.innerHTML = e.name;
            artist.innerHTML = e.artist["#text"];
            album.innerHTML = e.album["#text"];

            listening.innerHTML = data.status;
            listens.innerHTML = data.recenttracks["@attr"].total;

            // check if text is overflowing
            if (isElementOverflowing(song)) {
                song.classList.add("bg-danger");
            }
            if (isElementOverflowing(artist)) {
                artist.classList.add("bg-danger");
            }
            if (isElementOverflowing(album)) {
                album.classList.add("bg-danger");
            }
        }
    );
}

window.onload = main();