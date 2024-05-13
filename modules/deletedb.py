from sys import argv
import os
from checkFile import check_file
from createPath import create_path

mode_name = argv[1]
file_path = create_path(model=mode_name)

if check_file(file_path):
    os.remove(file_path)
    print('Deleted successfully!')
else:
    print(f"{mode_name} doesn't exists!")