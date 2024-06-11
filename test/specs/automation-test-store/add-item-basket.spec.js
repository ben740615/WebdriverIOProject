import HomePage from "../../pageObjects/automation-test-store/home.page"
import SkincarePage from "../../pageObjects/automation-test-store/skincare.page";

describe("add items to basket", () => {
  beforeEach(async () => {
    await browser.maximizeWindow();
    await HomePage.open();
  });
  it("add specific skincare product to basket and validate cart total", async () => {
    // click skincare using partial linktext
    
    await HomePage.categoryMenuComponents.categoryMenuLinks("Skincare").click();

    // total moisture facial cream
    // creme precieuse nuit 50ml

    SkincarePage.addSpecificItems_ValidateTotal("total moisture facial cream", "creme precieuse nuit 50ml")
  });
});
