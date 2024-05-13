from sys import argv
import json
import pandas as pd
from createPath import create_path
from checkFile import check_file

model_name = argv[1]
entry = json.loads(argv[2])
file_path = create_path(model_name)

if check_file(file_path):
    existing_data = pd.read_excel(file_path)
    concatenated_data = pd.concat([existing_data,pd.DataFrame(entry,index=[0])])
    concatenated_data.to_excel(file_path,index=False)
    new_data = pd.read_excel(file_path,index_col=False).to_json(orient='records')
    print(new_data)
else:
    print(f"{model_name} doesn't found!")
