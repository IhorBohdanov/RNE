describe('Test app', () => {
  beforeEach(async () => {
    await client.recreateSession();
  });

  it('App navigation works', async () => {
    await client.getExistingElementWithText("Home Page");
    const aboutButton = await client.getExistingElementWithTestId("navigation-about");
    await aboutButton.click();
    await client.getExistingElementWithText("About Page");
    const homeButton = await client.getExistingElementWithTestId("navigation-home");
    await homeButton.click();
    await client.getExistingElementWithText("Home Page");
  });

  it('Home page form works', async () => {
    await client.getExistingElementWithText("Home Page");
    await client.getExistingElementWithText("Type some text and submit:");
    const input = await client.getExistingElementWithTestId("text-input");
    const greeting = "Hello from end-to-end";
    await input.setValue(greeting);
    const submitButton = await client.getExistingElementWithTestId('submit-btn');
    await submitButton.click();
    await client.getExistingElementWithText(`You have typed: ${greeting}!`);
    const confirmButton = await client.getExistingElementWithTestId('confirm-btn');
    await confirmButton.click();
    await client.getExistingElementWithText("Home Page");
  });
});
