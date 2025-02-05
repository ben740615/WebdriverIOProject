import BasePage from "./BasePage";

class CheckoutPage extends BasePage {
    get shippingRate() {
        return $("//span[text()='Flat Shipping Rate:']/../following-sibling::td");
    }
    get cartTotal () {
        return $("//span[text()='Total:']/../following-sibling::td");
    }

}

export default new CheckoutPage();