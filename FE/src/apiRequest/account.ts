import http from "@/lib/http";

const accountApiRequest = {
  meInserver: (accessToken: string) => http.get<any>('api/auth/profile', {
    headers: {
      'Authorization': `Bearer ${accessToken}`
    }
  }),
  me: () => http.get<any>('api/auth/profile')
}

export default accountApiRequest;