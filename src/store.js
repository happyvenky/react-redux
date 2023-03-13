import { configureStore } from '@reduxjs/toolkit';
import Addlist from './Reduceser/Adduser';

export default configureStore({
  reducer: {
    task: Addlist,
  },
});
