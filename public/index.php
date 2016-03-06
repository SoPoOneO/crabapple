<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8" />
    <title>Crab Apple</title>
    <link ref="style" href="/css/custom.css">
</head>
<body>
    <label>
      spaces: <input type="number" min="3" max="20" id="spaces" value="7">
    </label>
    <button id="create">
    Create
    </button>

    <table id="parts">
      <tr></tr>
    </table>

    Moves: <span id="moves"></span>
    <br>
    <button id="reset">Reset</button>
</body>
<script src="/js/jquery-2.2.1.min.js"></script>
<script src="/js/combo_engine.js"></script>
<script src="/js/crabapple.js"></script>
<script src="/js/test_runner.js"></script>
<script src="/js/tests.js"></script>
</html>