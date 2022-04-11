export default function exclude<Plants, Key extends keyof Plants>(
  plant: Plants,
  ...keys: Key[]
): Omit<Plants, Key> {
  const newPlant = plant;
  keys.forEach((key) => {
    delete newPlant[key];
  });
  return newPlant;
}
