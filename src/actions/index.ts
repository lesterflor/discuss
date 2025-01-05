'use server';

import { createComment } from './createComment';
import { createPost } from './createPost';
import { createTopic } from './createTopic';
import { signIn } from './signIn';
import { signOut } from './signOut';

export const comment = async () => {
	return createComment();
};

export const post = async () => {
	return createPost();
};

export const topic = async () => {
	return createTopic();
};

export const login = async () => {
	return signIn();
};

export const logOut = async () => {
	return signOut();
};
