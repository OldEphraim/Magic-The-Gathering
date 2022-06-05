import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'manaCostIcons'
})
export class ManaCostIconsPipe implements PipeTransform {

  transform(value: string): string {
    let regex = /{(.*?)}/g
    let match = value.match(regex);
    console.log(match);
    let array = [];
    for (let i = 0; i < match.length; i++) {
      if (match[i].length === 3 && match[i].charAt(1) !== "T") {
      array.push(`<img style="max-height:14px;" src="https://gatherer.wizards.com/Handlers/Image.ashx?size=medium&name=${match[i].charAt(1)}&type=symbol" alt="${match[i].charAt(1)}"></img>`)
      }
      if (match[i].length === 3 && match[i].charAt(1) === "T") {
        array.push('<img style="max-height:14px;" src="https://gatherer.wizards.com/Handlers/Image.ashx?size=medium&name=tap&type=symbol" alt="tap"></img>')
      }
      if (match[i].length === 5 && match[i].charAt(2) === "/") {
        array.push(`<img style="max-height:14px;" src="https://gatherer.wizards.com/Handlers/Image.ashx?size=medium&name=${match[i].charAt(1)}${match[i].charAt(3)}&type=symbol" alt="${match[i].charAt(1)}${match[i].charAt(3)}"></img>`)
      }
      if (match[i].length > 3 && match[i].charAt(2) !== "/") {
        array.push(`<img style="max-height:14px;" src="https://gatherer.wizards.com/Handlers/Image.ashx?size=medium&name=${match[i].slice(1, match[i].length - 1)}&type=symbol" alt="${match[i].slice(1, match[i].length - 1)}"></img>`)
      }
    }
    console.log(array);
    document.getElementById("manaCost").innerHTML = array.join("");
    return array.join("");
  }

}
