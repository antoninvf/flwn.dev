'use client';
import { Button, Checkbox, Flex } from '@mantine/core';
import classes from './MediaModule.module.scss';
import { Module } from '../Module/Module';
import { useRef } from 'react';

export const MediaModule = () => {
	const ref = useRef<HTMLVideoElement>(null);
	const checkbox = useRef<HTMLInputElement>(null);

	const playSound = () => {
		const audio = new Audio(`/sfx/another.mp3`);
		audio.volume = 0.5;
		audio.play();
	};

	return (
		<Module title={'RANDOM MEDIA'}>
			<Flex direction={'column'}>
				<video
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
			<Flex direction={'column'} gap={'md'} align={'center'}>
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
					ANOTHER!
				</Button>
				<Checkbox ref={checkbox} label="Autoplay" labelPosition="left" />
			</Flex>
		</Module>
	);
};
