# string to search in file
from pathlib import Path

# replace with your preferred directory path
dir_path = Path("C:\\react\\docs\\Section3_ React Basics & Working With Components")
print(dir_path)
exit
file_name = "mydocument.txt"

def replace_all(text, dic):
    for i, j in dic.items():
        text = text.replace(i, j)
    return text

chng= { "[": "", "{": "", r"\n" :" ", '"':'',"/":"_","(":"_",")":"_","?":"_","&amp;":"and",":":"_"}
def str():
    with open(r'file.txt', 'r') as fp:
        # read all lines using readline()
        lines = fp.readlines()
        for row in lines:
            # check if string present on a current line
            word = '<span data-purpose="item-title">'
            #print(row.find(word))
            # find() method returns -1 if the value is not found,
            # if found it returns index of the first occurrence of the substring
            if row.find(word) != -1:
                rower = row.replace('<span data-purpose="item-title">',"").replace('</span>',"")
                data = replace_all(rower, chng)
                file_path = dir_path.joinpath(data.strip()+".txt")

                # check that directory exists
                if dir_path.is_dir():
                    with open(file_path, "w") as f:
                        f.write("This text is written with Python.")
                        print('File was created.')
                else:
                    print("Directory doesn\'t exist.")
str()