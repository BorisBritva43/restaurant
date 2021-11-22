import React, { useState } from "react";
import restaurants from "../sample-restaurants";

const Landing = (props) => {

   // state = {
   //    display: false,
   //    title: '',
   //    url: ''
   // };

   const [display, toggleDisplay] = useState(false);
   const [title, setTitle] = useState('');
   const [url, setUrl] = useState('');

   const displayList = () => {
      // const { display } = this.state; - при useState state больше не нужен
      // this.setState({ display: !display }); - вместо этих двух строк
      toggleDisplay(!display);
   };

   const getTitle = (restaurant) => {
      const { title, url } = restaurant;
      // this.setState({ title, url, display: false });
      setTitle(title);
      setUrl(url);
      toggleDisplay(!display);
   };

   const goToRestaurant = () => {
      // const { url } = this.state;
      props.history.push(`/restaurant/${url}`);
   };

   return (
      <div className="restaurant_select">
         <div className="restaurant_select_top">
            <div
               onClick={displayList}
               className="restaurant_select_top-header font-effect-outline">
               {title ? title : 'Выберите ресторан'}
            </div>
            <div className="arrow_picker">
               <div className="arrow_picker-up"></div>
               <div className="arrow_picker-down"></div>
            </div>
         </div>

         {display ? <div className="restaurant_select_bottom">
            <ul>
               {restaurants.map(restaurant => {
                  return <li
                     onClick={() => getTitle(restaurant)}
                     key={restaurant.id}>
                     {restaurant.title}
                  </li>
               })}
            </ul>
         </div> : null}

         {title && !display ? (
            <button
               onClick={goToRestaurant}>
               Перейти в ресторан
            </button>
         ) : null}
      </div>
   )
}

export default Landing;