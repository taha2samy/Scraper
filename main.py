from helper_functions import *
eel.init("web")
icon_path = os.getcwd()+"\\web\\" +"logo.png"

eel.start("home.html",cmdline_args=['--start-fullscreen','--browser-startup-dialog',
                                                "--disable-web-security",
                                                "--allow-file-access-from-files",
                                                "--disable-site-isolation-trials"],icon=icon_path)