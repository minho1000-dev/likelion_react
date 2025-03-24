import "./App.css";
import Filter from "./components/Filter";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ProductListItem from "./components/ProductListItem";

function App() {
  return (
    <>
      <Header />
      <main>
        <Filter />
        <section>
          <h2>전체 상품(2)</h2>
          <div class="product-list">
            <ProductListItem
              imgUrl="https://picsum.photos/seed/p1/200"
              name="[🎁] 따듯한 코트"
              price="120,000원"
            />
            <ProductListItem
              imgUrl="https://picsum.photos/seed/p2/200"
              name="[👖] 편한 청바지"
              price="54,000원"
            />
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

export default App;
