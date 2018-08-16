import React, { Component } from 'react';
import { Route } from 'react-router';
import { Layout } from './components/Layout';
import { Home } from './components/Home';
import { ContactList } from './components/ContactList';
import { AddContactForm } from './components/AddContactForm';

export default class App extends Component {
  displayName = App.name

  render() {
    return (
      <Layout>
        <Route exact path='/' component={Home} />
        <Route path='/new' component={AddContactForm} />
        <Route path='/contactlist' component={ContactList} />
      </Layout>
    );
  }
}
