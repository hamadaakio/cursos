<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Variáveis Constantes</title>
</head>
<body>
    <?php
        define('BD_URL', 'endereço_do_bd');
        define('BD_USER','nome_user');
        define('BD_PASS','senha');

        echo BD_URL . "<br>";
        echo BD_USER . "<br>";
        echo BD_PASS 

    ?>    

</body>
</html>