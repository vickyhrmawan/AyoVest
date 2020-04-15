import React, {Component} from 'react';
import {
  StyleSheet,
  View,
  Image,
  TouchableOpacity,
  Text,
  Dimensions,
  FlatList,
} from 'react-native';
import Modal from 'react-native-modal';
import {connect} from 'react-redux';
import {
  setProfileDetail,
  setAdressDetail,
  setUpdateProfile,
  uploadImage,
  getProfile,
} from '../../redux/action/AuthAction';
import {
  getInvestment,
  getInvestmentID,
} from '../../redux/action/LivestockAction';
import {design} from '../css/Styles';
import colorCSS from '../css/Color';
import ProfileModal from '../../Modal/ProfileModal';
import AdressModal from '../../Modal/AdressModal';
import BillingModal from '../../Modal/BillingModal';
import UpdateProfileModal from '../../Modal/UpdateProfileModal';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import ImagePicker from 'react-native-image-picker';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

class Profile extends Component {
  state = {
    show: true,
    investmentShow: false,
  };

  ShowHideComponent = value => {
    this.setState({show: value});
  };

  _imagePicker = () => {
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
      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else {
        this.props.uploadImage(this.props.auth.myToken, response);
      }
    });
  };

  render() {
    const {
      myToken,
      user,
      modalProfile,
      modalAdress,
      modalUpdate,
      profile,
    } = this.props.auth;
    const {dataInvestment, modalBilling} = this.props.livestock;
    console.log('tes', profile);
    // console.log(this.props.auth);

    return myToken !== 'guest' && myToken !== undefined ? (
      <View style={{backgroundColor: colorCSS.white, flex: 1}}>
        <Text style={design.textHeader}>AYOvest</Text>
        <View style={{flex: 1}}>
          <View style={{alignItems: 'center'}}>
            <Image
              style={{
                width: width / 3,
                height: width / 3,
                borderRadius: 63,
                borderWidth: 4,
                marginTop: 15,
              }}
              source={{
                uri: profile.profile_picture,
              }}
            />
            <TouchableOpacity
              onPress={() => this._imagePicker()}
              style={{
                backgroundColor: 'green',
                borderRadius: 150,
                padding: 10,
                alignSelf: 'center',
                top: -width / 8,
                left: width / 7,
              }}>
              <Icon name="account-edit" size={20} color="white" />
            </TouchableOpacity>
            <View style={{marginTop: -width / 12}}>
              <Text
                style={{
                  fontFamily: 'poppins',
                  fontSize: 18,
                  textAlign: 'center',
                }}>
                {profile.fullname}{' '}
              </Text>
              <Text
                style={{
                  fontFamily: 'poppins',
                  fontSize: 15,
                  textAlign: 'center',
                }}>
                {profile.role}, {profile.city}
              </Text>
              <Text
                style={{
                  fontFamily: 'poppins',
                  fontSize: 15,
                  textAlign: 'center',
                }}>
                {dataInvestment.filter(item => item.paidStatus === true).length}{' '}
                Investments
              </Text>
            </View>
          </View>
          <View
            style={{
              flexDirection: 'row',
              marginHorizontal: 30,
              alignSelf: 'center',
              marginTop: -width / 22,
            }}>
            <TouchableOpacity
              style={design.profileButton}
              onPress={() => this.props.setUpdateProfile()}>
              <Text style={design.profileButtonText}>Profile</Text>
            </TouchableOpacity>
          </View>
          <View
            style={{
              flexDirection: 'row',
              marginHorizontal: 30,
              alignSelf: 'center',
              marginVertical: 5,
            }}>
            <TouchableOpacity
              disabled={this.state.show === true ? true : false}
              onPress={() => this.ShowHideComponent(!this.state.show)}
              style={{
                borderBottomWidth: this.state.show === true ? 2 : 1,
                borderBottomColor:
                  this.state.show === true ? colorCSS.greenlogo : colorCSS.gray,
                width: width / 2.5,
              }}>
              <Text
                style={{
                  color:
                    this.state.show === true
                      ? colorCSS.greenlogo
                      : colorCSS.gray,
                  textAlign: 'center',
                  fontFamily: 'poppins',
                  fontSize: 15,
                }}>
                Investments
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              disabled={
                this.state.show === true ? !this.state.show : !this.state.show
              }
              onPress={() => this.ShowHideComponent(!this.state.show)}
              style={{
                borderBottomWidth: this.state.show === true ? 1 : 2,
                borderBottomColor:
                  this.state.show === true ? colorCSS.gray : colorCSS.greenlogo,
                width: width / 2.5,
              }}>
              <Text
                style={{
                  color:
                    this.state.show === true
                      ? colorCSS.gray
                      : colorCSS.greenlogo,
                  textAlign: 'center',
                  fontFamily: 'poppins',
                  fontSize: 15,
                }}>
                Pending
              </Text>
            </TouchableOpacity>
          </View>
          {this.state.show ? (
            <FlatList
              data={dataInvestment.filter(
                item => item.paidStatus === true && item.unit !== 0,
              )}
              style={{marginHorizontal: width / 20}}
              renderItem={({item}) => (
                <TouchableOpacity
                  onPress={() => {
                    this.props.getInvestmentID(myToken, item._id);
                  }}>
                  <View style={{flexDirection: 'row', marginVertical: 5}}>
                    <View
                      style={{
                        elevation: 1,
                      }}>
                      <Image
                        source={{uri: item.livestockId.image}}
                        style={{
                          width: width / 7,
                          height: width / 4.5,
                          borderWidth: 1,
                          borderRadius: 10,
                        }}
                      />
                    </View>
                    <View style={{paddingHorizontal: 10}}>
                      <View style={{flexDirection: 'row'}}>
                        <View>
                          <Text
                            style={{
                              fontFamily: 'poppins',
                              fontSize: 17,
                              height: 25,
                            }}>
                            {item.livestockName}
                          </Text>
                          <Text
                            style={{
                              fontFamily: 'poppins',
                              fontSize: 13,
                              height: 16,
                            }}>
                            {item.livestockId.contractPeriod} Years
                          </Text>
                        </View>
                        <View>
                          {/* <Text
                            style={{
                              fontFamily: 'poppins',
                              fontSize: 13,
                              height: 16,
                            }}>
                            {item.updatedAt}
                          </Text> */}
                        </View>
                      </View>
                      <View
                        style={{
                          flexDirection: 'row',
                          justifyContent: 'space-around',
                          height: 16,
                        }}>
                        <Text
                          style={{
                            fontFamily: 'poppins',
                            fontSize: 12,
                            marginRight: 15,
                          }}>
                          {item.unit} Unit
                        </Text>
                        <Text
                          style={{
                            fontFamily: 'poppins',
                            fontSize: 12,
                            marginRight: 15,
                          }}>
                          S$ {item.priceUnit}
                        </Text>
                        <Text
                          style={{
                            fontFamily: 'poppins',
                            fontSize: 12,
                            marginRight: 15,
                          }}>
                          Return {item.livestockId.roi} %
                        </Text>
                      </View>
                      <Text
                        style={{
                          fontFamily: 'poppins',
                          fontSize: 17,
                          height: 25,
                          color: colorCSS.greenlogo,
                        }}>
                        Total Profit S${' '}
                        {((item.totalPriceUnit * item.livestockId.roi) / 100) *
                          item.livestockId.contractPeriod}
                      </Text>
                    </View>
                  </View>
                </TouchableOpacity>
              )}
              keyExtractor={item => item._id}
            />
          ) : (
            <FlatList
              data={dataInvestment.filter(
                item => item.paidStatus === false && item.unit !== 0,
              )}
              style={{marginHorizontal: width / 20}}
              renderItem={({item}) => (
                <TouchableOpacity
                  onPress={() => {
                    this.props.getInvestmentID(myToken, item._id);
                  }}>
                  <View style={{flexDirection: 'row', marginVertical: 5}}>
                    <View
                      style={{
                        elevation: 1,
                      }}>
                      <Image
                        source={{uri: item.livestockId.image}}
                        style={{
                          width: width / 7,
                          height: width / 4.5,
                          borderWidth: 1,
                          borderRadius: 10,
                        }}
                      />
                    </View>
                    <View
                      style={{
                        paddingHorizontal: 10,
                        width: width / 1.5,
                      }}>
                      <Text
                        style={{
                          fontFamily: 'poppins',
                          fontSize: 17,
                          height: 25,
                        }}>
                        {item.livestockName}
                      </Text>
                      <Text
                        style={{
                          fontFamily: 'poppins',
                          fontSize: 13,
                          height: 16,
                        }}>
                        {item.livestockId.contractPeriod} Years
                      </Text>
                      <View
                        style={{
                          flexDirection: 'row',
                          height: 16,
                        }}>
                        <Text
                          style={{
                            fontFamily: 'poppins',
                            fontSize: 12,
                            marginRight: 15,
                          }}>
                          {item.unit} Unit
                        </Text>
                        <Text
                          style={{
                            fontFamily: 'poppins',
                            fontSize: 12,
                            marginRight: 15,
                          }}>
                          S$ {item.priceUnit}
                        </Text>
                        <Text
                          style={{
                            fontFamily: 'poppins',
                            fontSize: 12,
                            marginRight: 15,
                          }}>
                          Return {item.livestockId.roi} %
                        </Text>
                      </View>

                      <Text
                        style={{
                          fontFamily: 'poppins',
                          fontSize: 17,
                          height: 25,
                          color: 'red',
                        }}>
                        Pay Now
                      </Text>
                    </View>
                  </View>
                </TouchableOpacity>
              )}
              keyExtractor={item => item._id}
            />
          )}
          {/* </View> */}
        </View>
        {/* <View style={{alignSelf: 'center'}}>
          <TouchableOpacity
            style={design.profileButton}
            onPress={() => this.props.setUpdateProfile()}>
            <Text style={design.profileButtonText}>Edit Profile</Text>
          </TouchableOpacity>
        </View> */}
        <Modal isVisible={modalProfile} style={{margin: 0}}>
          <ProfileModal />
        </Modal>
        <Modal isVisible={modalAdress} style={{margin: 0}}>
          <AdressModal />
        </Modal>
        <Modal isVisible={modalUpdate} style={{margin: 0}}>
          <UpdateProfileModal />
        </Modal>
        <Modal isVisible={modalBilling} style={{margin: 0}}>
          <BillingModal />
        </Modal>
      </View>
    ) : (
      <View>
        <Image
          source={require('../../../assets/img/AYOvest.png')}
          style={{
            width: width / 1.7,
            height: width / 9,
            alignSelf: 'center',
            marginTop: width / 8,
          }}
        />
        <Image
          source={require('../../../assets/img/Group95.png')}
          style={{
            width: width / 2.5,
            height: width / 2.5,
            alignSelf: 'center',
            marginTop: width / 15,
          }}
        />
        <Text
          style={{
            fontFamily: 'poppins',
            fontSize: 18,
            textAlign: 'center',
            marginVertical: width / 10,
          }}>
          Please sign in to proceed
        </Text>
        <TouchableOpacity
          style={[design.profileButton, {alignSelf: 'center'}]}
          onPress={() => this.props.navigation.navigate('Login')}>
          <Text style={design.profileButtonText}>Sign In</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const mapStateToProps = state => ({
  auth: state.auth,
  livestock: state.livestock,
});

export default connect(mapStateToProps, {
  setProfileDetail,
  setAdressDetail,
  setUpdateProfile,
  uploadImage,
  getInvestment,
  getProfile,
  getInvestmentID,
})(Profile);
