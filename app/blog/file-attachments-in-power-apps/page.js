import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

import CodeBlock from '../../../components/CodeBlock';
import Contact from '../../../components/Contact';

import styles from '../../../styles/blogPost.module.scss';

import marcello from '../../../public/team/marcello.webp';

const PowerAppsFileAttachmentsBlogPost = () => {
  // Adding attachment control code sample
  const attachmentControlCode = `// After adding a Form control and selecting the attachment control:
// Cut the attachment control and delete the form
// Then paste the attachment control directly into your app

// Fix common errors by setting these properties:
BorderColor: Black
Items: // Remove the reference to Parent.Default
Tooltip: ""
DisplayMode: DisplayMode.Edit

// Additional configurations to consider:
MaxAttachments: 10  // Set your desired maximum number of attachments
MaxAttachmentSize: 10  // Size in MB (up to 50MB per file)`;

  // Power Automate trigger code sample
  const flowTriggerCode = `// In Power Automate, use the Power Apps trigger (V2)
// Define two inputs in your Power Apps trigger:

// Input 1: File input
Type: File
Name: File  // The name you'll reference in your flow

// Input 2: Parent ID input
Type: Number
Name: ParentId  // To associate the file with your record`;

  // Create file in SharePoint code sample
  const createFileCode = `// After the trigger, add "Create file" action
// Select SharePoint and "Create file"

Site Address: https://yourtenant.sharepoint.com/sites/yoursite
Folder Path: /YourDocumentLibrary
File Content: @triggerBody()['file']['contentBytes']
File Name: @{triggerBody()['file']['name']}

// Then add "Update file properties" action
Site Address: https://yourtenant.sharepoint.com/sites/yoursite
Library Name: YourDocumentLibrary
Id: @outputs('Create_file')?['body/id']  // ID from previous action
ParentId: @{triggerBody()['ParentId']}

// Finally, add "Respond to PowerApps" action
// No response values needed`;

  // Power Apps code for saving files sample
  const powerAppsSaveCode = `// In your Save button's OnSelect property:
// First save your record and capture the ID
Set(
    RecId,
    Patch(
        YourDataSource,
        NewRecord,
        {
            Title: txtTitle.Text,
            Description: txtDescription.Text,
            Priority: rdoPriority.Selected.Value
        }
    ).ID  // Extract just the ID from the returned record
);

// Then loop through all attachments and save each one
ForAll(
    FileAttachments.Attachments,
    SaveFileToSharePoint.Run(
        RecId,  // Parent ID from the saved record
        {
            file: {
                contentBytes: Value,  // File content
                name: Name           // File name
            }
        }
    )
);

// Reset controls and navigate back
Reset(txtTitle);
Reset(txtDescription);
Reset(rdoPriority);
Reset(FileAttachments);
Navigate(Home, ScreenTransition.None);`;

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "File Attachments in Power Apps - The Best Way to Do Them",
  "image": "https://i.ytimg.com/vi/yC0W5am6M3Q/maxresdefault.jpg",
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
  "datePublished": "2025-04-10T09:00:00+10:00",
  "dateModified": "2025-04-10T09:00:00+10:00",
  "description": "Learn how to implement file attachments in Power Apps the right way. This guide shows you how to use the new Power Apps V2 trigger to upload files directly to SharePoint document libraries.",
  "mainEntityOfPage": {
    "@type": "WebPage",
    "@id": "https://www.powerplatformexperts.com.au/blog/file-attachments-in-power-apps"
  },
  "video": {
    "@type": "VideoObject",
    "name": "File Attachments in Power Apps - The best way to do them",
    "description": "In this video, Chino shows you how to upload files directly to a SharePoint Document Library using the new Power Apps V2 trigger. This method is the simplest way of doing this, and the files end up in a document library and not attached to a SharePoint list or some other blob storage which is ideal!",
    "thumbnailUrl": "https://i.ytimg.com/vi/yC0W5am6M3Q/maxresdefault.jpg",
    "uploadDate": "2025-04-10T09:00:00+10:00",
    "duration": "PT23M4S",
    "embedUrl": "https://www.youtube.com/embed/yC0W5am6M3Q?si=wlQ5FUzmmOka-J24",
    "contentUrl": "https://www.youtube.com/watch?v=yC0W5am6M3Q"
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
          <p>Reading time: 5min</p>
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
      <h1 className={styles.blogTitle}>File Attachments in Power Apps - The Best Way to Do Them</h1>
      
      <div className={styles.blogContent}>
        <h2>Introduction</h2>
        <p>
          If you've ever tried to implement file attachments in Power Apps, you know it can be surprisingly challenging. You would expect attaching files to be a straightforward process, but the traditional approaches often involve complex workarounds and multiple steps for users.
        </p>
        <p>
          The good news? Microsoft has significantly improved this process with a new action in Power Automate that makes uploading documents to SharePoint document libraries much simpler and more efficient. In this guide, I'll show you:
        </p>
        <ul>
          <li>How to add the file attachment control to your app</li>
          <li>How to set up a Power Automate flow to handle file uploads</li>
          <li>How to connect everything together for a seamless user experience</li>
          <li>How to upload multiple files at once</li>
        </ul>

        <h2>Prefer to Watch the Video?</h2>
        <p>Head over to my YouTube channel <a 
          href="https://www.youtube.com/@ChinoDoesStuff/featured" 
          rel="nofollow noreferrer noopener"
          >Chino Does Stuff</a> to watch the video tutorial, there you will see a variety of videos with loads of tricks and tips on the entire Power Platform suite.</p>
          
        <div className={styles.videoContainer}>
        <iframe className={styles.videoEmbed}  src="https://www.youtube.com/embed/yC0W5am6M3Q?si=wlQ5FUzmmOka-J24" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
        </div>
        
        <h2>Why This Approach is Better</h2>
        <p>
          Before diving into the implementation, let's understand why this method is superior to older approaches:
        </p>
        <ul>
          <li><strong>Simpler Implementation:</strong> No need for complex Base64 encoding or JSON manipulation</li>
          <li><strong>Multiple File Support:</strong> Easily handle multiple attachments in a single save operation</li>
          <li><strong>Better User Experience:</strong> Users can attach all files and save the record in one step</li>
          <li><strong>Document Library Storage:</strong> Files are saved to a SharePoint document library instead of list attachments, providing better management options</li>
          <li><strong>Relationship Preservation:</strong> Maintains the relationship between files and records</li>
        </ul>
        
        <h2>Step 1: Add the File Attachment Control</h2>
        <p>
          One quirk of Power Apps is that the file attachment control isn't directly available in the insert menu. Here's how to add it to your app:
        </p>
        <ol>
          <li>Insert a Form control onto your screen</li>
          <li>Connect the form to any SharePoint list (it doesn't matter which one)</li>
          <li>Find the attachment control in the form</li>
          <li>Cut the attachment control (not the entire data card, just the control)</li>
          <li>Delete the form</li>
          <li>Paste the attachment control directly onto your screen</li>
        </ol>
        <p>
          After pasting, you'll need to fix some errors in the control:
        </p>
        
        <CodeBlock code={attachmentControlCode} language="power apps" />
        
        <p>
          The MaxAttachments and MaxAttachmentSize properties are particularly important to configure based on your requirements.
        </p>
        
        <h2>Step 2: Create the Power Automate Flow</h2>
        <p>
          Next, we'll create a flow that receives files from Power Apps and saves them to a SharePoint document library:
        </p>
        
        <h3>Set Up the Document Library</h3>
        <p>
          In SharePoint, create a document library to store your attachments. Add a Number column called "ParentId" - this will store the ID of the related record from your list.
        </p>
        
        <h3>Create the Flow</h3>
        <p>
          In Power Automate, create a new automated flow with these steps:
        </p>
        <ol>
          <li>
            <strong>Trigger:</strong> Use the "Power Apps (V2)" trigger - this is crucial as it supports direct file inputs
          </li>
        </ol>
        
        <CodeBlock code={flowTriggerCode} language="power apps" />
        
        <ol start="2">
          <li><strong>Create File in SharePoint:</strong> This action saves the file to your document library</li>
          <li><strong>Update File Properties:</strong> This sets the ParentId property to associate the file with your record</li>
          <li><strong>Respond to Power Apps:</strong> This completes the flow and returns control to your app</li>
        </ol>
        
        <CodeBlock code={createFileCode} language="power apps" />
        
        <p>
          Save your flow with a descriptive name like "Save File to SharePoint".
        </p>
        
        <h2>Step 3: Connect Power Apps to Your Flow</h2>
        <p>
          Now, we need to modify our app's save button to handle both the record creation and file uploads:
        </p>
        
        <CodeBlock code={powerAppsSaveCode} language="javascript" />
        
        <p>
          Let's break down what's happening here:
        </p>
        <ol>
          <li>First, we save our record to the data source using Patch()</li>
          <li>We capture the ID of the newly created record in a variable (RecId)</li>
          <li>We use ForAll() to loop through each attachment in the FileAttachments control</li>
          <li>For each attachment, we call our flow, passing both the record ID and the file details</li>
          <li>Finally, we reset our form controls and navigate back to the home screen</li>
        </ol>
        
        <h2>How It All Works Together</h2>
        <p>
          When a user fills out your form and attaches files:
        </p>
        <ol>
          <li>They click the Save button</li>
          <li>The app saves the record data to your SharePoint list</li>
          <li>The app gets back the record ID</li>
          <li>For each attached file, the app calls your flow</li>
          <li>The flow saves each file to the document library and sets the ParentId property</li>
          <li>The files are now linked to your record by the ParentId</li>
        </ol>
        <p>
          This entire process happens seamlessly, and the user only needs to click Save once.
        </p>
        
        <h2>Viewing Attached Files</h2>
        <p>
          To display files associated with a record, you'll need to:
        </p>
        <ol>
          <li>Create a gallery control on your view screen</li>
          <li>Connect it to your document library</li>
          <li>Filter the gallery to show only files where ParentId matches your current record's ID</li>
          <li>Add an icon or button to open each file</li>
        </ol>
        <p>
          The formula for the gallery's Items property would be something like:
        </p>
        <pre><code>Filter(YourDocumentLibrary, ParentId = CurrentRecord.ID)</code></pre>
        
        <h2>Best Practices and Considerations</h2>
        <p>
          When implementing file attachments in Power Apps:
        </p>
        <ul>
          <li><strong>Handle Large Files:</strong> Be aware of SharePoint's file size limits and set MaxAttachmentSize accordingly</li>
          <li><strong>Add Progress Indicators:</strong> For better user experience, add a loading spinner during file uploads</li>
          <li><strong>Error Handling:</strong> Consider adding error handling to deal with upload failures</li>
          <li><strong>File Types:</strong> You can filter allowed file types through the attachment control's properties</li>
          <li><strong>Security:</strong> Ensure users have appropriate permissions to the SharePoint document library</li>
        </ul>
        
        <h2>Advanced Customisations</h2>
        <p>
          This approach can be extended in several ways:
        </p>
        <ul>
          <li>Add file type validation in your flow</li>
          <li>Create custom thumbnails for different file types</li>
          <li>Implement version control for updated files</li>
          <li>Add the ability to delete attachments</li>
          <li>Create a preview capability for common file types</li>
        </ul>
        
        <h2>Conclusion</h2>
        <p>
          With Microsoft's improved Power Apps V2 trigger in Power Automate, handling file attachments in Power Apps has become significantly easier. This approach provides a clean, user-friendly way to upload files to SharePoint and maintain their relationship with your app's data.
        </p>
        <p>
          By using a document library instead of list attachments, you gain all the benefits of SharePoint's document management capabilities while providing a seamless experience for your users.
        </p>
        <p>
          This method eliminates much of the complexity that was previously required for file uploads in Power Apps, making your apps more maintainable and user-friendly.
        </p>
        
        <p>
          If you'd like to see more Power Apps development tips and techniques, please head over to the <a 
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

export default PowerAppsFileAttachmentsBlogPost;