export type TDataForm = {
  firstName: string,
  lastName: string,
  phone: number | null,
  email: string,
  password: string | number,
  dubblePassword: string | number
}

export type TDataRequest = Omit<TDataForm, 'dubblePassword'>

export type TMockResponsePositive = {
  firstName: string,
  lastName: string,
  phone: number | null,
  email: string,
  password: string | number,
  ok: boolean,
  message: string
}

export type TMockResponseNigative = Pick<TMockResponsePositive, 'ok' | 'message'>