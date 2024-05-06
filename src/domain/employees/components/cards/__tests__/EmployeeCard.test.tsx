import { render, screen } from "@testing-library/react";
import { EmployeeResponse } from "../../../types";
import EmployeeCard from "../EmployeeCard";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "../../../../../store/store";

const employee: EmployeeResponse = {
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
  createdAt: 1714885719892,
  updatedAt: 1714885719892,
  id: "f05a",
};

describe("Employee Card component", () => {
  it("should render Employee card component correctly", () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <EmployeeCard
            employee={employee}
            openDeleteModal={() => {}}
            openEditModal={() => {}}
          />
        </BrowserRouter>
      </Provider>
    );
    const element = screen.getByRole("combobox");
    expect(element).toBeDefined();
  });
});
