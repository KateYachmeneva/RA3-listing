import ListingItem from "./ListingItem/ListingItem";
import sourceData from "../../data/data.json";
import React from 'react';

const Listing = () => {
    const data = sourceData || [];
    return (
        <div className = "item-list">
      {data.map((item) => <ListingItem
        key = {item.listing_id}
        url = {item.url}
        src = {item.MainImage.url_570xN}
        title = {item.title}
        currency ={item.currency}
        price = {item.price}
        quantity = {item.quantity}
        />)}
        </div>
    )
}

export default Listing;