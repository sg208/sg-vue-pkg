export type ApiRow = {
  name: string;
  type: string;
  fallback: string;
  description: string;
};

export type ComponentDoc = {
  id: string;
  name: string;
  summary: string;
  usage: string;
  props: ApiRow[];
};

const ariaLabelRow: ApiRow = {
  name: "ariaLabel",
  type: "string",
  fallback: "null",
  description:
    "Accessible name, rendered as aria-label. Required when the button shows only an icon.",
};

export const componentDocs: ComponentDoc[] = [
  {
    id: "sg-button",
    name: "SgButton",
    summary:
      "The primary action. Use one per view for the thing the screen exists to do.",
    usage: `<SgButton type="submit">Save changes</SgButton>
<SgButton ariaLabel="Add item">
  <PlusIcon aria-hidden="true" />
</SgButton>`,
    props: [ariaLabelRow],
  },
  {
    id: "sg-button-text",
    name: "SgButtonText",
    summary:
      "The quiet action: cancel, back, filters, secondary choices. Takes its label as a prop, a slot, or both.",
    usage: `<SgButtonText text="Cancel" />
<SgButtonText text="Next">
  <ArrowIcon aria-hidden="true" />
</SgButtonText>`,
    props: [
      {
        name: "text",
        type: "string",
        fallback: '""',
        description: "Label rendered before the default slot.",
      },
      ariaLabelRow,
    ],
  },
];

export const sharedApi: ApiRow[] = [
  {
    name: "default slot",
    type: "slot",
    fallback: "—",
    description: "Label text, an icon, or both. Icons are sized to 1.25em.",
  },
  {
    name: "click",
    type: "native event",
    fallback: "—",
    description:
      "Listeners and attributes (type, disabled, class, data-*) fall through to the <button>.",
  },
];
