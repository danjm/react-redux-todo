import React from 'react';
import { render } from 'react-dom';
import { TodoList } from './components';

const dummyTodos = [
	{id: 0, isDone: false, text: 'item 1'},
	{id: 1, isDone: false, text: 'item 2'},
	{id: 2, isDone: false, text: 'item 3'},
	{id: 3, isDone: false, text: 'item 4'}
];

render(
	<TodoList todos={dummyTodos} />,
	document.getElementById('app')
);