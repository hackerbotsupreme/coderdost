import AddTask from './AddTask6.jsx';
import TaskList from './TaskList6.jsx';
import { TasksProvider } from './TasksContext6.jsx';

export default function TaskApp6() {
    return (
        <TasksProvider>
            <h1>Day off in Kyoto</h1>
            <AddTask />
            <TaskList />
        </TasksProvider>
    );
}
