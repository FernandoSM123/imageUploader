<?php 
require "conexion.php";
header('Access-Control-Allow-Origin: *');
$conexion=new ApptivaDB();
$opc="mostrar";
if(isset($_GET['accion']))
	$opc=$_GET['accion'];
$res= array('error' => false );
switch ($opc) {
	case 'mostrar':
		$u=$conexion->buscar("paisajes","1");
		if($u):
			$res['paisajes']=$u;
			$res['mensaje']="exito";
		else:
			$res['error']=true;
		endif;
		break;
	case 'crear':
		$nombre	=	$_POST['nombre'];
		$descripcion 	=	$_POST['descripcion'];
		$foto	=	$_FILES['foto']['name'];

		$target_dir="img/";
		$target_file=$target_dir.basename($foto);
		move_uploaded_file($_FILES['foto']['tmp_name'],$target_file);

		$data 	="'".$nombre."','".$descripcion."','".$foto."'";
		$u=$conexion->insertar("paisajes",$data);
		if($u)
			$res['mensaje']="insercion exitosa";
		else
			$res['error']=true;
		break;

	case 'borrar':		
		$id		=intval($_POST['did']);
		$u=$conexion->borrar("paisajes","id=".$id);
		if($u)
			$res['mensaje']="Eliminación exitosa";
		else
			$res['error']=true;
		break;
	case 'upload':
		$target_dir="img/";
		$target_file=$target_dir.basename($_FILES["file"]['name']);
		if(move_uploaded_file($_FILES['file']['tmp_name'],$target_file)):
			$res['mensaje']=basename($_FILES["file"]['name']);
		else:
			$res['mensaje']="Fallo";
			$res['error']=true;
		endif;
	break;
	default:
		# code...
		break;
}
header("Content-type: application/json");
echo json_encode($res);
die();
?>
