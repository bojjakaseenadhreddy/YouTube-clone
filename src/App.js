import { Provider } from "react-redux";
import "./App.css";
import Header from "./components/Header";
import VideoList from "./components/video/VideoList";
import AppStore from "./utils/store/AppStore";

function App() {
  return (
    <Provider store={AppStore}>
      <div className="App">
        <Header />
        <VideoList />
      </div>
    </Provider>
  );
}

export default App;
