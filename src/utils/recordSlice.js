import { createSlice } from "@reduxjs/toolkit";

const recordSlice = createSlice({
  name: 'recordStore',
  initialState: {
    records: {},
  },
  reducers: {
    addRecord: (state, action ) => {
      const record = action.payload;
      console.log(record);
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
    }
  },
});

export const { addRecord } = recordSlice.actions;

export default recordSlice.reducer;