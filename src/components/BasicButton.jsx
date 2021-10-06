const BasicButton = ({
  label,
  handlerClick,
  classname,
  style,
  hidden,
  disabled,
}) => {
  return (
    <button
      className={classname}
      onClick={handlerClick}
      style={style}
      hidden={hidden}
      disabled={disabled}
    >
      {label}
    </button>
  );
};
export default BasicButton;
