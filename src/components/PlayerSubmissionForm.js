import React, { useState } from 'react';
import PropTypes from 'prop-types';

import './PlayerSubmissionForm.css';

const PlayerSubmissionForm = (props) => {
  const initState = {
    adjective1: '',
    noun1: '',
    adverb: '',
    verb: '',
    adjective2: '',
    noun2: ''
  };

  const [poemLine, setPoemLine] = useState(initState);

  const onPoemInputChange = (event) => {
    const newLine = {
      ...poemLine,
    };

    newLine[event.target.name] = [event.target.value]
    setPoemLine(newLine);
  }


  const onFormSubmit = (event) => {
    event.preventDefault();

    props.sendSubmission(poemLine);

    setPoemLine(initState);
  }

  return (
    <div className="PlayerSubmissionForm">
      <h3>Player Submission Form for Player #{props.index}</h3>

      <form 
      className="PlayerSubmissionForm__form"
      onSubmit={onFormSubmit}>

        <div className="PlayerSubmissionForm__poem-inputs">

        <input
            name='adjective1'
            placeholder="adjective1"
            value={poemLine.adjective1}
            type="text"
            onChange={onPoemInputChange}
            className={poemLine.adjective1 === '' ? 'blankInput' : 'typedInput'} />
            
          <input
            name='noun1'
            placeholder="noun1"
            value={poemLine.noun1}
            type="text"
            onChange={onPoemInputChange}
            className={poemLine.noun1 === '' ? 'blankInput' : 'typedInput'}/>

          <input
            name='adverb'
            placeholder="adverb1"
            value={poemLine.adverb}
            type="text"
            onChange={onPoemInputChange}
            className={poemLine.adverb === '' ? 'blankInput' : 'typedInput'} />

          <input
            name='verb'
            placeholder="verb1"
            value={poemLine.verb}
            type="text"
            onChange={onPoemInputChange}
            className={poemLine.verb === '' ? 'blankInput' : 'typedInput'} />

          <input
            name='adjective2'
            placeholder="adjective2"
            value={poemLine.adjective2}
            type="text"
            onChange={onPoemInputChange}
            className={poemLine.adjective2 === '' ? 'blankInput' : 'typedInput'} />
            
          <input
            name='noun2'
            placeholder="noun2"
            value={poemLine.noun2}
            type="text"
            onChange={onPoemInputChange}
            className={poemLine.noun2 === '' ? 'blankInput' : 'typedInput'} />

        </div>

        <div className="PlayerSubmissionForm__submit">
          <input 
          type="submit" 
          value="Submit Line" 
          className="PlayerSubmissionForm__submit-btn" />
        </div>
      </form>
    </div>
  );
}

PlayerSubmissionForm.propTypes = {
  index: PropTypes.number.isRequired,
  sendSubmission: PropTypes.func.isRequired,
  fields: PropTypes.arrayOf(PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.shape({
      key: PropTypes.string.isRequired,
      placeholder: PropTypes.string.isRequired,
    }),
  ])).isRequired,
}

export default PlayerSubmissionForm;
