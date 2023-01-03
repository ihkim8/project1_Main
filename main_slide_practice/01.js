/* 1- 객체 생성 */
var dog=new Object();
dog={
  /* property */
  /* key:value */
  name:"망고",
  features:"말티즈"
}; //객체 표기법은 중괄호로 감쌈
//값의 형태가 숫자가 아니면 속성 property

//arr.length arr객체에 들어있는 property인 length. arr 배열형태.
console.log(dog.name);
// document.write(dog.name);
document.write(`<h1>${dog.name}</h1>`);//백틱으로 템플릿 리터럴 사용. 
// document.write("<br>"+dog.features);

/* 2 - 객체 생성 */
const baby={name:"망고",features:"말티즈"}
document.write(`<h1>${baby.features}</h1>`);

/* 3 - method */
const pet={ //pet document
  name:"망고",
  eat:function(food){ //eat write
    //document.write(`<h1>${pet.name}는 ${food}를 좋아해요</h1>`);
    document.write(`<h1>${this.name}는 ${food}를 좋아해요</h1>`);
    //객체 안에서의 this는 객체를 가르킴. 여기서는 pet.
  }
}

pet.eat('연어')
pet.eat('닭가슴살')