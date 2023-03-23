import { Header } from './Header/Header';
import { HeroSection } from './Hero/Hero';
import { Info } from './Info/Info';
import { Benefits } from './Benefits/Benefits';
import { Filter } from './Filter/Filter';
import { Products } from './Products/Products';
import { Rewards } from './Rewards/ Rewards';
import { Footer } from './Footer/Footer';
import products from './data/products';
import { useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';

export const App = () => {
  let [order, setOrder] = useState([]);
  let [filter, setFilter] = useState(products);

  const addOrder = item => {
    let itemInArray = false;
    order.forEach(el => {
      if (el.id === item.id) {
        itemInArray = true;
      }
    });
    if (!itemInArray) {
      setOrder([...order, { ...item }]);
    }
    toast.success('product added to the cart', {
      style: {
        background: '#fbf6f0',
      },
    });
  };

  const deleteProduct = id => {
    setOrder(prevOrder => prevOrder.filter(order => order.id !== id));
  };

  const chooseCategory = category => {
    if (category === 'all') {
      setFilter(products);
    } else if (category === 'face') {
      let newArr = [...products].filter(product => product.category === 'face');
      setFilter(newArr);
    } else if (category === 'body') {
      let newArr = [...products].filter(product => product.category === 'body');
      setFilter(newArr);
    } else if (category === 'hair') {
      let newArr = [...products].filter(product => product.category === 'hair');
      setFilter(newArr);
    }
  };

  return (
    <>
      <Header cart={order} onDelete={deleteProduct} />
      <div className="container">
        <HeroSection />
        <Info />
        <Benefits />
        <Filter filter={chooseCategory} />
        <Products products={filter} onAdd={addOrder} />
        <Rewards />
        <Footer />
      </div>
      <Toaster />
    </>
  );
};
