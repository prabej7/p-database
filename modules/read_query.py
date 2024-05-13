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
    queried_data = data.query(f"{field} == '{value}'")
    json_data = queried_data.to_json(orient='records')
    print(json_data)
else:
    print(f"{model_name} doesn't exists.")