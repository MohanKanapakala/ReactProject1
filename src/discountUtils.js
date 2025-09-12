export function calculateTotal(cartItems) {
    return cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
}

export function calculateButtonDiscount(totalAmount, buttonDiscount)
{
    return totalAmount * buttonDiscount / 100;
}
 
export function getDiscountCoupon(coupon,totalAmount)
{
    let discountPercent = 0;
    switch (coupon)
    {
        case "MOHAN10":
            discountPercent = 5;
            break;
        case "MOHAN20":
            discountPercent = 10;
            break;
        case "MOHAN30":
            discountPercent = 15;
            break;
        default:
            discountPercent = 0;
    }
    let discountAmount = (totalAmount * discountPercent) / 100;
    
    
    return {
        isValid : discountPercent > 0,
        discountPercent,
        discountAmount
    }
}