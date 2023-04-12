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
  const [correct, setCorrect] = useState(0);
  const [correctFish, setCorrectFish] = useState(fish.length ? fish[0]?.name : null);

  // const matchFish = (e) => {
  //   e.preventDefault();
  //   const filter = fish.filter((f) => f.name !== userEntry);
  //   setFish(filter);
  //   if (correctFish === userEntry) {
  //     setCorrectCount(correctCount + 1);
  //   } else {
  //     setIncorrectCount(incorrectCount + 1);
  //   }
  //   setCorrectFish(filter[0]?.name);
  //   setUserEntry('');
  // };

  const matchFish = () => {
    if (correctFish === userEntry) {
      const filter = fish.filter((fish) => fish.name !== userEntry);
      setFish(filter);
      setCorrect(correct + 1);
      setCorrectFish(filter.length ? filter[0].name : null);
      setUserEntry('');
    } else {
      const filter = fish.filter((fish) => fish.name !== correctFish);
      setFish(filter);
      setIncorrectCount(incorrectCount + 1);
      setCorrectFish(filter.length ? filter[0].name : null);
      setUserEntry('');
    }
  };

  return (
    <div className="App">
      <header>
        {/* <ScoreBoard
          incorrectCount={incorrectCount}
          correct={correct}
          fish={fish}
        />
        {!fish.length && <FinalScore correct={correct} />}
        <GameBoard
          fish={fish}
          setUserEntry={setUserEntry}
          matchFish={matchFish}
          userEntry={userEntry}
        /> */}

        {fish.length ? (
          <div>
            <ScoreBoard correct={correct} incorrectCount={incorrectCount} fish={fish} />
            <GameBoard
               setUserEntry={setUserEntry}
               matchFish={matchFish}
              fish={fish}
              userEntry={userEntry}
            />
          </div>
        ) : (
          <FinalScore correct={correct} total={initialFish.length} />
        )}
      </header>
    </div>
  );
}

export default App;
