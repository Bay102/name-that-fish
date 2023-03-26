import { useState } from 'react';
import './App.css';
import { GameBoard } from './Components/GameBoard';
import { ScoreBoard } from './Components/ScoreBoard';
import './Components/styles/final-score.css';
import { Images } from './assets/images';

const initialFish = [
  {
    name: 'trout',
    url: Images.trout,
  },
  {
    name: 'salmon',
    url: Images.salmon,
  },
  {
    name: 'tuna',
    url: Images.tuna,
  },
  {
    name: 'shark',
    url: Images.shark,
  },
];

function App() {
  const [userEntry, setUserEntry] = useState('');
  const [fish, setFish] = useState(initialFish);
  const [incorrectCount, setIncorrectCount] = useState(0);
  const [correctCount, setCorrectCount] = useState(0);
  const [correctFish, SetCorrectFish] = useState(
    fish.length ? fish[0].name : null
  );


  const matchFish = (e) => {
    e.preventDefault();
    if (correctFish === userEntry) {
      const filter = fish.filter((fish) => fish.name !== userEntry);
      setFish(filter);
      setCorrectCount(correctCount + 1);
      SetCorrectFish(filter.length ? filter[0].name : null);
      setUserEntry("");
    } else {
      const filter = fish.filter((fish) => fish.name !== userEntry);
      setFish(filter);
      setIncorrectCount(incorrectCount + 1);
      SetCorrectFish(filter.length ? filter[0].name : null);
      setUserEntry("");
    }
  };

  return (
    <div className="App">
      <header>
        <ScoreBoard
          incorrectCount={incorrectCount}
          correctCount={correctCount}
          fish={fish}
        />
        <GameBoard
        fish={fish}
          // currentFish={currentFish}
          setUserEntry={setUserEntry}
          matchFish={matchFish}
          userEntry={userEntry}
        />
      </header>
    </div>
  );
}

export default App;
