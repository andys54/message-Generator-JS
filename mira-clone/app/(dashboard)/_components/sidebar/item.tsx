"use client";

import {
   useOrganization,
   useOrganizationList 
} from "@clerk/nextjs";

import { cn } from "@/lib/utils";
import Image from "next/image";
import toast from 'react-hot-toast';


interface ItemProps {
    id: string;
    name: string;
    imageUrl: string;
};

const Item = ({
    id,
    name, 
    imageUrl
}: ItemProps) => {
    const { organization } = useOrganization();
    const { setActive } = useOrganizationList();

    const isActive = organization?.id === id;

    const onClick = () => {
        if (!setActive) return;

        setActive({ organization: id });
        toast.success('Successfully created!');
    }

    return ( 
        <div className="aspect-square relative">
            <Image
                height={24}
                width={24}
                src={imageUrl}
                alt={name}
                onClick={onClick}
                className={cn(
                    "rounded-md cursor-pointer opacity-30 hover:opacity-100 transition hover:scale-75",
                    isActive && "opacity-100 hover:scale-100"
                )}
            />
        </div>
     );
}

export default Item;