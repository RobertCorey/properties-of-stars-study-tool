<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Bootstrap 101 Template</title>

    <!-- Bootstrap -->
    <link href="css/bootstrap.min.css" rel="stylesheet">
    <link rel="stylesheet" href="css/stylesheet.css">
    <!-- HTML5 Shim and Respond.js IE8 support of HTML5 elements and media queries -->
    <!-- WARNING: Respond.js doesn't work if you view the page via file:// -->
    <!--[if lt IE 9]>
      <script src="https://oss.maxcdn.com/libs/html5shiv/3.7.0/html5shiv.js"></script>
      <script src="https://oss.maxcdn.com/libs/respond.js/1.4.2/respond.min.js"></script>
    <![endif]-->
  </head>
  <body>
    <div class="container" id="container">
    <h1>Thuban</h1>
      <div class="row">
        <div class="spacer"></div>
      </div>
      <div class="row">
        <div class="col-xs-3 col-xs-offset-1 bubble solved">Apparent Magnitude <em>(m)</em> = 4.7</div>
        <div class="col-xs-3 col-xs-offset-1 bubble solved">Parallax = 0.173 <em>"</em> </div>
        <div class="col-xs-3 col-xs-offset-1 bubble solved">λ <sub>Max</sub> = 289 nanometers <em>nm</em></div>
      </div>
      <div class="row">
        <div class="col-xs-3 col-xs-offset-1"><span class="glyphicon glyphicon-arrow-down arrow"></span></div>
        <div class="col-xs-3 col-xs-offset-1"><span class="glyphicon glyphicon-arrow-down arrow"></span></div>
        <div class="col-xs-3 col-xs-offset-1"><span class="glyphicon glyphicon-arrow-down arrow"></span></div>
      </div>
      <div class="row">
        <div class="col-xs-3 col-xs-offset-1"><span class="glyphicon glyphicon-arrow-down arrow"></span></div>
        <div class="col-xs-3 col-xs-offset-1 bubble open" id="distance">Find the Distance <em>(d)</em></div>
        <div class="col-xs-3 col-xs-offset-1 bubble open" id="temperature">Find the Temperature <em>(T)</em></div>
      </div>
      <div class="row">
        <div class="col-xs-3 col-xs-offset-1 bubble open" id="absMag">Find the Absolute Magnitude <em>M</em></div>
        <div class="col-xs-3 col-xs-offset-1"><span class="glyphicon glyphicon-arrow-left arrow"></span></div>
        <div class="col-xs-3 col-xs-offset-1"><span class="glyphicon glyphicon-arrow-down arrow"></span></div>
      </div>
      <div class="row">
        <div class="col-xs-3 col-xs-offset-1"><span class="glyphicon glyphicon-arrow-down arrow"></span></div>
        <div class="col-xs-3 col-xs-offset-5 bubble open" id="powerPerMeter">
          Find the Power per meter squared <em>P <sub>m <sup>2</sup></sub></em>
        </div>
      </div>
      <div class="row">
        <div class="col-xs-3 col-xs-offset-1 bubble open" id="totalPower">Find the Total Power</div>
        <div class="col-xs-3 col-xs-offset-5"><span class="glyphicon glyphicon-arrow-down arrow"></span></div>
      </div>
      <div class="row">
        <div class="col-xs-3 col-xs-offset-1"><span class="glyphicon glyphicon-arrow-right arrow"></span></div>
        <div class="col-xs-3 col-xs-offset-1 bubble open" id="area">Find the Size of the Star</div>
        <div class="col-xs-3 col-xs-offset-1"><span class="glyphicon glyphicon-arrow-left arrow"></span></div>
      </div>
    </div>
    <!-- jQuery (necessary for Bootstrap's JavaScript plugins) -->
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.0/jquery.min.js"></script>
    <!-- Include all compiled plugins (below), or include individual files as needed -->
    <script src="js/bootstrap.min.js"></script>
    <script src="js/flowchartStudyTool.js"></script>
  </body>
</html>