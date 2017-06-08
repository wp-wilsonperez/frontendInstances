export class ValidationService{

    static macValidator(control): {[key: string]: any} {
        var macRegexp = /^([0-9A-Fa-f]{2}[:-]){5}([0-9A-Fa-f]{2})$/; 

        if (control.value && !macRegexp.test(control.value)) {
            return {invalidMac: true};
        }
    }
}