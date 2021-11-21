import React from "react";
import AddBurgerForm from "./AddBurgerForm";
import EditBurgerForm from "./EditBurgerForm";

class MenuAdmin extends React.Component {
   render() {
      return (
         <div className="menu-admin">
            <h2>Управление меню</h2>

            {/* Получаем массив из ключей всех бургеров
            Затем перебираем все бургеры через map 
            и передаем все из значения в key в компонент EditBurgerForm */}
            {Object.keys(this.props.burgers).map(key => {
               return <EditBurgerForm
                  key={key}
                  index={key}
                  deleteBurger={this.props.deleteBurger}
                  burger={this.props.burgers[key]}
                  updateBurger={this.props.updateBurger}
               />
            })}

            <AddBurgerForm addBurger={this.props.addBurger} />
            <button onClick={this.props.loadSampleBurgers}>Добавить бургеры</button>
         </div>
      );
   }
}

export default MenuAdmin;