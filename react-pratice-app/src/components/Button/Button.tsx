import styles from "./Button.module.css";

interface Props {
  children: string;
  onClick: () => void;
  color?: "primary" | "secondart" | 123;
  setIsOpen?: true | false;
}

const Button = ({ children, onClick, color = "primary" }: Props) => {
  return (
    <button
      className={["btn btn-", styles["btn-" + color]].join(" ")}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
