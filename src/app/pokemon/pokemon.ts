export class Pokemon {
  id: number;
  hp: number;
  cp: number;
  name: string;
  picture: string;
  types: Array<string>;
  created: Date;
  constructor(
    name: string = 'Entre un nom...',
    hp: number = 100,
    cp: number = 10,
    picture: string = 'assetssaryabo.png',
    types: Array<string> = ['normal'],
    created: Date = new Date()
  ) {
    this.hp = hp;
    this.cp = cp;
    this.name = name;
    this.picture = picture;
    this.types = types;
    this.created = created;
  }
}
