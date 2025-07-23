import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

import CodeBlock from '../../../components/CodeBlock';
import Contact from '../../../components/Contact';

import styles from '../../../styles/blogPost.module.scss';

import marcello from '../../../public/team/marcello.webp';

const ExportToPDFBlogPost = () => {
  // HTML structure for PDF
  const htmlStructureCode = `<!-- Basic HTML structure for PDF -->
<h1>@{triggerOutputs()?['body/Title']}</h1>
<p>@{triggerOutputs()?['body/Description']}</p>`;

  // Image tag for PDF
  const imageTagCode = `<!-- Image tag for PDF with base64 encoding -->
<img src="data:@{outputs('Get_file_content')?['body/$content-type']};base64,@{outputs('Get_file_content')?['body/$content']}" style="width: 200px; margin: 20px 0;" />`;

  // Complete HTML structure
  const completeHtmlCode = `<!-- Complete HTML structure with image -->
<img src="data:@{outputs('Get_file_content')?['body/$content-type']};base64,@{outputs('Get_file_content')?['body/$content']}" style="width: 200px; margin: 20px 0;" />
<h1>@{triggerOutputs()?['body/Title']}</h1>
<p>@{triggerOutputs()?['body/Description']}</p>`;

  // Power Automate flow structure
  const powerAutomateCode = `// Power Automate Flow Steps:

1. Trigger: When an item is created in SharePoint list
   - Site: [Your SharePoint Site]
   - List: Issues

2. Get file content (for logo/image)
   - Site: [Your SharePoint Site]
   - Library: Shared Documents
   - File: logo_small.png

3. Compose HTML content
   - Combine HTML structure with dynamic content from SharePoint
   - Include image with base64 encoding

4. Create HTML file in OneDrive
   - Folder: Root
   - Filename: concat(triggerOutputs()?['body/Title'], '.html')
   - Content: Output from Compose step

5. Convert file to PDF
   - File: ID from Create HTML file step
   - Target type: PDF

6. Create file in SharePoint
   - Site: [Your SharePoint Site]
   - Library: Issues Attachments
   - Filename: [Name from convert step]
   - File content: [Content from convert step]

7. Update file properties
   - Site: [Your SharePoint Site]
   - Library: Issues Attachments
   - ID: ID from Create file step
   - ParentID: ID from trigger (SharePoint list item ID)`;

   const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Export to PDF in Power Apps - The Best Way to Do It!", // Article title
    "image": "https://img.youtube.com/vi/_mgLYllGY-Y/maxresdefault.jpg", // Featured image
    "author": {
      "@type": "Person",
      "name": "Marcello Brocchi"
    },
    "publisher": {
      "@type": "Organization",
      "name": "Power Platform Experts",
      "logo": {
        "@type": "ImageObject",
        "url": "https://www.powerplatformexperts.com.au/logo.png" // Your logo URL
      }
    },
    "datePublished": "2025-04-14T09:00:00+10:00", // Use actual publish date
    "dateModified": "2025-04-14T09:00:00+10:00", // Use last updated date
    "description": "Learn how to export data from Power Apps to PDF using Power Automate. This tutorial shows the easiest and most effective way to generate professional PDF documents.",
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": "https://www.powerplatformexperts.com.au/blog/export-to-pdf-power-apps"
    },

