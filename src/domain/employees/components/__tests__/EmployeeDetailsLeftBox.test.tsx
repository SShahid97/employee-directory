import { render, screen } from "@testing-library/react";
import EmployeeDetailsLeftBox from "../EmployeeDetailsLeftBox";
import { EmployeeResponse } from "../../types";


const employee: EmployeeResponse =  {
  firstName: "Seamus",
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
  salary: "50000.00",
  createdAt:1714885719892,
  updatedAt: 1714885719892,
  id: "f05a"
}

describe("Employee Details component", () => {
  it("should render user Employee component correctly", () => {
    render(<EmployeeDetailsLeftBox employeeData={employee}/>);
    const element = screen.getByRole("contentinfo");
    expect(element).toBeDefined();
  });
});