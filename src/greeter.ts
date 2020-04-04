import { Content, ContentConfig } from './content.config';

export class Greeter {
  name: string;

  constructor(name: string) {
    this.name = name;
  }

  greet(): void {
    console.log(`Hi, ${this.name}!`);
  }

  getData(): void {
    Content.forEach(item => {
      console.log('Item title: ' + item.title);
      console.log('Item category: ' + item.category);
    });
  }
}
