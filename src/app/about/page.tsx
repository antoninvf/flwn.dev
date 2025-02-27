'use client';
import { Flex, Text, Title } from '@mantine/core';
import { Module } from '~home';
import { Logo } from '~home/components/Logo';
import { NavModule } from '~home/components/NavModule';
import classes from '~/styles/Content.module.scss';
import Link from 'next/link';

export default function About() {
	return (
		<Flex direction={'column'} align={'center'} w={'100%'} mb={'xl'}>
			<Logo mt={'2rem'} />
			<Flex w={'60%'} gap={'sm'}>
				<Flex direction={'column'} w={'75%'} gap={'sm'}>
					<Module title="SO YOU WANT TO KNOW MORE?">
						<Text>I guess you want to know a little bit more about me.</Text>
						<Text className={classes.subtitle}>{'>'} I like to code</Text>
						<Text>
							I've been coding since I was like 14, but that was in Python and I
							was only making a simple Python Discord bot.
						</Text>
						<Text>
							Later on I decided to go to an IT school, and started coding a lot
							since then. I learnt Java there, but I know C# some Python and
							know how to make websites :D
						</Text>
						<Text className={classes.subtitle}>
							{'>'} What's my favorite programming language?
						</Text>
						<Text>
							Currently it has to be C#, as It's the language I use the most for
							basically anything new. If I need an API I make it in ASP.NET and
							it works good enough. I also like Java and Kotlin just because
							it's the first language I actually learnt in the IT highschool and
							plus I can make sick Minecraft mods and plugins if I want to :p
						</Text>
						<Text className={classes.subtitle}>
							{'>'} What browser do I use?
						</Text>
						<Text>
							I started with Chrome, probably like most people. However I
							switched to Brave after a friend recommended it to me. I have then
							used Brave for like 5 years I think? and decided it's time for a
							change and started using Firefox. Not gonna lie, Firefox was quite
							nice. It's quite nostalgic to me, as my grandpa uses it and has
							been using it for decades now. The customizability is also nice
							because you can have animated themes.
						</Text>
						<Text>
							However their addon store policies or whatever banned OldTwitter
							from being on it, most of the addons I used were outdated too and
							plus YouTube was bugging out for me so I switched back to Brave
							and I'm happy to be back with it.
						</Text>
						<Text className={classes.subtitle}>{'>'} I'm Czech</Text>
						<Text>
							Born in the beautiful Czech Republic, or Czechia, whatever you
							want to call it, in the beautiful city of Prague.
						</Text>
						<Text className={classes.subtitle}>
							{'>'} I'm an epic gaming prodify
						</Text>
						<Text>
							Absolute professional at video games,{' '}
							<Link
								href={'https://steamcommunity.com/id/flowyan/'}
								className={classes.clickable}
								target="_blank"
							>
								here's my Steam if you wanna check it out.
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
