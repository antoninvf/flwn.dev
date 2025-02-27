import { Flex } from '@mantine/core';
import classes from '~/styles/Content.module.scss';
import { Module } from '../Module/Module';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Links = [
	{ href: '/', text: 'Home' },
	{ href: '/about', text: 'More about me' },
	{ href: '/blog', text: 'Blog' },
	{ href: 'https://m.flwn.dev', text: 'Media files', external: true },
	{ href: 'https://github.com/antoninvf', text: 'GitHub', external: true },
	{
		href: 'https://bsky.app/profile/flwn.dev',
		text: 'Bluesky',
		external: true,
	},
	{ href: 'https://x.com/flowyan', text: 'Twitter', external: true },
	{ href: 'https://youtube.com/flowyan', text: 'YouTube', external: true },
	{ href: '/credits', text: 'Credits' },
];

export const NavModule = () => {
	const pathname = usePathname();
	return (
		<Module title={'STUFF'}>
			<Flex direction={'column'}>
				{Links.map((link) => (
					<Link
						className={
							pathname === link.href ? classes.activelink : classes.link
						}
						key={link.href}
						href={link.href}
						target={link.external ? '_blank' : undefined}
					>
						{'> ' + link.text}
					</Link>
				))}
			</Flex>
		</Module>
	);
};
