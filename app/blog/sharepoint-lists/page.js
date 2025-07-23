import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

import CodeBlock from '../../../components/CodeBlock';
import Contact from '../../../components/Contact';

import styles from '../../../styles/blogPost.module.scss';

import marcello from '../../../public/team/marcello.webp';

const SharePointRelationalDatabaseBlogPost = () => {
  // SharePoint list creation code sample
  const createListsCode = `// In SharePoint, create two lists:

// 1. Issues List
Title: Text (default)
Description: Multiple lines of text

// 2. Actions List  
Title: Text (default)
Description: Multiple lines of text
IssueId: Number (crucial for the relationship)

// The SharePoint ID column is automatically created
// and will be our primary key`;

  // Power Apps data connection code
  const dataConnectionCode = `// Connect to SharePoint lists in Power Apps

// Add data source
Add SharePoint connection
Site: https://yourtenant.sharepoint.com/sites/yoursite
Select both lists: Issues and Actions

// If you add new columns to your SharePoint lists later,
// remember to refresh your data connection:
DataSources.Refresh(Actions)`;

  // Parent-child filtering code
  const filteringCode = `// Display only related records in a gallery

// In a gallery showing Actions related to the current Issue:
Filter(
    Actions,
    IssueId = Gallery_Issues.Selected.ID
)

// Sort the results by ID (descending to show newest first)
Sort(
    Filter(
        Actions,
        IssueId = Gallery_Issues.Selected.ID
    ),
    ID,
    Descending
)`;

  // Saving related records code
  const savingChildRecordsCode = `// When saving a new Action related to an Issue:
Patch(
    Actions,
    Defaults(Actions),
    {
        Title: txtActionTitle.Text,
        Description: txtActionDescription.Text,
        IssueId: Gallery_Issues.Selected.ID  // This creates the relationship
    }
);

// After saving, navigate back to the parent record detail screen
Navigate(ViewIssueScreen, ScreenTransition.Cover)`;

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Use SharePoint Lists just like a Relational Database in Power Apps",
  "image": "https://i.ytimg.com/vi/Bea5aP-OpZg?si=PSVPw5o7augLSbfB/maxresdefault.jpg",
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
  "description": "In this tutorial, Marcello gives you a quick introduction into how to use SharePoint lists as a data source in Power Apps and how they may work as a Relational Database.",
  "mainEntityOfPage": {
    "@type": "WebPage",
    "@id": "https://www.powerplatformexperts.com.au/blog/sharepoint-lists"
  },
  "video": {
    "@type": "VideoObject",
    "name": "Use SharePoint Lists just like a Relational Database in Power Apps",
    "description": "In this video, Chino gives you a quick introduction into how to use SharePoint lists as a data source in Power Apps and how they may work as a Relational Database.",
    "thumbnailUrl": "https://i.ytimg.com/vi/Bea5aP-OpZg?si=PSVPw5o7augLSbfB/maxresdefault.jpg",
    "uploadDate": "2025-04-10T09:00:00+10:00",
"duration": "PT33M38S",
    "embedUrl": "https://www.youtube.com/embed/Bea5aP-OpZg?si=PSVPw5o7augLSbfB",
    "contentUrl": "https://www.youtube.com/watch?v=Bea5aP-OpZg"
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
      <h1 className={styles.blogTitle}>Use SharePoint Lists Just Like a Relational Database in Power Apps</h1>
      
      <div className={styles.blogContent}>
        <h2>Introduction</h2>
        <p>
          While SharePoint lists aren't technically relational databases, with the right approach, you can implement parent-child relationships and create connected data structures that work remarkably well in Power Apps. This capability lets you build more sophisticated apps without needing SQL Server or Dataverse licenses.
        </p>
        <p>
          In this guide, I'll show you how to structure, connect, and manage related data across SharePoint lists. We'll build a simple but practical example: an issue tracking system where each issue can have multiple related actions.
        </p>

        <h2>Prefer to Watch the Video?</h2>
        <p>Head over to my YouTube channel <a 
          href="https://www.youtube.com/@ChinoDoesStuff/featured" 
          rel="nofollow noreferrer noopener"
          >Chino Does Stuff</a> to watch the video tutorial, there you will see a variety of videos with loads of tricks and tips on the entire Power Platform suite.</p>
          
                  <div className={styles.videoContainer}>
        <iframe className={styles.videoEmbed}  src="https://www.youtube.com/embed/Bea5aP-OpZg?si=PSVPw5o7augLSbfB" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
        </div>
        
        <h2>Understanding the Approach</h2>
        <p>
          To create relationships between SharePoint lists, we'll use a classic database technique: adding a foreign key column that references the primary key of another table. In SharePoint terms:
        </p>
        <ul>
          <li>The automatically generated ID column in SharePoint lists serves as our primary key</li>
          <li>We'll add a custom number column in the "child" list to store the ID of the related "parent" record</li>
          <li>In Power Apps, we'll use this relationship to filter and create related records</li>
        </ul>
        <p>
          This creates a one-to-many relationship, where one record in the parent list can relate to many records in the child list.
        </p>
        
        <h2>Step 1: Setting Up the SharePoint Lists</h2>
        <p>
          We'll start by creating two SharePoint lists to store our data:
        </p>
        <ol>
          <li><strong>Issues List</strong>: The parent list that stores the main issues</li>
          <li><strong>Actions List</strong>: The child list that stores actions related to each issue</li>
        </ol>
        <p>
          Here's how to structure each list:
        </p>
        
        <CodeBlock code={createListsCode} language="SharePoint" />
        
        <p>
          The key to our implementation is the <strong>IssueId</strong> column in the Actions list. This number column will store the ID of the related issue, creating our parent-child relationship.
        </p>
        
        <h3>Important Notes About SharePoint IDs</h3>
        <p>
          SharePoint automatically creates an ID column for every list:
        </p>
        <ul>
          <li>IDs are unique within each list and increment automatically</li>
          <li>The ID column isn't shown in the default view, but you can add it</li>
          <li>IDs are not reused, even after items are deleted (similar to database identity columns)</li>
          <li>IDs are always of type Number, making them efficient for filtering and relationships</li>
        </ul>
        
        <h2>Step 2: Connecting to SharePoint in Power Apps</h2>
        <p>
          Now, let's create a Power App and connect it to our SharePoint lists:
        </p>
        
        <CodeBlock code={dataConnectionCode} language="SharePoint" />
        
        <p>
          After connecting, you'll have access to both the Issues and Actions lists within your app, including all their columns.
        </p>
        
        <h2>Step 3: Building the Basic App Structure</h2>
        <p>
          Our app will need several screens:
        </p>
        <ol>
          <li><strong>Main Screen</strong>: Shows a gallery of Issues</li>
          <li><strong>New Issue Screen</strong>: Form to create a new Issue</li>
          <li><strong>View Issue Screen</strong>: Shows Issue details and related Actions</li>
          <li><strong>New Action Screen</strong>: Form to create a new Action related to the current Issue</li>
        </ol>
        <p>
          For the main screen, create a gallery connected to the Issues list. Add a plus button to navigate to the New Issue screen, and an edit icon in each item to navigate to the View Issue screen.
        </p>
        
        <h3>Main Screen Example</h3>
        <p>
          On your main screen:
        </p>
        <ol>
          <li>Add a gallery connected to the Issues list (Gallery_Issues)</li>
          <li>Display the Title and ID in each gallery item</li>
          <li>Add a button that navigates to the New Issue screen</li>
          <li>Add an icon in each gallery item that navigates to the View Issue screen and selects the current item</li>
        </ol>
        
        <h2>Step 4: Creating the Issue Detail Screen</h2>
        <p>
          The Issue detail screen is where the parent-child relationship becomes visible. This screen should show:
        </p>
        <ol>
          <li>The details of the selected Issue</li>
          <li>A gallery of related Actions</li>
          <li>A button to add a new Action for this Issue</li>
        </ol>
        <p>
          The key is filtering the Actions gallery to show only Actions related to the current Issue:
        </p>
        
        <CodeBlock code={filteringCode} language="SharePoint" />
        
        <p>
          This filter checks the IssueId column in the Actions list and only shows records where it matches the ID of the currently selected Issue.
        </p>
        
        <h2>Step 5: Creating Related Records</h2>
        <p>
          When creating a new Action, we need to save both the Action details and its relationship to the parent Issue:
        </p>
        
        <CodeBlock code={savingChildRecordsCode} language="SharePoint" />
        
        <p>
          This Patch function saves a new record to the Actions list and sets the IssueId field to the ID of the currently selected Issue, creating the relationship between them.
        </p>
        
        <h2>Advanced Techniques</h2>
        
        <h3>Delegation Considerations</h3>
        <p>
          When working with SharePoint lists in Power Apps, delegation is an important concept to understand. Delegation determines whether operations happen at the data source or in the app.
        </p>
        <p>
          The good news is that filtering by ID and IssueId (both number fields) is fully delegable to SharePoint, meaning SharePoint will handle the filtering server-side. This ensures you'll get correct results even with large lists.
        </p>
        <p>
          For best performance:
        </p>
        <ul>
          <li>Always filter using delegable operations when possible (=, &lt;, &gt;)</li>
          <li>Use number fields for relationships as they're fully delegable</li>
          <li>Consider using the Sort function to organize your data (also delegable)</li>
        </ul>
        
        <h3>Creating One-to-Many-to-Many Relationships</h3>
        <p>
          You can extend this pattern to create deeper relationships. For example, you could add a Comments list related to Actions, where each Action can have multiple Comments.
        </p>
        <p>
          To implement this, you would:
        </p>
        <ol>
          <li>Create a Comments list with an ActionId column</li>
          <li>Filter the Comments gallery based on the selected Action</li>
          <li>When saving a Comment, set its ActionId to the selected Action's ID</li>
        </ol>
        
        <h3>Cascading Deletes</h3>
        <p>
          Unlike true relational databases, SharePoint doesn't support automatic cascading deletes. If you delete a parent record, the related child records will remain orphaned.
        </p>
        <p>
          If cascading deletes are important for your app, you'll need to implement them manually:
        </p>
        <ol>
          <li>Before deleting a parent record, find all related child records</li>
          <li>Delete the child records using Remove() or ForAll() with Remove()</li>
          <li>Then delete the parent record</li>
        </ol>
        
        <h2>Real-World Application</h2>
        <p>
          This pattern can be applied to many real-world scenarios:
        </p>
        <ul>
          <li><strong>Project Management</strong>: Projects and Tasks</li>
          <li><strong>Customer Service</strong>: Cases and Notes</li>
          <li><strong>Inventory Management</strong>: Products and Stock Levels</li>
          <li><strong>Event Planning</strong>: Events and Attendees</li>
          <li><strong>HR Processes</strong>: Employees and Training Records</li>
        </ul>
        <p>
          The pattern remains the same: create a column in the child list that references the ID of the parent record, then use filtering in Power Apps to show only the related records.
        </p>
        
        <h2>Limitations and Considerations</h2>
        <p>
          While this approach works well for many scenarios, it does have some limitations compared to true relational databases:
        </p>
        <ul>
          <li>No referential integrity (orphaned records possible)</li>
          <li>No cascading operations (must be implemented manually)</li>
          <li>No joins (relationships must be managed through filtering)</li>
          <li>Performance can degrade with very large lists (&gt;5000 items)</li>
          <li>Complex queries across multiple relationships may hit delegation limits</li>
        </ul>
        <p>
          For complex enterprise applications with many relationships and large data volumes, you might want to consider Dataverse or a SQL Server database instead.
        </p>
        
        <h2>Conclusion</h2>
        <p>
          SharePoint lists can indeed be used effectively as a relational database for Power Apps. By creating linked lists with appropriate columns to establish relationships, you can build sophisticated multi-table applications without needing additional licenses or more complex database platforms.
        </p>
        <p>
          This approach is perfect for departmental apps, team tools, and solutions where simplicity and accessibility are priorities. The ability to create, view, and manage related records gives your users a cohesive experience while leveraging the familiar and accessible SharePoint environment.
        </p>
        <p>
          With these techniques, you can build powerful, data-driven applications that feel like they're connected to a full relational database, all while staying within the SharePoint and Power Apps ecosystem.
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

export default SharePointRelationalDatabaseBlogPost;