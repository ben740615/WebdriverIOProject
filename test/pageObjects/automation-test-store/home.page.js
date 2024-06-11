import BasePage from "./BasePage";
import CategoryMenuComp  from "./components/category-menu.comp";
class HomePage extends BasePage{
    open() {
        return super.open("/");
    }
    get categoryMenuComponents() {
        return CategoryMenuComp;
    }
}

export default new HomePage();