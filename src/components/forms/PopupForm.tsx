import { useState } from "react";
import AppFeatureButton from "../utils/Buttons/AppFeatureButton";
import Input from "../utils/Inputs/Input";

export type FieldType =
    | "text"
    | "number"
    | "select"
    | "date"
    | "textarea";

export interface FieldConfig {
    name: string;
    label: string;
    type: FieldType;
    placeholder?: string;
    options?: string[];
}

interface Props {
    title: string;
    fields: FieldConfig[];
    isOpen: boolean;
    onClose: () => void;
    onSubmit: (data: Record<string, unknown>) => void;
}

export default function PopupForm({
    title,
    fields,
    isOpen,
    onClose,
    onSubmit,
}: Props) {
    const [formData, setFormData] = useState<Record<string, unknown>>({});

    const handleChange = (name: string, value: unknown) => {
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        onSubmit(formData);
    };

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center">

            <div className="bg-white w-[450px] rounded-xl shadow-lg p-6">

                <h2 className="text-lg font-semibold mb-4">{title}</h2>

                <form onSubmit={handleSubmit} className="space-y-4">

                    {fields.map((field) => (
                        <div key={field.name}>

                            <label className="block text-sm mb-1">
                                {field.label}
                            </label>

                            {field.type === "select" ? (
                                <select
                                    className="w-full border rounded-lg p-2"
                                    onChange={(e) =>
                                        handleChange(field.name, e.target.value)
                                    }
                                >
                                    <option value="">Select</option>

                                    {field.options?.map((opt) => (
                                        <option key={opt} value={opt}>
                                            {opt}
                                        </option>
                                    ))}
                                </select>

                            ) : field.type === "textarea" ? (
                                <textarea
                                    placeholder={field.placeholder}
                                    className="w-full border rounded-lg p-2"
                                    onChange={(e) =>
                                        handleChange(field.name, e.target.value)
                                    }
                                />

                            ) : (
                                <Input inputType={field.type} placeholder={field.placeholder} value={(formData[field.name] as string) ?? ""} name={field.name} onChange={(e) =>
                                    handleChange(field.name, e.target.value)
                                } />
                            )}

                        </div>
                    ))}

                    <div className="flex justify-end gap-2 pt-3">
                        <AppFeatureButton text="Cancel" onClick={onClose} />
                        <AppFeatureButton text="Submit" />
                    </div>

                </form>

            </div>

        </div>
    );
}