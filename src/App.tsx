import CyberDefense from "./components/CyberDefense";
import HowItWorks from "./components/HowItWorks";
import Navigation from "./components/Navigation";
import OnlineJustice from "./components/OnlineJustice";
import ReportFraud from "./components/ReportFraud";

function App() {
  return (
    <div className="px-14">
      <Navigation />
      <ReportFraud />
      <HowItWorks />
      <OnlineJustice />
      <CyberDefense />
    </div>
  );
}

export default App;
