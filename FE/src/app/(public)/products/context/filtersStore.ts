import slugify from 'slugify';
import { create } from 'zustand';

export type Filter = {
  title: string,
  key: string,
  values: string[]
}
export type FilterPrice = {
  title: string,
  values: {
    min: number,
    max: number
  }
}

export type State = {
  filters: Filter[]
  filterPrice: FilterPrice
  filtersSlected: Filter[]
}


export type FilterActions = {
  addFilter: (title: string ,filter: string) => void;
  removeFilter: (title: string) => void;
  removeAllFilters: () => void;
  checkFilter: (fitler:string) => boolean;
  filterSearchPrams: () => string;
}


const initFilterValue: Filter[] = [
  {
    title: 'Hãng',
    key: 'hang',
    values: ['Acer']
  }, {
    title: 'CPU',
    values: ['AMD Ryzen 5', 'AMD Ryzen 7', 'AMD Ryzen 9', 'Intel Core i5', 'Intel Core i7', 'Intel Core i9'],
    key: 'cpu'
  }, {
    title: 'Kích thước màn hình',
    values: ['15.6 inch', '16 inch', '17 inch', '18 inch'],
    key: 'kichThuocManHinh'
  }, {
    title: 'Nhu cầu sử dụng',
    values: ['Gaming', 'Văn phòng', 'Đồ họa'],
    key: 'nhuCauSuDung'
  }, {
    title: 'RAM',
    values: ['8GB', '16GB'],
    key: 'ram'
  }, {
    title: 'SSD',
    values: ['1TB', '512GB'],
    key: 'ssd'
  }, {
    title: 'VGA',
    values: ['RTX 2050', 'RTX 3050', 'RTX 3060', 'RTX 3070Ti', 'RTX 4050', 'RTX 4060', 'RTX 4070', 'RTX 4080'],
    key: 'vga'
  }
]
const initFiltersSelected: Filter[] = [
{
    title: 'Hãng',
    key: 'hang',
    values: []
  }, {
    title: 'CPU',
    values: [],
    key: 'cpu'
  }, {
    title: 'Kích thước màn hình',
    values: [],
    key: 'cpu'
  }, {
    title: 'Nhu cầu sử dụng',
    values: [],
    key: 'nhuCauSuDung'
  }, {
    title: 'RAM',
    values: [],
    key: 'ram'
  }, {
    title: 'SSD',
    values: [],
    key: 'ssd'
  }, {
    title: 'VGA',
    values: [],
    key: 'vga'
  }
]


export const useFiltersStore = create<State & FilterActions>(set => ({
  filters: initFilterValue,
  filterPrice: {
    title: 'Gia',
    values: {
      min: 1000000,
      max: 2000000
    }
  },
  filtersSlected: [...initFiltersSelected],
  addFilter: (title ,filter) => set(state => {
    const newFiltersSeleted = [...state.filtersSlected];
    const index = newFiltersSeleted.findIndex(item => item.title === title);
    if(!newFiltersSeleted[index].values.includes(filter)) {
      newFiltersSeleted[index].values.push(filter);
      return {
        filtersSlected: [...newFiltersSeleted]
      }
    }else {
      const a =  newFiltersSeleted[index].values.filter(item => item !== filter);
      newFiltersSeleted[index].values = [...a];
      return {
        filtersSlected: [...newFiltersSeleted]
      }
    }
    return {}
  }),
  removeFilter: (title) => set(state => {
    const index = state.filtersSlected.findIndex(item => item.title === title);
    state.filtersSlected[index].values = [];
    return {
      filtersSlected: [...state.filtersSlected]
    };
  }),
  removeAllFilters: () => set(state => {
    return {
      filtersSlected: state.filtersSlected.map(item => {
        item.values = [];
        return item;
      })
    }
  }),
  checkFilter: (filter) => {
    const filtersSelected = [...useFiltersStore().filtersSlected];
    if(filtersSelected.some(item => item.values.includes(filter))) return true;
    return false;
  },
  filterSearchPrams: () => {
    let filtersSelected: Filter[] = []
    set(state => {
      filtersSelected = [...state.filtersSlected];
      return {}
    })
    const abx = filtersSelected.map((item, index) =>
          `${item.values.length ? `${item.key}=${item.values.map(item => slugify(item, {
            replacement: '',
            lower: true,
          })).join(',')}` : ``}`);
    return abx.filter(item => item ? item : false).join('&');
    // return '';
  }
}))