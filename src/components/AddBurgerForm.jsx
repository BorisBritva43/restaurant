import React from "react";

class AddBurgerForm extends React.Component {

   nameRef = React.createRef();
   priceRef = React.createRef();
   statusRef = React.createRef();
   descRef = React.createRef();
   imageRef = React.createRef();

   createBurger = e => {
      e.preventDefault();
      const burger = {
         name: this.nameRef.current.value,
         price: parseFloat(this.priceRef.current.value || 0),
         status: this.statusRef.current.value,
         desc: this.descRef.current.value,
         image: this.imageRef.current.value
      };
      this.props.addBurger(burger);
      // Очищаем форму после отправки
      e.currentTarget.reset();
   };

   render() {
      return (
         <form action="" className="burger-edit" onSubmit={this.createBurger}>
            <input ref={this.nameRef} name='name' type="text" placeholder='Name' autoComplete='off' />
            <input ref={this.priceRef} name='price' type="text" placeholder='Price' autoComplete='off' />
            <select ref={this.statusRef} name='status' className='status'>
               <option value="available">Доступно</option>
               <option value="unavailable">Убрать из меню</option>
            </select>
            <textarea ref={this.descRef} name='desc' type="text" placeholder='Desc' />
            <input ref={this.imageRef} name='image' type="text" placeholder='Image' autoComplete='off' />
            <button type='submit'>Добавить</button>
         </form>
      );
   }
}

export default AddBurgerForm;