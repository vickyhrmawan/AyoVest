import {StyleSheet, Dimensions} from 'react-native';
import colorCSS from './Color';

const {width} = Dimensions.get('window');

const design = StyleSheet.create({
  //authstyle
  textTitle: {
    marginLeft: 20,
    fontSize: 15,
    fontFamily: 'poppins',
    color: colorCSS.white,
  },
  textInput: {
    borderBottomWidth: 1,
    borderBottomColor: colorCSS.white,
    marginLeft: 15,
    marginRight: 15,
    fontSize: 15,
    fontFamily: 'poppins',
    color: colorCSS.white,
    maxHeight: 43,
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
    fontSize: 18,
    marginHorizontal: 5,
    textAlign: 'center',
    paddingVertical: 5,
    fontWeight: 'bold',
    color: colorCSS.gray,
  },
  flatlistText: {
    fontSize: width / 30,
    marginLeft: 10,
    fontFamily: 'poppins',
  },
  flatlistNumber: {
    color: colorCSS.greenlogo,
    fontSize: 15,
    fontWeight: 'bold',
    marginLeft: 10,
    fontFamily: 'poppins',
  },
  //drawerscreen
  menuList: {
    fontSize: 15,
    fontFamily: 'poppins',
    textAlign: 'left',
    color: colorCSS.black,
    marginVertical: 10,
    marginLeft: 20,
  },
  profileName: {
    fontSize: 15,
    fontFamily: 'poppins',
    color: colorCSS.greenlogo,
    bottom: 10,
  },
  //commoditycategory
  textHeader: {
    fontWeight: 'bold',
    fontSize: 24,
    lineHeight: 36,
    color: '#FFFFFF',
    fontFamily: 'poppins',
    textAlign: 'center',
    paddingVertical: 10,
    backgroundColor: colorCSS.greenlogo,
  },
  topContainer: {
    flexDirection: 'row',
    backgroundColor: colorCSS.white,
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    borderTopWidth: 8,
    borderLeftWidth: 8,
    borderRightWidth: 8,
    borderColor: colorCSS.white,
  },
  bottomContainer: {
    flexDirection: 'row',
    backgroundColor: colorCSS.white,
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5,
    borderBottomWidth: 8,
    borderLeftWidth: 8,
    borderRightWidth: 8,
    borderColor: colorCSS.white,
  },
  boxContainer: {
    backgroundColor: colorCSS.greenlogo,
    padding: 5,
    borderWidth: 8,
    borderColor: colorCSS.white,
    width: width / 2.25,
    height: width / 2.25,
    borderRadius: 15,
    justifyContent: 'center',
  },
  imageCategory: {
    width: width / 4,
    height: width / 4,
    margin: 10,
    alignSelf: 'center',
  },
  textCategory: {
    fontFamily: 'poppins',
    fontWeight: '300',
    fontSize: 22,
    lineHeight: 34,
    color: colorCSS.white,
  },
  //profile
  profileButton: {
    width: width / 3,
    borderRadius: 40,
    marginHorizontal: 5,
    marginTop: width / 20,
    paddingVertical: width / 50,
    backgroundColor: colorCSS.greenlogo,
    marginBottom: 5,
  },
  profileButtonText: {
    fontSize: 16,
    fontFamily: 'poppins',
    color: colorCSS.white,
    textAlign: 'center',
  },
  profileContainer: {
    flexDirection: 'row',
    marginHorizontal: 30,
    marginVertical: 10,
    backgroundColor: 'white',
    elevation: 8,
  },
  profileBox: {
    width: width / 3,
    paddingHorizontal: 10,
    justifyContent: 'center',
    paddingVertical: 25,
  },
  profileBoxTextinput: {
    width: width / 1.97,
    paddingHorizontal: 10,
    paddingVertical: 25,
  },
  //Billing Modal
  billingText: {fontFamily: 'poppins', fontSize: 15},

  //swipe
  slide: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colorCSS.white,
  },
  sliderText: {
    fontFamily: 'poppins',
    fontSize: 20,
    color: colorCSS.black,
    textAlign: 'center',
    marginTop: 15,
  },
});

export {design};
