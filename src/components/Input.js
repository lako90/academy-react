import PropTypes from 'prop-types';

const Input = ({ placeholder, onChangeOut }) => {
  const handleChange = ({ target: { value } }) => {
    if (onChangeOut) {
      onChangeOut(value);
    }
  };

  return (
    <div>
      <input
        placeholder={placeholder}
        type="text"
        onChange={handleChange}
      />
    </div>
  );
};

Input.propTypes = {
  onChangeOut: PropTypes.func,
};

export default Input;
