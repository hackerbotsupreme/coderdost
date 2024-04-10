import AddTask from './AddTask.jsx';
import TaskList from './TaskList.jsx';
import { TasksProvider } from './TasksContext.jsx';
import "./list.css"

export default function UseContext6() {
    return (
        <TasksProvider>
            <h1>Day off in Kyoto</h1>
            <AddTask />
            <TaskList />
        </TasksProvider>
    );
}
