<!DOCTYPE html>
<html lang="pt-br">
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <title><?=$this->title;?></title>

        <!-- Bootstrap -->
        <link rel="stylesheet" href="public/MyCSS/bootstrap.min.css">
        <link rel="stylesheet" href="public/MyCSS/Style.css">
        <link rel="stylesheet" href="public/MyCSS/sweetalert2.min.css">

        <!-- js do jquery e bootstrap-->
        <script src="public/MyJs/jquery-3.4.1.min.js"></script>
        <script src="public/MyJs/bootstrap.min.js"></script>
        <script src="public/MyJs/jquery.mask.js"></script>
        <script src="public/MyJs/sweetalert2.js"></script>
        <script src="public/MyJs/Site.js"></script>
        <script src="public/MyJs/ViaCep.js"></script>

        <?php 
            if (isset($this->js)) 
            {
                foreach ($this->js as $js)
                {
                    echo '<script type="text/javascript" src="'.URL.'views/'.$js.'"></script>';
                }
            }
        ?>
    </head>

    <body> 
        <?php error_reporting(E_ALL &~E_NOTICE); session_start(); ?>
        <nav class="navbar navbar-inverse navbar-static-top">
            <div class="container">
                <div class="navbar-header">
                    <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
                        <span class="sr-only">Toggle navigation</span>
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span>
                    </button>

                    <a href="<?=URL;?>" class="navbar-brand LogoMenu">
                        <img src="public/Img/LogoBomPreco.png" alt="Logo" class=""/>
                    </a>
                </div>
                <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                <ul class="nav navbar-nav">
                    <li>
                        <a href="<?=URL;?>">Home</a>
                    </li>
                    <?php if($_SESSION["cpf"] == "418.524.648-01"): ?>
                        <li>
                            <a href="<?=URL;?>clientes">Clientes</a>
                        </li>
                    <?php else: ?>

                    <?php endif; ?>

                    <li>
                        <a href="<?=URL;?>produtos">Produtos</a>
                    </li>
                    
                    <li class="dropdown">
                        <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Cadastrar <span class="caret"></span></a>
                        <ul class="dropdown-menu text-center">
                            <li>
                                <a href="<?=URL;?>clienteCad">Cliente</a>
                            </li>
                            <?php if($_SESSION["cpf"] == "418.524.648-01"): ?>
                                <li>
                                    <a href="<?=URL;?>categoriaCad">Categoria</a>
                                </li>

                                <li>
                                    <a href="<?=URL;?>produtoCad">Produtos</a>
                                </li>
                            <?php else: ?>

                            <?php endif; ?>
                            <li role="separator" class="divider"></li>
                        </ul>
                    </li>
                </ul>
                
                <ul class="nav navbar-nav navbar-right">
                    <?php if($_SESSION["logado"] == false): ?>
                        <li class="txtLoginMenu">
                            <a href="<?=URL;?>login" >Login</a>
                        </li>
                    <?php else: ?>
                        <li class="txtLoginMenu">
                            <a href="<?=URL;?>clienteEditar" valor="<?php echo $_SESSION["codigo"] ?>" id="btn-edit-menu" >Editar</a>
                        </li>
                        <li class="txtLoginMenu">
                            <a href="javascript:void(0);" class="NomeUser">Bem vindo <?php echo $_SESSION["nome"]; ?></a>
                        </li>
                        <li class="txtLoginMenu">
                            <a href="<?=URL;?>logout" >Logout</a>
                        </li>
                    <?php endif; ?>
                </ul>
            </div>
        </nav> 