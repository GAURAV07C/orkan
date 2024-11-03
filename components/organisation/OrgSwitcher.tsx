"use client";

import { usePathname } from "next/navigation";
import {
  OrganizationSwitcher,
  SignedIn,
  useOrganization,
  useUser,
} from "@clerk/nextjs";

const OrgSwitcher = () => {
  const { isLoaded, organization } = useOrganization();
  const { isLoaded: isUserLoaded } = useUser();
  const pathname = usePathname();

  if (pathname === "/") {
    return null;
  }

  if (!isLoaded || !isUserLoaded) {
    return null;
  }

  const organizationSlug = organization?.slug || "";
  const createOrganizationMode = pathname === "/onboarding" ? "navigation" : (undefined );

  return (
    <div className="flex justify-end mt-1">
      <SignedIn>
        <OrganizationSwitcher
          hidePersonal
          createOrganizationMode={createOrganizationMode}
          afterCreateOrganizationUrl={`/organization/${organizationSlug}`}
          afterSelectOrganizationUrl={`/organization/${organizationSlug}`}
          createOrganizationUrl="/onboarding"
          appearance={{
            elements: {
              organizationSwitcherTrigger: "border border-gray-300 rounded-md px-5 py-2",
              organizationSwitcherTriggerIcon: "text-white",
            },
          }}
        />
      </SignedIn>
    </div>
  );
};

export default OrgSwitcher;