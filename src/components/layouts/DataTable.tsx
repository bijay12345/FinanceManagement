export type Column<T> = {
    header: string;
    accessor: keyof T;
};

type DataTableProps<T> = {
    columns: Column<T>[];
    data: T[];
};

export default function DataTable<T extends { id: number | string }>({
    columns,
    data,
}: DataTableProps<T>) {
    return (
        <div className="bg-white border border-slate-200 rounded-xl shadow-sm overflow-hidden">
            <table className="w-full text-sm text-left">

                {/* Header */}
                <thead className="bg-gradient-to-r from-slate-50 to-slate-100 text-slate-700">
                    <tr>
                        {columns.map((col) => (
                            <th
                                key={String(col.accessor)}
                                className="px-6 py-4 text-xs font-semibold tracking-wider uppercase"
                            >
                                {col.header}
                            </th>
                        ))}
                    </tr>
                </thead>

                {/* Body */}
                <tbody className="divide-y divide-slate-100">
                    {data.map((row, index) => (
                        <tr
                            key={row.id}
                            className={`transition duration-150 hover:bg-blue-50 hover:shadow-sm ${index % 2 === 0 ? "bg-white" : "bg-slate-50/40"
                                }`}
                        >
                            {columns.map((col) => (
                                <td
                                    key={String(col.accessor)}
                                    className="px-6 py-4 text-slate-700 font-medium"
                                >
                                    {String(row[col.accessor])}
                                </td>
                            ))}
                        </tr>
                    ))}
                </tbody>

            </table>
        </div>
    );
}

