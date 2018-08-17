import React, { Component } from 'react';
import { Route } from 'react-router';
import { Layout } from './components/Layout';
import { Home } from './components/Home';
import { NewContactForm } from './components/contacts/NewContactForm';
import { ContactsListView } from './components/contacts/ContactsListView';
import { ContactView } from './components/contacts/ContactView';

export default class App extends Component {
  displayName = App.name

  render() {
    return (
      <Layout>
        <Route exact path='/' component={Home} />
        <Route path='/new' component={NewContactForm} />
        <Route exact path='/contacts' component={ContactsListView} />
        <Route exact path='/contacts/:value/view' component={ContactView} />
      </Layout>
    );
  }
}
