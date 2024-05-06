import { render, screen, fireEvent } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "../../../../store/store";
import Employees from "../Employees";

describe("Parent Employees Component", () => {
  // testing for form dialog (used for adding new employee)
  it("should render Form Dialog component correctly", () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <Employees/>
        </BrowserRouter>
      </Provider>
    );
    const addFormBtn = screen.getByText(/Add Employee/i);
    fireEvent.click(addFormBtn);
    const element = screen.getByRole("form-dialog");
    expect(element).toBeInTheDocument();
  });
});
