import PropTypes from 'prop-types';

export const Section = ({ title, children }) => {
  return (
    <div>
      <h1>{title}</h1>
      {children}
      {/* <h2>{title}</h2> */}
      {/* <Notification message = 'There is no feedback'/> */}
    </div>
  );
};

Section.propTypes = {
  title: PropTypes.string,
};
