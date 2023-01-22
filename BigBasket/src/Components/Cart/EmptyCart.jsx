

import { Heading } from '@chakra-ui/react'
import styles from '../ProductPage.module.css'
const EmptyCart = () => {
    return (
        <div className={styles.EmptyCart}>
            <img src="https://png.pngtree.com/png-clipart/20201229/ourmid/pngtree-wicker-four-corners-basket-clip-art-png-image_2666978.jpg" alt="Empty Cart"/>
             <Heading mt='-10px'>Empty ! Add Some Products</Heading>
        </div>
    )
}

export { EmptyCart }