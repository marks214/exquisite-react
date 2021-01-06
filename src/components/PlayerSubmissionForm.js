import React, { useState } from 'react';
import PropTypes from 'prop-types';

import './PlayerSubmissionForm.css';

const PlayerSubmissionForm = (props) => {
  const initState = {
    adj1: '',
    noun1: '',
    adverb: '',
    verb: '',
    adj2: '',
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



  return (
    <div className="PlayerSubmissionForm">
      <h3>Player Submission Form for Player #{  }</h3>

      <form className="PlayerSubmissionForm__form" >

        <div className="PlayerSubmissionForm__poem-inputs">

        <input
            name='adj1'
            placeholder="adjective"
            value={poemLine.adjective1}
            type="text"
            onChange={onPoemInputChange} />
            
          <input
            name='noun1'
            placeholder="noun"
            value={poemLine.noun1}
            type="text"
            onChange={onPoemInputChange} />

          <input
            name='adverb'
            placeholder="adverb"
            value={poemLine.adverb}
            type="text"
            onChange={onPoemInputChange} />

          <input
            name='verb'
            placeholder="verb"
            value={poemLine.verb}
            type="text"
            onChange={onPoemInputChange} />

          <input
            name='adj2'
            placeholder="adjective"
            value={poemLine.adjective2}
            type="text"
            onChange={onPoemInputChange} />
            
          <input
            name='noun2'
            placeholder="noun"
            value={poemLine.noun2}
            type="text"
            onChange={onPoemInputChange} />

        </div>

        <div className="PlayerSubmissionForm__submit">
          <input type="submit" value="Submit Line" className="PlayerSubmissionForm__submit-btn" />
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
