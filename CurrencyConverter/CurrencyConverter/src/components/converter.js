import React, {Component} from 'react';
import {StyleSheet,View,Text,TextInput} from 'react-native';


class Converter extends Component {
  constructor (props) {
    super(props);


    this.state = {
       tl : '',
       krw : '',
       usd : '',
       eur : '',
       cad : '',
       jpy : '',
       input: ''
    }
    debugger;
    console.log('constructor'); 


  }

render() {
  const { ConverterWrapper, inputStyle, textStyle } = styles;
  const { input,tl,usd,cad,jpy,eur } = this.state;
   return (
      <View style={converterWrapper}>
      <TextInput placeholder = 'Enter EUR Value'
                 style={inputStyle}
                 onChange = {(text) => {
                   this.setState({
                     input : text

                   })



                }}

                value = {input } />



          <Text style={textStyle} = TRY : {tl} </Text>
          <Text style={textStyle} = KRW : {krw} </Text>
          <Text style={textStyle} = USD : {usd} </Text>
          <Text style={textStyle} = EUR : {eur} </Text>
          <Text style={textStyle} = CAD : {cad} </Text>
          <Text style={textStyle} = JPY : {jpy} </Text>


      </View>

   )
 }
}

const styles = StyleSheet.create({
     converterWrapper : {
       paddingTop : 30,
       justifyContent: 'center',
       alignItems:'center'


     },
     inputStyle: {
       width  : 200,
       height : 40,
       paddingBottom : 10


     },
     textStyle :{
       width  : 170,
       height : 50,
       fontWeight : 'bold'




     }



});

export default Converter;
