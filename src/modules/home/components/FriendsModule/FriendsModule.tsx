import { Flex, NavLink, Text, Title } from '@mantine/core';
import classes from '~/styles/Content.module.scss';
import { Module } from '../Module/Module';
import Link from 'next/link';

const Friends = [
	{ href: 'https://basil.florist', text: 'basil.florist' },
	{ href: 'https://theouto.com', text: 'theouto.com' },
	{ href: 'https://danielquail.dev', text: 'danielquail.dev' },
	{ href: 'https://jonstu.dev', text: 'jonstu.dev' },
	{ href: 'https://goodhew.lol', text: 'goodhew.lol' },
];

export const FriendsModule = () => {
	return (
		<Module title={'FRIENDS'}>
			<Flex direction={'column'}>
				{Friends.map((link) => (
					<Link
						className={classes.link}
						key={link.href}
						href={link.href}
						target={'_blank'}
					>
						{'> ' + link.text}
					</Link>
				))}
			</Flex>
		</Module>
	);
};
