class Toggle extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      title: 'Visibility Toggle!',
      details: 'Im a detail so please love me',
      visible: false,
    }

    this.toggleVisible = this.toggleVisible.bind(this);
  }

  toggleVisible() {
    this.setState(prevState => ({ visible: !this.state.visible }))
  }
  render() {
    return (
      <div>
        <h1>{this.state.title}</h1>
        <button onClick={this.toggleVisible}>
          {this.state.visible ? 'Hide details' : 'Show details'}
        </button>
        {
        this.state.visible ? <div><p>{this.state.details}</p></div> : ''
        }
      </div>
    );
  };
}
const root = document.getElementById('app');

ReactDOM.render(<Toggle />, root);

// const challenge = {
//   title: 'Visibility Toggle',
//   details: 'Im a detail so please love me'
// }

// const appRoot = document.getElementById('app');

// let visible = false;

// const toggleVisible = () => {
//   visible = !visible;

//   render()
// }

// const render = () => {
//   const tem = (
//     <div>
//       <h1>{challenge.title}</h1>
//       <button onClick={toggleVisible}>
//         {visible ? 'Hide details' : 'Show details'}
//       </button>
//       {
//         visible ? <div><p>{challenge.details}</p></div> : ''
//       }
//     </div>
//   );

//   ReactDOM.render(tem, appRoot);
// }

// render();