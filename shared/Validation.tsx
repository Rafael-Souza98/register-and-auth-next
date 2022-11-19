


export async function useValidation  (regex: RegExp, fieldForm: string){
    
    const validator = new RegExp(regex, 'g').test(fieldForm);  
    if(validator){
        return 
    }else{
        window.alert('Dados inválidos')
    }
}   