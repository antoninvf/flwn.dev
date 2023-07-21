function isElementOverflowing(element) {
    var overflowX = element.offsetWidth < element.scrollWidth,
        overflowY = element.offsetHeight < element.scrollHeight;

    return (overflowX || overflowY);
}

// get elements by id
var title = document.getElementById("musicbox_title");
var songlink = document.getElementById("musicbox_songlink");
var cover = document.getElementById("musicbox_cover");

var song = document.getElementById("musicbox_song");
var artist = document.getElementById("musicbox_artist");
var album = document.getElementById("musicbox_album");

var listening = document.getElementById("musicbox_listening");
var listens = document.getElementById("musicbox_listens");

function main() {
    // get lastfm data from api
    fetch("https://api.gangnamstyle.dev/lastfm")
        .then(response => response.json())
        .then(data => {
            var e = data.recenttracks.track[0];

            if (e["@attr"] && e["@attr"].nowplaying == "true") {
                title.innerHTML = "Now Playing:";
                listening.innerHTML = "Listening right now!";
            } else {
                title.innerHTML = "Last Played:";

                // get the last played time
                var lastPlayed = new Date(e.date.uts * 1000);
                var lastPlayedString = lastPlayed.toLocaleString("en-US", {
                    // get the time in the user's
                    timeZone: Intl.DateTimeFormat().resolvedOptions().timeZone,
                    weekday: "long",
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                    hour: "numeric",
                    minute: "numeric",
                    second: "numeric"
                });
                listening.innerHTML = `Last played ${lastPlayedString}`;
            

            }

            cover.src = e.image[3]["#text"];

            song.innerHTML = e.name;
            artist.innerHTML = e.artist["#text"];
            album.innerHTML = e.album["#text"];

            listening.innerHTML = data.status;
            listens.innerHTML = `${data.recenttracks["@attr"].total} listens`;

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