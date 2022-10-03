package 抽象工厂模式;

public class AudiCar implements ICar{
    private Engine engine;
        private Steering steering;
        private Wheel wheel;

        public AudiCar(Engine engine, Steering steering, Wheel wheel){
            this.engine = engine;
            this.steering = steering;
            this.wheel = wheel;
        }

        public void show(){
            engine.getStyle();
            steering.getStyle();
            wheel.getStyle();
            System.out.println("An Audi car was done!");
        }
}
