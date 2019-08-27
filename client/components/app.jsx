import React from 'react';
import Header from './header';
import ProductList from './product-list';
import ProductDetails from './product-details';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      view: {
        name: 'catalog',
        params: {}
      }
    };
    this.setView = this.setView.bind(this);
  }
  setView(name, params) {
    this.setState({ view: { name, params } });
  }
  render() {
    if (this.state.view.name === 'catalog') {
      return (
        <div>
          <div className="headerContainer">
            <Header text="Wicked Sales" />
          </div>
          <div className="container">
            <div className="justify-content-center row">
              <ProductList setView={this.setView} />
            </div>
          </div>
        </div>
      );
    } else {
      return (
        <div className="d-flex justify-content-center flex-column">
          <div className="headerContainer">
            <Header text="Wicked Sales" />
          </div>
          <ProductDetails setView={this.setView} view={this.state.view.params}/>
        </div>
      );
    }
  }
}

export default App;
