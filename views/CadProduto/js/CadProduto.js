$(document).ready(function(){

    $.post("produtoCad/listaCategoria", function(data){
        data=$.parseJSON(data);

        for (let i = 0; i < data.length; i++){
            $("#select_CategoriaProduto").append(`
                <option value="`+data[i].id+`">`+ data[i].nome +`</option>
            `);
        }
    });

    $("form").submit(function(evt){	 
        evt.preventDefault();
        var formData = new FormData($(this)[0]);
        $.ajax({
            url: 'produtoCad/cadProduto',
            type: 'POST',
            data: formData,
            async: false,
            cache: false,
            contentType: false,
            enctype: 'multipart/form-data',
            processData: false,
            success: function (response) {
                if(response == "Upload com sucesso!"){
                    Swal.fire({
                        type: "success",
                        html: "<h4><strong>Produto cadastrado com sucesso!</strong></h4>",
                        showConfirmButton: false,
                        timer: 2000,
                    });
                    setTimeout(function(){ 
                        location.reload(); 
                    }, 2300);
                }else{
                    Swal.fire({
                        type: "error",
                        title: "Oops...",
                        html: "<h4>"+response+"</h4>",
                    });
                }
            }
        });
        return false;
    });

    // $(document).on("click","#BtnSalvarProduto",function(){
    //     if($("#NomeProduto").val() && $("#ValorProduto").val() && $("#select_CategoriaProduto").val != ""){
    //         var frm=$("#frmCadProduto").serialize(); 
    //         $.post("produtoCad/cadProduto",frm ,function(retorno){
    //             if(retorno == "Upload com sucesso!"){
    //                 Swal.fire({
    //                     type: "success",
    //                     html: "<h4><strong>Produto cadastrado com sucesso!</strong></h4>",
    //                     showConfirmButton: false,
    //                     timer: 2000,
    //                 });

    //                 setTimeout(function(){ 
    //                     location.reload(); 
    //                 }, 2500);
    //             }else if(retorno == "Erro no upload"){
    //                 Swal.fire({
    //                     type: "error",
    //                     title: "Oops...",
    //                     html: "<h4>Insira o produto corretamente ! </br></br> Verifique se todos campos estão preenchidos !</h4>",
    //                 });
    //             }
    //         });
    //     }else{
    //         Swal.fire({
    //             type: 'error',
    //             title: 'Oops...',
    //             html: '<h4>Insira o produto corretamente ! </br></br> Verifique se todos campos estão preenchidos !</h4>',
    //         });
    //     }
    // });

});