'use client';
import {
	Button,
	Checkbox,
	createTheme,
	Flex,
	Group,
	MantineProvider,
	Text,
	Tooltip,
} from '@mantine/core';
import classes from './MediaModule.module.scss';
import { Module } from '../Module/Module';
import { useRef } from 'react';
import { IconReload } from '@tabler/icons-react';

export const MediaModule = () => {
	const ref = useRef<HTMLVideoElement>(null);
	const checkbox = useRef<HTMLInputElement>(null);

	const playSound = () => {
		const audio = new Audio(`/sfx/another.mp3`);
		audio.volume = 0.3;
		audio.play();
	};

	return (
		<Module>
			<Text
				className={classes.title}
				// onClick={() => {
				// 	ref.current?.classList.remove(classes.paused);
				// 	ref.current?.classList.add(classes.video);
				// 	ref.current?.load();
				// 	ref.current?.play();
				// 	playSound();
				// }}
			>
				RANDOM MEDIA
			</Text>
			<Group grow preventGrowOverflow={false} wrap="nowrap" gap={'xs'}>
				<Button
					w={'100%'}
					onClick={() => {
						ref.current?.classList.remove(classes.paused);
						ref.current?.classList.add(classes.video);
						ref.current?.load();
						ref.current?.play();
						playSound();
					}}
				>
					<Text fw={'bold'} size="xl">
						ANOTHER!
					</Text>
				</Button>
				<Tooltip label="Autoplay">
					<Checkbox icon={IconReload} ref={checkbox} size="xl" />
				</Tooltip>
			</Group>
			<Flex direction={'column'}>
				<video
					disableRemotePlayback
					disablePictureInPicture
					ref={ref}
					src="https://api.flwn.dev/media/randommp4"
					className={classes.video}
					onClick={(e) => {
						// switch class to video
						e.currentTarget.classList.remove(classes.paused);
						e.currentTarget.classList.add(classes.video);

						e.currentTarget.volume = 0.3;
						e.currentTarget.paused
							? e.currentTarget.play()
							: e.currentTarget.pause();
					}}
					onEnded={(e) => {
						if (checkbox.current?.checked) {
							ref.current?.classList.remove(classes.paused);
							ref.current?.classList.add(classes.video);
							e.currentTarget.load();
							e.currentTarget.play();
						} else {
							e.currentTarget.classList.remove(classes.video);
							e.currentTarget.classList.add(classes.paused);
						}
					}}
					onPause={(e) => {
						// switch class to paused
						e.currentTarget.classList.remove(classes.video);
						e.currentTarget.classList.add(classes.paused);
					}}
				/>
			</Flex>
		</Module>
	);
};
