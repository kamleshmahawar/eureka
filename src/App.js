import logo from './logo.svg';
import React, { Component } from 'react';
import Header from './components/Header';
import { BrowserRouter, Route, Redirect, Switch, NavLink } from 'react-router-dom';
import SingleScoreContainer from './containers/SingleScoreContainer';
import BulkContainer from './containers/BulkContainer';
import { connect } from 'react-redux';


class App extends Component {
  constructor() {
    super();
  }
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Header />
          <div className="row main-container">
            <div className="col-md-2 sidebar">
              <NavLink
                to="/single"
              >
                Single Score
              </NavLink>
              <NavLink
                to="/bulkoperation"
              >
                 Bulk operation
              </NavLink>
            </div>
            <div className="col-md-10">
              <Switch>
                <Route path="/single" component={SingleScoreContainer} />
                <Route path="/bulkoperation" component={BulkContainer} />
                <Route
                  exact
                  path="/"
                  render={(props) => (<Redirect push to="/single" {...props} />)}
                />
              </Switch>
            </div>
          </div>
        </div>
      </BrowserRouter>
    );
  }
}

const mapStateToProps = (state) => ({
})

const mapDispatchToProps = {
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
