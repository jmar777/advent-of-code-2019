import input from '../input/01.txt';
import _ from 'lodash';

input 
  |> _.split(?, '\n')
  |> _.map(?, mass => Math.floor(mass / 3) - 2)
  |> _.reduce(?, (sum, fuel) => sum + fuel, 0)
  |> console.log;
