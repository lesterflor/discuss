'use server';

import { createComment, ICreateCommentFormState } from './createComment';
import { createPost, ICreatePostFormState } from './createPost';
import { createTopic, ICreateTopicFormState } from './createTopic';
import { search } from './search';
import { signIn } from './signIn';
import { signOut } from './signOut';

export const comment = async (
	{ postId, parentId }: { postId: string; parentId?: string },
	formState: ICreateCommentFormState,
	formData: FormData
) => {
	return createComment({ postId, parentId }, formState, formData);
};

export const post = async (
	slug: string,
	formState: ICreatePostFormState,
	formData: FormData
) => {
	return createPost(slug, formState, formData);
};

export const topic = async (
	formState: ICreateTopicFormState,
	formData: FormData
) => {
	return createTopic(formState, formData);
};

export const login = async () => {
	return signIn();
};

export const logOut = async () => {
	return signOut();
};

export const lookup = async (formData: FormData) => {
	return search(formData);
};
