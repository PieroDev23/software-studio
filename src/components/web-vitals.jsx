"use client";

import { useReportWebVitals } from "next/web-vitals";

const endpoint = process.env.NEXT_PUBLIC_WEB_VITALS_ENDPOINT;

function reportMetric(metric) {
  if (!endpoint) return;

  const body = JSON.stringify({
    id: metric.id,
    name: metric.name,
    value: metric.value,
    rating: metric.rating,
    navigationType: metric.navigationType,
    path: window.location.pathname,
  });

  if (navigator.sendBeacon) {
    navigator.sendBeacon(endpoint, body);
    return;
  }

  fetch(endpoint, {
    method: "POST",
    body,
    keepalive: true,
    headers: { "Content-Type": "application/json" },
  });
}

function WebVitals() {
  useReportWebVitals(reportMetric);
  return null;
}

export default WebVitals;
