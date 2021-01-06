import React, { useState } from 'react';
import './Game.css';
import PlayerSubmissionForm from './PlayerSubmissionForm';
import FinalPoem from './FinalPoem';
import RecentSubmission from './RecentSubmission';

const Game = () => {
  const exampleFormat = FIELDS.map((field) => {
    if (field.key) {
      return field.placeholder;
    } else {
      return field;
    }
  }).join(' ');

  const[currentPlayer, setCurrentPlayer] = useState(1);
  const[playerSubmission, setPlayerSubmission] = useState([]);

  const addPlayerSubmission = (submission) => {
    const poem = [...playerSubmission];
    poem.push(submission);
    setPlayerSubmission(poem);
    setCurrentPlayer(currentPlayer + 1);
  }

  const mostRecentSubmission = playerSubmission.map((words) => {
    return `The ${words.adj1} ${words.noun1} ${words.adverb} ${words.verb} the ${words.adj2} ${words.noun2} .`
  })

  return (
    <div className="Game">
      <h2>Game</h2>

      <p>Each player should take turns filling out and submitting the form below. Each turn should be done individually and <em>in secret!</em> Take inspiration from the revealed recent submission. When all players are finished, click the final button on the bottom to reveal the entire poem.</p>

      <p>Please follow the following format for your poetry submission:</p>

      <p className="Game__format-example">
        { exampleFormat }
      </p>

      <RecentSubmission
      mostRecentPoemLine={mostRecentSubmission[mostRecentSubmission.length - 1]} />

      <PlayerSubmissionForm
      addPlayerSubmissionCallback={addPlayerSubmission}
      currentPlayer={currentPlayer} />

      <FinalPoem />

    </div>
  );
}


const FIELDS = [
  'The',
  {
    key: 'adj1',
    placeholder: 'adjective',
  },
  {
    key: 'noun1',
    placeholder: 'noun',
  },
  {
    key: 'adv',
    placeholder: 'adverb',
  },
  {
    key: 'verb',
    placeholder: 'verb',
  },
  'the',
  {
    key: 'adj2',
    placeholder: 'adjective',
  },
  {
    key: 'noun2',
    placeholder: 'noun',
  },
  '.',
];

export default Game;
