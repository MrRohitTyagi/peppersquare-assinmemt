"use client";

import Footer from "@/components/Footer";
import Filters from "@/components/Filters";
import Banner from "@/components/Banner";
import Navbar from "@/components/Navbar";
import Events from "@/components/Events";

import { useSearchParams } from "next/navigation";

const App = () => {
  const searchParams = useSearchParams();

  const currentFilter = searchParams.get("category") || "ALL";

  // const { currentFilter } = useFilters();
  return (
    <div className="min-h-screen flex flex-col">
      {/* Navigation */}
      <Navbar />

      <main className="flex-1">
        {/* Banner Section */}
        <Banner />

        {/* Filters */}
        <Filters currentFilter={currentFilter} />
        <Events currentFilter={currentFilter} />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};
export default App;
