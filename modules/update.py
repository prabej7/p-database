from sys import argv
import pandas as pd
from createPath import create_path
from checkFile import check_file

model_name = argv[1]
field = argv[2]
value = argv[3]
field_to_change = argv[4]
new_value = argv[5]

file_path = create_path(model_name)

if check_file(file_path):
    data = pd.read_excel(file_path)
    data.loc[data[field]==value,field_to_change] = new_value
    data.to_excel(file_path,index=False)
    print(data.query(f"{field}=='{new_value}'").to_json(orient='records'))
else:
    print("not found")