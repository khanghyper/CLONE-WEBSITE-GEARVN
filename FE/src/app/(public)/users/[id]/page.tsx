"use client";
import useSWR from "swr";
import { memo } from "react";

const fetcher = (url: string) => fetch(url).then((res) => res.json()) as Promise<any>;
function User({ params }: any) {
  const { data, error, isLoading } = useSWR(
    `https://jsonplaceholder.typicode.com/users/${params.id}`,
    fetcher
  );
  if (error) return <div>Lỗi tải dữ liệu</div>;
  if (isLoading) return <div>Đang tải...</div>;
  return (
    <ul>
      <li>Họ tên: {data.name}</li>
      <li>Email: {data.email}</li>
    </ul>
  );
}

export default User