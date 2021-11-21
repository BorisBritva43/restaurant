import React from "react";
import Shipment from "./Shipment";

class Order extends React.Component {

   renderOrder = (key) => {
      const burger = this.props.burgers[key];
      const count = this.props.order[key];

      // Пока нет/или еще не загрузились бургеры - ничего не выводим
      if (!burger) return null;

      const isAvailable = burger && burger.status === 'available';
      if (!isAvailable) {
         return (
            <li className="unavailable" key={key}>
               Извините, {burger ? burger.name : 'бургер'} временно не доступен
            </li>
         )
      }

      return (
         <li key={key}>
            <span>
               <span>{count}</span>
               шт. {burger.name}
               <span> {count * burger.price} p.</span>
               <button
                  onClick={() => this.props.deleteFromOrder(key)}
                  className='cancelItem'>
                  &times;
               </button>
            </span>
         </li>
      )

   }
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
               {orderIds.map(this.renderOrder)}
            </ul>

            {/* Проверяем выбраны ли блюда */}
            {total > 0 ? (
               <Shipment total={total} />
            ) : (
               <div className="nothingSelected">
                  Выберите блюда и добавьте к заказу
               </div>
            )}

         </div>
      );
   }
}

export default Order;