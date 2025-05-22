import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

import CodeBlock from '../../../components/CodeBlock';
import Contact from '../../../components/Contact';

import styles from '../../../styles/blogPost.module.scss';

import marcello from '../../../public/team/marcello.webp';

const PowerAppsPDFBlogPost = () => {
  // Button OnSelect code sample
  const onSelectCode = `// Create PDF and open in new tab
Set(
    varPDFBlob,
    PDF(
        ViewIssue // Current screen to convert to PDF
    )
);

// Save PDF to SharePoint using the Save File flow
SaveFileToSharePoint.Run(
    "PDF_" & Text(Now(), "yyyymmdd_hhmmss"), // ID for the file
    {
        file: {
            contentBytes: varPDFBlob,
            name: "PDF_" & Text(Now(), "yyyymmdd_hhmmss") & "_export.pdf"
        }
    }
);

// Open the saved PDF in a new browser tab
Launch(
    "https://yoursharepoint.com/sites/yoursite/Shared%20Documents/PDF_" & 
    Text(Now(), "yyyymmdd_hhmmss") & 
    "_export.pdf"
);`;

  // PDF options code sample
  const pdfOptionsCode = `// PDF function with additional parameters
PDF(
    Screen1,      // Screen to convert
    {
        margins: {
            top: 36,       // 0.5 inches (72 points per inch)
            bottom: 36,    // 0.5 inches
            left: 36,      // 0.5 inches
            right: 36      // 0.5 inches
        },
        dpi: 150,          // Higher DPI for better quality
        quality: 0.9       // Higher quality (0-1 range)
    }
)

// Using a container instead of a whole screen
PDF(
    Container1,   // Only convert specific container contents
    {
        paperSize: "A4",   // Specify paper size
        orientation: "portrait"
    }
)`;

  // PDF Viewer code sample
  const pdfViewerCode = `// Add a PDF viewer control
<PDF Viewer>
    Document: varPDFBlob
    Height: 500
    Width: 800
</PDF Viewer>`;

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Power Apps PDF Function - The Best Way to Export to PDF?",
  "image": "https://i.ytimg.com/vi/BiOCK1jDOMo/maxresdefault.jpg",
  "author": {
    "@type": "Person",
    "name": "Marcello Brocchi"
  },
  "publisher": {
    "@type": "Organization",
    "name": "Office Experts Group",
    "logo": {
      "@type": "ImageObject",
      "url": "https://www.powerplatformexperts.com.au/logo.png"
    }
  },
  "datePublished": "2025-04-08T09:00:00+10:00",
  "dateModified": "2025-04-08T09:00:00+10:00",
  "description": "Microsoft has added a new PDF generation capability to Power Apps. Learn how to enable and use the PDF function to create PDFs directly from your applications.",
  "mainEntityOfPage": {
    "@type": "WebPage",
    "@id": "https://www.powerplatformexperts.com.au/blog/power-apps-pdf-function"
  },
  "video": {
    "@type": "VideoObject",
    "name": "Power Apps PDF Function - The Best Way to Export to PDF?",
    "description": "In this video, we will discuss the benefits of using the PDF function for exporting to PDF in Power Apps. The PDF function is a powerful tool that allows you to easily generate high-quality PDF documents from your Power Apps.",
    "thumbnailUrl": "https://i.ytimg.com/vi/BiOCK1jDOMo/maxresdefault.jpg",
    "uploadDate": "2025-04-08T09:00:00+10:00",
    "duration": "PT13M33S",
    "embedUrl": "https://www.youtube.com/embed/BiOCK1jDOMo?si=MZOdygQP0ZkibR4D",
    "contentUrl": "https://www.youtube.com/watch?v=BiOCK1jDOMo"
  }
};

  return (
    <>
                  <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
    <div className={styles.head}></div>
    <div className={styles.blogContainer}>
      <div className={styles.preface}>
        <div>
          <p>Author: Marcello Brocchi</p>
          <p>Reading time: 4min</p>
        </div>
        <div className={styles.svgs}>
          <a 
            href="https://www.linkedin.com/in/marcellobrocchi/?originalSubdomain=au" 
            rel="nofollow noreferrer noopener"
          >
            <svg stroke="currentColor" fill="#0A66C2" strokeWidth="0" viewBox="0 0 1024 1024" height="2em" width="2em" xmlns="http://www.w3.org/2000/svg"><path d="M880 112H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V144c0-17.7-14.3-32-32-32zM349.3 793.7H230.6V411.9h118.7v381.8zm-59.3-434a68.8 68.8 0 1 1 68.8-68.8c-.1 38-30.9 68.8-68.8 68.8zm503.7 434H675.1V608c0-44.3-.8-101.2-61.7-101.2-61.7 0-71.2 48.2-71.2 98v188.9H423.7V411.9h113.8v52.2h1.6c15.8-30 54.5-61.7 112.3-61.7 120.2 0 142.3 79.1 142.3 181.9v209.4z"></path></svg>
          </a>
          <a 
            href="https://www.youtube.com/@ChinoDoesStuff/featured" 
            rel="nofollow noreferrer noopener"
          >
            <svg stroke="currentColor" fill="#FF0000" strokeWidth="0" viewBox="0 0 1024 1024" height="2em" width="2em" xmlns="http://www.w3.org/2000/svg"><path d="M941.3 296.1a112.3 112.3 0 0 0-79.2-79.3C792.2 198 512 198 512 198s-280.2 0-350.1 18.7A112.12 112.12 0 0 0 82.7 296C64 366 64 512 64 512s0 146 18.7 215.9c10.3 38.6 40.7 69 79.2 79.3C231.8 826 512 826 512 826s280.2 0 350.1-18.8c38.6-10.3 68.9-40.7 79.2-79.3C960 658 960 512 960 512s0-146-18.7-215.9zM423 646V378l232 133-232 135z"></path></svg>
          </a>
        </div>
      </div>
      <h1 className={styles.blogTitle}>Power Apps PDF Function - The Best Way to Export to PDF?</h1>
      
      <div className={styles.blogContent}>
        <h2>Introduction</h2>
        <p>
          Microsoft has added a new PDF generation capability to Power Apps, making it easier than ever to create PDF documents directly from your applications. While this feature is still labeled as experimental, it's available now and provides a significant improvement over previous workarounds.
        </p>
        <p>
          In this guide, I'll show you how to enable and use the PDF function, create PDFs from your screens or containers, and provide users with a seamless experience to view and download their generated documents.
        </p>

        <h2>Prefer to Watch the Video?</h2>
        <p>Head over to my YouTube channel <a 
          href="https://www.youtube.com/@ChinoDoesStuff/featured" 
          rel="nofollow noreferrer noopener"
          >Chino Does Stuff</a> to watch the video tutorial, there you will see a variety of videos with loads of tricks and tips on the entire Power Platform suite.</p>

        <div className={styles.videoContainer}>
        <iframe className={styles.videoEmbed} 
        src="https://www.youtube.com/embed/BiOCK1jDOMo?si=MZOdygQP0ZkibR4D" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
        </div>
        
        <h2>Enabling the Experimental PDF Function</h2>
        <p>
          Since the PDF function is still in experimental status, you'll need to explicitly enable it in your app:
        </p>
        <ol>
          <li>Open your Power App in the maker portal</li>
          <li>Click the Settings gear icon in the top right</li>
          <li>Select "Upcoming features"</li>
          <li>Go to the "Experimental" tab</li>
          <li>Find the PDF option and toggle it to "On"</li>
          <li>Save your changes</li>
        </ol>
        <p>
          Once enabled, you'll have access to the PDF function and the PDF Viewer control in your app.
        </p>
        
        <h2>How the PDF Function Works</h2>
        <p>
          The PDF function in Power Apps is quite straightforward but powerful. It converts a screen or container into a PDF document and returns that document as a blob (binary large object) that you can then work with programmatically.
        </p>
        <p>
          The basic syntax is:
        </p>
        <pre><code>PDF(ScreenOrContainer [, PDFOptions])</code></pre>
        <p>
          Where:
        </p>
        <ul>
          <li><strong>ScreenOrContainer</strong>: The screen or container you want to convert to PDF</li>
          <li><strong>PDFOptions</strong>: Optional parameters to customise the PDF output (margins, DPI, quality, etc.)</li>
        </ul>
        <p>
          The function returns a blob that you can use to:
        </p>
        <ul>
          <li>Display the PDF in a PDF Viewer control</li>
          <li>Save the PDF to SharePoint or other storage</li>
          <li>Email the PDF as an attachment</li>
          <li>Download the PDF to a user's device</li>
        </ul>
        
        <h2>Creating a PDF Export Button</h2>
        <p>
          Let's implement a solution that creates a PDF and allows users to view and download it. We'll use a flow to save the PDF to SharePoint and then open it in a new browser tab.
        </p>
        <p>
          First, add a button to your app with an icon that suggests PDF functionality. Then use this code for the OnSelect property:
        </p>
        
        <CodeBlock code={onSelectCode} language="sharepoint" />
        
        <p>
          This code does three things:
        </p>
        <ol>
          <li>Creates a PDF from the current screen and stores it in a variable</li>
          <li>Uses a flow to save the PDF to SharePoint (more on this below)</li>
          <li>Opens the saved PDF in a new browser tab using the Launch function</li>
        </ol>
        
        <h2>Connecting to SharePoint for PDF Storage</h2>
        <p>
          The code above references a flow called "SaveFileToSharePoint". This is a standard Power Automate flow that saves a file to a SharePoint document library. If you don't already have this flow, you'll need to create it.
        </p>
        <p>
          <strong>Note:</strong> For detailed instructions on creating a file upload flow, check out my video on "File Attachments in Power Apps" which explains how to set up this flow step by step.
        </p>
        <p>
          The flow should:
        </p>
        <ul>
          <li>Accept an ID parameter and a file object (with contentBytes and name properties)</li>
          <li>Use the "Create file" action to save the file to a SharePoint document library</li>
          <li>Return the URL of the saved file (optional)</li>
        </ul>
        
        <h2>Customising Your PDFs</h2>
        <p>
          The PDF function also accepts an options record that allows you to customise various aspects of the generated PDF:
        </p>
        
        <CodeBlock code={pdfOptionsCode} language="SharePoint" />
        
        <p>
          You can customise:
        </p>
        <ul>
          <li><strong>Margins</strong>: Set custom margins in points (72 points = 1 inch)</li>
          <li><strong>DPI</strong>: Adjust the resolution (dots per inch) for better quality</li>
          <li><strong>Quality</strong>: Set the compression quality (0-1 range)</li>
          <li><strong>Paper Size</strong>: Specify standard sizes like "A4", "Letter", etc.</li>
          <li><strong>Orientation</strong>: Choose "portrait" or "landscape"</li>
        </ul>
        <p>
          You can also choose to convert only a specific container instead of an entire screen, which gives you more control over what appears in the PDF.
        </p>
        
        <h2>Using the PDF Viewer Control</h2>
        <p>
          If you want to show a preview of the PDF before saving or downloading, you can use the experimental PDF Viewer control:
        </p>
        
        <CodeBlock code={pdfViewerCode} language="SharePoint" />
        
        <p>
          Simply add the PDF Viewer control to your screen and set its Document property to the blob variable created by the PDF function.
        </p>
        <p>
          <strong>Limitation:</strong> As of this writing, the PDF Viewer control is very basic and doesn't include controls for zooming, downloading, or printing. For a better user experience, I recommend using the approach described earlier to open the PDF in a new browser tab.
        </p>
        
        <h2>Tips for Better PDF Generation</h2>
        <p>
          To get the best results from the PDF function:
        </p>
        <ul>
          <li><strong>Design PDF-specific screens</strong>: Create screens specifically formatted for PDF output rather than using your regular app screens</li>
          <li><strong>Test with different devices</strong>: PDF generation can vary depending on the device resolution</li>
          <li><strong>Add loading indicators</strong>: PDF generation can take a few seconds, so add a loading spinner or message</li>
          <li><strong>Consider containers</strong>: Using containers gives you more precise control over what gets included in your PDF</li>
          <li><strong>Check SharePoint permissions</strong>: Ensure users have the necessary permissions to access the PDFs after they're saved</li>
        </ul>
        
        <h2>Use Cases for PDF Generation</h2>
        <p>
          The PDF function opens up many possibilities for Power Apps:
        </p>
        <ul>
          <li><strong>Reports and Documentation</strong>: Create professional reports that users can download and share</li>
          <li><strong>Certificates and Confirmations</strong>: Generate certificates of completion or confirmation documents</li>
          <li><strong>Forms and Agreements</strong>: Convert filled-out forms into PDF documents for record-keeping</li>
          <li><strong>Invoices and Receipts</strong>: Create professional invoices that can be downloaded or emailed</li>
          <li><strong>Work Orders and Instructions</strong>: Generate work orders or instructions that can be printed</li>
        </ul>
        
        <h2>Conclusion</h2>
        <p>
          The new PDF function in Power Apps is a welcome addition that makes it much easier to generate PDF documents directly from your apps. While still experimental, it works well and provides a cleaner, more integrated solution than previous workarounds.
        </p>
        <p>
          By combining the PDF function with a SharePoint storage flow and the Launch function, you can provide users with a seamless experience for creating, viewing, and downloading PDFs from your Power Apps.
        </p>
        <p>
          As the feature evolves out of experimental status, we can expect more capabilities and better integration with the rest of the Power Platform. In the meantime, this approach offers a practical solution for PDF generation needs.
        </p>
        
        <p>
          If you'd like to see more Power Apps tips and techniques, please head over to the <a 
          href="https://www.youtube.com/@ChinoDoesStuff/featured" 
          rel="nofollow noreferrer noopener"
        >YouTube channel</a> and leave a comment there. I actively monitor and respond to all YouTube comments!
        </p>

        <div className={styles.about}>
          <div>
        <h4>About the Author</h4>
        <p> Marcello is a lead developer at Powerplatform Experts, an expert in, Computer Science, Power Platform integration and founder of the YouTube channel <a 
          href="https://www.youtube.com/@ChinoDoesStuff/featured" 
          rel="nofollow noreferrer noopener"
        >ChinoDoesStuff.</a> If you have any questions, please feel free to get in contact at via the form below.</p>
        </div>
        <div className={styles.authorImage}>
          <Image src={marcello} alt="Marcello Brocchi" width={80} height={80} />
          </div>
        </div>

      </div>
    </div>
    <Contact />
    </>
  );
};

export default PowerAppsPDFBlogPost;