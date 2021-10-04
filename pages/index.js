import Header from "../components/appBar/header.js";
import Header2 from "../components/appBar/header2.js";
import TopContent from "../components/topContent/topContent.js";
import SecondContent from "../components/secondContent/secondContent.js";
import ThirdContent from "../components/thirdContent/thirdContent.js";
import FourthContent from "../components/fourthContent/fourthContent.js";
import BasicTabs from "../components/fifthContent/basicTabs.js";
import FifthContent from "../components/fifthContent/fifthContent.js";
import EndContent from "../components/endContent/endContent.js";
import Footer from "../components/footer/footer.js";

export default function Home() {
  return (
    <div>
      <Header />
      <Header2 />
      <TopContent />
      <SecondContent />
      <ThirdContent />
      <FourthContent />
      <BasicTabs />
      {/* <FifthContent /> */}
      <EndContent />
      <Footer />
    </div>
  );
}
