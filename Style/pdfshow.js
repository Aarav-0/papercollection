import {StyleSheet, Dimensions} from 'react-native'
var themecolor = '#1a00ff'
export default StyleSheet.create({
  spr_container: {
    height: Dimensions.get('window').height,
    width: Dimensions.get('window').width,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
    marginTop: 0,
  },
  container: {
    height: Dimensions.get('window').height / 1 - 62,
    width: Dimensions.get('window').width,
    marginTop: Dimensions.get('window').height * 0.065,
    borderTopWidth: 1,
    backgroundColor: 'transparent',
  },
  txt_pdf1: {
    bottom: Dimensions.get('window').height / 1.17,
    fontSize: Dimensions.get('window').width * 0.035,
    alignSelf: 'center',
    padding: 6,
    marginTop: 5,
    borderRadius: 10,
    zIndex: +1,
    position: 'absolute',
    opacity: 0.5,
    fontWeight: 'bold',
  },
  txt_pdf2: {
    bottom: Dimensions.get('window').height / 1.2,
    fontSize: Dimensions.get('window').width * 0.025,
    alignSelf: 'center',
    zIndex: -1,
    position: 'absolute',
    opacity: 1,
  },
  pdf: {
    backgroundColor: 'transparent',
    height: Dimensions.get('window').height / 1 - 110,
    width: Dimensions.get('window').width,
    // marginTop: 10,
    position: 'relative',
  },
  shadowa: {
    elevation: 30,
    shadowColor: '#1a00ff',
  },
  shadowi: {
    shadowColor: '#1a00ff',
    shadowOffset: {width: -2, height: 4},
    shadowOpacity: 20,
    shadowRadius: 3,
  },

  back_btn3: {
    bottom: 40,
    backgroundColor: 'transparent',
    height: Dimensions.get('window').height * 0.05,
    width: Dimensions.get('window').width * 0.06,
    borderRadius: 35,
    alignSelf: 'center',
    opacity: 0.4,
    zIndex: +1,
  },
  back_btn4: {
    height: Dimensions.get('window').height * 0.03,
    width: Dimensions.get('window').width * 0.15,
    right: 0,
    // alignSelf: 'flex-end',
    borderTopLeftRadius: 5,
    borderBottomLeftRadius: 5,
    padding: 6,
    justifyContent: 'flex-end',
    textAlignVertical: 'center',
    textAlign: 'center',
  },
  back_btn5: {
    height: Dimensions.get('window').height * 0.03,
    maxwidth: Dimensions.get('window').width * 0.2,
    // alignSelf: 'flex-start',
    borderTopRightRadius: 5,
    borderBottomRightRadius: 5,
    padding: 6,
    justifyContent: 'flex-start',
    textAlignVertical: 'center',
    textAlign: 'center',
  },
  cont_btn4_5: {
    width: Dimensions.get('window').width,
    backgroundColor: 'transparent',
    flexDirection: 'row',
    bottom: Dimensions.get('window').height * 0.1,
    zIndex: +1,
    justifyContent: 'space-between',
  },
  back_btn_txt: {
    fontSize: 9,

    opacity: 1,
    letterSpacing: 1,
  },
  adstyle: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: 60,
    borderTopWidth: 1,
    backgroundColor: 'transparent',
  },
  downloadimg: {
    width: 40,
    height: 40
  },
  downloadview: {
    backgroundColor: 'white',
    width: 60,
    height: 60,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    bottom: Dimensions.get('window').height * 0.07,
    right: Dimensions.get('window').width * 0.05,
    zIndex: +1,
  }
})