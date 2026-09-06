import easyocr
import os

out_dir = 'ocr_out'

reader = easyocr.Reader(['pt','en']) # this needs to run only once to load the model into memory

files  = [x for x in os.listdir() if os.path.isfile(x)]
images = [f for f in files if str(f).split(os.path.extsep)[-1] in ['png','jpg','jpeg','bmp']]
os.makedirs(out_dir, exist_ok=True)
merged_content = []
for image in images:
    with open(os.path.join(out_dir, f"{image.split(os.path.extsep)[0]}.txt"), 'w') as f:
        result = [f"{x}\n" for x in reader.readtext(image, detail=0)]
        f.writelines(result)
        merged_content+=result
        print(result)

with open(os.path.join(out_dir,'merged.txt'), 'w') as f: f.writelines(merged_content)