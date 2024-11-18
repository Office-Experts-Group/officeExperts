import Link from "next/link";
import React from "react";

const schema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://www.officeexperts.com.au/terms-and-conditions/",
      url: "https://www.officeexperts.com.au/terms-and-conditions/",
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
        "@id":
          "https://www.officeexperts.com.au/terms-and-conditions/#breadcrumb",
      },
      inLanguage: "en-AU",
      potentialAction: [
        {
          "@type": "ReadAction",
          target: ["https://www.officeexperts.com.au/terms-and-conditions/"],
        },
      ],
    },
    {
      "@type": "BreadcrumbList",
      "@id":
        "https://www.officeexperts.com.au/terms-and-conditions/#breadcrumb",
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
          name: "Terms and Conditions",
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

export default function TermsAndConditionsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <main>
        <h1>Terms and Conditions</h1>
        <p>
          These Terms and Conditions (Terms) govern the provision of services by
          Brayalei Pty Ltd, ABN 32 093 067 737 trading as Office Experts Group
          (Office Experts Group) to each customer from time to time (Customer).
        </p>

        <h2>1. Definitions and Interpretations</h2>

        <h3>1.1 Definitions</h3>
        <p>In these Terms, unless the context otherwise requires:</p>
        <ul>
          <li>
            <strong>Agreed Scope</strong> means the scope of Services to be
            provided by Office Experts Group to the Customer, as described in
            the Quote provided to the Customer.
          </li>
          <li>
            <strong>Confidential Information</strong> in relation to any person
            means any and all confidential and/or proprietary knowledge, data or
            information which is in the knowledge, possession or control of that
            person (or any employee or agent of that person), including:
            <ul>
              <li>(a) these Terms;</li>
              <li>
                (b) all and every part of the information regarding that party's
                business affairs obtained or disclosed during the course of
                negotiation and implementation of these Terms and the provision
                of the Services;
              </li>
              <li>
                (c) Intellectual Property Rights, trade secrets, inventions,
                mask works, ideas, processes, formulas, source and object codes,
                data, programs, other works of authorship, know-how,
                improvements (including without limitation improvements in
                process), discoveries, developments, drawings, designs and
                techniques;
              </li>
              <li>
                (d) information regarding plans for research, development, new
                products, marketing and selling, business plans, budgets and
                unpublished financial statements, licenses, prices and costs,
                suppliers and customers.
              </li>
            </ul>
          </li>
          <li>
            <strong>Customer Premises</strong> means the business premises of
            the Customer from time to time.
          </li>
          <li>
            <strong>Expenses</strong> means any out-of-pocket expenses incurred
            by Office Experts Group in providing the Services, including without
            limitation all travel accommodation and other expenses.
          </li>
          <li>
            <strong>Fee Estimate</strong> has the meaning given by clause
            7.1(a).
          </li>
          <li>
            <strong>Fixed Price Quote</strong> has the meaning given by clause
            7.1(b).
          </li>
          <li>
            <strong>GST Act</strong> means the A New Tax System (Goods and
            Services Tax) Act 1999 (Cth).
          </li>
          <li>
            <strong>Intellectual Property Rights</strong> has the meaning given
            by clause 18.1.
          </li>
          <li>
            <strong>Proposed Scope</strong> means the scope of work requested by
            the Customer from time to time.
          </li>
          <li>
            <strong>Quote</strong> means a Fee Estimate or a Fixed Price Quote.
          </li>
          <li>
            <strong>Relevant Laws</strong> means each relevant law or legal
            requirement under any statute, regulation or by-law, any condition
            of any authorisation and any decision, directive, guideline or
            requirement of a government agency which is relevant to the
            provision of the Services under these Terms.
          </li>
          <li>
            <strong>Services</strong> means some or all of the services which
            are to be provided by Office Experts Group to the Customer pursuant
            to these Terms.
          </li>
          <li>
            <strong>Service Standard</strong> means the standard expected of a
            skilled information technology professional acting in a safe and
            competent manner.
          </li>
          <li>
            <strong>Up-Front Payment</strong> has the meaning given by clause
            7.2 of the Terms.
          </li>
        </ul>

        <h3>1.2 Interpretation</h3>
        <p>In these Terms, unless the contrary intention appears:</p>
        <ul>
          <li>
            (a) Headings are for convenience only and do not form part of the
            Terms or affect their interpretation.
          </li>
          <li>
            (b) A reference to any legislation includes regulations and other
            instruments under it and any variation or replacement of any of
            them.
          </li>
          <li>
            (c) The singular includes the plural and vice versa, and words
            importing any gender include the other genders.
          </li>
          <li>
            (d) A reference to “person” includes an individual, a firm, a body
            corporate, a partnership, a joint venture, an unincorporated body or
            association or any authority.
          </li>
          <li>
            (e) References to any instrument are to that instrument as it may
            from time to time be amended or extended in accordance with its
            terms.
          </li>
          <li>
            (f) References to dollars or $ is a reference to Australian dollars.
          </li>
        </ul>

        <h3>1.3 Binding Nature of Terms</h3>
        <p>
          Office Experts Group and the Customer agree that these Terms are
          binding on their legal personal representative, heirs, successors and
          permitted assigns.
        </p>

        <h2>2. Appointment</h2>
        <h3>2.1 Appointment</h3>
        <p>
          The Customer wishes to retain Office Experts Group to provide the
          Services subject to and in accordance with these Terms. By signing and
          returning the Quote or by continuing to request Services from Office
          Experts Group, the Customer agrees to be bound by these Terms.
        </p>

        <h3>2.2 Acceptance</h3>
        <p>
          Office Experts Group accepts its appointment to provide the Services
          in accordance with these Terms.
        </p>

        <h3>2.3 Location</h3>
        <p>
          The Services may be provided by Office Experts Group at the Customer
          Premises or remotely, or at such other reasonable location as agreed
          between the parties from time to time.
        </p>

        <h2>3 Commencement and Term</h2>
        <p>
          3.1 (Commencement) Unless expressly stated otherwise in these Terms,
          the rights and obligations created under these Terms commence on, and
          are enforceable from, the date on which these Terms are signed by the
          Customer, or the date on which Office Experts Group start providing
          the Services.
        </p>

        <p>
          3.2 (Term) These Terms will continue in full force and effect until
          they are terminated by Office Experts Group or the Customer.
        </p>

        <h2>4 SERVICES</h2>
        <p>4.1 (Provision of Services)</p>
        <p>
          Office Experts Group agrees to provide the Services in accordance
          with:
        </p>
        <ul>
          <li>(a) these Terms;</li>
          <li>(b) the Service Standards;</li>
          <li>(c) all Relevant Laws;</li>
          <li>(d) the Agreed Scope; and</li>
          <li>(e) any reasonable direction of the Customer.</li>
        </ul>

        <h2>5 OBLIGATIONS ON CUSTOMER</h2>
        <p>
          5.1 (Facilitate provision of Services) The Customer agrees to take all
          reasonable steps to facilitate the provision of the Services by Office
          Experts Group, including:
        </p>
        <ul>
          <li>
            (a) (Access): Arranging for staff or consultants of Office Experts
            Group to be provided with reasonable access (including remote
            access) to the Customer Premises or systems when required; and
          </li>
          <li>
            (b) (Support): Providing access to the Customer's systems and
            resources, to the extent deemed reasonably necessary and appropriate
            by Office Experts Group in respect of the provision of the Services.
          </li>
        </ul>

        <h5>5.2 (Other reasonable steps)</h5>
        <p>
          The Customer agrees to take any other reasonably necessary step to
          facilitate Office Experts Group providing the Services to the
          Customer, including without limitation, signing or executing any
          documents or declarations reasonably requested by Office Experts Group
          in order to ensure that Office Experts Group can continue to provide
          the Services.
        </p>

        <h2>6 REPORTING AND INFORMATION</h2>
        <p>
          6.1 (Reporting) Office Experts Group agrees to provide updates to the
          Customer regarding the provision of the Services (including in respect
          of “work in progress”) upon reasonable request of the Customer.
        </p>

        <p>
          6.2 (Information) Office Experts Group agrees to provide the Customer
          with reasonable information regarding the provision of the Services.
        </p>

        <h2>7 PAYMENTS, QUOTING, INVOICING, EXPENSES AND GST</h2>
        <p>
          7.1 (Quote) Upon reasonable request by the Customer, Office Experts
          Group may provide a Quote for the provision of Services. The Quote
          will be prepared having regard to the Proposed Scope. The Quote may be
          either (at the discretion of Office Experts Group):
        </p>
        <ul>
          <li>
            (a) an estimate of fees having regard to the Proposed Scope (Fee
            Estimate). Office Experts Group agrees to use reasonable efforts to
            meet the Quote, however the Customer agrees that there may be
            circumstances in which the amount invoiced by Office Experts may
            exceed the Quote. The Customer agrees that if the Proposed Scope
            changes, then the Quote will not be valid.
          </li>
          <li>
            (b) a fixed estimate of costs prepared having regard to the Proposed
            Scope (Fixed Price Quote). Office Experts Group agrees to cap its
            fees for the provisions of the Services at the Fixed Price Quote
            amount, unless there is any change to the Proposed Scope.
          </li>
        </ul>

        <p>
          7.2 (Up Front Payment) Office Experts Group may request the Customer
          to pay 50% of the Fee Estimate or Fixed Price Quote to Office Experts
          Group prior to commencement of the Services (Up Front Payment). If
          such a request is made, the Customer acknowledges that Office Experts
          Group will not commence provision of the Services until Office Experts
          Group has received the Up Front Payment.
        </p>

        <p>
          7.3 (Invoicing) Office Experts Group will invoice the Customer either
          monthly or at the end of a relevant project as agreed between the
          parties. The invoice will incorporate all fees and Expenses related to
          the provision of Services over the relevant period, plus GST. The
          Customer must pay the invoice within 30 days of issue. Invoices will
          be communicated via email unless otherwise agreed.
        </p>

        <p>
          7.4 (Disputed Invoice) If the Customer disputes any invoice, then the
          Customer must contact Office Experts Group in writing setting out the
          details of the dispute (Notification). Office Experts Group will
          review and consider the Notification, and may, in Office Experts'
          discretion, either:
        </p>
        <ul>
          <li>
            (a) agree to amend the disputed invoice to take account of the
            Customer's concerns; or
          </li>
          <li>
            (b) reject the dispute and require the Customer to pay the invoice.
          </li>
        </ul>

        <p>7.5 (Expenses)</p>
        <ul>
          <li>
            (a) (Expenses the responsibility of the Customer): Subject to
            paragraph (b), any Expenses incurred by Office Experts Group in
            providing the Services will be charged at cost directly to the
            Customer.
          </li>
          <li>
            (b) (Fixed Expenses): The Customer will not be responsible for any
            Expenses that have been specifically incorporated into a Fixed Price
            Quote.
          </li>
          <li>
            (c) (Invoicing of expenses): Any Expenses incurred by Office Experts
            Group will be included in the invoices issued to the Customer
            pursuant to clause 7.3.
          </li>
        </ul>

        <p>
          7.6 (Overdue Amounts &ndash; termination, suspension and interest) If
          a Customer fails to pay some or all of the invoiced amount within the
          required payment time (Overdue Amount) then Office Experts Group may,
          in its sole discretion:
        </p>
        <ul>
          <li>
            (a) immediately suspend provision of the Services to the Customer
            until the Overdue Amount (and any interest payable) has been paid in
            full;
          </li>
          <li>
            (b) terminate any further provision of the Services (or any other
            services) to the Customer;
          </li>
          <li>
            (c) Retain any items/equipment purchased by Office Experts Group on
            behalf of the Customer; and
          </li>
          <li>
            (d) charge interest on the Overdue Amount at a rate of 2% per month.
          </li>
        </ul>

        <p>
          Office Experts Group will not be liable for any loss, damage,
          disadvantage or harm that you may suffer as a result of us deciding
          not to continue to perform any further work for the Customer in
          accordance with clause 7.6.
        </p>

        <p>
          7.7 (Information to debt collectors) If we need to take action against
          you for an Overdue Amount, we may disclose to our debt collection
          agents any personal information that they reasonably request in order
          to recover the Overdue Amount (and any interest) from the Customer.
        </p>

        <p>7.8 (GST)</p>
        <ul>
          <li>
            (a) (GST Recovery) If a Supply under these Terms is subject to GST,
            the Recipient must pay to the Supplier an additional amount equal to
            the amount of any payment in connection with the Supply multiplied
            by the applicable GST rate.
          </li>
          <li>
            (b) (Tax Invoices): The Supplier for any Taxable Supply under these
            Terms must deliver to the Recipient a Tax invoice that complies with
            all of the requirements of the GST Act prior to any obligation
            arising on the Recipient to pay the consideration for a Taxable
            Supply.
          </li>
          <li>
            (c) (Time of Payment): The additional amount is payable at the same
            time as the consideration for the Supply is payable or is to be
            provided. However, the additional amount need not be paid until the
            Supplier gives the recipient a Tax Invoice.
          </li>
          <li>
            (d) (Change in GST amount): If the amount of GST payable on Supplies
            under these Terms changes because of an Adjustment Event, the
            parties must do all things necessary to ensure that the Adjustment
            Event is appropriately recognised, including the issue of an
            Adjustment Note if required under the GST Act.
          </li>
          <li>
            (e) (Meaning of Key Terms): Capitalised terms used in this clause
            that are not otherwise defined in these Terms have the meaning given
            in the GST Act.
          </li>
        </ul>

        <h2>8 WARRANTY</h2>
        <p>
          8.1 Office Experts Group warrants that it will take all reasonable
          care and diligence to ensure the Services are provided to the Service
          Standard.
        </p>

        <p>8.2 The Customer warrants that it will:</p>
        <ul>
          <li>
            (a) take all reasonable steps to facilitate the provision of the
            Services by Office Experts Group; and
          </li>
          <li>
            (b) will pay all properly invoiced amounts when due and payable and
            any Overdue Amounts on demand.
          </li>
        </ul>

        <h2>9 LIMITATION OF LIABILITY</h2>
        <p>
          9.1 Subject to law, Office Experts Group's liability to the Customer
          in respect of the Services is limited to the total amount invoiced to
          the Customer in respect of the relevant Services.
        </p>

        <p>
          9.2 Office Experts will not be liable for any damage or loss incurred
          by the Customer where such damage or loss is caused by the Customer.
        </p>

        <p>
          9.3 Office Experts Group will not be liable where the Customer incurs
          loss due to a suspension of services by Office Experts Group caused by
          a failure of the Customer to pay any amount to Office Experts Group
          when such amount is due and payable.
        </p>

        <h2>10 INDEMNITY</h2>
        <p>10.1 (Customer): The Customer shall:</p>
        <ul>
          <li>(a) indemnify and keep indemnified on demand; and</li>
          <li>
            (b) by way of continuing indemnity, defend and keep harmless, Office
            Experts Group and its officers, contractors and employees from and
            against all direct liabilities, damages, losses, penalties, demands,
            suits, costs, payments, outgoings expenses and proceedings of any
            nature whatsoever in relation to:
          </li>
          <li>
            (c) any failure by the Customer to pay any amount due and payable to
            Office Experts Group;
          </li>
          <li>(d) any other breach of these Terms by the Customer; or</li>
          <li>
            (e) any reputational damage to the business or brand associated with
            Office Experts Group that is caused by the Customer.
          </li>
        </ul>

        <p>
          10.2 (Limitation): The indemnity in clause 10.1 does not extend to any
          loss or damage that is attributable to the negligent or reckless act
          or omission, or wilful misconduct, of Office Experts Group or its
          officers and employees (including any breach of these Terms by Office
          Experts Group).
        </p>

        <p>
          10.3 (Survival): The provisions of this clause 10 survive termination
          of these Terms.
        </p>

        <h2>11 PRIVACY AND CREDIT CHECKS</h2>
        <p>
          11.1 (Privacy): Office Experts Group is bound by the privacy
          principles contained under the Privacy Act 1988 (Cth). Office Experts
          Group's privacy policy is available at its website{" "}
          <Link href="http://www.officeexperts.com.au">
            www.officeexperts.com.au
          </Link>
          . You must ensure that any personal information you give us is given
          with the consent of the person to whom it relates. Office Experts
          Group may use and disclose this information as required in relation to
          the Services that we provide, and in accordance with the privacy
          policy.
        </p>

        <p>
          11.2 (Credit checks): If Office Experts Group provides the Services in
          advance of payment, then Office Experts Group may, in its sole
          discretion, liaise with third party providers to obtain a credit
          search and credit history of the Customer. The Customer agrees to
          cooperate with Office Experts Group in respect of any such credit
          check.
        </p>

        <h2>12 OFFICE EXPERTS GROUP'S TIME AND ATTENTION</h2>
        <p>
          Office Experts Group agrees to devote all necessary time, attention,
          work, effort and expertise to the provision of the Services as
          reasonably determined by Office Experts Group from time to time.
        </p>

        <h2>13 LEGAL ADVICE</h2>
        <p>
          The Customer is invited to obtain independent legal advice in relation
          to these Terms if the Customer would like to do so. Office Experts
          Group recommends that the Customer obtain such independent advice.
        </p>

        <h2>14 AMENDMENT</h2>
        <p>
          These Terms may be varied by Office Experts Group upon prior written
          notice to the Customer.
        </p>

        <h2>15 DISPUTE RESOLUTION</h2>
        <p>
          (Informal resolution): Office Experts Group will initially attempt to
          resolve any dispute that may arise between the Customer and Office
          Experts Group in relation to the Services by informal means. Office
          Experts Group agrees to take all reasonable steps to resolve any
          dispute to the Customer's satisfaction.
        </p>

        <h2>16 RECORDS</h2>
        <p>
          16.1 (Records): The Customer must keep such information and material
          in respect of the Services from time to time to ensure that Office
          Experts Group can satisfy its obligations under these Terms and
          pursuant to Relevant Law.
        </p>

        <p>
          16.2 (Survival): This clause 16 survives termination of these Terms.
        </p>

        <h2>17 CONFIDENTIALITY</h2>
        <p>17.1 (Confidential Information) Office Experts Group agrees to:</p>
        <ul>
          <li>
            (a) treat all Confidential Information as secret and confidential
            and not use such Confidential Information for any unauthorised
            purpose;
          </li>
          <li>
            (b) not disclose any Confidential Information to any person other
            than an employee or agent or sub-contractor who requires that
            information to effectively perform their respective duties, who are
            aware the information is confidential, and who are bound to treat it
            as such;
          </li>
          <li>
            (c) ensure that it complies with any separate confidentiality
            agreements or undertakings entered into with the Customer from time
            to time; and
          </li>
          <li>
            (d) not use any Confidential Information for its own purposes, or
            for the benefit of any third party, except as expressly authorised
            by the Customer.
          </li>
        </ul>

        <p>
          17.2 (Exception): Nothing in this clause 17 prevents the Office
          Experts Group from disclosing Confidential Information:
        </p>
        <ul>
          <li>
            (a) to its professional advisers upon those persons undertaking to
            keep confidential any information so disclosed; or
          </li>
          <li>
            (b) to comply with any Relevant Law or requirement of any regulatory
            body; or
          </li>
          <li>
            (c) to the extent that disclosure is required to perform the
            Services in accordance with these Terms; or
          </li>
          <li>(d) with the prior written consent of the Customer.</li>
        </ul>

        <p>
          17.3 (Survival): The provisions of this clause 17 will continue to
          apply notwithstanding that these Terms have come to an end.
        </p>

        <h2>18 INTELLECTUAL PROPERTY</h2>
        <p>
          18.1 (Definitions): For the purposes of this clause, the following
          definitions apply:
        </p>
        <ul>
          <li>(a) Intellectual Property Rights means:</li>
          <ul>
            <li>
              (i) copyright, patents, procedures, processes, source code,
              formulae, methods of production, inventions, innovations,
              know-how, confidential information, database rights, and rights in
              trade marks and designs (whether registered or unregistered);
            </li>
            <li>
              (ii) applications for registration, and the right to apply for
              registration, for any of the same; and
            </li>
            <li>
              (iii) all other intellectual property rights and equivalent or
              similar forms of protection, existing anywhere in the world;
            </li>
          </ul>
          <li>
            (b) IP Materials means all documents, software, photographic or
            graphic works of any type, and other materials in any medium or
            format which are created by or on behalf of Office Experts Group in
            the course of performing the Services and which are protected or
            relate to Intellectual Property Rights.
          </li>
        </ul>

        <p>
          18.2 (Treatment of Intellectual Property Rights): The Customer will be
          entitled to all Intellectual Property Rights in any IP Materials
          produced by Office Experts Group in giving effect to the Services.
          However, the Customer acknowledges that Office Experts Group retains
          ownership of all Intellectual Property Rights which exist or which
          arise (whether through creation, authorship, production, evolution,
          discovery, development or invention) in the process of performing the
          Services.
        </p>

        <p>
          18.3 (Third Party Rights): The Customer represents and warrants that
          it will not infringe the Intellectual Property Rights of any third
          party in requesting Office Experts Group to perform the Services. The
          Customer indemnifies Office Experts Group for any loss, damage or
          expense suffered or incurred by Office Experts Group as the result of
          any claim that the items serviced by Office Experts Group at the
          request of the Customer infringe the Intellectual Property Rights of
          any person.
        </p>

        <p>
          18.4 (Survival): The provisions of this clause 18 survive termination
          of these Terms.
        </p>

        <h2>19 GENERAL PROVISIONS</h2>
        <p>
          19.1 (Severance): Any provision of these Terms which is invalid or
          unenforceable in a particular jurisdiction, may be read down or
          severed to the extent of the invalidity or unenforceability in that
          jurisdiction only. The invalidity or unenforceability of a provision
          of these Terms in one jurisdiction does not affect the:
        </p>
        <ul>
          <li>
            (a) application of that provision in any other jurisdiction in which
            it is valid and enforceable; or
          </li>
          <li>(b) remaining provisions of these Terms.</li>
        </ul>

        <p>
          19.2 (Authority): Unless these Terms expressly provide otherwise, no
          party has the authority to act for, or incur any obligation on behalf
          of, the other parties.
        </p>

        <p>
          19.3 (Costs): Each party must bear its own costs in respect of the
          entry into and negotiation of these Terms.
        </p>

        <p>
          19.4 (Entire Agreement): These Terms comprise the parties' entire
          understanding in relation to the subject matter of these Terms and
          supersede any prior agreement or arrangement.
        </p>

        <p>
          19.5 (Reliance): The Customer acknowledges that it has entered these
          Terms:
        </p>
        <ul>
          <li>
            (a) without reliance on any representation made by Office Experts
            Group or its officers or agents; and
          </li>
          <li>
            (b) having made its own investigation and analysis of all matters
            relevant to these Terms.
          </li>
        </ul>

        <p>
          19.6 (Cumulative): The rights, remedies and powers of the parties
          under these Terms are cumulative and not exclusive of any rights,
          remedies or powers provided to the parties by law.
        </p>

        <p>
          19.7 (Consent): Unless these Terms expressly provides otherwise, any
          approval or consent required to be obtained under these Terms may be
          withheld, given conditionally, or given unconditionally, in each case
          in the relevant party's absolute discretion.
        </p>

        <p>
          19.8 (Waiver): A right granted to one party under these Terms may only
          be waived by that party giving notice in writing to the other party. A
          party does not waive any right granted under these Terms by not
          exercising that right immediately.
        </p>

        <p>
          19.9 (Governing law and Jurisdiction): These Terms are governed by the
          laws in force in the State of New South Wales and the parties submit
          to the exclusive jurisdiction of the Supreme Court of New South Wales
          to decide any dispute between them in relation to these Terms.
        </p>

        <h2>SCHEDULE 1 &ndash; SERVICES</h2>
        <h3>SERVICES</h3>
        <ul>
          <li>
            (a) Microsoft Office design, construction, maintenance and support
            of documents, spreadsheets, presentations and databases.
          </li>
          <li>
            (b) Programming in Microsoft Office to produce automated solutions
            using VBA.
          </li>
          <li>
            (c) Creation and support of solutions using Microsoft Azure, Visual
            Studio and SQL Server.
          </li>
          <li>
            (d) Integration of data to and from our solutions using 3rd party
            software, 3rd party APIs, ODBC and data files.
          </li>
          <li>(e) Web Development using PHP, HTML2, JavaScript.</li>
          <li>
            (f) Other software that is sometimes required to complete the
            Business' solutions.
          </li>
        </ul>
      </main>
    </>
  );
}
