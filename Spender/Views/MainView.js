'use strict';

var CategoryListView = require('./CategoryListView');
var React = require('react-native');
var {
  StyleSheet,
  Text,
  View,
  TextInput
} = React;

var MainView = React.createClass({

	getInitialState: function(){
		return {amount : 10}
	},

  	render: function() {
    return (
      <View style={styles.container}>
              <Text numberOfLines='2' style={styles.instructions}>
          Please keep your expenses under control, ladyfriend.
           {'\n'}
          You are spending {this.state.amount} damn euros on this thing!
        </Text>
        <TextInput 	keyboardType 	= "decimal-pad" 
        			placeholder		= "How much did you spend?" 
        			onSubmitEditing = { (event) => this.setState({amount:event.nativeEvent.text})}
        			style			= {styles.amount} />
		<CategoryListView />
      </View>
     );
  	}	
});

var styles = StyleSheet.create({
  container: {
  	flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#F7F7F7',
    paddingTop: 84
  },
  instructions: {
    textAlign: 'center',
    color: '#8E8E93',
    marginBottom: 20,
    marginTop: 0,
    marginLeft: 20,
    marginRight: 20,
  },
   amount: {
    height: 44,
    borderWidth: 0.5,
    borderColor: '#ABABAB',
    borderRadius: 4,
    fontSize: 22,
    padding: 4,
    alignItems: 'center',
    marginLeft: 20,
    marginRight: 20
  }
});

module.exports = MainView;