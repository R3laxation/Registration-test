const REQUIRED = 'This field is required'

export const loginValidation = {
    required: REQUIRED,
    validate: (value: string) => {
        if(value.match(/[а-яА-Я]/)){
            return 'This field can\'t contain russian letters'
        }
        return true
    }
}

export const passwordValidation = {
    required: REQUIRED,
    validate: (value: string) =>{
        if(value.length < 6) {
            return 'Password must contain more than 6 characters'
        }

        return true
    }
}