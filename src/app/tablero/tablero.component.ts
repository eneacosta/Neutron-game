import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tablero',
  templateUrl: './tablero.component.html',
  styleUrls: ['./tablero.component.css']
})
export class TableroComponent implements OnInit {

  constructor() { }
  board: any[]=[];
  initBoard():void{
    let num=1;
    let color;
    
    for(let row=0; row<5; row++){

      for(let col=0; col<5; col++){
        
        let piece = undefined;
        num%2==0 ? color='white' : color = 'black' 
        if (row == 0)piece = 1;
        if (row == 4)piece = 2;
        if (row == 2 && col ==2)piece = 3;

        this.board.push({cols: 1, rows: 1,color: color, pos: num, piece: piece});
        num++;
      }

    }
  };

  setSelected(id,piece):void{
    console.log("Posicion seleccionada: ",id,piece)
  }

  ngOnInit() {
    this.initBoard()
  }

}
