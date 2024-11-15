import { Gamepad2Icon, HeadsetIcon, KeyboardIcon, LaptopIcon, LaptopMinimalIcon, MemoryStickIcon, MonitorIcon, MouseIcon, PcCaseIcon, SpeakerIcon } from "lucide-react"

const navLinks: {
  title: string,
  icon: JSX.Element,
  index: number,
  content?: {
    name: string,
    values: string[]
  }[]
}[] = [{
  title: 'Laptop',
  icon: <LaptopMinimalIcon size={20} strokeWidth={1} />,
  index: 0,
  content: [
    {
      name: 'Thương hiệu',
      values: ['ASUS', 'ACER', 'MSI', 'LENOVO', 'DELL', 'HP']
    },
    {
      name: 'Giá bán',
      values: ['Dưới 15 triệu', 'Từ 15 đến 20 triệu', 'Trên 20 triệu']
    },
    {
      name: 'CPU Intel-AMD',
      values: ['Intel', 'AMD Ryzen']
    },
    {
      name: 'Nhu cầu sử dụng',
      values: ['Đồ họa - Studio', 'Học sinh - Sinh viên', 'Mỏng nhẹ cao cấp']
    },
    {
      name: 'Linh phụ kiện Laptop',
      values: ['Ram laptop', 'SSD laptop', 'Ổ cứng di động']
    }
  ]
},
{
  title: 'Laptop Gaming',
  icon: <LaptopMinimalIcon size={20} strokeWidth={1} />,
  index: 1,
  content: [
    {
      name: 'Thương hiệu',
      values: [
        'ACER / PREDATOR',
        'ASUS / ROG',
        'MSI',
        'LENOVO',
        'DELL',
        'GIGABYTE / AORUS',
        'HP'
      ]
    },
    {
      name: 'Giá bán',
      values: [
        'Dưới 20 triệu',
        'Từ 20 đến 25 triệu',
        'Từ 25 đến 30 triệu',
        'Trên 30 triệu',
        'Gaming cao cấp',
        'Gaming RTX 40 Series'
      ]
    },
    {
      name: 'ACER | PREDATOR',
      values: [
        'Nitro Series',
        'Aspire Series',
        'Predator Series',
        'ACER RTX 40 Series'
      ]
    },
    {
      name: 'ASUS | ROG Gaming',
      values: [
        'ROG Series',
        'TUF Series',
        'Zephyrus Series',
        'ROG Strix G',
        'ROG Flow series',
        'TUF RTX 40 Series',
        'ROG RTX 40 Series',
        'ROG Ally'
      ]
    },
    {
      name: 'MSI Gaming',
      values: [
        'GF Series',
        'GS Series',
        'Bravo Series',
        'Creator Series',
        'MSI AMD Series',
        'MSI RTX 40 Series'
      ]
    },
    {
      name: 'LENOVO Gaming',
      values: [
        'Legion Gaming',
        'Ideapad Gaming',
        'Lenovo RTX 40 Series',
        'LOQ series'
      ]
    },
    {
      name: 'DELL Gaming',
      values: [
        'Dell Gaming G series',
        'Alienware series',
        'Dell RTX 40 Series'
      ]
    },
    {
      name: 'GIGABYTE Gaming',
      values: [
        'GIGABYTE G5 | G7',
        'GIGABYTE AORUS',
        'GIGABYTE AERO',
        'GIGABYTE RTX 40 Series'
      ]
    },
    {
      name: 'Card đồ hoạ',
      values: [
        'GTX 1650',
        'RTX 3050 / 3050Ti',
        'RTX 3060',
        'RTX 3070 / 3080',
        'AMD Radeon RX',
        'RTX 40 Series'
      ]
    },
    {
      name: 'Linh - Phụ kiện Laptop',
      values: ['Ram laptop', 'SSD laptop', 'Ổ cứng di động']
    }
  ]
},
{
  title: 'PC',
  icon: <PcCaseIcon size={20} strokeWidth={1} />,
  index: 2,
  content: [
    {
      name: 'KHUYẾN MÃI HOT',
      values: [
        'MIỄN PHÍ NÂNG CẤP 32GB RAM',
        'PC GVN RX6600 TẶNG RAM 8GB',
        'PC GVN GTX1650 TẶNG RAM 8GB',
        'Xem tất cả PC'
      ]
    },
    {
      name: 'PC GVN - KM HOT',
      values: [
        'PC GVN - PROJECT ZERO WHITE',
        'PC GVN - PROJECT VERTICAL',
        'PC GVN - HYPERION BLACK',
        'PC GVN - DRAGON X',
        'PC GVN - Tặng Tản nhiệt 4 TRIỆU',
        'Xem tất cả PC GVN'
      ]
    },
    {
      name: 'PC theo cấu hình (Intel)',
      values: [
        'PC I3 (Giá chỉ từ 7 triệu)',
        'PC I5 (Giá chỉ từ 10 triệu)',
        'PC I7 (Giá chỉ từ 27 triệu)',
        'PC I9 (Giá chỉ từ 40 triệu)',
        'Xem tất cả PC'
      ]
    },
    {
      name: 'PC theo cấu hình (AMD)',
      values: [
        'PC R3 (Giá chỉ từ 5 triệu)',
        'PC R5 (Giá chỉ từ 7 triệu)',
        'PC R7 (Giá chỉ từ 37 triệu)',
        'PC R9 (Giá chỉ từ 40 triệu)',
        'Xem tất cả PC'
      ]
    },
    {
      name: 'PC Văn phòng',
      values: [
        'Homework Athlon - Giá chỉ 3.990k',
        'Homework R3 - Giá chỉ 5,690k',
        'Homework R5 - Giá chỉ 5,690k',
        'Homework I5 - Giá chỉ 5,690k'
      ]
    },
    {
      name: 'PC theo cấu hình VGA',
      values: [
        'PC sử dụng VGA 1650',
        'PC sử dụng VGA 3050',
        'PC sử dụng VGA 3060',
        'PC sử dụng VGA RX 6600',
        'Xem tất cả PC GVN'
      ]
    },
    {
      name: 'PC theo cấu hình VGA',
      values: [
        'PC sử dụng VGA 4060',
        'PC sử dụng VGA 4070',
        'PC sử dụng VGA 4080',
        'PC sử dụng VGA 4090',
        'Xem tất cả PC GVN'
      ]
    },
    {
      name: 'Phần mềm bản quyền',
      values: [
        'Windows bản quyền - Chỉ từ 2.990K',
        'Office 365 bản quyền - Chỉ từ 990K'
      ]
    }
  ]
},
{
  title: 'Main, CPU, VGA',
  icon: <PcCaseIcon size={20} strokeWidth={1} />,
  index: 3,
  content: [
    {
      name: 'VGA - Card màn hình',
      values: [
        'RTX 4060',
        'RTX 4060Ti',
        'RTX 4070',
        'RTX 4070 Super (new)',
        'RTX 4070Ti',
        'RTX 4070 Ti Super (new)',
        'RTX 4080',
        'RTX 4080 Super (new)',
        'RTX 4090',
        'VGA Nvidia Quadro',
        'Xem tất cả'
      ]
    },
    {
      name: 'VGA - Card màn hình',
      values: [
        'RTX 3060',
        'RTX 3050',
        'GTX 1660Super - RTX2060',
        'GTX 1650',
        'GT710 / GT1030',
        'Xem tất cả'
      ]
    },
    {
      name: 'Bo mạch chủ Intel',
      values: [
        'H510', 'H610',
        'B660', 'B760',
        'Z690', 'Z790',
        'X299X', 'Xem tất cả'
      ]
    },
    {
      name: 'Bo mạch chủ AMD',
      values: [
        'AMD X670 (Mới)',
        'AMD X570',
        'AMD B650 (Mới)',
        'AMD B550',
        'AMD A320',
        'AMD TRX40'
      ]
    },
    {
      name: 'CPU - Bộ vi xử lý',
      values: [
        'CPU Intel 14th (Mới nhất)',
        'Tất cả CPU Intel',
        'Tất cả CPU AMD',
        'Xem tất cả'
      ]
    }
  ]
},
{
  title: 'Case, Nguồn, Tản',
  icon: <PcCaseIcon size={20} strokeWidth={1} />,
  index: 4,
  content: [
    {
      name: 'Case - Theo hãng',
      values: [
        'Case ASUS',
        'Case Corsair',
        'Case Lianli',
        'Case NZXT',
        'Case Inwin',
        'Case Thermaltake',
        'Xem tất cả'
      ]
    },
    {
      name: 'Case - Theo giá',
      values: [
        'Dưới 1 triệu',
        'Từ 1 triệu đến 2 triệu',
        'Trên 2 triệu',
        'Xem tất cả'
      ]
    },
    {
      name: 'Nguồn - Theo Hãng',
      values: [
        'Nguồn ASUS',
        'Nguồ̀n DeepCool',
        'Nguồn Corsair',
        'Nguồn NZXT',
        'Nguồn MSI',
        'Xem tất cả'
      ]
    },
    {
      name: 'Nguồn - Theo công suất',
      values: [
        'Từ 400w - 500w',
        'Từ 500w - 600w',
        'Từ 700w - 800w',
        'Trên 1000w',
        'Xem tất cả'
      ]
    },
    {
      name: 'Phụ kiện PC',
      values: [
        'Dây LED',
        'Dây rise - Dựng VGA',
        'Giá đỡ VGA',
        'Keo tản nhiệt',
        'Xem tất cả'
      ]
    },
    {
      name: 'Loại tản nhiệt',
      values: [
        'Tản nhiệt AIO 240mm',
        'Tản nhiệt AIO 280mm',
        'Tản nhiệt AIO 360mm',
        'Tản nhiệt AIO 420mm',
        'Tản nhiệt khí',
        'Fan RGB',
        'Xem tất cả'
      ]
    }
  ]
},
{
  title: 'Ổ cứng, RAM, Thẻ nhớ',
  icon: <MemoryStickIcon size={20} strokeWidth={1} />,
  index: 5,
  content: [
    {
      name: 'Dung lượng RAM',
      values: ['8 GB', '16 GB', '32 GB', '64 GB', 'Xem tất cả']
    },
    { name: 'Loại RAM', values: ['DDR4', 'DDR5', 'Xem tất cả'] },
    {
      name: 'Hãng RAM',
      values: ['Corsair', 'Kingston', 'G.Skill', 'PNY', 'Xem tất cả']
    },
    {
      name: 'Dung lượng HDD',
      values: [
        'HDD 1 TB',
        'HDD 2 TB',
        'HDD 4 TB - 6 TB',
        'HDD trên 8 TB',
        'Xem tất cả'
      ]
    },
    {
      name: 'Hãng HDD',
      values: ['WesterDigital', 'Seagate', 'Toshiba', 'Xem tất cả']
    },
    {
      name: 'Dung lượng SSD',
      values: [
        '120GB - 128GB',
        '250GB - 256GB',
        '480GB - 512GB',
        '960GB - 1TB',
        '2TB',
        'Trên 2TB',
        'Xem tất cả'
      ]
    },
    {
      name: 'Hãng SSD',
      values: [
        'Samsung',
        'Wester Digital',
        'Kingston',
        'Corsair',
        'PNY',
        'Xem tất cả'
      ]
    },
    { name: 'Thẻ nhớ / USB', values: ['Sandisk'] }
  ]
},
{
  title: 'Loa',
  icon: <SpeakerIcon size={20} strokeWidth={1} />,
  index: 6,
  content: [
    {
      name: 'Thương hiệu loa',
      values: ['Edifier', 'Razer', 'Logitech', 'SoundMax']
    },
    {
      name: 'Kiểu Loa',
      values: [
        'Loa vi tính',
        'Loa Bluetooth',
        'Loa Soundbar',
        'Loa mini',
        'Sub phụ (Loa trầm)'
      ]
    }
  ]
},
{
  title: 'Màn hình',
  icon: <MonitorIcon size={20} strokeWidth={1} />,
  index: 7,
  content: [
    {
      name: 'Hãng sản xuất',
      values: [
        'LG', 'Asus',
        'ViewSonic', 'Dell',
        'Gigabyte', 'AOC',
        'Acer', 'HKC'
      ]
    },
    {
      name: 'Hãng sản xuất',
      values: [
        'MSI',
        'Lenovo',
        'Samsung',
        'Cooler Master',
        'Philips',
        'LC-Power',
        'E-Dra',
        'Dahua',
        'VSP'
      ]
    },
    {
      name: 'Giá tiền',
      values: [
        'Dưới 5 triệu',
        'Từ 5 triệu đến 10 triệu',
        'Từ 10 triệu đến 20 triệu',
        'Từ 20 triệu đến 30 triệu',
        'Trên 30 triệu'
      ]
    },
    {
      name: 'Độ Phân giải',
      values: [
        'Màn hình Full HD',
        'Màn hình 2K 1440p',
        'Màn hình 4K UHD',
        'Màn hình 6K'
      ]
    },
    {
      name: 'Tần số quét',
      values: ['60Hz', '75Hz', '100Hz', '144Hz', '240Hz']
    }
  ]
},
{
  title: 'Bàn phím',
  icon: <KeyboardIcon size={20} strokeWidth={1} />,
  index: 8,
  content: [
    {
      name: 'Thương hiệu',
      values: [
        'AKKO',
        'Dare-U',
        'Rapoo',
        'FL-Esports',
        'Corsair',
        'E-Dra',
        'Cidoo'
      ]
    },
    {
      name: 'Thương hiệu',
      values: [
        'ASUS',
        'Logitech',
        'Razer',
        'Leopold',
        'Steelseries',
        'Durgod',
        'VGN'
      ]
    },
    {
      name: 'Giá tiền',
      values: [
        'Dưới 1 triệu',
        '1 triệu - 2 triệu',
        '2 triệu - 3 triệu',
        '3 triệu - 4 triệu',
        'Trên 4 triệu'
      ]
    },
    { name: 'Kết nối', values: ['Bluetooth', 'Wireless'] },
    {
      name: 'Phụ kiện bàn phím cơ',
      values: ['Keycaps', 'Dwarf Factory', 'Kê tay']
    }
  ]
},
{
  title: 'Tai nghe',
  icon: <HeadsetIcon size={20} strokeWidth={1} />,
  index: 9,
  content: [
    {
      name: 'Thương hiệu tai nghe',
      values: ['ASUS', 'HyperX', 'Corsair', 'Razer']
    },
    {
      name: 'Thương hiệu tai nghe',
      values: ['Steelseries', 'Rapoo', 'Logitech', 'Edifier']
    },
    {
      name: 'Tai nghe theo giá',
      values: [
        'Tai nghe dưới 1 triệu',
        'Tai nghe 1 triệu đến 2 triệu',
        'Tai nghe 2 đến 3 triệu',
        'Tai nghe 3 đến 4 triệu',
        'Tai nghe trên 4 triệu'
      ]
    },
    {
      name: 'Kiểu kết nối',
      values: ['Tai nghe Wireless', 'Tai nghe Bluetooth']
    },
    {
      name: 'Kiểu tai nghe',
      values: ['Tai nghe Over-ear', 'Tai nghe Gaming In-ear']
    }
  ]
},
{
  title: 'Chuột + Lót chuột',
  icon: <MouseIcon size={20} strokeWidth={1} />,
  index: 10,
  content: [
    {
      name: 'Thương hiệu chuột',
      values: ['Logitech', 'Razer', 'Corsair', 'Pulsar', 'Microsoft']
    },
    {
      name: 'Thương hiệu chuột',
      values: ['ASUS', 'Steelseries', 'Glorious', 'Rapoo']
    },
    {
      name: 'Chuột theo giá tiền',
      values: [
        'Dưới 500 nghìn',
        'Từ 500 nghìn - 1 triệu',
        'Từ 1 triệu - 2 triệu',
        'Trên 2 triệu - 3 triệu',
        'Trên 3 triệu'
      ]
    },
    {
      name: 'Loại Chuột',
      values: ['Chuột chơi game', 'Chuột văn phòng']
    },
    {
      name: 'Logitech',
      values: ['Logitech Gaming', 'Logitech Văn phòng']
    },
    {
      name: 'Thương hiệu lót chuột',
      values: ['GEARVN', 'ASUS', 'Steelseries', 'Dare-U', 'Razer']
    },
    {
      name: 'Các loại lót chuột',
      values: ['Mềm', 'Cứng', 'Dày', 'Mỏng', 'Viền có led']
    },
    { name: 'Lót chuột theo size', values: ['Nhỏ', 'Vừa', 'Lớn'] }
  ]
},
{
  title: 'Phụ kiện',
  icon: <Gamepad2Icon size={20} strokeWidth={1} />,
  index: 11,
  content: [
    { name: 'Thiết bị Streaming', values: ['AverMedia', 'Razer'] },
    {
      name: 'Asus ROG',
      values: ['ROG Phone', 'Máy chơi game cầm tay Asus']
    },
    { name: 'Microphone', values: ['Razer', 'HyperX', 'Thronmax'] },
    { name: 'Webcam', values: ['720p', '1080p', '4K'] },
    { name: 'Đèn Led trang trí', values: ['Nanoleaf'] },
    { name: 'Balo & Túi xách', values: ['Asus', 'Túi chống sốc'] },
    {
      name: 'Đế tản nhiệt Laptop',
      values: ['Cooler Master', 'Rain Design']
    },
    {
      name: 'Tay cầm, vô lăng',
      values: [
        'Tay cầm X-Box',
        'Tay cầm MSI',
        'Tay cầm PS4',
        'Tay cầm Rapoo',
        'Tay cầm DareU',
        'Vô lăng'
      ]
    },
    {
      name: 'Cổng chuyển USB, Giá đỡ',
      values: ['Rain Design', 'Mazer', 'Ugreen']
    },
    {
      name: 'Phụ kiện dây HDMI,DP,LAN',
      values: ['Cáp HDMI', 'Cáp DP']
    },
    { name: 'Thẻ nhớ - USB', values: ['SanDisk'] },
    {
      name: 'Camera',
      values: ['Camera trong nhà', 'Camera ngoài trời']
    }
  ]
}
  ]
export default navLinks;