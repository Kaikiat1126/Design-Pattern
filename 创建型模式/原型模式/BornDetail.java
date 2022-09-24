public class BornDetail implements Cloneable{

    public String bornDate;
    public String bornPlace;

    public void setDate(String date){
        this.bornDate = date;
    }

    public void setPlace(String place){
        this.bornPlace = place;
    }

    public String getDate(){
        return bornDate;
    }

    public String getPlace(){
        return bornPlace;
    }

    protected Object clone() throws CloneNotSupportedException{
        return super.clone();
    }
}
