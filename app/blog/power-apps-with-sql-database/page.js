import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

import CodeBlock from '../../../components/CodeBlock';
import Contact from '../../../components/Contact';

import styles from '../../../styles/blogPost.module.scss';

import marcello from '../../../public/team/marcello.webp';

const PowerAppsSQLBlogPost = () => {
  // Azure setup code sample
  const azureSetupCode = `// Azure SQL Server Configuration
// 1. Create SQL Server
Server name: your-server-name.database.windows.net
Server admin login: YourAdminUsername
Password: YourSecurePassword

// 2. Configure Firewall
- Set "Allow Azure services and resources to access this server" to YES
- Add your client IP address for local development`;

  // SQL table creation code sample
  const sqlTableCreationCode = `-- Create Stock Table
CREATE TABLE Stock (
    ID int IDENTITY(1,1) PRIMARY KEY,
    Name varchar(100) NOT NULL,
    Description varchar(255),
    StockLevel int
);

-- Create Orders Table
CREATE TABLE Orders (
    ID int IDENTITY(1,1) PRIMARY KEY,
    StockID int,
    OrderDate datetime,
    Amount int,
    Description varchar(255)
);`;

  // Insert sample data code
  const insertDataCode = `-- Insert sample stock items
INSERT INTO Stock (Name, Description, StockLevel)
VALUES 
    ('Resistor', '10K Ohm Resistor', 50),
    ('Capacitor', '10uF Electrolytic Capacitor', 30),
    ('Diode', '1N4007 Diode', 25);

-- Insert sample orders
INSERT INTO Orders (StockID, OrderDate, Amount, Description)
VALUES 
    (1, GETDATE(), 20, 'Monthly resistor order'),
    (2, GETDATE(), 15, 'Low stock capacitor order'),
    (3, GETDATE(), 30, 'Diode replacement order'),
    (1, DATEADD(day, -7, GETDATE()), 25, 'Emergency resistor order');`;

  // Stored procedure code
  const storedProcedureCode = `CREATE PROCEDURE GetOrders
AS
BEGIN
    SELECT 
        t2.Name AS StockName, 
        t2.Description AS StockDescription,
        t1.Amount AS OrderedAmount, 
        t1.Description AS OrderDescription,
        t1.OrderDate AS OrderDate
    FROM Orders t1
    JOIN Stock t2 ON t1.StockID = t2.ID
END`;

  // Power Automate Flow steps
  const powerAutomateStepsCode = `// Power Automate Flow Steps:

1. Trigger: PowerApps
   - Initialize flow from Power Apps

2. Execute Stored Procedure
   - Server name: your-server-name.database.windows.net
   - Database name: YourDatabaseName
   - Procedure name: GetOrders

3. Parse JSON
   - Content: Body from Execute Stored Procedure step
   - Schema: (Use the output schema from a test run)

4. Respond to PowerApps
   - Return the parsed JSON result to Power Apps`;

  // Power Apps gallery setup
  const powerAppsGalleryCode = `// Power Apps Gallery Setup

// 1. Create a variable to store SQL data
Set(
    SQLOrderData,
    PowerAutomateFlow.Run('GetOrders').ResultSet.Table1
);

// 2. Set Gallery.Items property
Gallery1.Items = SQLOrderData;

// 3. In gallery controls, use ThisItem properties:
// - ThisItem.StockName
// - ThisItem.StockDescription
// - ThisItem.OrderedAmount
// - ThisItem.OrderDescription
// - ThisItem.OrderDate`;

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Use SharePoint Lists Just Like a Relational Database in Power Apps",
  "image": "https://i.ytimg.com/vi/Bea5aP-OpZg/maxresdefault.jpg",
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
  "datePublished": "2025-04-12T09:00:00+10:00",
  "dateModified": "2025-04-12T09:00:00+10:00",
  "description": "Learn how to use SharePoint lists as a relational database in Power Apps. This guide shows you how to implement parent-child relationships and create connected data structures without needing SQL Server or Dataverse licenses.",
  "mainEntityOfPage": {
    "@type": "WebPage",
    "@id": "https://www.powerplatformexperts.com.au/blog/sharepoint-lists"
  },
  "video": {
    "@type": "VideoObject",
    "name": "Use SharePoint Lists just like a Relational Database in Power Apps",
    "description": "In this video, Chino gives you a quick introduction into how to use SharePoint lists as a data source in Power Apps and how they may work as a Relational Database.",
    "thumbnailUrl": "https://i.ytimg.com/vi/Bea5aP-OpZg/maxresdefault.jpg",
    "uploadDate": "2025-04-12T09:00:00+10:00",
    "duration": "PT41M4S",
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
          <p>Reading time: 8min</p>
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
      <h1 className={styles.blogTitle}>Getting Started with Power Apps and Microsoft SQL Database</h1>
      
      <div className={styles.blogContent}>
        <h2>Introduction</h2>
        <p>
          Just as our prehistoric ancestors evolved by adopting tools like fire and stone axes, your journey as a Power Apps developer must also evolve. As your experience grows, you'll need to reach further and build more complex applications. One of the most significant milestones in this evolution is moving beyond SharePoint lists and connecting your apps to enterprise-level storage solutions like Microsoft SQL Server.
        </p>
        <p>
          In this guide, I'll walk you through the process of:
        </p>
        <ul>
          <li>Setting up an Azure SQL database</li>
          <li>Creating tables and relationships</li>
          <li>Connecting Power Apps to SQL using stored procedures and Power Automate</li>
          <li>Building a simple inventory and order management application</li>
        </ul>
        <p>
          Let's take our first steps into this bigger world of enterprise-level data management!
        </p>

        <h2>Prefer to Watch the Video?</h2>
        <p>Head over to my YouTube channel <a 
          href="https://www.youtube.com/@ChinoDoesStuff/featured" 
          rel="nofollow noreferrer noopener"
          >Chino Does Stuff</a> to watch the video tutorial, there you will see a variety of videos with loads of tricks and tips on the entire Power Platform suite.</p>
        <div className={styles.videoContainer}>
        <iframe className={styles.videoEmbed}  src="https://www.youtube.com/embed/awsNLPGNI4w?si=hn-0Ak_weB4vWeBT" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
        </div>
        
        <h2>Setting Up Your Azure SQL Database</h2>
        <p>
          The first step is to set up an Azure SQL database. If you're new to Azure, you can sign up for a free trial which gives you plenty of credits to explore the platform.
        </p>
        
        <h3>Creating a SQL Server and Database</h3>
        <p>
          In the Azure Portal:
        </p>
        <ol>
          <li>Search for "SQL databases" and click "Add"</li>
          <li>Select or create a resource group</li>
          <li>Give your database a name (e.g., "ChinoDB")</li>
          <li>Create a new SQL server (e.g., "ChinoDBSRV")</li>
          <li>Set up server admin credentials</li>
          <li>Take the default options for other settings and click "Create"</li>
        </ol>
        
        <h3>Configuring Server Firewall Rules</h3>
        <p>
          Once your server and database are created, you need to configure the firewall:
        </p>
        <ol>
          <li>Navigate to your SQL server in the Azure Portal</li>
          <li>Click on "Networking" under "Security"</li>
          <li>Set "Allow Azure services and resources to access this server" to "Yes"</li>
          <li>Add your client IP address so you can connect from your desktop</li>
        </ol>
        
        <CodeBlock code={azureSetupCode} language="Azure Portal" />
        
        <p>
          This firewall configuration is crucial as it allows Power Apps and Power Automate to connect to your database, while also letting you manage the database from your local computer.
        </p>
        
        <h2>Creating Your Database Structure</h2>
        <p>
          For this tutorial, we'll create a simple inventory management system with two tables: a Stock table for inventory items and an Orders table for tracking restock orders.
        </p>
        
        <h3>Connecting to Your Database</h3>
        <p>
          To manage your database, you'll need SQL Server Management Studio (SSMS):
        </p>
        <ol>
          <li>Download and install SQL Server Management Studio</li>
          <li>Connect to your database using the server name, admin username, and password</li>
        </ol>
        
        <h3>Creating Tables</h3>
        <p>
          We'll create two tables with a simple relationship:
        </p>
        
        <CodeBlock code={sqlTableCreationCode} language="sql" />
        
        <p>
          Let's break down what we've done:
        </p>
        <ul>
          <li><strong>Stock Table:</strong> Stores inventory items with a name, description, and current stock level</li>
          <li><strong>Orders Table:</strong> Tracks order history with references to stock items</li>
          <li><strong>Relationships:</strong> The StockID in Orders refers to the ID in Stock, creating a one-to-many relationship</li>
        </ul>
        
        <h3>Populating Sample Data</h3>
        <p>
          To make testing easier, let's add some sample data to our tables:
        </p>
        
        <CodeBlock code={insertDataCode} language="sql" />
        
        <h3>Creating a Stored Procedure</h3>
        <p>
          Here's where things get interesting. Power Apps can't directly query multiple related SQL tables efficiently, so we'll create a stored procedure that joins the data for us:
        </p>
        
        <CodeBlock code={storedProcedureCode} language="sql" />
        
        <p>
          This stored procedure joins the Orders and Stock tables, giving us a flattened view that's perfect for displaying in Power Apps.
        </p>
        
        <h2>Connecting Power Apps to SQL Using Power Automate</h2>
        <p>
          Currently, Power Apps can't directly call SQL stored procedures. Instead, we'll use Power Automate as a bridge between our app and database.
        </p>
        
        <h3>Creating a Power Automate Flow</h3>
        <p>
          Here's how to set up the flow:
        </p>
        <ol>
          <li>Create a new instant flow with the PowerApps trigger</li>
          <li>Add an "Execute stored procedure" action from the SQL Server connector</li>
          <li>Configure it to connect to your database and call the "GetOrders" procedure</li>
          <li>Add a "Parse JSON" action to format the response</li>
          <li>Add a "Respond to PowerApps" action to return the data</li>
        </ol>
        
        <CodeBlock code={powerAutomateStepsCode} language="portal" />
        
        <p>
          The key here is the "Parse JSON" step. When you execute the flow for the first time, you can copy the JSON output from the stored procedure execution and use it to generate the schema automatically.
        </p>
        
        <h2>Building Your Power App</h2>
        <p>
          With the database and flow set up, we can now build our Power App:
        </p>
        
        <h3>Create a New Canvas App</h3>
        <ol>
          <li>Create a blank canvas app</li>
          <li>Add a gallery control</li>
          <li>Add a button to refresh data from SQL</li>
        </ol>
        
        <h3>Setting Up Data Retrieval</h3>
        <p>
          Configure the button to call your flow and store the results:
        </p>
        
        <CodeBlock code={powerAppsGalleryCode} language="portal" />
        
        <h3>Displaying the Data</h3>
        <p>
          In your gallery, add labels to display the data:
        </p>
        <ol>
          <li>Add a label for the stock name</li>
          <li>Add a label for the order description</li>
          <li>Add a label for the order amount</li>
          <li>Add a date picker (in view mode) for the order date</li>
        </ol>
        
        <h2>Beyond the Basics: Creating a Complete Application</h2>
        <p>
          While we've covered the fundamentals of connecting Power Apps to SQL, a complete application would include:
        </p>
        <ul>
          <li><strong>Create/Edit Forms:</strong> Screens to add and update stock items and orders</li>
          <li><strong>Data Validation:</strong> Ensuring data integrity before saving to SQL</li>
          <li><strong>Automatic Reordering:</strong> Triggering orders when stock levels fall below thresholds</li>
          <li><strong>User Authentication:</strong> Ensuring only authorised users can access certain functions</li>
        </ul>
        
        <h2>Key Takeaways for Working with SQL in Power Apps</h2>
        <p>
          As you continue to develop with SQL and Power Apps, remember these important points:
        </p>
        <ol>
          <li><strong>Use Stored Procedures:</strong> They're the key to working effectively with SQL, especially with related tables</li>
          <li><strong>Power Automate is Your Bridge:</strong> Use it to connect Power Apps with SQL stored procedures</li>
          <li><strong>Secure Your Database:</strong> Create specific database users for your apps rather than using admin credentials</li>
          <li><strong>Plan Your Data Model:</strong> A well-designed database schema makes app development much easier</li>
          <li><strong>Learn SQL Basics:</strong> Understanding SQL queries and joins will dramatically expand what you can do with Power Apps</li>
        </ol>
        
        <h2>Conclusion</h2>
        <p>
          Moving from SharePoint lists to SQL databases is a significant evolution in your Power Apps journey. While there's certainly a learning curve, the benefits are substantial:
        </p>
        <ul>
          <li>More sophisticated data relationships</li>
          <li>Better performance with large datasets</li>
          <li>Advanced data validation and business logic at the database level</li>
          <li>Enterprise-grade security and scalability</li>
        </ul>
        <p>
          This tutorial covered the core functionality of using SQL with Power Apps, but there's much more to explore. In future tutorials, we'll build on this foundation to create more complete applications with full CRUD (Create, Read, Update, Delete) capabilities.
        </p>
        
        <p>
          If you'd like to see more Power Apps development tutorials using SQL, please head over to the <a 
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

export default PowerAppsSQLBlogPost;