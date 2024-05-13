from sys import argv
import json
from createPath import create_path
from checkFile import check_file
import pandas as pd

model_name = argv[1]
fields = json.loads(argv[2])
data = {key:[''] for key in fields}
file_path = create_path(model=model_name)


if not check_file(file_path):
    df = pd.DataFrame(data)
    df.to_excel(file_path,index=False)
else:
    print(f"{model_name} model already exists!")

