import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  password: string = '';
  passwordStrength: string = '';

  getPasswordColor(index: number) {
    const passwordLength = this.password.length;

    if (passwordLength === 0) {
      return 'gray';
    } else if (passwordLength < 8) {
      return 'red';
    }

    const hasLetters = /[a-zA-Z]/.test(this.password);
    const hasDigits = /\d/.test(this.password);
    const hasSymbols = /[!@#$%^&*]/.test(this.password);

    if (
      (hasLetters && !hasDigits && !hasSymbols) ||
      (!hasLetters && hasDigits && !hasSymbols) ||
      (!hasLetters && !hasDigits && hasSymbols)
    ) {
      return index === 0 ? 'red' : 'gray';
    }

    if (
      (hasLetters && hasDigits && !hasSymbols) ||
      (hasLetters && !hasDigits && hasSymbols) ||
      (!hasLetters && hasDigits && hasSymbols)
    ) {
      return index === 0 || index === 1 ? 'yellow' : 'gray';
    }

    if (hasLetters && hasDigits && hasSymbols) {
      return 'green';
    }

    return 'gray';
  }
}


