import React, {Component} from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  StyleSheet,
  TextInput,
  SafeAreaView,
  FlatList,
  Image,
  Modal,
  Dimensions,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {design} from '../css/Styles';
import colorCSS from '../css/Color';

const {width} = Dimensions.get('window');

const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'First Item',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'Second Item',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Third Item',
  },
];

function Item({title}) {
  return (
    <View style={design.flatlistContainer}>
      <LinearGradient colors={['transparent', colorCSS.gray, colorCSS.black]}>
        <Image
          style={{
            width: width * 0.95,
            height: width * 0.5,
            alignSelf: 'center',
            opacity: 0.5,
          }}
          source={require('../../../assets/img/Black-Angus-Cow.jpg')}
        />
      </LinearGradient>
      <Text style={design.flatlistTitle}>{title}</Text>
      <Text style={design.flatlistText}>
        sdfohasfdhilbflidasfbielavbdf dsgafigfd abaisdgfiqd asdiufgqdgbfoaudgfi
      </Text>
      <Text style={design.flatlistNumber}>RP 3.500.000</Text>
    </View>
  );
}

export default class Commodity extends Component {
  state = {
    persons: [],
  };

  // getLivestock = async () => {
  //   try {
  //     let res = await axios.get(
  //       `http://ayo-vest.herokuapp.com/api/v1/livestocks/getall?page=1`,
  //     );
  //     console.log(res);
  //     this.setState({persons: res.data.data.docs});
  //   } catch (error) {
  //     console.log('error persons ', error);
  //   }
  // };
  render() {
    return (
      <View>
        <FlatList
          data={DATA}
          renderItem={({item}) => <Item title={item.title} />}
          keyExtractor={item => item.id}
        />
      </View>
    );
  }
}
