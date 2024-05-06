import { render, screen } from "@testing-library/react";
import EmployeeDetails from "../EmployeeDetails";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "../../../../store/store";

describe("Employee Details component", () => {
  it("should render Employee Details component correctly", () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <EmployeeDetails />
        </BrowserRouter>
      </Provider>
    );
    const element = screen.getByTestId("employee-details");
    expect(element).toBeInTheDocument();
  });
});
