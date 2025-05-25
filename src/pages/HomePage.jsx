import Banner from "../components/Banner"
import BestSeller from "../components/BestSeller"
import Brands from "../components/Brands"
import Facility from "../components/Facility"
import Faq from "../components/faq/faq"
import FeaturedProduct from "../components/FeaturedProduct"
import NewProduct from "../components/NewProduct"
import OfferSection from "../components/OfferSection"

const HomePage = () => {
  return (
    <>
      <Banner/>
      <Facility/>
      <FeaturedProduct/>
      <OfferSection/>
      <NewProduct/>
      <BestSeller/>
      <Faq/>
      <Brands/>
    </>
  )
}

export default HomePage