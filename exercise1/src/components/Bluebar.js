import React from 'react'
import styles from './header.module.css';

export default function BlueBar() {
    return (
        <div className={ styles.headerBG }>
            <div className={ styles.header }>
                <img className={ styles.otsikko } src='./HS_Otsikko.png' alt='Otsikko'/>
                <div className={ styles.EULA }>Etusivu</div>
                <div className={ styles.EULA }>Uutiset</div>
                <div className={ styles.EULA }>Lehdet</div>
                <div className={ styles.EULA }>Asiakaspalvelu</div>
                <div className={ styles.THV }>
                    <div className={ styles.THVi }>Tilaa</div> 
                    <div className={ styles.THVi }>Hae</div>
                    <div className={ styles.THVi }>Valikko</div>
                </div>
            </div>
        </div>
    )
}
