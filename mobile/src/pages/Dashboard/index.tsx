import React, {useState} from "react"
import {  Text, SafeAreaView , StyleSheet, TouchableOpacity,TextInput} from "react-native"
import { useNavigation } from "@react-navigation/native";
import {  NativeStackNavigationProp } from "@react-navigation/native-stack";
import { StackParamsList } from "../../routes/app.routes";
import { api } from "../../services/api";

export default function Dashboard(){
const navigation=useNavigation<NativeStackNavigationProp<StackParamsList>>();

const [number,setNumber]=useState('');
   

    async function openOrder() {
        if(number===''){
            return;
        }

        const response = await api.post('/order',{
            table:Number(number)
        })

        navigation.navigate('Order',{number:number,order_id:response.data.id})
        setNumber('');
       

    }
    return(
        <SafeAreaView style={styles.container}>
           <Text style={styles.title}>Novo pedido</Text>

           <TextInput
           placeholder="Número da mesa"
           placeholderTextColor="#000"
           style={styles.input}
           keyboardType="numeric"
           value={number}
           onChangeText={setNumber}/>

           <TouchableOpacity style={styles.button} onPress={openOrder}>
            <Text style={styles.buttonText}>Abrir mesa</Text>
           </TouchableOpacity>
        </SafeAreaView>
    )
}


const styles=StyleSheet.create({

container:{
    flex:1,
    justifyContent:'center',
    alignItems:'center',
    paddingVertical:15,
    backgroundColor: '#bc0010'
},
title:{
    fontSize:30,
    fontWeight:"bold",
    color:'#fff',
    marginBottom:24
},
input:{
    width:'90%',
    height:60,
    backgroundColor:'#fff',
    borderRadius:4,
    paddingHorizontal:8,
    textAlign:'center',
    fontSize:22,
    color:'#000'
},
button:{
    width:'90%',
    height:40,
    backgroundColor:'#25d07d',
    borderRadius:4,
    marginVertical:12,
    justifyContent:'center',
    alignItems:'center'
},
buttonText:{
    fontSize:18,
    color:'#fff',
    fontWeight:'bold'
}
})