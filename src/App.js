import React from 'react';
import Routes from './components/Routes';
import { MessageList } from './features/message/messageList';

function App() {
  return (
    <div className="App">
      <Routes />
      <MessageList />
    </div>
  );
}

export default App;
