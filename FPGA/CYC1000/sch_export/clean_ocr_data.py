import os, re

in_dir = '.'
out_dir = 'ocr_out'
in_file_name = 'parseur_full.text.content.SCH-TEI0003-02.csv'

replace_dict = {'I O':'IO', 'P I U': '', 'I U': ''}
strip_space_list = {'L E D ','B A N K ', 'B a n k '}
relevant_data = ['IO']
relevant_data_filter = ['DIFFIO', 'CLK']

def strip_space_regex(pattern, line):
    pattern = re.compile(pattern)
    match = None
    while (match := pattern.search(line)):
        match_str = match.group(1)
        print(match.group(1))
        new_str = match_str.replace(' ','')
        line = line.replace(match_str, new_str)
    return line

# def strip_space_regex(pattern, line):
#     match = regex.match(pattern, line)
#     if match:
#         print('V')
#         for match_str in match.captures:
#             new_str = match_str.replace(' ','')
#             line = line.replace(match_str, new_str)
#     return line

out = []
os.makedirs(out_dir,exist_ok=True)
with open(f'./{in_dir}/{in_file_name}', 'r') as f:
    lines = f.readlines()
    for line in lines:
        for key, val in replace_dict.items(): line = line.replace(key, val)
        for x in strip_space_list: line = line.replace(x,x.replace(' ',''))
        if any(x in line for x in relevant_data):
            line = strip_space_regex(r'([a-zA-Z] \d \d)', line)
            line = strip_space_regex(r'([a-zA-Z] \d)', line)
            out.append(line.strip(' '))

with open(f'./{out_dir}/filtered1.txt', 'w') as f:
    f.writelines(out)

filtered = [line for line in out if any(y for y in relevant_data_filter if y in line)]
# filtered_io = []
with open('cyc1000_io_pins.txt') as f:
    io_pins = f.readlines()
    filtered = [line for line in filtered if any(x for x in io_pins if x.strip() in line.replace(' ', ''))]
    
with open(f'./{out_dir}/filtered2.txt', 'w') as f:
    f.writelines(filtered)

pin_funcs = []
with open(f'./{out_dir}/pin_funcs.txt', 'w') as f:
    pin_funcs = list(map(lambda s:'\n'.join([z for z in s.split() if any(rel for rel in relevant_data_filter if rel in z)])+'\n', filtered))
    f.writelines(pin_funcs)

with open(f'./{out_dir}/filtered4.txt', 'w') as f:
    out = []
    for line in filtered:
        data = line.split(' ')
        for i, el in enumerate(data):
            if any(x for x in relevant_data_filter if x in el):
                txt = "" if i==0 else f"{data[i-1]},"
                txt +=f"{data[i]}"
                txt += "" if (i==len(data)-1) else f",{data[i+1]}"
                txt = txt.replace('\n','')+'\n'
                if txt not in out: out.append(txt)
        
    f.writelines(out)
