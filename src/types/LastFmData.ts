/**
 * Represents the structure of data retrieved from the Last.fm API.
 */
export interface LastFmData {
	/**
	 * Contains information about recently played tracks.
	 */
	recenttracks: {
		/**
		 * An array of track objects representing individual tracks.
		 */
		track: Array<{
			/**
			 * Information about the artist of the track.
			 */
			artist: {
				/**
				 * The MusicBrainz Identifier (MBID) of the artist.
				 */
				mbid: string;
				/**
				 * The name of the artist.
				 */
				'#text': string;
			};
			/**
			 * Indicates whether the track is streamable.
			 */
			streamable: string;
			/**
			 * An array of image objects representing different sizes of the track's artwork.
			 */
			image: Array<{
				/**
				 * The size of the image (e.g., "small", "medium", "large").
				 */
				size: string;
				/**
				 * The URL of the image.
				 */
				'#text': string;
			}>;
			/**
			 * The MusicBrainz Identifier (MBID) of the track.
			 */
			mbid: string;
			/**
			 * Information about the album of the track.
			 */
			album: {
				/**
				 * The MusicBrainz Identifier (MBID) of the album.
				 */
				mbid: string;
				/**
				 * The name of the album.
				 */
				'#text': string;
			};
			/**
			 * The name of the track.
			 */
			name: string;
			/**
			 * The URL of the track on Last.fm.
			 */
			url: string;
			/**
			 * Information about the date the track was played (optional).
			 */
			date?: {
				/**
				 * The UNIX timestamp of when the track was played.
				 */
				uts: string;
				/**
				 * The human-readable date string.
				 */
				'#text': string;
			};
			/**
			 * Attributes related to the track (optional).
			 */
			'@attr'?: {
				/**
				 * Indicates if the track is currently playing.
				 */
				nowplaying: string;
			};
		}>;
		/**
		 * Metadata about the recent tracks list.
		 */
		'@attr': {
			/**
			 * The username of the Last.fm user.
			 */
			user: string;
			/**
			 * The total number of pages in the recent tracks list.
			 */
			totalPages: string;
			/**
			 * The current page number.
			 */
			page: string;
			/**
			 * The number of tracks per page.
			 */
			perPage: string;
			/**
			 * The total number of tracks.
			 */
			total: string;
		};
	};
}
