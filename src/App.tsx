// import AboutSection from "./components/AboutSection";
// import CardSection from "./components/CardSection";
// import Footer from "./components/Footer";
// import Header from "./components/Header";
// import HeroSection from "./components/HeroSection";
// import LocationSection from "./components/LocationSection";
// import TicketSection from "./components/PricingSection";
// import { ScrollToTop } from "./components/ScrollToTop";
// import SubscriptionSection from "./components/SubscriptionSection";
// import WhoSection from "./components/WhoSection";

function App() {
  return (
    <main className="bg-indigo-950 flex flex-col h-screen items-center justify-center">
      {/*<div className="relative min-h-screen overflow-hidden bg-neutral-950 text-white">
        <div
          className="
        absolute inset-0
        bg-[url('/bg.jpg')]
        bg-cover
        bg-center
        "
        />

        <div className="absolute inset-0 bg-black/20" />

        <Header />

       <HeroSection />
      </div>
      <CardSection />
      <AboutSection />
      <SubscriptionSection />
      <WhoSection />
      <LocationSection />
      <TicketSection />
      <ScrollToTop />
      <Footer /> */}
      <img src="/logo_in.png" alt="Logo instituto nanno cosmética." width={200} className="mb-12"/>
      <p className="text-white text-6xl">Em Breve um novo workshop para você!</p>
    </main>
  );
}

export default App;
