/* eslint-disable no-undef */
import {render, screen} from "@testing-library/react";
import Home from "../index";

test("renders bp title", () => {
  render(<Home />);
  const titleElement = screen.getByText(/Welcome to Bio & Low Carbon!/i);
  expect(titleElement).toBeInTheDocument();
});
