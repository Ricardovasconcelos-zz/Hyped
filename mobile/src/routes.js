// coloca a nevagação por cliques em botão
import { createStackNavigator } from 'react-navigation'

import Main from './pages/main'
import Product from './pages/product'
export default createStackNavigator({
      Main,
      Product
}, {
      navigationOptions:{
            headerStyle:{
                  backgroundColor: "#6a1b9a",     

            },
            headerTintColor: "#fff"
      }
})