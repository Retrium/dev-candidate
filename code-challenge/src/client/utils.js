import { FACILITATOR_ROLE, PARTICIPANT_ROLE, PARTICIPANTS } from './shell/App';

export function isFacilitator(user) {
	return user.role === FACILITATOR_ROLE;
}

export function isParticipant(user) {
	return user.role === PARTICIPANT_ROLE;
}

export function haveIVoted(safetyRatings, currentUser) {
	return safetyRatings[currentUser.userId] !== null;
}

export function hasEveryoneVoted(safetyRatings) {
	const completedRatings = Object.values(safetyRatings).filter(
		rating => rating !== null
	);
	return completedRatings.length === Object.keys(PARTICIPANTS).length;
}
