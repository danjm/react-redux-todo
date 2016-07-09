import _ from 'lodash';

export function addTodo(text) {
	return {
		type: 'ADD_TODO',
		payload: {
			id: _.uniqueId(),
			isDone: false,
			text: text
		}
	}
}

export function toggleTodo (id) {
	return {
		type: 'TOGGLE_TODO',
		payload: id
	}
}