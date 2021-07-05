import React from 'react';
import ReactDOM from 'react-dom';

// Parte 1: Componentes React e JSX
// function formatName(user) {
//     return user.firstName + ' ' + user.lastName;
// }

// const user = {
//     firstName: 'Elias',
//     lastName: 'Carvalho'
// }

// const element = <h1>Hello, {formatName(user)}!</h1>;

// ReactDOM.render(
//     element,
//     document.getElementById('root')
// );

// Parte 2: Relógio React
// function tick() {
//     const element = (
//         <div>
//             <h1>Hello, world!</h1>
//             <h2>It is {new Date().toLocaleTimeString()}.</h2>
//         </div>
//     );
//     ReactDOM.render(element, document.getElementById('root'));
// }

// setInterval(tick, 1000);

// Parte 3: Componentes React
// function Welcome(props) {
//     return <h1>Hello, {props.name}!</h1>;
// }

// ReactDOM.render(
//     <Welcome name='Elias' />,
//     document.getElementById('root')
// )

// Parte 4: Compondo Comps
// function Welcome(props) {
//     return <h1>Hello, {props.name}!</h1>;
// }

// function App() {
//     return (
//         <div>
//             <Welcome name='Elias' />
//             <Welcome name='João' />
//             <Welcome name='Victor' />
//         </div>
//     );
// }

// ReactDOM.render(
//     <App />,
//     document.getElementById('root')
// );

// Parte5: states e Life Cycle
class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = { date: new Date() };
  }

  componentDidMount() {
    this.timerID = setInterval(
      () => this.tick(),
      1000
    );
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    this.setState({
      date: new Date()
    });
  }

  render() {
    return (
      <div>
        <h1>Hello, World!</h1>
        <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
      </div>
    );
  }
}

ReactDOM.render(
  <Clock />,
  document.getElementById('root')
)