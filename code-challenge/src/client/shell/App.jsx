import React, { useState } from 'react';
import { colorPalette } from './colors';
import { Header } from './Header';
import { SafetyCheck } from '../SafetyCheck';

import 'normalize.css';

export const FACILITATOR_ROLE = 'FACILITATOR';
export const PARTICIPANT_ROLE = 'PARTICIPANT';

export const PARTICIPANTS = {
	user1: {
		firstName: 'Feline',
		lastName: 'Facilitator',
		role: FACILITATOR_ROLE,
		userId: 'user1',
	},
	user2: {
		firstName: 'Panther',
		lastName: 'Participant',
		role: PARTICIPANT_ROLE,
		userId: 'user2',
	},
	user3: {
		firstName: 'Parrot',
		lastName: 'Participant',
		role: PARTICIPANT_ROLE,
		userId: 'user3',
	},
};

const INITIAL_SAFETY_RATINGS = {
	user1: null,
	user2: null,
	user3: null,
};

export default function App() {
	const [currentUser, setCurrentUser] = useState(PARTICIPANTS.user1);
	const [safetyRatings, setSafetyRatings] = useState(INITIAL_SAFETY_RATINGS);

	const handleSafetyRatingUpdate = newRating => {
		const newSafetyRatings = {
			...safetyRatings,
			[currentUser.userId]: newRating,
		};
		setSafetyRatings(newSafetyRatings);
	};

	return (
		<div
			style={{
				backgroundColor: colorPalette.silver,
				fontFamily: '"Open Sans", sans-serif',
				height: '100%',
				position: 'absolute',
				width: '100%',
			}}
		>
			<Header
				allUsers={PARTICIPANTS}
				currentUser={currentUser}
				setCurrentUser={setCurrentUser}
			/>
			<SafetyCheck
				currentUser={currentUser}
				safetyRatings={safetyRatings}
				updateSafetyRating={handleSafetyRatingUpdate}
			/>
		</div>
	);
}
