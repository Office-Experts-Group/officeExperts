import React from "react";

const schema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://www.officeexperts.com.au/privacy-policy/",
      url: "https://www.officeexperts.com.au/privacy-policy/",
      name: "Office Experts Group's Term and Conditions | Office Experts Group",
      isPartOf: {
        "@id": "https://www.officeexperts.com.au/#website",
      },
      about: {
        "@id": "https://www.officeexperts.com.au/#organization",
      },
      datePublished: "2024-10-27T00:00:00+00:00",
      dateModified: "2024-10-27T00:00:00+00:00",
      breadcrumb: {
        "@id": "https://www.officeexperts.com.au/privacy-policy/#breadcrumb",
      },
      inLanguage: "en-AU",
      potentialAction: [
        {
          "@type": "ReadAction",
          target: ["https://www.officeexperts.com.au/privacy-policy/"],
        },
      ],
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://www.officeexperts.com.au/privacy-policy/#breadcrumb",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: "https://www.officeexperts.com.au/",
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Privacy Policy",
        },
      ],
    },
    {
      "@type": "WebSite",
      "@id": "https://www.officeexperts.com.au/#website",
      url: "https://www.officeexperts.com.au/",
      name: "Office Experts Group: Microsoft Excel Experts, Microsoft Access Database Experts, Microsoft Word Experts, PowerPoint Experts, Azure, Power BI, SQL Server, SharePoint, Microsoft Office 365",
      description:
        "Your Microsoft Office Design, Development and Consulting Experts",
      publisher: {
        "@id": "https://www.officeexperts.com.au/#organization",
      },
      potentialAction: [
        {
          "@type": "SearchAction",
          target: {
            "@type": "EntryPoint",
            urlTemplate:
              "https://www.officeexperts.com.au/?s={search_term_string}",
          },
          "query-input": {
            "@type": "PropertyValueSpecification",
            valueRequired: true,
            valueName: "search_term_string",
          },
        },
      ],
      inLanguage: "en-AU",
    },
    {
      "@type": "Organization",
      "@id": "https://www.officeexperts.com.au/#organization",
      name: "Office Experts Group",
      url: "https://www.officeexperts.com.au/",
      telephone: "1300 10 28 10",
      email: "consult@officeexperts.com.au",
      contactPoint: [
        {
          "@type": "ContactPoint",
          telephone: "1300 10 28 10",
          contactType: "customer service",
          email: "consult@officeexperts.com.au",
          availableLanguage: ["en", "en-AU"],
        },
      ],
      areaServed: [
        {
          "@type": "Country",
          name: "Australia",
        },
        {
          "@type": "AdministrativeArea",
          name: "New South Wales",
        },
        {
          "@type": "AdministrativeArea",
          name: "Victoria",
        },
        {
          "@type": "AdministrativeArea",
          name: "Queensland",
        },
        {
          "@type": "AdministrativeArea",
          name: "Western Australia",
        },
        {
          "@type": "AdministrativeArea",
          name: "South Australia",
        },
        {
          "@type": "AdministrativeArea",
          name: "Tasmania",
        },
        {
          "@type": "AdministrativeArea",
          name: "Australian Capital Territory",
        },
        {
          "@type": "AdministrativeArea",
          name: "Northern Territory",
        },
      ],
      logo: {
        "@type": "ImageObject",
        inLanguage: "en-AU",
        "@id": "https://www.officeexperts.com.au/#/schema/logo/image/",
        url: "/logo.png",
        contentUrl: "/logo.png",
        width: 1181,
        height: 1181,
        caption: "Office Experts Group",
      },
      image: {
        "@id": "https://www.officeexperts.com.au/#/schema/logo/image/",
      },
      sameAs: [
        "https://www.facebook.com/MSOfficeExperts",
        "https://x.com/OfficeExpertsG1",
        "https://www.instagram.com/officeexpertsgroup",
        "https://www.linkedin.com/company/office-experts-group",
        "https://www.youtube.com/channel/UCw2Xf02ukEwvM6fQ2lVZxuw",
      ],
    },
  ],
};

