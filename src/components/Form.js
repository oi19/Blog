import React, { useState, useContext } from 'react';
import { View, StyleSheet, Text, TextInput, Button, TouchableOpacity } from 'react-native';



const Form = ({ initialValues, onSubmit }) => {

    const [title, setTitle] = useState(initialValues.title)
    const [content, setContent] = useState(initialValues.content)


    return (<View style={styles.container}>


        <Text style={styles.label}>Enter Title</Text>
        {/* <View style={styles.shadowProp}> */}
        <TextInput
            multiline={true}
            style={[styles.input, styles.shadowProp]}
            value={title}
            onChangeText={text => setTitle(text)}

        />
        {/* </View> */}


        <Text style={styles.label}>Enter Content</Text>
        <TextInput
            multiline={true}
            style={[styles.input, styles.shadowProp]}
            value={content}
            onChangeText={text => setContent(text)}

        />

        {/* <Button style={styles.button} title='Save Post' onPress={() => onSubmit(title, content,)} /> */}
        <TouchableOpacity
            style={[styles.button, styles.shadowProp]}
            onPress={() => onSubmit(title, content)}
        >
            <Text style={[styles.buttonText]}>Save Post</Text>
        </TouchableOpacity>


    </View>
    )

};


Form.defaultProps = {
    initialValues: {
        title: " ",
        content: " "
    }

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // backgroundColor: ''
    },

    label: {
        fontSize: 20,
        margin: 20,
        height: 25
    },
    input: {
        borderWidth: 1,
        marginHorizontal: 20,
        borderRadius: 10,
        padding: 15,
        paddingTop: 15,
        marginBottom: 40,
        fontSize: 18,
        backgroundColor: 'white',
        borderColor: 'white'
        // 
    },
    shadowProp: {
        shadowColor: '#171717',
        shadowOffset: { width: 0, height: 8 },
        shadowOpacity: 0.15,
        shadowRadius: 10,
    },
    button: {
        margin: 20,
        borderWidth: 1,
        borderRadius: 5,
        borderColor: 'white',
        backgroundColor: 'white',
        alignItems: 'center',
        width: 100,
        alignSelf: 'center',
        fontSize: 30,
        padding: 8


    },
    buttonText: {
        fontSize: 18
    }
});


export default Form;