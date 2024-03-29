$(document).ready(function(){
	lista();
    listaCarrinho();
		
	function lista(){
	
		$.post('produtos/lista/', function(data) {
            data=JSON.parse(data);
            
            for (var i = 0; i < data.length; i++){
                $('#list-prod').append(`
                    <div class="col-sm-6 col-md-6 col-xs-12">
                        <div class="thumbnail produtos-style-card">
                            <div class="size-card-procuct">
                                <img src="public/ProdutoFoto/`+ data[i].foto +`" alt="foto-` + data[i].descricao + `">
                            </div>
                            <div class="caption">
                                <input type="hidden" value="` + data[i].codigo + ` " />
                                <p class="produtos-name-card">` + data[i].descricao + `</p>
                                <p class="produtos-valor-card">R$ ` + data[i].valor + `</p>
                                <button type="button" class="btn btn-sm btn-success addCarrinho" role="button" valor="`+data[i].codigo+`">Adicionar ao carrinho</button>
                            </div>
                        </div>
                    </div>
                `);
            }
		});
	}
    
	$(document).on("click",".addCarrinho",function(){
		var pro=$(this).attr("valor");
		$.post('produtos/addCarrinho/',{ codproduto: pro }).done(function(data) {
			listaCarrinho();			  
        });
	});

	$(document).on("click",".rmCarrinho",function(){
		var pro=$(this).attr("valor");
		$.post('produtos/rmCarrinho/',{ codproduto: pro }).done(function(data) {
			listaCarrinho();			  
        });
	});

	function listaCarrinho(){

        $.post('produtos/listaCarrinho/', function(data) {
            
            try{
                data=JSON.parse(data);
                
                $("#btn-finalizar-compra").removeAttr("disabled", "disabled");

                $("#list-cart").find("div").remove();
                
                for (var i = 0; i < data.length; i++){
                    $('#list-cart').append(`
                        <div class="col-sm-6 col-md-6 col-xs-12">
                            <div class="thumbnail produtos-style-card">
                                <span class="badge product-count">` + data[i].qtd + `</span>
                                <div class="size-card-procuct-cart">
                                    <img src="public/ProdutoFoto/`+ data[i].foto +`" alt="foto-` + data[i].descricao + `">
                                </div>
                                <div class="caption">
                                    <input type="hidden" value="` + data[i].codigo + ` " />
                                    <input type="hidden" id="id-valor-total-card" value="`+ data[i].valortotal +`"/>
                                    <p class="produtos-name-card">` + data[i].descricao + `</p>
                                    <p class="produtos-valor-card">R$ ` + data[i].valorun + `</p>
                                    <button type="button" class="btn btn-sm btn-danger rmCarrinho" role="button" valor="`+data[i].codigo+`">Remover</button>
                                </div>
                            </div>
                        </div>
                    `);
                }
            }
            catch(ee){
                $("#list-cart").find("div").remove();
                $("#list-cart").html('<div class="txt-cart-null"><p>Carrinho Vazio</p></div>');
                $("#btn-finalizar-compra").attr("disabled", "disabled");
            }  
        });
    }

    $(document).on("click","#btn-finalizar-compra",function(){
        
        let current_datetime = new Date();
        let formatted_date = current_datetime.getDate() + "/" + (current_datetime.getMonth() + 1) + "/" + current_datetime.getFullYear() + " " + current_datetime.getHours() + ":" + current_datetime.getMinutes() + ":" + current_datetime.getSeconds();
        
        console.log(formatted_date);

        var x = $("#idCliente").val();
        
        $.post('produtos/cadVenda/', {idCliente: x} ).done(function(data) {
            try {
                if(data == "sucess")
                    Swal.fire({
                        type: "success",
                        html: "<h4><strong>Compra realizada com sucesso !</strong></h4>",
                        showConfirmButton: false,
                        timer: 2000,
                    });
                    setTimeout(function(){
                        window.location='/BomPreco/produtos';
                    }, 2100);
            } catch (error) {
                alert(error);
            }
        });
        
        // $.post('produtos/cadCompra/',  ).done(function(data) {
        //     try {
        //         alert("Aeeee");
        //     } catch (error) {
        //         alert(error);
        //     }
        // });
	});
});