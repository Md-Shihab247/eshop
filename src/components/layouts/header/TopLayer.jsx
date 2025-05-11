import Container from "../Container"
import TopLeft from "./topLayerComponents/TopLeft"

const TopLayer = () => {
  return (
    <div className=" border-b border-[#CBCBCB]">
        <Container>
            <div className="flex justify-between items-center py-5">
                <TopLeft/>
                <div>part2</div>
            </div>
        </Container>
    </div>
  )
}

export default TopLayer