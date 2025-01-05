import { Button } from '@nextui-org/react';
import * as actions from '@/actions';
import { auth } from '@/auth';
import Profile from '@/components/profile';

export default async function Home() {
	const session = await auth();

	return (
		<div>
			{!session?.user ? (
				<form action={actions.signIn}>
					<Button type='submit'>Sign In</Button>
				</form>
			) : (
				<div>
					<img
						width={40}
						height={40}
						className='w-10 h-10 rounded-full'
						src={session.user.image as string}
					/>

					<form action={actions.signOut}>
						<Button type='submit'>Sign Out</Button>
					</form>
				</div>
			)}

			{session?.user ? (
				<div>{JSON.stringify(session.user)}</div>
			) : (
				<div>Signed Out</div>
			)}

			<Profile session={session} />
		</div>
	);
}
