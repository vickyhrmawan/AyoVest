import {StyleSheet, Dimensions} from 'react-native';
import colorCSS from './Color';

const {width} = Dimensions.get('window');

const design = StyleSheet.create({
  //authstyle
  textInput: {
    borderBottomWidth: 1,
    marginLeft: 15,
    marginRight: 15,
    fontSize: 18,
  },
  button: {
    backgroundColor: colorCSS.greenlogo,
    borderRadius: 10,
    padding: 10,
    marginHorizontal: 20,
    marginVertical: 5,
  },
  textButton: {
    textAlign: 'center',
    color: colorCSS.white,
    fontSize: 20,
    fontWeight: 'bold',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colorCSS.white,
  },
  icon: {
    color: colorCSS.darkgreen,
  },
  heading: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  menuItem: {
    padding: 10,
    borderWidth: 0.5,
  },

  //stylecontainer
  flatlistContainer: {
    backgroundColor: colorCSS.white,
    borderWidth: 1,
    borderColor: 'transparent',
    marginVertical: 8,
    marginHorizontal: 8,
    borderRadius: 10,
  },
  flatlistTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    marginLeft: 10,
    // position: 'absolute',
    color: colorCSS.white,
    // bottom: 30,
    // left: 25,
    textShadowColor: 'rgba(0, 0, 0, 1)',
    textShadowOffset: {width: 2, height: 2},
    textShadowRadius: 20,
    // backgroundColor: colorCSS.greenlogo,
  },
  flatlistText: {
    paddingHorizontal: 25,
    paddingBottom: 10,
    fontSize: 18,
    marginHorizontal: 30,
    borderBottomWidth: 1,
  },
  flatlistNumber: {
    // paddingLeft: 25,
    // marginVertical: 10,
    color: colorCSS.white,
    fontSize: 17,
    fontWeight: 'bold',
    marginLeft: 10,
    // position: 'absolute',
    // bottom: 5,
    // left: 25,
    // backgroundColor: colorCSS.greenlogo,
  },
  //drawerscreen
  menuList: {
    fontSize: 22,
    textAlign: 'left',
    color: colorCSS.white,
    marginVertical: 10,
    marginLeft: 20,
  },
  profileName: {
    fontSize: 22,
    color: colorCSS.white,
    bottom: 10,
  },
});

export {design};
