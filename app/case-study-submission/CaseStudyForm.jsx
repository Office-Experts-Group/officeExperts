// app/internal/case-study-submission/CaseStudyForm.jsx
"use client";
import React, { useState } from "react";

import styles from "../../styles/caseStudySubmission.module.css";

// Fields kept in one state object rather than separate useState calls,
// since they're all plain text inputs submitted together as one payload.
const initialFormState = {
  clientName: "",
  projectName: "",
  details: "",
  problemsSolved: "",
  technologiesUsed: "",
  author: "",
};

// Kept well under SendGrid's 30MB total message limit, since base64
// encoding inflates file size by roughly a third.
const MAX_FILE_SIZE_BYTES = 10 * 1024 * 1024; // 10MB
const ACCEPTED_FILE_TYPES = [
  "image/png",
  "image/jpeg",
  "image/webp",
  "application/pdf",
  "application/vnd.openxmlformats-officedocument.wordprocessingml.document", // .docx
];

// Reads the selected file as a base64 string so it can travel in the
// same JSON payload as the rest of the form, avoiding a second
// multipart-parsing dependency on the server.
const fileToBase64 = (file) =>
  new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(reader.result.split(",")[1]);
    reader.onerror = reject;
    reader.readAsDataURL(file);
  });

const CaseStudyForm = () => {
  const [formData, setFormData] = useState(initialFormState);
  const [file, setFile] = useState(null);
  const [fileError, setFileError] = useState("");
  // status drives which UI state is shown: idle | submitting | success | error
  const [status, setStatus] = useState("idle");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e) => {
    const selected = e.target.files[0];
    setFileError("");

    if (!selected) {
      setFile(null);
      return;
    }

    if (!ACCEPTED_FILE_TYPES.includes(selected.type)) {
      setFileError("Please attach an image, PDF, or Word document.");
      e.target.value = "";
      setFile(null);
      return;
    }

    if (selected.size > MAX_FILE_SIZE_BYTES) {
      setFileError("File is too large — please keep it under 10MB.");
      e.target.value = "";
      setFile(null);
      return;
    }

    setFile(selected);
  };

  const removeFile = () => {
    setFile(null);
    setFileError("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("submitting");

    try {
      // Attachment is optional, so only encode and include it if present.
      const attachment = file
        ? {
            filename: file.name,
            type: file.type,
            content: await fileToBase64(file),
          }
        : null;

      const response = await fetch("/api/case-study-submission", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...formData, attachment }),
      });

      if (!response.ok) throw new Error("Submission failed");

      setStatus("success");
      setFormData(initialFormState);
      setFile(null);
    } catch (err) {
      setStatus("error");
    }
  };

  // Once submitted successfully, show a confirmation instead of the form
  if (status === "success") {
    return (
      <div className={styles.confirmation}>
        <h2 className={styles.confirmationHeading}>Thanks, got it!</h2>
        <p className={styles.confirmationBody}>
          Your case study has been sent through. Appreciate you taking the time
          to write it up.
        </p>
        <button
          type="button"
          className={styles.resetBtn}
          onClick={() => setStatus("idle")}
        >
          Submit another
        </button>
      </div>
    );
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <div className={styles.field}>
        <label htmlFor="clientName" className={styles.label}>
          Client Name
        </label>
        <input
          id="clientName"
          name="clientName"
          type="text"
          value={formData.clientName}
          onChange={handleChange}
          placeholder="This is for our internal records only"
          className={styles.input}
        />
      </div>

      <div className={styles.field}>
        <label htmlFor="projectName" className={styles.label}>
          Project Name
        </label>
        <input
          id="projectName"
          name="projectName"
          type="text"
          value={formData.projectName}
          onChange={handleChange}
          placeholder="e.g. Claims Automation, Template Design, etc."
          required
          className={styles.input}
        />
      </div>

      <div className={styles.field}>
        <label htmlFor="details" className={styles.label}>
          Details
        </label>
        <textarea
          id="details"
          name="details"
          value={formData.details}
          onChange={handleChange}
          placeholder="What was the project? What was the clients industry, what did they need, what did we build?"
          required
          rows={5}
          className={styles.textarea}
        />
      </div>

      <div className={styles.field}>
        <label htmlFor="problemsSolved" className={styles.label}>
          Problems Solved
        </label>
        <textarea
          id="problemsSolved"
          name="problemsSolved"
          value={formData.problemsSolved}
          onChange={handleChange}
          placeholder="What was broken or manual before? What was the impact of fixing it — time saved, errors reduced, etc?"
          required
          rows={4}
          className={styles.textarea}
        />
      </div>

      <div className={styles.field}>
        <label htmlFor="technologiesUsed" className={styles.label}>
          Technologies Used
        </label>
        <input
          id="technologiesUsed"
          name="technologiesUsed"
          type="text"
          value={formData.technologiesUsed}
          onChange={handleChange}
          placeholder="e.g. Power Automate, SharePoint, VBA, Excel"
          required
          className={styles.input}
        />
      </div>

      <div className={styles.field}>
        <label htmlFor="author" className={styles.label}>
          Author
        </label>
        <input
          id="author"
          name="author"
          type="text"
          value={formData.author}
          onChange={handleChange}
          placeholder="Your name"
          required
          className={styles.input}
        />
      </div>

      <div className={styles.field}>
        <label htmlFor="attachment" className={styles.label}>
          Attachment{" "}
          <span className={styles.optional}>
            (optional — screenshot, logo, PDF etc.)
          </span>
        </label>

        {file ? (
          <div className={styles.fileChip}>
            <span className={styles.fileName}>{file.name}</span>
            <button
              type="button"
              className={styles.fileRemoveBtn}
              onClick={removeFile}
              aria-label="Remove attached file"
            >
              Remove
            </button>
          </div>
        ) : (
          <input
            id="attachment"
            name="attachment"
            type="file"
            accept="image/png,image/jpeg,image/webp,application/pdf,.docx"
            onChange={handleFileChange}
            className={styles.fileInput}
          />
        )}

        {fileError && <p className={styles.errorMessage}>{fileError}</p>}
      </div>

      {status === "error" && (
        <p className={styles.errorMessage}>
          Something went wrong sending that through. Please try again, or email
          it directly if it keeps failing.
        </p>
      )}

      <button
        type="submit"
        className={styles.submitBtn}
        disabled={status === "submitting"}
      >
        {status === "submitting" ? "Sending..." : "Submit Case Study"}
      </button>
    </form>
  );
};

export default CaseStudyForm;
