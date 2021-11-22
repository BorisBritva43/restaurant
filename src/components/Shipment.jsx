import React from "react";

class Shipment extends React.Component {
   render() {

      const { total } = this.props;
      // Если сумма заказа больше 500р - доставка 99, если меньше - 350
      const shipping = total > 0 && total < 500 ? 350 : 99;
      // Выделяем доставку за 99р
      const shippingNeon = shipping === 99 ? (
         <span className="font-effect-neon total_wrap-cheap">
            {shipping} p.
         </span>
      ) : (
         <span>{shipping} p.</span>
      );

      return (
         <div className="total">
            <div className="total_wrap">
               <div>
                  <div>Доставка: {total > 0 ? shippingNeon : null}</div>
                  <div className="total_wrap-free">
                     {total < 500
                        ? `Закажите еще на ${500 - total} р. для доставки за 99 рублей`
                        : null}
                  </div>
               </div>
               <div className="total_wrap-final">
                  Итого: {total} p.
               </div>
            </div>
         </div>
      )
   }
}

export default Shipment;