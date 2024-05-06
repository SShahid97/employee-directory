import { Employee } from "../domain/employees/types";
// import * as data from '../data/db.json';

export const isEmployeeAddedToSeniors = (employees: Employee[], employeeId: string )=>{
   const employee = employees?.find((employee)=>employee?.id === employeeId);
   if(employee){
    return true;
   }
   return false;
}

export const getCurrentFormattedDate = `${new Date().getFullYear()}-0${
   new Date().getMonth() + 1
 }-0${new Date().getDate()}`;