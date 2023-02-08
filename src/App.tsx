import Contact from "./components/Contact";
import CyberDefense from "./components/CyberDefense";
import FAQ from "./components/FAQ";
import HowItWorks from "./components/HowItWorks";
import Navigation from "./components/Navigation";
import OnlineJustice from "./components/OnlineJustice";
import ReportFraud from "./components/ReportFraud";

function App() {
  return (
    <div className="px-14 max-w-[90rem] mx-auto">
      <Navigation />
      <ReportFraud />
      <HowItWorks />
      <OnlineJustice />
      <CyberDefense />
      <Contact />
      <FAQ />
    </div>
  );
}

export default App;
