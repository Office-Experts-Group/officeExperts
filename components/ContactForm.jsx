"use client";
import React, { useState } from "react";
import styles from "../styles/contact.module.css";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
    honeypot: "",
    referralSource: "",
    otherReferralDetails: "",
  });

  const [error, setError] = useState({});
  const [success, setSuccess] = useState(false);

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const handleSubmit = async (e) => {
    e.preventDefault();

    setError({});
    const newError = {};

    if (!formData.name.trim()) {
      newError.name = "*Name is required";
    }
    if (!formData.email.trim()) {
      newError.email = "*Email is required";
    } else if (!emailRegex.test(formData.email.trim())) {
      newError.email = "*Email is not valid";
    }
    if (!formData.message.trim()) {
      newError.message = "*Message is required";
    }

    if (Object.keys(newError).length > 0) {
      setError(newError);
      const firstErrorField = Object.keys(newError)[0];
      const element = document.getElementById(firstErrorField);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: "smooth", block: "center" });
          element.focus();
        }, 100);
      }
      return;
    }

    if (formData.honeypot) {
      return;
    }

    try {
      const res = await fetch("/api/contactForm", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...formData,
          // Format referral source for email body
          referralDetails:
            formData.referralSource === "other"
              ? `Other: ${formData.otherReferralDetails}`
              : formData.referralSource,
        }),
      });

      if (res.ok) {
        setSuccess(true);
        setFormData({
          name: "",
          email: "",
          phone: "",
          message: "",
          honeypot: "",
          referralSource: "",
          otherReferralDetails: "",
        });
      } else {
        setError((prev) => ({
          ...prev,
          general: "Something went wrong. Please try again.",
        }));
      }
    } catch (err) {
      setError((prev) => ({
        ...prev,
        general: "There was an error submitting the form.",
      }));
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
      // Clear other details if referral source is changed to something other than "other"
      ...(name === "referralSource" && value !== "other"
        ? { otherReferralDetails: "" }
        : {}),
    }));

    if (error[name]) {
      setError((prev) => ({
        ...prev,
        [name]: "",
      }));
    }
  };

  if (success) {
    return (
      <div className={styles.successMessage} role="alert" aria-live="polite">
        <h2>Thank you {formData.name} for your message!</h2>
        <p>One of our team will contact you shortly</p>
      </div>
    );
  }

  return (
    <form
      className={styles.contactForm}
      onSubmit={handleSubmit}
      noValidate
      aria-label="Contact form"
      role="form"
    >
      <div className={styles.formField}>
        <label htmlFor="name" className={styles.requiredField}>
          Name*
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          aria-required="true"
          aria-invalid={!!error.name}
          aria-describedby={error.name ? "name-error" : undefined}
          required
        />
        {error.name && (
          <p
            id="name-error"
            className={styles.errorMessage}
            role="alert"
            aria-live="polite"
          >
            {error.name}
          </p>
        )}
      </div>

      <div className={styles.formField}>
        <label htmlFor="message" className={styles.requiredField}>
          Message*
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          aria-required="true"
          aria-invalid={!!error.message}
          aria-describedby={error.message ? "message-error" : undefined}
          placeholder="Your message..."
          required
        />
        {error.message && (
          <p
            id="message-error"
            className={styles.errorMessage}
            role="alert"
            aria-live="polite"
          >
            {error.message}
          </p>
        )}
      </div>

      <div className={styles.formField}>
        <label htmlFor="email" className={styles.requiredField}>
          Email*
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          aria-required="true"
          aria-invalid={!!error.email}
          aria-describedby={error.email ? "email-error" : undefined}
          placeholder="eg. john@example.com"
          required
        />
        {error.email && (
          <p
            id="email-error"
            className={styles.errorMessage}
            role="alert"
            aria-live="polite"
          >
            {error.email}
          </p>
        )}
      </div>

      <div className={styles.formField}>
        <label htmlFor="phone" className={styles.label}>
          Phone
        </label>
        <input
          type="tel"
          id="phone"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          aria-required="false"
          placeholder="optional..."
        />
      </div>

      <div className={`${styles.formField} ${styles.refField}`}>
        <label className={styles.groupLabel}>How did you hear about us?</label>
        <div className={styles.radioOptions}>
          <div className={styles.radioOption}>
            <input
              type="radio"
              id="search"
              name="referralSource"
              value="search"
              checked={formData.referralSource === "search"}
              onChange={handleChange}
            />
            <label htmlFor="search">Search Engine</label>
          </div>

          <div className={styles.radioOption}>
            <input
              type="radio"
              id="referral"
              name="referralSource"
              value="referral"
              checked={formData.referralSource === "referral"}
              onChange={handleChange}
            />
            <label htmlFor="referral">Referral/Word of Mouth</label>
          </div>

          <div className={styles.radioOption}>
            <input
              type="radio"
              id="advertising"
              name="referralSource"
              value="advertising"
              checked={formData.referralSource === "advertising"}
              onChange={handleChange}
            />
            <label htmlFor="advertising">Advertising</label>
          </div>

          <div className={styles.radioOption}>
            <input
              type="radio"
              id="other"
              name="referralSource"
              value="other"
              checked={formData.referralSource === "other"}
              onChange={handleChange}
            />
            <label htmlFor="other">Other</label>
          </div>
        </div>

        {formData.referralSource === "other" && (
          <div className={styles.otherInput}>
            <input
              type="text"
              id="otherReferralDetails"
              name="otherReferralDetails"
              value={formData.otherReferralDetails}
              onChange={handleChange}
              placeholder="Please specify..."
              aria-label="Please specify how you heard about us"
              aria-required="true"
              aria-invalid={!!error.otherReferralDetails}
            />
          </div>
        )}
      </div>

      <div>
        <input
          type="text"
          name="honeypot"
          value={formData.honeypot}
          onChange={handleChange}
          className={styles.honeypot}
          aria-hidden="true"
          tabIndex="-1"
        />
      </div>

      <button
        type="submit"
        className={`btn ${styles.submitBtn}`}
        aria-label="Submit contact form"
      >
        Submit
      </button>
    </form>
  );
};

export default ContactForm;
