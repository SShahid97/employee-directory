import { addEmployeeToSeniors, removeEmployeeFromSeniors, clearAllSeniors } from '../employeeSlice';
import { store } from '../../../../store/store';

const employee1 = {
    id:"1001",
    firstName: "Neanci",
    lastName: "Vandervort",
    email: "your.email+fakedata50342@gmail.com",
    position: "Assistant Professor",
    department: "Business Management",
    phone: "0095214738",
    country: "Portugal",
    address: "136 Murazik Flats",
    gender: "Female",
    employeeCode: "53548",
    joiningDate: "2023-10-30",
    salary: "52000.00",
    createdAt: 1714885719892,
    updatedAt: 1714885719892,
  };
const employee2 = {
    id:"1002",
    firstName: "Irbani",
    lastName: "Solomo",
    email: "your.email+fakedata50342@gmail.com",
    position: "Assistant Professor",
    department: "Business Management",
    phone: "0095214738",
    country: "Portugal",
    address: "136 Murazik Flats",
    gender: "Female",
    employeeCode: "53548",
    joiningDate: "2023-10-30",
    salary: "52000.00",
    createdAt: 1714885719892,
    updatedAt: 1714885719892,
};

describe('employeeSlice', () => {
  test('should add employee to seniors', () => {
    store.dispatch(addEmployeeToSeniors(employee1));
    const state = store.getState().reducer.employee;

    expect(state.seniorEmployees).toContainEqual(employee1);
  });

  test('should remove employee from seniors', () => {
    store.dispatch(addEmployeeToSeniors(employee1));
    store.dispatch(addEmployeeToSeniors(employee2));
    store.dispatch(removeEmployeeFromSeniors('1001'));

    const state = store.getState().reducer.employee;
    expect(state.seniorEmployees).not.toContainEqual(employee1);
    expect(state.seniorEmployees).toContainEqual(employee2);
  });

  test('should clear all seniors', () => {

    store.dispatch(addEmployeeToSeniors(employee1));
    store.dispatch(addEmployeeToSeniors(employee2));

    store.dispatch(clearAllSeniors());

    const state = store.getState().reducer.employee;
    expect(state.seniorEmployees).toEqual([]);
  });
});
