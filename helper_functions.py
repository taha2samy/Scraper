import eel
import os
import tkinter as tk
from tkinter import filedialog
import ctypes
presmisson = True
@eel.expose
def save_text_to_file(text_to_save):
    root = tk.Tk()
    root.geometry("")
    print(os.getcwd())
    path=os.getcwd()+r"\web\save.ico"
    ctypes.windll.shell32.SetCurrentProcessExplicitAppUserModelID(path)
    a=False
    root.iconbitmap(False,default=path)
    root.withdraw()  # Hide the main window

    top = tk.Toplevel(root)

    root.iconbitmap(path)

    # Set up the save dialog
    file_path = filedialog.asksaveasfilename(parent=top, defaultextension=".js", filetypes=[("JavaScript", "*.js"), ("All files", "*.*")])

    if file_path:
        try:
            # Open the file for writing and write the provided text
            with open(file_path, 'w', encoding='utf-8') as file:
                file.write(text_to_save)
            print(f"File '{file_path}' saved successfully.")
        except Exception as e:
            print(f"An error occurred while saving the file: {e}")
    else:
        print("File save cancelled.")
    a=True
    top.destroy()
if __name__ == "__main__":
    text_to_save = "This is the text to be saved."
    save_text_to_file(text_to_save)
