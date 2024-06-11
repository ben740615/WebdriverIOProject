class Navbar {
    selectOptionFromNavbar (option) {
        return $(`//span[text()='${option}']`);
    }

}

export default new Navbar();