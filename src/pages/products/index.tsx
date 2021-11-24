import { useEffect, useState } from "react";
import api from "../../services/api";

interface IProduct {
    Title: string;
    Year: string;
    imdmbID: string;
    Type: string;
    Poster: string;
}


const Products = () => {
    const [products, setProducts]= useState<IProduct[]>([]);

    const loadingProducts = async () => {
        const results = await api.get('/?apikey=c2da54fa&s&s=the nutty professor');
        setProducts(results.data.Search);
    };

    useEffect( () => {
        loadingProducts();
    }, []);

    return(
        <>
           <h1>Produtos</h1>
           <ul>
               {products.map((filme) => {
                   return(
                       <li> 
                           <img src={filme.Poster} />
                           {filme.Title}
                        </li>
                   );
               })}
           </ul>
        </>
    );
}
export default Products;

