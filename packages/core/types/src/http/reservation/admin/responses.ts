import { PaginatedResponse } from "../../common"
import { AdminReservation } from "./entities"

export interface AdminReservationResponse {
  reservation: AdminReservation
}

export type AdminReservationListResponse = PaginatedResponse<{
  reservations: AdminReservation[]
}>
