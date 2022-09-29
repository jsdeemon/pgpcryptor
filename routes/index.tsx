import { Fragment } from 'preact'
import Navigation from '../components/Navigation.tsx';
import { Handlers } from '$fresh/server.ts'
import { IProduct } from '../utils/types.ts';
import { PageProps } from '$fresh/server.ts';
import ProductCard from "../components/ProductCard.tsx";

export const handler: Handlers<IProduct[] | null> = {
async GET(_, ctx) {
  const res = await fetch('https://fakestoreapi.com/products')
  const products = (await res.json()) as IProduct[] 
  if (!products) {
    return ctx.render(null)
  }
  return ctx.render(products)
}
}

export default function Home({ data: products }: PageProps<IProduct[] | null>) {

  if (!products) return <p>No products</p>

  return (
    <Fragment>
      <Navigation />
       <div class="p-4 mx-auto max-w-screen-md mt-[30px]">
   <h1>Hello there</h1>
   {/* {JSON.stringify(products)} */}
   <div>
    { products.map(prod => (
      <ProductCard key={prod.id} product={prod} />
    )) }
   </div>
    </div>
    </Fragment>
   
  );
}
