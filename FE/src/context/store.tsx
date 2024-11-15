'use client'

import { createContext, useContext, Dispatch, SetStateAction, useState} from 'react';

type CartStep = {
  name: string;
  icon: JSX.Element;
  status: boolean;
}

interface ContextProps {
  cartSteps: CartStep[];
  setCartSteps: Dispatch<SetStateAction<CartStep[]>>;
}

const GlobalContext = createContext<ContextProps>({
  cartSteps: [],
  setCartSteps: (): CartStep[] => [],
})

const steps:CartStep[] = [
  {
    name: 'Thông tin đặt hàng',
    icon: <svg viewBox="0 0 29 28" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="14.1709" cy="14" r="13.5" stroke="#535353"></circle>
      <path d="M7.16553 10.6667C7.16553 10.2246 7.34987 9.80072 7.678 9.48816C8.00614 9.17559 8.45118 9 8.91523 9H19.4134C19.8775 9 20.3225 9.17559 20.6507 9.48816C20.9788 9.80072 21.1631 10.2246 21.1631 10.6667V11.5H7.16553V10.6667ZM7.16553 13.1667V17.3333C7.16553 17.7754 7.34987 18.1993 7.678 18.5118C8.00614 18.8244 8.45118 19 8.91523 19H19.4134C19.8775 19 20.3225 18.8244 20.6507 18.5118C20.9788 18.1993 21.1631 17.7754 21.1631 17.3333V13.1667H7.16553ZM9.79008 14.8333H10.6649C10.897 14.8333 11.1195 14.9211 11.2835 15.0774C11.4476 15.2337 11.5398 15.4457 11.5398 15.6667V16.5C11.5398 16.721 11.4476 16.933 11.2835 17.0893C11.1195 17.2455 10.897 17.3333 10.6649 17.3333H9.79008C9.55805 17.3333 9.33553 17.2455 9.17147 17.0893C9.0074 16.933 8.91523 16.721 8.91523 16.5V15.6667C8.91523 15.4457 9.0074 15.2337 9.17147 15.0774C9.33553 14.9211 9.55805 14.8333 9.79008 14.8333Z" fill="#535353"></path>
    </svg>,
    status: false
  },
  {
    name: 'Thanh toán',
    icon: <svg viewBox="0 0 29 28" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="14.1709" cy="14" r="13.5" stroke="#535353"></circle>
      <path d="M7.16553 10.6667C7.16553 10.2246 7.34987 9.80072 7.678 9.48816C8.00614 9.17559 8.45118 9 8.91523 9H19.4134C19.8775 9 20.3225 9.17559 20.6507 9.48816C20.9788 9.80072 21.1631 10.2246 21.1631 10.6667V11.5H7.16553V10.6667ZM7.16553 13.1667V17.3333C7.16553 17.7754 7.34987 18.1993 7.678 18.5118C8.00614 18.8244 8.45118 19 8.91523 19H19.4134C19.8775 19 20.3225 18.8244 20.6507 18.5118C20.9788 18.1993 21.1631 17.7754 21.1631 17.3333V13.1667H7.16553ZM9.79008 14.8333H10.6649C10.897 14.8333 11.1195 14.9211 11.2835 15.0774C11.4476 15.2337 11.5398 15.4457 11.5398 15.6667V16.5C11.5398 16.721 11.4476 16.933 11.2835 17.0893C11.1195 17.2455 10.897 17.3333 10.6649 17.3333H9.79008C9.55805 17.3333 9.33553 17.2455 9.17147 17.0893C9.0074 16.933 8.91523 16.721 8.91523 16.5V15.6667C8.91523 15.4457 9.0074 15.2337 9.17147 15.0774C9.33553 14.9211 9.55805 14.8333 9.79008 14.8333Z" fill="#535353"></path>
    </svg>,
    status: false
  },
  {
    name: 'Hoàn tất',
    icon: <svg viewBox="0 0 29 28" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="14.4321" cy="14" r="13.5" stroke="#535353"></circle>
      <path d="M13.0988 17.1818L10.4321 14.6364L11.3721 13.7391L13.0988 15.3809L17.4921 11.1873L18.4321 12.0909M14.4321 7L8.43213 9.54545V13.3636C8.43213 16.8955 10.9921 20.1982 14.4321 21C17.8721 20.1982 20.4321 16.8955 20.4321 13.3636V9.54545L14.4321 7Z" fill="#535353"></path>
    </svg>,
    status: false
  }
]

export const GlobalContextProvider = ({children}: Readonly<{
  children: React.ReactNode;
}>) => {
  const [cartSteps, setCartSteps] = useState<[] | CartStep[]>(steps);

  return (
    <GlobalContext.Provider value={{cartSteps, setCartSteps}}>
      {children}
    </GlobalContext.Provider>
  )
}

export const useGlobalContext = () => useContext(GlobalContext);