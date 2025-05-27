import { Link } from "react-router-dom"
import Container from "./layouts/Container"
const Banner = () => {
  return (
    <>
    <div className=" mt-8">
        <Container>
            <Link to="\">
                <img src="./images/banner.png" alt="" />
            </Link>
        </Container>
    </div>
    </>
  )
}

export default Banner