import * as WebBrowser from 'expo-web-browser';
import React from 'react';
import { StyleSheet, SafeAreaView, FlatList, StatusBar } from 'react-native';

import Colors from '../../constants/Colors';
import { Text, View } from '../Themed';

import { Item } from './Todo';

type Data = {
    id: string;
    title: string;
    date: string;
};

const DATA: Data[] = [
    {
        id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
        title: 'First Item Third Item Third Item Third Item Third Item Third Item Third Item Third ItemThird Item Third Item Third Item Third Item',
        date: '2021-8-19'
    },
    {
        id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
        title: 'Second Item',
        date: '2021-8-19'
    },
    {
        id: '58694a0f-3da1-471f-bd96-asdad',
        title: 'Third Item',
        date: '2021-8-19'
    },
    {
        id: '58694a0f-3da1-471f-bd96-145zcx571e29d72',
        title: 'Third Item',
        date: '2021-8-19'
    },
    {
        id: '58694a0f-3da1-471f-bd96-14557asda1e29d72',
        title: 'Third Item',
        date: '2021-8-19'
    },
    {
        id: '58694a0f-3da1-471f-bd96-1455zc71e29d72',
        title: 'Third Item',
        date: '2021-8-19'
    },
    {
        id: '58694a0f-3da1-471f-bd96-14557asd1e29d72',
        title: 'Third Item',
        date: '2021-8-19'
    },
    {
        id: '58694a0f-3da1-471f-bd96-145571e2asd9d72',
        title: 'Third Item',
        date: '2021-8-19'
    },
    {
        id: '58694a0f-3da1-471f-bd96-145sad23571e29d72',
        title: 'Third Item',
        date: '2021-8-19'
    },
    {
        id: '58694a0f-3da1-471f-bd96-14557113e29d72',
        title: 'Third Item',
        date: '2021-8-19'
    },
    {
        id: '58694a0f-3da1-471f-bd96-145571e29234dfgd72',
        title: 'Third Item',
        date: '2021-8-19'
    },
    {
        id: '58694a0f-3da1-471f-bd96-1455asd71e29d72',
        title: 'Third Item',
        date: '2021-8-19'
    },
    {
        id: '58694a0f-3da1-471f-bd96-14235571e29d72',
        title: 'Third Item',
        date: '2021-8-19'
    },
    {
        id: '58694a0f-3da1-471f-bd96-14557asdcv1e29d72',
        title: 'Third Item',
        date: '2021-8-19'
    },
    {
        id: '58694a0f-3da1-471f-bd96-145sad571e29d72',
        title: 'Third Item',
        date: '2021-8-19'
    }
];


export default function ListTodos() {

    const renderItem = ({ item } : { item: Data }) => (
        <Item title={item.title} date={item.date} />
    );

    return (
        <SafeAreaView style={styles.container}>
            <FlatList
                data={DATA}
                renderItem={renderItem}
                keyExtractor={item => item.id}
            />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
        backgroundColor: '#eaeaea'
        // marginTop: StatusBar.currentHeight || 0,
    }
});
