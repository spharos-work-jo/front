import React from 'react'
import { StoreMapType } from '@/types/StoreType';
import styles from './MapOverlay.module.css'

const MapOverlay = ({store} : { store: StoreMapType}) => {
    return (
        <>
            <div className={styles.placeinfo}>
                <h3 className={styles.title} title={store.storeName}>{store.storeName}</h3>  
                <span className={styles.title} title={store.address}>{store.address}</span>
            </div> 
        </>
    )
}

export default MapOverlay