from ast import Delete
import copy

'''为什么使用原型模式
副本：可以给任意对象创建副本，以便于进一步处理
快速启动：直接从ram复制数据，不需要走完new instance 的那一套
'''
# https://bbs.huaweicloud.com/blogs/362010


class Car:
    def __init__(self, color, seats, model):
        self.color = color
        self.seats = seats
        self.model = model

    def getInfo(self):
        print(f"{self.color} | {self.seats} | {self.model}")


class Prototype:
    def __init__(self):
        self.ClonedObejcts = {}

    def addObject(self, name, object):
        self.ClonedObejcts[name] = object

    def delObject(self, name):
        del self.ClonedObejcts[name]

    def Clone(self, name, args):
        # copyObjFromClonedObjects = self.ClonedObejcts.get(name)
        # copy.deepcopy(copyObjFromClonedObjects)
        # clonedObject.__dict__.update(kwargs)

        clonedObject = copy.deepcopy(self.ClonedObejcts.get(name))
        clonedObject.__dict__.update(args)
        return


originalCar = Car("white", 4, "model X")
prototypeForCar = Prototype()

prototypeForCar.addObject("original", originalCar)

refit1 = Car("black", 4, "model X")
prototypeForCar.addObject("refit1", refit1)

refit2 = Car("black", 40, "model X")
prototypeForCar.addObject("refit2", refit2)

refit3 = Car("black", 40, "TeslaSemi")
prototypeForCar.addObject("refit3", refit3)

refit1cpoy = prototypeForCar.Clone("refit1",  color="Moon Dust Silver")
refit1cpoy.getInfo()
