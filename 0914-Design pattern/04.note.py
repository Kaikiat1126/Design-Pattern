import copy
import time


class NoteContent:
    def __init__(self, text, time):
        self.text = text
        self.time = time

    def getInfo(self):
        print(f"{self.text} | {self.time}")


class Prototype:
    def __init__(self):
        self.ClonedObejcts = {}

    def addObject(self, name, object):
        self.ClonedObejcts[name] = object

    def delObject(self, name):
        del self.ClonedObejcts[name]

    def Clone(self, name):
        clonedObject = copy.deepcopy(self.ClonedObejcts.get(name))
        # clonedObject.__dict__.update(args)
        return clonedObject


prototypeForNote = Prototype()

# 1. ctrl +s
content1 = NoteContent("lalala", time.time())
prototypeForNote.addObject("content1", content1)
time.sleep(0.5)

# 2. ctrl+s
content2 = NoteContent("lalala, cool", time.time())
prototypeForNote.addObject("content2", content2)
time.sleep(1)

# 3. ctrl +s
content3 = NoteContent("hello world", time.time())
prototypeForNote.addObject("content3", content3)
time.sleep(1.5)

# 撤回到version2
version2 = prototypeForNote.Clone("content2")
version2.getInfo()
