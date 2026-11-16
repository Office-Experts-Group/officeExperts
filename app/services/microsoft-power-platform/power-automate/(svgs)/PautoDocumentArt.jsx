// /app/services/microsoft-power-platform/power-automate/(svgs)/PautoDocumentArt.jsx
// Three before / after scenes for the AI Builder tabs. They sit on a white
// stage, so they use the light palette:
// #046999 $accent, #e8f4fa $accent-light, #0b2433 $ink, #4a5568 $text-secondary,
// #9a9da1 $text-muted, #e3e8ec $line, #d4d6d9 $line-strong, #f7f8f9 $light-bg.

const frame = {
  viewBox: "0 0 520 340",
  role: "img",
  fontFamily: "aptos",
  xmlns: "http://www.w3.org/2000/svg",
};

const Arrow = ({ x, y }) => (
  <path
    d={`M${x} ${y}h14m-5-5l5 5-5 5`}
    fill="none"
    stroke="#046999"
    strokeWidth="2.2"
    strokeLinecap="round"
    strokeLinejoin="round"
  />
);

const Chip = ({ label }) => (
  <g>
    <rect x="212" y="136" width="76" height="28" rx="14" fill="#046999" />
    <text
      x="250"
      y="155"
      fontSize="14"
      fontWeight="700"
      fill="#ffffff"
      textAnchor="middle"
    >
      {label}
    </text>
  </g>
);

