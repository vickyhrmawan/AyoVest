import React, {Component} from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  StyleSheet,
  TextInput,
  FlatList,
  Image,
  Dimensions,
  ActivityIndicator,
  Animated,
} from 'react-native';
import {design} from '../css/Styles';
import colorCSS from '../css/Color';
import Icon from 'react-native-vector-icons/Entypo';
import Modal from 'react-native-modal';
import ComDetailModal from '../../Modal/ComDetailModal';
import LoadingScreen from '../css/Loadingscreen';
import {connect} from 'react-redux';
import {
  getLivestock,
  getLivestockId,
  moreLivestock,
  getInvestment,
} from '../../redux/action/LivestockAction';
import {getToken, getProfile} from '../../redux/action/AuthAction';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

class Home extends Component {
  state = {
    persons: [],
    title: '',
    searchInput: [],
    searchData: [],
    show: true,
    searchAnimated: new Animated.Value(0),
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

  ShowHideComponent = () => {
    if (this.state.show == true) {
      this.setState({show: false});
      this.showSearchBar();
    } else {
      this.setState({show: true, searchAnimated: new Animated.Value(0)});
    }
  };

  async componentDidMount() {
    await this.props.getProfile(this.props.auth.myToken);
    await this.props.getInvestment(this.props.auth.myToken);
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

  showSearchBar = () => {
    Animated.timing(this.state.searchAnimated, {
      toValue: width - 20,
      duration: 300,
    }).start();
  };

  render() {
    const {
      dataLivestock,
      isLoading,
      modalDetail,
      hasNextPage,
      nextPage,
      dataInvestment,
    } = this.props.livestock;
    const {myToken, user} = this.props.auth;
    console.log('token dari gettoken', myToken);
    console.log('profile', dataInvestment);
    if (isLoading === true) {
      return <LoadingScreen />;
    }

    return (
      <View
        style={{
          flex: 1,
          backgroundColor: colorCSS.white,
        }}>
        <View
          style={{
            width: width / 1.5,
            height: width / 1.5,
            backgroundColor: colorCSS.greenlogo,
            borderRadius: 110,
            transform: [{scaleX: 2}],
            alignSelf: 'center',
            top: -width / 5,
            position: 'absolute',
          }}></View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            zIndex: 1000,
            paddingHorizontal: 20,
          }}>
          <TouchableOpacity
            style={{
              justifyContent: 'center',
            }}
            onPress={() => this.props.navigation.openDrawer()}>
            <Icon name="menu" size={30} color={colorCSS.white} />
          </TouchableOpacity>
          <View>
            <Text style={design.textHeader}>AYOvest</Text>
          </View>
          {this.state.show ? (
            <TouchableOpacity
              style={{
                justifyContent: 'center',
              }}
              onPress={() => this.ShowHideComponent()}>
              <Icon name="magnifying-glass" size={30} color={colorCSS.white} />
            </TouchableOpacity>
          ) : (
            <Animated.View
              style={{
                position: 'absolute',
                backgroundColor: colorCSS.white,
                borderRadius: 10,
                width: this.state.searchAnimated,
                left: 10,
                top: 10,
              }}>
              <TextInput
                placeholder="Search"
                style={{
                  fontSize: 15,
                  paddingLeft: 15,
                }}
                onChangeText={text => this._searchingData(text)}
              />
              <TouchableOpacity
                style={{
                  alignSelf: 'flex-end',
                  position: 'absolute',
                }}
                onPress={() => this.ShowHideComponent()}>
                <Icon name="cross" size={30} color={colorCSS.gray} />
              </TouchableOpacity>
            </Animated.View>
          )}
        </View>
        <View
          style={{
            height: height / 8,
            backgroundColor: 'white',
            flexDirection: 'row',
            padding: 15,
            alignItems: 'center',
            justifyContent: 'space-evenly',
            borderRadius: 10,
            marginHorizontal: 20,
            marginTop: height / 10,
            elevation: 10,
          }}>
          <View
            style={{
              justifyContent: 'space-between',
              flexDirection: 'row',
              alignItems: 'center',
              marginHorizontal: 20,
            }}>
            <View style={{flex: 0}}>
              <Image
                source={require('../../../assets/img/investor.png')}
                style={{height: width / 9, width: width / 9}}
              />
            </View>
            <View
              style={{
                // flex: 1,
                justifyContent: 'center',
                paddingHorizontal: 10,
              }}>
              <Text
                style={{
                  lineHeight: height / 35,
                  letterSpacing: 0.5,
                  fontSize: width / 20,
                  color: 'green',
                }}>
                1500{' '}
              </Text>
              <Text
                style={{
                  fontSize: width / 22,
                  color: 'green',
                }}>
                investors{' '}
              </Text>
            </View>
          </View>
          <View
            style={{
              justifyContent: 'space-between',
              flexDirection: 'row',
              alignItems: 'center',
              marginHorizontal: 20,
            }}>
            <View style={{flex: 0}}>
              <Image
                source={require('../../../assets/img/breeder.png')}
                style={{height: width / 9, width: width / 9}}
              />
            </View>
            <View
              style={{
                // flex: 1,
                justifyContent: 'center',
                paddingHorizontal: 10,
              }}>
              <Text
                style={{
                  lineHeight: height / 35,
                  letterSpacing: 0.5,
                  fontSize: width / 20,
                  color: 'green',
                }}>
                285{' '}
              </Text>
              <Text
                style={{
                  fontSize: width / 22,
                  color: 'green',
                }}>
                breeders{' '}
              </Text>
            </View>
          </View>
        </View>
        <View style={{flex: 1, marginHorizontal: 10}}>
          <Text style={{fontSize: 20, textAlign: 'center', marginVertical: 15}}>
            Popular Livestock
          </Text>

          <FlatList
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
                // style={{width: width / 2}}
                onPress={() => this.props.getLivestockId(item._id)}>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-evenly',
                    marginVertical: 10,
                    marginHorizontal: 10,
                  }}>
                  <View
                    style={{
                      flex: 0,

                      // padding: 10,
                    }}>
                    <Image
                      style={{
                        width: width / 2.25,
                        resizeMode: 'cover',
                        height: width / 3,
                        alignSelf: 'center',
                        borderTopLeftRadius: 15,
                        borderBottomLeftRadius: 15,
                      }}
                      source={{uri: item.image}}
                    />
                  </View>
                  <View
                    style={{
                      backgroundColor: colorCSS.white,
                      width: width / 2,
                      borderTopRightRadius: 15,
                      borderBottomRightRadius: 15,
                      flex: 1,
                      borderTopWidth: 1,
                      borderTopColor: 'rgba(0,0,0,0.3)',
                      borderBottomWidth: 1,
                      borderBottomColor: 'rgba(0,0,0,0.3)',
                      borderRightWidth: 1,
                      borderRightColor: 'rgba(0,0,0,0.3)',
                    }}>
                    <Text style={design.flatlistTitle}>{item.name}</Text>
                    <View
                      style={{
                        flexDirection: 'row',
                      }}>
                      <View style={{width: width / 4.25}}>
                        <Text style={design.flatlistText}>price/unit</Text>
                        <Text style={design.flatlistNumber}>
                          S$ {item.priceUnit}
                        </Text>
                      </View>
                      <View>
                        <Text style={design.flatlistText}>contract</Text>
                        <Text style={design.flatlistNumber}>
                          {item.contractPeriod} years
                        </Text>
                      </View>
                    </View>
                    <View
                      style={{
                        flexDirection: 'row',
                        alignContent: 'space-around',
                      }}>
                      <View style={{width: width / 4.25}}>
                        <Text style={design.flatlistText}>return/year</Text>
                        <Text style={design.flatlistNumber}>{item.roi}%</Text>
                      </View>
                      <View>
                        <Text style={design.flatlistText}>unit</Text>
                        <Text style={design.flatlistNumber}>
                          {item.totalUnit}
                        </Text>
                      </View>
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
          <ComDetailModal {...this.props} />
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
  getProfile,
  getInvestment,
})(Home);
