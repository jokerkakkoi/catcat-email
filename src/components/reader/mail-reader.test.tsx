import { render, screen } from "@testing-library/react";
import { MailReader } from "./mail-reader";
import type { EmailItem } from "@/src/mock";

const fullEmail: EmailItem = {
  id: "mail-full",
  subject: "Project review follow-up",
  preview: "Attached are the revised notes and mockups.",
  time: "09:18",
  receivedAt: "2026-04-23T09:18:00+08:00",
  unread: true,
  starred: true,
  category: "work",
  labels: ["project", "review"],
  from: {
    name: "Mina Chen",
    email: "mina.chen@catcat.app",
  },
  to: [
    {
      name: "Product Team",
      email: "product@catcat.app",
    },
  ],
  cc: [
    {
      name: "Design Ops",
      email: "design.ops@catcat.app",
    },
  ],
  bcc: [
    {
      name: "Leadership",
      email: "leadership@catcat.app",
    },
  ],
  bodyBlocks: [
    {
      type: "paragraph",
      text: "The updated review notes are below.\nPlease double-check the action items.",
    },
    {
      type: "image",
      src: "/mock-email-inline-roadmap.svg",
      alt: "Sprint review chart",
      caption: "Open issues by team",
    },
  ],
  attachments: [
    {
      id: "attachment-image",
      name: "review-board.png",
      mimeType: "image/png",
      sizeLabel: "1.8 MB",
      previewSrc: "/mock-attachment-preview-board.svg",
    },
    {
      id: "attachment-file",
      name: "meeting-notes.pdf",
      mimeType: "application/pdf",
      sizeLabel: "248 KB",
    },
  ],
};

const simpleEmail: EmailItem = {
  id: "mail-simple",
  subject: "Quick confirmation",
  preview: "No extras here.",
  time: "11:30",
  receivedAt: "2026-04-23T11:30:00+08:00",
  unread: false,
  starred: false,
  category: "personal",
  labels: [],
  from: {
    name: "Alex Wu",
    email: "alex.wu@example.com",
  },
  to: [
    {
      name: "Me",
      email: "me@example.com",
    },
  ],
  cc: [],
  bcc: [],
  bodyBlocks: [
    {
      type: "paragraph",
      text: "Just confirming we are still on for tomorrow.",
    },
  ],
  attachments: [],
};

describe("MailReader", () => {
  it("renders headers, body blocks, and attachments", () => {
    render(<MailReader email={fullEmail} />);

    expect(screen.getByText("From")).toBeInTheDocument();
    expect(screen.getByText("To")).toBeInTheDocument();
    expect(screen.getByText("Cc")).toBeInTheDocument();
    expect(screen.getByText("Bcc")).toBeInTheDocument();
    expect(screen.getByText("Mina Chen <mina.chen@catcat.app>")).toBeInTheDocument();
    expect(
      screen.getByText("Product Team <product@catcat.app>")
    ).toBeInTheDocument();

    const paragraph = screen.getByText(
      /The updated review notes are below\.\s+Please double-check the action items\./
    );
    expect(paragraph).toHaveClass("whitespace-pre-wrap");
    expect(screen.getByRole("img", { name: "Sprint review chart" })).toBeInTheDocument();
    expect(screen.getByText("Open issues by team")).toBeInTheDocument();

    expect(screen.getByText("Attachments")).toBeInTheDocument();
    expect(screen.getByText("review-board.png")).toBeInTheDocument();
    expect(screen.getByText("meeting-notes.pdf")).toBeInTheDocument();
    expect(screen.getByText("PNG")).toBeInTheDocument();
    expect(screen.getByText("248 KB")).toBeInTheDocument();
    expect(
      screen.getByRole("img", { name: "review-board.png preview" })
    ).toBeInTheDocument();
  });

  it("hides optional groups when the email has no cc, bcc, or attachments", () => {
    render(<MailReader email={simpleEmail} />);

    expect(screen.queryByText("Cc")).not.toBeInTheDocument();
    expect(screen.queryByText("Bcc")).not.toBeInTheDocument();
    expect(screen.queryByText("Attachments")).not.toBeInTheDocument();
  });

  it("renders an empty state when no email is selected", () => {
    render(<MailReader email={null} />);

    expect(screen.getByText("No email selected")).toBeInTheDocument();
    expect(
      screen.getByText("Choose a message from the list to start reading.")
    ).toBeInTheDocument();
  });
});
