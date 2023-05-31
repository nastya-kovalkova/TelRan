package HomeWork_4;

public class ConverterReturn {
    private double resultToKelvin, resultToFahrenh;

    private final double X;

    public ConverterReturn(double x) {
        X = x;
        calcK();
        calcF();

        System.out.println(X + " по Цельсию = " + resultToFahrenh + "F и " + resultToKelvin + "K");
    }

    private double calcK() {
        resultToKelvin = X * 1.8 + 32;
        return resultToKelvin;
    }

    private double calcF() {
        resultToFahrenh = X + 273.15;
        return resultToFahrenh;
    }



}
