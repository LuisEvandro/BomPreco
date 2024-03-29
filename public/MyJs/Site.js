  var SPMaskBehavior = function (val) {
      return val.replace(/\D/g, '').length === 11 ? '(00) 00000-0000' : '(00) 0000-00009';
    },
    spOptions = {
      onKeyPress: function(val, e, field, options) {
          field.mask(SPMaskBehavior.apply({}, arguments), options);
        }
  };

$(document).ready(function(){
  var d = new Date();
  var n = d.getFullYear();

  $('#text-footer').html(`<p class="texto-desc-footer"> Bom Preço © `+n+`</p>`);

  $('.cepMask').mask('00000-000');
  $('.tel').mask(SPMaskBehavior, spOptions);
  $('.cpf').mask('000.000.000-00', {reverse: true});
});