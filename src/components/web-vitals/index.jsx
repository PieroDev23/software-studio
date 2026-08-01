"use client";

import { useReportWebVitals } from "next/web-vitals";

import { reportMetric } from "./lib/report-metric";

export default function WebVitals() {
  useReportWebVitals(reportMetric);
  return null;
}
