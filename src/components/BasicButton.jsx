const BasicButton = ({
  label,
  handlerClick,
  classname,
  style,
  hidden,
  disabled,
  icon
}) => {
  return (
    <button
      className={classname + " d-flex"}
      onClick={handlerClick}
      style={style}
      hidden={hidden}
      disabled={disabled}
    >
      {label}
      {
        icon ? <i class="material-icons text-white ms-2 my-auto">{icon}</i> : ''
      }
    </button>
  );
};
export default BasicButton;
