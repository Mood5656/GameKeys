export const useCart = () => {
    const cart = useState('cart', () => [])

    const addToCart = (product) => {
        const existingItem = cart.value.find(item => item.id === product.id)

        if (existingItem) {
            existingItem.quantity += 1
        } else {
            cart.value.push({
                ...product,
                quantity: 1
            })
        }
    }

    const removeFromCart = (id) => {
        cart.value = cart.value.filter(item => item.id !== id)
    }

    const updateQuantity = (id, quantity) => {
        const item = cart.value.find(item => item.id === id)
        if (item) {
            item.quantity = quantity
        }
    }

    const totalItems = computed(() => {
        return cart.value.reduce((sum, item) => sum + item.quantity, 0)
    })

    const totalPrice = computed(() => {
        return cart.value.reduce((sum, item) => sum + (item.price * item.quantity), 0)
    })

    const clearCart = () => {
        cart.value = []
    }

    return {
        cart,
        addToCart,
        removeFromCart,
        updateQuantity,
        totalItems,
        totalPrice,
        clearCart
    }
}