interface IUsePagesReturn {
  data: unknown
  isLoading: boolean
}

export interface IUsePages {
  (): IUsePagesReturn
}
