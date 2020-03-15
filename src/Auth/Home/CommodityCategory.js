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
  Dimensions,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {design} from '../css/Styles';
import colorCSS from '../css/Color';
import Modal from 'react-native-modal';

const {width} = Dimensions.get('window');

const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'Cow',
    image: require('../../../assets/img/cow-list.jpg'),
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'Chicken',
    image: require('../../../assets/img/chicken-list.jpg'),
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Goat',
    image: require('../../../assets/img/goat-list.jpg'),
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e26c44',
    title: 'Duck',
    image: require('../../../assets/img/duck-list.jpg'),
  },
];

function Item({title}) {
  console.log(title.image);
  return (
    <TouchableOpacity activeOpacity={0.8}>
      <View style={{flex: 1, backgroundColor: 'white'}}>
        <LinearGradient
          colors={['transparent', colorCSS.gray, colorCSS.black]}
          style={{useAngle: true, angle: 90, angleCenter: {x: 0.5, y: 0.5}}}>
          <Image
            style={{
              width: width * 1.2,
              height: width * 0.39,
              alignSelf: 'center',
              opacity: 0.7,
            }}
            source={title.image}
          />
        </LinearGradient>
        <Text
          style={{
            color: 'white',
            position: 'absolute',
            fontSize: 30,
            fontWeight: 'bold',
            marginTop: 40,
            marginLeft: 20,
            textShadowColor: 'rgba(0, 0, 0, 0.25)',
            textShadowOffset: {width: 1, height: 1},
            textShadowRadius: 5,
          }}>
          {title.title}
        </Text>
      </View>
    </TouchableOpacity>
  );
}

export default class CommodityCategory extends Component {
  render() {
    return (
      <View style={{backgroundColor: colorCSS.white}}>
        <View
          style={{borderBottomWidth: 1, borderBottomColor: 'rgba(0,0,0,0.2)'}}>
          <Text
            style={{
              fontSize: 30,
              textAlign: 'center',
              fontWeight: 'bold',
              color: colorCSS.greenlogo,
              marginVertical: 6,
            }}>
            Categories
          </Text>
        </View>
        <View>
          <FlatList
            data={DATA}
            renderItem={({item}) => <Item title={item} />}
            keyExtractor={item => item.id}
          />
        </View>
      </View>
    );
  }
}
