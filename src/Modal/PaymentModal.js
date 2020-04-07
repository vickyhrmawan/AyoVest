import React, {Component} from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  Image,
  ScrollView,
  Dimensions,
} from 'react-native';
import {connect} from 'react-redux';
import {
  closeModalPayment,
  createPayment,
} from '../redux/action/LivestockAction';
import Icon from 'react-native-vector-icons/AntDesign';
import {design} from '../Auth/css/Styles';
import colorCSS from '../Auth/css/Color';
import Modal from 'react-native-modal';
import ImagePicker from 'react-native-image-picker';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

class PaymentModal extends Component {
  state = {
    image: '',
  };
  _paymentUploader = () => {
    const options = {
      title: 'Select Avatar',
      customButtons: [{name: 'fb', title: 'Choose Photo from Facebook'}],
      storageOptions: {
        skipBackup: true,
        path: 'images',
      },
    };

    /**
     * The first arg is the options object for customization (it can also be null or omitted for default options),
     * The second arg is the callback which sends object: response (more info in the API Reference)
     */
    ImagePicker.showImagePicker(options, response => {
      // console.log('myToken', this.props.auth.myToken);
      // console.log('Response Image = ', response);

      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else {
        this.setState({image: response});
      }
    });
  };
  render() {
    const {isLoading, modalPayment, dataInvestmentID} = this.props.livestock;
    const {myToken} = this.props.auth;
    console.log('id buat payment', dataInvestmentID);
    console.log('state image payment', this.state.image);

    return (
      <View style={{flex: 1, backgroundColor: 'white'}}>
        <Text style={design.textHeader}>AYOvest</Text>
        <Text
          style={[
            design.billingText,
            {fontSize: 20, alignSelf: 'center', top: 10},
          ]}>
          Payment Page
        </Text>
        <View
          style={{
            flexDirection: 'row',
            marginHorizontal: 10,
            marginTop: width / 20,
            borderTopWidth: 1,
            paddingTop: 10,
            borderColor: colorCSS.gray,
          }}>
          <View>
            <Image
              source={{uri: dataInvestmentID.livestockId.image}}
              style={{
                width: width / 4,
                height: width / 3,
                marginHorizontal: 10,
              }}
            />
          </View>
          <View style={{flex: 1}}>
            <Text style={[design.billingText, {fontSize: 18}]}>
              {dataInvestmentID.livestockName}
            </Text>
            <View style={{flexDirection: 'row'}}>
              <View style={{flex: 3}}>
                <Text style={design.billingText}>kind</Text>
                <Text style={design.billingText}>contract Period</Text>
                <Text style={design.billingText}>roi</Text>
                <Text style={design.billingText}>priceUnit</Text>
              </View>
              <View style={{flex: 2}}>
                <Text style={design.billingText}>
                  : {'   '}
                  {dataInvestmentID.livestockKind}
                </Text>
                <Text style={design.billingText}>
                  : {'   '}
                  {dataInvestmentID.livestockId.contractPeriod}
                </Text>
                <Text style={design.billingText}>
                  : {'   '}
                  {dataInvestmentID.livestockId.roi}
                </Text>
                <Text style={design.billingText}>
                  : {'   '}S$ {dataInvestmentID.priceUnit}
                </Text>
              </View>
            </View>
          </View>
        </View>
        <View
          style={{
            borderWidth: 1,
            margin: 10,
            padding: 10,
            marginVertical: width / 50,
          }}>
          <Text style={[design.billingText, {fontSize: 18}]}>
            Payment Details
          </Text>
          <View style={{flexDirection: 'row'}}>
            <View style={{flex: 3}}>
              <Text style={design.billingText}>unit</Text>
              <Text
                style={[
                  design.billingText,
                  {borderBottomWidth: 1, borderBottomColor: colorCSS.gray},
                ]}>
                priceUnit
              </Text>
              <Text
                style={[
                  design.billingText,
                  {fontSize: 20, marginVertical: width / 50},
                ]}>
                Amount
              </Text>
            </View>
            <View style={{flex: 2}}>
              <Text style={design.billingText}>
                : {'   '}
                {dataInvestmentID.unit}
              </Text>
              <Text
                style={[
                  design.billingText,
                  {borderBottomWidth: 1, borderBottomColor: colorCSS.gray},
                ]}>
                : {'   '}
                S${'  '}
                {dataInvestmentID.priceUnit}
              </Text>
              <Text
                style={[
                  design.billingText,
                  {fontSize: 20, marginVertical: width / 50},
                ]}>
                S${'  '}
                {dataInvestmentID.totalPriceUnit}
              </Text>
            </View>
          </View>
          <Text style={[design.billingText, {fontSize: width / 30}]}>
            Make your Singapore Dollar Payment to:
          </Text>
          <Text style={[design.billingText, {fontSize: width / 30}]}>
            Bank Details : OCBC Bank, 65 Chulia St, #01-00, Singapore 049513
          </Text>
          <Text style={[design.billingText, {fontSize: width / 30}]}>
            Account Name : AYOvest Pte. Ltd.
          </Text>
          <Text style={[design.billingText, {fontSize: width / 30}]}>
            Account Number : 1680 1688 88
          </Text>
        </View>
        <TouchableOpacity
          onPress={() => this._paymentUploader()}
          style={{
            backgroundColor: colorCSS.greenlogo,
            borderRadius: 150,
            padding: 10,
            marginHorizontal: 10,
            alignSelf: 'flex-start',
            // top: -width / 7,
            // left: width / 7,
          }}>
          <Icon name="camera" size={20} color={colorCSS.white}>
            <Text style={design.billingText}> upload your payment</Text>
          </Icon>
        </TouchableOpacity>
        <View
          style={{
            flexDirection: 'row',
            // alignSelf: 'center',
            marginTop: width / 50,
            justifyContent: 'space-around',
          }}>
          <TouchableOpacity
            style={{
              backgroundColor: colorCSS.greenlogo,
              borderRadius: 10,
              padding: 10,
              alignSelf: 'center',
              width: width / 3,
            }}
            onPress={() => this.props.closeModalPayment()}>
            <Text style={design.profileButtonText}>Back</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              backgroundColor: colorCSS.greenlogo,
              borderRadius: 10,
              padding: 10,
              alignSelf: 'center',
              width: width / 3,
            }}
            onPress={() =>
              this.props.createPayment(
                myToken,
                dataInvestmentID._id,
                this.state.image,
              )
            }>
            <Text style={design.profileButtonText}>Submit</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const mapStateToProps = state => ({
  livestock: state.livestock,
  auth: state.auth,
});

export default connect(mapStateToProps, {closeModalPayment, createPayment})(
  PaymentModal,
);
