import { Flex, Grid, SimpleGrid, Text, Title } from '@mantine/core';
import { Module } from '../Module/Module';
import { NavModule } from '../NavModule';
import { MusicModule } from '../MusicModule';
import { MediaModule } from '../MediaModule';
import { FriendsModule } from '../FriendsModule';
import { ImageModule } from '../ImageModule/ImageModule';

export const SideContent = () => {
	return (
		<Flex direction={'column'} w={'25%'} gap={'sm'}>
			<NavModule />
			<MusicModule />
			<FriendsModule />
			<MediaModule />
			<ImageModule
				title="weed cat"
				topText="Weed cat supremacy"
				image={'/img/sprigspin.gif'}
				onClick={() => {
					const audio = new Audio(
						'https://play.pokemonshowdown.com/audio/cries/sprigatito.mp3',
					);
					audio.volume = 0.2;
					audio.play();
				}}
			/>
			<Module>more stuff in the future</Module>
		</Flex>
	);
};
