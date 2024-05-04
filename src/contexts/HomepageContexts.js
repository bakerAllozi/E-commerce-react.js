import { createContext, useContext, useEffect, useState } from "react";
const HomepageContext = createContext();

function HomepageProvider({ children }) {
  // const [searchWorld, setSearchWorld] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function fetchDataProducts() {
      setIsLoading(true);
      try {
        const res = await fetch(`https://fakestoreapi.com/products`);
        const data = await res.json();
        setProducts(data);
      } catch (err) {
        console.log(err.message);
      } finally {
        setIsLoading(false);
      }
    }
    fetchDataProducts();
  }, []);
  return (
    <HomepageContext.Provider value={{ isLoading, products }}>
      {children}
    </HomepageContext.Provider>
  );
}
function usePosts() {
  const context = useContext(HomepageContext);
  if (context === undefined)
    throw new Error("HomepageContext was used outside of the HomepageProvider"); //help ather programmr
  return context;
}
export { HomepageProvider, usePosts };
