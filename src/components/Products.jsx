import Product1 from "../assets/product1.jpg";
import Product2 from "../assets/product2.jpg";
import Product3 from "../assets/product3.jpg";
import Product4 from "../assets/product4.jpg";
import Product5 from "../assets/product5.jpg";
import Product6 from "../assets/product6.jpg";
import Product7 from "../assets/product7.jpg";
import Product8 from "../assets/product8.jpg";
import Product9 from "../assets/product9.jpg";

export default function Products() {
  const data = [
    {
      imageLink: Product1,
    },
    {
      imageLink: Product2,
    },
    {
      imageLink: Product3,
    },
    {
      imageLink: Product4,
    },
    {
      imageLink: Product9,
    },
    {
      imageLink: Product6,
    },
    {
      imageLink: Product7,
    },
    {
      imageLink: Product8,
    },
    {
      imageLink: Product5,
    },
  ];

  return (
    <div className="">
      <div className="w-[80%] md:w-[75%] mx-auto grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
        {data.map(({ imageLink }, index) => (
          <div className="overflow-hidden rounded-lg" key={index}>
            <img
              className="hover:scale-[1.3] duration-300 h-60 w-full max-w-full rounded-lg object-cover object-center"
              src={imageLink}
              alt="gallery-photo"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
