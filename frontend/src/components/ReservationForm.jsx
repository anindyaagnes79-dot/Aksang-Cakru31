function ReservationForm() {
  return (
    <section className="min-h-screen bg-black text-white pt-[80px] pb-40">
      <div className="max-w-5xl mx-auto min-h-[900px]">
        <iframe
          title="HEARMONY RESERVATION"
          src="https://form.jotform.com/260093924222452"
          className="w-full min-h-[900px] border-none"
          allow="geolocation; microphone; camera; fullscreen; payment"
          scrolling="auto"
        />
      </div>
    </section>
  );
}

export default ReservationForm;
