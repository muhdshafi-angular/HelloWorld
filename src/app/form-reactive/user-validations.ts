import { AbstractControl, Validators, ValidationErrors } from '@angular/forms';


export class UserValidations {
    static cannotContainSpace(control: AbstractControl): ValidationErrors |null {
        if ((control.value as string).includes(' ')) {
            return { spaceNotAllowed: true };
        } else {
            return null;
        }

    }


    static shouldBeUnique(control: AbstractControl): Promise<ValidationErrors | null> {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (control.value === 'Shafi') {
                    resolve({notUnique: true});
                } else {
                    resolve(null);
                }
            }, 2000);
        });
    }

}

