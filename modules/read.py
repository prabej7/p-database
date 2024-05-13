from sys import argv
from createPath import create_path
from checkFile import check_file
import pandas as pd

model_name = argv[1]
field_path = create_path(model_name)

if check_file(field_path):
    data = pd.read_excel(field_path).to_json(orient='records')
    print(data)
else:
    print(f"{model_name} doesn't exists")
