<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Condicional Simples</title>
</head>
<body>

    <?php
        $varUm = 12;
        $varDois = 11;

        if($varUm == $varDois){
            // Caso verdadeiro
            echo 'Valores Iguais';
        } else {
            echo 'Valores Diferentes';
        }
        echo "<br>";
        
        if($varUm > $varDois){
            // Caso verdadeiro
            echo 'Var Um maior que Var Dois';
        } else {
            echo 'Var Dois maior que Var Um';
        }
    
    ?>
    <br>
    <?php 
        $sexoInformado = "F";

        if($sexoInformado == "F"){
            echo "Feminino";
        } else if($sexoInformado == "M"){
            echo "Masculino";
        } else {
            echo "Não informado";
        }

    ?>
    <br>

    <?php
        $mediaAluno = 5;

        if($mediaAluno < 0 | $mediaAluno > 10){
            echo "Digite uma nota entre 0 e 10";
        } else if($mediaAluno >= 7){
            echo "Aprovado";
        } else {
            echo "Reprovado";
        } 
    
    ?>

    
</body>
</html>