import React, { useState } from 'react';
import { motion } from "framer-motion";

export const TodoForm = ({ addTodo }) => {
  const [value, setValue] = useState("");

  const handleSubmit = e => {
    e.preventDefault();
    if (value) {
      addTodo(value);
      setValue("");
    }
  };

  return (
    <form className="TodoForm" onSubmit={handleSubmit}>
      <input 
        type="text" 
        className="todo-input" 
        value={value} 
        placeholder="What is the task today?"
        onChange={(e) => setValue(e.target.value)}
      />
      <motion.button
        whileHover={{ scale: 1.1, backgroundColor: "#6c43e0" }}
        whileTap={{ scale: 0.9 }}
        transition={{ type: "spring", stiffness: 300 }}
        className="todo-btn"
      >
        Add Task
      </motion.button>
    </form>
  );
};
