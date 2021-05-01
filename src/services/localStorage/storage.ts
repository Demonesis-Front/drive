const LocalStorageKey = {
  myOrderId: 'myOrderId'
}

export const LocalStorage = {
  async setMyOrderId(id: string) {
    await localStorage.setItem(LocalStorageKey.myOrderId, id)
  },
  async getMyOrderId() {
    const id: string | null = await localStorage.getItem(LocalStorageKey.myOrderId)

    return id
  },
}