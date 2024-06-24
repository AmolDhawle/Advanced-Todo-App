import { createSlice } from '@reduxjs/toolkit';


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
  tasks: []
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
  }
});

export const { addTask } = taskSlice.actions;
export default taskSlice.reducer;
