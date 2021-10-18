import React from 'react';


const ListingItem = ({url,src,title,currency,price,quantity}) => {
  let currentCurrency = `${price} GBP`;
  if (currency === 'USD'){
      currentCurrency = `$${price}`
  }
 if (currency === 'EUR'){
     currentCurrency = `€${price}`
 }
 let quantityClass = 'item-quantity'
 if (quantity>20){
     quantityClass+='level-high';
 }
 if (quantity<=10){
     quantityClass+='level-low';
 }
 if(quantity<=20 && quantity>10){
     quantityClass += 'level-medium';
 }
 let titleChecked = `${title}`;
 if(titleChecked.length > 50){
    titleChecked = titleChecked.substring(0, 50);
     titleChecked += '...';
 }
return (
    <div class="item">
    <div class="item-image">
      <a href={url}>
        <img src={src} alt="offers"/>
      </a>
    </div>
    <div class="item-details">
      <p class="item-title">{titleChecked}</p>
      <p class="item-price">{currentCurrency}</p>
      <p class={quantityClass}>{quantity}left</p>
    </div>
  </div>
);
}
export default ListingItem;