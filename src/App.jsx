import { lazy, Suspense } from "react";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";

const BelowFold = lazy(() => import("./components/BelowFold"));
const Footer = lazy(() =>
  import("./components/Footer").then((mod) => ({ default: mod.Footer }))
);

export const App = () => {
  return (
    <div className="min-h-screen flex flex-col bg-[#FAF9F5] text-[#181715]">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <Suspense fallback={<div className="min-h-screen" aria-hidden="true" />}>
          <BelowFold />
        </Suspense>
      </main>
      <Suspense fallback={null}>
        <Footer />
      </Suspense>
    </div>
  );
};

export default App;
