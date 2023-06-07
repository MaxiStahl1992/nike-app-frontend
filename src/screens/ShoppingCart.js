import React from 'react'
import { Text, FlatList, View, StyleSheet, Pressable } from 'react-native'
import cart from '../data/cart'
import CartListItem from '../components/components/CartListItem'
import { useSelector } from 'react-redux'
import { selectDeliveryPrice, selectSubtotal, selectTotal } from '../store/cartSlice'

const ShoppingCart = () => {
    const cartItems = useSelector(state => state.cart.items);

    const ShoppingCartTotals = () => {
        const subtotal = useSelector(selectSubtotal);
        const deliveryFee = useSelector(selectDeliveryPrice);
        const total = useSelector(selectTotal)
        return (
            <View style={styles.totalsContainer}>
                <View style={styles.row}>
                    <Text style={styles.text}>Subtotal</Text>
                    <Text style={styles.text}>{subtotal} USD</Text>
                </View>
                <View style={styles.row}>
                    <Text style={styles.text}>Delivery</Text>
                    <Text style={styles.text}>{deliveryFee} USD</Text>
                </View>
                <View style={styles.row}>
                    <Text style={styles.textBold}>TOTAL</Text>
                    <Text style={styles.textBold}>{total} USD</Text>
                </View>
            </View>  
        )
    }
    
    return (
        <>
            <FlatList 
                data={cartItems}
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
