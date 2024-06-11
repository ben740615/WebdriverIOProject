import BasePage from "./BasePage";
import ItemComponent from "./components/item.comp";
import Navbar from "./components/navbar.comp";
import CheckoutPage from "../automation-test-store/checkout.page";

class SkinCarePage extends BasePage {
  get itemComponents() {
    return ItemComponent;
  }

  async addSpecificItems_ValidateTotal(item1, item2) {
    // locating our target product
    const productList = await ItemComponent.itemHeaderList;

    const productPrices = [];
    for (const product of productList) {
      const tempHeader = await product.getText();
      if (
        tempHeader.toLowerCase() === item1.toLowerCase() ||
        tempHeader.toLowerCase() === item2.toLowerCase()) {
        const productID = (await product.getAttribute("href")).slice(-2);

        await $(`a[data-id="${productID}"]`).click();
        // extracting prices
        productPrices.push(
          await $(
            `//a[@data-id="${productID}"]/following-sibling::div/div[@class="pricenew"]` +
              `| //a[@data-id="${productID}"]/following-sibling::div/div[@class="oneprice"]`
          ).getText()
        );
      }
    }
    let totalPrice = productPrices.map((price) => {
        return parseFloat(price.slice(1));
    }).reduce((total, price) => {
        return total += price;
    }, 0)

    // clicking on the cart button
    await Navbar.selectOptionFromNavbar('Cart').click();
    await expect(browser).toHaveUrl(expect.stringContaining("checkout"));

    // adding the shipping rate to our total price 
    // and validate the total price on the checkout page 
    const tempshippingRate = await CheckoutPage.shippingRate.getText();
    const shippingRate = tempshippingRate.replace("$", "");
    totalPrice = totalPrice + parseFloat(shippingRate);
    let cartTotal = await CheckoutPage.cartTotal.getText();
    cartTotal = parseFloat(cartTotal.replace("$",""));

    expect(totalPrice).toEqual(cartTotal);

  }
}

export default new SkinCarePage();
