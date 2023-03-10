import React from 'react'
import {SafeAreaView, StyleSheet, ScrollView } from 'react-native'
import BottomTabs from '../components/BottomTabs'
import Header from '../components/home/Header'
import Post from '../components/home/Post'
import Stories from '../components/home/Stories'
import { Posts } from '../data/Posts'
import { TABS } from '../data/Tabs'



const HomeScreen = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
       <Header navigation={navigation} />
       <Stories />
       <ScrollView>
        {Posts.map((post, index)=>(
           <Post post={post} key={index} />
        ))}
      </ScrollView> 
      <BottomTabs icons={TABS} />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
    container:{
        backgroundColor: 'black',
        flex: 1,
    }
})

export default HomeScreen 