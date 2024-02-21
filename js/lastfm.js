// get elements by id
var title = document.getElementById('musicbox_title');
var songlink = document.getElementById('musicbox_songlink');
var cover = document.getElementById('musicbox_cover');

var song = document.getElementById('musicbox_song');
var artist = document.getElementById('musicbox_artist');
var album = document.getElementById('musicbox_album');

var listening = document.getElementById('musicbox_listening');
var listens = document.getElementById('musicbox_listens');

function main() {
	// get lastfm data from api
	fetch('https://api.flwn.dev/lastfm')
		.then((response) => response.json())
		.then((data) => {
			var e = data.recenttracks.track[0];

			if (e['@attr'] && e['@attr'].nowplaying == 'true') {
				title.innerHTML = 'Now Playing:';
				listening.innerHTML = 'Listening right now!';
			} else {
				title.innerHTML = 'Last Played:';

				// get the last played time
				var lastPlayed = new Date(e.date.uts * 1000);
				var now = new Date();
				var lastPlayedString = '';

				// get the difference between now and the last played time
				var diff = Math.abs(now - lastPlayed) / 1000;

				// get the days, hours, minutes, and seconds
				var days = Math.floor(diff / 86400);
				var hours = Math.floor(diff / 3600) % 24;
				var minutes = Math.floor(diff / 60) % 60;
				var seconds = Math.floor(diff % 60);

				// if the difference is more than a day, show the date
				if (days > 0) {
					lastPlayedString += `${days} day${days > 1 ? 's' : ''}`;
				} else if (hours > 0) {
					lastPlayedString += `${hours} hour${hours > 1 ? 's' : ''}`;
				} else if (minutes > 0) {
					lastPlayedString += `${minutes} minute${minutes > 1 ? 's' : ''}`;
				} else {
					lastPlayedString += `${seconds} second${seconds > 1 ? 's' : ''}`;
				}

				listening.innerHTML = `${lastPlayedString} ago`;
			}

			cover.src = e.image[3]['#text'];
			songlink.href = e.url;

			song.innerHTML = e.name;
			artist.innerHTML = e.artist['#text'];
			album.innerHTML = e.album['#text'];

			listens.innerHTML = `${data.recenttracks['@attr'].total} total listens`;
		});
}

window.onload = function () {
	main();
	setInterval(main, 10000);
};
