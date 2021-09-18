import AppBar from "../components/appBar/appBar.js";
import TopContent from "../components/topContent/topContent.js";
import SecondContent from "../components/secondContent/secondContent.js";
import ThirdContent from "../components/thirdContent/thirdContent.js";

export default function Home() {
  return (
    <div>
      <AppBar />
      <TopContent />
      <SecondContent />
      <ThirdContent />
    </div>
  );
}
