import React, {useReducer, createContext, useContext, useRef} from 'react';

const initialTodos = [
    {
        id: 1,
        text: 'make project',
        done: true
    },
    {
        id: 2,
        text: 'component styling',
        done: true
    },
    {
        id: 3,
        text: 'make context',
        done: false
    },
    {
        id: 4,
        text: 'make function',
        done: false
    },
];

function todoReducer(state, action) {
    switch(action.type) {
        case 'CREATE':
            return state.concat(action.todo);
        case 'TOGGLE':
            return state.map(todo => todo.id === action.id ? {...todo, done: !todo.done} : todo);
        case 'REMOVE':
            return state.filter(todo => todo.id !== action.id);
        default:
            throw new Error('Unhandled action type!');
    }
}

const TodoStateContext = createContext();
const TodoDispatchContext = createContext();
const TodoNextIdContext = createContext();

export function TodoProvider({children}) {
    const [state, dispatch] = useReducer(todoReducer, initialTodos);
    const nextId = useRef(5);

    return (
        <TodoStateContext.Provider value={state}>
            <TodoDispatchContext.Provider value={dispatch}>
                <TodoNextIdContext.Provider value={nextId}>
                    {children}
                </TodoNextIdContext.Provider>
            </TodoDispatchContext.Provider>
        </TodoStateContext.Provider>
    );
}

export function useTodoState() {
    const context = useContext(TodoStateContext);
    if(!context) {
        throw new Error('cannot find todoprovider');
    }
    return context;
}

export function useTodoDispatch() {
    const context = useContext(TodoDispatchContext);
    if(!context) {
        throw new Error('cannot find todoprovider');
    }
    return context;
}

export function useTodoNextId() {
    const context = useContext(TodoNextIdContext);
    if(!context) {
        throw new Error('cannot find todoprovider');
    }
    return context;
}