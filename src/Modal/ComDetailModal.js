import React, {Component} from 'react';
import {Text, View, Button, TouchableOpacity, Image} from 'react-native';
import {connect} from 'react-redux';
import {setModalDetail, getLivestockId} from '../redux/action/LivestockAction';
import Icon from 'react-native-vector-icons/Entypo';

class ComDetailModal extends Component {
  // componentDidMount() {
  //   this.props.getLivestockId();
  // }

  render() {
    const {dataLivestockID, isLoading} = this.props.livestock;
    console.log('thisis', dataLivestockID);
    return (
      <View style={{flex: 1, backgroundColor: 'white'}}>
        <View style={{flex: 1}}>
          <Image
            style={{
              width: '100%',
              resizeMode: 'cover',
              position: 'absolute',
              height: 250,
              alignSelf: 'center',
              top: 30,
              borderWidth: 4,
              borderRadius: 20,
              shadowColor: 'rgba(0, 0, 0, 0.25)',
              shadowOffset: {width: 3, height: 3},
              shadowRadius: 10,
            }}
            source={{uri: dataLivestockID.image}}
          />
          <View>
            <Text
              style={{
                // position: 'absolute',
                backgroundColor: 'white',
                paddingHorizontal: 20,
                paddingVertical: 10,
                marginHorizontal: 30,
                borderRadius: 20,
                fontSize: 25,
                textAlign: 'center',
                shadowColor: '#000',
                shadowOffset: {width: 1, height: 2},
                shadowOpacity: 0.9,
                shadowRadius: 3,
                elevation: 2,
              }}>
              {dataLivestockID.name}
            </Text>
          </View>
        </View>
        <View
          style={{
            flex: 2,
            backgroundColor: 'white',
            marginHorizontal: 30,
            borderRadius: 20,
            padding: 15,
            marginTop: 50,
            bottom: 20,
            shadowColor: '#000',
            shadowOffset: {width: 0, height: 2},
            shadowOpacity: 0.8,
            shadowRadius: 2,
            elevation: 1,
          }}>
          <Text style={{fontSize: 20}}>Price / Unit</Text>
          <Text style={{fontSize: 35, color: '#00a0a8'}}>
            SGD {dataLivestockID.priceUnit}
          </Text>
          <Text style={{fontSize: 20}}>Return</Text>
          <Text style={{fontSize: 20, color: '#00a0a8'}}>
            {dataLivestockID.roi} % / year
          </Text>
          <Text style={{fontSize: 20}}>Contract Period</Text>
          <Text style={{fontSize: 20, color: '#00a0a8'}}>
            {dataLivestockID.contractPeriod} Years
          </Text>
          <Text style={{fontSize: 20, marginVertical: 25}}>
            {dataLivestockID.description}
          </Text>

          <View style={{flexDirection: 'row'}}>
            <View style={{flex: 1}}>
              <Text style={{fontSize: 20}}>Total Unit</Text>
              <Text style={{fontSize: 20, color: '#00a0a8'}}>
                {dataLivestockID.totalUnit}
              </Text>
            </View>
            <View style={{flex: 2}}>
              <Text style={{fontSize: 18, textAlign: 'right'}}>
                {dataLivestockID.city}, {dataLivestockID.province}
              </Text>
              <Text style={{fontSize: 18, textAlign: 'right'}}>
                {dataLivestockID.address}
              </Text>
            </View>
          </View>
          <TouchableOpacity>
            <Text
              style={{
                // backgroundColor: 'turquoise',
                paddingHorizontal: 10,
                paddingVertical: 10,
                marginHorizontal: 50,
                marginTop: 40,
                borderColor: '#00a0a8',
                borderWidth: 1,
                borderRadius: 20,
                fontSize: 20,
                textAlign: 'center',
                color: '#00a0a8',
              }}>
              INVEST
            </Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity
          onPress={() => this.props.setModalDetail()}
          style={{position: 'absolute', alignSelf: 'flex-end'}}>
          <Icon name="cross" size={40} color="#00a0a8" />
        </TouchableOpacity>
      </View>
    );
  }
}

const mapStateToProps = state => ({
  livestock: state.livestock,
});

export default connect(mapStateToProps, {setModalDetail, getLivestockId})(
  ComDetailModal,
);
