import React, {Component} from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  Dimensions,
  ScrollView,
  FlatList,
} from 'react-native';
import {design} from '../Auth/css/Styles';
import colorCSS from '../Auth/css/Color';
import Icon from 'react-native-vector-icons/AntDesign';
import Icons from 'react-native-vector-icons/Entypo';
import {connect} from 'react-redux';
import {closeUpdateProfile, updateProfile} from '../redux/action/AuthAction';
import {TextInput} from 'react-native-gesture-handler';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

class UpdateProfileModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fullname: '',
      phone_number: '',
      dob: '',
      country: '',
      province: '',
      city: '',
      address: '',
      postal_code: '',
    };
  }
  render() {
    const {profile} = this.props.auth;
    console.log('fullname', this.state.fullname);

    return (
      <ScrollView style={{flex: 1, backgroundColor: 'white'}}>
        <Text style={[design.textHeader, {marginBottom: 15}]}>
          Update Profile
        </Text>
        <TouchableOpacity
          onPress={() => this.props.closeUpdateProfile()}
          style={{
            position: 'absolute',
            alignSelf: 'flex-start',
            top: 5,
            padding: 5,
          }}>
          <Icon name="arrowleft" size={30} color="white" />
        </TouchableOpacity>
        {/* <View>
          <Text
            style={{
              fontFamily: 'poppins',
              textAlign: 'center',
              fontSize: 18,
              marginVertical: 20,
              color: 'gray',
            }}>
            Update Profile
          </Text>
        </View> */}
        <View>
          <View style={design.profileContainer}>
            <View style={design.profileBox}>
              <Text
                style={{fontFamily: 'poppins', fontSize: 15, color: 'gray'}}>
                Fullname
              </Text>
            </View>
            <View style={design.profileBoxTextinput}>
              <TextInput
                style={{fontFamily: 'poppins', fontSize: 15, color: 'gray'}}
                placeholder={profile.fullname}
                placeholderTextColor={colorCSS.gray}
                onChangeText={value => this.setState({fullname: value})}
              />
            </View>
            <View style={{justifyContent: 'center', marginLeft: -width / 15}}>
              <Icons name="dots-three-vertical" size={20} color="lightgray" />
            </View>
          </View>
          <View style={design.profileContainer}>
            <View style={design.profileBox}>
              <Text
                style={{fontFamily: 'poppins', fontSize: 15, color: 'gray'}}>
                Phone
              </Text>
            </View>
            <View style={design.profileBoxTextinput}>
              <TextInput
                style={{fontFamily: 'poppins', fontSize: 15, color: 'gray'}}
                placeholder={profile.phone_number}
                placeholderTextColor={colorCSS.gray}
                onChangeText={value => this.setState({phone_number: value})}
              />
            </View>
            <View style={{justifyContent: 'center', marginLeft: -width / 15}}>
              <Icons name="dots-three-vertical" size={20} color="lightgray" />
            </View>
          </View>
          <View style={design.profileContainer}>
            <View style={design.profileBox}>
              <Text
                style={{fontFamily: 'poppins', fontSize: 15, color: 'gray'}}>
                Date of Birth
              </Text>
            </View>
            <View style={design.profileBoxTextinput}>
              <TextInput
                style={{fontFamily: 'poppins', fontSize: 15, color: 'gray'}}
                placeholder={profile.dob}
                placeholderTextColor={colorCSS.gray}
                onChangeText={value => this.setState({dob: value})}
              />
            </View>
            <View style={{justifyContent: 'center', marginLeft: -width / 15}}>
              <Icons name="dots-three-vertical" size={20} color="lightgray" />
            </View>
          </View>
        </View>
        <View>
          <View style={design.profileContainer}>
            <View style={design.profileBox}>
              <Text
                style={{fontFamily: 'poppins', fontSize: 15, color: 'gray'}}>
                Country
              </Text>
            </View>
            <View style={design.profileBoxTextinput}>
              <TextInput
                style={{fontFamily: 'poppins', fontSize: 15, color: 'gray'}}
                placeholder={profile.country}
                placeholderTextColor={colorCSS.gray}
                onChangeText={value => this.setState({country: value})}
              />
            </View>
            <View style={{justifyContent: 'center', marginLeft: -width / 15}}>
              <Icons name="dots-three-vertical" size={20} color="lightgray" />
            </View>
          </View>
          <View style={design.profileContainer}>
            <View style={design.profileBox}>
              <Text
                style={{fontFamily: 'poppins', fontSize: 15, color: 'gray'}}>
                Province
              </Text>
            </View>
            <View style={design.profileBoxTextinput}>
              <TextInput
                style={{fontFamily: 'poppins', fontSize: 15, color: 'gray'}}
                placeholder={profile.province}
                placeholderTextColor={colorCSS.gray}
                onChangeText={value => this.setState({province: value})}
              />
            </View>
            <View style={{justifyContent: 'center', marginLeft: -width / 15}}>
              <Icons name="dots-three-vertical" size={20} color="lightgray" />
            </View>
          </View>
          <View style={design.profileContainer}>
            <View style={design.profileBox}>
              <Text
                style={{fontFamily: 'poppins', fontSize: 15, color: 'gray'}}>
                City
              </Text>
            </View>
            <View style={design.profileBoxTextinput}>
              <TextInput
                style={{fontFamily: 'poppins', fontSize: 15, color: 'gray'}}
                placeholder={profile.city}
                placeholderTextColor={colorCSS.gray}
                onChangeText={value => this.setState({city: value})}
              />
            </View>
            <View style={{justifyContent: 'center', marginLeft: -width / 15}}>
              <Icons name="dots-three-vertical" size={20} color="lightgray" />
            </View>
          </View>
          <View style={design.profileContainer}>
            <View style={design.profileBox}>
              <Text
                style={{fontFamily: 'poppins', fontSize: 15, color: 'gray'}}>
                Address
              </Text>
            </View>
            <View style={design.profileBoxTextinput}>
              <TextInput
                style={{fontFamily: 'poppins', fontSize: 15, color: 'gray'}}
                placeholder={profile.address}
                placeholderTextColor={colorCSS.gray}
                onChangeText={value => this.setState({address: value})}
              />
            </View>
            <View style={{justifyContent: 'center', marginLeft: -width / 15}}>
              <Icons name="dots-three-vertical" size={20} color="lightgray" />
            </View>
          </View>
          <View style={design.profileContainer}>
            <View style={design.profileBox}>
              <Text
                style={{fontFamily: 'poppins', fontSize: 15, color: 'gray'}}>
                Postal Code
              </Text>
            </View>
            <View style={design.profileBoxTextinput}>
              <TextInput
                style={{fontFamily: 'poppins', fontSize: 15, color: 'gray'}}
                placeholder={profile.postal_code + ''}
                placeholderTextColor={colorCSS.gray}
                onChangeText={value => this.setState({postal_code: value})}
              />
            </View>
            <View style={{justifyContent: 'center', marginLeft: -width / 15}}>
              <Icons name="dots-three-vertical" size={20} color="lightgray" />
            </View>
          </View>
          <TouchableOpacity
            onPress={() =>
              this.props.updateProfile(
                this.props.auth.myToken,
                this.state.fullname,
                this.state.phone_number,
                this.state.dob,
                this.state.country,
                this.state.province,
                this.state.city,
                this.state.address,
                this.state.postal_code,
              )
            }
            style={[
              design.profileButton,
              {
                alignSelf: 'center',
                marginBottom: 10,
                marginTop: 5,
                // marginRight: width / 11,
              },
            ]}>
            <Text style={design.profileButtonText}>UPDATE</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    );
  }
}

const mapStateToProps = state => ({
  auth: state.auth,
});

export default connect(mapStateToProps, {closeUpdateProfile, updateProfile})(
  UpdateProfileModal,
);
