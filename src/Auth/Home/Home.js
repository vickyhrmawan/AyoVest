import React, {Component} from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  StyleSheet,
  TextInput,
  SafeAreaView,
  FlatList,
  Image,
  Dimensions,
  Button,
  ActivityIndicator,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {design} from '../css/Styles';
import colorCSS from '../css/Color';
import axios from 'axios';
import Swiper from 'react-native-swiper';
import Icon from 'react-native-vector-icons/Entypo';
import Modal from 'react-native-modal';
import ComDetailModal from '../../Modal/ComDetailModal';
import LoadingScreen from '../css/Loadingscreen';
import AsyncStorage from '@react-native-community/async-storage';
import {connect} from 'react-redux';
import {
  getLivestock,
  getLivestockId,
  moreLivestock,
} from '../../redux/action/LivestockAction';
import {getToken} from '../../redux/action/AuthAction';
import Splashscreen from './Splashscreen';

const width = Dimensions.get('window').width;

class Home extends Component {
  state = {
    persons: [],
    title: '',
    searchInput: [],
    searchData: [],
    startLoading: true,
  };

  _searchingData(text) {
    this.setState({searchInput: text});
    const catchData = this.props.livestock.dataLivestock.filter(val => {
      const itemData = `${val.name.toUpperCase()}`;
      const textData = text.toUpperCase();

      return itemData.indexOf(textData) > -1;
    });
    this.setState({searchData: catchData});
  }

  performTimeConsumingTask = async () => {
    return new Promise(resolve =>
      setTimeout(() => {
        this.props.myToken !== 0;
      }, 3000),
    );
  };

  async componentDidMount() {
    this.props.getLivestock();
    this.props.getToken();
    const data = await this.performTimeConsumingTask();

    if (data !== null) {
      this.setState({startLoading: false});
    }
  }
  renderFooter() {
    return (
      <View
        style={{
          padding: 10,
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'row',
        }}>
        {this.props.livestock.hasNextPage ? (
          <ActivityIndicator color="black" style={{margin: 15}} />
        ) : null}
      </View>
    );
  }

  render() {
    const {
      dataLivestock,
      isLoading,
      modalDetail,
      hasNextPage,
      nextPage,
    } = this.props.livestock;
    const {myToken} = this.props.auth;
    console.log('tokenku', myToken);
    if (isLoading === true) {
      return <LoadingScreen />;
    }
    return (
      <View style={{flex: 1}}>
        {/* <View style={{flex: 1, marginTop: 20}}>
          <Swiper
            showsButtons={false}
            dot={
              <View
                style={{
                  backgroundColor: colorCSS.gray,
                  width: 8,
                  height: 8,
                  borderRadius: 7,
                  marginLeft: 7,
                  marginRight: 7,
                }}
              />
            }
            activeDot={
              <View
                style={{
                  backgroundColor: colorCSS.greenlogo,
                  width: 8,
                  height: 8,
                  borderRadius: 7,
                  marginLeft: 7,
                  marginRight: 7,
                }}
              />
            }>
            <View
              style={{
                alignItems: 'center',
                marginHorizontal: 10,
                elevation: 10,
              }}>
              <Icon
                name="bar-graph"
                size={150}
                style={{color: colorCSS.greenlogo}}
              />
              <Text style={{fontSize: 30, fontWeight: 'bold'}}>
                Buy Livestock Investments
              </Text>
              <Text style={{fontSize: 15, fontWeight: 'bold'}}>
                Choose from all variant of Livestock. Discover a lot of
                opportunities regarding Investment just by browsing it through
                your phone.
              </Text>
            </View>
            <View style={{alignItems: 'center', marginHorizontal: 10}}>
              <Icon
                name="circular-graph"
                size={150}
                style={{color: colorCSS.greenlogo}}
              />
              <Text style={{fontSize: 30, fontWeight: 'bold'}}>
                Get High Return
              </Text>
              <Text style={{fontSize: 15, fontWeight: 'bold'}}>
                Everyone is mutually profited. Get profit periodically and track
                your investment from this app.
              </Text>
            </View>
          </Swiper>
        </View> */}
        <View
          style={{
            height: 50,
            backgroundColor: 'white',
            flexDirection: 'row',
            padding: 5,
            alignItems: 'center',
            borderWidth: 1,
            borderRadius: 30,
            marginLeft: 10,
            marginRight: 10,
            marginTop: 30,
          }}>
          <Icon
            name="magnifying-glass"
            style={{fontSize: 25, marginLeft: 20}}
          />
          <TextInput
            placeholder="Search"
            style={{fontSize: 15, paddingLeft: 15}}
            onChangeText={text => this._searchingData(text)}
          />
        </View>
        <View style={{flex: 1}}>
          <Text style={{fontSize: 20, fontWeight: 'bold', marginLeft: 20}}>
            Newest Commodity
          </Text>

          <FlatList
            numColumns={2}
            horizontal={false}
            data={
              this.state.searchInput.length > 3
                ? this.state.searchData
                : dataLivestock
            }
            onEndReached={
              hasNextPage !== false &&
              (() => this.props.moreLivestock(nextPage))
            }
            onEndReachedThreshold={0.5}
            renderItem={({item}) => (
              <TouchableOpacity
                style={{width: width / 2}}
                onPress={() => this.props.getLivestockId(item._id)}>
                <View>
                  <View
                    style={{
                      marginHorizontal: 10,
                      marginVertical: 10,
                    }}>
                    <Image
                      style={{
                        width: '100%',
                        resizeMode: 'cover',
                        height: 200,
                        alignSelf: 'center',
                        borderRadius: 20,
                      }}
                      source={{uri: item.image}}
                    />
                    <View
                      style={{
                        position: 'absolute',
                        backgroundColor: colorCSS.greenlogotransparent,
                        bottom: 0,
                        left: 0,
                        width: '100%',
                        borderBottomLeftRadius: 20,
                        borderBottomRightRadius: 20,
                      }}>
                      <Text style={design.flatlistTitle}>{item.name}</Text>
                      <Text style={design.flatlistNumber}>
                        S$ {item.priceUnit}
                      </Text>
                    </View>
                  </View>
                </View>
              </TouchableOpacity>
            )}
            keyExtractor={(item, index) => index.toString()}
            ListFooterComponent={this.renderFooter.bind(this)}
          />
        </View>
        <Modal isVisible={modalDetail} style={{margin: 0}}>
          <ComDetailModal />
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
  getLivestock,
  getLivestockId,
  moreLivestock,
  getToken,
})(Home);
