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
import Icon from 'react-native-vector-icons/AntDesign';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

class ComCategoryModal extends Component {
  render() {
    const {dataLivestockCat, isLoading, modalDetail} = this.props.livestock;
    console.log('theseare', dataLivestockCat);
    // console.log('theseare', dataLivestockCat[0].kind);
    return (
      <View style={{backgroundColor: 'white', flex: 1}}>
        <Text style={design.textHeader}>AYOvest</Text>

        <Text
          style={{
            fontSize: 30,
            textAlign: 'center',
            fontWeight: 'bold',
            color: colorCSS.greenlogo,
            marginVertical: 6,
          }}>
          {/* Categories */}
          {dataLivestockCat[0].kind}
        </Text>
        <FlatList
          data={dataLivestockCat}
          renderItem={({item}) => (
            <TouchableOpacity
              onPress={() => this.props.getLivestockId(item._id)}>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-evenly',
                  marginVertical: 10,
                  marginHorizontal: 20,
                }}>
                <View
                  style={{
                    flex: 0,

                    // padding: 10,
                  }}>
                  <Image
                    style={{
                      width: width / 2.25,
                      resizeMode: 'cover',
                      height: width / 3,
                      alignSelf: 'center',
                      borderTopLeftRadius: 15,
                      borderBottomLeftRadius: 15,
                    }}
                    source={{uri: item.image}}
                  />
                </View>
                <View
                  style={{
                    backgroundColor: colorCSS.white,
                    width: width / 2,
                    borderTopRightRadius: 15,
                    borderBottomRightRadius: 15,
                    flex: 1,
                    borderTopWidth: 1,
                    borderTopColor: 'rgba(0,0,0,0.3)',
                    borderBottomWidth: 1,
                    borderBottomColor: 'rgba(0,0,0,0.3)',
                    borderRightWidth: 1,
                    borderRightColor: 'rgba(0,0,0,0.3)',
                  }}>
                  <Text style={design.flatlistTitle}>{item.name}</Text>
                  <View
                    style={{
                      flexDirection: 'row',
                      // alignContent: 'space-between',
                    }}>
                    <View style={{width: width / 4.25}}>
                      <Text style={design.flatlistText}>price/unit</Text>
                      <Text style={design.flatlistNumber}>
                        S$ {item.priceUnit}
                      </Text>
                    </View>
                    <View>
                      <Text style={design.flatlistText}>contract</Text>
                      <Text style={design.flatlistNumber}>
                        {item.contractPeriod} years
                      </Text>
                    </View>
                  </View>
                  <View
                    style={{
                      flexDirection: 'row',
                      alignContent: 'space-around',
                    }}>
                    <View style={{width: width / 4.25}}>
                      <Text style={design.flatlistText}>return/year</Text>
                      <Text style={design.flatlistNumber}>{item.roi}%</Text>
                    </View>
                    <View>
                      <Text style={design.flatlistText}>unit</Text>
                      <Text style={design.flatlistNumber}>
                        {item.totalUnit}
                      </Text>
                    </View>
                  </View>
                </View>
              </View>
            </TouchableOpacity>
          )}
          keyExtractor={item => item._id}
        />
        <TouchableOpacity
          onPress={() => this.props.setModalCategory()}
          style={{
            position: 'absolute',
            alignSelf: 'flex-start',
            top: 5,
            padding: 5,
          }}>
          <Icon name="arrowleft" size={30} color="white" />
        </TouchableOpacity>
        <Modal isVisible={modalDetail} style={{margin: 0}}>
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
