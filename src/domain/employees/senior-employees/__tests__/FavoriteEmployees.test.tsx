import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { store } from "../../../../store/store";
import SeniorEmployees from "../SeniorEmployees";

describe("Senior Employee component", () => {
  it("should render Senior Employee component correctly", () => {
    render(
      <Provider store={store}>
          <SeniorEmployees/>
      </Provider>
    );
    const element = screen.getByTestId("seniorEmployees");
    expect(element).toBeInTheDocument();
  });

});
