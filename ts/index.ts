interface Post {
    title: string;
    daysOld: number;
    published: boolean;
}

const myName: string = 'Alex';

// objects
const post :{ title: string, daysOld: number, published: boolean } = {
    title: 'The title',
    daysOld: 10,
    published: true
};

const printPost = (postToPrint: Post) => {
    return `${postToPrint.title} (${postToPrint.daysOld})`;
}

console.log(printPost(post));

class Car {
    color: string;
    year: number;

    constructor(color: string, year: number) {
        this.color = color;
        this.year = year;
    }

    drive() {
        console.log('Vroom');
    }
}

const myCar = new Car('red', 2000);
myCar.drive();
console.log(myCar.color, myCar.year);

// decorator

const Component = (target: any) => {
    console.log(target);
}

@Component
class DCar {

}