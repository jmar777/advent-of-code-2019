import input from '../input/01.txt';
import _ from 'lodash';

const calculateFuelRecursive = mass =>
  Math.floor(mass / 3) - 2
    |> (fuel => fuel >= 0 ? fuel + calculateFuelRecursive(fuel) : Math.max(fuel, 0));

input
  |> _.split(?, '\n')
  |> _.map(?, calculateFuelRecursive)
  |> _.reduce(?, (sum, fuel) => sum + fuel, 0)
  |> console.log;
