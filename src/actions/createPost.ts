'use server';

import { z } from 'zod';
import { auth } from '@/auth';
import type { Post } from '@prisma/client';
import { redirect } from 'next/navigation';
import { db } from '@/db';
import paths from '@/paths';
import { revalidatePath } from 'next/cache';

const createPostSchema = z.object({
	title: z.string().min(3),
	content: z.string().min(10)
});

export interface ICreatePostFormState {
	errors: {
		title?: string[];
		content?: string[];
		_form?: string[];
	};
}

export async function createPost(
	slug: string,
	formState: ICreatePostFormState,
	formData: FormData
): Promise<ICreatePostFormState> {
	const result = createPostSchema.safeParse({
		title: formData.get('title'),
		content: formData.get('content')
	});

	if (!result.success) {
		return {
			errors: result.error.flatten().fieldErrors
		};
	}

	const session = await auth();
	if (!session || !session.user) {
		return {
			errors: {
				_form: ['You must be signed in to do this']
			}
		};
	}

	const topic = await db.topic.findFirst({
		where: { slug }
	});

	if (!topic) {
		return {
			errors: {
				_form: ['Cannot find topic']
			}
		};
	}

	let post: Post;
	try {
		post = await db.post.create({
			data: {
				title: result.data.title,
				content: result.data.content,
				userId: session.user.id as string,
				topicId: topic.id
			}
		});
	} catch (err: unknown) {
		if (err instanceof Error) {
			return {
				errors: {
					_form: [err.message]
				}
			};
		} else {
			return {
				errors: {
					_form: ['Something went wrong']
				}
			};
		}
	}

	revalidatePath(paths.topicShowPath(slug));
	redirect(paths.postShowPath(slug, post.id));
}
