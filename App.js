import { useState } from 'react';
import { Image ,StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function App() {
  const [img, setImg] = useState(require('./src/biscoito.png'));
  const [text, setText] = useState('');

  let sentences = [
    'No começo é difícil, mas no final dará errado.',
    'Você não pode mudar seu passado. Mas pode estragar seu futuro.',
    'Trabalhe com o que você ama e nunca mais vai amar nada.',
    'Pare de desejar e comece a desistir.',
    'O caminho é longo, mas a derrota é certa.',
    'Não sabendo que era impossível, foi lá e soube.',
    'Não tenha medo do fracasso. Tenha costume.',
    'Nunca é tarde para desistir.',
    'Você é mais fraco que pensa.',
    'No começo tava ruim. Agora parece o começo.',
    'Penso, logo desisto.',
    'Nunca foi azar, sempre foi incompetência.',
    'Seu maior problema é você.',
    'O não você já tem. Busque a humilhação.',
    'Lute como nunca. Perca como sempre.',
    'Reclame menos. Fracasse mais.',
    'Nunca deixe ninguém dizer que você não consegue. Diga você mesmo: EU NÃO CONSIGO!',
  ]

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
      <Image
        source={img}
        style={styles.img}
      />
      <Text style={styles.text}>{text}</Text>
      <TouchableOpacity 
        style={[styles.btn, { opacity: text.length > 0 ? 0.3 : 1 }]} 
        onPress={handleText}
        disabled={text.length > 0}
      >
        <View style={styles.btn_container}>
          <Text style={styles.btn_text}>Quebrar biscoito</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity style={[styles.btn, { marginTop: 15, borderColor:'#121212' }]} onPress={handleRestart}>
        <View style={styles.btn_container}>
          <Text style={[styles.btn_text, { color: '#121212' }]}>Reiniciar biscoito</Text>
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
