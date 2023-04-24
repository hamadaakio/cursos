<!DOCTYPE html>
<html lang="pt_BR">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Registros</title>
    
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha2/dist/css/bootstrap.min.css">
  </head>
<body>

    <nav class="navbar navbar-expand-lg">
    <div class="container">
        <a class="navbar-brand" href="?page=default">Cadastro</a>
        
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
    
    
        <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav mr-auto">
                <li class="nav-item">
                    <a class="nav-link" href="?page=default">Home</a>
                </li>
                
                <li class="nav-item">
                    <a class="nav-link" href="?page=novo">Novo</a>
                </li>

                <li class="nav-item">
                    <a class="nav-link" href="?page=listar">Listar</a>
                </li>
            </ul>
        </div>
    </div>
</nav>

    <div class="container">
        <div class="row">
            <div class="col-md-12 mt-6">
            <?php 
                // Incluindo o arquivo config
                include("config.php");
                
                // Ajustando o menu
                switch(@$_REQUEST["page"]){
                    case "novo":
                        include("novo.php");
                    break;
                    case "listar":
                        include("listar.php");
                    break;
                    case "salvar":
                        include("salvar-usuario.php");
                    break;
                    case "editar":
                        include("editar-usuario.php");
                    break;
                    default:
                        echo "<h6>Bem-vindos!</h6>";
                }
            ?>
            </div>
        </div>
    </div>
   

    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha2/dist/js/bootstrap.bundle.min.js"></script>
</body>
</html>