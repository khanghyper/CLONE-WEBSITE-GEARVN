export interface IUser {
  "_id"?: string,
  "name"?: string
  "email"?: string,
  "role"?: "USER" | "ADMIN",
  "isActive"?: boolean,
  "codeId"?: string,
  "codeExpired"?: Date
}