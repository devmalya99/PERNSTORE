import { Link, useResolvedPath } from "react-router";
import { MdShoppingCart } from "react-icons/md";

// import { useProductStore } from "../store/useProductStore";
import { FaBagShopping, FaPlus } from "react-icons/fa6";
function Navbar() {
  const { pathname } = useResolvedPath();
  const isHomePage = pathname === "/";

  //   const { products } = useProductStore();

  return (
    <div className="bg-base-100/80 backdrop-blur-lg border-b border-base-content/10 sticky top-0 z-50">
      <div className="max-w-8xl mx-auto">
        <div className="navbar px-4 min-h-[4rem] justify-between">
          {/* LOGO */}
          <div className="flex-1 lg:flex-none">
            <Link to="/" className="hover:opacity-80 transition-opacity">
              <div className="flex items-center gap-2">
                <MdShoppingCart className="size-9 text-primary" />
                <span
                  className="font-semibold font-mono tracking-widest text-2xl 
                    bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary"
                >
                  PERNSTORE
                </span>
              </div>
            </Link>
          </div>

          {/* RIGHT SECTION */}
          <div className="flex items-center gap-4">
            {isHomePage && (
              <>
                <div className="flex justify-center my-2 mx-auto px-4">
                  {/* The button to open modal */}
                  <label htmlFor="my_modal_6" className="btn  btn-accent">
                    Add Product
                    <FaPlus />
                  </label>
                </div>

                <div className="indicator  mx-2 ">
                  <div className="p-2 rounded-full hover:bg-base-200 transition-colors">
                    <FaBagShopping className="text-2xl" />
                    <span className="badge badge-sm badge-primary indicator-item">
                      0
                    </span>
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
export default Navbar;
