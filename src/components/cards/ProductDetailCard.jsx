import { Card } from "flowbite-react";

export function ProductDetailCard({ thumbnail, title, description, price }) {
  return (
    <Card horizontal>
      <div className="flex w-full">
        <img className="w-full mr-5" src={thumbnail} alt="product image" />
        <div>
          <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {title}
          </h5>
          <p className="font-normal text-gray-700 dark:text-gray-400">
            {description}
          </p>
          <p className="text-2xl font-semibold text-cyan-700">{price}$</p>
        </div>
      </div>
    </Card>
  );
}
