import Banner from "./components/Banner";
import Community from "./components/Community";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Introduction from "./components/Introduction";
import Navbar from "./components/Navbar";
import Tools from "./components/Tools";
import Workflow from "./components/Workflow";

const App = () => {
	return (
		<>
			<Navbar />
			<Hero />
			<Introduction />
			<Tools />
			<Banner />
			<Workflow />
			<Community />
			<Footer />
		</>
	);
};

export default App;
