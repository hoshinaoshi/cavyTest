export default function(spec) {

  spec.describe('Logging in', function() {

    spec.it('works', async function() {
      //await spec.containsText("App.Text", "Open up App.js to start working on your app!");
      await spec.exists("Scene.TextInput");
    });
  });
}
