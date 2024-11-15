import http from "@/lib/http";

const imageApiRequest = {
  upload: (body: any) => http.post<any>(`api/images/image/upload`, body),
}

export default imageApiRequest;