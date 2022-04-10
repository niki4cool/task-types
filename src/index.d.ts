type TPerson = { name: string; age: number; gender: 'male' | 'female' };
type TPersons = TPerson[];
export function getPersons(): TPersons;

type TUser = { name: string; age: number; gender: 'male' | 'female' };
type TEmploye = TUser & { company: string };
export function personToString(person: TUser | TEmploye): string;
