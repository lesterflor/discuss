'use client';

import * as actions from '@/actions';
import { useSearchParams } from 'next/navigation';
import { Input } from '@nextui-org/react';

export default function SearchInput() {
	const searchParams = useSearchParams();
	return (
		<form action={actions.lookup}>
			<Input
				name='term'
				defaultValue={searchParams.get('term') || ''}
			/>
		</form>
	);
}
