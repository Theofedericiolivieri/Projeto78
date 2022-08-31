var fotos=["irma.jpg","pai-e-filho-png.png","mae.png"];
var nomes=["lia","Jack","Mary"];
var count=0;
function atualizar(){
    i++;
    if(count>2){
        count=0;
    }
    var atualizarfoto=fotos[count];
    var atualizarnome=nomes[count];
    document.getElementById(fotos).src=atualizarfoto;
    document.getElementById(nomes).src=atualizarnome;
}
