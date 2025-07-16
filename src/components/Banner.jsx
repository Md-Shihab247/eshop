import { Link } from "react-router-dom"
import Container from "./layouts/Container"
const Banner = () => {
  return (
    <>
    <div className=" mt-2 sm:mt-8 px-2 sm:px-0">
        <Container>
            <Link to="/">
                <img src="./images/banner.png" alt="" />
            </Link>
        </Container>
    </div>
    </>
  )
}

export default Banner