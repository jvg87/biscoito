import { useState } from 'react';
import { Image ,StyleSheet, Text, TouchableOpacity, View } from 'react-native';

import { sentences } from './src/data';

export default function App() {
  const [img, setImg] = useState(require('./src/biscoito.png'));
  const [text, setText] = useState('');

  function handleText(){
    let randonNumber = Math.floor(Math.random() * sentences.length)
    setText(`" ${sentences[randonNumber]} "`)
    setImg(require('./src/biscoitoAberto.png'))
  }

  function handleRestart(){
    setText('');
    setImg(require('./src/biscoito.png'))
  }

  return (
    <View style={styles.container}>
      <Text style={[styles.title, {opacity: text.length !== 0 ? 0.3 : 1 }]}>Quebre o biscoito</Text>
      <TouchableOpacity 
        onPress={handleText}
        disabled={text.length > 0}  
      >
        <Image
          source={img}
          style={styles.img}
        />
      </TouchableOpacity>
      <Text style={styles.text}>{text}</Text>
      <TouchableOpacity 
        style={[styles.btn, { opacity: text.length === 0 ? 0.3 : 1 }]} 
        onPress={handleRestart}
        disabled={text.length === 0}  
      >
        <View style={styles.btn_container}>
          <Text style={styles.btn_text}>Reiniciar</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fcfcfc',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 25,
    fontWeight:'bold',
    margin: 20,
    color: '#dd7b22',
  },
  img: {
    width: 230,
    height: 230
  },
  text: {
    fontSize:20,
    color: '#dd7b22',
    margin: 30,
    fontStyle: 'italic',
    textAlign: 'center'
  },
  btn:{
    width:230,
    height:50,
    borderColor:'#dd7b22',
    borderWidth:2,
    borderRadius:25
  },
  btn_container: {
    flex:1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  btn_text :{
    fontSize: 18,
    fontWeight: 'bold',
    color: '#dd7b22'
  }
});
