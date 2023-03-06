import React, { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import DairyList from '../Components/DairyList'
import FilterDairy from '../Components/FilterDairy'
import { Footer } from '../Components/Footer'
import Gotottop from '../Components/GotoTop'
import { Navbar } from '../Components/Navbar'
import styles from '../Components/ProductPage.module.css'
import { Sort } from '../Components/Sort'
const MilkandDairy = () => {
    
    return (
        <>
            <div>
                <Navbar />
                <div className={styles.ProductPage_TopImage}>
                    <img src="https://www.bigbasket.com/media/uploads/flatpages/test-1/Fruits%20&%20vegetables.jpg" alt="FruitAndVegetables" />
                </div>
                <div className={styles.ProductPage_main}>
                    <FilterDairy />
                    <DairyList />
                   
                </div>
            </div>
            <div>
                <Footer />
                <Gotottop />
            </div>
        </>
    )
}

export default MilkandDairy