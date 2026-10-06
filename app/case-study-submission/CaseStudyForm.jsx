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

// Up to three images per submission: the hero `image` plus room for a
// `secondaryImage` and one more, matching how the case study pages use them.
const MAX_FILES = 3;

// Limits are kept well under SendGrid's 30MB total message limit, since
// base64 encoding inflates file size by roughly a third. 20MB of files
// becomes about 27MB once encoded, which still fits.
const MAX_FILE_SIZE_BYTES = 10 * 1024 * 1024; // 10MB per file
const MAX_TOTAL_SIZE_BYTES = 20 * 1024 * 1024; // 20MB across all files
const ACCEPTED_FILE_TYPES = [
  "image/png",
  "image/jpeg",
  "image/webp",
  "application/pdf",
  "application/vnd.openxmlformats-officedocument.wordprocessingml.document", // .docx
];

// Reads a selected file as a base64 string so it can travel in the
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
  // Array of File objects, in the order they were added
  const [files, setFiles] = useState([]);
  const [fileError, setFileError] = useState("");
  // status drives which UI state is shown: idle | submitting | success | error
  const [status, setStatus] = useState("idle");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // The input accepts several files at once and can be used again to add
  // more, until the limit of three is reached. Each pick is validated
  // against what is already attached.
  const handleFileChange = (e) => {
    const picked = Array.from(e.target.files || []);
    // Clear the input so the same file can be picked again after removing it
    e.target.value = "";
    setFileError("");

    if (picked.length === 0) return;

    const next = [...files];
    let totalSize = next.reduce((sum, f) => sum + f.size, 0);

    for (const file of picked) {
      if (next.length >= MAX_FILES) {
        setFileError(`You can attach up to ${MAX_FILES} files.`);
        break;
      }

      if (!ACCEPTED_FILE_TYPES.includes(file.type)) {
        setFileError(
          `${file.name} was skipped. Please attach images, PDFs, or Word documents.`,
        );
        continue;
      }

      if (file.size > MAX_FILE_SIZE_BYTES) {
        setFileError(
          `${file.name} was skipped. Each file needs to be under 10MB.`,
        );
        continue;
      }

      if (totalSize + file.size > MAX_TOTAL_SIZE_BYTES) {
        setFileError(
          `${file.name} was skipped. Total attachments need to stay under 20MB.`,
        );
        continue;
      }

      const isDuplicate = next.some(
        (f) => f.name === file.name && f.size === file.size,
      );
      if (isDuplicate) continue;

      next.push(file);
      totalSize += file.size;
    }

    setFiles(next);
  };

  const removeFile = (indexToRemove) => {
    setFiles((prev) => prev.filter((_, i) => i !== indexToRemove));
    setFileError("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("submitting");

    try {
      // Attachments are optional, so this is an empty array when none
      // were chosen. Each file is encoded before being sent.
      const attachments = await Promise.all(
        files.map(async (file) => ({
          filename: file.name,
          type: file.type,
          content: await fileToBase64(file),
        })),
      );

      const response = await fetch("/api/case-study-submission", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...formData, attachments }),
      });

      if (!response.ok) throw new Error("Submission failed");

      setStatus("success");
      setFormData(initialFormState);
      setFiles([]);
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
          Images{" "}
          <span className={styles.optional}>
            (optional — up to {MAX_FILES}: screenshots, logo, PDF etc.)
          </span>
        </label>

        {files.length > 0 && (
          <ul style={{ listStyle: "none", margin: 0, padding: 0 }}>
            {files.map((file, index) => (
              <li key={`${file.name}-${file.size}`} className={styles.fileChip}>
                <span className={styles.fileName}>{file.name}</span>
                <button
                  type="button"
                  className={styles.fileRemoveBtn}
                  onClick={() => removeFile(index)}
                  aria-label={`Remove ${file.name}`}
                >
                  Remove
                </button>
              </li>
            ))}
          </ul>
        )}

        {/* The picker stays available until three files are attached.
            "multiple" lets people choose several files in one go. */}
        {files.length < MAX_FILES && (
          <input
            id="attachment"
            name="attachment"
            type="file"
            multiple
            accept="image/png,image/jpeg,image/webp,application/pdf,.docx"
            onChange={handleFileChange}
            className={styles.fileInput}
          />
        )}

        <p className={styles.optional}>
          {files.length} of {MAX_FILES} attached
        </p>

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
