import Booking from "../Booking";
import BannerOB from "../banner/BannerOB";
import Footer from "../footer";
import Header from "../header";

function OnlineBooking() {
    return (
        <div>
            <Header />
            <BannerOB />
            <Booking />
            <Footer />
        </div>
    )
}

export default OnlineBooking;