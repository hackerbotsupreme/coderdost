import { useReducer } from 'react';

function createInitialState(username) {
    const initialTodos = [];
    for (let i = 0; i < 50; i++) {
        initialTodos.push({
            id: i,
            text: username + "'s task #" + (i + 1)
        });
    }
    return {
        draft: '',
        todos: initialTodos,
    };
}

function reducer(state, action) {
    switch (action.type) {
        case 'changed_draft': {
            return {
                draft: action.nextDraft,
                todos: state.todos,
            };
        };
        case 'added_todo': {
            return {
                draft: '',
                todos: [{
                    id: state.todos.length,
                    text: state.draft
                }, ...state.todos]
            }
        }
    }
    throw Error('Unknown action: ' + action.type);
}

export default function UseReducer6({ username }) {
    const [state, dispatch] = useReducer(
        reducer,
        createInitialState(username)
    );
    return (
        <>
            <input
                value={state.draft}
                onChange={e => {
                    dispatch({
                        type: 'changed_draft',
                        nextDraft: e.target.value
                    })
                }}
            />
            <button onClick={() => {
                dispatch({ type: 'added_todo' });
            }}>Add</button>
            <ul>
                {state.todos.map(item => (
                    <li key={item.id}>
                        {item.text}
                    </li>
                ))}
            </ul>
        </>
    );
}
