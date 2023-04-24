<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Concatenação</title>
</head>

<body>
    <?php
    $nome = "André";
    $idade = 35;
    $profissao = 'Programador iniciante';

    echo 'Olá, me chamo André, tenho 35 anos e sou Programador iniciante!';

    // Forma Iniciante
    echo '<br>Olá, me chamo ' . $nome . ', tenho ' . $idade . ' anos e sou ' . $profissao . '! <br>';


    echo "Olá, me chamo $nome, tenho $idade anos e sou $profissao !";

    ?>

</body>

</html>