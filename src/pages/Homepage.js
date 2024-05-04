import Navbar from "../components/Navbar";
import RandomProduct from "../components/RandomProduct";
import Sidebar from "../components/Sidebar";
import { HomepageProvider } from "../contexts/HomepageContexts";

function Homepage() {
  return (
    <HomepageProvider>
      <Navbar />
      <hr />
      <div className="grid  grid-cols-[auto_1fr_auto] gap-20  mx-28  h-72  ">
        <Sidebar />
        <RandomProduct />
      </div>
    </HomepageProvider>
  );
}

export default Homepage;
