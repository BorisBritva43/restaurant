import React from "react";

class EditBurgerForm extends React.Component {

   handleChange = e => {

      const updatedBurger = {
         // Получаем все значения бургера
         ...this.props.burger,
         // [e.currentTarget.name] - динамически получаем название каждого свойства
         // и его значение - e.currentTarget.value
         [e.currentTarget.name]: e.currentTarget.value
      };
      this.props.updateBurger(this.props.index, updatedBurger);
   };

   render() {
      return (
         <div className="burger-edit">
            <input
               onChange={this.handleChange}
               name='name'
               type='text'
               value={this.props.burger.name}
            />
            <input
               onChange={this.handleChange}
               name='price'
               type='text'
               value={this.props.burger.price}
            />
            <select
               onChange={this.handleChange}
               className='status'
               name='status'
               value={this.props.burger.status}>
               <option value="available">Доступно</option>
               <option value="unavailable">Не доступно</option>
            </select>
            <textarea
               onChange={this.handleChange}
               name='desc'
               type='text'
               value={this.props.burger.desc} />
            <input
               onChange={this.handleChange}
               name='image'
               type='text'
               value={this.props.burger.image} />

            <button onClick={() => this.props.deleteBurger(this.props.index)}>
               Удалить из меню
            </button>
         </div>
      );
   }
}

export default EditBurgerForm;