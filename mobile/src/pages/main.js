import React, {Component} from 'react'
import api from '../services/api'

import { 
    View,
    Text,
    FlatList,
    TouchableOpacity
} from 'react-native'

 class Main extends Component{

    static navigationOptions = {
        headerTitle: 'Hyped',
        headerTitleStyle: { 
            textAlign:"center", 
            flex:1,
        },
      }
    
    state = {
        docs: []
    }
    componentDidMount(){
        this.loadProducts();
    }

    loadProducts = async () =>{
        const response = await api.get('/products');

        const { docs } = response.data
        console.log(docs)     

        this.setState({docs})

    }

    renderItem = ({ item }) => (
        <View>
            <Text>{item.title}</Text>
            <Text>{item.description}</Text>
            <TouchableOpacity onPress={()=>{}}>
                <Text>Acessar</Text>    
            </TouchableOpacity>
        </View>
    )

    render(){
        return(
            <View>
            <Text>Página Main</Text>
            <FlatList
                data={this.state.docs}
                keyExtractor={item => item._id}
                renderItem={this.renderItem}
                />
            </View>
        )
    } 

}

export default Main