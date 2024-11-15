'use client'

import { Input } from "@/components/ui/input"
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { useEffect, useState } from "react";

interface Province {
  province_id: string,
  province_name: string,
  province_type: string
}

export default function SectionInfo() {

  const [provinces, setProvinces] = useState<any[]>([]);
  const [districts, setDistricts] = useState<any[]>([]);
  const [wards, setWards] = useState<any[]>([]);

  useEffect(() => {
    fetch('https://online-gateway.ghn.vn/shiip/public-api/master-data/province', {
      headers: {
        token: '336d91ee-03a2-11ef-99f3-d6c2df26db63'
      }
    }).then(res => res.json()).then(data => {
      setProvinces(data.data)
    });
  }, []);


  return (
    <section className='section-info p-6 '>
      <div>
        <div className="mb-6">
          <div className="mb-2">
            <div className="inline font-semibold text-[18px]">Thông tin khách hàng</div>
          </div>
          <div>
            <div className="mt-2 mb-4 flex gap-[30px]">
              <div className="checkbox-item flex gap-2">
                <input type="radio" name="gender" id="men" value={'Anh'} />
                <label htmlFor="men">Anh</label>
              </div>
              <div className="checkbox-item flex gap-2">
                <input type="radio" name="gender" id="women" value={'Chị'} />
                <label htmlFor="women">Chị</label>
              </div>
            </div>
            <div className="flex mx-[-8px]">
              <div className="px-2 w-full">
                <Input type="text" placeholder="Nhập họ tên" />
              </div>
              <div className="px-2 w-full">
                <Input type="text" placeholder="Nhập số điện thoại" />
              </div>
            </div>
          </div>
        </div>
        <div className="mb-6">
          <div className="mb-2">
            <div className="inline font-semibold text-[18px]">Chọn cách nhận hàng</div>
          </div>
          <div>
            <div className="mt-2 mb-4">
              <div className="checkbox-item flex gap-2">
                <input type="radio" name="method" id="cod-method" value={'Giao hàng tận nơi'} />
                <label htmlFor="cod-method">Giao hàng tận nơi</label>
              </div>
            </div>
            <div className="p-4 mb-6 bg-[#ECECEC] rounded">
              <div className="flex gap-4">
                <div className="flex-1">
                  <Select onValueChange={(val) => {
                    fetch(`https://online-gateway.ghn.vn/shiip/public-api/master-data/district?province_id=${val}`, {
                      headers: {
                        token: '336d91ee-03a2-11ef-99f3-d6c2df26db63'
                      }
                    })
                      .then(res => res.json()).then(data => {
                        setWards([]);
                        setDistricts(data.data)
                      });
                  }}>
                    <SelectTrigger className="bg-white">
                      <SelectValue placeholder="Chọn tỉnh, Thành phố" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectGroup>
                        <SelectLabel >Chọn tỉnh, Thành phố</SelectLabel>
                        {provinces?.map(item => (
                          <SelectItem key={item.ProvinceID} value={item.ProvinceID}>{item.ProvinceName}</SelectItem>
                        ))}
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                </div>
                <div className="flex-1">
                  <Select onValueChange={(val) => {
                    fetch(`https://online-gateway.ghn.vn/shiip/public-api/master-data/ward?district_id=${val}`, {
                      headers: {
                        token: '336d91ee-03a2-11ef-99f3-d6c2df26db63'
                      }
                    })
                      .then(res => res.json()).then(data => {
                        setWards(data.data)
                      });
                  }}>
                    <SelectTrigger className="bg-white">
                      <SelectValue placeholder="Chọn quận huyện" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectGroup>
                        <SelectLabel>Chọn quận huyện</SelectLabel>
                        {districts?.map(item => (
                          <SelectItem key={item.DistrictID} value={item.DistrictID}>{item.DistrictName}</SelectItem>
                        ))}
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              <div className="flex gap-4 mt-4">
                <div className="flex-1">
                  <Select>
                    <SelectTrigger className="bg-white">
                      <SelectValue placeholder="Chọn phường, xã" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectGroup>
                        <SelectLabel >Chọn phường, xã</SelectLabel>
                        {wards?.map(item => (
                          <SelectItem key={item.WardCode} value={item.WardCode}>{item.WardName}</SelectItem>
                        ))}
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                </div>
                <div className="flex-1">
                  <Input className="bg-white" type="text" placeholder="Số nhà, tên đường"/>
                </div>
              </div>
            </div>
            <div className="mb-6">
              <div className="mb-4">
                <Input type="text" placeholder="Lưu ý, yêu cầu khác( Không bắt buộc)"/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
