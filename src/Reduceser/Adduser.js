import { createSlice } from '@reduxjs/toolkit';
const initialState = {
  tasklist: [],
};
export const Addlist = createSlice({
  name: 'AddList',
  initialState,
  reducers: {
    addUserList: (state, action) => {
      const id = math.random() * 100;
      let task = { ...action.payload, id };
      state.tasklist.push(task);
    },
  },
});
export const { addUserList } = Addlist.actions;
export default Addlist.reducer;
