import Container from "../Container"
import TopLeft from "./topLayerComponents/TopLeft"
import TopRight from "./topLayerComponents/TopRight"

const TopLayer = () => {
  
  return (
    <div className=" border-b border-[#CBCBCB]">
        <Container>
            <div className=" sm:flex sm:justify-between sm:items-center py-5 font-montserrat">
                <TopLeft/>
                <TopRight/>
            </div>
        </Container>
    </div>
  )
}

export default TopLayer