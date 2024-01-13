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
   git clone https://github.com/your-username/scraper.git
   2. **Navigate to the project directory, create and activate a virtual environment, and install required libraries:**
   ```bash
   cd scraper
   python3 -m venv venv      # On Unix or MacOS
   source venv/bin/activate

   # On Windows
   python -m venv venv
   venv\Scripts\activate

   pip install -r requirements.txt
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




