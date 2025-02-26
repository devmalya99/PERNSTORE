import { useEffect } from "react";
import { PackageIcon, PlusCircleIcon, RefreshCwIcon } from "lucide-react";
import ProductHeroCards from "../components/ProductHeroCards";
import { FaPlus } from "react-icons/fa6";
import { useProductStore } from "../store/useProductStore";
import CardSkeleton from "../components/skeleton/CardSkeleton";
import AddProductModel from "../components/AddProductModel";

const HomePage = () => {
  const { products, loading, error, fetchProducts } = useProductStore();

  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);

  console.log("products", products);

  return (
    <div className=" mx-10">

    

      <div className="flex justify-end items-center my-10 py-2 mx-12">
        <div className="">
          {/* The button to open modal */}
          <label htmlFor="my_modal_6" className="btn  btn-accent">
            Add Product
            <FaPlus />
          </label>
        </div>

        <button className="btn btn-ghost btn-circle" onClick={fetchProducts}>
          <RefreshCwIcon className="size-5" />
        </button>
      </div>

      {error && <div className="alert alert-error mb-8">{error}</div>}

      <div className="flex flex-wrap justify-center gap-3 mt-6">
        {loading && (
          <div className="flex flex-wrap justify-center gap-3 mt-6">
            <CardSkeleton />
            <CardSkeleton />
          </div>
        )}

        {error && (
          <div className="flex flex-wrap justify-center gap-3 mt-6">
            <h1 className="text-2xl font-bold">Something went wrong</h1>
          </div>
        )}

        {products?.data?.length > 0 &&
          products?.data?.map((product) => (
            <ProductHeroCards key={product.id} product={product} />
          ))}
      </div>
    </div>
  );
};

export default HomePage;
