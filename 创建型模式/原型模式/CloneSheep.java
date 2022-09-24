public class CloneSheep implements Cloneable{

    private String name;
    private int age;
    private String color;
    private BornDetail details;

    public CloneSheep(String name, int age, String color) {
        this.name = name;
        this.age = age;
        this.color = color;
        details = new BornDetail();  //
    }

    private CloneSheep(BornDetail details) throws CloneNotSupportedException{
        this.details = (BornDetail)details.clone();
    }

    public void setBornDetail(String date, String place){
        details.bornDate = date;
        details.bornPlace = place;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public int getAge() {
        return age;
    }

    public void setAge(int age) {
        this.age = age;
    }

    public String getColor() {
        return color;
    }

    public void setColor(String color) {
        this.color = color;
    }

    //@Override
    public String toString() {
        return "Sheep{" +
                "name='" + name + '\'' +
                ", age=" + age +
                ", color='" + color + '\'' +
                '}' + '\n' + details.bornDate + ", " + details.bornPlace;
    }

    //克隆该实例，使用默认的clone方法来完成
    //@Override
    protected Object clone() throws CloneNotSupportedException {

        CloneSheep obj = new CloneSheep(this.details);
        obj.name = this.name;
        obj.age = this.age;
        obj.color = this.color;
        return obj;
    }
}