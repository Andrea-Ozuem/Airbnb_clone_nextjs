import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import InspirationSection from "@/components/InspirationSection";
import Listings from "@/components/Listings";
import { Suspense } from 'react';
import { ListingsSkeleton } from "@/components/Skeletons";

export default function Home() {
  return (
    <>
      <div className="w-full">
        <Header />
        <main >
          <Suspense fallback={<ListingsSkeleton />}>
            <Listings />
            <InspirationSection />
            <Footer/>
          </Suspense>
        </main>
        
      </div>
    </>
  );
}

// TO DO:
// 1. Devtools and measure performace: document it
// 2. ways to optimise performance of web app: lazy loading/code splitting, suspense, nadia JS performance video
// 3. Add pagination to listings