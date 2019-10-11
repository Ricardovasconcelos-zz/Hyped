// coloca a nevagação por cliques em botão
import { createStackNavigator } from 'react-navigation'

import Main from './pages/main'

export default createStackNavigator({
      Main
}, {
      navigationOptions:{
            headerStyle:{
                  backgroundColor: "#6a1b9a",     

            },
            headerTintColor: "#fff"
      }
})