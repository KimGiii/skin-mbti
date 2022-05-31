<!DOCTYPE html>
<html lang="ko" dir="ltr">

<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <meta name="author" content="gwang">
  <meta name="keywords" content="skin mbti">
  <meta name="description" content="skin mbti">
  <!--favicon-->
  <link rel="shortcut icon" href="img/227_1.jpg">
  <title>skin mbti</title>
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Nanum+Pen+Script&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="./css/default.css">
  <link rel="stylesheet" href="./css/main.css">
  <link rel="stylesheet" href="./css/qna.css">
  <link rel="stylesheet" href="./css/animation.css">
  <link rel="stylesheet" href="./css/result.css">
</head>

<body>
  <div class="container">
    <section id="main" class="mx-auto my-5 py-5 px-3">
      <h1>skin test</h1>
      <div class="col-lg-6 col-md-8 col-sm-10 col-12 mx-auto">
        <img src="./img/url.png" alt="mainImage" class="img-fluid">
      </div>
      <p>
        자신에게 맞는 피부 유형을 알아보세요.<br>
        아래 시작하기 버튼을 눌러 시작해주세요.
      </p>
      <button type="button" class="btn btn-outline-danger mt-3" onclick="js:begin()">시작하기</button>
    </section>
    <section id="qna">
      <div class="status mx-auto mt-5">
        <div class="statusBar">

        </div>
      </div>
      <div class="qBox my-5 py-3 mx-auto">

      </div>
      <div class="answerBox">

      </div>
    </section>
    <section id="result" class="mx-auto my-5 py-5 px-3">
      <h1>당신의 검사 결과는?!</h1>
      <div class="resultname">

      </div>
      <div id = "resultImg" class="my-3 col-lg-6 col-md-8 col-sm-10 col-12 mx-auto">

      </div>
      <div class="resultDesc">

      </div>
    </section>
    <script src="./js/data.js" charset="utf-8"></script>
    <script src="./js/start.js" charset="utf-8"></script>
  </div>

</body>

</html>
