<?php

// Gerar a conexão com o BD
$server = "mysql:host=localhost;dbname=Cadastro";
$username = "root";
$password = "";


try {
    // Tenta a conexão com o BD
    // PDO = PHP Data Objects, que são os objetos de dados(Banco de Dados)
    $pdo = new PDO($server, $username, $password);
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
} catch (PDOException $e) {
    // Caso não consiga, aqui apresenta o erro
    echo "Erro ao conectar com o banco de dados: " . $e->getMessage();
}

// Create
if (isset($_POST['nome'])) {
    $sql = $pdo->prepare("INSERT INTO dados VALUES (null, ?, ?)");
    $sql->execute(array($_POST['nome'], $_POST['email']));
    echo "Registro inserido com sucesso!";
}

// Delete
if (isset($_GET['id'])) {
    $id = (int)$_GET['delete'];
    $pdo->exec("DELETE FROM dados WHERE id=$id");
    echo "Registro de id $id foi deletado com sucesso!";
}


?>

<form method="post">
    <input type="text" name="nome">
    <input type="text" name="email">
    <input type="submit" value="Enviar">
</form>

<?php
$sql = $pdo->prepare("SELECT * FROM dados");
$sql->execute();

$fetchClientes = $sql->fetchAll();

foreach ($fetchClientes as $key => $value) {
    echo $value['nome'] . ' - ' . $value['email'] . ' | <a href= "?delete=' . $value['id'] . '"><img src="lixeira.png"></a><br>';
}
?>