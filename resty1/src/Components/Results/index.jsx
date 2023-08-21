// import PropTypes from 'prop-types';

import './Results.scss';

function Results(props) {
  
    return (
      <section>
        <pre>{props.data ? JSON.stringify(props.data, undefined, 2) : null}</pre>
      </section>
    );
  }



  // Results.propTypes = {
  //   data: PropTypes.shape({
  //     count: PropTypes.number,
  //     results: PropTypes.arrayOf(
  //       PropTypes.shape({
  //         name: PropTypes.string,
  //         url: PropTypes.string,
  //       })
  //     ),
  //   }),
  // };

export default Results;