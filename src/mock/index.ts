export type EmailCategory = "work" | "system" | "personal" | "promotion";

export interface EmailContact {
  name: string;
  email: string;
}

export interface ParagraphBodyBlock {
  type: "paragraph";
  text: string;
}

export interface ImageBodyBlock {
  type: "image";
  src: string;
  alt: string;
  caption?: string;
}

export type EmailBodyBlock = ParagraphBodyBlock | ImageBodyBlock;

export interface EmailAttachment {
  id: string;
  name: string;
  mimeType: string;
  sizeLabel: string;
  previewSrc?: string;
}

export interface EmailItem {
  id: string;
  subject: string;
  preview: string;
  receivedAt: string;
  time: string;
  unread: boolean;
  starred: boolean;
  category: EmailCategory;
  labels: string[];
  from: EmailContact;
  to: EmailContact[];
  cc: EmailContact[];
  bcc: EmailContact[];
  attachments: EmailAttachment[];
  bodyBlocks: EmailBodyBlock[];
}

const contact = (name: string, email: string): EmailContact => ({ name, email });

export const inboxList: EmailItem[] = [
  {
    id: "mail-001",
    subject: "Quarterly roadmap review follow-up",
    preview: "Revised notes, inline charts, and the final attachment pack are ready.",
    receivedAt: "2026-04-23T09:18:00+08:00",
    time: "09:18",
    unread: true,
    starred: true,
    category: "work",
    labels: ["roadmap", "review"],
    from: contact("Mina Chen", "mina.chen@catcat.app"),
    to: [
      contact("Product Team", "product@catcat.app"),
      contact("QA Desk", "qa@catcat.app"),
    ],
    cc: [contact("Design Ops", "design.ops@catcat.app")],
    bcc: [contact("Leadership", "leadership@catcat.app")],
    bodyBlocks: [
      {
        type: "paragraph",
        text: "Hi team,\nThe updated roadmap review notes are below. Please double-check the owners and the release dates before tomorrow morning.",
      },
      {
        type: "image",
        src: "/mock-email-inline-roadmap.svg",
        alt: "Roadmap progress chart",
        caption: "Open work by squad",
      },
      {
        type: "paragraph",
        text: "I also attached the annotated board export and the meeting notes PDF for reference.",
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
  },
  {
    id: "mail-002",
    subject: "Quick confirmation",
    preview: "No extras here, just a simple follow-up.",
    receivedAt: "2026-04-23T11:30:00+08:00",
    time: "11:30",
    unread: false,
    starred: false,
    category: "personal",
    labels: [],
    from: contact("Alex Wu", "alex.wu@example.com"),
    to: [contact("Me", "me@example.com")],
    cc: [],
    bcc: [],
    bodyBlocks: [
      {
        type: "paragraph",
        text: "Just confirming we are still on for tomorrow.",
      },
    ],
    attachments: [],
  },
  {
    id: "mail-003",
    subject: "Security alert: new sign-in detected",
    preview: "A new Windows device signed in to your account at 07:56.",
    receivedAt: "2026-04-23T07:58:00+08:00",
    time: "07:58",
    unread: true,
    starred: false,
    category: "system",
    labels: ["security"],
    from: contact("CatCat Security", "security@catcat.app"),
    to: [contact("Me", "me@catcat.app")],
    cc: [],
    bcc: [],
    bodyBlocks: [
      {
        type: "paragraph",
        text: "We detected a new Windows device sign-in. If this was not you, reset your password and review recent account activity immediately.",
      },
    ],
    attachments: [],
  },
  {
    id: "mail-004",
    subject: "Invitation: Product review at 2:00 PM",
    preview: "Design and engineering are invited for today's review session.",
    receivedAt: "2026-04-23T08:42:00+08:00",
    time: "08:42",
    unread: true,
    starred: false,
    category: "work",
    labels: ["calendar"],
    from: contact("Google Calendar", "calendar-notification@google.com"),
    to: [contact("Me", "me@catcat.app")],
    cc: [contact("Design Team", "design@catcat.app")],
    bcc: [],
    bodyBlocks: [
      {
        type: "paragraph",
        text: "Agenda: onboarding funnel updates, release readiness, and beta feedback. Please review the updated slide deck before the meeting.",
      },
    ],
    attachments: [
      {
        id: "attachment-slide",
        name: "product-review-deck.pdf",
        mimeType: "application/pdf",
        sizeLabel: "612 KB",
      },
    ],
  },
  {
    id: "mail-005",
    subject: "Weekly workspace digest",
    preview: "Twelve pages were updated this week, including Product Spec and Sprint Board.",
    receivedAt: "2026-04-22T09:05:00+08:00",
    time: "Wed",
    unread: false,
    starred: false,
    category: "promotion",
    labels: ["digest"],
    from: contact("Notion", "team@updates.notion.so"),
    to: [contact("Me", "me@catcat.app")],
    cc: [],
    bcc: [],
    bodyBlocks: [
      {
        type: "paragraph",
        text: "Here is your weekly digest. Twelve pages were updated, five tasks were closed, and two new comments need attention.",
      },
    ],
    attachments: [],
  },
  {
    id: "mail-006",
    subject: "Attachment request for expense reimbursement",
    preview: "The reimbursement passed approval, but a taxi invoice is still missing.",
    receivedAt: "2026-04-22T08:16:00+08:00",
    time: "Wed",
    unread: true,
    starred: false,
    category: "work",
    labels: ["finance"],
    from: contact("Finance Center", "finance@catcat.app"),
    to: [contact("Me", "me@catcat.app")],
    cc: [],
    bcc: [],
    bodyBlocks: [
      {
        type: "paragraph",
        text: "Your reimbursement request was approved. Please upload the taxi invoice before April 25 to avoid delaying payment.",
      },
    ],
    attachments: [
      {
        id: "attachment-form",
        name: "expense-summary.xlsx",
        mimeType: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
        sizeLabel: "84 KB",
      },
    ],
  },
];
