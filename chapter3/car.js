const car = {
  company: "Hyundai",
  model: "Sonata",
  color: "White",
  spec: {
    fuelType: "Gasoline",
  },
  speed: 0,
  printCarInfo: function () {
    console.log(
      `안녕하세요. 저는 ${this.company}에서 만든 ${this.model}입니다.`
    );
  },
  // 악셀을 밟는 행위를 메소드로 구현
  pressAccelerator: function () {
    this.speed++;
  },
  // 브레이크를 밟는 행위를 메소드로 구현
  pressBrake: function () {
    // 속도가 음수가 될 수 없으므로 양수일때만 감속
    if (this.speed > 0) {
      this.speed--;
    }
  },
  // 현재 속도를 출력하는 메소드
  printSpeed: function () {
    console.log(`현재 속도는 ${this.speed}입니다.`);
  },
};

// 프로퍼티 출력
console.log(car.company);
console.log(car.model);

// 메서드 호출
car.printCarInfo();

// 자동차 정보 변경 후 메서드 호출
car.model = "Grandeur";
car.printCarInfo();

// 자동차 속도 증,감속
car.printSpeed();
car.pressAccelerator();
car.printSpeed();
car.pressBrake();
car.printSpeed();

// 0일때 브레이크를 밟으면 그대로 속도는 0
car.pressBrake();
car.printSpeed();
