import CardProduct from "../components/Fragments/CardProduct";

const data = [
  {
    id: 1,
    nama: "Sepatu Jorn",
    image: "/images/shoes-1.jpg",
    price: "Rp 1.500.000",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum, eveniet.",
  },
  {
    id: 2,
    nama: "Sepatu Nice",
    image: "/images/shoes-1.jpg",
    price: "Rp 9.500.000",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia dolore cum error porro praesentium libero?",
  },
];

const ProductPage = () => {
  return (
    <div className="flex justify-center py-5">
      {data.map((product) => (
        <CardProduct key={product.id}>
          <CardProduct.Header image={product.image} />
          <CardProduct.Body name={product.name}>
            {product.description}
          </CardProduct.Body>
          <CardProduct.Footer price={product.price} />
        </CardProduct>
      ))}
    </div>
  );
};

export default ProductPage;
