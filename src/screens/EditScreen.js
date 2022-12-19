import React, { useContext } from 'react';
import { View, StyleSheet, Text, TextInput, Button } from 'react-native';
import Form from '../components/Form';
import { Context } from '../context/BlogContext';


const EditScreen = ({ navigation }) => {
    const { state, editBlogPost } = useContext(Context)
    const id = navigation.getParam('id')
    // console.log(id)


    const post = state.find(blogPost => id == blogPost.id)


    return <View style={{ flex: 1 }}>
        <Form initialValues={{ title: post.title, content: post.content }} onSubmit={(title, content) =>
            editBlogPost(title, content, id, () => navigation.pop())} />
    </View>

};




const styles = StyleSheet.create({});


export default EditScreen;