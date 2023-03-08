import React from 'react'
import { View, Text, SafeAreaView, StyleSheet, ScrollView } from 'react-native'
import BottomTabs from '../components/BottomTabs'
import Header from '../components/home/Header'
import Post from '../components/home/Post'
import Stories from '../components/home/Stories'
import { Posts } from '../data/Posts'
import { TABS } from '../data/Tabs'



const HomeScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
        {/* <Text style={{color: 'white'}}>Hey</Text> */}
       <Header />
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