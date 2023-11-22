import NoResult from "@/components/shared/NoResult";
import React from "react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Jobs | DevFlow",
};
const Page = () => {
  return (
    <>
      <NoResult
        title="Coming Soon!"
        description="We are working on implementing this feature. Stay tuned! this is coming soon."
        link="/"
        linkTitle="Back to questions"
      />
    </>
  );
};

export default Page;
