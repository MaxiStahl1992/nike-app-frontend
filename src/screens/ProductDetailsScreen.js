import { 
    StyleSheet, 
    View, 
    Image, 
    FlatList, 
    useWindowDimensions, 
    Text, 
    ScrollView,
    Pressable} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { cartSlice } from '../store/cartSlice';

const ProductDetailsScreen = () => {
    const dispatch = useDispatch();
    const product = useSelector(state => state.products.selectedProduct);
    const addToCart = () => {
        dispatch(cartSlice.actions.addCartItem({ product: product }))
    }
    const { width } = useWindowDimensions();

    return (
        <View>
            <ScrollView>
                {/* Image Carousel */}
                <FlatList
                    data={product.images}
                    renderItem={({ item }) => (
                        <Image
                            source={{ uri: item }}
                            style={{ width: width, aspectRatio: 1 }}
                        />
                    )}
                    horizontal
                    showsHorizontalScrollIndicator={true}
                    pagingEnabled
                />

                <View style={{ padding: 20 }}>
                    {/* Title */}
                    <Text style={styles.title}>{product.name}</Text>

                    {/* Price */}
                    <Text style={styles.price}>$ {product.price}</Text>

                    {/* Description */}
                    <Text style={styles.description}>{product.description}</Text>
                </View>
            </ScrollView>

            {/* Add to cart button */}
            <Pressable onPress={addToCart} style={styles.button}>
                <Text style={styles.buttonText}>Add to cart</Text>
            </Pressable>       
        </View>
    )
};

const styles = StyleSheet.create({
    title: {
        fontSize: 34,
        fontWeight: "500",
        marginVertical: 10,
    },
    price: {
        fontWeight: "500",
        fontSize: 16,
    },
    description: {
        marginVertical: 10,
        fontSize: 18,
        lineHeight: 30,
        fontWeight: "300",
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
    icon: {
        position: "absolute",
        top: 50,
        right: 20,
        backgroundColor: "#000000AA",
        borderRadius: 50,
        padding: 5,
      },
});

export default ProductDetailsScreen