export const PautoInvoiceScene = () => (
  <svg
    {...frame}
    aria-labelledby="pauto-doc-invoice-title pauto-doc-invoice-desc"
  >
    <title id="pauto-doc-invoice-title">
      Invoices read by AI Builder into a structured record
    </title>
    <desc id="pauto-doc-invoice-desc">
      A pile of PDF invoices and a phone photo of a paper invoice go through an
      AI step. The result is a record with the supplier, invoice number, due
      date and total, matched to a purchase order. Exceptions go to a person.
    </desc>

    {/* before */}
    <g transform="rotate(-7 90 150)">
      <rect
        x="22"
        y="56"
        width="120"
        height="168"
        rx="8"
        fill="#f7f8f9"
        stroke="#d4d6d9"
      />
    </g>
    <g transform="rotate(5 100 150)">
      <rect
        x="42"
        y="50"
        width="120"
        height="168"
        rx="8"
        fill="#ffffff"
        stroke="#d4d6d9"
      />
      <path
        d="M54 76h96M54 88h70"
        stroke="#e3e8ec"
        strokeWidth="3"
        strokeLinecap="round"
      />
    </g>
    <rect
      x="30"
      y="64"
      width="120"
      height="172"
      rx="8"
      fill="#ffffff"
      stroke="#0b2433"
      strokeWidth="1.6"
    />
    <rect
      x="42"
      y="76"
      width="42"
      height="14"
      rx="3"
      fill="#9a9da1"
      opacity="0.45"
    />
    <path
      d="M42 104h96M42 116h80"
      stroke="#e3e8ec"
      strokeWidth="4"
      strokeLinecap="round"
    />
    <path
      d="M42 138h96M42 152h96M42 166h96M42 180h96"
      stroke="#d4d6d9"
      strokeWidth="1.2"
    />
    <path d="M42 138v42M96 138v42" stroke="#d4d6d9" strokeWidth="1.2" />
    <rect
      x="96"
      y="206"
      width="42"
      height="14"
      rx="3"
      fill="#0b2433"
      opacity="0.2"
    />
    <g transform="rotate(4 158 186)">
      <rect x="126" y="130" width="62" height="112" rx="10" fill="#0b2433" />
      <rect x="131" y="140" width="52" height="92" rx="3" fill="#e8f4fa" />
      <path
        d="M137 152h40M137 162h40M137 172h26"
        stroke="#046999"
        strokeWidth="2.2"
        strokeLinecap="round"
      />
      <path
        d="M135 146v-5h5M179 146v-5h-5M135 226v5h5M179 226v5h-5"
        fill="none"
        stroke="#046999"
        strokeWidth="1.6"
      />
    </g>
    <text x="20" y="322" fontSize="14" fill="#4a5568">
      PDFs, scans and phone photos
    </text>

    <Arrow x="190" y="150" />
    <Chip label="AI reads" />
    <Arrow x="290" y="150" />

    {/* after */}
    <rect
      x="312"
      y="34"
      width="196"
      height="232"
      rx="12"
      fill="#ffffff"
      stroke="#046999"
      strokeWidth="1.6"
    />
    <text x="326" y="62" fontSize="16" fontWeight="700" fill="#0b2433">
      Invoice record
    </text>
    <path d="M326 74h168" stroke="#e3e8ec" />
    <g fontSize="14">
      <text x="326" y="96" fill="#4a5568">
        Supplier
      </text>
      <rect
        x="322"
        y="102"
        width="176"
        height="22"
        rx="4"
        fill="#046999"
        opacity="0.1"
      />
      <text x="326" y="118" fontWeight="700" fill="#0b2433">
        Northside Steel
      </text>
      <text x="326" y="144" fill="#4a5568">
        Invoice number
      </text>
      <rect
        x="322"
        y="150"
        width="176"
        height="22"
        rx="4"
        fill="#046999"
        opacity="0.1"
      />
      <text x="326" y="166" fontWeight="700" fill="#0b2433">
        INV-4471
      </text>
      <text x="326" y="192" fill="#4a5568">
        Due date
      </text>
      <rect
        x="322"
        y="198"
        width="176"
        height="22"
        rx="4"
        fill="#046999"
        opacity="0.1"
      />
      <text x="326" y="214" fontWeight="700" fill="#0b2433">
        30 Nov
      </text>
      <text x="326" y="240" fill="#4a5568">
        Total
      </text>
    </g>
    <rect
      x="410"
      y="226"
      width="88"
      height="30"
      rx="4"
      fill="#046999"
      opacity="0.1"
    />
    <text x="418" y="247" fontSize="14" fontWeight="700" fill="#0b2433">
      $4,280.00
    </text>
    <rect x="312" y="278" width="196" height="28" rx="14" fill="#e8f4fa" />
    <text
      x="410"
      y="297"
      fontSize="14"
      fontWeight="700"
      fill="#046999"
      textAnchor="middle"
    >
      Matched to purchase order
    </text>
    <text x="410" y="326" fontSize="14" fill="#4a5568" textAnchor="middle">
      Exceptions go to a person
    </text>
  </svg>
);

