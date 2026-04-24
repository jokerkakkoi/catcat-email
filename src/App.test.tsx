import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "./App";
import { inboxList } from "./mock";

describe("App email reader flow", () => {
  it("switches the reader content when a different email is selected", async () => {
    const user = userEvent.setup();

    render(<App />);

    expect(
      screen.getByRole("heading", { name: inboxList[0].subject })
    ).toBeInTheDocument();
    expect(
      screen.getByText(/updated roadmap review notes are below/i)
    ).toBeInTheDocument();

    await user.click(
      screen.getByRole("button", { name: /Quick confirmation/i })
    );

    expect(
      screen.getByRole("heading", { name: inboxList[1].subject })
    ).toBeInTheDocument();
    expect(
      screen.getByText("Just confirming we are still on for tomorrow.")
    ).toBeInTheDocument();
  });
});
