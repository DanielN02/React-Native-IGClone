import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'

const Post = ({post}) => {
  return (
    <View style ={{marginBottom: 30}}>
        <View
  style={{
    borderBottomColor: '#ced4da',
    borderBottomWidth: StyleSheet.hairlineWidth,
  }}
/>
      <PostHeader post ={post} />
      <PostImage post ={post} />
      <View style={{marginHorizontal: 15, marginTop: 10}}>
      <PostFooter />
      <Likes post={post} />
      <Caption post={post} />
        <CommentSection post={post} />
        <Comments post={post} />
      </View>
    </View>
  )
}

const PostHeader = ({post}) => (
    <View style={{flexDirection: 'row',
     justifyContent: 'space-between',
      margin: 5, 
      alignItems: 'center',}}>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Image source={{uri:post.profile_picture}} style={styles.story} />
            <TouchableOpacity>
                <Text style={{color: 'white', marginLeft: 5, fontWeight: '700'}}>
                    {post.user}
                </Text>
                </TouchableOpacity>
        </View>
        <TouchableOpacity>
       <Text style={{color:'white', fontWeight: '900' }}>...</Text>
       </TouchableOpacity>
    </View>
)

const PostImage = ({post}) => (
    <View style={{
      margin: 5, 
      alignItems: 'center',}}>
        <View>
            <Image source={{uri:post.imageurl}} style={styles.image} />
        </View>
    </View>
)


const PostFooterIcons = [
    {
        name: 'Like',
        imageurl: 'https://img.icons8.com/fluency-systems-regular/60/ffffff/like--v1.png',
        likedimageurl: 'https://img.icons8.com/fluency/512/like.png'
    },
    {
        name: 'Comment',
        imageurl: 'https://img.icons8.com/fluency-systems-regular/60/ffffff/speech-bubble--v1.png',
    },
    {
        name: 'Share',
        imageurl: 'https://img.icons8.com/fluency-systems-regular/60/ffffff/paper-plane.png',
    },
    {
    name: 'Save',
        imageurl: 'https://img.icons8.com/fluency-systems-regular/60/ffffff/bookmark-ribbon--v1.png',
    }
]

const PostFooter = () => (
    <View style={{flexDirection: 'row'}}>
        <View style ={styles.leftfooterIconscontainer}>
<Icon imgStyle ={styles.footerIcon} imgUrl={PostFooterIcons[0].imageurl} />
<Icon imgStyle ={styles.footerIcon} imgUrl={PostFooterIcons[1].imageurl} />
<Icon imgStyle ={styles.footerIcon} imgUrl={PostFooterIcons[2].imageurl} />
</View>
<View style={{flex:1, alignItems: 'flex-end'}}>
    <Icon imgStyle={styles.footerIcon} imgUrl={PostFooterIcons[3].imageurl} />
</View>
</View>
)

const Icon = ({imgStyle, imgUrl}) => (
<TouchableOpacity>
    <Image style={imgStyle} source={{uri: imgUrl}} />
</TouchableOpacity>
)


const Likes = ({post}) =>(
    <View style={{ flexDirection: 'row', marginTop: 5 }}>
    <Text style={{ color: 'white', fontWeight: 600 }}>
      {post.likes.toLocaleString('en')} likes
    </Text>
  </View>
)

const Caption = ({ post }) => (
    <View style={{ marginTop: 5 }}>
      <Text style={{ color: 'white' }}>
        <Text style={{ fontWeight: 600 }}>{post.username}</Text>
        <Text> {post.caption}</Text>
      </Text>
    </View>
  )
  
  const CommentSection = ({ post }) => (
    <View style={{ marginTop: 5 }}>
      {!!post.comments.length && (
        <Text style={{ color: 'gray' }}>
          View{post.comments.length > 1 ? 'all' : ''} {post.comments.length}{' '}
          {post.comments.length > 1 ? 'comments' : 'comment'}
        </Text>
      )}
    </View>
  )
  
  const Comments = ({ post }) => (
    <>
      {post.comments.map((comment, index) => (
        <View key={index} style={{ flexDirection: 'row', marginTop: 5 }}>
          <Text style={{ color: 'white' }}>
            <Text style={{ fontWeight: 600 }}>{comment.user}</Text>{' '}
            {comment.comment}
          </Text>
        </View>
      ))}
    </>
  )
  

const styles = StyleSheet.create({
    story: {
     width: 35,
     height: 35,
     borderRadius: 50,
     marginLeft: 16,
     borderWidth: 1.6,
     borderColor: '#0077b6'
    },
    image: {
        width: '105%',
        height: 450,
        aspectRatio: 1,
       },
       footerIcon: {
        width: 33,
        height: 33,
       },
       leftfooterIconscontainer: {
        flexDirection: 'row',
        width: '32%',
        justifyContent: 'space-between',
       },
  })

export default Post