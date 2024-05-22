import { useEffect, useState } from "react";
import "./App.css";
import Intro from './components/Intro'
import Questions from './components/Questions'

function App() {

  const [hasStarted, setHasStarted] = useState(false);

  return (
    <div>
      <Intro startTest={() => setHasStarted(true)} style={{display: hasStarted ? 'none' : 'flex'}} />
      {hasStarted && <Questions />}
    </div>
  );
}

export default App;
