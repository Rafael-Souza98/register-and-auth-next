import { InputHTMLAttributes } from 'react';

import * as Label from '@radix-ui/react-label';
import styles from '../styles/Input.module.css';

interface InputProps extends InputHTMLAttributes<HTMLInputElement>{
    placeholder: string;
    title: string;
    
};

export function InputComp({title, placeholder, ...rest}: InputProps){
 
    return (
        <div className={styles.Content}>
          <Label.Root className={styles.LabelRoot}>
            {title}
          </Label.Root>
            <label>
            <input className={styles.InputLabel} type="text" {...rest} placeholder={placeholder}/>
          </label>
        </div>
        
  );

};

