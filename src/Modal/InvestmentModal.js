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
  closeModalInvestment,
  setModalBilling,
  createInvestment,
} from '../redux/action/LivestockAction';
import Icon from 'react-native-vector-icons/AntDesign';
import {design} from '../Auth/css/Styles';
import colorCSS from '../Auth/css/Color';
import Modal from 'react-native-modal';
import BillingModal from './BillingModal';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

class InvestmentModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      unit: 1,
    };
  }

  increment() {
    this.setState({
      unit: (this.state.unit += 1),
    });
  }

  decrement() {
    this.setState(prevState => ({
      unit: prevState.unit !== 1 ? prevState.unit - 1 : 1,
    }));
  }

  render() {
    const {isLoading, modalBilling, dataLivestockID} = this.props.livestock;
    const {myToken} = this.props.auth;
    return (
      <View
        style={{
          backgroundColor: 'white',
          width: height / 2,
          height: height / 1.3,
          alignSelf: 'center',
          borderRadius: 20,
        }}>
        <View
          style={{
            backgroundColor: colorCSS.greenlogo,
            borderTopLeftRadius: 20,
            borderTopRightRadius: 20,
          }}>
          <Text
            style={{
              fontWeight: 'bold',
              fontSize: 24,
              lineHeight: 36,
              color: '#FFFFFF',
              fontFamily: 'poppins',
              textAlign: 'center',
              paddingVertical: 10,
            }}>
            AYOvest
          </Text>
        </View>
        <View>
          <View>
            <Image
              source={{uri: dataLivestockID.image}}
              style={{
                width: width / 1.2,
                height: width / 2,
                margin: 10,
                borderRadius: 10,
                alignSelf: 'center',
              }}
            />
          </View>
          <View>
            <Text
              style={[design.billingText, {alignSelf: 'center', fontSize: 20}]}>
              {dataLivestockID.name}
            </Text>
            <Text
              style={[design.billingText, {alignSelf: 'center', fontSize: 18}]}>
              S$ {dataLivestockID.priceUnit}
            </Text>
            <View
              style={{
                flexDirection: 'row',
                alignSelf: 'center',
                marginVertical: 10,
              }}>
              <TouchableOpacity
                onPress={this.decrement.bind(this)}
                style={{marginHorizontal: 10}}>
                <Icon name="minuscircleo" size={18} />
              </TouchableOpacity>
              <Text
                style={{
                  marginHorizontal: 10,
                  fontFamily: 'poppins',
                  fontSize: 18,
                }}>
                {this.state.unit}
              </Text>
              <TouchableOpacity
                onPress={this.increment.bind(this)}
                style={{marginHorizontal: 10}}>
                <Icon name="pluscircleo" size={18} />
              </TouchableOpacity>
            </View>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-around',
              }}>
              <Text style={[design.billingText, {fontSize: 20}]}>
                Total Price
              </Text>
              <Text style={[design.billingText, {fontSize: 20}]}>
                S$ {this.state.unit * dataLivestockID.priceUnit}
              </Text>
            </View>
          </View>
        </View>

        <View style={{flexDirection: 'row', alignSelf: 'center'}}>
          <TouchableOpacity
            style={design.profileButton}
            onPress={() => this.props.closeModalInvestment()}>
            <Text style={design.profileButtonText}>Back</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={design.profileButton}
            onPress={() => {
              this.props.createInvestment(
                myToken,
                dataLivestockID._id,
                this.state.unit,
              );
              this.props.closeModalInvestment();
            }}>
            <Text style={design.profileButtonText}>Submit</Text>
          </TouchableOpacity>
        </View>
        <Modal isVisible={modalBilling} style={{margin: 0}}>
          <BillingModal />
        </Modal>
      </View>
    );
  }
}

const mapStateToProps = state => ({
  livestock: state.livestock,
  auth: state.auth,
});

export default connect(mapStateToProps, {
  closeModalInvestment,
  setModalBilling,
  createInvestment,
})(InvestmentModal);
