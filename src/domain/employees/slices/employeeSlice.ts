import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { EmployeeResponse } from '../types';

type SeniorEmployee = {
  seniorEmployees: EmployeeResponse[];
}
const initialState:SeniorEmployee = {
  seniorEmployees: [],
};

const employeeSlice = createSlice({
  name: 'employee',
  initialState,
  reducers: {
    addEmployeeToSeniors: (state, action: PayloadAction<EmployeeResponse>) => {
      const employeeToAdd = action.payload;
      // Check if the employee is already in the list
      const existingEmployee = state.seniorEmployees.find(employee => employee.id === employeeToAdd.id);
      if (!existingEmployee) {
        state.seniorEmployees.push(employeeToAdd);
      }
      
    },
    removeEmployeeFromSeniors: (state, action: PayloadAction<string>) => {
      const employeeIdToRemove = action.payload;
      // Filter out the user with the given id
      state.seniorEmployees = state.seniorEmployees.filter(employee => employee.id !== employeeIdToRemove);
    },
    clearAllSeniors: (state) => {
     state = initialState;
     return state;
    }
  },
});

export const { addEmployeeToSeniors, removeEmployeeFromSeniors, clearAllSeniors } = employeeSlice.actions;
export default employeeSlice.reducer;
