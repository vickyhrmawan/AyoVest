import React, {Component} from 'react';
import {Text, View, TouchableOpacity, Image, Dimensions} from 'react-native';
import {design} from '../css/Styles';
import colorCSS from '../css/Color';
import Modal from 'react-native-modal';
import ComCategoryModal from '../../Modal/ComCategoryModal';
import {getLivestockCategory} from '../../redux/action/LivestockAction';
import {connect} from 'react-redux';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

class CommodityCategory extends Component {
  componentDidMount() {
    this.props.getLivestockCategory();
  }
  render() {
    const {dataLivestockCat, isLoading, modalCategory} = this.props.livestock;
    // console.log('dataLivestockCat', dataLivestockCat);
    return (
      <View style={{backgroundColor: colorCSS.greenlogo, flex: 1}}>
        <Text style={design.textHeader}>AYOvest</Text>
        <View
          style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: 20,
          }}>
          <View style={design.topContainer}>
            <TouchableOpacity
              activeOpacity={0.8}
              onPress={() => this.props.getLivestockCategory('cow')}>
              <View style={design.boxContainer}>
                <Image
                  source={require('../../../assets/img/cowIcon.png')}
                  tintColor="white"
                  style={design.imageCategory}
                />
                <Text style={design.textCategory}>Cow</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              activeOpacity={0.8}
              onPress={() => this.props.getLivestockCategory('chicken')}>
              <View style={design.boxContainer}>
                <Image
                  source={require('../../../assets/img/chickenIcon.png')}
                  tintColor="white"
                  style={design.imageCategory}
                />
                <Text style={design.textCategory}>Chicken</Text>
              </View>
            </TouchableOpacity>
          </View>
          <View style={design.bottomContainer}>
            <TouchableOpacity
              activeOpacity={0.8}
              onPress={() => this.props.getLivestockCategory('goat')}>
              <View style={design.boxContainer}>
                <Image
                  source={require('../../../assets/img/goatIcon.png')}
                  tintColor="white"
                  style={design.imageCategory}
                />
                <Text style={design.textCategory}>Goat</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              activeOpacity={0.8}
              onPress={() => this.props.getLivestockCategory('duck')}>
              <View style={design.boxContainer}>
                <Image
                  source={require('../../../assets/img/duckIcon.png')}
                  tintColor="white"
                  style={design.imageCategory}
                />
                <Text style={design.textCategory}>Duck</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
        <Modal isVisible={modalCategory} style={{margin: 0}}>
          <ComCategoryModal />
        </Modal>
      </View>
    );
  }
}

const mapStateToProps = state => ({
  livestock: state.livestock,
});

export default connect(mapStateToProps, {getLivestockCategory})(
  CommodityCategory,
);
