'use client';
import { Button } from '@nextui-org/react';

interface IFormButtonProps {
	children: React.ReactNode;
	isLoading: boolean;
}

export default function FormButton({ children, isLoading }: IFormButtonProps) {
	return (
		<Button
			isLoading={isLoading}
			type='submit'>
			{children}
		</Button>
	);
}
