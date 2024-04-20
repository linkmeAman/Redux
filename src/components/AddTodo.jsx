import  { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../features/todo/todoSlice";
import { Input } from 'keep-react'
import './todo.css';

const AddTodo = () => {
  const [inputText, setInputText] = useState("");
  const [darkMode, setDarkMode] = useState(false);
  const dispatch = useDispatch();

  const ONCOPYFUNC = (e) => {
    console.log("copied",e)

  }

  const createTodo = (event) => {
    event.preventDefault();
    if (!inputText) return;

    dispatch(addTodo(inputText));
    setInputText("");
  };

  const handleChange = (event) => {
    setInputText(event.target.value);
  };

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    if (!darkMode) {
      document.body.classList.add('dark');
    } else {
      document.body.classList.remove('dark');
    }
  };

  return (
    <>
      <div className={`w-full max-w-md mx-auto mt-8 ${darkMode ? 'dark' : ''} bg-bermuda dark:bg-gray-800 shadow-md rounded px-8 pt-6 pb-8 mb-4`}>
        <form onSubmit={createTodo}>
          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="text-input">
              Enter Text
            </label>
            <div className="flex items-center border-b border-b-2 border-blue-500 py-2">
              <Input
                id="text-input"
                type="text"
                placeholder="Enter text here"
                value={inputText}
                onChange={handleChange}onCopy={ONCOPYFUNC}
                className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
              />
              <button
                type="submit"color="primary"
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              >
                Submit
              </button>
            </div>
          </div>
        </form>
        <button
          className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          onClick={toggleDarkMode}
        >
          {darkMode ? 'Light Mode' : 'Dark Mode'}
        </button>
      </div>
    </>
  );
};

export default AddTodo;
