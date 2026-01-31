import { FaBox, FaShoppingCart, FaRupeeSign } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";

const OwnerDashboard = () => {
  const navigate = useNavigate();

  return (
    <div>
      {/* Header */}
      <div className="flex justify-between items-center mb-10">
        <div>
          <h1 className="text-3xl font-semibold text-gray-800">
            Seller Dashboard
          </h1>
          <p className="text-gray-500 text-sm mt-1">
            Overview of your store performance
          </p>
        </div>

        <Button
          variant="contained"
          className="!bg-blue-600 !px-6"
          onClick={() => navigate("/product-owner/products/add")}
        >
          + Add Product
        </Button>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">

        <div className="bg-white rounded-xl shadow-sm p-6 border">
          <div className="flex items-center gap-4">
            <div className="p-3 rounded-lg bg-blue-100 text-blue-600">
              <FaBox size={20} />
            </div>
            <div>
              <p className="text-sm text-gray-500">Total Products</p>
              <h2 className="text-2xl font-semibold text-gray-800">24</h2>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm p-6 border">
          <div className="flex items-center gap-4">
            <div className="p-3 rounded-lg bg-green-100 text-green-600">
              <FaShoppingCart size={20} />
            </div>
            <div>
              <p className="text-sm text-gray-500">Orders</p>
              <h2 className="text-2xl font-semibold text-gray-800">132</h2>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm p-6 border">
          <div className="flex items-center gap-4">
            <div className="p-3 rounded-lg bg-yellow-100 text-yellow-600">
              <FaRupeeSign size={20} />
            </div>
            <div>
              <p className="text-sm text-gray-500">Revenue</p>
              <h2 className="text-2xl font-semibold text-gray-800">
                ₹48,500
              </h2>
            </div>
          </div>
        </div>

      </div>

      {/* Products section */}
      <div className="bg-white rounded-xl shadow-sm border p-6">
        <h3 className="text-lg font-medium text-gray-800 mb-4">
          Your Products
        </h3>

        <div className="text-sm text-gray-500 border border-dashed rounded-lg p-6 text-center">
          No products to show yet.  
          Click <span className="font-medium">“Add Product”</span> to get started.
        </div>
      </div>
    </div>
  );
};

export default OwnerDashboard;


