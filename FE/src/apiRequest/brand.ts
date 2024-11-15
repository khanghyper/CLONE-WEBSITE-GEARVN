import http from "@/lib/http";

const brandApiRequest = {
  findAll: () => http.get<any>(`api/brands`, { cache: 'no-cache' }),
}

export default brandApiRequest;