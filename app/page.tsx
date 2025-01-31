import Footer from "@/components/Footer";
import Filters from "@/components/Filters";
import Banner from "@/components/Banner";
import Navbar from "@/components/Navbar";
import Events from "@/components/Events";

export default function EventsGallery() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Navigation */}
      <Navbar />

      <main className="flex-1">
        {/* Banner Section */}
        <Banner />

        {/* Filters */}
        <Filters />
        <Events />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
