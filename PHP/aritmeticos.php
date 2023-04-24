<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>

<body>
    <?php
    $num1 = 14;
    $num2 = 2;

    echo "A soma dos valores $num1 e $num2 resultou em: " . ($num1 + $num2);
    echo "<br>A subtração dos valores $num1 e $num2 resultou em: " . ($num1 - $num2);
    echo "<br>A multiplicação dos valores $num1 e $num2 resultou em: " . ($num1 * $num2);
    echo "<br>A divisão dos valores $num1 e $num2 resultou em: " . ($num1 / $num2);
    echo "<br>O resto divisão dos valores $num1 e $num2 resultou em: " . ($num1 % $num2);


    echo "<br>";
    $x = 5;
    echo $x . "<br>";
    $x += 10; // $x = $x + 10;
    echo $x;
    echo "<br>";

    $x -= 4;
    echo $x;


    ?>


</body>

</html>