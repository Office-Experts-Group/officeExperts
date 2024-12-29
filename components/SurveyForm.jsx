import React, { useState } from "react";
import styles from "../styles/contact.module.scss";
import Link from "next/link";

const SurveyForm = ({ name, email }) => {
  const [formData, setFormData] = useState({
    referralSource: "",
    otherReferralDetails: "",
  });
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError("");

    if (!formData.referralSource) {
      setError("Please select how you heard about us");
      setIsSubmitting(false);
      return;
    }

    try {
      const res = await fetch("/api/surveyForm", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name,
          email,
          referralSource: formData.referralSource,
          otherReferralDetails: formData.otherReferralDetails,
        }),
      });

      const data = await res.json();

      if (res.ok) {
        setSuccess(true);
      } else {
        setError(data.error || "Failed to submit survey");
      }
    } catch (err) {
      setError("Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
      ...(name === "referralSource" && value !== "other"
        ? { otherReferralDetails: "" }
        : {}),
    }));
    setError("");
  };

  if (success) {
    return (
      <div className={styles.successMessage} role="alert">
        <h2>Thanks!</h2>
        <p>We appreciate your time and valuable feedback!</p>
        <Link
          href="/"
          className={`btn ${styles.btn}`}
          style={{
            marginTop: "1rem",
            textTransform: "capitalize",
          }}
        >
          Back to Home
        </Link>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className={styles.surveyForm}>
      <div className={styles.successMessage}>
        <h2>Thank you {name} for your message!</h2>
        <p>
          We have received your message and one of our team will contact you
          shortly.
        </p>
      </div>

      {error && (
        <div className={styles.errorMessage} role="alert">
          {error}
        </div>
      )}

      <div className={styles.formField}>
        <label className={`${styles.groupLabel} ${styles.surveyHeading}`}>
          Do you mind sharing how did you hear about us?
        </label>
        <div className={`${styles.radioOptions} ${styles.surveyOptions}`}>
          {[
            ["search", "Search Engine"],
            ["referral", "Referral/Word of Mouth"],
            ["advertising", "Advertising"],
            ["other", "Other"],
          ].map(([value, label]) => (
            <div key={value} className={styles.radioOption}>
              <input
                type="radio"
                id={value}
                name="referralSource"
                value={value}
                checked={formData.referralSource === value}
                onChange={handleChange}
              />
              <label htmlFor={value}>{label}</label>
            </div>
          ))}
        </div>

        {formData.referralSource === "other" && (
          <input
            type="text"
            name="otherReferralDetails"
            value={formData.otherReferralDetails}
            onChange={handleChange}
            placeholder="Please specify..."
            className={styles.otherInput}
          />
        )}
      </div>

      <button
        type="submit"
        className={` btn ${styles.submitBtn} ${styles.surveyBtn}`}
        disabled={isSubmitting}
      >
        {isSubmitting ? "Submitting..." : "Submit"}
      </button>
    </form>
  );
};

export default SurveyForm;
