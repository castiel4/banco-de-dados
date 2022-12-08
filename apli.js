const  expresso  =  requer ( 'expresso' ) ;
const  apli  =  expresso ( ) ;

const  db  =  require ( './hello/db' ) ;

apli . get ( "/" ,  assíncrono  ( req ,  res )  => {
    res . send ( "Servidor de Banco de Dados Ativado" ) ;
} ) ;

apli . ouvir ( 2222 ,  ( ) => {
    console . log ( "Servidor ativo no local => http://loachost:2222" )
} ) ;