import React from 'react';
import ReactGA from 'react-ga';
import PropTypes from 'prop-types';
import { Route } from 'react-router-dom';
import Header from './components/common/Header';
import Landing from './pages/Landing';
import Home from './pages/Home';
import AboutSGB from './pages/AboutSGB';
import Footer from './components/common/Footer';

ReactGA.initialize('UA-97308187-1');

class GAListener extends React.Component {
  static contextTypes = {
    router: PropTypes.object,
  };

  componentDidMount() {
    this.sendPageView(this.context.router.history.location);
    this.context.router.history.listen(this.sendPageView);
  }

  sendPageView(location) {
    ReactGA.set({page: location.pathname});
    ReactGA.pageview(location.pathname);
  }

  render() {
    return this.props.children;
  }
}


const App = () => (
  <div>
    <GAListener>
      <Route exact path="/" component={Landing} />
      <Route path="/AboutSGB" component={AboutSGB} />
      <Route path="/Home" component={Home} />
      <Footer />
    </GAListener>
  </div>
);

export default App;
