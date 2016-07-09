import React from 'react';
import { render } from 'react-dom';
import { createStore } from 'redux';
import { TodoList } from './components';
import reducer from './reducer';

const store = createStore(reducer);

render(
	<TodoList todos={store.getState()} />,
	document.getElementById('app')
);