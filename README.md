# n8n Language Translator Node

A custom n8n node to easily translate text between various languages using the [Deep Translate API via RapidAPI](https://rapidapi.com/deep-translate-corp/api/deep-translate1/).

## ✨ Key Features

* **Simple Text Translation:** Translate any text from one language to another.
* **Language Detection:** (If supported by the API) Handle automatic source language detection.
* **Direct API Integration:** Seamlessly connects to the Deep Translate API via RapidAPI.

## 🚀 Installation

To use this node, you need to add it to your n8n instance.

1.  **Navigate to your n8n custom nodes directory:**
    Typically:
    * For npm installations: `~/.n8n/custom`
    * For Docker installations, you'll likely need to volume mount your custom nodes: `/files/custom_nodes` (inside the container) or a folder you've mapped for custom nodes.

2.  **Clone this repository:**
    ```bash
    git clone [https://github.com/YOUR_GITHUB_USERNAME/n8n-nodes-language-translator.git](https://github.com/saadsafi123/n8n-nodes-language-translator.git) n8n-nodes-language-translator
    cd n8n-nodes-language-translator
    ```


3.  **Install dependencies:**
    ```bash
    npm install
    ```

4.  **Build the node:**
    ```bash
    npm run build
    ```

5.  **Link the node to n8n:**
    ```bash
    # In your node's project directory:
    npm link

    # Now, go to n8n's custom modules directory (e.g., ~/.n8n/custom/):
    cd YOUR_N8N_CUSTOM_NODES_DIRECTORY
    npm link n8n-nodes-language-translator
    ```
    *(Replace `YOUR_N8N_CUSTOM_NODES_DIRECTORY` with the actual path from step 1)*

6.  **Restart n8n:**
    Restart your n8n instance for the new node to appear.

## 🔑 Credentials Setup

This node requires a RapidAPI Key for the Deep Translate service.

* **In n8n:** Go to `Credentials` -> `New Credential`.
* **Search for:** `Deep Translate RapidAPI` (or similar name like `languageTranslatorApi` if you already created it, check your `credentials/languageTranslatorApi.credentials.ts` for the exact `displayName`).
* **Provide:** Your `X-RapidAPI-Key` obtained from the [Deep Translate API page on RapidAPI](https://rapidapi.com/deep-translate-corp/api/deep-translate1/).

## 🚀 Usage Example

The "Language Translator" node focuses on simple text translation.

#### **Translate Text**

This example shows how to translate text from English to Spanish.

* **Node:** Language Translator
* **Resource:** `Text Translation`
* **Operation:** `Translate`
* **Parameters:**
    * `Text to Translate`: `Hello, how are you today?`
    * `Source Language`: `en`
    * `Target Language`: `es`

* **Expected Output:**
    ```json
    {
      "translatedText": "Hola, ¿cómo estás hoy?",
      "sourceText": "Hello, how are you today?",
      "sourceLanguage": "en",
      "targetLanguage": "es"
    }
    ```
    *(Note: The `translatedText` and `sourceText` will depend on the actual Deep Translate API response.)*

## ⚙️ Node Parameters

Here's a summary of the parameters available in the node.

| Parameter           | Display Name      | Type      | Description                                                    | Resource           | Operations |
| :------------------ | :---------------- | :-------- | :------------------------------------------------------------- | :----------------- | :--------- |
| `resource`          | Resource          | `options` | Select `Text Translation` to translate text.                   | `All`              | `All`      |
| `operation`         | Operation         | `options` | Select `Translate` to perform the translation.                 | `Text Translation` | `Translate` |
| `textToTranslate`   | Text to Translate | `string`  | The text you want to translate.                                | `Text Translation` | `Translate` |
| `sourceLanguage`    | Source Language   | `string`  | The language code of the input text (e.g., `en`, `es`, `auto`).| `Text Translation` | `Translate` |
| `targetLanguage`    | Target Language   | `string`  | The language code to translate the text into (e.g., `es`, `fr`).| `Text Translation` | `Translate` |

## 🐛 Troubleshooting

* **Node not appearing:**
    * Ensure you have followed all `npm install`, `npm run build`, and `npm link` steps precisely.
    * Verify your `package.json` `n8n` object correctly points to `dist/nodes/LanguageTranslator/LanguageTranslator.node.js` and your credentials file (e.g., `dist/credentials/LanguageTranslatorApi.credentials.js`).
    * Check your n8n console logs for any errors during startup.
* **Credential errors:**
    * Verify your `X-RapidAPI-Key` is correct and active for the Deep Translate API.
* **Translation failures:**
    * Check your internet connection.
    * Review the [Deep Translate API documentation](https://rapidapi.com/deep-translate-corp/api/deep-translate1/) for supported languages and any specific requirements.
    * Review the API's rate limits and usage quotas on RapidAPI.

---

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---
*Generated for **n8n Language Translator Node** on June 18, 2025.*
