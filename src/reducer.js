import { List, Map } from 'immutable';
import _ from 'lodash';

const init = List([]);

export default function(todos=init, action) {
	return _.cond([
		[_.matches({type: 'ADD_TODO'}), function (addAction) {
			return todos.push(Map(addAction.payload));
		}],
		[_.matches({type: 'TOGGLE_TODO'}), function (toggleAction) {
			return todos.map(t => {
				return t.get('id') === toggleAction.payload
					? t.update('isDone', isDone => !isDone)
					: t
				;
			});
		}],
		[_.stubTrue, _.constant(todos)]
	])(action);
}