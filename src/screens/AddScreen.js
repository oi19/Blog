import React, { useContext, useEffect } from 'react';
import { View, StyleSheet } from 'react-native';
import Form from '../components/Form';
import { Context } from '../context/BlogContext';

const AddScreen = ({ navigation }) => {
    const { addBlogPost } = useContext(Context)



    return <View style={{ flex: 1 }}>
        <Form onSubmit={(title, content) => { addBlogPost(`#${title}`, content, () => navigation.navigate('Index')) }} />
    </View>
}



const styles = StyleSheet.create({});


export default AddScreen;