export const PautoFormScene = () => (
  <svg {...frame} aria-labelledby="pauto-doc-form-title pauto-doc-form-desc">
    <title id="pauto-doc-form-title">
      Paper forms and scans turned into rows in your system
    </title>
    <desc id="pauto-doc-form-desc">
      A handwritten checklist and a signed delivery docket go through an AI
      step. The answers arrive as rows in a list with a pass or review result
      for each item.
    </desc>

    {/* before */}
    <rect
      x="30"
      y="48"
      width="140"
      height="192"
      rx="6"
      fill="#ffffff"
      stroke="#0b2433"
      strokeWidth="1.6"
    />
    <rect
      x="42"
      y="60"
      width="64"
      height="10"
      rx="3"
      fill="#9a9da1"
      opacity="0.45"
    />
    <g fill="none" stroke="#9a9da1" strokeWidth="1.4">
      <rect x="44" y="86" width="12" height="12" rx="2" />
      <rect x="44" y="110" width="12" height="12" rx="2" />
      <rect x="44" y="134" width="12" height="12" rx="2" />
      <rect x="44" y="158" width="12" height="12" rx="2" />
    </g>
    <g
      fill="none"
      stroke="#0b2433"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M46 92l4 4 7-9" />
      <path d="M46 116l4 4 7-9" />
      <path d="M62 94c8-4 14 4 22-1s14 3 22-1" strokeWidth="1.4" />
      <path d="M62 118c7-3 12 3 20 0s12 2 24-2" strokeWidth="1.4" />
      <path d="M62 142c6-4 12 3 18-1s14 4 26-1" strokeWidth="1.4" />
      <path d="M62 166c8-3 12 2 20 0s10 3 20-1" strokeWidth="1.4" />
    </g>
    <path
      d="M44 200c8-10 12 8 20-2s10 6 18-4 8 6 16-2"
      fill="none"
      stroke="#046999"
      strokeWidth="2"
      strokeLinecap="round"
    />
    <path d="M42 214h104" stroke="#d4d6d9" />
    <g transform="rotate(-6 150 190)">
      <rect
        x="118"
        y="146"
        width="76"
        height="92"
        rx="5"
        fill="#f7f8f9"
        stroke="#d4d6d9"
      />
      <path
        d="M126 160h50M126 172h58M126 184h40"
        stroke="#d4d6d9"
        strokeWidth="3"
        strokeLinecap="round"
      />
      <circle
        cx="170"
        cy="216"
        r="12"
        fill="none"
        stroke="#046999"
        strokeWidth="1.6"
        strokeDasharray="3 3"
      />
    </g>
    <text x="20" y="322" fontSize="14" fill="#4a5568">
      Paper, scans and photos
    </text>

    <Arrow x="190" y="150" />
    <Chip label="AI reads" />
    <Arrow x="290" y="150" />

    {/* after */}
    <rect
      x="312"
      y="34"
      width="196"
      height="232"
      rx="12"
      fill="#ffffff"
      stroke="#046999"
      strokeWidth="1.6"
    />
    <text x="326" y="62" fontSize="16" fontWeight="700" fill="#0b2433">
      Inspection list
    </text>
    <path d="M326 74h168" stroke="#e3e8ec" />
    <g fontSize="14">
      <text x="326" y="108" fill="#0b2433">
        Site inspection
      </text>
      <text x="326" y="148" fill="#0b2433">
        Safety gear
      </text>
      <text x="326" y="188" fill="#0b2433">
        Photos attached
      </text>
      <text x="326" y="228" fill="#0b2433">
        Signed off
      </text>
    </g>
    <path d="M326 124h168M326 164h168M326 204h168" stroke="#e3e8ec" />
    <g>
      <rect x="440" y="90" width="54" height="24" rx="12" fill="#e8f4fa" />
      <rect x="440" y="130" width="54" height="24" rx="12" fill="#e8f4fa" />
      <rect x="440" y="170" width="54" height="24" rx="12" fill="#046999" />
      <rect x="440" y="210" width="54" height="24" rx="12" fill="#e8f4fa" />
      <g fontSize="14" fontWeight="700" textAnchor="middle">
        <text x="467" y="107" fill="#046999">
          Pass
        </text>
        <text x="467" y="147" fill="#046999">
          Pass
        </text>
        <text x="467" y="187" fill="#ffffff">
          Review
        </text>
        <text x="467" y="227" fill="#046999">
          Pass
        </text>
      </g>
    </g>
    <rect x="312" y="278" width="196" height="28" rx="14" fill="#e8f4fa" />
    <text
      x="410"
      y="297"
      fontSize="14"
      fontWeight="700"
      fill="#046999"
      textAnchor="middle"
    >
      Saved to SharePoint
    </text>
    <text x="410" y="326" fontSize="14" fill="#4a5568" textAnchor="middle">
      Fields land in your system
    </text>
  </svg>
);

