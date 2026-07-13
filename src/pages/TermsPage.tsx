import { LegalLayout } from '../components/LegalLayout';

export function TermsPage() {
  const sections = [
    {
      id: "acceptance-of-terms",
      title: "Acceptance of Terms",
      content: (
        <>
          <p>
            By accessing and using the MT Production website, you accept and agree to be bound by the terms and provision of this agreement. In addition, when using this website's particular services, you shall be subject to any posted guidelines or rules applicable to such services.
          </p>
          <p className="mt-4">
            ANY PARTICIPATION IN THIS SITE WILL CONSTITUTE ACCEPTANCE OF THIS AGREEMENT. IF YOU DO NOT AGREE TO ABIDE BY THE ABOVE, PLEASE DO NOT USE THIS SITE.
          </p>
        </>
      )
    },
    {
      id: "intellectual-property",
      title: "Intellectual Property Rights",
      content: (
        <>
          <p>
            All content published and made available on our Site is the property of MT Production and the site's creators. This includes, but is not limited to images, text, logos, documents, downloadable files and anything that contributes to the composition of our Site.
          </p>
          <p className="mt-4">
            You may not modify, publish, transmit, participate in the transfer or sale, create derivative works, or in any way exploit, any of the content, in whole or in part, without the express written permission of MT Production.
          </p>
        </>
      )
    },
    {
      id: "user-contributions",
      title: "User Contributions",
      content: (
        <>
          <p>
            Users may post the following information on our Site:
          </p>
          <ul className="list-disc pl-6 space-y-2 mt-4 text-mt-muted">
            <li>Public comments and reviews</li>
            <li>Contact forms and inquiries</li>
            <li>Project proposals</li>
          </ul>
          <p className="mt-4">
            By posting publicly on our Site, you agree not to act illegally or violate these Terms and Conditions. We reserve the right to remove any content we deem inappropriate or offensive.
          </p>
        </>
      )
    },
    {
      id: "limitation-of-liability",
      title: "Limitation of Liability",
      content: (
        <>
          <p>
            MT Production and our directors, officers, agents, employees, subsidiaries, and affiliates will not be liable for any actions, claims, losses, damages, liabilities and expenses including legal fees from your use of the Site.
          </p>
          <p className="mt-4">
            While we strive for cinematic excellence, we cannot guarantee that our website will be uninterrupted, error-free, or completely secure. You agree that you use our services at your own risk.
          </p>
        </>
      )
    },
    {
      id: "governing-law",
      title: "Governing Law",
      content: (
        <>
          <p>
            These Terms and Conditions are governed by the laws of the jurisdiction where MT Production is established. Any disputes related to these terms will be subject to the exclusive jurisdiction of the courts of that location.
          </p>
        </>
      )
    }
  ];

  return (
    <LegalLayout 
      title="Terms of Service"
      lastUpdated="July 13, 2026"
      metaDescription="Read the official Terms of Service governing the use of the MT Production website and services."
      sections={sections}
    />
  );
}
