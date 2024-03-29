import { useDispatch } from 'react-redux';
import { ChevronDown, ChevronUp } from './Icons';
// eslint-disable-next-line import/no-cycle
import { removeItem, increase, decrease } from '../redux/cart/cartSlice';

const CartItem = ({
  // eslint-disable-next-line react/prop-types
  id, img, title, price, amount,
}) => {
  const dispatch = useDispatch();
  return (
    <article className="cart-item">
      <img src={img} alt={title} />
      <div>
        <h4>{title}</h4>
        <h4 className="item-price">
          $
          {price}
        </h4>
        <button type="button" className="remove-btn" onClick={() => { dispatch(removeItem(id)); }}>remove</button>
      </div>
      <div>
        <button type="button" className="amount-btn" onClick={() => { dispatch(increase({ id })); }}>
          <ChevronUp />
        </button>
        <p className="amount">{amount}</p>
        <button
          type="button"
          className="amount-btn"
          onClick={() => {
            if (amount === 1) {
              dispatch(removeItem(id));
              return;
            }
            dispatch(decrease({ id }));
          }}
        >
          <ChevronDown />
        </button>
      </div>
    </article>
  );
};

export default CartItem;
