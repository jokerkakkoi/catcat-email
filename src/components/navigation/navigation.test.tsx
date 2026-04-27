import userEvent from "@testing-library/user-event";
import { render, screen, waitFor } from "@testing-library/react";
import { invoke } from "@tauri-apps/api/core";
import { vi } from "vitest";

import { Navigation } from "./navigation";

vi.mock("@tauri-apps/api/core", () => ({
  invoke: vi.fn(),
}));

describe("Navigation", () => {
  it("shows a receive button instead of the logo and invokes the receive_email command", async () => {
    const user = userEvent.setup();
    vi.mocked(invoke).mockResolvedValue(undefined);

    render(<Navigation />);

    expect(screen.queryByRole("link", { name: "Tauri" })).not.toBeInTheDocument();

    await user.click(screen.getByRole("button", { name: "收件" }));

    await waitFor(() => {
      expect(invoke).toHaveBeenCalledWith("receive_email");
    });
  });
});
