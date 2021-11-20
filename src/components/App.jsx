import React from "react";
import Header from "./Header";
import Order from "./Order";
import MenuAdmin from "./MenuAdmin";
import sampleBurgers from "../sample-burgers";
import Burger from "./Burger";

class App extends React.Component {

   state = {
      burgers: {},
      order: {}
   };

   addBurger = burger => {
      console.log('addBurger', burger);
      // 1. Создаем копию объекта state
      const burgers = { ...this.state.burgers }
      // 2. Добавляем новый бургер в объект burgers
      burgers[`burger${Date.now()}`] = burger; // Date.now() - текущая дата в милисекундах
      // 3. Записываем наш новый объект burgers в state
      this.setState({ burgers });
   };

   loadSampleBurgers = () => {
      this.setState({ burgers: sampleBurgers });
   }

   addToOrder = (key) => {
      // 1. Делаем копию объекта state
      const order = { ...this.state.order }
      // 2. Добавить ключь к заказу со знач. 1, либо обновить текущее значение
      order[key] = order[key] + 1 || 1;
      // 3. Записываем наш новый объект order в state
      this.setState({ order });
   };

   render() {
      return (
         <div className="burger-paradise">
            <div className="menu">

               <Header title="Hot Burgers" />

               <ul className="burgers">
                  {/* Object.keys - получаем массив из ключей бургеров  */}
                  {Object.keys(this.state.burgers).map(key => {
                     return (
                        <Burger
                           key={key}
                           index={key}
                           details={this.state.burgers[key]}
                           addToOrder={this.addToOrder}
                        />
                     )
                  })}
               </ul>

            </div>
            <Order
               burgers={this.state.burgers}
               order={this.state.order}
            />
            <MenuAdmin
               addBurger={this.addBurger}
               loadSampleBurgers={this.loadSampleBurgers}
            />
         </div>
      );
   }
}

export default App;