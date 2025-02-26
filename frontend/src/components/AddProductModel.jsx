import React from "react";
import { FaBoxesPacking, FaDollarSign, FaGlasses, FaImages } from "react-icons/fa6";

const AddProductModel = () => {

    const addProduct=(e)=>{

    }



  return (
    <>
      {/* Put this part before </body> tag */}
      <input type="checkbox" id="my_modal_6" className="modal-toggle" />

      <div className="modal" role="dialog">
        <div className="modal-box">
          <h3 className="text-lg font-bold mb-4">Add Product</h3>
        

          {/* form to add product */}

          <form
            onSubmit={addProduct}
            className="space-y-6"
          >
            <div className="grid gap-6">
              {/* PRODUCT NAME INPUT */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-base font-medium">
                    Product Name
                  </span>
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-base-content/50">
                    <FaBoxesPacking className="size-5" />
                  </div>
                  <input
                    type="text"
                    placeholder="Enter product name"
                    className="input input-bordered w-full pl-10 py-3 focus:input-primary transition-colors duration-200"
                    //   value={formData.name}
                    //   onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  />
                </div>
              </div>

              {/* PRODUCT PRICE INPUT */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-base font-medium">
                    Price
                  </span>
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-base-content/50">
                    <FaDollarSign className="size-5" />
                  </div>
                  <input
                    type="number"
                    min="0"
                    step="0.01"
                    placeholder="0.00"
                    className="input input-bordered w-full pl-10 py-3 focus:input-primary transition-colors duration-200"
                    //   value={formData.price}
                    //   onChange={(e) => setFormData({ ...formData, price: e.target.value })}
                  />
                </div>
              </div>

              {/* PRODUCT IMAGE URL*/}
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-base font-medium">
                    Image URL
                  </span>
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-base-content/50">
                    <FaImages className="size-5" />
                  </div>
                  <input
                    type="text"
                    placeholder="https://example.com/image.jpg"
                    className="input input-bordered w-full pl-10 py-3 focus:input-primary transition-colors duration-200"
                    //   value={formData.image}
                    //   onChange={(e) => setFormData({ ...formData, image: e.target.value })}
                  />
                </div>
              </div>

              {/* PRODUCT DESCRIPTION */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-base font-medium">
                    Product description
                  </span>
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-base-content/50">
                    <FaGlasses className="size-5" />
                  </div>
                  <input
                    type="text"
                    placeholder="Add some description"
                    className="input input-bordered w-full pl-10 py-3 focus:input-primary transition-colors duration-200"
                    //   value={formData.image}
                    //   onChange={(e) => setFormData({ ...formData, image: e.target.value })}
                  />
                </div>
              </div>



            </div>

            {/* MODAL ACTIONS */}
            <div className="modal-action">
              <label htmlFor="my_modal_6" className="btn btn-ghost">
                Close!
              </label>

              <button
                type="submit"
                className="btn btn-primary min-w-[120px]"
                //   disabled={!formData.name || !formData.price || !formData.image || loading}
              >
                {/* {loading ? (
                <span className="loading loading-spinner loading-sm" />
              ) : (
                <>
                  <PlusCircleIcon className="size-5 mr-2" />
                  Add Product
                </>
              )} */}
                add product button
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default AddProductModel;
