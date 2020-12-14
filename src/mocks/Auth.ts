export interface User {
	id: number;
	name_first: string;
	name_last: string;
	name_full: string;
	name_initials: string;
	email_personal: string;
	username: string;
	permissions: string[];
}

export const user: User & { password: string } = {
	id: 1,
	name_first: 'Michael',
	name_last: 'White',
	name_full: 'Michael White',
	name_initials: 'MW',
	email_personal: 'MJW2291@gmail.com',
	username: 'mjw2291',
	password: 'Test123',
	permissions: ['ADMIN'],
};

const getCurrentUser = (): Omit<User, 'password'> => {
	const { password, ...currentUser } = user;
	return currentUser;
};

export const useAuth = () => ({
	currentUser: getCurrentUser(),
	userPermissions: user.permissions,
	authLogout: () => {
		alert('logout clicked');
	},
});
