import PropTypes from 'prop-types';

/**
 * Primary UI component for user interaction
 */
const Button = ({ children, variant, onClick, ...props }) => {
  const baseClasses =
    'py-2 px-4 rounded text-white font-semibold transition-colors duration-300';

  const variantClasses = {
    primary: 'bg-blue-500 hover:bg-blue-600',
    secondary: 'bg-gray-500 hover:bg-gray-600',
  };

  return (
    <button
      className={`${baseClasses} ${variantClasses[variant]}`}
      onClick={onClick}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;

Button.propTypes = {
  children: PropTypes.node.isRequired,
  variant: PropTypes.oneOf(['primary', 'secondary']),
  onClick: PropTypes.func,
};

Button.defaultProps = {
  variant: 'primary',
  onClick: () => {},
};
