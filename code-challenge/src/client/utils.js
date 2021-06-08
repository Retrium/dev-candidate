import { FACILITATOR_ROLE, PARTICIPANT_ROLE, PARTICIPANTS } from './shell/App';

export function isFacilitator(user) {
	return user.role === FACILITATOR_ROLE;
}

export function isParticipant(user) {
	return user.role === PARTICIPANT_ROLE;
}

export function haveIVoted(safetyRatings, currentUser) {
	return getMyRating(safetyRatings, currentUser) !== null;
}

export function hasEveryoneVoted(safetyRatings) {
	const completedRatings = Object.values(safetyRatings).filter(
		rating => rating !== null
	);
	return completedRatings.length === Object.keys(PARTICIPANTS).length;
}

export function getMyRating(safetyRatings, currentUser) {
	return safetyRatings[currentUser.userId];
}

export function getRatingsTotals(safetyRatings) {
	return Object.values(safetyRatings).reduce(
		(acc, curr) => {
			const existingRating = acc[curr];
			return {
				...acc,
				[curr]: existingRating + 1,
			};
		},
		{ 1: 0, 2: 0, 3: 0, 4: 0, 5: 0 }
	);
}
