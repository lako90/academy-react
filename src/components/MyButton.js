const MyButton = ({
  label,
  children,
  bgColor = 'orange',
}) => {

  return (
    <button style={{ backgroundColor: bgColor }}>
      {children || label}
    </button>
  );
};

export default MyButton;
