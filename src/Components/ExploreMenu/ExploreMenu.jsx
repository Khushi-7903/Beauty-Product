import React, { useState } from 'react'
import "./ExploreMenu.css"
import { menu_list } from '../../assets/Data/assets'

const ExploreMenu = ({category, setCategory}) => {
    return (
        <>
            <div className='explore-menu' id='explore-menu'>
                <h1>Explore Over Menu</h1>
                <p className='explore-menu-description'>
                    Discover a curated collection of premium beauty products designed to enhance your natural beauty. 
                    Whether you're looking for skincare essentials or luxurious cosmetics, we have something for everyone. 
                    Click on any product to explore its details and find the perfect match for your beauty routine.
                </p>
                <div className="explore-menu-list">
                    {
                        menu_list.map((item, index) => {
                            return (
                                <div 
                                className="explore-menu-list-item"
                                onClick={()=> setCategory(prev => prev === item.menu_name ? "All" : item.menu_name)}
                                key={index}
                              >
                                <img src={item.menu_image} alt={item.menu_name} className={category === item.menu_name ? "active" : "" } />
                                <p className={category === item.menu_name ? "active" : "" }>{item.menu_name}</p>
                              </div>
                            )
                        })
                    }
                </div>
                <hr />
            </div>
        </>
    )
}

export default ExploreMenu