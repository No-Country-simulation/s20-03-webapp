"use client"

import { Badge } from "#/src/app/components/ui/badge";
import { Checkbox } from "#/src/app/components/ui/checkbox";
import { Payment } from "#/src/data/payments.data"
import { ColumnDef } from "@tanstack/react-table"
import { useState } from "react"; 

// Define las columnas
export const columns: ColumnDef<Payment>[] = [
    {
        accessorKey: "alumnName",
        header: "Alumn Name",
        cell: ({ row }) => {
            const status = row.original.status;
            const variant = {
                success: "success",
                failed: "destructive", // Rojo
            }[status] ?? ("default") as any;

            return <Badge variant={variant}>{row.original.alumnName}</Badge>;
        }
    },

    {
        accessorKey: "status",
        header: "Presentism",
        cell: ({ row }) => {
            const [isChecked, setIsChecked] = useState(row.original.status === "success");

            const handleCheckboxChange = (checked: boolean) => {
                setIsChecked(checked);
                row.original.status = checked ? "success" : "failed"; 
                row.toggleSelected(checked); 
            };

            return (
                <div className="flex items-center justify-start">
                    <Checkbox
                        checked={isChecked}
                        onCheckedChange={(checked) => handleCheckboxChange(checked as boolean)}
                    />
                </div>
            );
        },
    },
];