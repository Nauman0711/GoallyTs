import { getRequest } from "../../requestHandler"
import { reminder } from "./targets"

export const getRoutineApi = async ({ params }: { params: object }) => {
    const response = await getRequest({ target: reminder, params })
    return response
}