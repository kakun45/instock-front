import "./Button.scss";

export default function Button({
  icon = null,
  text = null,
  emphasis,
  type,
  handleOnClick = null,
}) {
  return (
    <button
      className={`default-button default-button--${emphasis}`}
      type={type}
      onClick={handleOnClick}
    >
      {icon && (
        <img src={icon} className="default-button__icon" alt="button icon" />
      )}
      {text && text}
    </button>
  );
}
