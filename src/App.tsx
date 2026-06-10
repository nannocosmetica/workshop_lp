import CardSection from "./components/CardSection";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import SubscriptionSection from "./components/SubscriptionSection";

function App() {
  return (
    <main className="bg-black">
      <div className="relative min-h-screen overflow-hidden bg-neutral-950 text-white">
        {/* Background */}
        <div
          className="
        absolute inset-0
        bg-[url('./bg.jpg')]
        bg-cover
        bg-center
        "
        />

        <div className="absolute inset-0 bg-black/20" />

        <Header />

        <HeroSection />
      </div>
      <CardSection />
      <SubscriptionSection />
    </main>
  );
}

export default App;
