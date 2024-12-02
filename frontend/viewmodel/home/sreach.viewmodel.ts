import { Product } from "@/model/product.model";
import ProductService from "@/service/product.service";
import { useEffect, useState } from "react"

export const ViewModelSearch = () => {
    const [name, setName] = useState("");
    const [dataProduct, setDataProduct] = useState<Product[]>([]);

    const getProductByName = async () => {
        const reponse = await ProductService.getProductByName(name);
        setDataProduct(reponse);
        console.log(reponse);
    }

    useEffect(() => {
        getProductByName();
    },[name])

    return {
        name, dataProduct,
        setName, getProductByName,
    }
}