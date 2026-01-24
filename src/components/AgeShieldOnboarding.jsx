import React from "react";

export default function AgeShieldOnboarding() {
  const GOOGLE_FORM_URL =
    "https://docs.google.com/forms/d/e/YOUR_FORM_ID/viewform";

  return (
    <div className="min-h-screen bg-[#f6f7f4] flex items-center justify-center p-4">
      <div className="max-w-7xl w-full bg-white shadow-xl rounded-2xl overflow-hidden grid grid-cols-1 md:grid-cols-2">

        {/* LEFT SECTION — CONTENT */}
        <div className="p-8 md:p-10">
          <div className="space-y-6">

            <h1 className="text-3xl font-serif text-green-800">
              AgeShield™
            </h1>

            <p className="text-gray-700 text-lg">
              Doctor-Led Preventive Longevity Programmes
            </p>

            <hr />

            <p className="text-gray-800 font-medium">
              Protect health before disease begins.
            </p>

            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>Most healthcare reacts <strong>after</strong> disease appears</li>
              <li>Most health check-ups give reports — not direction</li>
            </ul>

            <p className="text-gray-700">
              <strong>AgeShield™ works before decline begins</strong>, using deep
              diagnostics, sleep science, and structured medical guidance.
            </p>

            <blockquote className="italic text-green-700 border-l-4 border-green-600 pl-4">
              This is not a check-up. This is health stewardship.
            </blockquote>

            <hr />

            <h2 className="text-xl font-semibold text-gray-900">
              What the 1-Year Programme Includes
            </h2>

            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>Genetic & epigenetic diagnostics</li>
              <li>Comprehensive blood analysis</li>
              <li>Sleep assessment & optimisation</li>
              <li>Doctor-led interpretation & planning</li>
              <li>Continuous health monitoring</li>
              <li>Mid-year reassessment</li>
              <li>Annual personalised health roadmap</li>
            </ul>

            <p className="text-sm text-gray-500">
              AgeShield™ is a preventive health optimisation programme. It does not
              replace emergency or primary medical care.
            </p>

          </div>
        </div>

        {/* RIGHT SECTION — ONBOARDING */}
        <div className="bg-[#f9faf7] p-8 md:p-10 flex flex-col justify-center">
          <div className="space-y-6">

            <h2 className="text-3xl font-bold text-gray-900">
              AgeShield – 1-Year Total Body Optimisation Programme
            </h2>

            <p className="text-gray-700 text-lg">
              This form initiates your onboarding into the
              <strong> AgeShield™ 1-Year Total Body Optimisation Programme</strong>.
            </p>

            <p className="text-gray-600">
              A short suitability and intake process is required before enrolment.
              This ensures the programme is appropriate for your health goals.
            </p>

            <button
              onClick={() => window.open(GOOGLE_FORM_URL, "_blank")}
              className="mt-4 w-full bg-green-700 hover:bg-green-800 text-white font-semibold py-4 rounded-xl transition"
            >
              Begin Onboarding
            </button>

            <p className="text-xs text-gray-500 text-center">
              Takes 2–3 minutes • No obligation
            </p>

          </div>
        </div>

      </div>
    </div>
  );
}
