import React from "react";

function Loading() {
  return (
    <section className="w-full flex justify-center items-center">
      <img src={'/loading.svg'} className="w-12 h-12" alt="loading..." />
    </section>
  );
}

export default Loading;
