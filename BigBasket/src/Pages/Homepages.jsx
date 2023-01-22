import { MainRoutes } from "../AllRoutes/MainRoutes"
import { Footer } from "../Components/Footer"
import BrandStore from "../Components/Home/BrandStore"
import { Navbar } from "../Components/Navbar"
import {Box} from "@chakra-ui/react"

import Fruites from "../Components/Home/Fruites"
import Mpopular from "../Components/Home/Mpopular"
import Top from "../Components/Home/Top"
import Bank from "../Components/Home/Bank"
import SlideCard from "../Components/Home/SlideCard"
import Gotottop from "../Components/GotoTop"
import { CardSlider } from "../Components/cardSlider"
import { CardSlider2 } from "../Components/cardSlider2"


const HomePages = () =>
{
    return (
        <div>
            <Navbar />
            <SlideCard />
            <Box h={'auto'} 
            w={['85%','80%','75%']}
            m='auto'
            >
            <Top/>
            <CardSlider />
            <Bank/>
            <CardSlider2 />
            <Mpopular/>
            <Fruites />
            <BrandStore />
            </Box>
            <Footer />
            <Gotottop />
        </div>
    )
}

export default HomePages