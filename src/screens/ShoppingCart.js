import React from 'react'
import { Text, FlatList, View, StyleSheet, Pressable } from 'react-native'
import cart from '../data/cart'
import CartListItem from '../components/components/CartListItem'

const ShoppingCart = () => {
    const ShoppingCartTotals = () => (
        <View style={styles.totalsContainer}>
            <View style={styles.row}>
                <Text style={styles.text}>Subtotal</Text>
                <Text style={styles.text}>410,00 USD</Text>
            </View>
            <View style={styles.row}>
                <Text style={styles.text}>Delivery</Text>
                <Text style={styles.text}>2,00 USD</Text>
            </View>
            <View style={styles.row}>
                <Text style={styles.textBold}>TOTAL</Text>
                <Text style={styles.textBold}>412,00 USD</Text>
            </View>
        </View>  
    )
    
    return (
        <>
            <FlatList 
                data={cart}
                renderItem={({ item }) => (
                    <CartListItem cartItem={item} />
                )}
                ListFooterComponent={() => (
                    <ShoppingCartTotals />
                )}
            />
            
            <Pressable style={styles.button}>
                <Text style={styles.buttonText}>Checkout</Text>
            </Pressable>
        </>
    )
}

const styles = StyleSheet.create({
    totalsContainer: {
        margin: 20,
        paddingTop: 10,
        borderColor: 'gainsboro',
        borderTopWidth: 1,
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginVertical: 2,
    },
    text: {
        fontSize: 16,
        color: 'gray'
    },
    textBold: {
        fontWeight: '500',
        fontSize: 16,
    },
    button: {
        position: 'absolute',
        backgroundColor: 'black',
        bottom: 30,
        width: '90%',
        alignSelf: 'center',
        padding: 20,
        borderRadius: 100,
        alignItems: 'center',
    },
    buttonText: {
        color: 'white',
        fontWeight: '500',
        fontSize: 16,
    },
})

export default ShoppingCart
