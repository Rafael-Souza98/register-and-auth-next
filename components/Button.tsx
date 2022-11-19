import { ButtonHTMLAttributes} from 'react';
import styles from '../styles/Input.module.css';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {}



export function Button({...rest}: ButtonProps){
  
    return (
        <div className={styles.ButtonDiv}>
            <button className={styles.Button} {...rest}type="submit"> Cadastrar </button>
        </div>
    )
}

export default Button;