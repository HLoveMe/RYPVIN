#coding=utf-8
import os;

BASE_DIR = os.path.join(os.path.dirname(os.path.abspath(__file__)),"src")

dirs = []

def ScranDir(path):
    if os.path.isdir(path):
        lis = os.listdir(path)
        for index in range(len(lis)):
            _path = os.path.join(path,lis[index])
            if os.path.isdir(_path):
                ScranDir(_path)
            else:
                global dirs
                if _path.endswith(".js"):
                    dirs.append(_path)
        pass
    pass

print(BASE_DIR)
ScranDir(BASE_DIR)
print(dirs)