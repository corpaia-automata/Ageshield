const Index = () => {
  const GOOGLE_FORM_URL =
    "https://docs.google.com/forms/d/e/1FAIpQLSeOJTISyVLIVuP8AkWwK1oqrPjVVb3ldGuvNa0hBx7hUNanPQ/viewform?usp=publish-editor";

  return (
    <div className="min-h-screen bg-[#fafaf8] flex items-center justify-center p-6">

      {/* CENTERED CONTAINER */}
      <div className="w-full max-w-7xl grid grid-cols-1 md:grid-cols-2">

        {/* ================= LEFT : WHITE ================= */}
        <div className="bg-white p-8 md:p-10">
          <div className="space-y-4">

            <img src="/mendiv.png" alt="Mendiv Logo" width="120" />
            <img src="/ageshield.png" alt="AgeShield Logo" width="250" />

            <p className="text-green-700 text-lg font-bold">
              Doctor-Led Preventive Longevity Programmes
            </p>

            <hr />

            <p className="text-green-700 font-bold text-2xl">
              Protect health before disease begins.
            </p>

            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>Most healthcare reacts <strong>after</strong> disease appears</li>
              <li>Most health check-ups give reports — not direction</li>
            </ul>

            <p className="text-gray-700">
              <strong>AgeShield™ works before decline begins</strong>, using{" "}
              <strong>deep diagnostics, sleep science, and structured medical guidance.</strong>
            </p>

            <hr />

            <h2 className="text-2xl font-semibold text-green-700">
              What the 1-Year Programme Includes
            </h2>

            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li><strong>Deep health diagnostics</strong> (genetic, epigenetic, gut microbiome)</li>
              <li>Proper sleep and breathing evaluation</li>
              <li><strong>Doctor-led interpretation & planning</strong></li>
              <li>Continuous health monitoring throughout the year</li>
              <li><strong>Mid-year reassessment</strong> to measure real biological change</li>
              <li>Annual review with a long-term health roadmap</li>
            </ul>

            <hr />

            <h2 className="text-2xl font-semibold text-green-700">
              Sleep Is a Core Pillar of Longevity
            </h2>

            <p className="text-sm text-gray-500">
              Poor sleep silently accelerates ageing, metabolic dysfunction, and long-term disease risk.
            </p>

            <p className="text-sm text-gray-500">AgeShield™ includes:</p>

            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>A 1–2 night stay at a premium resort</li>
              <li><strong>Overnight polysomnography</strong> (sleep study)</li>
              <li>Review by a sleep and pulmonary specialist</li>
            </ul>

            <hr />

            <h2 className="text-2xl font-semibold text-green-700">
              AgeShield™ is designed for:
            </h2>

            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>Doctors and healthcare professionals</li>
              <li>Founders, CXOs, and senior professionals</li>
              <li>Individuals aged approximately 35–65 years</li>
              <li>People who value prevention over treatment</li>
            </ul>

            <hr />

            <p className="text-sm text-gray-500">
              AgeShield™ is a <strong>preventive health optimisation programme.</strong>{" "}
              It does not replace emergency or primary medical care.
            </p>

          </div>
        </div>

        {/* ================= RIGHT : LIGHT GRAY ================= */}
        <div className="bg-[#f9faf7] p-8 md:p-10 flex items-center">
          <div className="space-y-6">

            <h2 className="text-4xl font-bold text-gray-900">
              AgeShield – 1-Year Total Body Optimisation Programme
            </h2>

            <p className="text-gray-700 text-lg">
              This form initiates your onboarding into the{" "}
              <strong>AgeShield™ 1-Year Total Body Optimisation Programme</strong>.
            </p>

            <p className="text-gray-600">
              A short suitability and intake process is required before enrolment.
              This ensures the programme is appropriate for your health goals.
            </p>

            <button
              onClick={() => window.open(GOOGLE_FORM_URL, "_blank")}
              className="w-full bg-green-700 hover:bg-green-800 text-white font-semibold py-4 rounded-xl transition"
            >
              Start Your Journey
            </button>

            <p className="text-xs text-gray-500 text-center">
              Takes 2–3 minutes • No obligation
            </p>

          </div>
        </div>

      </div>
    </div>
  );
};

export default Index;
