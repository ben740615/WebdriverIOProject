import contactUsPage from "../../pageObjects/webdriver-university/contact-us.page";
import ContactUsPage from "../../pageObjects/webdriver-university/contact-us.page"

describe("Contact Us Page", function () {
  // Maximising the window
  beforeEach(async () => {
    await browser.maximizeWindow();
    // Accessing the website -> https://webdriveruniversity.com/Contact-Us/contactus.html
    await ContactUsPage.open()
    console.log(`>>>> Browser Object + ${JSON.stringify(browser)}`);
  });

  // Positive Test
  it("Valid Submission - Submit all information", async () => {

    ContactUsPage.submitForm("Benyamin", "Jameei", "ben@gmail.com", "HELLO WORLD");

    await expect(ContactUsPage.successMsg).toHaveText("Thank You for your Message!");
    await browser.pause(3000);
  });

  // Negative test scenario
  it("Invalid Submission - Partial Submission", async () => {

    ContactUsPage.submitForm("Ben", "Jameei", "","Invalid submission")
    await browser.pause(2000);
    await expect(ContactUsPage.unsuccessMsg).toHaveText(
      expect.stringContaining("Error: all fields are required"),
      expect.stringContaining("Error: Invalid email address")
    );
  });
  it('Only Type the first name', async () => {
    ContactUsPage.submitForm("John","", "","");
    await browser.pause(2000)
    await expect(ContactUsPage.unsuccessMsg).toHaveText(expect.stringContaining("Error: all fields are required"))
  });
  it("Submit Random Data", async () => {
    contactUsPage.submitRandomData();
    await expect(ContactUsPage.successMsg).toHaveText("Thank You for your Message!");
  })
});
