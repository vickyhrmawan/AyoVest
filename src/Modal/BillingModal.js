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
  closeModalBilling,
  setModalPayment,
} from '../redux/action/LivestockAction';
import Icon from 'react-native-vector-icons/Entypo';
import {design} from '../Auth/css/Styles';
import colorCSS from '../Auth/css/Color';
import Modal from 'react-native-modal';
import PaymentModal from './PaymentModal';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

class BillingModal extends Component {
  render() {
    const {isLoading, modalPayment, dataInvestmentID} = this.props.livestock;
    console.log('item billing modal', dataInvestmentID);
    return (
      <View
        style={{
          backgroundColor: 'white',
          height: height / 1.2,
          marginHorizontal: 15,
        }}>
        <View>
          {dataInvestmentID.paidStatus === true ? (
            <View>
              <View
                style={{
                  backgroundColor: colorCSS.greenlogo,
                  alignSelf: 'center',
                  justifyContent: 'center',
                  borderRadius: 60,
                  padding: width / 40,
                  top: -width / 15,
                  borderWidth: 5,
                  borderColor: colorCSS.white,
                }}>
                <Icon name="check" size={30} color={colorCSS.white} />
              </View>
              <Text
                style={{
                  textAlign: 'center',
                  fontFamily: 'poppins',
                  fontSize: 23,
                  marginTop: -width / 15,
                }}>
                Thank you!
              </Text>
              <Text
                style={{
                  textAlign: 'center',
                  fontFamily: 'poppins',
                  fontSize: 15,
                  color: colorCSS.gray,
                }}>
                Your transaction was successful
              </Text>
            </View>
          ) : (
            <View>
              <Text
                style={{
                  textAlign: 'center',
                  fontFamily: 'poppins',
                  fontSize: 23,
                  color: 'red',
                  marginTop: 15,
                }}>
                Payment Pending
              </Text>
              <Text
                style={{
                  textAlign: 'center',
                  fontFamily: 'poppins',
                  fontSize: 15,
                  color: colorCSS.gray,
                }}>
                Please proceed to payment page
              </Text>
            </View>
          )}
        </View>
        <View>
          <View
            style={{
              flexDirection: 'row',
              marginHorizontal: 10,
              marginTop: width / 15,
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
              marginVertical: width / 18,
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
                    {fontSize: 20, marginVertical: 20},
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
                    {fontSize: 20, marginVertical: 20},
                  ]}>
                  S${'  '}
                  {dataInvestmentID.totalPriceUnit}
                </Text>
              </View>
            </View>
          </View>
        </View>
        {dataInvestmentID.paidStatus === true ? (
          <View
            style={{
              flexDirection: 'row',
              alignSelf: 'center',
              marginTop: -width / 30,
            }}>
            <TouchableOpacity
              style={design.profileButton}
              onPress={() => this.props.closeModalBilling()}>
              <Text style={design.profileButtonText}>Close</Text>
            </TouchableOpacity>
          </View>
        ) : (
          <View style={{flexDirection: 'row', alignSelf: 'center'}}>
            <TouchableOpacity
              style={design.profileButton}
              onPress={() => this.props.closeModalBilling()}>
              <Text style={design.profileButtonText}>Pay Later</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={design.profileButton}
              onPress={() => this.props.setModalPayment()}>
              <Text style={design.profileButtonText}>Pay Now</Text>
            </TouchableOpacity>
          </View>
        )}

        <Modal isVisible={modalPayment} style={{margin: 0}}>
          <PaymentModal />
        </Modal>
      </View>
    );
  }
}

const mapStateToProps = state => ({
  livestock: state.livestock,
});

export default connect(mapStateToProps, {closeModalBilling, setModalPayment})(
  BillingModal,
);
