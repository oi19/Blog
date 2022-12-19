import React, { useContext, useEffect } from 'react';
import { Text, View, StyleSheet, TouchableOpacity, TextInput } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { Context } from '../context/BlogContext';

const ShowScreen = ({ navigation }) => {

    const { state, getBlogPosts } = useContext(Context)
    const id = navigation.getParam('id')



    useEffect(() => {
        navigation.addListener('didFocus', () => {
            getBlogPosts();
        })
    }, [])
    const post = state.find(blogPost => id == blogPost.id)


    return <View style={{ flex: 1 }}>
        <View style={styles.miniContainer}>
            <Text style={styles.text}><Text style={{ fontWeight: 'bold', fontSize: 18 }}>Title:</Text> {post.title}</Text>
        </View>
        <View style={styles.miniContainer}>
            <TextInput editable={false} multiline={true} style={styles.text}><Text style={{ fontWeight: 'bold', fontSize: 18 }}>Content:</Text> {post.content}</TextInput>
        </View>

    </View>

}



ShowScreen.navigationOptions = ({ navigation }) => {
    const id = navigation.getParam('id')

    return {
        headerRight: () => (

            <TouchableOpacity style={styles.edit} onPress={() => navigation.navigate('Edit', { id: id })}>
                <FontAwesome name="pencil" size={24} color="black" />
            </TouchableOpacity>
        ),
    };
}
const styles = StyleSheet.create({
    edit: {
        marginRight: 10
    },
    miniContainer: {
        margin: 20,
        marginVertical: 15,

        // borderWidth: 1,
        borderRadius: 10,
        // borderColor: 'white',
        padding: 5,
        backgroundColor: 'white',

        shadowColor: '#171717',
        shadowOffset: { width: 0, height: 8 },
        shadowOpacity: 0.15,
        shadowRadius: 10,
    },
    text: {
        margin: 10,


        // fontSize: 18


    }
})

export default ShowScreen;