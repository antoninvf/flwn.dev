import { Center, Flex, Image, Text } from '@mantine/core';
import { Module } from '../Module/Module';
import classes from '~/styles/Content.module.scss';
import { Tooltip } from '@mantine/core';

export const MainContent = () => {
	return (
		<Flex direction={'column'} w={'75%'} gap={'sm'}>
			<Module title="WELCOME TO FLWN.DEV">
				<Flex gap={'xl'} align={'center'}>
					<Tooltip label="the creature" withArrow position="bottom">
						<Image
							src={'/flwn.png'}
							alt={'flwn'}
							w={'10rem'}
							className={classes.flwn}
							onClick={() => {
								const audio = new Audio('/sfx/lala.mp3');
								audio.volume = 0.3;
								audio.play();
							}}
						/>
					</Tooltip>
					<Flex direction={'column'} className={classes.text}>
						<Text>Hi, I'm Flowyan and this is my website.</Text>
						<Text>
							I'm a software developer from Czechia that loves to code random
							stuff.
						</Text>
						<Text>tl;dr welcome to my silly little website</Text>
					</Flex>
				</Flex>
			</Module>
			<Module>
				<Center>isnt this website awesome????</Center>
			</Module>
			<Module title="BLOG">blog component here in the future</Module>
			<Module>
				<Text>⚠️ this website is still being worked on</Text>
				<Text>it's being remade in nextjs :p</Text>
			</Module>
			<Module title="PROJECTS">
				<Text>
					Here is a selection of projects I liked working on the most, or
					projects I'm working on right now.<br></br>
					This section will probably be changed in the future, with dedicated
					pages for each project.
				</Text>
				<Flex direction={'column'} gap={'md'}>
					<Module title="Beholder">
						<Text>
							Parses chat logs from all of my Pterodactyl servers and sends them
							on Discord via a webhook. This is one of those projects that I've
							wanted to do for so long but I kept pushing it back, until I was
							bored one night and coded it in a couple of hours. That attempt
							ended up being broken after a couple hours as the builtin
							websocket client in .NET doesn't have auto reconnecting or
							anything, so the next day I fixed it and it's been working well
							ever since.
						</Text>
						<Text>
							Currently has parsing for Source Engine games and Minecraft.
						</Text>
					</Module>
					<Module title="Azimuth">
						<Text>
							My Discord bot that is coded in C# using Discord.NET. It's
							currently private and probably will stay like that for some time.
							It's a Discord bot mostly made for me and my friend group to mess
							about with. It's got a basic leveling system, connected to a MySQL
							database, has some item and inventory features and I plan to
							connect to a web interface, where you could see your money, items
							and etc.
						</Text>
						<Text>
							This was written like ages ago, I plan to replace the MySQL
							database with MongoDB and use entities to make everything work
							better, speaking of that web interface, I've basically already
							done it, it's just not that great.
						</Text>
					</Module>
					<Module title="FLWN.DEV but in Next.js">
						<Text>
							I did like my website when I made it, but it was made with no
							framework, just vanilla HTML, CSS and JavaScript for the lastfm
							api fetching. I still obviously liked it. but I wanted something
							more, I wanted components and a proper blog that I make myself and
							whatever else I can think of. I've been wanting to remake it for a
							long while in Next.js or some other framework, so I just did and
							it's pretty great so far :)
						</Text>
					</Module>
					<Module title="Plexamp Rich Presence">
						<Text>
							Recently I started using Plexamp instead of Spotify and it's been
							great so far, only thing I miss are features like listen together
							and mainly the rich presence on Discord. Obviously I looked up if
							someone has already made a solution for that and they have,
							however with how Plex's API isn't well documented and no real way
							for a normal user to check what's being played on their devices,
							it ends up needing the owner of the Plex server to use his token,
							as he has access to the dashboard. If its a user of a Plex Home it
							won't work with the existing ones.
						</Text>
						<Text>
							So I made my own, where you enter a username and it checks for
							that instead, and it worked pretty well for a bit, I didn't have a
							proper visual app for it yet, just a console window, but it
							worked. And then for some reason I came back to it to remake it in
							a visual app and it stopped working so I put that project off for
							now. I'll definitely come back to it, but make an API that the
							Plex server owner can put up for their users instead.
						</Text>
					</Module>
				</Flex>
			</Module>
		</Flex>
	);
};
