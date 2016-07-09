import { List, Map } from 'immutable';
import _ from 'lodash';

const init = List([]);

export default function(todos=init, action) {
	return _.cond([
		[_.matches({type: 'ADD_TODO'}), function () {
			return todos.push(Map(action.payload));
		}],
		[_.matches({type: 'TOGGLE_TODO'}), function () {
			return todos.map(t => {
				return t.get('id') === action.payload
					? t.update('isDone', isDone => !isDone)
					: t
				;
			});
		}],
		[_.stubTrue, _.constant(todos)]
	])(action);
}