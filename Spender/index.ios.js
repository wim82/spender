'use strict';

var React = require('react-native');
var MainView = require('./Views/MainView');

var {
  AppRegistry,
  StyleSheet,
  NavigatorIOS
} = React;

var Spender = React.createClass({


  render: function() {
    return (
     <NavigatorIOS
     barTintColor='#FF2D55'
     style={styles.container}
       initialRoute={{
         title: 'Spender',
         component: MainView
       }} />
     
     );
  }
});

var styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0BD318'
  }
});

AppRegistry.registerComponent('Spender', () => Spender);
