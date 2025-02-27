export interface LastFmData {
	recenttracks: {
		track: Array<{
			artist: {
				mbid: string;
				'#text': string;
			};
			streamable: string;
			image: Array<{
				size: string;
				'#text': string;
			}>;
			mbid: string;
			album: {
				mbid: string;
				'#text': string;
			};
			name: string;
			url: string;
			date: {
				uts: string;
				'#text': string;
			};
		}>;
		'@attr': {
			user: string;
			totalPages: string;
			page: string;
			perPage: string;
			total: string;
		};
	};
}
