import { Cpu, Laptop, Monitor, Mouse, PcCase } from "lucide-react";

export const navLinks = [
  {
    "name": "Laptop",
    "children": [
      {
        "name": "Laptop theo Thương hiệu",
        'url': 'https://nguyencongpc.vn/media/category/cat_big_3439_1696998444.png',
        "children": [
          {
            "name": "ACER",
            "slug": "laptop-acer"
          },
          {
            "name": "ASUS",
            "slug": "laptop-asus"
          },
          {
            "name": "MSI",
            "slug": "laptop-msi"
          },
          {
            "name": "LENOVO",
            "slug": "laptop-lenovo"
          },
          {
            "name": "DELL",
            "slug": "laptop-dell"
          },
          {
            "name": "HP",
            "slug": "laptop-hp"
          }
        ],
        "slug": "laptop-theo-thuong-hieu"
      },
      {
        "name": "Laptop theo Nhu cầu sử dụng",
        url: 'https://nguyencongpc.vn/media/category/cat_big_3441_1696998746.png',
        "children": [
          {
            "name": "Laptop Gaming",
            "slug": "laptop-gaming"
          },
          {
            "name": "Laptop đồ họa",
            "slug": "laptop-do-hoa"
          },
          {
            "name": "Laptop văn phòng",
            "slug": "laptop-van-phong"
          }
        ],
        "slug": "laptop-theo-nhu-cau-su-dung"
      },
      {
        "name": "Laptop theo Chọn theo bộ vi xử lý",
        url: 'https://nguyencongpc.vn/media/category/cat_big_3443_1696996834.png',
        "children": [
          {
            "name": "Intel",
            "slug": "latop-intel"
          },
          {
            "name": "AMD",
            "slug": "lap-amd"
          }
        ],
        "slug": "laptop-theo-chon-theo-bo-vi-xu-ly"
      }
    ],
    "slug": "laptop",
    img: '',
    icon: <Laptop size={18} />
  },
  {
    "name": "PC",
    "children": [
      {
        "name": "PC theo nhu cầu",
        "children": [
          {
            "name": "PC Văn phòng",
            "slug": "pc-van-phong"
          },
          {
            "name": "PC Gaming",
            "slug": "pc-gaming"
          },
          {
            "name": "PC Đồ họa",
            "slug": "pc-do-hoa"
          }
        ],
        "slug": "pc-theo-nhu-cau"
      },
      {
        "name": "Chọn theo bộ vi xử lý",
        "children": [
          {
            "name": "PC Intel I3",
            "slug": "pc-intel-i3"
          },
          {
            "name": "PC Intel I5",
            "slug": "pc-intel-i5"
          },
          {
            "name": "PC Intel I7",
            "slug": "pc-intel-i7"
          },
          {
            "name": "PC Intel I9",
            "slug": "pc-intel-i9"
          },
          {
            "name": "PC AMD Ryzen 3",
            "slug": "pc-amd-ryzen-3"
          },
          {
            "name": "PC AMD Ryzen 5",
            "slug": "pc-amd-ryzen-5"
          },
          {
            "name": "PC AMD Ryzen 7",
            "slug": "pc-amd-ryzen-7"
          }
        ],
        "slug": "chon-theo-bo-vi-xu-ly"
      }
    ],
    img: 'https://file.hstatic.net/200000722513/file/web_collection_1920x420_2d46272fff834dd88c5d6aba52cd24b1.png',
    "slug": "pc",
    icon: <PcCase size={18} />
  },
  {
    "name": "Linh kiện máy tính",
    "children": [
      {
        "name": "CPU - Bộ vi xử lý",
        "children": [
          {
            "name": "CPU Intel",
            "slug": "cpu-intel"
          },
          {
            "name": "PC AMD",
            "slug": "pc-amd"
          }
        ],
        "slug": "cpu-bo-vi-xu-ly"
      },
      {
        "name": "VGA - Card màn hình",
        "children": [
          {
            "name": "VGA Asus",
            "slug": "vga-asus"
          },
          {
            "name": "VGA Zotac",
            "slug": "vga-zotac"
          },
          {
            "name": "VGA Nvidia - Quadro",
            "slug": "vga-nvidia-quadro"
          },
          {
            "name": "VGA Msi",
            "slug": "vga-msi"
          },
          {
            "name": "VGA Inno3D",
            "slug": "vga-inno3d"
          },
          {
            "name": "VGA Gigabyte",
            "slug": "vga-gigabyte"
          },
          {
            "name": "VGA Galax",
            "slug": "vga-galax"
          }
        ],
        "slug": "vga-card-man-hinh"
      },
      {
        "name": "Main - Bo mạch chủ",
        "children": [],
        "slug": "main-bo-mach-chu"
      },
      {
        "name": "RAM - Bộ nhớ trong",
        "children": [
          {
            "name": "RAM Colorful",
            "slug": "ram-colorful"
          },
          {
            "name": "RAM LAPTOP",
            "slug": "ram-laptop"
          },
          {
            "name": "RAM Samsung",
            "slug": "ram-samsung"
          },
          {
            "name": "RAM Kingston",
            "slug": "ram-kingston"
          },
          {
            "name": "RAM Gskill",
            "slug": "ram-gskill"
          },
          {
            "name": "RAM Geil",
            "slug": "ram-geil"
          },
          {
            "name": "RAM Corsair",
            "slug": "ram-corsair"
          }
        ],
        "slug": "ram-bo-nho-trong"
      },
      {
        "name": "PSU - Nguồn máy tính",
        "children": [
          {
            "name": "Nguồn ASUS",
            "slug": "nguon-asus"
          },
          {
            "name": "Nguồn Sharkoon",
            "slug": "nguon-sharkoon"
          },
          {
            "name": "Nguồn NZXT",
            "slug": "nguon-nzxt"
          },
          {
            "name": "Nguồn Xigmatek",
            "slug": "nguon-xigmatek"
          },
          {
            "name": "Nguồn Thermaltake",
            "slug": "nguon-thermaltake"
          },
          {
            "name": "Nguồn Super Flower",
            "slug": "nguon-super-flower"
          },
          {
            "name": "Nguồn Gigabyte",
            "slug": "nguon-gigabyte"
          },
          {
            "name": "Nguồn Corsair",
            "slug": "nguon-corsair"
          },
          {
            "name": "Nguồn Cooler Master",
            "slug": "nguon-cooler-master"
          }
        ],
        "slug": "psu-nguon-may-tinh"
      },
      {
        "name": "CASE - Vỏ máy tính",
        "children": [
          {
            "name": "Case Asus",
            "slug": "case-asus"
          },
          {
            "name": "Nguồn Cooler Master",
            "slug": "nguon-cooler-master"
          },
          {
            "name": "Case MSI",
            "slug": "case-msi"
          },
          {
            "name": "Nguồn Xigmateck",
            "slug": "nguon-xigmateck"
          }
        ],
        "slug": "case-vo-may-tinh"
      }
    ],
    img: '',
    "slug": "linh-kien-may-tinh",
    icon: <Cpu size={18} />
  },
  {
    "name": "Màn hình",
    "children": [
      {
        "name": "Chọn theo hãng",
        "children": [
          {
            "name": "Màn hình Asus",
            "slug": "man-hinh-asus"
          },
          {
            "name": "Màn hình MSI",
            "slug": "man-hinh-msi"
          },
          {
            "name": "Màn hình Viewsonic",
            "slug": "man-hinh-viewsonic"
          },
          {
            "name": "Màn hình Samsung",
            "slug": "man-hinh-samsung"
          },
          {
            "name": "Màn hình LG",
            "slug": "man-hinh-lg"
          }
        ],
        "slug": "chon-theo-hang"
      },
      {
        "name": "Chọn theo tần số quét",
        "children": [
          {
            "name": "Tần số quét 60Hz",
            "slug": "tan-so-quet-60hz"
          },
          {
            "name": "Tần số quét 90Hz",
            "slug": "tan-so-quet-90hz"
          },
          {
            "name": "Tần số quét 120Hz",
            "slug": "tan-so-quet-120hz"
          },
          {
            "name": "Tần số quét 144Hz",
            "slug": "tan-so-quet-144hz"
          },
          {
            "name": "Tần số quét 240Hz",
            "slug": "tan-so-quet-240hz"
          }
        ],
        "slug": "chon-theo-tan-so-quet"
      },
      {
        "name": "Chọn theo kích thước",
        "children": [
          {
            "name": "Màn hình 24inches",
            "slug": "man-hinh-24inches"
          },
          {
            "name": "Màn hình 27inches",
            "slug": "man-hinh-27inches"
          },
          {
            "name": "Màn hình 29inches",
            "slug": "man-hinh-29inches"
          },
          {
            "name": "Màn hình 32inches",
            "slug": "man-hinh-32inches"
          }
        ],
        "slug": "chon-theo-kich-thuoc"
      },
      {
        "name": "Chọn theo độ phân giải",
        "children": [
          {
            "name": "1920x1080 (FHD)",
            "slug": "1920x1080-fhd"
          },
          {
            "name": "2560x1440 (2K)",
            "slug": "2560x1440-2k"
          },
          {
            "name": "3840x2160 (4K)",
            "slug": "3840x2160-4k"
          }
        ],
        "slug": "chon-theo-do-phan-giai"
      }
    ],
    img: '',
    "slug": "man-hinh",
    icon: <Monitor size={18} />
  },
  {
    "name": "Phím, chuột, ghế, gear",
    "children": [
      {
        "name": "Chuột",
        "children": [
          {
            "name": "Chuột có dây",
            "slug": "chuot-co-day"
          },
          {
            "name": "Chuột không dây",
            "slug": "chuot-khong-day"
          }
        ],
        "slug": "chuot"
      },
      {
        "name": "Bàn phím",
        "children": [
          {
            "name": "Bàn phím có dây",
            "slug": "ban-phim-co-day"
          },
          {
            "name": "Bàn phím không dây",
            "slug": "ban-phim-khong-day"
          }
        ],
        "slug": "ban-phim"
      },
      {
        "name": "Loa, tai nghe",
        "children": [
          {
            "name": "Loa, tai nghe có dây",
            "slug": "loa-tai-nghe-co-day"
          },
          {
            "name": "Loa, tai nghe không dây",
            "slug": "loa-tai-nghe-khong-day"
          }
        ],
        "slug": "loa-tai-ghe"
      }
    ],
    img: '',
    "slug": "phim-chuot-ghe-gear",
    icon: <Mouse size={18} />
  }
]


