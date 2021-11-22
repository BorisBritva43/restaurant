import React from "react";
import Shipment from "./Shipment";
import { TransitionGroup, CSSTransition } from 'react-transition-group';

class Order extends React.Component {

   renderOrder = (key) => {
      const burger = this.props.burgers[key];
      const count = this.props.order[key];

      // Пока нет/или еще не загрузились бургеры - ничего не выводим
      if (!burger) return null;

      const isAvailable = burger && burger.status === 'available';
      if (!isAvailable) {
         return (
            <CSSTransition
               classNames="order"
               key={key}
               timeout={{ enter: 500, exit: 500 }}
            >
               <li className="unavailable" key={key}>
                  Извините, {burger ? burger.name : 'бургер'} временно не доступен
               </li>
            </CSSTransition>
         )
      }

      return (
         <CSSTransition
            classNames="order"
            key={key}
            timeout={{ enter: 500, exit: 500 }}
         >
            <li key={key}>
               <span>
                  <TransitionGroup component='span' className='count'>
                     <CSSTransition classNames='count' key={count} timeout={{ enter: 500, exit: 500 }}>
                        <span>{count}</span>
                     </CSSTransition>
                  </TransitionGroup>
                  шт. {burger.name}
                  <span> {count * burger.price} p.</span>
                  <button
                     onClick={() => this.props.deleteFromOrder(key)}
                     className='cancelItem'>
                     &times;
                  </button>
               </span>
            </li>
         </CSSTransition>
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
            <TransitionGroup component='ul' className="order">
               {orderIds.map(this.renderOrder)}
            </TransitionGroup>

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