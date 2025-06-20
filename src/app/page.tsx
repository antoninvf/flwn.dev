'use client';
import { Flex } from '@mantine/core';
import { MainContent } from '~home';
import { Logo } from '~home/components/Logo';
import { SideContent } from '~home/components/SideContent';

export default function HomePage() {
	return (
		<Flex direction={'column'} align={'center'} w={'100%'} mb={'xl'}>
			<Logo mt={'2rem'} />
			<Flex w={'fit-content'} maw={'65rem'} gap={'sm'}>
				<MainContent />
				<SideContent />
			</Flex>
		</Flex>
	);
}
