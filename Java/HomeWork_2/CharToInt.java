package HomeWork_2;

public class CharToInt {
    public static void main(String[] args) {

        char s = '4';

        // String.valueOf()
        String preResult = String.valueOf(s);
        int result1 = Integer.parseInt(preResult);
        System.out.println("String.valueOf()          -> " + (result1 + 6));

        // Character.getNumericValue
        int result2 = Character.getNumericValue(s);
        System.out.println("Character.getNumericValue -> " + (result2 + 6));
    }
}
