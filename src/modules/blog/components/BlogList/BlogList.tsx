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
import { useQuery } from '@tanstack/react-query';
import type { LastFmData } from '~/types/LastFmData';
import { IconExclamationMark } from '@tabler/icons-react';
import { useDisclosure } from '@mantine/hooks';

export const BlogList = () => {
	const [opened, { open: openModal, close: closeModal }] = useDisclosure(false);

	const { data } = useQuery({
		queryKey: ['lastfm'],
		queryFn: async () => {
			const result = await fetch('https://api.flwn.dev/blog', {
				cache: 'no-cache',
			});
			return await result.json().then((data: LastFmData) => {
				return data;
			});
		},
	});

	return (
		<>
			<Flex direction={'column'}>wip</Flex>
		</>
	);
};
