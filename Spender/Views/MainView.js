'use strict';

var React = require('react-native');
var {
  StyleSheet,
  Text,
  View,
  TextInput
} = React;

var MainView = React.createClass({

  render: function() {
    return (
      <View style={styles.container}>
        <TextInput 	keyboardType="decimal-pad" 
        			placeholder="How much did you spend?" 
        			style={styles.amount} />

        <Text style={styles.instructions}>
          Please keep your expenses under control, ladyfriend
        </Text>

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
    paddingTop: 108
  },
  instructions: {
    textAlign: 'center',
    color: '#8E8E93',
    marginBottom: 5,
    marginTop: 44,
    marginLeft: 20,
    marginRight: 20
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