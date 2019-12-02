import input from '../input/01.txt';
import _ from 'lodash';

const calculateFuel = mass =>
  Math.floor(mass / 3) - 2
    |> (fuel => fuel >= 0 ? fuel + calculateFuel(fuel) : Math.max(fuel, 0));

input
  |> _.split(?, '\n')
  |> _.map(?, calculateFuel)
  |> _.sum
  |> console.log;
