class CategoryMenueComponent {
    categoryMenuLinks(linkText) {
        return $(`(//a[contains(text(), "${linkText}")])[2]`);
    }
}

export default new CategoryMenueComponent();