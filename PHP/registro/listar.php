<h6>Usuários</h6>

<?php 
    $sql = "SELECT * FROM usuarios";
    $res = $conexao->query($sql);

    $qtd = $res->num_rows;

    if($qtd > 0){
        echo "<table class='table table-hover'>";
        echo "<tr>";
        echo "<th>ID</th>";
        echo "<th>Nome</th>";
        echo "<th>E-mail</th>";
        echo "<th>Data de Nascimento</th>";
        echo "<th>Ações</th>";
        echo "</tr>";
        while($row = $res->fetch_object()){
            echo '<tr>';
            print "<td>" . $row-> id . "</td>";
            print "<td>" . $row-> nome . "</td>";
            print "<td>" . $row-> email . "</td>";
            print "<td>" . $row-> data_nasc . "</td>";
            print "<td>
                <button onclick=\"location.href='?page=editar&id=".$row->id."';\" class='btn btn-outline-primary btn-sm'>Editar</button>
                
                <button class='btn btn-outline-danger btn-sm' onclick=\"if(confirm('Tem certeza que deseja excluir?')){location.href='?page=salvar&acao=excluir&id=".$row->id."';} else {false;}\">Excluir</button>
            </td>";
            echo '</tr>';
        }
        echo "<table>";
    } else {
        echo '<div class="alert alert-danger" role="alert">
                Ainda não temos registros na base!!!!
            </div>';    
    }

?>