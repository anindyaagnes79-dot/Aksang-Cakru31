import React from "react";

const ReservationForm = () => {
  return (
    <section className="min-h-screen bg-black flex justify-center py-20">
      <div className="w-full max-w-3xl">
        <iframe
          title="HEARMONY RESERVATION"
          src="https://form.jotform.com/260093924222452"
          className="w-full min-h-[900px] border-none block mx-auto"
          allow="geolocation; microphone; camera; fullscreen; payment"
          scrolling="auto"
        />
      </div>
    </section>
  );
};

export default ReservationForm;
