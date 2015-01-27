      google.load("visualization", "1", {packages:["corechart"]});
      google.setOnLoadCallback(drawChart);
      function drawChart() {
        var data = google.visualization.arrayToDataTable([
          ['Date', 'Users'],
          ['Oct 1st',  1000],
          ['Oct 2st',  1170],
          ['Oct 3st',  660],
          ['Oct 4st',  1030]
        ]);

        var options = {
          title: 'Users',
          pointSize: 10
        };

        var chart = new google.visualization.LineChart(document.getElementById('line-chart'));
        chart.draw(data, options);
      }