import { Flex, Text, Title } from '@mantine/core';
import classes from './Module.module.scss';

interface ModuleProps {
	title?: string;
	children?: React.ReactNode;
}

export const Module = ({ title, children }: ModuleProps) => {
	return (
		<Flex
			className={classes.module}
			direction={'column'}
			gap={'md'}
			p={'md'}
			pos={'relative'}
		>
			{title && <Text className={classes.title}>{title}</Text>}
			{children}
		</Flex>
	);
};
