'use server';

import { z } from 'zod';

const createTopicSchema = z.object({
	name: z
		.string()
		.min(3)
		.regex(/^[a-z-]+$/, {
			message: 'must be lowercase letters or dashes without spaces.'
		}),
	description: z.string().min(10)
});

export interface ICreateTopicFormState {
	errors: {
		name?: string[];
		description?: string[];
	};
}

export async function createTopic(
	formState: ICreateTopicFormState,
	formData: FormData
): Promise<ICreateTopicFormState> {
	const result = createTopicSchema.safeParse({
		name: formData.get('name'),
		description: formData.get('description')
	});

	if (!result.success) {
		return {
			errors: result.error.flatten().fieldErrors
		};
	}

	return {
		errors: {}
	};

	// todo: revalidate the home page
}
