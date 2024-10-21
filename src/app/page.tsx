import { FooterComponent } from "./components/footer";
import { PersonalizedServices } from "./components/sessions/personalized_services";
import { HomeSession } from "./components/sessions/home";
import { PowerfullFeatures } from "./components/sessions/powerful_features";
import { MakeSomethingAwesome } from "./components/sessions/make_something";
import { PowerNeed } from "./components/sessions/power_need";

export default function Home() {
  return (
    <div className="w-full h-full min-h-screen overflow-x-hidden relative">
      <main className="flex flex-col w-full h-full">
        <HomeSession />

        <PersonalizedServices />

        <PowerfullFeatures />

        <MakeSomethingAwesome />

        <PowerNeed />
      </main>

      <FooterComponent />
    </div>
  );
}
