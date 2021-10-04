import ProductList from "./components/product-list";
import Cart from "./components/Cart";
import { CatalogueProvider } from "./providers/catalogue";
import { CartProvider } from "./providers/cart";
import GlobalStyle from "./styles";

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <CatalogueProvider>
        <CartProvider>
          <h1>Produtos</h1>
          <ProductList type="catalogue" />
          <h1>Carrinho</h1>
          <Cart type="cart" />
        </CartProvider>
      </CatalogueProvider>
    </div>
  );
}

export default App;
