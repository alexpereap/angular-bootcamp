interface Driveable {
    speed: number;
    drive(): string;
}

class RaceCar implements Driveable {
    speed = 10;
    drive() {
        return `I am driving at ${this.speed}`;
    }
}

const raceCar = new RaceCar();

const startDriving = (vehicle: Driveable) => {
    vehicle.drive();
}

startDriving(raceCar);