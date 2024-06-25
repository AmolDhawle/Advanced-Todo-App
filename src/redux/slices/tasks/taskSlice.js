import { createSlice } from '@reduxjs/toolkit';

const loadTasksFromLocalStorage = () => {
    try {
      const serializedTasks = localStorage.getItem('tasks');
      return serializedTasks ? JSON.parse(serializedTasks) : [];
    } catch (e) {
      console.error("Could not load tasks from localStorage", e);
      return [];
    }
  };

const saveTasksToLocalStorage = (tasks) => {
    try {
      const serializedTasks = JSON.stringify(tasks);    // Convert tasks array to a JSON string
      localStorage.setItem('tasks', serializedTasks);   // Save JSON string to localStorage
    } catch (e) {
      console.error("Could not save tasks to localStorage", e); // Log any errors that occur
    }
  };
  
  // Initial state for the task slice, with an empty tasks array
const initialState = {
    tasks: loadTasksFromLocalStorage()
};


const taskSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    // Adds a new task to the state and saves the updated tasks array to localStorage.
    addTask: (state, action) => {
        // Add the new task to the tasks array with a unique id based on the current timestamp
        state.tasks.push({ ...action.payload, id: Date.now() });
        saveTasksToLocalStorage(state.tasks);   // Save updated tasks array to localStorage
    
    },
    // Edits an existing task in the state and saves the updated tasks array to localStorage.
    editTask: (state, action) => {
        const index = state.tasks.findIndex(task => task.id === action.payload.id);
        if (index !== -1) {
          state.tasks[index] = action.payload;
          saveTasksToLocalStorage(state.tasks);
        }
      },
      // Deletes a task from the state and saves the updated tasks array to localStorage.
      deleteTask: (state, action) => {
        state.tasks = state.tasks.filter(task => task.id !== action.payload);
        saveTasksToLocalStorage(state.tasks);
      },
      toggleTaskCompletion: (state, action) => {
        const index = state.tasks.findIndex(task => task.id === action.payload);
        if (index !== -1) {
          state.tasks[index].completed = !state.tasks[index].completed;
          saveTasksToLocalStorage(state.tasks);
        }
      },
  }
});

export const { addTask, editTask, deleteTask, toggleTaskCompletion } = taskSlice.actions;
export default taskSlice.reducer;