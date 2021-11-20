import React from "react";

class Order extends React.Component {
   render() {

      // Получаем id заказов 
      const orderIds = Object.keys(this.props.order);
      // Считаем сколько всего бургеров заказали
      const total = orderIds.reduce((prevTotal, key) => {
         const burger = this.props.burgers[key];
         const count = this.props.order[key];

         // Считаем общую стоимость заказа и проверяем доступен ли он к заказу
         const isAvailable = burger && burger.status === 'available';
         if (isAvailable) {
            return prevTotal + burger.price * count;
         }
         return prevTotal;
      }, 0);


      return (
         <div className="order-wrap" >
            <h2>Ваш заказ</h2>
            <ul className="order">
               {orderIds.map(key => {
                  return <li>{key}</li>
               })}
            </ul>
            {total}
         </div>
      );
   }
}

export default Order;