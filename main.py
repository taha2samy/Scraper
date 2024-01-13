from helper_functions import *
eel.init("web")

icon_path = os.getcwd()+"\\web\\img\\" +"logo.png"


# Specify additional command-line options
chrome_cmdline_args = [
    '--disable-web-security',
    '--allow-file-access-from-files',
    '--disable-site-isolation-trials',
    '--user-data-dir=C:/someFolderName'
    # Add more command-line options as needed
]

# Specify the path to the user data directory (profile)


# Start the Eel application with specified command-line arguments and user data directory
eel.start("home.html", mode="chrome", port=9000, cmdline_args=chrome_cmdline_args)
