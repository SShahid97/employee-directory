import * as Yup from 'yup';
import { alphaNumeric, alphabets, amount, phoneNumber } from '../../../utils/regex';

export const EmployeeSchema = Yup.object().shape({
    firstName: Yup.string()
    .required('First Name is required')
    .matches(alphabets, 'First Name can only contain alphabets')
    .min(3, 'Mininum 3 characters')
    .max(10, 'Maximum 10 characters'),
    lastName: Yup.string()
    .required('Last Name is required')
    .matches(alphabets, 'Last Name can only contain alphabets')
    .min(3, 'Mininum 3 characters')
    .max(10, 'Maximum 10 characters'),
    email: Yup.string()
    .required('Email is required')
    .email('Email must be a valid email address'),
    address: Yup.string()
    .required('Address is required')
    .matches(alphaNumeric, 'Address can only contain alphabets and numbers')
    .min(6, 'Mininum 6 characters')
    .max(25, 'Maximum 25 characters'),
    country: Yup.string()
    .required('Country is required')
    .min(3, 'Mininum 3 characters')
    .max(40, 'Maximum 40 characters'),
    department: Yup.string()
    .required('Department is required')
    .min(3, 'Mininum 3 characters')
    .max(40, 'Maximum 40 characters'),
    position: Yup.string()
    .required('Position is required')
    .min(3, 'Mininum 3 characters')
    .max(30, 'Maximum 30 characters'),
    gender: Yup.string()
    .required('Gender is required'),
    phone: Yup.string()
    .required('Phone Number is required')
    .trim().matches(phoneNumber, 'Invalid Phone Number')
    .min(10, 'Mininum 10 characters')
    .max(16, 'Maximum 16 characters'),
    employeeCode: Yup.string()
    .required('Employee Code is required')
    .min(5, 'Mininum 5 characters')
    .max(10, 'Maximum 10 characters'),
    salary: Yup.string()
    .required('Salary is required')
    .matches(amount, 'Salary in invalid')
    .max(10, 'Maximum 10 characters'),
    joiningDate: Yup.date()
    .required('Joining Date is required')
});
