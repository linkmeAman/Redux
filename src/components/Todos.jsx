// import React from "react";
import { useSelector, useDispatch } from 'react-redux';
import { removeTodo, updateTodo } from '../features/todo/todoSlice';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faTrash } from '@fortawesome/free-solid-svg-icons';

import './todo.css';

const Todos = () => {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  const handleChange = (event, id) => {
    const newText = event.target.value;
    console.log(event)
    dispatch(updateTodo({ id, text: newText }));
  };

  return (
    <div className="max-w-md mx-auto mt-8">
      <h2 className="text-2xl font-bold mb-4">Todos</h2>
      <ul className="space-y-2 mb-6">
        {todos.map((todo) => (
          <li key={todo.id} className="bg-black dark:bg-black-800 rounded-md p-6">
            <input
              className={`text-lg `}
              value={todo.text}
              type="text"
              onChange={(event) => handleChange(event, todo.id)}
            />
            <button
              onClick={() => dispatch(removeTodo(todo.id))}
              className="bg-blue hover:bg-blue text-black font-bold py-2 px-4 rounded focus:outline-none "
            >
              {/* <FontAwesomeIcon icon={faTrash} /> */}Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Todos;
