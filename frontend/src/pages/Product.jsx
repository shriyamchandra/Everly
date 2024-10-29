// src/pages/Product.jsx
import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { ShopContext } from '../context/ShopContext';
import { assets } from '../assets/assets';
import RelatedProducts from '../components/RelatedProducts';

const Product = () => {
  const { productId } = useParams();
  const { products, currency, addToCart } = useContext(ShopContext);
  const [productData, setProductData] = useState(null);
  const [image, setImage] = useState('');
  const [size, setSize] = useState('');

  const fetchProductData = () => {
    const foundProduct = products.find((item) => item._id === productId);
    if (foundProduct) {
      setProductData(foundProduct);
      setImage(foundProduct.image[0]);
    }
  };

  useEffect(() => {
    fetchProductData();
  }, [productId, products]);

  if (!productData) {
    return <div className="opacity-0"></div>;
  }

  return (
    <div className="border-t-2 border-border pt-10 transition-opacity ease-in duration-500 opacity-100 bg-background text-text">
      {/*----------- Product Data-------------- */}
      <div className="flex gap-12 sm:gap-12 flex-col sm:flex-row">
        {/*---------- Product Images------------- */}
        <div className="flex-1 flex flex-col-reverse gap-3 sm:flex-row">
          <div className="flex sm:flex-col overflow-x-auto sm:overflow-y-scroll justify-between sm:justify-normal sm:w-[18.7%] w-full bg-secondary p-2 rounded">
            {productData.image.map((item, index) => (
              <img
                onClick={() => setImage(item)}
                src={item}
                key={index}
                className="w-[24%] sm:w-full sm:mb-3 flex-shrink-0 cursor-pointer rounded"
                alt={`${productData.name} ${index + 1}`}
              />
            ))}
          </div>
          <div className="w-full sm:w-[80%] bg-secondary p-2 rounded">
            <img className="w-full h-auto" src={image} alt={productData.name} />
          </div>
        </div>

        {/* -------- Product Info ---------- */}
        <div className="flex-1">
          <h1 className="font-medium text-2xl mt-2 text-primary">{productData.name}</h1>
          <div className="flex items-center gap-1 mt-2">
            <img src={assets.star_icon} alt="Star" className="w-3 h-3" />
            <img src={assets.star_icon} alt="Star" className="w-3 h-3" />
            <img src={assets.star_icon} alt="Star" className="w-3 h-3" />
            <img src={assets.star_icon} alt="Star" className="w-3 h-3" />
            <img src={assets.star_dull_icon} alt="Star" className="w-3 h-3" />
            <p className="pl-2 text-gray-500">(122)</p>
          </div>
          <p className="mt-5 text-3xl font-medium text-primary">
            {currency}
            {productData.price}
          </p>
          <p className="mt-5 text-gray-500 md:w-4/5">{productData.description}</p>
          <div className="flex flex-col gap-4 my-8">
            <p>Select Size</p>
            <div className="flex gap-2">
              {productData.sizes.map((item, index) => (
                <button
                  onClick={() => setSize(item)}
                  className={`border border-border py-2 px-4 bg-secondary rounded ${item === size ? 'border-primary text-primary' : ''
                    }`}
                  key={index}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
          <button
            onClick={() => addToCart(productData._id, size)}
            className="bg-primary text-background px-8 py-3 text-sm rounded hover:bg-accent-coral transition-colors duration-300"
            disabled={!size}
          >
            ADD TO CART
          </button>
          <hr className="mt-8 sm:w-4/5 border-border" />
          <div className="text-sm text-gray-500 mt-5 flex flex-col gap-1">
            <p>100% Original product.</p>
            <p>Cash on delivery is available on this product.</p>
            <p>Easy return and exchange policy within 7 days.</p>
          </div>
        </div>
      </div>

      {/* ---------- Description & Review Section ------------- */}
      <div className="mt-20">
        <div className="flex border-b border-border">
          <b className="border-b-2 border-primary px-5 py-3 text-sm cursor-pointer text-primary">
            Description
          </b>
          <p className="border-b-2 border-transparent px-5 py-3 text-sm cursor-pointer hover:border-primary hover:text-primary">
            Reviews (122)
          </p>
        </div>
        <div className="flex flex-col gap-4 border border-border px-6 py-6 text-sm text-gray-500 bg-secondary rounded">
          <p>
            An e-commerce website is an online platform that facilitates the buying and selling of products or services
            over the internet. It serves as a virtual marketplace where businesses and individuals can showcase their
            products, interact with customers, and conduct transactions without the need for a physical presence. E-commerce
            websites have gained immense popularity due to their convenience, accessibility, and the global reach they
            offer.
          </p>
          <p>
            E-commerce websites typically display products or services along with detailed descriptions, images, prices,
            and any available variations (e.g., sizes, colors). Each product usually has its own dedicated page with
            relevant information.
          </p>
        </div>
      </div>

      {/* --------- display related products ---------- */}
      <RelatedProducts category={productData.category} subCategory={productData.subCategory} />
    </div>
  );
};

export default Product;