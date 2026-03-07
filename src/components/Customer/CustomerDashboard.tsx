import DataTable, { type Column } from "../layouts/DataTable";
import AppFeatureButton from "../utils/Buttons/AppFeatureButton";


type Customer = {
    id: number
    name: string
    phone: string
    city: string
}

const customers: Customer[] = [
    { id: 1, name: "Ravi", phone: "9876543210", city: "Delhi" },
    { id: 2, name: "Amit", phone: "9123456780", city: "Mumbai" },
]

const columns: Column<Customer>[] = [
    { header: "Customer Name", accessor: "name" },
    { header: "Phone", accessor: "phone" },
    { header: "City", accessor: "city" },
]

const CustomerDashboard = () => {
    return (
        <div>

            <div className="flex items-center justify-between px-6 py-4 border-b border-slate-200">
                <h1 className="text-lg font-semibold text-slate-800">Customers</h1>

                <div className="flex gap-2">
                    <AppFeatureButton text="Download Data" customClasses="bg-[#1A2CA3] text-white" />
                    <AppFeatureButton text="+ Add Customer" customClasses="bg-[#1A2CA3] text-white" />
                </div>
            </div>
            <div className="p-4">
                <DataTable columns={columns} data={customers} />
            </div>

        </div>
    );
}

export default CustomerDashboard;