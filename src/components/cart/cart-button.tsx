import CartIcon from "@components/icons/cart-icon";
import { useCart } from "@contexts/cart/cart.context";
import { useUI } from "@contexts/ui.context";

const CartButton: React.FC = () => {
    const { openCart } = useUI();
    const { totalItems } = useCart();

    const handleOpenCart: any = () => {
        return openCart();
    };

    return (
        <button
            className="flex items-center justify-center flex-shrink-0 h-auto relative focus:outline-none transform"
            onClick={handleOpenCart}
            aria-label="cart-button"
        >
            <CartIcon />
            <span className="cart-counter-badge flex items-center justify-center bg-white text-heading absolute -top-2.5 xl:-top-3 -end-2.5 xl:-end-3 rounded-full font-bold">
                {totalItems}
            </span>
        </button>
    );
};

export default CartButton;
