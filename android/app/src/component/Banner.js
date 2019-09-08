import React from 'react';
import {StyleSheet,View,Image} from 'react-native';
import ImagePicker from 'react-native-image-picker'

const Banner = () => (
      <View style = {styles.banner}>
    <Image
    source = {{uri: 'https://www.dmit.co.th/wp-content/uploads/2017/11/shutter_86181751-mobile-apps1.jpg'}}
    />
    {/* // source = {require('../component/images/camera.png')} */}
</View>
  );

const styles = StyleSheet.create({
banner: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
}
});
export default Banner;