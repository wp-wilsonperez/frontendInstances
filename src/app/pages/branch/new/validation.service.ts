
export class ValidationService {

    static emailValidator(control): {[key: string]: any} {
        var emailRegexp = /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$/;    
        if (control.value && !emailRegexp.test(control.value)) {
            return {invalidEmail: true};
        }
    }

    static matchingPasswords(passwordKey: string, passwordConfirmationKey: string) {
        return (group) => {
            let password= group.controls[passwordKey];
            let passwordConfirmation= group.controls[passwordConfirmationKey];
            if (password.value !== passwordConfirmation.value) {
                return passwordConfirmation.setErrors({mismatchedPasswords: true})
            }
        }
    }

    static numberValidator(control): {[key: string]: any} {
        var onlyNumberRegexp = /.*[^0-9].*/;  
        if (control.value && onlyNumberRegexp.test(control.value)) {
            return {invalidNumber: true};
        }
    }

   static phoneValidator(control): {[key: string]: any} {

        var onlyNumberRegexp = /.*[^0-9].*/;  
        if (control.value && onlyNumberRegexp.test(control.value)) {
            return {invalidPhone: true};
        }
  
        if (control.value.length <  8) {
            return {invalidPhone: true};
        }
        if (control.value.length >  10) {
            return {invalidPhone: true};
        }
       
    }
static mobileValidator(control): {[key: string]: any} {

        var onlyNumberRegexp = /.*[^0-9].*/;  
        if (control.value && onlyNumberRegexp.test(control.value)) {
            return {invalidMobile: true};
        }
  
        if (control.value.length <  9) {
            return {invalidMobile: true};
        }
   
       
    }

    static rucValidator(control): {[key: string]: any} {

       
  
        if (control.value.length <  7) {
            return {invalidPhone: true};
        }
        if (control.value.length >  10) {
            return {invalidPhone: true};
        }
       
    }

}