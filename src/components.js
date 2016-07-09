import React from 'react';

export function Todo(props) {
	const { todo } = props;
	
	return (todo.get('isDone')
		? <strike> { todo.get('text') } </strike>
		: <span> { todo.get('text') } </span>
	);
};

export function TodoList(props) {
	const { todos, addTodo, toggleTodo } = props;
	
	const onSubmit = (event) => {
		const input = event.target;
		const text = input.value;
		const isEnterKey = (event.which == 13);
		const isLongEnough = text.length > 0;
		
		if (isEnterKey && isLongEnough) {
			input.value = '';
			addTodo(text);
		}
	};
	
	const toggleClick = id => event => toggleTodo(id);
	
	return (
		<div className='todo'>
			<input
				type="text"
				className = "todo__entry"
				placeholder="Add Todo"
				onKeyDown={onSubmit} />
			<ul className="todo__list">
				{todos.map(t => (
					<li key={t.get('id')}
						className='to__item'
						onClick={toggleClick(t.get('id'))}>
						<Todo todo={t} />
					</li>
				))}
			</ul>
		</div>
	);
};