import { Link } from "react-router-dom";

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen p-7 max-w-6xl mx-auto">
      <h2 className="text-2xl md:text-4xl mb-11">Privacy Policy</h2>

      <div>
        <h3 className="text-xl md:text-2xl mb-5">
          Information Collection and Use
        </h3>
        <p className="text-gray-500 mb-4 md:text-lg">
          We may collect personal information that you voluntarily provide to us
          when you use our portfolio landing page. This information may include
          your name, email address, phone number, and any other information you
          choose to provide.
        </p>
        <p className=" text-lg mb-2">We may use this information to:</p>
        <ul className="list-disc ml-5 text-gray-500 mb-4 md:text-lg">
          <li>Respond to your inquiries or requests.</li>
          <li>Customize and improve our portfolio landing page.</li>
          <li>
            Send you updates, newsletters, or other communications related to
            our services.
          </li>
        </ul>
      </div>

      <div>
        <h3 className="text-xl md:text-2xl mb-5">
          Information Sharing and Disclosure
        </h3>
        <p className="text-gray-500 mb-4 md:text-lg">
          We may share your personal information with third-party service
          providers or partners who assist us in operating our portfolio landing
          page, conducting our business, or servicing you. These third parties
          are contractually obligated to keep your information confidential and
          to use it only for the purposes for which we disclose it to them.
        </p>
        <p className=" text-lg mb-2">
          We may also disclose your personal information:
        </p>
        <ul className="list-disc ml-5 text-gray-500 mb-4 md:text-lg">
          <li>
            To comply with applicable laws, regulations, or legal processes.
          </li>
          <li>
            To protect our rights, property, or safety, or the rights, property,
            or safety of others.
          </li>
          <li>In connection with a merger, acquisition, or sale of assets.</li>
        </ul>
      </div>

      <div>
        <h3 className="text-xl md:text-2xl mb-5">Data Security</h3>
        <p className="text-gray-500 mb-4 md:text-lg">
          We take reasonable measures to protect the personal information we
          collect from unauthorized access, use, or disclosure. However, please
          be aware that no method of transmission over the internet or
          electronic storage is 100% secure.
        </p>
      </div>

      <div>
        <h3 className="text-xl md:text-2xl mb-5">Links to Other Websites</h3>
        <p className="text-gray-500 mb-4 md:text-lg">
          This portfolio landing page may contain links to other websites that
          are not operated by us. We have no control over, and assume no
          responsibility for, the content, privacy policies, or practices of any
          third-party websites or services.
        </p>
      </div>

      <div>
        <h3 className="text-xl md:text-2xl mb-5">
          Changes to This Privacy Policy
        </h3>
        <p className="text-gray-500 mb-4 md:text-lg">
          We may update our Privacy Policy from time to time. We will notify you
          of any changes by posting the new Privacy Policy on this page.
        </p>
      </div>

      <div>
        <h3 className="text-xl md:text-2xl mb-5">Contact Us</h3>
        <p className="text-gray-500 mb-4 md:text-lg">
          If you have any questions or concerns about this Privacy Policy,
          please contact us at{" "}
          <Link
            className="text-blue-500 hover:underline"
            to="mailto:rodelgabriel45@gmail.com"
          >
            rodelgabriel45@gmail.com
          </Link>
          .
        </p>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
