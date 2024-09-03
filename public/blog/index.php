<?php
include_once('./utils/functions.php');

// URL base de la API de WordPress
$path = "";
$baseUrl = "https://" . $_SERVER['HTTP_HOST'] . $path;
$urlApi = "https://conamat.edu.pe/api/wp-json/wp/v2";

// Obtener el parámetro `route` desde la URL
$route = isset($_GET['route']) ? $_GET['route'] : '';
$routeCut = str_replace($path, "", $route);

// Separar el `route` en partes para extraer `id` y `slug`
$route_parts = explode('/', trim($routeCut, '/'));

$id = isset($route_parts[0]) ? $route_parts[0] : null;
$slug = isset($route_parts[1]) ? $route_parts[1] : null;

// validaciones
if ($id && $slug) {
    
    $dataById = buscarPorId($urlApi, $id);
    $dataBySlug = buscarPorSlug($urlApi, $slug);

    if(!is_null($dataById) && !is_null($dataBySlug)){
        $post           = json_decode($dataBySlug, true);
        $title          = htmlspecialchars($post['title']['rendered']);
        $excerpt        = htmlspecialchars($post['excerpt']['rendered']);
        $body           = $post['content']['rendered'];
        $image          = serviceGetMedia($urlApi, $post);
        $medium         = $image['media_details']['sizes']['medium']['source_url'];
        $thumbnail      =  $image['media_details']['sizes']['thumbnail']['source_url'];
        $mediumLarge    =  $image['media_details']['sizes']['medium_large']['source_url'];
        $full           = $image['media_details']['sizes']['full']['source_url'];
        $currentUrl     = $_SERVER['HTTP_HOST'].$_SERVER['REQUEST_URI'];
        $archivos       = scandir('../assets/');

        echo "<!DOCTYPE html>
        <html lang='es'>";
        echo "<head>";
        echo "<meta charset='UTF-8'>
              <meta name='viewport' content='width=device-width, initial-scale=1.0'>
              <meta property='og:type' content='website'>
              <meta property='og:locale' content='es_ES' />
              <link rel='icon' type='image/svg+xml' href='" . $baseUrl . "/favicon.svg'/>";
        echo "<title>" . $title . "</title>";
        echo "<meta name='description' content='" . $excerpt . "' />";
        // Facebook Meta Tags
        echo "<meta property='og:url' content='".$currentUrl."'>";
        echo "<meta property='og:title' content='" . $title . "'>";
        echo "<meta property='og:description' content='" . $excerpt . "'>";
        echo "<meta property='og:image' content='".$medium."'>";
        // Twitter Meta Tags
        echo "<meta name='twitter:card' content='summary_large_image'>";
        echo "<meta property='twitter:domain' content='https://conamat.edu.pe/'>";
        echo "<meta property='twitter:url' content='" . $currentUrl . "'>";
        echo "<meta name='twitter:title' content='" . $title . "'>";
        echo "<meta name='twitter:description' content='" . $excerpt . "'>";
        echo "<meta name='twitter:image' content='" . $mediumLarge . "'>";
        echo "</head>";
        echo "<body>";
        echo "<div id='root'></div>";
        
        foreach ($archivos as $archivo) {
            // Si el archivo es un .css
            if (strpos($archivo, '.css') !== false) {
                echo "<link rel='stylesheet' crossorigin='anonymous' href='" . $baseUrl . "/assets/" . $archivo . "' />";
            }        
            // Si el archivo es un .js
            if (strpos($archivo, '.js') !== false) {
                echo "<script type='module' crossorigin='anonymous' src='" . $baseUrl . "/assets/" . $archivo . "'></script>";
            }
        }        
        echo "</body>";
        echo "</html>";

        exit();
    }
} 

header("Location: " . $baseUrl . "no-found");
exit();
?>
