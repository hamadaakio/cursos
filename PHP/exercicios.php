<!DOCTYPE html>
<html lang="pt_BR">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Exercícios</title>
</head>

<body>

    <?php
    $var1 = 2;
    $var2 = 2;

    if ($var1 === $var2) {
        echo "Os valores são idênticos.";
    } else {
        echo "Os valores são diferentes.";
    }
    echo "<br>";
    
    $animal = "G";

    if ($animal == "C") {
        echo "Seu animal é o Cachorro.";
    } else if ($animal == "G") {
        echo "Seu animal é o Gato.";
    } else {
        echo "Animal não identificado.";
    }
    echo "<br>";

    $var1 = 10;
    $var2 = 12;

    if ($var1 > $var2) {
        echo "$var1, $var2.";
    } else {
        echo "$var2, $var1.";
    }

    ?>

</body>

</html>