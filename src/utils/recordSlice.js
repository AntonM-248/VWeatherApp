import { createSlice } from "@reduxjs/toolkit";

const recordSlice = createSlice({
  name: 'recordStore',
  initialState: {
    records: {},
  },
  reducers: {
    addRecord: (state, action ) => {
      const record = JSON.parse(action.payload);
      if (record.zip in state) {
        state.records[record['zip']]['max'] = Math.max(parseFloat(record['max']), parseFloat(state.records[record['zip']]['max']));
        state.records[record['zip']]['min'] = Math.min(parseFloat(record['min']), parseFloat(state.records[record['zip']]['min']));
      }
      else {
        state.records[record['zip']] = {
          max: '',
          min: '',
        };
        state.records[record['zip']]['max'] = record['max'];
        state.records[record['zip']]['min'] = record['min'];
      }
      console.log(state.records);
    },
    removeRecord: (state, action) => {
      const { payload: key } = action;
      state.records = { ...state.records, [key]: undefined };
    }
  },
});

export const { addRecord, removeRecord } = recordSlice.actions;

export default recordSlice.reducer;