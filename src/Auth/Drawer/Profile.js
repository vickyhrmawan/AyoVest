import React, {Component} from 'react';
import {
  StyleSheet,
  View,
  Image,
  TouchableOpacity,
  ScrollView,
  Text,
  Modal,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import colorCSS from '../css/Color';
import {design} from '../css/Styles';

export default class Profile extends Component {
  render() {
    return (
      <LinearGradient
        colors={[
          // colorCSS.greenlogo,
          colorCSS.greenlogo1,
          colorCSS.greenlogo2,
          colorCSS.greenlogo3,
          colorCSS.greenlogo4,
        ]}
        style={{flex: 1}}>
        <View style={styles.container}>
          <View style={{flex: 7}}>
            <View style={styles.headerContent}>
              <Image
                style={styles.avatar}
                source={{
                  uri: 'https://bootdey.com/img/Content/avatar/avatar3.png',
                }}
              />
              <Text style={styles.name}>John </Text>
              <Text style={styles.userInfo}>Jakarta </Text>
            </View>
          </View>
          <View>
            <TouchableOpacity style={styles.button}>
              <Text style={styles.buttonText}>Update Profile</Text>
            </TouchableOpacity>
            {/* <Modal>
            <Text>Edit Profile</Text>
            <Text>Name</Text>
            <Text>Update Profile Picture</Text>
          </Modal> */}
          </View>
        </View>
      </LinearGradient>
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
    width: 130,
    height: 130,
    borderRadius: 63,
    borderWidth: 4,
    borderColor: '#ffffff',
    marginBottom: 10,
  },
  name: {
    fontSize: 22,
    color: '#fff',
    fontWeight: '600',
  },
  userInfo: {
    fontSize: 16,
    color: '#fff',
    fontWeight: '600',
  },
  button: {
    width: 300,
    backgroundColor: '#ffffff',
    borderRadius: 25,
    marginVertical: 5,
    marginTop: 30,
    paddingVertical: 13,
    marginBottom: 35,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#0080ff',
    textAlign: 'center',
  },
});
