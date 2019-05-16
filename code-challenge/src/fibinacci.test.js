import test from 'tape'
import fibinacci from './fibinacci'

test(' it passess.', assert => {

	assert.equals( fibinacci(2), 4 );

	assert.end();
} );
