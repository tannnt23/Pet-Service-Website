import Footer from "../footer";
import Header from "../header";
import Food from "../category/Food";

function FoodProduct() {
    return (
        <div>
            <Header />
            {/* sản phẩm thú cưng  */}
            <Food />
            <Footer />
        </div>
    )
}

export default FoodProduct;