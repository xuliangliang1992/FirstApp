import React, { Component }  from 'react';
import { FlatList, ActivityIndicator, Text, View  } from 'react-native';

export default class Mine extends Component{
    constructor(props){
        super(props);
        this.state ={ isLoading: true}
      }
    
    
      render(){
    
        if(this.state.isLoading){
          return(
            <View style={{flex: 1, padding: 20}}>
              <ActivityIndicator/>
            </View>
          )
        }
    
        return(
          <View style={{flex: 1, paddingTop:20}}>
            <FlatList
              data={this.state.dataSource}
              renderItem={({item}) => <Text>{item.title}, {item.releaseYear}</Text>}
              keyExtractor={(item, index) => item.id}
            />
          </View>
        );
      }
}