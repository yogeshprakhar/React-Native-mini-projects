import { FlatList, Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'

//React Navigation
import {NativeStackScreenProps} from '@react-navigation/native-stack'
import { RootStackPramList } from '../App'

import ProductItem from '../components/ProductItem'
import Seprator from '../components/Seprator'

//data
import { PRODUCTS_LIST } from '../data/constants'

type HomeProps = NativeStackScreenProps<RootStackPramList,'Home'>

export default function Home({navigation}:HomeProps) {
  return (
    <View style={styles.container}>
      <FlatList 
      data={PRODUCTS_LIST}
      keyExtractor={item => item.id}
      ItemSeparatorComponent={Seprator}
      renderItem={({item})=> (
        <Pressable
        onPress={()=>{
            navigation.navigate('Details',{
                product:item
            })
        }}
        >
            <ProductItem product={item}/>
        </Pressable>
      )}
      />
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:'flex-start',
        justifyContent:'center',
        padding:12,
        backgroundColor:'#FFFFFF'
    }
})