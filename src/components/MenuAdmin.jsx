import React from "react";
import AddBurgerForm from "./AddBurgerForm";
import EditBurgerForm from "./EditBurgerForm";
import firebase from "firebase/app";

class MenuAdmin extends React.Component {

   state = {
      photo: '',
      user: ''
   };

   // Сохраняем авторизацию после перезагрузки страницы
   componentDidMount() {
      firebase.auth().onAuthStateChanged(user => {
         if (user) {
            this.authHandler({ user });
         }
      });
   }

   authHandler = async authData => {
      const { email, photoURL } = authData.user;
      this.setState({ user: email, photo: photoURL });
   };

   render() {

      const { user, photo } = this.state;
      const avatar = photo ? photo : "/images/avatar.png";

      return (
         <div className="menu-admin">

            {user ? <div className="login-header">
               <div className="avatar">
                  <img src={avatar} alt={user} />
               </div>

               <button
                  className="buttonLogout"
                  onClick={this.props.handleLogout}
               >
                  Выйти
               </button>
            </div> : null}

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