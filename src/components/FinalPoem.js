import React from 'react';
import PropTypes from 'prop-types';
import './FinalPoem.css';

const FinalPoem = (props) => {

  const poemSubmissions = props.submissions.map((submission) => {
    return (
      <li key={submission}>
        {submission}
      </li>
    )
  });

  const onSubmission = (event) => {
    event.preventDefault();
    props.revealPoem();
  }

  if (props.isSubmitted) { return (
    <div className="FinalPoem">
      <section className="FinalPoem__poem">
        <h3>Final Poem</h3>
        <ul>
          {poemSubmissions}
        </ul>
      </section>
    </div>
  )}
  else { return (
      <div className="FinalPoem__reveal-btn-container">
        <input 
        onClick={onSubmission}
        type="button" 
        value="We are finished: Reveal the Poem" 
        className="FinalPoem__reveal-btn" />
      </div>
  )}
}

FinalPoem.propTypes = {
  isSubmitted: PropTypes.bool.isRequired,
  submissions: PropTypes.arrayOf(PropTypes.string).isRequired,
  revealPoem: PropTypes.func.isRequired,
};

export default FinalPoem;
