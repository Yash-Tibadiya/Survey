import PropTypes from "prop-types";

const Button = ({ children, onClick }) => {
  return (
    <button
      className="px-12 py-2 font-semibold rounded"
      style={{
        background:
          "linear-gradient(90deg, #27AE60 0%, #56A82B 45.5%, #009045 100%)",
      }}
      onClick={onClick}
    >
      <span className="text-sm text-white">{children}</span>
    </button>
  );
};

Button.propTypes = {
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func.isRequired, 
};

export default Button;
