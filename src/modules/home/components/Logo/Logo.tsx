import { Flex, Text } from '@mantine/core';
import classes from './Logo.module.scss';

interface LogoProps {
	mt?: string;
}

const sfx = [
	{ name: 'boing.mp3', volume: 0.9 },
	{ name: 'boing2.mp3', volume: 0.9 },
	{ name: 'boing3.mp3', volume: 0.9 },
	{ name: 'boing4.mp3', volume: 0.9 },
	{ name: 'punch.mp3', volume: 0.3 },
	{ name: 'spring.mp3', volume: 0.7 },
	{ name: 'lala.mp3', volume: 0.3 },
	{ name: 'gnarp1.mp3', volume: 0.3 },
	{ name: 'gnarp2.mp3', volume: 0.3 },
	{ name: 'gnarp3.mp3', volume: 0.3 },
];

export const Logo = ({ mt = '' }: LogoProps) => {
	const playSound = () => {
		const random = Math.floor(Math.random() * sfx.length);
		const sound = sfx[random];

		const audio = new Audio(`/sfx/${sound.name}`);
		audio.volume = sound.volume;
		audio.play();
	};

	return (
		<>
			<Flex mt={mt} align={'center'} justify={'center'} onClick={playSound}>
				<Text className={classes.text}>F</Text>
				<Text className={classes.text}>L</Text>
				<Text className={classes.text}>W</Text>
				<Text className={classes.text}>N</Text>
				<Text className={classes.text}>.</Text>
				<Text className={classes.text}>D</Text>
				<Text className={classes.text}>E</Text>
				<Text className={classes.text}>V</Text>
			</Flex>
		</>
	);
};
