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
  
        if (control.value.length <  10) {
            return {invalidMobile: true};
        }
   
       
    }

    static rucValidator(control): {[key: string]: any} {

        let final = control.value.substr(-3,3);
         var d1  = control.value.substr(0,1);         
            var  d2  = control.value.substr(1,1);         
            var  d3  = control.value.substr(2,1);         
            var  d4  = control.value.substr(3,1);         
            var  d5  = control.value.substr(4,1);         
            var  d6  = control.value.substr(5,1);         
            var d7  = control.value.substr(6,1);         
            var d8  = control.value.substr(7,1);         
            var d9  = control.value.substr(8,1);         
            var d10 = control.value.substr(9,1); 
            var p1;
            var p2;
            var p3;
            var p4;
            var p5;
            var p6;
            var p7;
            var p8;
            var p9;
            var suma = 0;      
            var residuo = 0;      
            var pri = false;      
            var pub = false;            
            var nat = false;                 
            var modulo = 11;
            var provincia = control.value.substr(0,2);


             if (provincia < 1 || provincia > 22){           
                        return {invalidRuc: true};

                    }

            if (d3==7 || d3==8){  

                 return {invalidRuc: true}; 
                        
             }  

               /* Solo para personas naturales (modulo 10) */         
                if (d3 < 6){           
                    nat = true;            
                    p1 = d1 * 2;  if (p1 >= 10) p1 -= 9;
                    p2 = d2 * 1;  if (p2 >= 10) p2 -= 9;
                    p3 = d3 * 2;  if (p3 >= 10) p3 -= 9;
                    p4 = d4 * 1;  if (p4 >= 10) p4 -= 9;
                    p5 = d5 * 2;  if (p5 >= 10) p5 -= 9;
                    p6 = d6 * 1;  if (p6 >= 10) p6 -= 9; 
                    p7 = d7 * 2;  if (p7 >= 10) p7 -= 9;
                    p8 = d8 * 1;  if (p8 >= 10) p8 -= 9;
                    p9 = d9 * 2;  if (p9 >= 10) p9 -= 9;             
                    modulo = 10;
                } 

                                /* Solo para sociedades publicas (modulo 11) */                  
                /* Aqui el digito verficador esta en la posicion 9, en las otras 2 en la pos. 10 */
                else if(d3 == 6){           
                    pub = true;             
                    p1 = d1 * 3;
                    p2 = d2 * 2;
                    p3 = d3 * 7;
                    p4 = d4 * 6;
                    p5 = d5 * 5;
                    p6 = d6 * 4;
                    p7 = d7 * 3;
                    p8 = d8 * 2;            
                    p9 = 0;            
                }         
                    
                /* Solo para entidades privadas (modulo 11) */         
                else if(d3 == 9) {           
                    pri = true;                                   
                    p1 = d1 * 4;
                    p2 = d2 * 3;
                    p3 = d3 * 2;
                    p4 = d4 * 7;
                    p5 = d5 * 6;
                    p6 = d6 * 5;
                    p7 = d7 * 4;
                    p8 = d8 * 3;
                    p9 = d9 * 2;            
                }

                 suma = p1 + p2 + p3 + p4 + p5 + p6 + p7 + p8 + p9;                
                residuo = suma % modulo;  

                 /* Si residuo=0, dig.ver.=0, caso contrario 10 - residuo*/
                var digitoVerificador = residuo==0 ? 0: modulo - residuo;                

                /* ahora comparamos el elemento de la posicion 10 con el dig. ver.*/   
                 if (pub==true){           
                        if (digitoVerificador != d9)
                        {       
                                    return {invalidRuc: true};
                        }                  
                        /* El ruc de las empresas del sector publico terminan con 0001*/         
                        if ( control.value.substr(9,4) != '0001' ){     
                                 return {invalidRuc: true};
                        }
                    }         
                    else if(pri == true){         
                        if (digitoVerificador != d10){    
                            return {invalidRuc: true};
                        }         
                        if ( control.value.substr(10,3) != '001' ){  
                         return {invalidRuc: true};
                        }
                    }      

                    else if(nat == true){         
                        if (digitoVerificador != d10)
                        {  
                            return {invalidRuc: true}; 
                        }         
                         
      

            

        }





        var onlyNumberRegexp = /.*[^0-9].*/;  
        if (control.value && onlyNumberRegexp.test(control.value)) {
            return {invalidRuc: true};
        }
         if (control.value.length <  13) {
            return {invalidRuc: true};
        }
   
        
        
        if(final != "001"){
                return {invalidRuc: true};   
        }
     
       
    }

    // validacion de cedula

     static validacionCedula(cedulaKey: string) {
        return (group) => {
            var cedula = group.controls[cedulaKey];
            var d1  = cedula.value.substr(0,1);         
            var  d2  = cedula.value.substr(1,1);         
            var  d3  = cedula.value.substr(2,1);         
            var  d4  = cedula.value.substr(3,1);         
            var  d5  = cedula.value.substr(4,1);         
            var  d6  = cedula.value.substr(5,1);         
            var d7  = cedula.value.substr(6,1);         
            var d8  = cedula.value.substr(7,1);         
            var d9  = cedula.value.substr(8,1);         
            var d10 = cedula.value.substr(9,1); 
            var p1;
            var p2;
            var p3;
            var p4;
            var p5;
            var p6;
            var p7;
            var p8;
            var p9;
            var suma = 0;      
            var residuo = 0;      
            var pri = false;      
            var pub = false;            
            var nat = false;                 
            var modulo = 11;
            var provincia = cedula.value.substr(0,2);


            if (provincia < 1 || provincia > 22){           
                        return cedula.setErrors({invalidCedula: true})  

                    }

            if (d3==7 || d3==8){  

                return cedula.setErrors({invalidCedula: true})    
                        
             }  

               /* Solo para personas naturales (modulo 10) */         
                if (d3 < 6){           
                    nat = true;            
                    p1 = d1 * 2;  if (p1 >= 10) p1 -= 9;
                    p2 = d2 * 1;  if (p2 >= 10) p2 -= 9;
                    p3 = d3 * 2;  if (p3 >= 10) p3 -= 9;
                    p4 = d4 * 1;  if (p4 >= 10) p4 -= 9;
                    p5 = d5 * 2;  if (p5 >= 10) p5 -= 9;
                    p6 = d6 * 1;  if (p6 >= 10) p6 -= 9; 
                    p7 = d7 * 2;  if (p7 >= 10) p7 -= 9;
                    p8 = d8 * 1;  if (p8 >= 10) p8 -= 9;
                    p9 = d9 * 2;  if (p9 >= 10) p9 -= 9;             
                    modulo = 10;
                } 

                                /* Solo para sociedades publicas (modulo 11) */                  
                /* Aqui el digito verficador esta en la posicion 9, en las otras 2 en la pos. 10 */
                else if(d3 == 6){           
                    pub = true;             
                    p1 = d1 * 3;
                    p2 = d2 * 2;
                    p3 = d3 * 7;
                    p4 = d4 * 6;
                    p5 = d5 * 5;
                    p6 = d6 * 4;
                    p7 = d7 * 3;
                    p8 = d8 * 2;            
                    p9 = 0;            
                }         
                    
                /* Solo para entidades privadas (modulo 11) */         
                else if(d3 == 9) {           
                    pri = true;                                   
                    p1 = d1 * 4;
                    p2 = d2 * 3;
                    p3 = d3 * 2;
                    p4 = d4 * 7;
                    p5 = d5 * 6;
                    p6 = d6 * 5;
                    p7 = d7 * 4;
                    p8 = d8 * 3;
                    p9 = d9 * 2;            
                }

                 suma = p1 + p2 + p3 + p4 + p5 + p6 + p7 + p8 + p9;                
                residuo = suma % modulo;                                         

                /* Si residuo=0, dig.ver.=0, caso contrario 10 - residuo*/
                var digitoVerificador = residuo==0 ? 0: modulo - residuo;                

                /* ahora comparamos el elemento de la posicion 10 con el dig. ver.*/   
                 if (pub==true){           
                        if (digitoVerificador != d9)
                        {       
                                     return cedula.setErrors({invalidCedula: true})    
                        }                  
                        /* El ruc de las empresas del sector publico terminan con 0001*/         
                        if ( cedula.value.substr(9,4) != '0001' ){     
                                 return cedula.setErrors({invalidCedula: true})    
                        }
                    }         
                    else if(pri == true){         
                        if (digitoVerificador != d10){    
                             return cedula.setErrors({invalidCedula: true})    
                        }         
                        if ( cedula.value.substr(10,3) != '001' ){  
                         return cedula.setErrors({invalidCedula: true})    
                        }
                    }      

                    else if(nat == true){         
                        if (digitoVerificador != d10)
                        {  
                            return cedula.setErrors({invalidCedula: true})    
                        }         
                        if (cedula.value.length >10 && cedula.value.substr(10,3) != '001' ){ 

                            return cedula.setErrors({invalidCedula: true})    
                        }    
      

            

        }
    }


}
}