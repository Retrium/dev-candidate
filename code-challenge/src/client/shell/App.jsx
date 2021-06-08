import React, { useState } from 'react';
import Select from 'react-select';
import { colorPalette } from './colors';
import { SafetyCheck } from '../SafetyCheck';

import 'normalize.css';

const FACILITATOR_ROLE = 'FACILITATOR';
const PARTICIPANT_ONE_ROLE = 'PARTICIPANT_ONE';
const PARTICIPANT_TWO_ROLE = 'PARTICIPANT_TWO';

const ROLE_OPTIONS = [
	{ label: 'Feline Facilitator', value: FACILITATOR_ROLE },
	{ label: 'Panther Participant', value: PARTICIPANT_ONE_ROLE },
	{ label: 'Parrot Participant', value: PARTICIPANT_TWO_ROLE },
];

export default function App() {
	const [currentRole, setCurrentRole] = useState(FACILITATOR_ROLE);

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
						defaultValue={ROLE_OPTIONS[0]}
						getValue={() =>
							ROLE_OPTIONS.find(option => option.value === currentRole)
						}
						onChange={value => setCurrentRole(value.value)}
						options={ROLE_OPTIONS}
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
			<SafetyCheck />
		</div>
	);
}
