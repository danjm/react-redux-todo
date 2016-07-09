import { connext } from 'react-redux';
import * from components from './components';
import { addTodo, toggleTodo } from './actions';

export const TodoList = connect(
	function mapStateToProps(state) {
		return { todos: state };
	},
	function mapDispatchToProps(dispatch) {
		return {
			addTodo: text => dispatch(addTodo(text)),
			toggleTodo: id => dispatch(toggleTodo(id))
		}
	}
)(components.TodoList);