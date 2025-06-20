import { Flex, Text } from '@mantine/core';
import classes from './Module.module.scss';

interface ModuleProps {
	title?: string;
	children?: React.ReactNode;
	onTitleClick?: () => void;
}

export const Module = ({ title, children, onTitleClick }: ModuleProps) => {
	return (
		<Flex
			className={classes.module}
			direction={'column'}
			gap={'md'}
			p={'md'}
			pos={'relative'}
		>
			{title && (
				<Text className={classes.title} onClick={onTitleClick}>
					{title}
				</Text>
			)}
			{children}
		</Flex>
	);
};
