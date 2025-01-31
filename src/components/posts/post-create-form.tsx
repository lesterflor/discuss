'use client';

import { useActionState } from 'react';
import {
	Input,
	Button,
	Textarea,
	Popover,
	PopoverTrigger,
	PopoverContent
} from '@nextui-org/react';
import * as actions from '@/actions';
import FormButton from '@/components/common/formButton';

interface IPostCreateFormProps {
	slug: string;
}

export default function PostCreateForm({ slug }: IPostCreateFormProps) {
	const [formState, action, isPending] = useActionState(
		actions.post.bind(null, slug),
		{
			errors: {}
		}
	);

	return (
		<Popover placement='left'>
			<PopoverTrigger>
				<Button color='primary'>Create a post</Button>
			</PopoverTrigger>
			<PopoverContent>
				<form action={action}>
					<div className='flex flex-col gap-4 p-4 w-80'>
						<h3 className='text-lg'>Create a Post</h3>

						<Input
							isInvalid={!!formState.errors.title}
							errorMessage={formState.errors.title?.join(', ')}
							name='title'
							label='Title'
							labelPlacement='outside'
							placeholder='Title'
						/>

						<Textarea
							isInvalid={!!formState.errors.content}
							errorMessage={formState.errors.content?.join(', ')}
							name='content'
							label='Content'
							labelPlacement='outside'
							placeholder='Content'
						/>

						<FormButton isLoading={isPending}>Create Post</FormButton>
					</div>
				</form>
			</PopoverContent>
		</Popover>
	);
}
