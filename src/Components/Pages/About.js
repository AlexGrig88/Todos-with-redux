import React from 'react';

const About = () => {

  const styleAbout = {
      marginTop: "50px"
  };

  return(
    <React.Fragment>
      <h1 style={ styleAbout }>О приложении</h1>
      <h3>To-Do App</h3>
      <p>The classic To-Do application where a user can write down all
         the things he wants to accomplish. The initial state is created from 
         <a href="https://jsonplaceholder.typicode.com/todos">https://jsonplaceholder.typicode.com/todos</a> server.
      </p>
      <h4>User Stories</h4>
      <ul>
        <li>User can see an input field where he can type in a to-do item</li>
        <li>By pressing enter (or a button), the User can submit the to-do item and can see that being added to a list of to-do's</li>
        <li>User can mark a to-do as completed (click on record)</li>
        <li>User can remove a to-do item by pressing on a button</li>
        <li>User can see a list with all the completed to-do's</li>
        <li>User can see a list with all the active to-do's</li>
        <li>When the browser window is closed, the cases will be saved in the local store, and when the User returns, the data will be retrieved</li>
      </ul>
      <hr />
      <h3>Список задач</h3>
      <p>Это приложение "Список задач", в котором пользователь может записать все
          те задачи, которые он хочет выполнить. Начальное состояние создается из 
         <a href="https://jsonplaceholder.typicode.com/todos"> https://jsonplaceholder.typicode.com/todos</a> сервера.
      </p>
      <h4>Пользовательские взаимодействия</h4>
      <ul>
        <li>Пользователь видит поле ввода, в котором он может ввести задачу</li>
        <li>Нажав ввод (или кнопку), пользователь может отправить задачу и увидеть, что она добавляется в список дел.</li>
        <li>Пользователь может отметить задачу как выполненную (изменив состояние чекбокса)</li>
        <li>Пользователь может удалить задачу, нажав кнопку</li>
        <li>Пользователь может увидеть список со всеми выполненными делами</li>
        <li>Пользователь может видеть список со всеми активными делами</li>
        <li>При закрытии окна браузера дела будут сохранены в локальном сторе, а когда Пользователь вернется, данные будут извлечены.</li>
      </ul>
    </React.Fragment>
  );
}

export default About;