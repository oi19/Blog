import React, { useContext, useEffect, useState, useRef } from 'react';
import { Text, View, StyleSheet, FlatList, Animated, TouchableOpacity, RefreshControl } from 'react-native';
import { Context } from '../context/BlogContext';
import { Feather } from '@expo/vector-icons';
import { EvilIcons } from '@expo/vector-icons';


const IndexScreen = ({ navigation }) => {

    const { state, deletePost, getBlogPosts } = useContext(Context)
    const [loader, setLoader] = useState(false)
    const [animationIndex, setAnimationIndex] = useState(null)


    // fadeAnim will be used as the value for opacity. Initial Value: 1
    const fadeAnim = useRef(new Animated.Value(1)).current;
    const fadeOut = async (id) => {
        // Will change fadeAnim value to 0 in 3 seconds
        Animated.timing(fadeAnim, {
            toValue: 0,
            duration: 100,
            useNativeDriver: true
        }).start();
    };

    //Helper functions 
    const wait = async (timeout) => {
        return new Promise(resolve => setTimeout(resolve, timeout));
    }
    const onLoading = async () => {
        // console.log(results)
        try {
            setLoader(true);
            wait(500).then(() => {
                setLoader(false)
            })
            await getBlogPosts();
        }
        catch (err) {
            console.log(err, 'omar')
        }
    }

    useEffect(() => {
        getBlogPosts();
        const listener = navigation.addListener('didFocus', async () => {
            await getBlogPosts();
        })
        return () => { listener.remove() }
    }, [])


    const renderItem = ({ item, index }) => {
        // console.log(item)
        return (
            <Animated.View
                key={index}
                style={[styles.post, styles.shadowProp,
                {
                    opacity:
                        index == animationIndex
                            ? fadeAnim
                            : 1
                }]}
            >
                <TouchableOpacity >
                    <Text
                        onPress={() => { navigation.navigate('Show', { id: item.id }) }}
                        style={{ fontSize: 20, opacity: 1, color: 'white' }}
                    >{item.title}</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                    <EvilIcons
                        onPress={async () => {
                            fadeOut(item.id);
                            setAnimationIndex(index)
                            await deletePost(item.id, setAnimationIndex(null))
                        }}
                        name="trash" size={35} color="white" />
                </TouchableOpacity>
            </Animated.View>
        )
    }

    return (
        <View style={{ flex: 1 }}>
            <Text style={{ alignSelf: 'center', fontSize: 20, marginVertical: 10, fontWeight: 'bold' }}>Posts</Text>
            <FlatList
                style={{ flex: 1, marginBottom: 50 }}
                data={state}
                keyExtractor={item => item.id}
                renderItem={({ item, index }) => renderItem({ item, index })}
                refreshControl={
                    <RefreshControl
                        refreshing={loader}
                        onRefresh={onLoading}
                        // colors={['white', 'red', 'yellow']}
                        // style={{ backgroundColor: 'transparent' }}
                        tintColor={'black'}
                    />
                }
            />
        </View>
    )
};


IndexScreen.navigationOptions = ({ navigation }) => {
    return {
        headerRight: () => (
            <TouchableOpacity style={styles.plus} onPress={() => navigation.navigate('Add')}>
                <Feather name="plus" size={30} />
            </TouchableOpacity>
        ),
    };
}

const styles = StyleSheet.create({
    post: {
        margin: 20,
        marginVertical: 15,

        // borderBottomColor: 'black',
        // borderBottomWidth: 1,
        padding: 15,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: 'red',
        borderRadius: 10,
        opacity: 1
    },
    plus: {
        marginRight: 10
    },
    shadowProp: {
        shadowColor: '#171717',
        shadowOffset: { width: 0, height: 8 },
        shadowOpacity: 2,
        shadowRadius: 10,
    }
});

export default IndexScreen;