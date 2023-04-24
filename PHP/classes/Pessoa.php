<?php

class Pessoa
{
    public $nome;
    public $idade;
   

    public $falando = false;
    public $comendo = false;

    public function __construct($nome, $idade)
    {
        $this->nome = $nome;
        $this->idade = $idade;
    }

    public function falar($assunto)
    {
        if ($this->falando) {
            echo "{$this->nome} já está falando!<br>";
            return;
        }

        if($this->comendo){
            echo "{$this->nome} não pode falar comendo!<br>";
            return;
        }

        echo "{$this->nome} está falando sobre $assunto.<br>";
        $this->falando = true;
    }

    public function parar_falar()
    {
        if (!$this->falando) {
            echo "{$this->nome} não está falando!<br>";
            return;
        }
        echo "{$this->nome} parou de falar.<br>";
        $this->falando = false;
    }

    public function comer($comida)
    {
        if($this->falando) {
            echo "{$this->nome} não pode comer enquanto fala.<br>";
            return;
        }

        if($this->comendo){
            echo "{$this->nome} já está comendo!<br>";
            return;
        }

        echo "{$this->nome} Está comendo $comida!<br>";
        $this->comendo = true;
    }

    public function parar_comer()
    {
        if (!$this->comendo) {
            echo "{$this->nome} não esta comendo.";
            return;
        }

        echo "{$this->nome} parou de comer!<br>";
        $this->comendo = false;
    }
}
