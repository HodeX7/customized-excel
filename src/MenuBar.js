import React from 'react'
import './MenuBar.css'

function MenuBar() {
    return (
        <div className='menubar' >
            <div className='file item'>File</div>
            <div className='home item selected'>Home</div>
            <div className='insert item'>Insert</div>
            <div className='layout item'>Layout</div>
            <div className='help item'>Help</div>
        </div>
    )
}

export default MenuBar
