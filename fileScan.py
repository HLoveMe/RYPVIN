# #coding=utf-8
# import os;
# import re;

# BASE_DIR = os.path.join(os.path.dirname(os.path.abspath(__file__)),"src")

# dirs = []

# def ScranDir(path):
#     if os.path.isdir(path):
#         lis = os.listdir(path)
#         for index in range(len(lis)):
#             _path = os.path.join(path,lis[index])
#             if os.path.isdir(_path):
#                 ScranDir(_path)
#             else:
#                 global dirs
#                 if _path.endswith(".scss"):
#                     dirs.append(_path)
#         pass
#     pass

# def HandleFile(file):
#     if not os.path.isfile(file):
#         return
#     _content = ""
#     with open(file,"r+") as scss:
#         content = scss.read()
#         patt = re.compile(r'(\d+(\.\d+)?)rem')
#         res = patt.findall(content,0,len(content)-1)
#         for index in range(len(res)):
#             (a,b) = res[index]
#             soures = " " + a + "rem;"
#             target = " " + str(float(a)/5) + "rem;"
#             content = content.replace(soures,target)    
#         _content = content
#     os.remove(file)
#     with open(file,"a+") as scss:
#         scss.write(_content)

# ScranDir(BASE_DIR)

# for index in range(len(dirs)):
#     HandleFile(dirs[index])
# # print(dirs)