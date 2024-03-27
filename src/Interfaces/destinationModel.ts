import { DestinationImage } from "./destinationImage"


// Interfaces.ts
export default interface DestinationModel {
  code: string;
  durationInDays: number;
  difficulty: string;
  feePerPersonNepaliMin: number;
  feePerPersonNepaliMax: number;
  feePerPersonForeignMin: number;
  feePerPersonForeignMax: number;
  maxAltitude: number;
  overview: string;
  destinationImages: DestinationImage[];
}