// app/ccp/(components)/PaymentForm.jsx - UPDATED
"use client";
import React from "react";
import { getPaymentMethod } from "../../../utils/paymentConfig";
import BpointPaymentForm from "./BpointPaymentForm";
// Keep your existing Simplify component
import SimplifyPaymentForm from "./SimplifyPaymentForm"; // Rename your current component to this

const PaymentForm = ({ params }) => {
  const paymentMethod = getPaymentMethod();

  if (paymentMethod === "bpoint") {
    return <BpointPaymentForm params={params} />;
  }

  return <SimplifyPaymentForm params={params} />;
};

export default PaymentForm;
