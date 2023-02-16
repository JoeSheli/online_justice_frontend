import Contact from "components/Contact";
import CyberDefense from "components/CyberDefense";
import FAQ from "components/FAQ";
import Footer from "components/Footer";
import HowItWorks from "components/HowItWorks";
import Navigation from "components/Navigation";
import OnlineJustice from "components/OnlineJustice";
import ReportFraud from "components/ReportFraud";

function App() {
  return (
    <>
      <Navigation />
      <div className="md:px-14 px-5 min-h-screen max-w-[90rem] mx-auto">
        <ReportFraud />
        <HowItWorks />
        <OnlineJustice />
        <CyberDefense />
        <Contact />
        <FAQ />
      </div>
      <Footer />
      <div className="text-sm text-center my-5 px-5">
        © 2022 OnlineJustice is owned and operated by Orange INF Tools LTD
        #14186929 registered at 167-169 Great Portland Street, 5th Floor, London
        W1W 5PF.
      </div>
    </>
  );
}

export default App;
