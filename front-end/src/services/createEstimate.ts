import { Address } from "../entities/Address"

export type NewEstimateInput = {
    pickupAddress: Address
    deliveryAddress: Address
    comments: string
  }

export const createEstimate = async (input: NewEstimateInput) => {
    

}