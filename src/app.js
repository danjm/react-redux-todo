import React from 'react';
import { render } from 'react-dom';
import { TodoList } from './components';
import { List, Map } from 'immutable';

const dummyTodos = List([
	Map({id: 0, isDone: false, text: 'item 1'}),
	Map({id: 1, isDone: false, text: 'item 2'}),
	Map({id: 2, isDone: false, text: 'item 3'}),
	Map({id: 3, isDone: false, text: 'item 4'})
]);

render(
	<TodoList todos={dummyTodos} />,
	document.getElementById('app')
);