export const PautoEmailScene = () => (
  <svg {...frame} aria-labelledby="pauto-doc-email-title pauto-doc-email-desc">
    <title id="pauto-doc-email-title">
      A shared inbox sorted into queues by AI Builder
    </title>
    <desc id="pauto-doc-email-desc">
      A crowded shared inbox goes through an AI step that detects the intent of
      each email. Invoice queries, purchase enquiries and support requests land
      in separate queues, and urgent messages are escalated.
    </desc>

    {/* before */}
    <rect
      x="30"
      y="48"
      width="160"
      height="200"
      rx="10"
      fill="#ffffff"
      stroke="#0b2433"
      strokeWidth="1.6"
    />
    <text x="44" y="72" fontSize="14" fontWeight="700" fill="#0b2433">
      Shared inbox
    </text>
    <path d="M30 84h160" stroke="#e3e8ec" />
    <g>
      <circle cx="50" cy="106" r="8" fill="#9a9da1" opacity="0.5" />
      <circle cx="50" cy="140" r="8" fill="#046999" opacity="0.5" />
      <circle cx="50" cy="174" r="8" fill="#0b2433" opacity="0.35" />
      <circle cx="50" cy="208" r="8" fill="#9a9da1" opacity="0.5" />
      <g stroke="#d4d6d9" strokeWidth="4" strokeLinecap="round">
        <path d="M66 102h96M66 112h64" />
        <path d="M66 136h84M66 146h100" />
        <path d="M66 170h100M66 180h56" />
        <path d="M66 204h72M66 214h92" />
      </g>
      <g fill="#046999" opacity="0.8">
        <circle cx="176" cy="102" r="4" />
        <circle cx="176" cy="170" r="4" />
      </g>
    </g>
    <text x="20" y="322" fontSize="14" fill="#4a5568">
      One inbox, everything mixed
    </text>

    <Arrow x="192" y="150" />
    <Chip label="AI sorts" />
    <Arrow x="290" y="150" />

    {/* after */}
    <g>
      <rect
        x="312"
        y="34"
        width="196"
        height="64"
        rx="10"
        fill="#ffffff"
        stroke="#046999"
        strokeWidth="1.6"
      />
      <rect
        x="312"
        y="108"
        width="196"
        height="64"
        rx="10"
        fill="#ffffff"
        stroke="#046999"
        strokeWidth="1.6"
      />
      <rect
        x="312"
        y="182"
        width="196"
        height="64"
        rx="10"
        fill="#ffffff"
        stroke="#046999"
        strokeWidth="1.6"
      />
      <g fontSize="14">
        <text x="326" y="60" fontWeight="700" fill="#0b2433">
          Invoice queries
        </text>
        <text x="326" y="82" fill="#4a5568">
          Accounts team
        </text>
        <text x="326" y="134" fontWeight="700" fill="#0b2433">
          Purchase enquiries
        </text>
        <text x="326" y="156" fill="#4a5568">
          Sales team
        </text>
        <text x="326" y="208" fontWeight="700" fill="#0b2433">
          Support requests
        </text>
        <text x="326" y="230" fill="#4a5568">
          Service desk
        </text>
      </g>
      <g fill="#e8f4fa" stroke="#046999" strokeWidth="1.4">
        <circle cx="482" cy="66" r="12" />
        <circle cx="482" cy="140" r="12" />
        <circle cx="482" cy="214" r="12" />
      </g>
      <g fill="#046999">
        <circle cx="482" cy="62" r="3.5" />
        <circle cx="482" cy="136" r="3.5" />
        <circle cx="482" cy="210" r="3.5" />
        <path d="M475 72a7 6 0 0 1 14 0z" />
        <path d="M475 146a7 6 0 0 1 14 0z" />
        <path d="M475 220a7 6 0 0 1 14 0z" />
      </g>
    </g>
    <rect x="312" y="258" width="196" height="28" rx="14" fill="#046999" />
    <path
      d="M326 266v14M326 266h10l-3 4 3 4h-10"
      fill="#ffffff"
      stroke="#ffffff"
      strokeWidth="1.4"
      strokeLinejoin="round"
    />
    <text x="344" y="277" fontSize="14" fontWeight="700" fill="#ffffff">
      Urgent: escalated
    </text>
    <text x="410" y="326" fontSize="14" fill="#4a5568" textAnchor="middle">
      Routed to the right queue
    </text>
  </svg>
);
