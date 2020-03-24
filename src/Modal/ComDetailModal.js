import React, {Component} from 'react';
import {
  Text,
  View,
  Button,
  TouchableOpacity,
  Image,
  ScrollView,
  Dimensions,
} from 'react-native';
import {connect} from 'react-redux';
import {setModalDetail, getLivestockId} from '../redux/action/LivestockAction';
import Icon from 'react-native-vector-icons/AntDesign';
import {design} from '../Auth/css/Styles';
import colorCSS from '../Auth/css/Color';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

class ComDetailModal extends Component {
  state = {
    show: true,
  };

  ShowHideComponent = value => {
    this.setState({show: value});
  };

  render() {
    console.log('details', this.state.show);
    const {dataLivestockID, isLoading} = this.props.livestock;
    console.log('thisis', dataLivestockID);
    return (
      <ScrollView style={{flex: 1, backgroundColor: 'white'}}>
        <View style={{flex: 1}}>
          <Text style={design.textHeader}>AYOvest</Text>

          <Image
            style={{
              width: width / 1.0625,
              height: width / 1.75,
              alignSelf: 'center',
              margin: 10,
              borderRadius: 5,
            }}
            source={{uri: dataLivestockID.image}}
          />
          <View>
            <Text
              style={{
                paddingHorizontal: 20,
                paddingVertical: 10,
                fontSize: 22,
                textAlign: 'center',
                fontFamily: 'poppins',
              }}>
              {dataLivestockID.name}
            </Text>
            <Text
              style={{
                fontSize: 16,
                textAlign: 'center',
                marginVertical: 10,
                fontFamily: 'poppins',
              }}>
              {dataLivestockID.city}, {dataLivestockID.province},{' '}
              {dataLivestockID.country}
            </Text>
          </View>
        </View>
        <View
          style={{
            flexDirection: 'row',
            alignSelf: 'center',
          }}>
          <View style={{width: width / 1.75}}>
            <Text
              style={{fontSize: 16, marginVertical: 3, fontFamily: 'poppins'}}>
              Price Unit
            </Text>
            <Text
              style={{fontSize: 16, marginVertical: 3, fontFamily: 'poppins'}}>
              Contract
            </Text>
            <Text
              style={{fontSize: 16, marginVertical: 3, fontFamily: 'poppins'}}>
              Return/Year
            </Text>
            <Text
              style={{fontSize: 16, marginVertical: 3, fontFamily: 'poppins'}}>
              Unit
            </Text>
          </View>
          <View>
            <Text
              style={{
                fontSize: 16,
                color: colorCSS.greenlogo,
                marginVertical: 3,
                fontFamily: 'poppins',
              }}>
              S$ {dataLivestockID.priceUnit}
            </Text>
            <Text
              style={{fontSize: 16, marginVertical: 3, fontFamily: 'poppins'}}>
              {dataLivestockID.contractPeriod} years
            </Text>
            <Text
              style={{fontSize: 16, marginVertical: 3, fontFamily: 'poppins'}}>
              {dataLivestockID.roi} %
            </Text>
            <Text
              style={{fontSize: 16, marginVertical: 3, fontFamily: 'poppins'}}>
              {dataLivestockID.totalUnit}
            </Text>
          </View>
        </View>

        <View style={{flex: 2, marginHorizontal: 20}}>
          <View
            style={{
              flexDirection: 'row',
              marginHorizontal: 30,
              alignSelf: 'center',
            }}>
            <TouchableOpacity
              disabled={this.state.show === true ? true : false}
              onPress={() => this.ShowHideComponent(!this.state.show)}
              style={{
                borderColor:
                  this.state.show === true ? colorCSS.greenlogo : colorCSS.gray,
                width: width / 2.5,
                borderBottomWidth: this.state.show === true ? 2 : 1,
              }}>
              <Text
                style={{
                  fontSize: 18,
                  paddingHorizontal: 20,
                  fontSize: 16,
                  marginVertical: 3,
                  fontFamily: 'poppins',
                  textAlign: 'center',
                  color:
                    this.state.show === true
                      ? colorCSS.greenlogo
                      : colorCSS.gray,
                }}>
                Details
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              disabled={
                this.state.show === true ? !this.state.show : !this.state.show
              }
              onPress={() => this.ShowHideComponent(!this.state.show)}
              style={{
                borderColor:
                  this.state.show === true ? colorCSS.gray : colorCSS.greenlogo,
                width: width / 2.5,
                borderBottomWidth: this.state.show === true ? 1 : 2,
              }}>
              <Text
                style={{
                  fontSize: 18,
                  paddingHorizontal: 20,
                  fontSize: 16,
                  marginVertical: 3,
                  fontFamily: 'poppins',
                  textAlign: 'center',
                  color:
                    this.state.show === true
                      ? colorCSS.gray
                      : colorCSS.greenlogo,
                }}>
                Prediction
              </Text>
            </TouchableOpacity>
          </View>

          <View>
            {this.state.show ? (
              <Text
                style={{
                  fontSize: 16,
                  marginVertical: 3,
                  fontFamily: 'poppins',
                }}>
                {dataLivestockID.description}
              </Text>
            ) : (
              <Text
                style={{
                  fontSize: 16,
                  marginVertical: 3,
                  fontFamily: 'poppins',
                }}>
                {dataLivestockID.priceUnit}
              </Text>
            )}
          </View>
        </View>
        <TouchableOpacity>
          <Text
            style={{
              backgroundColor: colorCSS.greenlogo,
              paddingHorizontal: 10,
              paddingVertical: 10,
              marginHorizontal: 50,
              marginTop: 40,
              borderColor: colorCSS.white,
              borderWidth: 1,
              borderRadius: 20,
              fontSize: 20,
              textAlign: 'center',
              color: colorCSS.white,
            }}>
            INVEST
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => this.props.setModalDetail()}
          style={{
            position: 'absolute',
            alignSelf: 'flex-start',
            top: 5,
            padding: 5,
          }}>
          <Icon name="arrowleft" size={30} color="white" />
        </TouchableOpacity>
      </ScrollView>
    );
  }
}

const mapStateToProps = state => ({
  livestock: state.livestock,
});

export default connect(mapStateToProps, {setModalDetail, getLivestockId})(
  ComDetailModal,
);
