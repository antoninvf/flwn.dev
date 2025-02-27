'use client';
import { Image, Text } from '@mantine/core';
import classes from './ImageModule.module.scss';
import { Module } from '../Module/Module';

interface ImageModuleProps {
	title?: string;
	topText?: string;
	bottomText?: string;
	image: string;
}

export const ImageModule = ({
	title,
	topText,
	bottomText,
	image,
}: ImageModuleProps) => {
	return (
		<Module title={title}>
			{topText && <Text>{topText}</Text>}
			<Image src={image} alt={title} className={classes.img} />
			{bottomText && <Text>{bottomText}</Text>}
		</Module>
	);
};
