"use server"

import { cookies } from "next/headers"

export async function deleteAcessToken() {
  const cookiesStore = cookies();
  console.log('abnx');
  cookiesStore.delete('accessToken')
}