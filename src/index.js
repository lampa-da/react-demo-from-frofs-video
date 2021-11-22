import React from 'react'; 
import ReactDOM from 'react-dom'

const app =document.querySelector('#app')
      // console.log(app)
const Item = ({ item, removeItem,  idx }) => {
  // console.log({item})
  return (
    <li>
      { item }
      <button onClick={ () => removeItem(idx) }>x</button>
    </li>
  )
}

class App extends React.Component{
  constructor(){
    super();
    this.state ={
      items,
      message: ''
    };
    this.addItem = this.addItem.bind(this);
    this.removeItem = this.removeItem.bind(this);
    // const interval = setInterval(()=>{
    //   items.push(Math.random());
    //   // console.log(items)
    //   this.setState({items})
    //   if(items.length ===10){
    //     clearInterval(interval)
    //     this.setState({message: 'Done!'})
    //   }
    // }, 500)
  }

  removeItem(idx){
    const items = this.state.items.filter((_, _idx)=> _idx !== idx)
    this.setState({items})
    console.log(this, idx)
  }
  addItem(){
    this.setState({ items: [...this.state.items, Math.random()] })
  }
  render(){
    const {items, message} = this.state
    const {addItem, removeItem} = this

    return (
      <div>
        <h2>Count is {items.length}</h2>
        <h3>{message}</h3>
        <button onClick={ addItem }>Add an Item</button>
        <ul>
          {
            // items.map((item, idx)=><li key={ idx }>{item}</li>)
            items.map((item, idx)=><Item idx={ idx }removeItem={ removeItem } key ={idx} item = { item }/>)
          }</ul>
      </div>
    )
    // return React.createElement(
    //   'div',
    //   null,
    //   React.createElement(
    //     'h2',
    //     null,
    //     `Count is ${items.length}`
    //   ),
    //   React.createElement(
    //     'h3',
    //     null, 
    //     message
    //   ),
    //   React.createElement(
    //     'ul',
    //     null,
    //     items.map((item, idx) => React.createElement('li', {key: idx}, item))
    //   )
    // )
  }
}
const items =[1, 2];

ReactDOM.render(<App />, app)
      // ReactDOM.render(React.createElement(App), app)

      // const render = ()=>{
      //   const html =`
      //   <div>
      //     <h2>Count is ${items.length}</h2>
      //     <ul>
      //     ${
      //       items.map(item => `
      //       <li>
      //         ${item}
      //       </li>
      //       `).join('')
      //     }
      //     </ul>
      //   </div>
      //   `
      //   app.innerHTML = html
      // }
      
      // render()

      // const interval = setInterval(()=>{
      //   items.push(Math.random());
      //   // console.log(items)
      //   render();
      //   if(items.length ===10){
      //     clearInterval(interval)
      //   }
      // }, 500)