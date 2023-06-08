import { createContext, useContext, useEffect, useState } from "react";

// define all values i need
interface OrderContextValue {
  order: [];
  addItemToOrder: any;
}

const OrderContext = createContext<OrderContextValue>({} as any);

export const OrderProvider = (props: any) => {
  const [order, setOrder] = useState([] as any);
  //const [ordernum, setOrdernum] = useState("");

  const addItemToOrder = (cartItems: any) => {
    //setOrdernum(new Date().getTime().toString());
    setOrder([
      ...order,
      {
        order: cartItems,
        ordernum: new Date().getTime().toString(),
      },
    ]);
  };

  useEffect(() => {
    console.log("order", order);
  }, [order]);

  const value: OrderContextValue = {
    order,
    addItemToOrder,
  };
  return <OrderContext.Provider value={value} {...props} />;
};

export const useOrder = (): OrderContextValue => {
  const context = useContext(OrderContext);
  if (context === undefined) {
    throw new Error(`useCart must be used within a CartContextProvider.`);
  }
  return context;
};
