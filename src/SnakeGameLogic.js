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

  //마지막으로 누른 상태를 기억해서 자동으로 가는 상태
  this.auto = 'right'
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
  console.log(`nextState`);

  let newFruit = {}
  let newHead
  
  // 한 번 움직여야 할 타이밍마다 실행되는 함수
  
  if(this.auto === 'up'){
    newHead = {
      x: this.joints[0].x,
      y: this.joints[0].y - 1
    }
  }
  else if(this.auto === 'down'){
    newHead = { 
      x: this.joints[0].x,
      y: this.joints[0].y + 1
    }
  }
  else if(this.auto === 'right'){
    newHead = {
      x: this.joints[0].x + 1,
      y: this.joints[0].y
    }
  }
  else {
    newHead = {
      x: this.joints[0].x - 1,
      y: this.joints[0].y
    }
  }

  
  if( newHead.y >= ROWS ||newHead.y < 0 ||  
    newHead.x >= COLS || newHead.x < 0 ||  
    this.joints.some
    (joint => joint.x === newHead.x && 
     joint.y === newHead.y )){
  return false
}

if (newHead.x === this.fruit.x && newHead.y === this.fruit.y) {
  do {
    newFruit.x = Math.floor(Math.random() * COLS);
    newFruit.y = Math.floor(Math.random() * ROWS);
    this.fruit = newFruit;
  } while (
    (newFruit.x === newHead.x && newFruit.y === newHead.y) ||
    this.joints.some(
      joint => joint.x === newFruit.x && joint.y === newFruit.y
    )
  );
} else {
  this.joints.pop();
}


  //  *if(this.auto === 'right'){
  //   this.joints.unshift({x: this.joints[0].x +1, y: this.joints[0].y })
  //   // this.joints.pop()
  //  }
  //  else if(this.auto === 'left'){
  //   this.joints.unshift({x: this.joints[0].x -1, y: this.joints[0].y })
  //   // this.joints.pop()
  //  }
  //  else if( this.auto === 'down'){
  //   this.joints.unshift({x: this.joints[0].x, y: this.joints[0].y + 1 })
  //   // this.joints.pop()
  //  }
  //  else{
  //   this.joints.unshift({x: this.joints[0].x, y: this.joints[0].y - 1 })
  //   // this.joints.pop()
  //  }*
  

  // if먹이를 만났을때는 꼬리 안떨어짐 else 꼬리 떨어짐
// if(this.fruit.x, this.fruit,y === this.joints[0].x, this.joints[0].y){
//   this.fruit={x:10, y:10}
// }
// if(this.fruit.x === this.joints[0].x && 
//    this.fruit.y === this.joints[0].y ){
//  newFruit.x = Math.floor(Math.random() * (28-1)+1)
//  newFruit.y = Math.floor (Math.random() * (18-1)+1)
// this.fruit = newFruit

// }
// else{
//   this.joints.pop()
// }
// this.fruit = newFruit


  // 게임이 아직 끝나지 않았으면 `true`를 반환
  
  // 게임이 끝났으면 `false`를 반환

  //x,y 좌표가 col,row 보다 클때 죽음
  this.joints.unshift(newHead);
  return true;
}

export default SnakeGameLogic;
