import { Component, OnInit } from '@angular/core';
import { GraficasService } from '../../services/graficas.service';
import { ChartType } from 'chart.js';
import { Color, Label, MultiDataSet } from 'ng2-charts';

@Component({
  selector: 'app-dona-http',
  templateUrl: './dona-http.component.html',
  styles: [
  ]
})
export class DonaHttpComponent implements OnInit {

  public doughnutChartLabels: Label[] = [
    // 'Download Sales', 'In-Store Sales', 'Mail-Order Sales', 'Others'
  ];
  public doughnutChartData: MultiDataSet = [
    // [350, 450, 100, 150]
  ];
  public doughnutChartType: ChartType = 'doughnut';

  public colors: Color[] = [
    {
      backgroundColor: [
        '#4D4CFC',
        '#416CD9',
        '#53ACF0',
        '#41C3D9',
        '#3EFADE'
      ]
    }
  ];

  constructor(private graficasService: GraficasService) { }

  ngOnInit(): void {
    
    // this.graficasService.getUsuariosRedesSociales()
    //   .pipe(
    //     delay(1000)
    //   )
    //   .subscribe( data => {
    //     const labels = Object.keys( data );
    //     const values = Object.values( data );

    //     this.doughnutChartLabels = labels;
    //     this.doughnutChartData.push(values);
    //   });

    this.graficasService.getUsuariosRedesSocialesDonasData()
      .subscribe( ({ labels, values })  => {
        this.doughnutChartLabels = labels;
        this.doughnutChartData.push(values);
      });
  }

}