export const filter = {
  'laptop': [
    {
      name: 'brand',
      nameV: "Thương hiệu",
      values: [
        {
          name: 'Asus',
          value: 'asus'
        }, {
          name: 'Acer',
          value: 'acer'
        }
        , {
          name: 'Dell',
          value: 'dell'
        }
        , {
          name: 'MSI',
          value: 'msi'
        }
        , {
          name: 'HP',
          value: 'hp'
        }
      ]
    }, {
      name: 'cpu',
      nameV: "Bộ vi xử lý CPU",
      values: [
        {
          name: 'Intel core i5',
          value: 'intel-core-i5'
        },
        {
          name: 'Intel core i3',
          value: 'intel-core-i3'
        },
        {
          name: 'Intel core i7',
          value: 'intel-core-i7'
        },
        {
          name: 'Intel core i9',
          value: 'intel-core-i9'
        },
        {
          name: 'AMD ryzen 3',
          value: 'amd-ryzen-3'
        },
        {
          name: 'AMD ryzen 7',
          value: 'amd-ryzen-7'
        },
        {
          name: 'AMD ryzen 5',
          value: 'amd-ryzen-5'
        },
      ]
    }, {
      name: 'ram',
      nameV: "Dung lượng ram",
      values: [
        {
          name: '8GB',
          value: '8gb'
        },
        {
          name: '16GB',
          value: '16gb'
        },
        {
          name: '32GB',
          value: '32gb'
        },
      ]
    }, {
      name: 'vga',
      nameV: "Card đồ họa rời VGA",
      values: [
        {
          name: 'Card rời AMD',
          value: 'amd'
        },
        {
          name: 'Card rời Intel',
          value: 'intel'
        },
        {
          name: 'Card onboard',
          value: 'onboard'
        },
      ]
    }, {
      name: 'monitor',
      nameV: "Kích thước màn hình",
      values: [
        {
          name: '14 inches',
          value: '14-inches'
        },
        {
          name: '15 inches',
          value: '15-inches'
        },
        {
          name: '16 inches',
          value: '16-inches'
        },
        {
          name: '17 inches',
          value: '17-inches'
        },
      ]
    }, {
      name: 'weight',
      nameV: "Trọng lượng",
      values: [
        {
          name: 'Trên 2kg',
          value: 'tren-2kg'
        },
        {
          name: 'Dưới 2kg',
          value: 'duoi-2kg'
        }
      ]
    }, {
      name: 'hardDriver',
      nameV: "Dung lượng ổ cứng",
      values: [
        {
          name: '256GB',
          value: '256gb'
        },
        {
          name: '512GB',
          value: '512gb'
        },
        {
          name: '1TB',
          value: '1tb'
        }

      ]
    }
  ],
  'pc': [
    {
      name: 'cpu',
      nameV: "Bộ vi xử lý CPU",
      values: [
        {
          name: 'Intel core i5',
          value: 'intel-core-i5'
        },
        {
          name: 'Intel core i3',
          value: 'intel-core-i3'
        },
        {
          name: 'Intel core i7',
          value: 'intel-core-i7'
        },
        {
          name: 'Intel core i9',
          value: 'intel-core-i9'
        },
        {
          name: 'AMD ryzen 3',
          value: 'amd-ryzen-3'
        },
        {
          name: 'AMD ryzen 7',
          value: 'amd-ryzen-7'
        },
        {
          name: 'AMD ryzen 5',
          value: 'amd-ryzen-5'
        },
      ]
    }, {
      name: 'ram',
      nameV: "Dung lượng ram",
      values: [
        {
          name: '8GB',
          value: '8gb'
        },
        {
          name: '16GB',
          value: '16gb'
        },
        {
          name: '32GB',
          value: '32gb'
        },
      ]
    }, {
      name: 'vga',
      nameV: "Card đồ họa rời VGA",
      values: [
        {
          name: 'Card rời AMD',
          value: 'amd'
        },
        {
          name: 'Card rời Intel',
          value: 'intel'
        }
      ]
    }, {
      name: 'hardDriver',
      nameV: "Dung lượng ổ cứng",
      values: [
        {
          name: '256GB',
          value: '256gb'
        },
        {
          name: '512GB',
          value: '512gb'
        },
        {
          name: '1TB',
          value: '1tb'
        }

      ]
    }
  ]
}