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
import {
  setModalDetail,
  setModalInvestment,
} from '../redux/action/LivestockAction';
import Icon from 'react-native-vector-icons/AntDesign';
import {design} from '../Auth/css/Styles';
import colorCSS from '../Auth/css/Color';
import InvestmentModal from './InvestmentModal';
import Modal from 'react-native-modal';

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
    const {
      dataLivestockID,
      isLoading,
      modalInvestment,
      modalDetail,
    } = this.props.livestock;
    const {myToken} = this.props.auth;
    console.log('modal details', modalDetail);
    console.log('modal investment', modalInvestment);

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
        {myToken !== 'guest' ? (
          <TouchableOpacity
            style={[design.profileButton, {alignSelf: 'center'}]}
            onPress={() => this.props.setModalInvestment()}>
            <Text style={design.profileButtonText}>INVEST</Text>
          </TouchableOpacity>
        ) : (
          <TouchableOpacity
            style={[design.profileButton, {alignSelf: 'center'}]}
            onPress={() => {
              this.props.setModalDetail();
              this.props.navigation.navigate('Login');
            }}>
            <Text style={design.profileButtonText}>INVEST</Text>
          </TouchableOpacity>
        )}

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
        <Modal isVisible={modalInvestment} style={{margin: 0}}>
          <InvestmentModal />
        </Modal>
      </ScrollView>
    );
  }
}

const mapStateToProps = state => ({
  livestock: state.livestock,
  auth: state.auth,
});

export default connect(mapStateToProps, {setModalDetail, setModalInvestment})(
  ComDetailModal,
);
