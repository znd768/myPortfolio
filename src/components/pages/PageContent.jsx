import React from "react";

const PageContent = ({ children }) => {
  return (
    <section className="flex min-h-[calc(100vh-5rem)] flex-col px-6 py-4 lg:p-8 xl:p-10">
      {children}
    </section>
  );
};

export default PageContent;
