import React from 'react';

export function Todo(props) {
	const { todo } = props;
	return (todo.isDone
		? <strike> { todo.text } </strike>
		: <span> { todo.text } </span>
	);
};

export function TodoList(props) {
	const { todos } = props;
	return (
		<div className='todo'>
			<input type="text" placeholder="Add Todo" />
			<ul className="todo__list">
				{todos.map(t => (
					<li key={t.id} className='to__item'>
						<Todo todo={t} />
					</li>
				))}
			</ul>
		</div>
	);
};