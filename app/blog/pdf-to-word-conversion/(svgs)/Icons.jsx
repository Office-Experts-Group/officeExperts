// /app/blog/pdf-to-word-conversion/(svgs)/Icons.jsx
// 24x24 line icons. Stroke is currentColor, so colour comes from the CSS module.
// Decorative only (aria-hidden). Server component.

const base = {
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.8,
  strokeLinecap: "round",
  strokeLinejoin: "round",
  "aria-hidden": "true",
  focusable: "false",
};

const make = (children) =>
  function Icon(props) {
    return (
      <svg {...base} {...props}>
        {children}
      </svg>
    );
  };

export const TargetIcon = make(
  <>
    <circle cx="12" cy="12" r="9" />
    <circle cx="12" cy="12" r="5" />
    <circle cx="12" cy="12" r="1" />
  </>,
);

export const PaletteIcon = make(
  <>
    <path d="M12 3a9 9 0 1 0 0 18c1.1 0 1.7-.8 1.7-1.6 0-.5-.2-.9-.5-1.2-.3-.3-.5-.7-.5-1.2 0-.9.7-1.6 1.6-1.6H17a4 4 0 0 0 4-4c0-4.4-4-8.4-9-8.4z" />
    <circle cx="7.5" cy="11" r="1" />
    <circle cx="10" cy="7" r="1" />
    <circle cx="14.5" cy="7" r="1" />
  </>,
);

export const PencilIcon = make(
  <>
    <path d="M4 20l1-4L16.5 4.5a2.1 2.1 0 0 1 3 3L8 19l-4 1z" />
    <path d="M14.5 6.5l3 3" />
  </>,
);

export const LockIcon = make(
  <>
    <rect x="5" y="11" width="14" height="9" rx="2" />
    <path d="M8 11V8a4 4 0 0 1 8 0v3" />
  </>,
);

export const LayersIcon = make(
  <>
    <path d="M12 3l9 5-9 5-9-5 9-5z" />
    <path d="M3 12.5l9 5 9-5" />
    <path d="M3 16.5l9 5 9-5" />
  </>,
);

export const TableIcon = make(
  <>
    <rect x="3" y="5" width="18" height="14" rx="2" />
    <path d="M3 10h18M9 5v14M15 5v14" />
  </>,
);

export const ScanIcon = make(
  <>
    <path d="M4 8V6a2 2 0 0 1 2-2h2M16 4h2a2 2 0 0 1 2 2v2M20 16v2a2 2 0 0 1-2 2h-2M8 20H6a2 2 0 0 1-2-2v-2" />
    <path d="M4 12h16" />
  </>,
);

export const ClockIcon = make(
  <>
    <circle cx="12" cy="12" r="9" />
    <path d="M12 7v5l3 2" />
  </>,
);

export const ShieldIcon = make(
  <>
    <path d="M12 3l8 3v6c0 4.5-3.2 7.8-8 9-4.8-1.2-8-4.5-8-9V6l8-3z" />
    <path d="M9 12l2 2 4-4" />
  </>,
);

export const TemplateIcon = make(
  <>
    <rect x="4" y="3" width="16" height="18" rx="2" />
    <path d="M4 9h16M10 9v12" />
  </>,
);

export const CheckIcon = make(<path d="M5 12.5l4.5 4.5L19 7.5" />);

export const ArrowIcon = make(<path d="M5 12h14M13 6l6 6-6 6" />);

export const InfoIcon = make(
  <>
    <circle cx="12" cy="12" r="9" />
    <path d="M12 11v5" />
    <circle cx="12" cy="8" r=".6" />
  </>,
);

export const QuoteIcon = make(
  <>
    <path d="M10 7H6v5h4v2a3 3 0 0 1-3 3" />
    <path d="M19 7h-4v5h4v2a3 3 0 0 1-3 3" />
  </>,
);

export const FileIcon = make(
  <>
    <path d="M6 3h8l4 4v14H6z" />
    <path d="M14 3v4h4M9 13h6M9 17h6" />
  </>,
);

export const ChevronIcon = make(<path d="M6 9l6 6 6-6" />);

export const SearchIcon = make(
  <>
    <circle cx="11" cy="11" r="6.5" />
    <path d="M16 16l5 5" />
  </>,
);

export const ColumnsIcon = make(
  <>
    <rect x="3" y="4" width="18" height="16" rx="2" />
    <path d="M12 4v16" />
  </>,
);

export const TypeIcon = make(<path d="M5 6V4h14v2M12 4v16M9 20h6" />);

export const ImageIcon = make(
  <>
    <rect x="3" y="4" width="18" height="16" rx="2" />
    <circle cx="9" cy="10" r="1.6" />
    <path d="M4 18l5-5 4 4 3-3 4 4" />
  </>,
);

export const ScaleIcon = make(
  <>
    <path d="M12 4v16M7 20h10M5 7h14" />
    <path d="M5 7l-3 7a3.5 3.5 0 0 0 6 0L5 7zM19 7l-3 7a3.5 3.5 0 0 0 6 0l-3-7z" />
  </>,
);

export const ChartIcon = make(
  <>
    <path d="M4 20V5M4 20h16" />
    <path d="M8 16v-4M12 16V8M16 16v-6" />
  </>,
);

export const UsersIcon = make(
  <>
    <circle cx="9" cy="8" r="3.2" />
    <path d="M3 19a6 6 0 0 1 12 0" />
    <circle cx="17" cy="9" r="2.4" />
    <path d="M17 14a4.5 4.5 0 0 1 4.5 4.5" />
  </>,
);

export const MegaphoneIcon = make(
  <>
    <path d="M4 10v4a1 1 0 0 0 1 1h3l8 4V5L8 9H5a1 1 0 0 0-1 1z" />
    <path d="M19 9.5a3.5 3.5 0 0 1 0 5" />
  </>,
);

export const WarningIcon = make(
  <>
    <path d="M12 4l9 16H3L12 4z" />
    <path d="M12 10v4" />
    <circle cx="12" cy="17" r=".6" />
  </>,
);

export const Icons = {
  target: TargetIcon,
  palette: PaletteIcon,
  pencil: PencilIcon,
  lock: LockIcon,
  layers: LayersIcon,
  table: TableIcon,
  scan: ScanIcon,
  clock: ClockIcon,
  shield: ShieldIcon,
  template: TemplateIcon,
  check: CheckIcon,
  arrow: ArrowIcon,
  info: InfoIcon,
  quote: QuoteIcon,
  file: FileIcon,
  chevron: ChevronIcon,
  search: SearchIcon,
  columns: ColumnsIcon,
  type: TypeIcon,
  image: ImageIcon,
  scale: ScaleIcon,
  chart: ChartIcon,
  users: UsersIcon,
  megaphone: MegaphoneIcon,
  warning: WarningIcon,
};
