import React from "react";
import { render, screen } from "@testing-library/react";
import Render from "./Render";

describe("Rendering", () => {
  it("Should render all the elements correctly", () => {
    render(<Render />);
    // screen.debug(); これでレンダリングされてる内容がlogに出る
    // screen.debug(screen.getByRole("heading"));
    expect(screen.getByRole("heading")).toBeTruthy();
    expect(screen.getByRole("textbox")).toBeTruthy();
    expect(screen.getAllByRole("button")[0]).toBeTruthy(); // getAllByRoleはエレメントが配列で返ってくる
    expect(screen.getAllByRole("button")[1]).toBeTruthy();
    expect(screen.getByText("Udemy")).toBeTruthy();
    expect(screen.queryByText("Udeeeeeemy")).toBeNull();
    expect(screen.getByTestId("copyright")).toBeTruthy();
  });
});
