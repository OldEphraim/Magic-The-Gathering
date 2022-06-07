import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'textIcons',
  pure: false
})
export class TextIconsPipe implements PipeTransform {

  transform(value: string, multiverseid: string): string {
    let regex = /{(.*?)}/g
    let match = value.match(regex);
    let array = value.split(regex);
    for (let i = 0; i < array.length; i++) {
      if (array[i].length === 1) {
        for (let j = 0; j < match.length; j++) {
          if (match[j].charAt(1) === array[i]) {
            array[i] = match[j];
          }
        }
      }
    }
    let newArr = [];
    if (match === null) {
      return value;
    } else if (match !== null) {
       for (let i = 0; i < array.length; i++) {
        if (array[i].charAt(0) === "{") {
          if (array[i].length === 3 && array[i].charAt(1) !== "T") {
          newArr.push(`<img style="max-height:14px;" src="https://gatherer.wizards.com/Handlers/Image.ashx?size=medium&name=${array[i].charAt(1)}&type=symbol" alt="${array[i].charAt(1)}"></img>`)
          }
          if (array[i].length === 3 && array[i].charAt(1) === "T") {
            newArr.push('<img style="max-height:14px;" src="https://gatherer.wizards.com/Handlers/Image.ashx?size=medium&name=tap&type=symbol" alt="tap"></img>')
          }
          if (array[i].length === 5 && array[i].charAt(2) === "/") {
            newArr.push(`<img style="max-height:14px;" src="https://gatherer.wizards.com/Handlers/Image.ashx?size=medium&name=${array[i].charAt(1)}${array[i].charAt(3)}&type=symbol" alt="${array[i].charAt(1)}${array[i].charAt(3)}"></img>`)
          }
          if (array[i].length > 3 && array[i].charAt(2) !== "/") {
            newArr.push(`<img style="max-height:14px;" src="https://gatherer.wizards.com/Handlers/Image.ashx?size=medium&name=${array[i].slice(1, array[i].length - 1)}&type=symbol" alt="${array[i].slice(1, array[i].length - 1)}"></img>`)
          }
        } else {
          newArr.push(array[i]);
        }
      }
      document.getElementById(multiverseid).innerHTML = newArr.join("");
      return newArr.join("")
    }
}
}
