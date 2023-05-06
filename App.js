import React from 'react';
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
		  <View style={styles.titulo}>
		  
      <Text style={styles.textoTitulo}>CALCULADORA IMC</Text>
      
    </View>
		  <View style={styles.blocoImagem}>
			  <Image
				  style={styles.imagem}
		  			source={require('./assets/imc.jpg')}
		  		/>
		  </View>
		  
		<View style={styles.bloco}>
			<Text>Peso: </Text>
			  <TextInput
				  style={styles.input}
				  />
			  
		<Text style={styles.label}>Altura: </Text>
			  <TextInput
				  style={styles.input}
				  />
		  </View>
		  <View style={styles.blocoBotao}>
		  <TouchableOpacity styles={styles.Botao}>
			  <Text style={styles.textoBotao}>Calcular</Text>
			  </TouchableOpacity>
		  
			  <TouchableOpacity style={styles.botao}>
			  <Text style={styles.textoBotao}>Limpar</Text>
			  </TouchableOpacity>
		  </View>
		  
	</View>
  );
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor:'#fff',
	},
	titulo:{
		backgroundColor:'#ffa500',
		height:'10%',
		justifyContent:'center',
	},
	textoTitulo:{
		fontSize:20,
		textAlign:'center',
		color:'#fff',
	},
	imagem:{
		width: 66,
		height: 58,
	},
	blocoImagem:{
		alignItens:'center',
		marginTop:30,
	},
	bloco:{
		width:'80%',
		marginLeft:'10%',
	},
	label:{
		fontSize:20,
	},
	input:{
		borderWidth:1,
		fontSize:30,
		borderRadius:5,
	
},
blocoBotao:{
	flexDirection:'row',
	width:'80%',
	marginLeft:'10%',
},
botao:{
	backgroundColor:'#ffa500',
	width:'40%',
	height:40,
	justifyContent:'center',
	marginLeft:'5%',
	marginRight:'5%',
	marginTop:20
	},
textoBotao:{
	textAlign:'center',
	fontSize:20
	}
});