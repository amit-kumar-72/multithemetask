import  { useEffect, useState } from 'react';
import { useTheme } from '../contexts/ThemeContext';

function Home() {
  const [products, setProducts] = useState([]);
  const { theme } = useTheme();


  // fetching data from given api for schowcase
  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then((res) => res.json())
      .then(setProducts);
  }, []);

  return (
    <div
      className={`p-6 mt-20 transition-all duration-300 ${
        theme === 'theme1' ? 'font-sans text-gray-800' :
        theme === 'theme2' ? 'font-serif text-gray-200 bg-gray-900' :
        'font-[Pacifico] text-purple-800 bg-gradient-to-r from-yellow-100 to-pink-200'
      }`}
    >
      <h2 className="text-3xl font-bold mb-6">Products</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {products.map((product) => (
          <div
            key={product.id}
            className={`p-4 rounded-lg shadow-md transition transform hover:scale-105 ${
              theme === 'theme1' ? 'bg-white border' :
              theme === 'theme2' ? 'bg-gray-800 border border-gray-700' :
              'bg-white border border-pink-400'
            }`}
          >
            <img src={product.image} alt={product.title} className="h-32 mx-auto object-contain" />
            <h3 className="mt-4 font-semibold text-center text-lg">{product.title}</h3>
            <p className="text-center text-sm mt-2">${product.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;
