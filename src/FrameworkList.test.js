import React from "react";
import { render, screen } from "@testing-library/react";
import FrameworkList from "./FrameworkList";

describe("Rendering the list with props", () => {
  it("Should render No data! when no data propped", () => {
    render(<FrameworkList />);
    expect(screen.getByText("No data!")).toBeInTheDocument();
  });
  it("Should render list item correctly", () => {
    const dummyData = [
      { id: 1, item: "React dummy" },
      { id: 2, item: "Angular dummy" },
      { id: 3, item: "Vue dummy" },
    ];
    render(<FrameworkList frameworks={dummyData} />);
    const frameworksItems = screen
      .getAllByRole("listitem")
      // eleのテキスト部分だけをtextContentで抽出して格納
      .map((ele) => ele.textContent);
    const dummyItems = dummyData.map((ele) => ele.item);
    expect(frameworksItems).toEqual(dummyItems);
    expect(screen.queryByText("No data!")).toBeNull();
  });
});
