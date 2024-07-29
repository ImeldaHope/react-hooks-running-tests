import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import React from "react";

import Article from "../components/Article";

test("displays the text 'please pass this test'", () => {
  render(<Article />);

  //Expect the DOM structure to be printed out on the terminal
  screen.debug();

  expect(screen.queryByText("please pass this test")).toBeInTheDocument();
});

//Or use test below to print out only the single element i.e. <div>please pass this test</div>
test("displays the text 'please pass this test'", () => {
  render(<Article />);

  const element = screen.queryByText("please pass this test");

  screen.debug(element);

  expect(element).toBeInTheDocument();
});