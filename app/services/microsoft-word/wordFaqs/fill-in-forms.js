// faqs/fill-in-forms.js

const faqs = [
  {
    question: "What is a fill in form in Microsoft Word?",
    answer:
      "A fill in form is a Word document built with content controls, such as text boxes, drop-down lists and check boxes, that let someone enter information into a fixed layout without being able to change the surrounding text or formatting.",
  },
  {
    question:
      "What's the difference between content controls and legacy form fields?",
    answer:
      "Content controls are the modern way to build forms in Word, added from the Developer tab and locked individually using the Group command. Legacy form fields are the older technology, protected document-wide using Restrict Editing.",
  },
  {
    question: "Can I add a drop-down list or check box to a Word form?",
    answer:
      "Yes. Word's Developer tab includes content controls for plain text, rich text, drop-down lists, date pickers, check boxes and pictures.",
  },
  {
    question: "How do I stop people editing the layout of my form?",
    answer:
      "The layout is protected by locking each content control and grouping the surrounding text, which prevents anyone from typing outside the fields while still allowing them to complete the form normally.",
  },
  {
    question:
      "Can data from a Word form be extracted into Excel automatically?",
    answer:
      "Yes. A VBA macro can step through every content control in a completed form and read each answer out by its tag name, then write that data straight into an Excel tracking sheet, an Access database, or even a structured email.",
  },
  {
    question:
      "Will my fill in form still work if it's opened on a Mac or an older version of Word?",
    answer:
      "Content controls are supported across recent versions of Word on both Windows and Mac, but older Word 2003-era legacy form fields behave differently on Mac and can render inconsistently.",
  },
  {
    question:
      "Can a fill in form include mandatory fields or validation rules?",
    answer:
      "Yes. Content controls can be set to reject blank entries, restrict a field to numbers or dates only, or limit an answer to a fixed list of options. This is particularly useful for compliance documents, where a form shouldn't be able to be finalised until every required field has been completed correctly.",
  },
  {
    question: "How long does it take to build a custom fill in form?",
    answer:
      "Most single-purpose forms, such as an intake sheet or an internal request form, can be scoped, built and tested within a few business days. Forms with repeating sections, conditional logic or a data extraction step attached usually take a little longer.",
  },
];

export default faqs;
