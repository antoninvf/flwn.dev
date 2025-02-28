'use client';
import {
	Flex,
	Text,
	Image,
	Skeleton,
	Tooltip,
	ActionIcon,
	Modal,
} from '@mantine/core';
import classes from './MusicModule.module.scss';
import { Module } from '../Module/Module';
import { useQuery } from '@tanstack/react-query';
import type { LastFmData } from '~/types/LastFmData';
import { IconExclamationMark } from '@tabler/icons-react';
import { useDisclosure } from '@mantine/hooks';

export const MusicModule = () => {
	const [opened, { open: openModal, close: closeModal }] = useDisclosure(false);

	const { data } = useQuery({
		queryKey: ['lastfm'],
		queryFn: async () => {
			const result = await fetch('https://api.flwn.dev/lastfm', {
				cache: 'no-cache',
			});
			return await result.json().then((data: LastFmData) => {
				return data;
			});
		},
	});

	var lastPlayedString = '';
	if (data != null) {
		// get the last played time
		var lastPlayed = new Date(
			Number(data.recenttracks.track[0].date.uts) * 1000,
		);
		var now = new Date();

		// get the difference between now and the last played time
		var diff = Math.abs(now.getTime() - lastPlayed.getTime()) / 1000;

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
	}

	return (
		<>
			<Module title={'MUSIC'}>
				<ActionIcon
					pos={'absolute'}
					right={0}
					top={0}
					m={'sm'}
					onClick={openModal}
					color="#333"
					variant="transparent"
				>
					<IconExclamationMark />
				</ActionIcon>

				<Skeleton visible={!data} width={'auto'} height={75} p={0} m={0}>
					<Flex direction={'row'} gap={'xs'} align={'center'}>
						<Image
							src={data?.recenttracks.track[0].image[1]['#text']}
							alt={data?.recenttracks.track[0].name + ' album cover'}
							className={classes.musicboximg}
							onClick={() =>
								window.open(data?.recenttracks.track[0].url, '_blank')
							}
						/>

						<Flex direction={'column'} className={classes.text}>
							<Tooltip label="Track name" withArrow position="top-start">
								<Text>{data?.recenttracks.track[0].name}</Text>
							</Tooltip>

							<Tooltip label="Artist" withArrow position="top-start">
								<Text>{data?.recenttracks.track[0].artist['#text']}</Text>
							</Tooltip>

							<Tooltip label="Album" withArrow position="top-start">
								<Text>{data?.recenttracks.track[0].album['#text']}</Text>
							</Tooltip>
						</Flex>
					</Flex>
				</Skeleton>
				<Skeleton visible={!data} width={'auto'} height={'auto'} p={0} m={0}>
					<Flex direction={'column'} className={classes.infotext}>
						<Text>{lastPlayedString} ago</Text>
						<Text>{data?.recenttracks['@attr'].total} total scrobbles</Text>
					</Flex>
				</Skeleton>
			</Module>
			<Modal
				opened={opened}
				onClose={closeModal}
				size={'xl'}
				title="Notice"
				centered
			>
				<Flex direction={'column'} gap={'md'}>
					<Text>
						Currently this is not 100% what is now playing in my ears sadly,
						because of Plexamp not scrobbling the songs properly like how
						Spotify does it. So Last.fm never gives out a "Now playing" thing.
					</Text>
					<Text>
						The way I'm going to circumvent this is create an API that's going
						to go directly to Plex and look at the current playing song, and if
						it can't find one it'll show the last LastFM played song.
					</Text>
					<Text>
						For now it's delayed by about 30 seconds to 2 minutes, haven't
						properly counted it.
					</Text>
					<Text>
						Oh also no scrolling text right now for track or artist names that
						are too long.
					</Text>
				</Flex>
			</Modal>
		</>
	);
};
