'use server';

import { createComment } from './createComment';
import { createPost, ICreatePostFormState } from './createPost';
import { createTopic, ICreateTopicFormState } from './createTopic';
import { signIn } from './signIn';
import { signOut } from './signOut';

export const comment = async () => {
	return createComment();
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
