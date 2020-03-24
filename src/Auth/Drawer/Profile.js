import React, {Component} from 'react';
import {
  StyleSheet,
  View,
  Image,
  TouchableOpacity,
  ScrollView,
  Text,
  Dimensions,
} from 'react-native';
import Modal from 'react-native-modal';
import {connect} from 'react-redux';
import {
  setProfileDetail,
  setAdressDetail,
  setUpdateProfile,
} from '../../redux/action/AuthAction';
import {design} from '../css/Styles';
import colorCSS from '../css/Color';
import ProfileModal from '../../Modal/ProfileModal';
import AdressModal from '../../Modal/AdressModal';
import UpdateProfileModal from '../../Modal/UpdateProfileModal';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import ImagePicker from 'react-native-image-picker';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

const uploadImage = props => {
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
    console.log('Response = ', response);

    if (response.didCancel) {
      console.log('User cancelled image picker');
    } else if (response.error) {
      console.log('ImagePicker Error: ', response.error);
    } else if (response.customButton) {
      console.log('User tapped custom button: ', response.customButton);
    } else {
      const source = {uri: response.uri};

      // You can also display the image using data:
      // const source = { uri: 'data:image/jpeg;base64,' + response.data };

      this.setState({
        avatarSource: source,
      });
    }
  });
};

class Profile extends Component {
  state = {
    show: true,
  };
  ShowHideComponent = value => {
    this.setState({show: value});
  };
  render() {
    const {
      myToken,
      user,
      modalProfile,
      modalAdress,
      modalUpdate,
    } = this.props.auth;
    console.log('myprofile', myToken);
    console.log(modalProfile);
    return myToken !== 'guest' && myToken !== undefined ? (
      <View style={{flex: 1, backgroundColor: colorCSS.white}}>
        <Text style={design.textHeader}>AYOvest</Text>
        <View>
          <View style={{alignItems: 'center'}}>
            <Image
              style={styles.avatar}
              source={{
                uri: user.photo_profile,
              }}
            />
            <TouchableOpacity
              onPress={uploadImage}
              style={{
                backgroundColor: 'green',
                borderRadius: 150,
                padding: 10,
                alignSelf: 'center',
                top: -width / 7,
                left: width / 7,
              }}>
              <Icon name="account-edit" size={20} color="white" />
            </TouchableOpacity>
            <Text style={styles.name}>{user.fullname} </Text>
            <Text style={styles.userInfo}>{user.role}, </Text>
            <Text style={styles.userInfo}>2 Investments </Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              marginHorizontal: 30,
              alignSelf: 'center',
            }}>
            <TouchableOpacity
              style={styles.button}
              onPress={() => this.props.setProfileDetail()}>
              <Text style={styles.buttonText}>Profile</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.button}
              onPress={() => this.props.setAdressDetail()}>
              <Text style={styles.buttonText}>Adress</Text>
            </TouchableOpacity>
          </View>
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
                }}>
                Pending
              </Text>
            </TouchableOpacity>
          </View>
          <View
            style={{
              marginHorizontal: 20,
              paddingHorizontal: 15,
              marginVertical: 10,
            }}>
            {this.state.show ? (
              <View
                style={{
                  flexDirection: 'row',
                  alignSelf: 'center',
                }}>
                <View style={{width: width / 1.75}}>
                  <Text
                    style={{
                      fontSize: 16,
                      marginVertical: 3,
                      fontFamily: 'poppins',
                    }}>
                    Price Unit
                  </Text>
                  <Text
                    style={{
                      fontSize: 16,
                      marginVertical: 3,
                      fontFamily: 'poppins',
                    }}>
                    Contract
                  </Text>
                  <Text
                    style={{
                      fontSize: 16,
                      marginVertical: 3,
                      fontFamily: 'poppins',
                    }}>
                    Return/Year
                  </Text>
                  <Text
                    style={{
                      fontSize: 16,
                      marginVertical: 3,
                      fontFamily: 'poppins',
                    }}>
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
                    S$ price
                  </Text>
                  <Text
                    style={{
                      fontSize: 16,
                      marginVertical: 3,
                      fontFamily: 'poppins',
                    }}>
                    contract years
                  </Text>
                  <Text
                    style={{
                      fontSize: 16,
                      marginVertical: 3,
                      fontFamily: 'poppins',
                    }}>
                    roi %
                  </Text>
                  <Text
                    style={{
                      fontSize: 16,
                      marginVertical: 3,
                      fontFamily: 'poppins',
                    }}>
                    totalunit
                  </Text>
                </View>
              </View>
            ) : (
              <Text
                style={{
                  fontSize: 16,
                  marginVertical: 3,
                  fontFamily: 'poppins',
                }}>
                Pending
              </Text>
            )}
          </View>
        </View>
        <View>
          <TouchableOpacity
            style={styles.button}
            onPress={() => this.props.setUpdateProfile()}>
            <Text style={styles.buttonText}>Update Profile</Text>
          </TouchableOpacity>
          {/* <Modal>
            <Text>Edit Profile</Text>
            <Text>Name</Text>
            <Text>Update Profile Picture</Text>
          </Modal> */}
        </View>
        <Modal isVisible={modalProfile} style={{margin: 0}}>
          <ProfileModal />
        </Modal>
        <Modal isVisible={modalAdress} style={{margin: 0}}>
          <AdressModal />
        </Modal>
        <Modal isVisible={modalUpdate} style={{margin: 0}}>
          <UpdateProfileModal />
        </Modal>
      </View>
    ) : (
      <View>
        <Text>Please login to proceed</Text>
        <TouchableOpacity
          style={styles.button}
          onPress={() => this.props.navigation.navigate('Login')}>
          <Text>Login</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'transparent',
    display: 'flex',
    flex: 1,
  },
  headerText: {
    fontWeight: 'bold',
    fontFamily: 'Cochin',
    fontSize: 20,
    color: '#fff',
  },
  // header: {
  //     backgroundColor: "#ffffff"
  // },
  headerContent: {
    padding: 30,
    alignItems: 'center',
  },
  avatar: {
    width: width / 3,
    height: width / 3,
    borderRadius: 63,
    borderWidth: 4,
    marginVertical: 15,
  },
  name: {
    fontSize: 22,
    color: '#000',
    fontWeight: '600',
  },
  userInfo: {
    fontSize: 13,
    color: '#000',
  },
  button: {
    width: width / 2.75,
    borderRadius: 7,
    marginHorizontal: 5,
    marginTop: 20,
    paddingVertical: 13,
    marginBottom: 35,
    backgroundColor: colorCSS.greenlogo,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: colorCSS.white,
    textAlign: 'center',
  },
});

const mapStateToProps = state => ({
  auth: state.auth,
});

export default connect(mapStateToProps, {
  setProfileDetail,
  setAdressDetail,
  setUpdateProfile,
})(Profile);
