// utils/custom-validator.ts

import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";

export class CustomValidators {
  static validAuthor(control: AbstractControl): ValidationErrors | null {
    const {value} = control

    if( value ){
      const arr = value.split(' ')

      for(let item of arr){
        if( item[0].toUpperCase() !== item[0]){
          return { validAuthor: true } // trigger an error
        }
      }
  
      return null; // valid response
    } else {
      return { validAuthor: true }
    }
  }

  static validContent(control: AbstractControl): ValidationErrors | null {
    const {value} = control

    if( value ){
      const arr = value.split('')

      return arr.length < 3
      ? { validContent: true }
      : null; // valid response
    } else {
      return { validContent: true }
    }
  }

  static firstCapitalized(control: AbstractControl): ValidationErrors | null {
    const {value} = control

    if( value ){
      const arr = value.split('')

      if( arr[0].toUpperCase() !== arr[0]){
        return { validAuthor: true } // trigger an error
      }

      return null; // valid response
    } else {
      return { validAuthor: true }
    }
  }
}
