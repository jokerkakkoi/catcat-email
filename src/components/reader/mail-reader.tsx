import type {
  EmailAttachment,
  EmailBodyBlock,
  EmailContact,
  EmailItem,
} from "@/src/mock";

const formatContact = (contact: EmailContact) => `${contact.name} <${contact.email}>`;

const formatContactList = (contacts: EmailContact[]) =>
  contacts.map(formatContact).join(", ");

const formatReceivedAt = (receivedAt: string) => {
  const date = new Date(receivedAt);

  if (Number.isNaN(date.getTime())) {
    return receivedAt;
  }

  return new Intl.DateTimeFormat("en", {
    year: "numeric",
    month: "short",
    day: "numeric",
    hour: "numeric",
    minute: "2-digit",
  }).format(date);
};

const getAttachmentKind = (attachment: EmailAttachment) => {
  const extension = attachment.name.split(".").pop();

  if (extension) {
    return extension.toUpperCase();
  }

  const [, subtype = "file"] = attachment.mimeType.split("/");
  return subtype.toUpperCase();
};

function DetailRow({
  label,
  value,
}: {
  label: string;
  value: string;
}) {
  return (
    <div className="grid gap-1 sm:grid-cols-[72px_minmax(0,1fr)] sm:gap-4">
      <dt className="text-xs font-semibold uppercase tracking-wide text-gray-500">{label}</dt>
      <dd className="min-w-0 break-words text-sm text-gray-700">{value}</dd>
    </div>
  );
}

function BodyBlock({ block }: { block: EmailBodyBlock }) {
  if (block.type === "paragraph") {
    return (
      <p className="whitespace-pre-wrap text-base leading-7 text-gray-800">{block.text}</p>
    );
  }

  return (
    <figure className="space-y-3">
      <img
        src={block.src}
        alt={block.alt}
        className="w-full rounded-lg border border-gray-200 bg-gray-50 object-cover"
      />
      {block.caption ? (
        <figcaption className="text-sm text-gray-500">{block.caption}</figcaption>
      ) : null}
    </figure>
  );
}

function AttachmentCard({ attachment }: { attachment: EmailAttachment }) {
  const kind = getAttachmentKind(attachment);

  return (
    <article className="flex h-full flex-col gap-3 rounded-lg border border-gray-200 bg-white p-4">
      {attachment.previewSrc ? (
        <img
          src={attachment.previewSrc}
          alt={`${attachment.name} preview`}
          className="aspect-[4/3] w-full rounded-md border border-gray-200 object-cover"
        />
      ) : (
        <div className="flex aspect-[4/3] w-full items-center justify-center rounded-md border border-dashed border-gray-300 bg-gray-50 text-sm font-semibold text-gray-500">
          {kind}
        </div>
      )}
      <div className="space-y-1">
        <p className="truncate text-sm font-medium text-gray-900">{attachment.name}</p>
        <div className="flex items-center gap-2 text-xs text-gray-500">
          <span>{kind}</span>
          <span aria-hidden="true">&bull;</span>
          <span>{attachment.sizeLabel}</span>
        </div>
      </div>
    </article>
  );
}

interface MailReaderProps {
  email: EmailItem | null;
}

export function MailReader({ email }: MailReaderProps) {
  if (!email) {
    return (
      <section className="flex min-h-full items-center justify-center bg-white px-8 py-12">
        <div className="max-w-sm text-center">
          <h1 className="text-2xl font-semibold text-gray-900">No email selected</h1>
          <p className="mt-2 text-sm text-gray-500">
            Choose a message from the list to start reading.
          </p>
        </div>
      </section>
    );
  }

  return (
    <section className="min-h-full bg-white">
      <article className="mx-auto flex w-full max-w-4xl flex-col">
        <header className="border-b border-gray-200 px-6 py-6 sm:px-8">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
            <div className="min-w-0">
              <p className="text-sm font-medium text-[#0f94a8]">{email.category}</p>
              <h1 className="mt-2 text-3xl font-semibold text-gray-900">{email.subject}</h1>
            </div>
            <p className="shrink-0 text-sm text-gray-500">{formatReceivedAt(email.receivedAt)}</p>
          </div>

          <dl className="mt-6 space-y-4">
            <DetailRow label="From" value={formatContact(email.from)} />
            <DetailRow label="To" value={formatContactList(email.to)} />
            {email.cc.length > 0 ? (
              <DetailRow label="Cc" value={formatContactList(email.cc)} />
            ) : null}
            {email.bcc.length > 0 ? (
              <DetailRow label="Bcc" value={formatContactList(email.bcc)} />
            ) : null}
          </dl>
        </header>

        <div className="space-y-8 px-6 py-8 sm:px-8">
          <section className="space-y-6">
            {email.bodyBlocks.map((block, index) => (
              <BodyBlock key={`${email.id}-block-${index}`} block={block} />
            ))}
          </section>

          {email.attachments.length > 0 ? (
            <section className="space-y-4 border-t border-gray-200 pt-8">
              <h2 className="text-lg font-semibold text-gray-900">Attachments</h2>
              <div className="grid gap-4 sm:grid-cols-2">
                {email.attachments.map((attachment) => (
                  <AttachmentCard key={attachment.id} attachment={attachment} />
                ))}
              </div>
            </section>
          ) : null}
        </div>
      </article>
    </section>
  );
}
