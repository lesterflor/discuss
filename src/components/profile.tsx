'use client';

import { Session } from 'next-auth';

interface IProfile {
	session: Session | null;
}

export default function Profile({ session }: IProfile) {
	console.log(session);

	if (session?.user) {
		return <div>From client: {JSON.stringify(session.user)}</div>;
	}

	return <div>From client: user is NOT signed in</div>;
}
