public class Client {
    public static void main(String[] args) throws CloneNotSupportedException {
        System.out.println("原型模式完成对象的创建");
        CloneSheep sheep = new CloneSheep("Tom",1,"白色");
        sheep.setBornDetail("1997", "Indonesia");
        
        CloneSheep sheep2 = (CloneSheep)sheep.clone();
        sheep2.setColor("红色");
        sheep2.setBornDetail("1998", "Malaysia");

        CloneSheep sheep3 = (CloneSheep)sheep.clone();
        sheep3.setName("Jerry");
        sheep3.setBornDetail("1999", "Singapore");
        
        CloneSheep sheep4 = (CloneSheep)sheep.clone();
        sheep4.setAge(20);
        sheep4.setBornDetail("2000", "China");
        sheep4.setColor("绿色");

        CloneSheep sheep5 = (CloneSheep)sheep.clone();
        //CloneSheep sheep5 = sheep4;
        sheep5.setName("多利");
        sheep5.setColor("黑色");  
        sheep5.setBornDetail("2001", "Korea");
        //结果：sheep4 == sheep5  *sheep4是引用类型，sheep5不会复制sheep4，反而他们两个会引用同一个对象
        //被视为同一个
        
        System.out.println("sheep1: "+sheep);
        System.out.println("sheep2: "+sheep2);
        System.out.println("sheep3: "+sheep3);
        System.out.println("sheep4: "+sheep4);
        System.out.println("sheep5: "+sheep5);
    }
}