const Page = () => {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <main>
        <h1>Privacy Policy</h1>
        <p>
          This privacy policy (Policy) describes how Brayalei Pty Ltd, ABN 32
          093 067 737 trading as Office Experts Group (Office Experts) manages
          personal information.
        </p>
        <p>
          This policy has been formulated in accordance with the Australian
          Privacy Principles (APPs) set out in the Privacy Act 1988 (Cth)
          (Privacy Act). The APPs regulate the handling of personal information
          including its collection, handling, use, disclosure, and storage.
        </p>
        <p>
          A copy of this Policy is available upon request by contacting us at
          the details set out at paragraph 5 below.
        </p>

        <h2>1. GENERAL SCOPE OF PRIVACY POLICY</h2>
        <p>
          This Policy applies to any customer, user, or other person (the User,
          Users, or You) who:
        </p>
        <ul>
          <li>(a) accesses any of the Office Experts websites (Sites); and</li>
          <li>
            (b) accesses or utilizes any Office Experts product, service,
            feature, user-generated, and other Office Experts generated content
            and interactive and informational resources (collectively, the
            Services).
          </li>
        </ul>
        <p>
          In addition, this Policy applies only to personal information (as
          defined in paragraph 2) and location information that a User discloses
          or transmits to Office Experts via the Sites or that is collected by
          Office Experts in the course of the provision of the Services.
        </p>

        <h2>2. WHAT IS PERSONAL INFORMATION?</h2>
        <p>
          Personal information means information or an opinion about an
          identified individual, or an individual who is reasonably
          identifiable, whether true or not and whether recorded in a material
          form or not (Personal Information). Office Experts will collect and
          use certain Personal Information about you during the course of your
          relationship with Office Experts. This Policy explains how we may
          collect, use and disclose this information.
        </p>

        <h2>3. YOUR CONSENT TO THE TERMS OF THIS PRIVACY POLICY</h2>
        <p>
          By providing us with Personal Information or through your use of our
          Site or by retaining us to provide the Services, you agree with the
          terms of this Policy. Whenever you submit Personal Information to us,
          you consent to the collection, handling, use, disclosure, and storage
          of that personal information in accordance with this Policy and the
          Privacy Act (including the APPs). If a User does not consent to the
          collection, use, and disclosure of his or her Personal Information or
          location as described in this Policy, he or she is not permitted to
          use the Site and Office Experts will not be able to provide Services
          to that person.
        </p>

        <h2>4. OFFICE EXPERTS CONSENT PROTOCOL</h2>
        <p>
          Office Experts processes Personal Information on our servers in
          Australia. In some cases, we process Personal Information on a server
          outside of a given User's country. In particular, Office Experts may
          rely on servers located offshore. Consequently, you should be aware
          that your personal information may be disclosed to overseas
          recipients. In addition, we may process some Personal Information
          offshore to provide our own Services, and/or on behalf of and
          according to the instructions of a third party, such as an advertising
          partner.
        </p>

        <h2>5. INCORPORATION INTO TERMS AND CONDITIONS OF USE</h2>
        <p>
          This Policy is incorporated into, and is subject to, the Office
          Experts' Terms and Conditions which each Customer of Office Experts is
          bound by. A User's use of the Services and his or her provision of any
          Personal Information or location information to Office Experts are
          subject to the terms of this Policy and terms under which you have
          engaged with Office Experts.
        </p>
        <p>
          If a User has any questions about this Policy, he or she may contact
          us by email at{" "}
          <a href="mailto:consult@officeexperts.com.au">
            consult@officeexperts.com.au
          </a>{" "}
          or via our online Contact Us form.
        </p>

        <h2>
          6. WHAT KINDS OF PERSONAL INFORMATION DO WE COLLECT ABOUT YOU AND HOW
          IS IT COLLECTED AND HELD?
        </h2>
        <p>
          Office Experts collects Personal Information in order to provide
          appropriately tailored personalized product and information services
          to Users.
        </p>
        <p>
          The type of Personal Information we collect may include your name,
          address, telephone numbers, e-mail address, what Services you use, and
          when you use them, location information, information on how you use
          our Services and how much you spend, information on your browsing
          activity when visiting our Site, and personal preferences regarding
          the use of our Services. We do not expect to collect “sensitive
          information” (such as information about your health) from you, however
          if we do then such information will be treated in accordance with the
          relevant rules and requirements of the Privacy Act.
        </p>
        <p>
          We will collect the Personal Information directly from you at the time
          you ask us to provide you with the Services, or if you access the
          Site.
        </p>
        <p>
          If you browse our website, our internet service provider logs the
          following information:
        </p>
        <ul>
          <li>(a) your server (IP) address and top-level domain name</li>
          <li>(b) the date and time of your website visit;</li>
          <li>(c) the country that your server is located;</li>
          <li>(d) the pages that you looked at;</li>
          <li>(e) the type of browser you used;</li>
          <li>(f) the previous site you visited; and</li>
          <li>(g) the site you visited next.</li>
        </ul>
        <p>
          Some of the Services may feature or include various location-based
          components. Location information includes, but is not limited to, any
          information we derive in order to identify a User's geographic
          position. This information may be collected directly from a User, or
          from a User's wireless carrier or from certain third-party service
          providers. A User's location information, however, is only displayed
          and shared in accordance with his or her established privacy settings.
        </p>
        <p>
          We will not use information obtained from your browsing activities to
          send you any unsolicited information.
        </p>
        <p>
          We will take reasonable steps to ensure that the Personal Information
          we collect, use, or disclose is accurate, complete, up-to-date, and
          stored in a secure environment protected from unauthorized access,
          modification, or disclosure.
        </p>

        <h3>7. WHY IS PERSONAL INFORMATION COLLECTED BY OFFICE EXPERTS?</h3>
        <p>
          The Personal Information you provide to Office Experts will enable us
          to provide our Services to you. This information may also be used to
          help us develop and make available products to suit your needs. If you
          do not provide some or all of the information requested, Office
          Experts may not be able to provide you with a particular Service.
        </p>
        <p>
          In particular, the Personal Information you provide Office Experts may
          be collected, used and disclosed for a number of purposes connected
          with our business operations, which may include:
        </p>
        <ul>
          <li>(a) Processing your orders or requests;</li>
          <li>
            (b) Providing you with information, products and/or Services
            requested;
          </li>
          <li>
            (c) Telling you about other products or services that may be of
            interest to you;
          </li>
          <li>
            (d) Billing you and/or administering or otherwise managing your
            account;
          </li>
          <li>
            (e) Dealing with requests, enquiries or complaints and other
            customer service activities;
          </li>
          <li>
            (f) Carrying out market and product analysis and marketing products
            and services;
          </li>
          <li>
            (g) Assisting in arrangements with other organisations in relation
            to the promotion or provision of a product or service;
          </li>
          <li>
            (h) Purposes relating to any third party acquisition or potential
            acquisition of an interest in Office Experts or its assets; and
          </li>
          <li>
            (i) Carrying out any activity in connection with a legal,
            governmental or regulatory requirement that we have to comply with
            or in connection with legal proceedings, crime or fraud prevention,
            detection or prosecution, including investigating any fraud,
            unlawful activity or misconduct.
          </li>
        </ul>
        <p>
          We may also use your Personal Information for purposes related to
          those described above which would be reasonably expected by you. For
          example, we may use your Personal Information to keep you informed
          about features of our products and Services or to conduct analysis in
          order to provide better customer service. If you provide information
          that may be deemed sensitive information for the purpose of the
          Privacy Act, Office Experts will ensure that such information is
          managed and treated in accordance with the APPs.
        </p>

        <h3>8. HOW DO YOU ACCESS AND CORRECT YOUR PERSONAL INFORMATION?</h3>
        <p>
          Once we have collected your Personal Information, you are entitled
          under APP 12 to request the details of the information Office Experts
          is holding about you. In order to request such information, you need
          to contact us by letter, email or telephone and outline the nature of
          your enquiry. Office Experts will take reasonable steps to let you
          know, generally, what sort of Personal Information we hold, for what
          purposes and how we collect, use and disclose that information.
        </p>
        <p>
          Upon your request, Office Experts will also provide access to your
          Personal Information we hold, except in certain prescribed
          circumstances, including emergency situations, specified business
          imperatives and law enforcement or other public interests.
        </p>
        <p>
          We will endeavour to keep and maintain the data held by us as
          accurate, complete, relevant and up to date as possible. It is
          important that the information that we hold about you is up to date.
          You must let us know if information that you have provided to us has
          changed.
        </p>
        <p>
          The APPs also give you a right to request correction of your Personal
          Information. If you establish that Personal Information held by us is
          not accurate, complete, relevant, up-to-date or is misleading, we will
          take reasonable steps in accordance with our obligations under the
          Privacy Act and APPs to correct the information so that it is
          accurate, complete, relevant, up-to-date and not misleading.
        </p>
        <p>
          If you would like to access or correct your Personal Information,
          please contact:
        </p>
        <p>The Privacy Officer</p>
        <p>Office Experts</p>
        <p>
          Email:{" "}
          <a href="mailto:consult@officeexperts.com.au">
            consult@officeexperts.com.au
          </a>
          , or refer to our{" "}
          <Link href="https://www.officeexperts.com.au/contact-us">
            Contact Us
          </Link>{" "}
          page for the latest contact details.
        </p>
        <p>
          To opt-out of receiving certain Office Experts marketing materials,
          you will need to tell us. To do this please send us an email with
          “unsubscribe” in the Subject Field to{" "}
          <a href="mailto:consult@officeexperts.com.au">
            consult@officeexperts.com.au
          </a>
          , or refer to our{" "}
          <Link href="https://www.officeexperts.com.au/contact-us">
            Contact Us
          </Link>{" "}
          page for the latest contact details.
        </p>
        <p>
          Please note that if you have an account with Office Experts, we will
          still need to send you essential information about your account.
        </p>

        <h3>9. HOW CAN I COMPLAIN IF OFFICE EXPERTS BREACHES THIS POLICY?</h3>
        <p>
          If you have a question, concern or complaint regarding the way in
          which we handle your Personal Information you should contact us on the
          details listed above. You are entitled to lodge a complaint if you
          believe that we have breached the APPs. If you wish to lodge a
          complaint with us, you need to write to us setting out the details of
          your complaint.
        </p>
        <p>
          We will issue you with a response to any complaint within a reasonable
          time that, if appropriate, will outline the measures that we will take
          to resolve the complaint.
        </p>
        <p>
          If you feel that we have not satisfactorily addressed your complaint,
          you may also make a complaint to the Office of the Australian
          Information Commissioner by visiting{" "}
          <a href="http://www.oaic.gov.au">www.oaic.gov.au</a> or by writing to
          GPO Box 2999 Canberra ACT 2601.
        </p>

        <h3>10. WHO WILL OFFICE EXPERTS SHARE MY PERSONAL INFORMATION WITH?</h3>
        <p>
          Office Experts may disclose or receive Personal Information or
          documents about you to/from:
        </p>
        <ul>
          <li>
            (a) any organisation that is in an arrangement with Office Experts
            to jointly offer products and or has an alliance with us to share
            information for marketing purposes to enable that organisation or us
            to provide you with products or services or promote a product or
            service;
          </li>
          <li>
            (b) parties involved in any third party acquisition or potential
            acquisition of an interest in Office Experts or its assets;
          </li>
          <li>
            (c) our service providers or agents (some of whom may be overseas)
            who assist us in providing our services, including organisations
            that assist us with archival, research, mail and delivery, auditing,
            consulting, financial and legal advisory, banking, security, storage
            or technology services;
          </li>
          <li>
            (d) regulatory bodies, government agencies, law enforcement agencies
            and courts and any organisation that assists Office Experts to
            identify, prevent or investigate fraud, unlawful activity or
            misconduct; and
          </li>
          <li>
            (e) your authorised agents, executor, administrator or trustee in
            bankruptcy, your legal representative, attorney or anyone acting for
            you in connection with your account.
          </li>
        </ul>
        <p>
          Office Experts will seek your consent to disclose your information to
          overseas recipients. If you provide this consent, then you should be
          aware that your rights to make a claim against Office Experts in
          relation to any misuse of your Personal Information by that overseas
          recipient will be limited. Office Experts will, however, take
          reasonable steps to ensure that any overseas recipient does not breach
          the APPs.
        </p>
        <p>
          Users of Office Experts may nominate third parties to view or access
          the account details maintained by Office Experts in respect of that
          User for any purpose. If a User nominates a third party, that third
          party may be able to view and/or access their information. By
          nominating a third party, you explicitly consent to the sharing of
          your information with that third party by Office Experts.
        </p>
        <p>
          Office Experts may combine the personal information and/or the
          location information that a User submits under his or her account with
          information from other services or third parties in order to provide
          that User with an enhanced experience and/or to improve the overall
          quality of the Services. For certain Services, we may give a User an
          opportunity to opt-out of the combination of such information.
        </p>

        <h3>
          11. INFORMATION YOU PROVIDE TO PAY FOR SERVICES ACQUIRED FROM OFFICE
          EXPERTS
        </h3>
        <p>
          When you purchase goods or Services from Office Experts, any credit
          card information or other information (if any) you give us to purchase
          the goods or Services is used to process the payment. The original
          request/application/enrolment form may be stored securely in the
          Office Experts office for audit/taxation requirements and to assist
          individuals who request duplicate information for their own records.
          These documents are then destroyed. Our database only records that you
          attended an activity or purchased a service and how much you paid for
          it. We do not store your credit card details on our database.
        </p>

        <h3>12. INFORMATION SECURITY</h3>
        <p>
          Office Experts takes appropriate measures to protect unauthorised
          access to, or unauthorised alteration, disclosure or destruction of,
          the Personal Information and location information transmitted or
          disclosed to Office Experts. These include internal reviews of our
          data collection, storage and processing practices and security
          measures, as well as physical security measures to guard against
          unauthorised access to systems where User data is collected, stored,
          and/or maintained.
        </p>
        <p>
          Office Experts cannot guarantee that information will not be accessed,
          shared, disclosed, altered, or destroyed by a breach of any of our
          physical, technical, or other safeguards. Office Experts recommends
          that each User take special care in deciding what information is
          shared, transmitted or disclosed to Office Experts.
        </p>

        <h3>13. DATA INTEGRITY</h3>
        <p>
          Office Experts processes User's Personal Information only for the
          purposes for which it was collected and in accordance with this Policy
          or any applicable terms that you agree with us. We review data
          collection, storage, and processing practices to ensure that we only
          collect, store and process the Personal Information needed to provide
          or improve our Services. We take reasonable steps to ensure that the
          personal information we process is accurate, complete, and current,
          but we depend on our Users to update or correct their Personal
          Information whenever necessary.
        </p>

        <h3>14. WHEN CAN WE VARY THIS POLICY?</h3>
        <p>
          From time to time it may be necessary for us to review and amend this
          Policy. Subject to the terms of the Privacy Act and the APPs, we
          reserve the right to amend this Policy at any time. You should check
          our website from time to time for our latest Policy. A Users’
          continued use of the Services constitutes his or her agreement to this
          Policy and any future revisions. If you have any additional questions
          or concerns about this Policy, please feel free to contact us any
          time.
        </p>
      </main>
    </>
  );
};

export default Page;
