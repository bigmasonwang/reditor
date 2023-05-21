import PropTypes from 'prop-types';
import React from 'react';

const InputField = React.forwardRef(
  ({ id, type, name, placeholder, defaultValue, required, ...props }, ref) => {
    return (
      <input
        id={id}
        type={type}
        name={name}
        placeholder={placeholder}
        defaultValue={defaultValue}
        className="block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
        required={required}
        ref={ref}
        {...props}
      />
    );
  }
);

InputField.propTypes = {
  id: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  defaultValue: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  required: PropTypes.bool,
};

InputField.defaultProps = {
  placeholder: '',
  defaultValue: '',
  required: false,
};
InputField.displayName = 'InputField';
export default InputField;
