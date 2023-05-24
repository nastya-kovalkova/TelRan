package HomeWork_3;

public class Box {
    private double height;
    private double width;
    private double length;

    public Box(double height, double width, double length) {
        this.height = height;
        this.width = width;
        this.length = length;
        System.out.println("height -> " + height + " cm");
        System.out.println("width  -> " + width + " cm");
        System.out.println("length -> " + length + " cm");
        System.out.println("-------------------------");
        System.out.println("Box volume = " + (height * width * length) + " cm^3");
    }
}
