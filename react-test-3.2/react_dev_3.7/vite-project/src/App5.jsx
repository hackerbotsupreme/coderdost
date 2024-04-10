import AddTask from './AddTask5.jsx';
import TaskList from './TaskList5.jsx';
import { TasksProvider } from './TasksContext5.jsx';

export default function App5() {
    return (
        <TasksProvider>
            <h1>Day off in Kyoto</h1>
            <AddTask />
            <TaskList />
        </TasksProvider>
    );
}
