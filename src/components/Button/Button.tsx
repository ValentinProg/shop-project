import styles from "./Button.module.scss";

// const Button = (props) => {
//   return (
//     <button onClick={props.onClick} className={styles.button}>
//       {props.children}
//     </button>
//   );
// };

interface ButtonProps {
  onClick?: () => void;
  children: React.ReactNode;
}

const Button = ({ onClick, children }: ButtonProps) => {
  return (
    <button onClick={onClick} className={styles.button}>
      {children}
    </button>
  );
};

export default Button;
