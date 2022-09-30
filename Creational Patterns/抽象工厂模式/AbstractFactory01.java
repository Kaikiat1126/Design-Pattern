package 抽象工厂模式;

public class AbstractFactory01 {

    public static void main(String[] args) {
        IFactory factory = new Factory();
        ICar audi = factory.createAudiCar();
        audi.show();

        ICar myvi = factory.createMyviCar();
        myvi.show();
    }
    
}

