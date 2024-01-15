# Scraper

## Overview
The "Scraper" tool is a comprehensive web scraping solution that leverages both JavaScript and Python, specifically the "eel" library. The tool is structured around a web server that renders web pages within an iframe, offering users a convenient interface for data extraction. Users can employ a JavaScript editor to interact with and scrape data from the displayed web page. What sets this tool apart is its seamless integration with Python, facilitated by the "eel" library. This integration allows users to call Python functions directly from the JavaScript code editor, enhancing the tool's versatility and enabling interactions with the operating system or any Python module.

## Key Features
- **Web Server:** Displays web pages within an iframe for easy interaction.
- **JavaScript Editor:** Empowers users to write and execute JavaScript code for efficient data scraping.
- **Python Integration with "eel":** Allows direct invocation of Python functions from the JavaScript code editor, ensuring a collaborative environment between Python and JavaScript.
- **Browser Compatibility:** You can use any browser, providing the ability to use browser additions or extensions.

---

## Getting Started

### Prerequisites
- [Git](https://git-scm.com/)
- A Chrome browser installed on your system

### Setup

1. **Clone the repository:**
   ```bash
   git clone https://github.com/taha2samy/scraper.git
2. **Navigate to the project directory, create and activate a virtual environment, and install required libraries:**
   ```bash
   cd scraper
   python3 -m venv venv      # On Unix or MacOS
   source venv/bin/activate

   # On Windows
   python -m venv venv
   venv\Scripts\activate

   pip install -r lib.txt

3. **Locate your Chrome profile folder:**
   - **Windows:**
     - Chrome profile folders are typically located at `C:\Users\<username>\AppData\Local\Google\Chrome\User Data\Profile <Profile Number>`.
   - **Mac:**
     - Chrome profile folders are typically located at `~/Library/Application Support/Google/Chrome/Profile <Profile Number>`.
   - **Linux:**
     - Chrome profile folders are typically located at `~/.config/google-chrome/Profile <Profile Number>`.

4. **Configure Chrome profile path in `main.py`:**
   Open `main.py` and locate the line containing `--user-data-dir=C:/someFolderName`. Replace `C:/someFolderName` with the path to your Chrome profile.

5. **Run the tool:**
   ```bash 
   python main.py
# README File

## Usage
* Accessing the Iframe Document:
To access the document element within an iframe on a web page, use the following JavaScript code:
  ```javascript
    var myIFrame = document.getElementById("myIFrame");
    var doc = myIFrame.contentDocument;
    ```
Now, `doc` is equivalent to document but for the iframe page.
You can use doc to get any element from the iframe using methods such as `getElementById`, `querySelectorAll`,
or any other operation you would perform on a regular web page.


## Tutorial: How to Use a Scraper


[![Watch the Video](https://img.youtube.com/vi/dQvQyIQCe2w/0.jpg)](https://youtu.be/dQvQyIQCe2w)
## Tutorial: How to Use a Scraper
1. **Inspect the Web Page:**
   - Navigate to the website you want to scrape.
   - Right-click on the element you want to extract information from and select "Inspect" to identify its HTML structure.
2. **Add Snippets:**
   - In Developer Tools, go to the "Sources" tab.
   - Look for the "Snippets" section in the left sidebar.
   -  - Create new snippets or manage or run existing ones.
## Some code you need If your toothbrush is not enough in JavaScript
 **in JavaScript, the issue is that it's an asynchronous language.
 You need to perform certain synchronous operations,
 and one of the most common tasks is waiting for the page to load.**
 
### synchronous URL Loading Function
Include this asynchronous function in your JavaScript code to load a specified URL in an iframe and pause execution until the page is fully loaded.

```javascript
/**
 * Asynchronous function to load a URL in an iframe and wait for it to fully load.
 * @param {string} url - The URL to be loaded in the iframe.
 */
async function loadUrl(url) {
    // Load the specified URL in the iframe
   const myIFrame = document.getElementById('myIFrame'); 
    myIFrame.src = url;

    // Wait for the iframe to fully load
    await new Promise(resolve => {
        myIFrame.addEventListener('load', resolve);
    });
}

// Example Usage:
// Replace 'myIFrame' with the actual ID of your iframe
const urlToLoad = 'https://example.com'; // Replace 'https://example.com' with the desired URL

// Call the function with the specified URL
async function Main(){
await loadUrl(urlToLoad);
}
Main();
```
#### Remember you must use await
### for wait some time
```javascript
async function wait_time(seconds) {

    return new Promise(resolve => {

        setTimeout(resolve, seconds * 1000);

    });

}

```
### If you want to go back
```javascript
function back() {
    return new Promise((resolve, reject) => {
            const myIFrame = document.getElementById('myIFrame'); 
          if (myIFrame.contentWindow && myIFrame.contentWindow.history && myIFrame.contentWindow.history.length > 1) {
            // Go back in the iframe's history
            myIFrame.contentWindow.history.back();
            // Resolve the promise once the history operation is complete
            myIFrame.addEventListener('load', resolve);
        } else {
            // Reject the promise if iframe history is not available
            console.warn('Iframe history not available or unable to go back.');
            reject(new Error('Iframe history not available or unable to go back.'));
        }
    });
}

```
###
### If you want to see message to check your progress (some time you can not check from console)
```javascript
showMessage("type any message you want")
```
### Remember you can use any python function in javascript put decorator before function
```python
@eel.expose 
def call_from_webPage():
   print("Hi from java script--------------------")
# now you can call this function from javascript console
```
**Import code or put it in file  `helper_functions.py` **

### You can do the opposite
```javascript
eel.expose(call_func_from_python)
function call_func_from_python()
{
console.log("Hi from python");

}
```
