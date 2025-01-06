'use client';
import {
	Input,
	Button,
	Textarea,
	Popover,
	PopoverTrigger,
	PopoverContent
} from '@nextui-org/react';
import * as actions from '@/actions';
import { useActionState, startTransition } from 'react';
import FormButton from '@/components/common/formButton';

export default function TopicCreateForm() {
	const [formState, action, isPending] = useActionState(actions.topic, {
		errors: {}
	});

	function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
		event.preventDefault();

		const formData = new FormData(event.currentTarget);
		startTransition(() => {
			action(formData);
		});
	}

	return (
		<Popover placement='left'>
			<PopoverTrigger>
				<Button color='primary'>Create Topic</Button>
			</PopoverTrigger>
			<PopoverContent>
				<form
					onSubmit={handleSubmit}
					action={action}>
					<div className='flex flex-col gap-4 p-4 w-80'>
						<h3 className='text-lg'>Create a topic</h3>
						<Input
							name='name'
							label='name'
							labelPlacement='outside'
							placeholder='Name'
							isInvalid={!!formState.errors.name}
							errorMessage={formState.errors.name?.join(', ')}
						/>

						<Textarea
							name='description'
							label='Description'
							labelPlacement='outside'
							placeholder='Describe your topic'
							isInvalid={!!formState.errors.description}
							errorMessage={formState.errors.description?.join(', ')}
						/>

						{formState.errors._form ? (
							<div className='p-2 bg-red-200 border-red-400 rounded'>
								{formState.errors._form?.join(', ')}
							</div>
						) : null}
						<FormButton isLoading={isPending}>Submit</FormButton>
					</div>
				</form>
			</PopoverContent>
		</Popover>
	);
}
