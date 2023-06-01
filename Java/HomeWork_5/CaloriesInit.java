package HomeWork_5;

public class CaloriesInit {
    public static void main(String[] args) {

        Calories pizza1 = new Calories(24);
        Calories pizza2 = new Calories(28);

        int diffCals = pizza2.resultCals - pizza1.resultCals;

        System.out.println("-----------------------------------------------");
        System.out.println("Количество лишних калорий составит -> " + diffCals + " калорий");

    }
}