"video": {
  "@type": "VideoObject",
  "name": "Export to PDF in Power Apps - The Best Way to Do It!",
  "description": "Exporting data to PDF from Power Apps is a common requirement in business applications. Learn the streamlined approach using Power Automate.",
  "thumbnailUrl": "https://img.youtube.com/vi/_mgLYllGY-Y/maxresdefault.jpg",
  "uploadDate": "2025-04-14T09:00:00+10:00",
  "duration": "PT18M4S",
  "embedUrl": "https://www.youtube.com/embed/_mgLYllGY-Y",
  "contentUrl": "https://www.youtube.com/watch?v=_mgLYllGY-Y"
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
          <p>Reading time: 6min</p>
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
      <h1 className={styles.blogTitle}>Export to PDF in Power Apps - The Best Way to Do It!</h1>
      
      <div className={styles.blogContent}>
        <h2>Introduction</h2>
        <p>
          Exporting data to PDF from Power Apps is a common requirement in business applications. While Power Apps doesn't have a built-in "Export to PDF" function, we can achieve this functionality by combining Power Apps with Power Automate (Flow) to create professional-looking PDF exports of your app data.
        </p>
        <p>
          In this guide, I'll show you a streamlined approach to PDF exports, including how to:
        </p>
        <ul>
          <li>Set up a Flow triggered when a record is saved in SharePoint</li>
          <li>Create HTML content dynamically based on your record data</li>
          <li>Include images in your PDF exports (the tricky part!)</li>
          <li>Convert the HTML to a PDF file</li>
          <li>Link the PDF back to your original record</li>
        </ul>

        <h2>Prefer to Watch the Video?</h2>
        <p>Head over to my YouTube channel <a 
          href="https://www.youtube.com/@ChinoDoesStuff/featured" 
          rel="nofollow noreferrer noopener"
        >Chino Does Stuff</a> to watch the video tutorial, there you will see a variety of videos with loads of tricks and tips on the entire Power Platform suite.</p>

        <div className={styles.videoContainer}>
        <iframe className={styles.videoEmbed}  src="https://www.youtube.com/embed/_mgLYllGY-Y?si=3OuyiaFX5r1sfORy" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
        </div>
        
        <h2>The Sample Scenario</h2>
        <p>
          For this tutorial, we'll use a simple "Issues Tracker" Power App that logs issues to a SharePoint list. When a new issue is created, our Flow will automatically generate a PDF export of that issue and attach it to the SharePoint item.
        </p>
        <p>
          The SharePoint list contains basic fields for our issue tracking:
        </p>
        <ul>
          <li><strong>Title</strong> - The name of the issue</li>
          <li><strong>Description</strong> - Detailed information about the issue</li>
          <li>Additional metadata (ID, Created By, etc.)</li>
        </ul>
        
        <h2>Building the Power Automate Flow</h2>
        <p>
          Let's start by creating a Flow that will handle the PDF export process. This Flow will trigger whenever a new item is created in our SharePoint list.
        </p>
        
        <h3>Step 1: Create a New Cloud Flow</h3>
        <p>
          Start by creating a new cloud flow in Power Automate with a SharePoint trigger:
        </p>
        <ol>
          <li>Navigate to Power Automate and select "Create" {'>'} "Cloud flow"</li>
          <li>Choose the "When an item is created" trigger for SharePoint</li>
          <li>Select your SharePoint site and the "Issues" list</li>
        </ol>
        
        <h3>Step 2: Get an Image for Your PDF (Optional)</h3>
        <p>
          If you want to include images in your PDF (like a company logo), you'll need to retrieve that image file first:
        </p>
        <ol>
          <li>Add a "Get file content" action from SharePoint</li>
          <li>Select your SharePoint site and document library</li>
          <li>Enter the file path to your image (e.g., "logo_small.png")</li>
        </ol>
        <p>
          This step retrieves the binary content of your image file, which we'll encode into the HTML later.
        </p>
        
        <h3>Step 3: Compose Your HTML Content</h3>
        <p>
          Now, we need to create the HTML structure that will become our PDF:
        </p>
        <ol>
          <li>Add a "Compose" action to your flow</li>
          <li>In the "Inputs" field, create the HTML structure using values from your SharePoint item</li>
        </ol>
        <p>
          For a basic structure with just text, you could use:
        </p>
        
        <CodeBlock code={htmlStructureCode} language="html" />
        
        <p>
          The tricky part is adding an image. To include an image in your PDF, you'll need to encode it as a base64 string directly in your HTML:
        </p>
        
        <CodeBlock code={imageTagCode} language="html" />
        
        <p>
          Combining these, your complete HTML might look like:
        </p>
        
        <CodeBlock code={completeHtmlCode} language="html" />
        
        <h3>Step 4: Create a Temporary HTML File</h3>
        <p>
          Before converting to PDF, we need to save our HTML as a file:
        </p>
        <ol>
          <li>Add a "Create file" action for OneDrive</li>
          <li>Select the root folder of your OneDrive (or any folder you prefer)</li>
          <li>For the file name, use a dynamic expression: <code>concat(triggerOutputs()?['body/Title'], '.html')</code></li>
          <li>For the file content, use the output from your Compose step</li>
        </ol>
        <p>
          This creates a temporary HTML file in OneDrive, which we'll then convert to PDF.
        </p>
        
        <h3>Step 5: Convert the HTML File to PDF</h3>
        <p>
          Now comes the magic step - converting our HTML to PDF:
        </p>
        <ol>
          <li>Add a "Convert file" action from OneDrive</li>
          <li>For the "File", select the ID from the previous "Create file" step</li>
          <li>Set the target format to "PDF"</li>
        </ol>
        <p>
          This step handles the conversion from HTML to PDF, giving us a properly formatted document.
        </p>
        
        <h3>Step 6: Save the PDF to SharePoint</h3>
        <p>
          Now that we have our PDF, let's save it to SharePoint where our Power App can access it:
        </p>
        <ol>
          <li>Add a "Create file" action for SharePoint</li>
          <li>Select your SharePoint site and a document library (e.g., "Issues Attachments")</li>
          <li>For the file name, use the file name from the Convert step</li>
          <li>For the file content, use the file content from the Convert step</li>
        </ol>
        
        <h3>Step 7: Link the PDF to Your SharePoint Item</h3>
        <p>
          Finally, we need to associate this PDF with our original SharePoint item:
        </p>
        <ol>
          <li>Add an "Update file properties" action for SharePoint</li>
          <li>Select your SharePoint site and document library</li>
          <li>For the ID, use the ID from the previous "Create file" step</li>
          <li>Add a property: "ParentID" = ID from the trigger (SharePoint list item ID)</li>
        </ol>
        <p>
          This creates a relationship between your PDF and the SharePoint item, making it appear as an attachment.
        </p>
        
        <h3>Complete Flow Structure</h3>
        <p>
          Here's a summary of the complete flow:
        </p>
        
        <CodeBlock code={powerAutomateCode} language="javascript" />
        
        <h2>Testing the Solution</h2>
        <p>
          Once your flow is set up, it's time to test the solution:
        </p>
        <ol>
          <li>Open your Power App and create a new issue</li>
          <li>Enter a title and description, then save the record</li>
          <li>The flow should trigger automatically</li>
          <li>After the flow completes, you should see a PDF attachment on your SharePoint item</li>
        </ol>
        <p>
          Opening the PDF should show your formatted content, including any images you've included.
        </p>
        
        <h2>Customising Your PDF Output</h2>
        <p>
          You can enhance your PDF output in several ways:
        </p>
        <ul>
          <li><strong>Add more fields:</strong> Include any field from your SharePoint item in the HTML</li>
          <li><strong>Improve styling:</strong> Add CSS to your HTML to control fonts, colors, and layout</li>
          <li><strong>Add tables:</strong> Format data in tables for better readability</li>
          <li><strong>Add conditional content:</strong> Use Power Automate expressions to show/hide content based on conditions</li>
        </ul>
        <p>
          Remember that you're essentially creating a web page that will be converted to PDF, so most HTML and CSS techniques will work.
        </p>
        
        <h2>Key Challenges and Solutions</h2>
        <h3>Including Images</h3>
        <p>
          The most challenging part of this solution is including images in your PDF. The key is to:
        </p>
        <ol>
          <li>Retrieve the image file using "Get file content"</li>
          <li>Encode the image as a base64 string within an HTML image tag</li>
          <li>Include the content type to ensure proper rendering</li>
        </ol>
        <p>
          This approach works for most image types (PNG, JPEG, etc.) but be mindful of file sizes, as large images will increase processing time.
        </p>
        
        <h3>HTML Formatting</h3>
        <p>
          For best results with the PDF conversion:
        </p>
        <ul>
          <li>Use standard HTML elements (h1, p, table, etc.)</li>
          <li>Keep CSS simple and avoid complex layouts</li>
          <li>Test thoroughly to ensure proper rendering</li>
        </ul>
        
        <h2>Conclusion</h2>
        <p>
          Exporting to PDF from Power Apps is straightforward once you understand the process. By leveraging Power Automate, we can create professional-looking PDF exports that include both text and images, providing a complete solution for document generation.
        </p>
        <p>
          This approach offers several advantages:
        </p>
        <ul>
          <li>Automatic PDF generation when records are created</li>
          <li>Full customization of PDF content and appearance</li>
          <li>Seamless integration with SharePoint for document storage</li>
          <li>Ability to include images and formatting in the PDF</li>
        </ul>
        <p>
          With these tools, you can enhance your Power Apps solutions with professional document generation capabilities, meeting the needs of business users who require formatted outputs from their applications.
        </p>
        
        <p>
          If you'd like to see more Power Platform development tutorials, please head over to the <a 
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

export default ExportToPDFBlogPost;