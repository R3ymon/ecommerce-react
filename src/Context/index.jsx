import { createContext, useState, useEffect } from "react";

export const ShoppingCartContext = createContext();

export const ShoppingCartProvider = ({ children }) => {
  const [count, setCount] = useState(0);

  //Abrir y cerrar el product detail
  const [isProductDetailOpen, setIsProductDetailOpen] = useState(false);
  const openProductDetail = () => setIsProductDetailOpen(true);
  const closeProductDetail = () => setIsProductDetailOpen(false);

  //Abrir y cerrar el carrito
  const [isCheckOutOpen, setIsCheckOutOpen] = useState(false);
  const openCheckOut = () => setIsCheckOutOpen(true);
  const closeCheckOut = () => setIsCheckOutOpen(false);

  // funcion para renderizar los productos clickeados en el aside
  const [productToShow, setProductToShow] = useState({
    title: "",
    price: "",
    description: "",
    images: [],
  });
  //Visualizar los elementos añadidos al carrito
  const [cartProducts, setCartProducts] = useState([]);

  //Order
  const [order, setOrder] = useState([]);

  //obtener productos
  const [items, setItems] = useState(null);

  const [filteredItems, setFilteredItems] = useState(null);

  //obtener productos por titulo
  const [searchByTitle, setSearchByTitle] = useState(null);

  useEffect(() => {
    fetch("https://api.escuelajs.co/api/v1/products")
      .then((response) => response.json())
      .then((data) => setItems(data));
  }, []);

  const filteredItemsByTitle = (items, searchByTitle) => {
    return items?.filter((item) =>
      item.title.toLowerCase().includes(searchByTitle.toLowerCase())
    );
  };

  useEffect(() => {
    if (searchByTitle)
      setFilteredItems(filteredItemsByTitle(items, searchByTitle));
  }, [items, searchByTitle]);
  /// para filtrar por categoria
  const [selectedCategory, setSelectedCategory] = useState("All");
  return (
    <ShoppingCartContext.Provider
      value={{
        count,
        setCount,
        openProductDetail,
        closeProductDetail,
        isProductDetailOpen,
        productToShow,
        setProductToShow,
        cartProducts,
        setCartProducts,
        openCheckOut,
        closeCheckOut,
        setIsCheckOutOpen,
        isCheckOutOpen,
        order,
        setOrder,
        items,
        setItems,
        searchByTitle,
        setSearchByTitle,
        filteredItems,
        selectedCategory,
        setSelectedCategory,
        setFilteredItems,
      }}
    >
      {children}
    </ShoppingCartContext.Provider>
  );
};
