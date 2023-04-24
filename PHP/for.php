<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Laço de repetição</title>
</head>

<body>

    <?php
    for ($i = 1; $i <= 10; $i++) {
        echo $i . '<br>';
    }
    echo "<br>";

    $tabuada = 4;
    $j = 0;

    while ($j <= 10) {
        echo $tabuada . " x " . $j . " = " . ($tabuada * $j) . "<br>";
        $j++;
    }
    echo "<br>";

    $notas = 1;
    while ($notas < 5) {
        echo "A " . $notas . "ª nota é __.<br>";
        $notas++;
    }
    echo "<br>";

    $numeros = array(2, 4, 6, 8, 10, 12);
    for ($i = 0; $i < count($numeros); $i++) {
        echo $numeros[$i] . "<br>";
    }
    echo "<br>";

    $frutas = array("maçã", "banana", "kiwi", "laranja", "uva");

    $k = 0;
    while ($k < count($frutas)) {
        echo $frutas[$k] . "<br>";
        $k++;
    }

    ?>

</body>

</html>