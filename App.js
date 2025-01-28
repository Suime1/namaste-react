// <div id = "parent">
//      <div id= "child">
//           <h1>Hello My name is Igris!!!</h1>
//      </div>
//</div>
// 
const parent = React.createElement('div',{id: 'parent'},[
        React.createElement('div',{id: 'child1'},[
        React.createElement('h1',{},"hi this is first heading"),
        React.createElement('h2',{},'hi this is second heading')
    ]),
        React.createElement('div',{id: 'child2'},[
        React.createElement('h1',{},"hi this is first heading"),
        React.createElement('h2',{},'hi this is second heading')
        ])
    ])

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(parent)