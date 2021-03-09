// import logo from './logo.svg';
import './App.scss';
import './global-styles/app-layout.scss';
import TopBar from './components/TopBar';
import BrowserView from 'react-electron-browser-view';

function App() {
  return (
    <div className="app flex vertical">
      <TopBar />
      <BrowserView className="spacer"
        // Your source
        src="https://www.google.com"

        // Using events
        onDidAttach={() => {
          console.log("BrowserView attached");
        }}
        onUpdateTargetUrl={() => {
          console.log("Updated Target URL");
        }}

        // Providing styling for the container element
        // style={{
        //   height: 200,
        // }}
      />
    </div>
  );
}

export default App;
