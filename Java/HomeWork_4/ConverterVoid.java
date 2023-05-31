package HomeWork_4;

public class ConverterVoid {

    private double resultToKelvin, resultToFahrenh;

    private final double X;

    public ConverterVoid(double x) {
        X = x;
        calcF();
        calcK();

        printResult();
    }

    private void calcK() {
        resultToKelvin = X * 1.8 + 32;

    }
    private void calcF() {
        resultToFahrenh = X + 273.15;
    }

    public void printResult() {
        System.out.println(X + " по Цельсию = " + resultToFahrenh + "F и " + resultToKelvin + "K");
    }

}
