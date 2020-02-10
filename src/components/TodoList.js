import React from 'react';
import styled from 'styled-components';
import TodoItem from './TodoItem';

const TodoListBlock = styled.div`
    flex: 1;
    padding: 20px 32px;
    padding-bottom: 48px;
    overflow-y: auto;
`;

function TodoList() {
    return(
        <TodoListBlock>
            <TodoItem text="할 일 1" done={true}></TodoItem>
            <TodoItem text="할 일 2" done={true}></TodoItem>
            <TodoItem text="할 일 3" done={false}></TodoItem>
            <TodoItem text="할 일 4" done={false}></TodoItem>

        </TodoListBlock>
    );
}

export default TodoList;