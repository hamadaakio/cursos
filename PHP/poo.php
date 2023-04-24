<?php

// Chamando a classe Pessoa  
require_once "classes/Pessoa.php";

// Criar o objeto Pessoa1
// $pessoa1 = new Pessoa();
// $pessoa1 -> nome = "André";
// echo $pessoa1 -> nome;
// echo "<br>";
// $pessoa1 -> idade = 35;
// echo $pessoa1 -> idade;

$pessoa1 = new Pessoa("André", 35);
$pessoa1->falar("POO");
$pessoa1->parar_falar();
$pessoa1->parar_falar();
$pessoa1->falar("PHP");
$pessoa1->parar_falar();
$pessoa1->comer("Pizza");
$pessoa1->parar_comer();
$pessoa1->comer("Sorvete");
$pessoa1->parar_comer();
$pessoa1->parar_comer();

echo "<br>";
echo "<br>";

$pessoa2 = new Pessoa("Benjamin", 4);
$pessoa2->falar("jogos de celular");
