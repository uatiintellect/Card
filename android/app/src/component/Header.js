import React from 'react';
import {StyleSheet,Text,View,Image} from 'react-native';
import ImagePicker from 'react-native-image-picker'

const Header = () => (
      <PaperProvider>
<View style = {styles.header}>
    <Image
    source = {{uri: 'https//image.shutterstock.com/z/stock-photo-hand-holding-smartphone-with-hand-drawn-media-icons-and-symbols-concept-248776741.jpg'}}
    // source = {require('../component/images/camera.png')}
    style =  {styles.cart}/>
<Text style = {styles.logo}>Products</Text>
</View>
</PaperProvider>
  );

const styles = StyleSheet.create({
header: {
    height: 80,
    marginTop: 20,
    backgroundColor: '#fff',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
    borderBottomWidth: 4,
    borderBottomColor: '#ccc'
},
cart: {
    width: 40,
    height: 40
},
logo: {
    fontSize: 20,
    marginLeft: 10,
    fontStyle: 'italic',
    color: '#292929',
}
});
export default Header;