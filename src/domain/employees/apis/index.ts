/* eslint-disable @typescript-eslint/no-unused-vars */
import { baseApi } from "../../../store/base-query";
import { Employee, EmployeeFilters, EmployeeResponse, EmployeesResponse } from "../types";

const employeeApis = baseApi.injectEndpoints({
  endpoints: (build) => ({
    getEmployees: build.query<EmployeesResponse, EmployeeFilters>({
      query: (args) => {
        const { _per_page, _page, firstName, department, position } = args;
        return {
          url: 'employees',
          method: "GET",
          params: {
            _per_page,
            _page,
            firstName,
            department, 
            position,
          } as EmployeeFilters,
        };
      },
      transformResponse: (response: EmployeesResponse, _meta, _arg) => {
        const data = response?.data.sort((a, b) => b.createdAt - a.createdAt);
        return {
          ...response,
          data,
        };
      },
      providesTags: ['Employee']
    }),
    getEmployee: build.query<EmployeeResponse, { id: string }>({
      query: (args) => {
        return {
          url: `employees/${args.id}`,
          method: "GET",
        };
      },
      keepUnusedDataFor: 0,
    }),
    addEmployee: build.mutation<Employee, Employee>({
      query: (body) => {
        return {
          url: 'employees',
          method: "POST",
          body,
        };
      },
      invalidatesTags: ['Employee']
    }),
    editEmployee: build.mutation<EmployeeResponse, { payload: Employee, id: string }>({
      query: (args) => {
        return {
          url: `employees/${args.id}`,
          method: "PUT",
          body: args.payload
        };
      },
      invalidatesTags: ['Employee']
    }),
    deleteEmployee: build.mutation<EmployeeResponse, { id: string }>({
      query: (args) => {
        return {
          url: `employees/${args.id}`,
          method: "DELETE",
        };
      },
      invalidatesTags: ['Employee']
    }),
  }),
});

export const {
  useGetEmployeesQuery,
  useGetEmployeeQuery,
  useDeleteEmployeeMutation,
  useAddEmployeeMutation,
  useEditEmployeeMutation,
} = employeeApis;
