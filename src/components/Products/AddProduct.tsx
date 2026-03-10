import { useState } from "react";
import PopupForm, { type FieldConfig } from "../forms/PopupForm";
import AppFeatureButton from "../utils/Buttons/AppFeatureButton";
import { useAppDispatch } from "../../app/hooks";
import { addProduct } from "../../features/products/ProductSlice";
import { nanoid } from "@reduxjs/toolkit";

export default function AddProduct() {
    const [open, setOpen] = useState(false);

    const fields: FieldConfig[] = [
        {
            name: "name",
            label: "Product Name",
            type: "text",
            placeholder: "Enter name",
        },
        {
            name: "type",
            label: "Type",
            type: "select",
            options: ["Seeds", "Fertilizer", "Labor"],
        },
    ];

    const dispatch = useAppDispatch();

    const handleSubmit = (data: Record<string, unknown>) => {
        const name = data.name as string;
        const type = data.type as string;
        const id = nanoid();
        dispatch(addProduct({ id, name, type }));
        setOpen(false);
    };

    return (
        <div>
            <AppFeatureButton onClick={() => setOpen(true)} text="+ Add Product" customClasses="bg-[#1A2CA3] text-white" />
            <PopupForm
                title="Add Product"
                fields={fields}
                isOpen={open}
                onClose={() => setOpen(false)}
                onSubmit={handleSubmit}
            />

        </div>
    );
}