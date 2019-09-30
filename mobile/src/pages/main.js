import React, {Component} from 'react'
import api from '../services/api'

import { 
    View, 
    Text,
} from 'react-native'

 class Main extends Component{

    static navigationOptions = {
        headerTitle: 'Tá no Hype',
        headerTitleStyle: { 
            textAlign:"center", 
            flex:1,
        },
      }
    
    componentDidMount(){
        this.loadProducts();
    }

    loadProducts = async () =>{
        const response = await api.get('/products');

        const { docs } = response.data
        console.log(docs)
        
    }
    
    render(){

        return(
            <View>
                <Text>Página Main</Text>
            </View>
        )
    } 

}

export default Main