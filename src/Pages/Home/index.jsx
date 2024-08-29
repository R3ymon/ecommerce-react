import { useContext, useEffect } from "react";
import Card from "../../Components/Card";
import Layout from "../../Components/Navbar/Layout";
import ProductDetail from "../../Components/ProductDetail";
import { ShoppingCartContext } from "../../Context";

function Home() {
  const context = useContext(ShoppingCartContext);

  useEffect(() => {
    if (context.selectedCategory === "All") {
      context.setFilteredItems(context.items);
    } else {
      context.setFilteredItems(
        context.items.filter(
          (item) => item.category === context.selectedCategory
        )
      );
    }
  }, [context.selectedCategory, context.items]);

  const renderView = () => {
    if (context.searchByTitle?.length > 0) {
      if (context.filteredItems?.length > 0) {
        return context.filteredItems?.map((item) => (
          <Card key={item.id} data={item} />
        ));
      } else {
        return <div>No encontrado</div>;
      }
    } else {
      return context.items?.map((item) => <Card key={item.id} data={item} />);
    }
  };

  return (
    <Layout>
      <div className="mb-10 flex items-center justify-center relative w-80">
        <h1>Home</h1>
      </div>
      <input
        type="text"
        placeholder="Buscar productos"
        className="mb-5 border-2 border-lime-300 px-2 py-2 rounded focus:outline-none"
        onChange={(event) => context.setSearchByTitle(event.target.value)}
      />
      <div className="grid gap-4 grid-cols-4 w-full max-w-screen-lg">
        {renderView()}
      </div>
      <ProductDetail />
    </Layout>
  );
}

export default Home;
