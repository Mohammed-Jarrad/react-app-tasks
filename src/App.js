import "./App.scss";
import TopSection from "./Components/TopSection/TopSection";
import LettersBoard from "./Components/LettersBoard/LettersBoard";
import SideBar from "./Components/SideBar/SideBar";
import TypeLetter from "./Components/TypeLetter/TypeLetter";

function App() {
	return (
		<div className="app">
			<TopSection />
			<div className="main-content">
				<LettersBoard />
				<SideBar />
			</div>
			<TypeLetter />
		</div>
	);
}

export default App;
