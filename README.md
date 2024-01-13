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
Follow these steps to get started with the Scraper tool:

1. Clone the repository: `git clone https://github.com/your-username/scraper.git`
2. Navigate to the project directory: `cd scraper`
3. Activate the existing virtual environment (if not already activated):
   - On Unix or MacOS: `source venv/bin/activate`
   - On Windows: `venv\Scripts\activate`
4. Locate your Chrome profile folder:
   - **Windows:**
     - Chrome profile folders are typically located at `C:\Users\<username>\AppData\Local\Google\Chrome\User Data\Profile <Profile Number>`. Replace `<username>` with your Windows username and `<Profile Number>` with the specific profile you are using.
   - **Mac:**
     - Chrome profile folders are typically located at `~/Library/Application Support/Google/Chrome/Profile <Profile Number>`. Replace `<Profile Number>` with the specific profile number you are using.
   - **Linux:**
     - Chrome profile folders are typically located at `~/.config/google-chrome/Profile <Profile Number>`. Replace `<Profile Number>` with the specific profile number you are using.
5. Go to `main.py` and change `--user-data-dir=C:/someFolderName`. Create a new Chrome profile and replace `C:/someFolderName` with the path to your Chrome profile.
6. Run the tool: `python main.py`
