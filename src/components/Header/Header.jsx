import React from 'react';
import {
  StyledHeader,
  Logo,
  Navigation,
  NavLink,
  Cart,
  TotalSum,
} from './Header.styled';
import { FaShoppingCart } from 'react-icons/fa';
import { useState } from 'react';
import { Order } from 'components/Order/Order';

export function Header({ cart, onDelete }) {
  let [cartOpen, setCartOpen] = useState(false);
  let sum = 0;
  cart.forEach(el => (sum += el.price));

  return (
    <StyledHeader>
      <Logo>everist</Logo>
      <Navigation>
        <NavLink>About us</NavLink>
        <NavLink>Contacts</NavLink>
        <NavLink>
          <FaShoppingCart onClick={() => setCartOpen((cartOpen = !cartOpen))} />
        </NavLink>
      </Navigation>

      {cartOpen && (
        <Cart>
          {cart.length > 0 ? (
            cart.map(item => (
              <Order key={item.id} item={item} onDelete={onDelete} />
            ))
          ) : (
            <p>the card is empty</p>
          )}
          {cart.length > 0 && <TotalSum>Total : {sum}$</TotalSum>}
        </Cart>
      )}
    </StyledHeader>
  );
}
