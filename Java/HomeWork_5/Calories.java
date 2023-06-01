package HomeWork_5;

public class Calories {
    private double S, r;
    public int resultCals;

    public Calories(double diameter) {
        resultCals = calcCals((int) square(diameter));

        System.out.println("Пицца диаметром " + diameter + " см содержит " + resultCals + " калорий");
    }

    private double square(double d) {
        r = d / 2;
        S = Math.PI * Math.pow(r, 2);
        return S;
    }

    private int calcCals(int k) {
        return k * 40;
    }
}
