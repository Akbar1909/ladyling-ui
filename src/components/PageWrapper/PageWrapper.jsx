import React from "react";

const PageWrapper = ({ children }) => {
  return (
    <main className="bg-white">
      <section className="bg-white">
        <div className="mx-auto max-w-screen-xl  px-4 py-8 lg:py-8 flex justify-center flex-col items-center">
          {children}
        </div>
      </section>
    </main>
  );
};

export default PageWrapper;
