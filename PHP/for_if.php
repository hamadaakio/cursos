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
    echo "Usando o laço For para imprimir os valores pares:<br> ";
    for ($i = 0; $i <= 20; $i++) {
        if ($i % 2 == 0) {
            echo $i . "<br>";
        }
    }
    echo "<br>";
    echo "Usando o laço While para imprimir os valores ímpares:<br> ";

    $j = 1;
    while ($j <= 20) {
        if ($j % 2 == 1) {
            echo $j . "<br>";
        }
        $j++;
    }

    ?>

</body>

</html>