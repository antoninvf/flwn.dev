'use client';
import { Flex } from '@mantine/core';
import { Module } from '~home';
import { Logo } from '~home/components/Logo';
import { NavModule } from '~home/components/NavModule';

export default function Blog() {
	return (
		<Flex direction={'column'} align={'center'} w={'100%'} mb={'xl'}>
			<Logo mt={'2rem'} />
			<Flex w={'60%'} gap={'sm'}>
				<Flex direction={'column'} w={'75%'} gap={'sm'}>
					<Module title="BLOG">work in progress</Module>
				</Flex>
				<Flex direction={'column'} w={'25%'} gap={'sm'}>
					<NavModule />
				</Flex>
			</Flex>
		</Flex>
	);
}
