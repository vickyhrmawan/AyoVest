import React, {Component} from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  FlatList,
  Image,
  Dimensions,
} from 'react-native';
import {design} from '../Auth/css/Styles';
import colorCSS from '../Auth/css/Color';
import {connect} from 'react-redux';
import Modal from 'react-native-modal';
import ComDetailModal from './ComDetailModal';
import {
  setModalCategory,
  getLivestockCategory,
  setModalDetail,
  getLivestockId,
} from '../redux/action/LivestockAction';
import Icon from 'react-native-vector-icons/Entypo';

const width = Dimensions.get('window').width;

class ComCategoryModal extends Component {
  render() {
    const {dataLivestockCat, isLoading, modalDetail} = this.props.livestock;
    console.log('theseare', dataLivestockCat);
    return (
      <View style={{backgroundColor: 'white', flex: 1}}>
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
        <FlatList
          numColumns={2}
          data={dataLivestockCat}
          renderItem={({item}) => (
            <TouchableOpacity
              style={{width: width / 2}}
              onPress={() => this.props.getLivestockId(item._id)}>
              <View>
                <View
                  style={{
                    marginHorizontal: 10,
                    marginVertical: 10,
                  }}>
                  <Image
                    style={{
                      width: '100%',
                      resizeMode: 'cover',
                      height: 200,
                      alignSelf: 'center',
                      borderRadius: 20,
                    }}
                    source={{uri: item.image}}
                  />
                  <View
                    style={{
                      position: 'absolute',
                      backgroundColor: colorCSS.greenlogotransparent,
                      bottom: 0,
                      left: 0,
                      width: '100%',
                      borderBottomLeftRadius: 20,
                      borderBottomRightRadius: 20,
                      shadowColor: '#000',
                      shadowOffset: {width: 0, height: 2},
                      shadowOpacity: 0.8,
                      shadowRadius: 2,
                      elevation: 1,
                    }}>
                    <Text style={design.flatlistTitle}>{item.name}</Text>
                    <Text style={design.flatlistNumber}>
                      S$ {item.priceUnit}
                    </Text>
                  </View>
                </View>
              </View>
            </TouchableOpacity>
          )}
          keyExtractor={item => item._id}
        />
        <TouchableOpacity
          onPress={() => this.props.setModalCategory()}
          style={{position: 'absolute', alignSelf: 'flex-end'}}>
          <Icon name="cross" size={40} style={{color: colorCSS.greenlogo}} />
        </TouchableOpacity>
        <Modal isVisible={modalDetail}>
          <ComDetailModal />
        </Modal>
      </View>
    );
  }
}

const mapStateToProps = state => ({
  livestock: state.livestock,
});

export default connect(mapStateToProps, {
  setModalCategory,
  getLivestockCategory,
  setModalDetail,
  getLivestockId,
})(ComCategoryModal);
