import { useEffect, useState } from 'react';

import reactLogo from './assets/react.svg';

import viteLogo from '/vite.svg';

import './App.css';
import { Button } from './components/ui/button';
import i18n from './localization/i18n';

function App() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    document.documentElement.dir = i18n.dir();
  }, []);
  return (
    <div className="App flex flex-col justify-center items-center gap-4">
      <div className="flex flex-row justify-center items-center">
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card flex gap-4 flex-col">
        <Button onClick={() => setCount((count) => count + 1)}>count is {count}</Button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">Click on the Vite and React logos to learn more</p>
    </div>
  );
}

export default App;
