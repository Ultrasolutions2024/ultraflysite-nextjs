import React from "react";
import Link from "next/link";

const PrivacyPolicy = () => {
  return (
    <div className="max-w-4xl mx-auto p-4 text-justify">
      <h1 className="text-3xl font-bold text-center mb-4 text-black">Privacy Policy</h1>
      <p className="mb-4 text-black">
        Ultrafly Solutions Private Limited takes respect for privacy and
        personal information very seriously. Below is our Privacy Policy, which
        expands on our practices regarding collecting, using, disclosing, and
        protecting information while you access our website or utilize our
        service. Every time you access our website or use our service, you agree
        to the provisions of this policy.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-2 text-black">
        Information We Collect
      </h2>
      <p className="mb-4 text-black">
        <strong>Personal Information:</strong> We may collect personal
        information that you provide to us through various contact modes,
        including, but not limited to:
      </p>
      <ul className="list-disc pl-5 mb-4 text-black">
        <li>
          Name, email address, phone number, company name, and other
          identifiable details submitted through contact forms.
        </li>
        <li>
          Account Creation: Information you provide to register, including
          usernames and passwords.
        </li>
        <li>
          General Inquiry/Feedback: Personally identifiable information
          communicated when you contact us.
        </li>
      </ul>

      <p className="mb-4 text-black">
        <strong>Non-Personal Information:</strong> We automatically collect
        non-personal data when you visit our site, including:
      </p>
      <ul className="list-disc pl-5 mb-4 text-black">
        <li>Browser Type and Version.</li>
        <li>Device Information.</li>
        <li>IP Address.</li>
        <li>
          Browsing Behavior, such as pages visited and time spent on each page.
        </li>
      </ul>

      <h2 className="text-2xl font-semibold mt-6 mb-2 text-black">
        Cookies and Tracking Technologies
      </h2>
      <p className="mb-4 text-black">
        Our website uses cookies and similar technologies to enhance your
        browsing experience. You may control your cookie settings through your
        web browser preferences, though this may affect some functionalities of
        the website.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-2 text-black">
        How We Collect and Use Your Information
      </h2>
      <p className="mb-4 text-black">
        We collect and use your information for the following purposes:
      </p>
      <ul className="list-disc pl-5 mb-4 text-black">
        <li>To run, maintain, and improve our website and services.</li>
        <li>To personalize your experience.</li>
        <li>To provide customer support and respond to inquiries.</li>
        <li>To communicate updates about our services.</li>
        <li>To analyze website usage for improvements.</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-6 mb-2 text-black">
        Third-Party Service Providers
      </h2>
      <p className="mb-4 text-black">
        We do not sell or rent your information. We may share your information
        with trusted third-party vendors who assist in conducting our business,
        under contractual terms requiring them to maintain confidentiality.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-2 text-black">Legal Compliance</h2>
      <p className="mb-4 text-black">
        We may disclose your personal information if required by law or to
        respond to legal requests.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-2 text-black">Data Security</h2>
      <p className="mb-4 text-black">
        We implement adequate safeguards to protect your personal information
        against unauthorized access or disclosure. However, no transmission or
        storage method is 100% secure.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-2 text-black">Third-Party Links</h2>
      <p className="mb-4 text-black">
        Our site may contain links to third-party websites. We are not
        responsible for the content or privacy practices of these external
        sites.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-2 text-black">
        Your Rights and Choices
      </h2>
      <p className="mb-4 text-black">
        You have rights regarding your personal information, including:
      </p>
      <ul className="list-disc pl-5 mb-4 text-black">
        <li>Access to your information.</li>
        <li>Correction of inaccurate or incomplete data.</li>
        <li>Request for data erasure, where legally permitted.</li>
        <li>Withdrawal of consent for processing.</li>
        <li>
          To exercise these rights, please contact us at
          <Link
            href="mailto:info@ultraflysolutions.com"
            className="text-blue-500"
          >
            {" "}info@ultraflysolutions.com
          </Link>
        </li>
      </ul>

      <h2 className="text-2xl font-semibold mt-6 mb-2 text-black">
        Children&aposs Privacy
      </h2>
      <p className="mb-4 text-black">
        Our services are not intended for individuals under 13 years of age. We
        do not knowingly collect personal information from children under 13. If
        we become aware of such information, we will take steps to remove it.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-2 text-black">
        Changes to This Privacy Policy
      </h2>
      <p className="mb-4 text-black">
        We may update this Privacy Policy periodically. Changes will be posted
        on this page with a new effective date.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-2 text-black">Contact Us</h2>
      <p className="mb-4  text-black">
        For questions regarding this Privacy Policy or our data practices,
        please contact us at:
      </p>
      <p className="font-semibold text-black">Ultrafly Solutions Private Limited</p>
      <p className=" text-black">
        Email:
        <Link
          href="mailto:info@ultraflysolutions.com"
          className="text-blue-500"
        >
          info@ultraflysolutions.com
        </Link>
      </p>
      <p className=" text-black">Phone: +91 91500 01089</p>
      <p className=" text-black">Phone: +91 91500 01090</p>
      <p className=" text-black">Phone: +1 562 521 9684</p>
    </div>
  );
};

export default PrivacyPolicy;
