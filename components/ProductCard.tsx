import { IProduct } from '../utils/types.ts';

interface ProductCarfProps {
product: IProduct
}

export default function ProductCard({ product }: ProductCarfProps) {

    return <div class="border rounded px-4 py-2 mb-2 flex flex-col justify-center items-center">
        <img src={product.image} alt={product.title} class="w-1/6" />
        <h2 class='font-bold text-lg'>{product.title}</h2>
        <p class="font-bold">{product.price} $</p>
    </div>
    
}