import { Ionicons } from '@expo/vector-icons';
import React, {useState} from 'react';
import { StyleSheet, SafeAreaView, FlatList, StatusBar, Pressable, ScrollView } from 'react-native';

import Colors from '../../constants/Colors';
import { Text, View } from '../Themed';

function Icons(props: { name: React.ComponentProps<typeof Ionicons>['name']; color: string }) {
    return <Ionicons size={20} style={styles.button} {...props} />;
}

const Buttons = () => {
    const [showMore, setShowMore] = useState(false);

    const handlePress = () => {
        setShowMore(!showMore);
    }

    return (
        <View style={styles.buttons}>
            {
                showMore && 
                (
                    <><Icons name="trash" color="#232323" />
                    <Icons name="checkmark" color="#232323" /></>
                )
            }
            <Pressable onPress={handlePress}>
                <Icons name={!showMore ? "ellipsis-vertical-sharp" : "close" } color="#232323" />
            </Pressable>
        </View>
    )
}


export const Item = ({ title, date }: { title: string, date: string }) => {
    const [showDetails, setShowDetails] = useState(false);
    const handlePress = () => {
        setShowDetails(!showDetails);
    }

    return (
        <Pressable  onPress={handlePress}>
            <View style={[styles.container, showDetails && styles.showDetails]}>
                <View style={styles.todo}>
                    <Text numberOfLines={showDetails ? 0 : 1} style={styles.title}>{title}</Text>
                    <Text style={styles.date}>{date}</Text> 
                </View>
                <Buttons />
            </View>
        </Pressable>   
    )
};

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        justifyContent: 'space-between',
        width: '92.5%',
        height: 50,
        marginLeft: '3.75%',
        marginRight: '3.75%',
        marginTop: 8,
        padding: 5,
        borderColor: '#ccc',
        borderRadius: 10,
        elevation: 1
    },
    todo: {
        flex: 1,
        justifyContent: 'space-between',
        alignItems: 'flex-start',
    },
    showDetails: {
        height: 120
    },
    title: {
        fontSize: 16
    },
    date: {
        fontSize: 12
    },
    buttons: {
        flexDirection: 'row',
    },
    button: {
        padding: 5, 
        margin: 5,
        width: 30,
        height: 30,
        borderRadius: 1000, 
        backgroundColor: 'rgba(219,219,219, .5)' 
    }
});