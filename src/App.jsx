import { useState } from 'react';
import './App.css';
import { GameBoard } from './Components/GameBoard';
import { ScoreBoard } from './Components/ScoreBoard';
import './Components/styles/final-score.css';
import { Images } from './assets/images';
import { FinalScore } from './Components/FinalScore';

const initialFish = [
  { name: 'trout', url: Images.trout },
  { name: 'salmon', url: Images.salmon },
  { name: 'tuna', url: Images.tuna },
  { name: 'shark', url: Images.shark },
];

function App() {
  const [userEntry, setUserEntry] = useState('');
  const [fish, setFish] = useState(initialFish);
  const [incorrectCount, setIncorrectCount] = useState(0);
  const [correctCount, setCorrectCount] = useState(0);
  const [correctFish, setCorrectFish] = useState(fish[0]?.name);
  

  const matchFish = (e) => {
    e.preventDefault();
    const filter = fish.filter((f) => f.name !== userEntry);
    setFish(filter);
    if (correctFish === userEntry) {
      setCorrectCount(correctCount + 1);
    } else {
      setIncorrectCount(incorrectCount + 1);
    }
    setCorrectFish(filter[0]?.name);
    setUserEntry('');
  };

  return (
    <div className="App">
      <header>
        <ScoreBoard
          incorrectCount={incorrectCount}
          correctCount={correctCount}
          fish={fish}
        />
        {!fish.length && <FinalScore correctCount={correctCount} />}
        <GameBoard
          fish={fish}
          setUserEntry={setUserEntry}
          matchFish={matchFish}
          userEntry={userEntry}
        />
      </header>
    </div>
  );
}

export default App;
