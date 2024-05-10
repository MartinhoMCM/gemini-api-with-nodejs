**Installing the Google Generative AI SDK for Node.js**

To install the Google Generative AI SDK for Node.js in your project, follow these steps:

1. Open your terminal: Launch a terminal window on your computer.

2. Navigate to your project directory: Use the cd command to navigate to the directory where your Node.js project is located.

3. Install the Google Generative AI SDK: Execute the following command to install the SDK using npm:

   npm install @google-cloud/generative-ai
4. Verify the installation: Once the installation is complete, you can verify it by checking the installed packages in your project directory. Run the following command:
   npm ls @google-cloud/generative-ai
   
**Using the Google Generative AI SDK**
After installing the SDK, you can import it into your Node.js files and use its functionality to generate text, images, or audio. Refer to the SDK documentation for detailed usage instructions and examples: https://cloud.google.com/nodejs

Additional Notes:

Ensure you have Node.js installed on your system before proceeding with the installation of the SDK.
If you encounter any issues during installation, check the npm error logs or refer to the SDK documentation for troubleshooting steps.

const { GenerativeServiceClient } = require('@google-cloud/generative-ai');

const client = new GenerativeServiceClient();

const prompt = "Write a haiku about nature.";

const response = await client.generateText({
  prompt: prompt,
});

const generatedText = response.texts[0].text;
console.log(generatedText);
