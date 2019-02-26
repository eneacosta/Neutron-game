import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import {Router} from '@angular/router'

@Component({
  selector: 'app-tablero',
  templateUrl: './tablero.component.html',
  styleUrls: ['./tablero.component.css']
})
export class TableroComponent implements OnInit {

  constructor(
    private toastr: ToastrService,
    private router: Router
    ) { }
  board: any[]=[]
  turno = 1
  neutron =  {moved: true, row: 2, col: 2}
  pieceSelected: any = {selected: false}
  endGame = false; 
  initBoard():void{
    let num=1;
    let color;
    
    for(let row=0; row<5; row++){
      this.board[row] = [];
      for(let col=0; col<5; col++){
        
        let piece = undefined;
        num%2==0 ? color='white' : color = 'black' 
        piece = 0;
        if (row == 0)piece = 1;//jugador uno
        if (row == 4)piece = 2;//jugador dos
        if (row == 2 && col ==2)piece = 3;//neutron
        this.board[row][col]={cols: 1, rows: 1,color: color, pos: num, piece: piece,row: row, col:col, selected:false};
        num++;
      }

    }
  };


  checkDirection(row,col,rowDir,colDir): any{
    let newRow = row + rowDir
    let newcol = col + colDir
    let possibleMov = {row: newRow, col: newcol }
    if (!(newRow > 4 || newRow<0 || newcol > 4 || newcol<0)){ 
      if (this.board[newRow][newcol].piece == 0)
      {
      
      while(!(newRow > 4 || newRow<0 || newcol > 4 || newcol<0)){
        if(this.board[newRow][newcol].piece == 0){
          possibleMov.row = newRow;
          possibleMov.col = newcol;
        }else break;
        newRow = possibleMov.row + rowDir;
        newcol = possibleMov.col + colDir;
      }
      return possibleMov;
    }else{
      return false;
    }
  }else{
    return false;
  }
  }
  possibleMoves(row, col) : Array<any>{
    let moves: Array<any> = [];
    let directions = [
      [1,0],//abajo
      [-1,0],//arriba
      [0,1],//derecha
      [0,-1],//izquierda
      [-1,-1],//arriba izquierda
      [1,1],//abajo derecha
      [-1,1],//arriba derecha
      [1,-1],//abajo izquierda
    ];
    directions.forEach(dir=>{
      if(this.checkDirection(row,col,dir[0],dir[1]))moves.push(this.checkDirection(row,col,dir[0],dir[1]));
    })
    return moves
  }

  isPossible(row,col,pieceSelected):boolean{
    console.log(pieceSelected)
    let possible = false;
    if(pieceSelected.row == row && pieceSelected.col == col){
      this.pieceSelected.possibleMoves.forEach(move=>{
        this.board[move.row][move.col].selected=false;
      })
      this.board[this.pieceSelected.row][this.pieceSelected.col].selected=false;

      this.pieceSelected = {selected: false}
    }
    
    pieceSelected.possibleMoves.forEach(element => {
      if (element.row == row && element.col == col)  possible = true;
      else return false;
    });
    return possible;
  }
  checkGameEnd(row,col){
    if (row == 0) return 1;
    if (row == 4) return 2;
    let possibleMoves= this.possibleMoves(row,col)
    if (possibleMoves.length == 0){
      if (this.turno %2 == 0)return 1;
      else return 2;
    }
    return 0;

  }
  setSelected(row,col,piece):void{
    if(!this.endGame){
    let pieceToMove:number;
    if(this.neutron.moved){
      if (this.turno % 2 == 0) pieceToMove = 2;
      else pieceToMove = 1
    }else pieceToMove = 3;

    if (this.pieceSelected.selected){

      if(this.isPossible(row,col,this.pieceSelected)){
        this.board[row][col].piece=this.pieceSelected.piece;
        this.board[this.pieceSelected.row][this.pieceSelected.col].piece = piece;
        this.board[this.pieceSelected.row][this.pieceSelected.col].selected = false;
        this.pieceSelected.possibleMoves.forEach(move=>{
          this.board[move.row][move.col].selected=false;
        })
        this.board[this.pieceSelected.row][this.pieceSelected.col].selected=false;
        this.pieceSelected={selected: false}
        
        
        if(this.board[row][col].piece == 3){
          this.neutron.moved = true;
          this.neutron.col = col
          this.neutron.row =  row
        }
        else {
          this.neutron.moved = false
          this.turno += 1
        }
        let winner = this.checkGameEnd(this.neutron.row,this.neutron.col)
        if (winner != 0)
        {
          let winnerColor
          if (winner == 1) winnerColor = "Azules"
          else winnerColor = "Rojas"
          this.endGame = true
          this.toastr.success('Ha ganado el jugador con las piezas '+ winnerColor)

        }
        
        
      }else{
        this.toastr.info("Ese movimiento no es posible","")
      }
    }else{

      if (piece == pieceToMove)
      {
   
        let possibleMoves= this.possibleMoves(row,col)
        possibleMoves.forEach(move=>{
          this.board[move.row][move.col].selected=true;
        })
        this.pieceSelected={selected: true,col: col, row:row, piece:piece, possibleMoves: possibleMoves}
        
        this.board[row][col].selected = true
      }else{
        if (pieceToMove ==  3)this.toastr.info("Debe mover el neutron","", {timeOut: 1000})
        if (pieceToMove ==  1)this.toastr.info("Debe mover el jugador con las piezas azules","", {timeOut: 1000})
        if (pieceToMove ==  2)this.toastr.info("Debe mover el jugador con las piezas rojas","", {timeOut: 1000})
      }
      
    }
  }
  }
  goMenu(){
    this.router.navigateByUrl('/menu')
  }
  ngOnInit() {
    this.toastr.success('El juego ha comenzado', 'A divertirse!!!')
    this.initBoard()
  }

}
