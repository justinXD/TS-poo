import { Cat } from './09-proteced';

// function getValue(value: unknown ) {
//   return value;
// }

// function getValue(value: string | number ) {
//   return value;
// }

function getValue<T>(value: T) {  // esto se llama generic, le estoy enviando el tipado como argumento
  const array: T[] = [value];
  return value;
}

getValue<number>(12).toFixed();   // uso el generic somo number
getValue<string>('12').toLowerCase();   // generic como string
getValue<number[]>([11,1,1]).forEach;   // generic como array
const fifi = new Cat('fifi', 'Justin');
getValue<Cat>(fifi).greeting   // generic en una clase
// Promise<boolean>
// axios.get<string[]>
