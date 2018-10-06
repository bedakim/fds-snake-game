import {ROWS, COLS} from './config';

// NOTE: ROWS, COLS에는 행의 개수, 열의 개수가 저장되어 있습니다.
// 이 변수를 활용해서 코드를 작성하세요!

function SnakeGameLogic() {
  // 각 마디의 좌표를 저장하는 배열
  this.joints = [
    {x: 3, y: 0},
    {x: 2, y: 0},
    {x: 1, y: 0},
    {x: 0, y: 0},
  ];

  // 먹이의 좌표
  this.fruit = {x: 3, y: 5};
}

SnakeGameLogic.prototype.up = function() {
  // 위쪽 화살표 키를 누르면 실행되는 함수
  this.auto = 'up'
  // this.joints.unshift({x: this.joints[0].x, y: this.joints[0].y - 1 })
  // this.joints.pop()
  console.log('up');
}

SnakeGameLogic.prototype.down = function() {
  // 아래쪽 화살표 키를 누르면 실행되는 함수
  this.auto = 'down'
  // this.joints.unshift({x: this.joints[0].x, y: this.joints[0].y + 1 })
  // this.joints.pop()
  console.log('down');
}

SnakeGameLogic.prototype.left = function() {
  // 왼쪽 화살표 키를 누르면 실행되는 함수
  this.auto = 'left'
  // this.joints.unshift({x: this.joints[0].x -1, y: this.joints[0].y })
  // this.joints.pop()
  console.log('left');

}

SnakeGameLogic.prototype.right = function() {
  // 오른쪽 화살표 키를 누르면 실행되는 함수
  this.auto = 'right'
  // this.joints.unshift({x: this.joints[0].x +1, y: this.joints[0].y })
  // this.joints.pop()
  console.log('right');
}

SnakeGameLogic.prototype.nextState = function() {
  // 한 번 움직여야 할 타이밍마다 실행되는 함수
   if(this.auto === 'right'){
    this.joints.unshift({x: this.joints[0].x +1, y: this.joints[0].y })
    // this.joints.pop()
   }
   else if(this.auto === 'left'){
    this.joints.unshift({x: this.joints[0].x -1, y: this.joints[0].y })
    // this.joints.pop()
   }
   else if( this.auto === 'down'){
    this.joints.unshift({x: this.joints[0].x, y: this.joints[0].y + 1 })
    // this.joints.pop()
   }
   else{
    this.joints.unshift({x: this.joints[0].x, y: this.joints[0].y - 1 })
    // this.joints.pop()
   }
  

  // if먹이를 만났을때는 꼬리 안떨어짐 else 꼬리 떨어짐
// if(this.fruit.x, this.fruit,y === this.joints[0].x, this.joints[0].y){
//   this.fruit={x:10, y:10}
// }
if(this.fruit.x === this.joints[0].x && this.fruit.y === this.joints[0].y ){
  this.fruit={x:10, y:10}
}
else{
  this.joints.pop()
}
  // 게임이 아직 끝나지 않았으면 `true`를 반환
  +
  // 게임이 끝났으면 `false`를 반환
  console.log(`nextState`);
  return true;
}

export default SnakeGameLogic;
