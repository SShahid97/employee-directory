export interface Employees {
  users: Employee[];
  total: number;
  skip: number;
  limit: number;
}

export interface EmployeesResponse {
  first: number,
  prev: number | null,
  next: number | null,
  last: number,
  pages: number,
  items: number,
  data: EmployeeResponse[],
}

export interface Employee {
  id?: string;
  firstName: string;
  lastName: string;
  email: string;
  employeeCode: string;
  department: string;
  position: string;
  country: string;
  address: string;
  phone: string;
  gender: string;
  joiningDate: string;
  salary: string;
}

export interface EmployeeResponse extends Employee {
  createdAt: number;
  updatedAt: number
}

export interface EmployeeFilters {
  _page?: number;
  _per_page?: number;
  firstName?: string;
  department?: string;
  position?: string;
}
