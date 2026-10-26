// videoData.js
// Central repository for all video metadata
// Used for video sitemap generation and video page rendering
// Each video object contains all necessary metadata for SEO and display

// Helper function to format video duration from seconds to MM:SS
export const formatDuration = (seconds) => {
  if (!seconds || seconds === 0) return "0:00";
  const mins = Math.floor(seconds / 60);
  const secs = seconds % 60;
  return `${mins}:${secs.toString().padStart(2, "0")}`;
};

// Main video data array - exported as both named and default export
export const videoData = [
  {
    id: "copy-and-paste-word-formatting",
    title: "Copy and Paste Function",
    description: `
      <p>Our Formatting Tab Solution ensures that text pasted from other documents is inserted in a controlled environment, allowing only your corporate styles.</p>
      <ul>
        <li>Pasted text will recognise default Word styles like <strong>Headings</strong> and <strong>Normal</strong> and apply your correct formatting</li>
        <li>Unknown formatting will default to the 'Normal' style, and character formatting (<strong>Bold</strong>, <em>Italic</em>) will remain where possible</li>
        <li>Default list styles (List or List Number sets) will reset the numbering back to 1 between paragraphs of 'Normal' style text or a heading</li>
        <li>Tables will paste in and automatically apply the default Table style, maintaining branding consistency throughout</li>
      </ul>
    `,
    videoUrl: "/videos/copy-and-paste-word-formatting.mp4",
    url: "/videos/copy-and-paste-word-formatting",
    duration: 46,
    uploadDate: "2025-10-13T00:00:00+00:00",
    thumbnailUrl: "/videos/thumbnails/copy-and-paste-word-formatting.webp",
    category: "Templates",
    featured: true,
  },
  {
    id: "word-template-solutions",
    title: "Word Template Solutions",
    description: `
      <p>Learn how to create, customise, and implement professional templates that streamline your document workflows and ensure brand consistency.</p>
    `,
    videoUrl: "/videos/word-template-solutions.mp4",
    url: "/videos/word-template-solutions",
    duration: 231,
    uploadDate: "2025-10-13T00:00:00+00:00",
    thumbnailUrl: "/videos/thumbnails/word-template-solutions.webp",
    category: "Templates",
    featured: true,
  },
  {
    id: "insert-and-format-tables-button",
    title: "Insert and Format Tables Button",
    description: `
      <p>The <strong>'Insert Table'</strong> button opens a pop-up form prompting the user for:</p>
      <ul>
        <li>Number of rows</li>
        <li>Number of columns</li>
        <li>Table Style â€“ a drop-down list of specific table styles to be applied to the table</li>
        <li>Table Caption - a check box to indicate that a caption is required for the table with a prompt for the user to enter the caption text</li>
      </ul>
      <p>When the user clicks on the 'Update Document' button within the form, the system will insert a table into the document at the current cursor position. The table will take up the full width of the page and have the selected table style applied. The table will also be automatically captioned if the table caption option was selected. The 'Format Table' pop-up will then be displayed immediately after the new table is inserted so that the user can apply the table formatting options.</p>
      
      <p><strong>Format Table Button</strong></p>
      <p>The Format Table button opens a pop-up form prompting to enable or disable table style options for the table the cursor is currently in:</p>
      <ul>
        <li>Table style - a drop-down list of specific table styles to be applied to the table</li>
        <li>Header row (checkbox)</li>
        <li>Total row (checkbox)</li>
        <li>Banded rows (checkbox)</li>
        <li>First column (checkbox)</li>
        <li>Last column (checkbox)</li>
        <li>Banded columns (checkbox)</li>
      </ul>
      <p>When the user clicks on the 'Update Document' button within the form, the system will update the currently selected table in accordance with the selections made in the form. Specific options can be setup to be defaulted to on.</p>
    `,
    videoUrl: "/videos/insert-and-format-tables-button.mp4",
    url: "/videos/insert-and-format-tables-button",
    duration: 38,
    uploadDate: "2025-10-13T00:00:00+00:00",
    thumbnailUrl: "/videos/thumbnails/insert-and-format-tables-button.webp",
    category: "Buttons",
    featured: false,
  },
  {
    id: "remove-instructional-text-button",
    title: "Remove Instructional Text Button",
    description: `
      <p>The <strong>'Remove Instructional Text'</strong> button will remove all text in the document formatted to the 'Instruction Text' style.</p>
      <p><em>Please note this function is not compatible with Editing Restrictions.</em></p>
    `,
    videoUrl: "/videos/remove-instructional-text-button.mp4",
    url: "/videos/remove-instructional-text-button",
    duration: 16,
    uploadDate: "2025-10-13T00:00:00+00:00",
    thumbnailUrl: "/videos/thumbnails/remove-instructional-text-button.webp",
    category: "Buttons",
    featured: false,
  },
  {
    id: "clean-up-styles-button",
    title: "Styles Clean Up Button",
    description: `
      <p>The styles and formatting of your documents (based on the master template or sub templates) may be open to external formatting corruption if they are used:</p>
      <ol>
        <li>Outside of the 'Corporate Formatting Tab'; or</li>
        <li>In conjunction with content copied from a source other than Word; or</li>
        <li>In a multi author environment</li>
      </ol>
      <p>In these circumstances the users can activate the <strong>'Styles Clean Up'</strong> function, which will ensure that:</p>
      <ol>
        <li>Unauthorised styles are removed from the style set</li>
        <li>Content with incorrect formatting is either cleaned to match the correct default style (for example, headings) or reformatted back to the normal style</li>
        <li>Default list styles ('List' or 'List Number' sets) will reset the numbering back to '1' between paragraphs of normal text or between headings</li>
      </ol>
      <p><em>It is not recommended that the Style Clean up functions are run while within a multi author environment.</em></p>
    `,
    videoUrl: "/videos/clean-up-styles-button.mp4",
    url: "/videos/clean-up-styles-button",
    duration: 35,
    uploadDate: "2025-10-13T00:00:00+00:00",
    thumbnailUrl: "/videos/thumbnails/clean-up-styles-button.webp",
    category: "Buttons",
    featured: false,
  },
  {
    id: "insert-and-remove-landscape-buttons",
    title: "Insert / Remove A3 Landscape Pages Button",
    description: `
      <p>The <strong>'Insert A3 Page'</strong> button provides two options:</p>
      <ol>
        <li><strong>A3 Landscape</strong>, which adds an A3 Landscape page with correct margins, headers & footers</li>
        <li><strong>A3 Portrait</strong>, which adds an A3 Portrait page with correct margins, headers & footers</li>
      </ol>
      <p>A3 pages can easily be converted back to A4 by selecting the <strong>'Change A3 to A4'</strong> button.</p>
    `,
    videoUrl: "/videos/insert-and-remove-landscape-buttons.mp4",
    url: "/videos/insert-and-remove-landscape-buttons",
    duration: 28,
    uploadDate: "2025-12-15T00:00:00+00:00",
    thumbnailUrl: "/videos/thumbnails/insert-and-remove-landscape-buttons.webp",
    category: "Buttons",
    featured: false,
  },
  {
    id: "table-list-button",
    title: "Table List Styles Button",
    description: `
      <p>The styles <strong>'Table List Continue'</strong> (1, a, i) and <strong>'Table Cell Lists'</strong> (1, a, i) will be added to the style gallery.</p>
      <p>The 'Table List' styles will link to the Formatting Tab ribbon buttons giving the user the capability of having:</p>
      <ul>
        <li><strong>'Table Cell Lists'</strong> - that restart at each new cell, or</li>
        <li><strong>'Table List Continue'</strong> - that continue through the cells but restart at each new table</li>
      </ul>
      <p><em>Please note that 'Table List Continue' will automatically order the numbers horizontally, as is standard Word functionality.</em></p>
      <p>The 'Table Cell Lists' and the 'Table List Continue' styles will have identical formatting to keep consistency across table lists.</p>
      <p>The <strong>'Reset Table Numbering'</strong> button will reset the numbering according to the rules of the 'Table Cell List' or 'Table List Continue' styles.</p>
      <p><em>It is not recommended that the Reset Table Numbering functions are run while within a multi author environment.</em></p>
    `,
    videoUrl: "/videos/table-list-button.mp4",
    url: "/videos/table-list-buttons",
    duration: 29,
    uploadDate: "2025-10-13T00:00:00+00:00",
    thumbnailUrl: "/videos/thumbnails/table-list-button.webp",
    category: "Buttons",
    featured: false,
  },
  {
    id: "image-placement-button",
    title: "Image Placement Holders Button",
    description: `
      <p>An <strong>'Insert Image'</strong> button will insert an image placeholder with a 'Figure Caption' into which users can insert an image.</p>
      <p>The placeholders will allocate the correct position and size (height or width) for the image.</p>
    `,
    videoUrl: "/videos/image-placement-button.mp4",
    url: "/videos/image-placement-button",
    duration: 19,
    uploadDate: "2025-10-13T00:00:00+00:00",
    thumbnailUrl: "/videos/thumbnails/image-placement-button.webp",
    category: "Buttons",
    featured: false,
  },
  {
    id: "insert-landscape-page-button",
    title: "Insert / Remove A4 Landscape Pages Button",
    description: `
      <p>The <strong>'Insert Landscape A4 Page'</strong> button gives two options:</p>
      <ul>
        <li>Insert A4 Landscape Page at selection</li>
        <li>Insert A4 Landscape Page as last page of document</li>
      </ul>
      <p>The <strong>'Remove Landscape A4 Page'</strong> button gives two options:</p>
      <ul>
        <li>Change the current landscape section to portrait</li>
        <li>Change the last landscape section to portrait</li>
      </ul>
    `,
    videoUrl: "/videos/insert-landscape-page-button.mp4",
    url: "/videos/insert-landscape-page-button",
    duration: 8,
    uploadDate: "2025-10-13T00:00:00+00:00",
    thumbnailUrl: "/videos/thumbnails/insert-landscape-page-button.webp",
    category: "Buttons",
    featured: false,
  },
  {
    id: "insert-appendix-page-button",
    title: "Chapter or Appendix Break Page Button",
    description: `
      <p><strong>'Chapter or Appendix Break Page'</strong> will give the user the choice whether or not to include break pages and to allow the user to control where these break pages are placed.</p>
    `,
    videoUrl: "/videos/insert-appendix-page-button.mp4",
    url: "/videos/insert-appendix-page-button",
    duration: 18,
    uploadDate: "2025-11-07T00:00:00+00:00",
    thumbnailUrl: "/videos/thumbnails/insert-appendix-page-button.webp",
    category: "Buttons",
    featured: false,
  },
  {
    id: "insert-cover-page",
    title: "Covers Button",
    description: `
      <p>Cover pages will be designed and stored in the <strong>'Covers'</strong> button on the Formatting Tab.</p>
      <p>These covers can be seamlessly swapped out in accordance with the user's needs.</p>
    `,
    videoUrl: "/videos/insert-cover-page.mp4",
    url: "/videos/insert-cover-page",
    duration: 10,
    uploadDate: "2025-10-13T00:00:00+00:00",
    thumbnailUrl: "/videos/thumbnails/insert-cover-page.webp",
    category: "Templates",
    featured: false,
  },
  {
    id: "multi-level-list-clean-up-button",
    title: "Multi Level List Clean Up Button",
    description: `
      <p>When your Lists corrupt, users can activate the <strong>'Multilevel List Clean Up Button'</strong> function, which will ensure that default list styles ('List' or 'List Number' sets) will reset the numbering back to '1' between paragraphs of normal text or between headings.</p>
      <p>It is not recommended that the Multilevel List Clean Up functions are run while within a multi author environment.
</p>
    `,
    videoUrl: "/videos/multi-level-list-clean-up-button.mp4",
    url: "/videos/multi-level-list-clean-up-button",
    duration: 23,
    uploadDate: "2025-10-21T00:00:00+00:00",
    thumbnailUrl: "/videos/thumbnails/multi-level-list-clean-up-button.webp",
    category: "Buttons",
    featured: false,
  },
  {
    id: "insert-table-of-contents-button",
    title: "Insert Table of Contents Button",
    description: `
      <p>The <strong>'Insert Table of Contents'</strong> button allows the user to choose from a range of TOC options, including a Table of Contents with one to three levels, a Table of Appendices, a Table of Tables, and a Table of Figures.</p>
    `,
    videoUrl: "/videos/insert-table-of-contents-button.mp4",
    url: "/videos/insert-table-of-contents-button",
    duration: 34,
    uploadDate: "2025-01-13T00:00:00+00:00",
    thumbnailUrl: "/videos/thumbnails/insert-table-of-contents-button.webp",
    category: "Buttons",
    featured: false,
    canvaId: "DAGfubKPWAg",
  },
  {
    id: "table-subheading-row-button",
    title: "Apply Table Sub Header/Format Cells Button",
    description: `
      <p>Users select the cells in an existing table that they want to apply the formatting to prior to making their selection from the menu button. Users can select entire rows, columns or individual cells in a table.</p>
    `,
    videoUrl: "/videos/table-subheading-row-button.mp4",
    url: "/videos/table-subheading-row-button",
    duration: 12,
    uploadDate: "2025-01-13T00:00:00+00:00",
    thumbnailUrl: "/videos/thumbnails/table-subheading-row-button.webp",
    category: "Buttons",
    featured: false,
    canvaId: "DAGft_s_3Ro",
  },
  {
    id: "chart-templates-button",
    title: "Chart Templates Button",
    description: `
      <p>The <strong>'Chart Templates'</strong> button will be added to the 'Company Formatting' tab. Upon selection of a chart, the user can navigate to 'Templates' from the 'Chart Templates' button and select from the predefined 'Chart Templates'. The 'Chart Template' will apply the required chart formatting, keeping consistency across your document.</p>
    `,
    videoUrl: "/videos/chart-templates-button.mp4",
    url: "/videos/chart-templates-and-button",
    duration: 27,
    uploadDate: "2025-01-13T00:00:00+00:00",
    thumbnailUrl: "/videos/thumbnails/chart-templates-button.webp",
    category: "Buttons",
    featured: false,
    canvaId: "DAG2gBq4WN4",
  },
  {
    id: "lists",
    title: "Lists",
    description: `
      <p>The user will select the <strong>'Bullet List'</strong>, <strong>'Numbered List'</strong> button or the <strong>'List Continue'</strong> button to apply their Bullets and Numbered List styles.</p>
      <p><em>Note: The 'Numbered List' button contains functionality to reset the numbering back to one between paragraphs of 'Normal' text style or a heading style, so the users do not need to restart the list numbering back to one manually. If the user does not want the numbering to restart between paragraphs of 'Normal', then please use the 'List Continue' button.</em></p>
    `,
    videoUrl: "/videos/lists.mp4",
    url: "/videos/lists",
    duration: 15,
    uploadDate: "2025-01-13T00:00:00+00:00",
    thumbnailUrl: "/videos/thumbnails/lists.webp",
    category: "Buttons",
    featured: false,
    canvaId: "DAG2gxAeKao",
  },
];

