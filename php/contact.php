

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
    <link rel="stylesheet" href="../css/contact.css">
    <title>Document</title>
</head>
<body>
    
    <?php include('../php/header.php'); ?>
    <main>
    <div class='left'>
    <ul>
        <li><h5> <b>Pour contacter le club</b> </h5></li>
        <li><i class="material-icons">
    call 
    </i> +253 77 84 06 12</li>
            <li><i class="material-icons">
    mail
    </i> cjedjib@gmail.com </li>
            <li><i class="material-icons">
    place 
    </i> Rue Menelik, Djibouti </li>
    </ul>
    </div>


    <div class="right">

    <h5>Vos suggestions</h5>
    <form action="">

    <div class="form-group">
    <i class="material-icons">
    person
    </i>
     <input type="nom" class="form-control" id="exampleFormControlInput" placeholder="Votre nom">
  </div>

  <div class="form-group">
  <i class="material-icons">
    send
    </i>
    <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com">
  </div>
  <div class="form-group">
  <i class="material-icons">
    mail 
    </i>
     <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" placeholder="Message"></textarea>
  
     <button class="btn">Envoyer</button>

    </div>

  
    </form>
    </div>
    </main>
   
    <footer> <?php include('../php/footer.php'); ?></footer>


</body>
</html>