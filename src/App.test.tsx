import userEvent from "@testing-library/user-event";
import { render, screen, within } from "@testing-library/react";
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

  it("opens system settings from the single settings menu item", async () => {
    const user = userEvent.setup();

    render(<App />);

    await user.click(screen.getByRole("button", { name: "设置菜单" }));

    const menu = screen.getByRole("menu");

    expect(
      within(menu).getByRole("menuitem", { name: "系统设置" })
    ).toBeInTheDocument();
    expect(within(menu).queryAllByRole("menuitem")).toHaveLength(1);

    await user.click(within(menu).getByRole("menuitem", { name: "系统设置" }));

    const dialog = await screen.findByRole("dialog", { name: "系统设置" });

    expect(within(dialog).getByRole("tab", { name: "常用" })).toHaveAttribute(
      "aria-selected",
      "true"
    );
    expect(within(dialog).getByRole("tab", { name: "账号" })).toBeInTheDocument();
    expect(within(dialog).getByRole("tab", { name: "高级" })).toBeInTheDocument();
    expect(within(dialog).getByText("收取与通知")).toBeInTheDocument();
    expect(within(dialog).queryByLabelText("Email地址")).not.toBeInTheDocument();
    expect(within(dialog).getByRole("button", { name: "确定" })).toBeInTheDocument();
    expect(within(dialog).getByRole("button", { name: "应用" })).toBeDisabled();
  });

  it("shows account settings after selecting the account page", async () => {
    const user = userEvent.setup();

    render(<App />);

    await user.click(screen.getByRole("button", { name: "设置菜单" }));
    await user.click(screen.getByRole("menuitem", { name: "系统设置" }));

    const dialog = await screen.findByRole("dialog", { name: "系统设置" });
    await user.click(within(dialog).getByRole("tab", { name: "账号" }));

    expect(within(dialog).getByRole("tab", { name: "账号" })).toHaveAttribute(
      "aria-selected",
      "true"
    );
    expect(within(dialog).getByLabelText("Email地址")).toHaveValue(
      "lubz@chinatelecom.cn"
    );
    expect(within(dialog).getByLabelText("密码")).toHaveValue("catcat-settings");
    expect(within(dialog).queryByText("收取与通知")).not.toBeInTheDocument();
  });
});
