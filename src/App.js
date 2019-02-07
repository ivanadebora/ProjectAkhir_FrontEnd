import React, { Component } from 'react';
import './App.css';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Cookies from 'universal-cookie';
import HeaderTID from './components/HeaderTID';
import Homepage from './components/Homepage';
import FooterTID from './components/FooterTID';
import Register from './components/Register';
import Login from './components/Login';
import Verified from './components/Verified';
import WaitingVerification from './components/WaitingVerification';
import { keepLogin, cookieChecked } from './actions/authAction';
import HomeAdminProduct from './components/HomeAdminProduct';

const cookies = new Cookies();

class App extends Component {

  componentDidMount() {
    const username = cookies.get('dataUser');
    if (username !== undefined) {
        this.props.keepLogin(username)
    }
    else {
      this.props.cookieChecked();
    }
  }

  render() {
      return (
        <div>
          <HeaderTID/>
          <div>
            <Route exact path="/" component={Homepage}/>
            <Route path="/register" component={Register}/>
            <Route path="/login" component={Login}/>
            <Route path="/verified" component={Verified} />
            <Route path="/waitingverification" component={WaitingVerification} />

            <Route path="/homeadminproduct" component={HomeAdminProduct} />
          </div>
          <FooterTID/>
        </div>
      );
  }
}

const mapStateToProps = (state) => {
  return {cookie: state.auth.cookie}
}

export default withRouter(connect(mapStateToProps,{keepLogin, cookieChecked})(App));

