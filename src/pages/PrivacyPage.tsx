import { LegalLayout } from '../components/LegalLayout';

export function PrivacyPage() {
  const sections = [
    {
      id: "information-we-collect",
      title: "Information We Collect",
      content: (
        <>
          <p>
            At MT Production, we collect information to provide better services to all our users. We collect information in the following ways:
          </p>
          <ul className="list-disc pl-6 space-y-2 mt-4 text-mt-muted">
            <li><strong className="text-white">Information you give us:</strong> For example, our contact forms require you to provide personal information, like your name, email address, and telephone number.</li>
            <li><strong className="text-white">Information we get from your use of our services:</strong> We collect information about the services that you use and how you use them, like when you visit our website or view our project galleries.</li>
            <li><strong className="text-white">Device Information:</strong> We collect device-specific information (such as your hardware model, operating system version, unique device identifiers, and mobile network information).</li>
          </ul>
        </>
      )
    },
    {
      id: "how-we-use-information",
      title: "How We Use Information",
      content: (
        <>
          <p>
            We use the information we collect from all of our services to provide, maintain, protect and improve them, to develop new ones, and to protect MT Production and our users. We also use this information to offer you tailored content – like giving you more relevant project updates and studio news.
          </p>
          <p className="mt-4">
            We may use your email address to inform you about our services, such as letting you know about upcoming film releases, casting calls, or changes to our terms, conditions, and policies.
          </p>
        </>
      )
    },
    {
      id: "information-we-share",
      title: "Information We Share",
      content: (
        <>
          <p>
            We do not share personal information with companies, organizations and individuals outside of MT Production unless one of the following circumstances applies:
          </p>
          <ul className="list-disc pl-6 space-y-2 mt-4 text-mt-muted">
            <li><strong className="text-white">With your consent:</strong> We will share personal information with companies, organizations or individuals outside of MT Production when we have your consent to do so.</li>
            <li><strong className="text-white">For external processing:</strong> We provide personal information to our affiliates or other trusted businesses or persons to process it for us, based on our instructions and in compliance with our Privacy Policy.</li>
            <li><strong className="text-white">For legal reasons:</strong> We will share personal information if we have a good-faith belief that access, use, preservation or disclosure of the information is reasonably necessary to meet any applicable law, regulation, legal process or enforceable governmental request.</li>
          </ul>
        </>
      )
    },
    {
      id: "data-security",
      title: "Data Security",
      content: (
        <>
          <p>
            We work hard to protect MT Production and our users from unauthorized access to or unauthorized alteration, disclosure or destruction of information we hold. In particular:
          </p>
          <ul className="list-disc pl-6 space-y-2 mt-4 text-mt-muted">
            <li>We encrypt many of our services using SSL.</li>
            <li>We review our information collection, storage and processing practices, including physical security measures, to guard against unauthorized access to systems.</li>
            <li>We restrict access to personal information to MT Production employees, contractors and agents who need to know that information in order to process it for us.</li>
          </ul>
        </>
      )
    },
    {
      id: "changes",
      title: "Changes",
      content: (
        <>
          <p>
            Our Privacy Policy may change from time to time. We will not reduce your rights under this Privacy Policy without your explicit consent. We will post any privacy policy changes on this page and, if the changes are significant, we will provide a more prominent notice.
          </p>
        </>
      )
    }
  ];

  return (
    <LegalLayout 
      title="Privacy Policy"
      lastUpdated="July 13, 2026"
      metaDescription="Read the official Privacy Policy of MT Production and learn how we collect, use, and protect your information."
      sections={sections}
    />
  );
}
