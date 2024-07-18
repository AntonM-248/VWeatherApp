import { configureStore } from "@reduxjs/toolkit";
import recordReducer from './recordSlice';

const recordStore = configureStore({
  reducer: {
    records: recordReducer
  }
});

export default recordStore;