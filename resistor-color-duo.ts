export class ResistorColor {
  private colors: string[];
  public colorsArray: string[] = ['black','brown', 'red', 'orange', 'yellow', 'green', 'blue', 'violet', 'grey', 'white'];

  constructor(colors: string[]) {
    if (colors.length < 2) {
      throw new Error('At least two colors need to be present');
    }
    this.colors = colors;
  }

  value = (): number => {
    const number = this.colorsArray.indexOf(this.colors[0]);
    const numberSecond = this.colorsArray.indexOf(this.colors[1]);
    return number * 10 + numberSecond;
  };
}

const register = new ResistorColor(['green', 'blue']);
register.value();
