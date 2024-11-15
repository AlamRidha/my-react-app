import Button from "../components/Elements/Button";
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

const email = localStorage.getItem("email");

const ProductPage = () => {
  const handleLogout = () => {
    console.log("Button logout ditekan");
    localStorage.removeItem("email");
    localStorage.removeItem("password");
    window.location.href = "/login";
  };

  return (
    <>
      <div className="flex justify-end h-16 bg-blue-400 text-white items-center px-10">
        {email}
        <Button classname="ml-5 bg-black" onClick={handleLogout}>
          Logout
        </Button>
      </div>
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
    </>
  );
};

export default ProductPage;
