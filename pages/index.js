import AppBar from "../components/appBar/appBar.js";
import TopContent from "../components/topContent/topContent.js";
import SecondContent from "../components/secondContent/secondContent.js";
import ThirdContent from "../components/thirdContent/thirdContent.js";
import FourthContent from "../components/fourthContent/fourthContent.js";
import FifthContent from "../components/fifthContent/fifthContent.js";
import EndContent from "../components/endContent/endContent.js";
import Footer from "../components/footer/footer.js";

export default function Home() {
  return (
    <div>
      <AppBar />
      <TopContent />
      <SecondContent />
      <ThirdContent />
      <FourthContent />
      <FifthContent />
      <EndContent />
      <Footer />
    </div>
  );
}
