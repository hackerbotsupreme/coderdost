import List from './List3.jsx';
import { filterTodos } from './utils3.jsx'

export default function TodoList({ todos, theme, tab }) {
    const visibleTodos = filterTodos(todos, tab);
    return (
        <div className={theme}>
            <p><b>Note: <code>List</code> is artificially slowed down!</b></p>
            <List items={visibleTodos} />
        </div>
    );
}
