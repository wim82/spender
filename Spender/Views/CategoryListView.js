'use strict';

var React = require('react-native');
var {
  StyleSheet,
  Text,
  View,
} = React;

var CategoryListView = React.createClass({

    getInitialState: function(){
      return {amount : 10}
    },

    render: function() {
    return (
      <View style={styles.container}>
         <Text>Building a list view here</Text>
      </View>
     );
    } 
});

var styles = StyleSheet.create({
  container: {
    flex: 1,
    alignSelf: 'stretch',
    justifyContent: 'flex-start',
    backgroundColor: '#00FFAA',
    marginTop: 20,
    paddingTop: 20,
    paddingLeft: 0,
    paddingRight: 0
  }
});

module.exports = CategoryListView;