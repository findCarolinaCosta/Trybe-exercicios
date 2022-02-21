export default function moveCar(car, side) {
  switch (car) {
    case 'red':
      return (
        this.setState({cars: { redCar: side}})
      );
    case 'blue':
      return (
        this.setState({cars: { blueCar: side}})
      );
    case 'yellow':
      return (
        this.setState({cars: { yellowCar: side}})
      );
    default:
      return null;
  }
}
