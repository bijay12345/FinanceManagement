import { useAppSelector } from "../../app/hooks";
import type { Product } from "../../features/products/ProductSlice";
import AppLayout from "../layouts/AppLayout";
import DataTable, { type Column } from "../layouts/DataTable";
import AppFeatureButton from "../utils/Buttons/AppFeatureButton";
import AddProduct from "./AddProduct";


const columns: Column<Product>[] = [
    { header: "Product Name", accessor: "name" },
    { header: "Type", accessor: "type" },
]

const ProductDashboard = () => {
    const products: Product[] = useAppSelector((state) => state.products)
    return (
        <AppLayout>

            <div className="flex items-center justify-between px-6 py-4 border-b border-slate-200">
                <h1 className="text-lg font-semibold text-slate-800">Products</h1>

                <div className="flex gap-2">
                    <AppFeatureButton text="Download Data" customClasses="bg-[#1A2CA3] text-white" />
                    <AddProduct />
                </div>
            </div>
            <div className="p-4">
                <DataTable columns={columns} data={products} />
            </div>

        </AppLayout>
    );
}

export default ProductDashboard;