<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Vars</title>
</head>

<body>

    <?php
    $nome = "André"; // String - Texto
    $idade = 34; // Inteiro - Integer
    $peso = 68.5; // Float, Double - casas decimais
    $fumante = false; // boolean - Lógico - o e 1

    ?>
    
    <h1>Ficha Cadastral</h1>
    <p>Nome: <?= $nome ?></p>
    <p>Idade: <?= $idade ?> anos</p>
    <p>Peso: <?= $peso ?> Kg</p>
    <p>Fumante: <?= $fumante ?></p>

</body>

</html>