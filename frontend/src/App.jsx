import { useState } from "react";
import Navbar from "./components/Navbar";
import HomeContent from "./components/HomeContent";
import MerchCatalog from "./components/MerchCatalog";
import ReservationForm from "./components/ReservationForm";
import Footer from "./components/Footer";

// URL backend
export const backendUrl = "http://localhost:4000";

function App() {
  const [page, setPage] = useState("home");

  return (
    <>
      {/* Navbar */}
      <Navbar setPage={setPage} />

      {/* Main Content */}
      <main className="pt-15">
        {page === "home" && <HomeContent setPage={setPage} />}
        {page === "merch" && <MerchCatalog />}
        {page === "reservation" && <ReservationForm />}
      </main>

      {/* Footer (always visible) */}
      <Footer />
    </>
  );
}

export default App;
