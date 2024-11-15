import http from "@/lib/http";
import { IFilter, IProduct, ProductListRes } from "@/types/product";
import { AsyncThunk, createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import _ from "lodash";


type GenericAsyncThunk = AsyncThunk<unknown, unknown, any>;

type PendingAction = ReturnType<GenericAsyncThunk['pending']>
type RejectedAction = ReturnType<GenericAsyncThunk['rejected']>
type FulfilledAction = ReturnType<GenericAsyncThunk['fulfilled']>

interface ProductState {
  data: IProduct[],
  pagingInfo: {
    "count": number,
    "currentPage": number,
    "totalPage": number,
    "nextPage": undefined | number,
    "previousPage": undefined | number,
  }
  filter: IFilter
  productListIdSelected: string[]
  loading: boolean,
  currentRequestId: undefined | string
  searchString: string
}

const initialState: ProductState = {
  data: [],
  pagingInfo: {
    "count": 0,
    "totalPage": 0,
    "currentPage": 0,
    "nextPage": undefined,
    "previousPage": undefined,
  },
  filter: {
    category: '',
    limit: 5,
    sort: '',
    status: '',
    page: 1
  },
  productListIdSelected: [],
  searchString: '',
  loading: false,
  currentRequestId: undefined,
}

export const getProductList = createAsyncThunk(
  'product/getProductList',
  async (query: string, thunkAPI) => {
    const response = await http.get<ProductListRes>(`api/v1/product-test?${query}`, {
      signal: thunkAPI.signal,
      cache: 'no-cache'
    })
    return response.payload
  }
)

export const changeStatusProductList = createAsyncThunk(
  'product/changeStatusProductList',
  async (payload: string[], thunkAPI) => {
    const response = await http.put<{ message: string }>(`api/v1/product-test/change-status/inactive`, payload, {
      signal: thunkAPI.signal
    })
    return response.payload
  }
)

export const getProductListWithSearch = createAsyncThunk(
  'product/getProductListWithSearch',
  async ({ search, query }: { search: string, query: string }, thunkAPI) => {
    const response = await http.get<ProductListRes>(`api/v1/product-test/search/${search}?${query}`, {
      signal: thunkAPI.signal
    })
    return response.payload
  }
)

const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    changeFilter: (state, action: PayloadAction<{ [key: string]: string | number }>) => {
      state.filter = { ...state.filter, ...action.payload }
    },
    selectOneProduct: (state, action: PayloadAction<string>) => {
      let index = state.productListIdSelected.findIndex(item => item === action.payload);
      if (index !== -1) {
        state.productListIdSelected.splice(index, 1);
      } else {
        state.productListIdSelected.push(action.payload);
      }
    },
    selectAllProducts: (state, action: PayloadAction<string[]>) => {
      state.productListIdSelected = [...action.payload];
    },
    setSearchString: (state, action: PayloadAction<string>) => {
      state.searchString = action.payload;
    }

  },
  extraReducers(builder) {
    builder
      .addCase(getProductList.fulfilled, (state, action) => {
        state.data = action.payload.data;
        const pagingInfo = _.omit(action.payload, 'data');
        state.pagingInfo = { ...pagingInfo };
      })
      .addCase(changeStatusProductList.fulfilled, (state, action) => {
        console.log(action.payload);
      })
      .addCase(getProductListWithSearch.fulfilled, (state, action) => {
        state.data = action.payload.data;
        const pagingInfo = _.omit(action.payload, 'data');
        state.pagingInfo = { ...pagingInfo };
      })
      .addMatcher<PendingAction>(
        (action) => action.type.endsWith('/pending'),
        (state, action) => {
          state.loading = true
          state.currentRequestId = action.meta.requestId;
        }
      )
      .addMatcher<RejectedAction>(
        (action) => action.type.endsWith('/rejected'),
        (state, action) => {
          if (state.loading && state.currentRequestId === action.meta.requestId) {
            state.loading = false
            state.currentRequestId = undefined;
          }
        }
      )
      .addMatcher<FulfilledAction>(
        (action) => action.type.endsWith('/fulfilled'),
        (state, action) => {
          if (state.loading && state.currentRequestId === action.meta.requestId) {
            state.loading = false
            state.currentRequestId = undefined;
          }
        }
      )
  },
})

export const { changeFilter, selectOneProduct, selectAllProducts, setSearchString } = productSlice.actions
const productReducer = productSlice.reducer;
export default productReducer;