import userEvent from "@testing-library/user-event";
import { render, screen } from "@testing-library/react";

import { SystemSettingsDialog } from "./system-settings-dialog";

describe("SystemSettingsDialog", () => {
  it("resets the active category when reopened", async () => {
    const user = userEvent.setup();
    const onOpenChange = () => undefined;

    const { rerender } = render(
      <SystemSettingsDialog open={true} onOpenChange={onOpenChange} />
    );

    await user.click(screen.getAllByRole("tab")[1]);

    expect(screen.getAllByRole("tab")[1]).toHaveAttribute(
      "aria-selected",
      "true"
    );

    rerender(<SystemSettingsDialog open={false} onOpenChange={onOpenChange} />);
    expect(screen.queryByRole("dialog")).not.toBeInTheDocument();

    rerender(<SystemSettingsDialog open={true} onOpenChange={onOpenChange} />);

    const reopenedTabs = screen.getAllByRole("tab");
    expect(reopenedTabs[0]).toHaveAttribute("aria-selected", "true");
    expect(reopenedTabs[1]).toHaveAttribute("aria-selected", "false");
  });
});
