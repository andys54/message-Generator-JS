import os
import shutil

# Path to your downloads directory
downloads_path = '/Users/andy/Downloads/'

# Create a folder named LinAlg if it doesn't exist
# lin_alg_folder = os.path.join(downloads_path, 'LinAlg')
# if not os.path.exists(lin_alg_folder):
#     os.makedirs(lin_alg_folder)

# List all files in the downloads directory
files = os.listdir(downloads_path)

rechnerarchitecture = "/Users/andy/Documents/Uni/Rechnerarchitektur/"

linAlgTasks = "/Users/andy/Documents/Uni/Lineare Algebra/Aufgaben/"
linAlgGeneral = "/Users/andy/Documents/Uni/Lineare Algebra/"

theoretical = "/Users/andy/Documents/Uni/Einführung in die Theoretische Informatik"

eidpFolien = "/Users/andy/Documents/Uni/EidP/folien/"
eidpGeneral = "/Users/andy/Documents/Uni/EidP/"

funkpGeneral = "/Users/andy/Documents/Uni/Funktionale Programmierung/"

uni = "/Users/andy/Documents/Uni/Altklausuren/"

# Move files that start with 'A' followed by a number to linAlgTasks folder
for file_name in files:
    if os.path.isfile(os.path.join(downloads_path, file_name)):
        if file_name.startswith('A') and file_name[1].isdigit():
            shutil.move(
                os.path.join(downloads_path, file_name),
                os.path.join(linAlgTasks, file_name)
            )
        if file_name.lower().startswith("zettel"):
            shutil.move(
                os.path.join(downloads_path, file_name),
                os.path.join(rechnerarchitecture, file_name)
            )
        # if file_name.lower().startswith("blatt") or file_name.lower().startswith("eti"):
        #     shutil.move(
        #         os.path.join(downloads_path, file_name),
        #         os.path.join(theoretical, file_name)
        #     )
        # if file_name[0].isdigit():
        #     shutil.move(
        #         os.path.join(downloads_path, file_name),
        #         os.path.join(theoretical + "Folien/", file_name)
        #     )
        if file_name.lower().startswith("eidp"):
            shutil.move(
                os.path.join(downloads_path, file_name),
                os.path.join(eidpFolien, file_name)
            )
        if file_name.lower().startswith("vor") and file_name[3].isdigit():
            shutil.move(
                os.path.join(downloads_path, file_name),
                os.path.join(rechnerarchitecture + "folien/", file_name)
            )
        if file_name.lower().startswith("ws") and file_name.endswith(".pdf"):
            shutil.move(
                os.path.join(downloads_path, file_name),
                os.path.join(uni, file_name)
            )
        if "linalg" in file_name.lower():
            shutil.move(
                os.path.join(downloads_path, file_name),
                os.path.join(linAlgGeneral, file_name)
            )
        # if "eti" in file_name.lower():
        #     shutil.move(
        #         os.path.join(downloads_path, file_name),
        #         os.path.join(theoretical, file_name)
        #     )
        if "eidp" in file_name.lower():
            shutil.move(
                os.path.join(downloads_path, file_name),
                os.path.join(eidpGeneral, file_name)
            )
        if "funkp" in file_name.lower():
            shutil.move(
                os.path.join(downloads_path, file_name),
                os.path.join(funkpGeneral, file_name)
            )
        if "rechner" in file_name.lower():
            shutil.move(
                os.path.join(downloads_path, file_name),
                os.path.join(rechnerarchitecture, file_name)
            )
        if file_name.lower().startswith("loesung"):
            shutil.move(
                os.path.join(downloads_path, file_name),
                os.path.join(theoretical, file_name)
            )
        # if file_name.endswith(".dmg"):
        #     os.remove(downloads_path + file_name)