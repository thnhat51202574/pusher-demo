import logo from './logo.svg';
import './App.css';
import {useEffect} from "react";
import pusher from "./pusherConfig";

function App() {
    useEffect(() => {
        const channelName = 'private-USER-suek61MwnGmlqikunMOB';
        const event = 'EVENT';
        const channel = pusher.subscribe(channelName);
        channel.bind(event, (data) => {
            console.log('Received event:', data);
            // Handle the event data as needed
        });

        // Clean up the subscription on component unmount
        return () => {
            channel.unbind(event);
            pusher.unsubscribe(channelName);
        };
    }, []);

    return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
