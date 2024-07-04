import ShopCard from "../component/ShopCard";

function Shop() {
  return (
    <main className="main-container">
      <section className="w-full flex items-center justify-between my-5">
        <p className="text-muted">Showing the result</p>
        <select className="py-2 px-4 bg-accent1 text-light rounded-md">
          <option value={"default sorting"}>Default sorting</option>
          <option value={"sort-by-popularity"}>Sort by Popularity</option>
          <option value={"sort-by-average-rating"}>
            Sort by Average Rating
          </option>
          <option value={"sort-by-latest"}>Sort by Latest</option>
          <option value={"low-to-high"}>Sort by Price:Low to High</option>
          <option value={"high-to-low"}>Sort by Price:High to Low</option>
        </select>
      </section>
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 place-items-center my-5">
        <ShopCard />
        <ShopCard />
        <ShopCard />
        <ShopCard />
        <ShopCard />
      </section>
    </main>
  );
}

export default Shop;
