from sys import argv
import pandas as pd
from createPath import create_path
from checkFile import check_file

model_name = argv[1]
field = argv[2]
value = argv[3]

file_path = create_path(model_name)

if check_file(file_path):
    data = pd.read_excel(file_path)
    mask = data[field]==value
    data = data[~mask]
    data.to_excel(file_path,index=False)
    print(data.to_json(orient='records'))
else:
    print(f"{model_name} doesn't exixts!")