// Also export as 'videos' for backwards compatibility
export const videos = videoData;

// Extract unique categories from video data
export const categories = ["All", ...new Set(videoData.map((v) => v.category))];

// Helper function to get video by ID
export const getVideoById = (id) => {
  return videoData.find((video) => video.id === id);
};

// Helper function to get video by Canva ID
export const getVideoByCanvaId = (canvaId) => {
  return videoData.find((video) => video.canvaId === canvaId);
};

// Helper function to get all videos
export const getAllVideos = () => {
  return videoData;
};

// Helper function to get videos by category
export const getVideosByCategory = (category) => {
  if (category === "All") return videoData;
  return videoData.filter((video) => video.category === category);
};

// Helper function to get featured videos
export const getFeaturedVideos = () => {
  return videoData.filter((video) => video.featured);
};

// Helper function to generate Canva embed URL
export const getCanvaEmbedUrl = (canvaId) => {
  return `https://www.canva.com/design/${canvaId}/view?embed`;
};

// Helper function to strip HTML tags and truncate text for card previews
export const getPlainTextPreview = (htmlString, maxLength = 150) => {
  // Remove HTML tags
  const plainText = htmlString
    .replace(/<[^>]*>/g, " ")
    // Replace multiple spaces with single space
    .replace(/\s+/g, " ")
    // Trim whitespace
    .trim();

  // Truncate and add ellipsis if needed
  if (plainText.length > maxLength) {
    return plainText.substring(0, maxLength).trim() + "...";
  }

  return plainText;
};

// Default export
export default videoData;
