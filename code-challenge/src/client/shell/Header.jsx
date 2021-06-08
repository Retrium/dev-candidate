import React from 'react';
import Select from 'react-select';

import { colorPalette } from './colors';

export const Header = ({ allUsers, currentUser, setCurrentUser }) => {
	const userOptions = Object.values(allUsers).map(participant => ({
		label: `${participant.firstName} ${participant.lastName}`,
		value: participant.userId,
	}));

	return (
		<header
			style={{
				alignItems: 'center',
				backgroundColor: colorPalette.slate,
				color: colorPalette.white,
				display: 'flex',
				justifyContent: 'space-between',
				padding: 20,
			}}
		>
			<h1 style={{ fontFamily: '"DM Sans", sans-serif' }}>
				Retrium Safety Check
			</h1>
			<label>
				Current User
				<Select
					defaultValue={userOptions[0]}
					getValue={() =>
						userOptions.find(option => option.value === currentUser.userId)
					}
					onChange={value => setCurrentUser(allUsers[value.value])}
					options={userOptions}
					styles={{
						container: base => ({
							...base,
							color: colorPalette.midnight,
							width: 250,
						}),
					}}
				/>
			</label>
		</header>
	);
};
