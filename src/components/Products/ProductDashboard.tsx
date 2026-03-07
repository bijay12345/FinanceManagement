import AppLayout from "../layouts/AppLayout";
import DataTable, { type Column } from "../layouts/DataTable";
import AppFeatureButton from "../utils/Buttons/AppFeatureButton";


type Product = {
    id: number
    title: string
    type: string
}

const products: Product[] = [
    { id: 1, title: "Milk", type: "dairy" },
    { id: 2, title: "Dahi", type: "dairy" },
]

const columns: Column<Product>[] = [
    { header: "Product Name", accessor: "title" },
    { header: "Type", accessor: "type" },
]

const ProductDashboard = () => {
    return (
        <AppLayout>

            <div className="flex items-center justify-between px-6 py-4 border-b border-slate-200">
                <h1 className="text-lg font-semibold text-slate-800">Products</h1>

                <div className="flex gap-2">
                    <AppFeatureButton text="Download Data" customClasses="bg-[#1A2CA3] text-white" />
                    <AppFeatureButton text="+ Add Customer" customClasses="bg-[#1A2CA3] text-white" />
                </div>
            </div>
            <div className="p-4">
                <DataTable columns={columns} data={products} />
            </div>

        </AppLayout>
    );
}

export default ProductDashboard;