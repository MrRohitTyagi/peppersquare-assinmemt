import { Suspense } from "react";

import Footer from "@/components/Footer";
import Filters from "@/components/Filters";
import Banner from "@/components/Banner";
import Navbar from "@/components/Navbar";
import Events from "@/components/Events";

const App = () => {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Navigation */}
      <Navbar />

      <main className="flex-1">
        {/* Banner Section */}
        <Banner />

        <Suspense>
          {/* Filters */}
          <Filters />

          {/* Events */}
          <Events />
        </Suspense>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};
export default App;
