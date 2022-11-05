const date = new Date();

date.getHours();
date.getTime();
date.toISOString();

const date2 = new Date(2020, 1, 1, 20);
date2.toISOString();
date2.getTime();
date2.getHours();

console.log(date2);
console.log(date);


let myVar;
export class MyDate {
    year: number;
    month: number;
    day: number;

    constructor(year: number, month: number, day: number) {
        this.year = year;
        this.month = month;
        this.day = day;
    }
}
const myDate = new MyDate(2020, 1, 1);
