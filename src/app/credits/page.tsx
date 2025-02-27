'use client';
import { Flex, Text } from '@mantine/core';
import { Module } from '~home';
import { Logo } from '~home/components/Logo';
import { NavModule } from '~home/components/NavModule';
import classes from '~/styles/Content.module.scss';
import Link from 'next/link';

export default function Credits() {
	return (
		<Flex direction={'column'} align={'center'} w={'100%'} mb={'xl'}>
			<Logo mt={'2rem'} />
			<Flex w={'60%'} gap={'sm'}>
				<Flex direction={'column'} w={'75%'} gap={'sm'}>
					<Module title="CREDITS">
						<Text>I want to say my special thanks to these people.</Text>
						<Text>
							Either these people, or websites, have inspired me or I have used
							some of their stuff.
						</Text>

						<Text className={classes.subtitle}>{'>'} Mantine</Text>
						<Text>
							For providing me with a great React component library that I use
							very often for my websites.
						</Text>
						<Text className={classes.subtitle}>{'>'} Old looking websites</Text>
						<Text>
							I know this is a dumb one to put here, but these old looking
							websites look really nice when you put a lot of effort in them. I
							have browsed{' '}
							<Link
								href={'https://neocities.org/'}
								target="_blank"
								className={classes.clickable}
							>
								neocities
							</Link>{' '}
							for hours and hours and the amount of effort that people put in
							their websites, while looking silly and like they were made in the
							90s or 2000s, is really amazing.
						</Text>
						<Link
							href={'https://sadgrl.online/webmastery/downloads/tiledbgs'}
							target="_blank"
						>
							<Text className={classes.subtitle}>
								{'>'} Tiled background from SADGRL.ONLINE
							</Text>
						</Link>
						<Text>
							Specifically this space/stars one they have. All of them are very
							nice but this one was the nicest looking one to me.
						</Text>
						<Link href={'https://dimden.dev'} target="_blank">
							<Text className={classes.subtitle}>{'>'} Dimden's Hotel</Text>
						</Link>
						<Text>
							This is a website that I randomly found on r/place. I was curious
							because it had a .dev like my website does, so I went to check it
							out and was blown away by this website. Not only does it look
							amazing, but I noticed that you can see other people's cursors
							while on the website. It also featured a chat which was cool. I
							later dug more in and found out that the person has made some
							other cool stuff like an{' '}
							<Link
								href={'https://github.com/dimdenGD/OldTwitter/'}
								target="_blank"
								className={classes.clickable}
							>
								extension that brings back old twitter from 2015
							</Link>
							. After seeing this website I decided I finally wanted to make my
							website look like an old website, I still don't know if there is a
							proper term for these websites haha.
						</Text>
						<Text>Overall this website has been a huge inspiration to me.</Text>
						<Text className={classes.subtitle}>{'>'} The fonts</Text>
						<Text>
							I legit search pixel or retro fonts on Google and found them on
							like dafont I think. But I'll be honest I don't really know if
							I'll be sticking with these. They feel kind of hard to read imo.
						</Text>
						<Text>
							The fonts are:{' '}
							<Link
								href={'https://www.dafont.com/alagard.font'}
								target="_blank"
								className={classes.clickable}
							>
								Alagard
							</Link>{' '}
							and{' '}
							<Link
								href={'https://www.dafont.com/pixellari.font'}
								target="_blank"
								className={classes.clickable}
							>
								Pixellari
							</Link>
						</Text>
					</Module>
				</Flex>
				<Flex direction={'column'} w={'25%'} gap={'sm'}>
					<NavModule />
				</Flex>
			</Flex>
		</Flex>
	);
}
