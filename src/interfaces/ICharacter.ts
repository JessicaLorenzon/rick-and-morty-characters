export default interface ICharacter {
  image: string;
  id: number;
  name: string;
  status: string;
  species: string;
  gender: string;
  location: { name: string };
}
