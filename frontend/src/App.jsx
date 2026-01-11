import { useState } from "react";
import Navbar from "./components/Navbar";
import HomeContent from "./components/HomeContent";
import MerchCatalog from "./components/MerchCatalog";
import ReservationForm from "./components/ReservationForm";
import Footer from "./components/Footer";

// URL backend
export const backendUrl = 'http://localhost:4000';

function App() {
  const [page, setPage] = useState("home");

  return (
    <>
      {/* Navbar */}
      <Navbar setPage={setPage} />

      {/* Konten utama */}
      <div>
        {page === "home" && <HomeContent />}
        {page === "merch" && <MerchCatalog />}
        {page === "reservation" && <ReservationForm />}
      </div>

      {/* Footer */}
      <Footer />
    </>
  );
}

export default App;
