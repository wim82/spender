'use strict';

var React = require('react-native');
var {
  ListView,
  TouchableHighlight,
  StyleSheet,
  Text,
  View,
} = React;


var CategoryListView = React.createClass({
 

  getInitialState: function() {
    var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    return {
     dataSource: ds.cloneWithRows(['row 1', 'row 2','row 1', 'row 2','row 1', 'row 2','row 1', 'row 2','row 1', 'row 2','row 1', 'row 2','row 1', 'row 2','row 1', 'row 2','row 1', 'row 2','row 1', 'row 2']),
    };
  },

  render: function() {
    return (
      <ListView dataSource={this.state.dataSource}
                renderRow={(rowData) => (
                  <View style={styles.rowContainer}>
                    <View style={styles.row}>
                      <Text style={styles.text}>{rowData}</Text>
                   </View>
                  <View style={styles.separator}></View>
                  </View>
                  )
                }
      />
    );
  },
  
});

var styles = StyleSheet.create({
  rowContainer: {
    flex:1,
    backgroundColor: '#99EE99',
    alignSelf: 'stretch'
  },
  row: {
    flex: 1,
    padding: 10,
    backgroundColor: '#CCEEFF',
    alignItems: 'flex-start'
  },
  separator: {
    height: 1,
    backgroundColor: '#CCCCCC',
  },
  text: {
    backgroundColor: '#DEaaFE'
  },
});

module.exports = CategoryListView;