interface Aircraft {
  model: string;
  brand: string;
  manufacturer: string,
  engines: number;
  speed: number;
  capacity: number;
  turnOn: () => void;
  turnOff: () => void;
  speedUp: () => void;
  speedDown: () => void;
}