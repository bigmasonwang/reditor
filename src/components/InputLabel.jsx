import PropTypes from 'prop-types';

const InputLabel = ({ htmlFor, children }) => {
  return (
    <label
      htmlFor={htmlFor}
      className="block text-sm font-medium text-gray-700"
    >
      {children}
    </label>
  );
};

InputLabel.propTypes = {
  htmlFor: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default InputLabel;
