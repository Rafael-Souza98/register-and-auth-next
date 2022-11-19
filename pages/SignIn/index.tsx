
import styles from '../../styles/Home.module.css';
import { InputComp } from "../../components/InputComp";
import { FormEvent, useState } from 'react';
import Button from '../../components/Button';
import { useValidation } from '../../shared/Validation';


interface FormProps{
    tel: string;
    password: string;
    cpf: string;
  }

export function SignIn () {
  const [formstate, setFormState] = useState<FormProps>({
    tel: '',
    password: '',
    cpf: '',
});
const validatorCpf = new RegExp(/^\d{3}\.?\d{3}\.?\d{3}-?\d{2}$/, 'g');
const validatorSenha = new RegExp(/^[\w_@]{6,}$/, 'g');
const validatorTel = new RegExp(/^\(?[\d]{2}\)?[\d]{8,9}$/, 'g');




async function validationForm(e: FormEvent){
  
  e.preventDefault();

  try{

   await useValidation( validatorCpf, formstate.cpf );
   await useValidation( validatorSenha, formstate.password );
   await useValidation( validatorTel, formstate.tel );
   
   console.log(formstate);

  } catch(error){
    console.error(error);
  }

};


return (
    <div className={styles.container}>
     
      <h1 className={styles.title}> Cadastro </h1>

  
      <form  onSubmit={validationForm} className={styles.form}>
        
        <InputComp title='Telefone' value={formstate.tel} onChange={(e) => setFormState({...formstate, tel: e.currentTarget.value})}   name='tel' type='tel' placeholder='Seu telefone' />
        
        <InputComp title='Senha' value={formstate.password} onChange={(e) => setFormState({...formstate, password: e.currentTarget.value})}  name='senha' type='password' placeholder='Sua senha'/>
        
        <InputComp title='CPF' value={formstate.cpf} onChange={(e) => setFormState({...formstate, cpf: e.currentTarget.value})} name='cpf' type='text' placeholder='Seu CPF'/>

        <Button/>
      </form>
   </div>
  )
}

export default SignIn;