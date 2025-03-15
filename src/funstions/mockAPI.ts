import type { TDataRequest, TMockResponseNigative, TMockResponsePositive } from "./types";

export const mockAPI = (obj: TDataRequest): TMockResponsePositive | TMockResponseNigative => {
    const number = Math.random()
    if(number > 0.5) {
      return {
        ...obj,
        ok: true,
        message: 'registration was successful'
      } as TMockResponsePositive
    } else {
      return {
        ok: false,
        message: 'registration error'
      } as TMockResponseNigative
    }
}